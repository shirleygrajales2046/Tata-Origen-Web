export interface Ingredient {
    id: string;
    name: string;
    purchasePrice: number;
    purchaseQuantity: number;
    purchaseUnit: "Gr" | "Kg" | "ml" | "L" | "Unidad";
    supplier?: string;
}