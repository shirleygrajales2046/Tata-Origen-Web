import type { Product } from "../../../models/Products";
import { FaEdit, FaTrash } from "react-icons/fa";

interface Props {
    products: Product[];
    onDelete: (id: string) => void;
}

function ProductTable({ products, onDelete }: Props) {
    return (
        <table className="product-table">
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Categoría</th>
                    <th>Rendimiento</th>
                    <th>Acciones</th>
                </tr>
            </thead>

            <tbody>
                {products.length === 0 ? (
                    <tr>
                        <td colSpan={4}>No hay productos registrados.</td>
                    </tr>
                ) : (
                    products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.name}</td>

                            <td>{product.category}</td>

                            <td>{product.yield} unidades</td>

                            <td>
                                <button
                                    className="icon-btn"
                                    title="Editar producto"
                                >
                                    <FaEdit />
                                </button>

                                <button
                                    className="icon-btn delete"
                                    title="Eliminar producto"
                                    onClick={() => onDelete(product.id)}
                                >
                                    <FaTrash />
                                </button>
                            </td>
                        </tr>
                    ))
                )}
            </tbody>
        </table>
    );
}

export default ProductTable;