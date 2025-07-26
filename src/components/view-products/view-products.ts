import { Component, OnInit, AfterViewInit, Input, Query } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Products } from '../../services/products';
import { Product } from '../../models/Product ';
import { MatSnackBar } from '@angular/material/snack-bar';
import id from '@angular/common/locales/id';
import { Viewitem } from '../viewitem/viewitem';

@Component({
  selector: 'app-view-products',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './view-products.html',
  styleUrl: './view-products.css'
})
export class ViewProducts implements OnInit {
  // Observable stream for product list
  productList$!: Observable<Product[]>;
  error : string = "" ;

  // Error flag to show fallback message if API fails
  hasError: boolean = false;
  selectedProduct$: any | undefined;
  constructor(
    private productService: Products,        // Inject product service
    private snackBar: MatSnackBar,            // Inject snackbar for notifications
    private router: Router
  ) {}

  // ✅ ngOnInit (standard Angular lifecycle hook)
  ngOnInit(): void {
    // Good place to do early initializations, flags, prechecks
     this.loadProducts();
    console.log('📦 ViewProducts ngOnInit triggered');
  }

  // ✅ ngAfterViewInit to safely load data after view has been rendered
  // ngAfterViewInit(): void {
  //   // Use setTimeout to defer loading after initial change detection to avoid ExpressionChangedAfterItHasBeenCheckedError
  //   setTimeout(() => this.loadProducts());
  // }

loadProducts(): void {
  this.productList$ = this.productService.getProducts().pipe(
    map((res) => {
      console.log('📦 Raw product response:', res);
      return Object.values(res); // ✅ Convert object to array
    }),
    catchError((err) => {
      console.error('❌ Error loading products:', err);
      this.error = err;
      return of([]); // Return empty array on error
    })
  );
}

  // ✅ Show success message when a product is deleted
  showSDeleteMessage(): void {
    this.snackBar.open('✅ Product deleted successfully', 'Close', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['error-snackbar'] // Optional: add custom style
    });
  }

  // 🗑️ Delete a product and reload list
  delete(id: string): void {
    if (!id) return; // Guard for invalid ID

    this.productService.deleteProduct(id).subscribe({
      next: () => {
        this.showSDeleteMessage();   // Show success message
        this.loadProducts();         // Refresh product list after delete
      },
      error: (err) => {
        console.error('❌ Error deleting product:', err);
        this.snackBar.open('❌ Failed to delete product', 'Close', {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
          panelClass: ['error-snackbar'] // Optional: red snackbar
        });
      }
    });
  }

  view(item:Product):void{
      this.productService.setProductForView(item);
        localStorage.setItem('productView', JSON.stringify(item));

  }

  edit(id: string): void {
  this.router.navigate(['/edit-product', id]);
}

}
