// src/app/models/product.model.ts

export interface Product {
  id?: string; // optional for new products
  productName: string;
  price: number;
  description: string;
  category: string;
}
