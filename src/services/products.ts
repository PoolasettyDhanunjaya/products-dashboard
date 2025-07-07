import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/Product ';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Products {

  private productList: Product[] = []; // Local cache

  constructor(private http: HttpClient) {}

  // ✅ Add product to backend
  addProduct(product: Product): void {
    this.http.post('https://localhost:44351/api/Product/CreateProduct', product)
      .subscribe({
        next: (res) => console.log('✅ Product added:', res),
        error: (err) => console.error('❌ Error adding product:', err)
      });
  }

getProducts(): Observable<Product[]> {
  return this.http.get<Product[]>('https://localhost:44351/api/Product/GetProducts');
}


  // ✅ Set local cache (used for getProduct)
  setLocalProducts(products: Product[]): void {
    this.productList = products;
  }

getProduct(id: string): Observable<Product> {
  const url = `https://localhost:44351/api/Product/GetProductById?id=`+id;
  return this.http.get<Product>(url);
}

  // ✅ Update product in backend
  update(product: Product): void {
    const index = this.productList.findIndex(p => p.id === product.id);
    if (index !== -1) {
      this.productList[index] = product;
    }
    this.http.post('https://localhost:44351/api/Product/UpdateProduct', product)
      .subscribe({
        next: () => console.log('✅ Product updated'),
        error: (err) => console.error('❌ Error updating product', err)
      });
  }

// ✅ Inside products.service.ts
deleteProduct(id: string): Observable<any> {
  const url = `https://localhost:44351/api/Product/DeleteById?id=${id}`;
  return this.http.get(url); // ✅ Use DELETE
}

}
