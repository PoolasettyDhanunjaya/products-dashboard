import { Component, ContentChild } from '@angular/core';
import { Contact } from '../contact/contact';
import {  RouterLink } from '@angular/router';
import { ClockPipe } from '../../pipes/clock-pipe';

@Component({
  selector: 'app-header',
  imports: [ClockPipe],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

}
