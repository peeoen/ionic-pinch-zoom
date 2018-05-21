import { Component, Input } from '@angular/core';

@Component({
  selector: 'control-radio',
  templateUrl: 'radio.html',
})
export class RadioComponent {

  @Input() name: string;
  @Input() value: any;


  // _name: string;
  // get name(): string {
  //   return this._name;
  // }

  // @Input('name')
  // set name(value: string) {
  //   this._name = value;
  //   console.log('name change.',value)
  // }

  constructor() {

  }

}

