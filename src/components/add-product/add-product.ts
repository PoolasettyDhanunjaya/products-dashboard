import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Products } from '../../services/products';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [ReactiveFormsModule, MatSnackBarModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css'
})
export class AddProduct implements OnInit {
  productForm!: FormGroup;
  router: any;

  constructor(private fb: FormBuilder, private productService: Products, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
  id: [''], // 👈 Added id (no validators)
  productName: ['', Validators.required],
  price: ['', [Validators.required, Validators.min(1)]],
  description: ['', Validators.required],
  category: ['', Validators.required]
});

    
  }
  onSubmit(): void {
    if (this.productForm.valid) {
      this.productForm.patchValue({ id: this.generateGuid() });
      const newProduct = this.productForm.value;
      this.productService.addProduct(newProduct);
      this.showSuccessMessage();
      this.productForm.reset();
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
