import { Component } from '@angular/core';
import { ClockPipe } from '../../pipes/clock-pipe';

@Component({
  selector: 'app-contact',
  imports: [ClockPipe],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  constructor() {
    console.log('📦 Contact component loaded!');
  }
}
