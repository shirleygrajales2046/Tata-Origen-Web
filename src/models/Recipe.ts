export interface Ingredient {
    id: string
    name: string
    quantity: number
    unit: string
    purchasePrice: number
    purchaseQuantity: number
}

export interface Recipe {
    id: string
    name: string
    category: "Alfajores" | "Galletas" | "Postres" | "Tortas"
    yield: number
    ingredients: Ingredient[]
    packagingCost: number
    laborCost: number
}