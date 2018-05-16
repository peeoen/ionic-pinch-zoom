import { Component } from '@angular/core';

/**
 * Generated class for the InputTextComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'input-text',
  templateUrl: 'input-text.html'
})
export class InputTextComponent {

  text: string;

  constructor() {
    console.log('Hello InputTextComponent Component');
    this.text = 'Hello World';
  }

}
