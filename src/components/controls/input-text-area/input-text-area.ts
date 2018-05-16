import { Component } from '@angular/core';

/**
 * Generated class for the InputTextAreaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'control-input-text-area',
  templateUrl: 'input-text-area.html'
})
export class InputTextAreaComponent {

  text: string;

  constructor() {
    console.log('Hello InputTextAreaComponent Component');
    this.text = 'Hello World';
  }

}
