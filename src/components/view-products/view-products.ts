import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Products } from '../../services/products';
import { Product } from '../../models/Product ';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-products',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './view-products.html',
  styleUrl: './view-products.css'
})
export class ViewProducts implements OnInit, AfterViewInit {
  // Observable stream for product list
  productList$!: Observable<Product[]>;

  // Error flag to show fallback message if API fails
  hasError: boolean = false;

  constructor(
    private productService: Products,        // Inject product service
    private snackBar: MatSnackBar            // Inject snackbar for notifications
  ) {}

  // ✅ ngOnInit (standard Angular lifecycle hook)
  ngOnInit(): void {
    // Good place to do early initializations, flags, prechecks
     this.loadProducts();
    console.log('📦 ViewProducts ngOnInit triggered');
  }

  // ✅ ngAfterViewInit to safely load data after view has been rendered
  ngAfterViewInit(): void {
    // Use setTimeout to defer loading after initial change detection to avoid ExpressionChangedAfterItHasBeenCheckedError
    setTimeout(() => this.loadProducts());
  }

  // 🔃 Loads the products and handles errors gracefully
  loadProducts(): void {
    this.productList$ = this.productService.getProducts().pipe(
      catchError((err) => {
        console.error('❌ Error loading products:', err);
        this.hasError = true;
        return of([]); // Return empty list on error
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
  delete(id: number): void {
    if (!id) return; // Guard for invalid ID

    this.productService.deleteProduct(id.toString()).subscribe({
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
}
