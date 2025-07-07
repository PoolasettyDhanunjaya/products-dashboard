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
  selector: 'app-viewitem',
  imports: [RouterLink, CommonModule],
  templateUrl: './viewitem.html',
  styleUrl: './viewitem.css'
})
export class Viewitem  implements OnInit {
  product$!: Observable<Product | null>;

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
    }

}
