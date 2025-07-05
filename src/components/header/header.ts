import { Component, ContentChild } from '@angular/core';
import { Contact } from '../contact/contact';
import {  RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

}
