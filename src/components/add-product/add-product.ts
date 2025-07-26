import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Products } from '../../services/products';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import Stream from 'node:stream';
import { stringify } from 'node:querystring';
import { json } from 'node:stream/consumers';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [ReactiveFormsModule, MatSnackBarModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css'
})
export class AddProduct implements OnInit {
  productForm!: FormGroup;
  ar : number[]=[1,2,3,4,5,6];
    br : number[]=[1,2,3,4,5,6];

  constructor(private fb: FormBuilder , private productService: Products, private snackBar: MatSnackBar, private router: Router) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
  id: [''], // 👈 Added id (no validators)
  productName: ['', Validators.required],
  price: ['', [Validators.required, Validators.min(1)]],
  description: ['', Validators.required],
  category: ['', Validators.required]
  
});
  // console.log(null==undefined);
  // console.log(JSON.stringify(this.ar)==JSON.stringify(this.br));
  }
  onSubmit(): void {
    if (this.productForm.valid) {
      this.productForm.patchValue({ id: this.generateGuid() });
      const newProduct = this.productForm.value;
      this.productService.addProduct(newProduct);
      this.showSuccessMessage();
      this.productForm.reset();
      this.router.navigate(['/products']); // ✅ redirect to Products
    }
  }

  
  clearForm(): void {
      this.productForm.reset(); 
  }


    showSuccessMessage() {
    this.snackBar.open('✅ 1 document(s) added to cart successfully', 'Close', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['success-snackbar']
    });
  }

  generateGuid(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = Math.random() * 16 | 0;
    const v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

}
