import { useState } from "react";
import type { Product } from "../../../models/Products";

interface Props {
    onSave: (product: Product) => void;
}

function ProductForm({ onSave }: Props) {
    const [name, setName] = useState("");
    const [category, setCategory] = useState<Product["category"]>("Alfajores");
    const [description, setDescription] = useState("");
    const [yieldQuantity, setYieldQuantity] = useState(1);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newProduct: Product = {
            id: crypto.randomUUID(),
            name,
            category,
            description,
            yield: yieldQuantity,
        };

        onSave(newProduct);

        setName("");
        setCategory("Alfajores");
        setDescription("");
        setYieldQuantity(1);
    };

    return (
        <form className="product-form" onSubmit={handleSubmit}>
            <h2>Nuevo producto</h2>

            <label>Nombre</label>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />

            <label>Categoría</label>
            <select
                value={category}
                onChange={(e) =>
                    setCategory(e.target.value as Product["category"])
                }
            >
                <option>Alfajores</option>
                <option>Galletas</option>
                <option>Postres</option>
                <option>Mesa de postres</option>
            </select>

            <label>Descripción</label>
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <label>¿Cuántas unidades produce esta receta?</label>
            <input
                type="number"
                min={1}
                value={yieldQuantity}
                onChange={(e) => setYieldQuantity(Number(e.target.value))}
            />

            <button type="submit">
                Guardar producto
            </button>
        </form>
    );
}

export default ProductForm;