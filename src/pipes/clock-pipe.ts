import { Pipe, PipeTransform, ChangeDetectorRef } from '@angular/core';

@Pipe({
  name: 'clock',
  pure: false // so transform() is called on every change detection
})
export class ClockPipe implements PipeTransform {
  private currentTime: string = '';
  private intervalId: any;

  constructor(private cdr: ChangeDetectorRef) {
    this.startClock();
  }

  transform(_: any): string {
    return this.currentTime;
  }

  private startClock() {
    this.updateTime();
    this.intervalId = setInterval(() => {
      this.updateTime();
      this.cdr.markForCheck(); // manually tell Angular to re-render
    }, 1000);
  }

  private updateTime() {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString();
  }
}
