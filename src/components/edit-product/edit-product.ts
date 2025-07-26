import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Products } from '../../services/products';
import { Product } from '../../models/Product ';
import { Observable, of } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  templateUrl: './edit-product.html',
  styleUrl: './edit-product.css',
  imports: [CommonModule, FormsModule, RouterLink]
})
export class EditProduct implements OnInit {
  product$!: Observable<any | null>;

  constructor(
    private route: ActivatedRoute,
    private productService: Products
  ) {}

  ngOnInit(): void {
    this.product$ = this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id');
        if (!id) return of(null);
        return this.productService.getProduct(id).pipe(
          catchError(err => {
            console.error('❌ Error loading product:', err);
            return of(null);
          })
        );
      })
    );
      // Log the product response for debugging
  this.product$.subscribe(product => {
    console.log('🧾 Product fetched:', product); // ✅ logs the response
  });
  
  }

//   ngOnInit(): void {
//   this.product$ = this.route.queryParams.pipe(
//     switchMap(params => {
//       const id = params['id']; // ✅ get from query string
//       if (!id) return of(null);
//       return this.productService.getProduct(id).pipe(
//         catchError(err => {
//           console.error('❌ Error loading product:', err);
//           return of(null);
//         })
//       );
//     })
//   );
// }


  save(product: Product) {
    this.productService.update(product); // Still untouched
  }
}
