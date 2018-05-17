import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

/**
 * Generated class for the InputTextAreaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'control-input-text-area',
  templateUrl: 'input-text-area.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputTextAreaComponent {

  @Input() borderPath = true;
  @Input() rows = 1;
  constructor() {

  }

}
