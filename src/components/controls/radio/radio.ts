import { Component } from '@angular/core';

/**
 * Generated class for the RadioComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'control-radio',
  templateUrl: 'radio.html'
})
export class RadioComponent {

  text: string;

  constructor() {
    console.log('Hello RadioComponent Component');
    this.text = 'Hello World';
  }

}
