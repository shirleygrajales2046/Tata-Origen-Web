export interface Ingredient {
    id: string;
    name: string;
    purchasePrice: number;
    purchaseQuantity: number;
    unit: "Gr" | "Kg" | "ml" | "L" | "Unidad";
}