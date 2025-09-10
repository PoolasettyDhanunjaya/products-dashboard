import { Component, OnInit ,Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Products } from '../../services/products';
import { Product } from '../../models/Product ';
import { Observable, of } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';
import { GreetingPipe } from '../../pipes/greeting-pipe';

@Component({
  selector: 'app-viewitem',
  imports: [RouterLink, CommonModule, GreetingPipe],
  templateUrl: './viewitem.html',
  styleUrl: './viewitem.css'
})
export class Viewitem  implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: Products
  ) {}

viewItem: Product  | undefined;

    ngOnInit(): void {
      // this.product$ = this.route.paramMap.pipe(
      //   switchMap(params => {
      //     const id = params.get('id');
      //     if (!id) return of(null);
      //     return this.productService.getProduct(id).pipe(
      //       catchError(err => {
      //         console.error('❌ Error loading product:', err);
      //         return of(null);
      //       })
      //     );
      //   })
      // );
      //this.product$ = this.item;

      this.product =this.productService.productView ;
        // Try memory first
      this.product = this.productService.productView;

  // If memory is lost (refresh case), fallback to localStorage
  if (!this.product) {
    const productJson = localStorage.getItem('productView');
    if (productJson) {
      this.product = JSON.parse(productJson);
    } else {
      console.warn('❌ Product not found in service or localStorage.');
    }
  }
    }  
    
}
