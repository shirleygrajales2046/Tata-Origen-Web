import { useState } from "react";
import type { Ingredient } from "../../../models/Ingredient";

interface Props {
    onSave: (Ingredients: Ingredient) => void;
}

function RecipeForm({ onSave }: Props) {
    const [name, setName] = useState("");
    const [purchaseQuantity, setPurchaseQuantity] = useState(1);
    const [purchaseUnit, setPurchaseUnit] = useState<Ingredient["purchaseUnit"]>("Gr");
    const [purchasePrice, setPurchasePrice] = useState(0);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        onSave({
            id: crypto.randomUUID(),
            name,
            purchaseQuantity,
            purchaseUnit,
            purchasePrice,
        });

        setName("");
        setPurchaseQuantity(1);
        setPurchaseUnit("Gr");
        setPurchasePrice(0);
    }

    return (
        <form className="recipe-form" onSubmit={handleSubmit}>

            <h2>Nuevo ingrediente</h2>

            <label>Nombre</label>

            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <label>Cantidad comprada</label>

            <input
                type="number"
                value={purchaseQuantity}
                onChange={(e) => setPurchaseQuantity(Number(e.target.value))}
            />

            <label>Unidad</label>

            <select
                value={purchaseUnit}
                onChange={(e) =>
                    setPurchaseUnit(e.target.value as Ingredient["purchaseUnit"])
                }
            >
                <option value="Gr">Gramos</option>
                <option value="Kg">Kilogramos</option>
                <option value="Ml">Mililitros</option>
                <option value="L">Litros</option>
                <option value="Unidad">Unidad</option>
            </select>

            <label>Precio de compra</label>

            <input
                type="number"
                value={purchasePrice}
                onChange={(e) => setPurchasePrice(Number(e.target.value))}
            />

            <button type="submit">
                Guardar ingrediente
            </button>

        </form>
    );
}

export default RecipeForm;