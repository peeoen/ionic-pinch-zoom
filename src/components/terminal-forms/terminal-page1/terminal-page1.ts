import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'terminal-page1',
  templateUrl: 'terminal-page1.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TernimalPage1Component {

  text: string;

  constructor() {
    console.log('Hello TernimalPage1Component Component');
    this.text = 'Hello World';
  }

}
