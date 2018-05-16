import { Component } from '@angular/core';

@Component({
  selector: 'terminal-2',
  templateUrl: 'terminal-2.html'
})
export class Terminal_2Component {
  nums: number[] = []

  constructor() {
    for(let i=0; i<=20;i++){
      this.nums.push(i);
    }
  }
}
