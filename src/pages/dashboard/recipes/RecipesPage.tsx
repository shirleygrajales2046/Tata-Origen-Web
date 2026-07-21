import { useState } from "react";

import RecipeForm from "./RecipeForm";
import IngredientTable from "./IngredientTable";

import type { Ingredient } from "../../../models/Ingredient";

function RecipesPage() {

    const [ingredients, setIngredients] = useState<Ingredient[]>([]);

    function addIngredient(ingredient: Ingredient) {
        setIngredients((prev) => [...prev, ingredient]);
    }

    return (
        <div className="recipes-page">
            <div className="recipes-header">
                <h1>Ingredientes</h1>
                <p>
                    Administra todos los ingredientes que utilizarán tus recetas.
                </p>
            </div>

            <div className="recipes-grid">
                <RecipeForm onSave={addIngredient} />
                <IngredientTable ingredients={ingredients} />
            </div>
        </div>
    );
}

export default RecipesPage;