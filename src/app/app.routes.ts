import { Routes } from '@angular/router';
import { Contact } from '../components/contact/contact';
import { App } from './app';
import { AddProduct } from '../components/add-product/add-product';
import { ViewProducts } from '../components/view-products/view-products';
import { EditProduct } from '../components/edit-product/edit-product';
import { Viewitem } from '../components/viewitem/viewitem';

export const routes: Routes = [
  { path: '', component: AddProduct },
  { path: 'contact', component : Contact },
  { path: 'products', component : ViewProducts },
  { path: 'edit-product/:id', component: EditProduct },
  { path: 'view-product/:id', component: Viewitem }
];
