import { Component } from '@angular/core';

/**
 * Generated class for the CheckboxComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'control-checkbox',
  templateUrl: 'checkbox.html'
})
export class CheckboxComponent {

  text: string;

  constructor() {
    console.log('Hello CheckboxComponent Component');
    this.text = 'Hello World';
  }

}
