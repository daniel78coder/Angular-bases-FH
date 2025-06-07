import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
<strong>Counter: {{ counter }}</strong>
<button class="btn btn-primary" (click)="increaseBy(+1)">+ 1</button>
<button class="btn btn-warning" (click)="resetCounter()">Reset</button>
<button class="btn btn-primary" (click)="increaseBy(-1)">- 1</button>
`

})

export class CounterComponent {
  constructor() {}

  public counter: number = 0;



  increaseBy(value: number): void {
    this.counter += value;
  }

  resetCounter(): void {
    this.counter = 0;
  }
}

