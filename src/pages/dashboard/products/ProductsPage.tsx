import { useState } from "react";
import type { Product } from "../../../models/Products";

import ProductForm from "./ProductForm";
import ProductTable from "./ProductTable";

function ProductsPage() {
    const [products, setProducts] = useState<Product[]>([]);

    function addProduct(product: Product) {
        setProducts((previous) => [...previous, product]);
    }

    function deleteProduct(id: string) {
        setProducts((previous) =>
            previous.filter((product) => product.id !== id)
        );
    }

    return (
        <div className="products-page">
            <h1>Productos</h1>

            <p>Administra todos los productos de Tata Origen.</p>

            <ProductForm onSave={addProduct} />

            <ProductTable
                products={products}
                onDelete={deleteProduct}
            />
        </div>
    );
}

export default ProductsPage;