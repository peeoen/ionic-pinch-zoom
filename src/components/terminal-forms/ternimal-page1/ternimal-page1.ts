import { Component, ChangeDetectionStrategy } from '@angular/core';

/**
 * Generated class for the TernimalPage1Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ternimal-page1',
  templateUrl: 'ternimal-page1.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TernimalPage1Component {

  text: string;

  constructor() {
    console.log('Hello TernimalPage1Component Component');
    this.text = 'Hello World';
  }

}
