export interface RecipeIngredient {
    ingredientId: string;
    quantityUsed: number;
}

export interface Recipe {
    id: string;
    productId: string;
    ingresdients: RecipeIngredient[];
}