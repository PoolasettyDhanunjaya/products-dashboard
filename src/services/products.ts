import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/Product ';
import { catchError, Observable, retry, tap, throwError } from 'rxjs';
import { error } from 'node:console';

@Injectable({
  providedIn: 'root'
})
export class Products {

   productView: Product | undefined; 

  constructor(private http: HttpClient) {}

  // ✅ Add product to backend
  addProduct(product: Product): void {
    this.http.post('https://localhost:7136/api/Product/CreateProduct', product)
      .subscribe({
        next: (res) => console.log('✅ Product added:', res),
        error: (err) => console.error('❌ Error adding product:', err)
      });
  }

// getProducts(): Observable<Product[]> {
//   console.log('🔥 API CALL: GetProducts triggered');

//   return this.http.get<Product[]>('https://localhost:7136/api/Product/GetProducts').pipe(
//     retry(3),  // 🔁 Retry 3 times in case of error
//     catchError(error => {
//       console.error(`❌ Error occurred in getProducts:`, error);
//       return throwError(() => new Error('Failed to fetch products from server'));
//     })
//   );
// }
getProducts(): Observable<Product[]> {
  console.log('🔥 API CALL STARTED');

  return this.http.get<Product[]>('https://localhost:7136/api/Product/GetProducts').pipe(
    tap(() => console.log('📡 Attempting HTTP call...')),
    retry(3),  // will retry 3 times (i.e., total 4 attempts max)
    catchError(error => {
      console.error('❌ Final failure after retries:', error);
      return throwError(() => new Error('Failed after retries'));
    })
  );
}

  // ✅ used for getProduct
  setProductForView(product: Product): void {
    this.productView = product;
  }

getProduct(id: string): Observable<Product> {
  const url = `https://localhost:7136/api/Product/GetProductById?id=`+id;
  return this.http.get<Product>(url).pipe(
    retry(3), 
    catchError(error=>{console.log(error); return throwError(()=>new Error('fail'));})
);
}

  // ✅ Update product in backend
  update(product: Product): void {
    this.http.post('https://localhost:7136/api/Product/UpdateProduct', product)
      .subscribe({
        next: () => console.log('✅ Product updated'),
        error: (err) => console.error('❌ Error updating product', err)
      });
  }

// ✅ Inside products.service.ts
deleteProduct(id: string): Observable<any> {
  const url = `https://localhost:7136/api/Product/DeleteById?id=${id}`;
  return this.http.get(url); // ✅ Use DELETE
}

}
