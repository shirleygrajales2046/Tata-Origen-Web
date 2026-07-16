function IngredientTable(){
    return (
        <div className="ingredients-card">
            <h2>Ingredientes</h2>

            <table>
                <thead>
                    <tr>
                        <th>Ingredientes</th>
                        <th>Cantidad</th>
                        <th>Unidad</th>
                        <th>Precio compra</th>
                        <th>Cantidad comprada</th>
                        <th>Costo usado</th>
                    </tr>
                </thead>

                <tbody>
                    <td colSpan={6}>
                        Aqui apareceran los ingredientes
                    </td>
                </tbody>
            </table>
        </div>
    );
}

export default IngredientTable;