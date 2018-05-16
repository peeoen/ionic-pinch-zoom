import { Component } from '@angular/core';

/**
 * Generated class for the Terminal_3Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'terminal-3',
  templateUrl: 'terminal-3.html'
})
export class Terminal_3Component {

  text: string;

  constructor() {
    console.log('Hello Terminal_3Component Component');
    this.text = 'Hello World';
  }

}
