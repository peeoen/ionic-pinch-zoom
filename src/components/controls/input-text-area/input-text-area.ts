import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

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
