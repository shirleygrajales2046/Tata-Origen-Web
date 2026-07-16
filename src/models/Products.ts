export interface Product {
    id: string;
    name: string;
    category: "Alfajores" | "Galletas" | "Postres" | "Mesa de postres";
    description: string;
    yield: number;
    image?: string;
}