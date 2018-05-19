import { Component, Input } from '@angular/core';

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

  @Input() name: string;
  @Input() value: any;

  constructor() {

  }



}

