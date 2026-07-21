import type { Ingredient } from "../../../models/Ingredient";

interface Props {
    ingredients: Ingredient[];
}

function IngredientTable({ ingredients }: Props) {
    return (
        <div className="ingredients-card">
            <h2>Ingredientes</h2>

            <button className="add-button">
                Nuevo ingrediente
            </button>

            <table>
                <thead>
                    <tr>
                        <th>Ingrediente</th>
                        <th>Cantidad</th>
                        <th>Unidad</th>
                        <th>Precio compra</th>
                        <th>Cantidad comprada</th>
                        <th>Costo usado</th>
                    </tr>
                </thead>

                <tbody>
                    {ingredients.length === 0 ? (
                        <tr>
                            <td colSpan={6}>
                                No hay ingredientes registrados.
                            </td>
                        </tr>
                    ) : (
                        ingredients.map((ingredient) => (
                            <tr key={ingredient.id}>
                                <td>{ingredient.name}</td>

                                <td>{ingredient.purchaseQuantity}</td>

                                <td>{ingredient.purchaseUnit}</td>

                                <td>
                                    ${ingredient.purchasePrice.toLocaleString("es-CO")}
                                </td>

                                <td>{ingredient.purchaseQuantity}</td>

                                <td>$0</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default IngredientTable;