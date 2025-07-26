import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'greeting'
})
export class GreetingPipe implements PipeTransform {

  transform(value: string): string {
    const currentHour = new Date().getHours();

    let greeting = '';
    if (currentHour < 12) {
      greeting = 'Hello, Good Morning';
    } else if (currentHour < 17) {
      greeting = 'Hello, Good Afternoon';
    } else {
      greeting = 'Hello, Good Evening';
    }

    return `${greeting} ${value}`;
  }

}
