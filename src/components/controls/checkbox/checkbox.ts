import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CheckboxModel } from './../../../app/models/checkbox';

@Component({
  selector: 'control-checkbox',
  templateUrl: 'checkbox.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxComponent {

  @Input() data: CheckboxModel [] = [];
  @Input() inline: boolean = false;

  constructor() {
    
  }

}
