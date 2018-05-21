import { Component, Input } from '@angular/core';

@Component({
  selector: 'control-input-text',
  templateUrl: 'input-text.html',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputTextComponent {

  @Input() type = 'text';
  @Input() borderPath = true;
  @Input() label = '';
  @Input() minHeight = '4.4rem';
  @Input() widthLabel = '160px';
  constructor() {

  }

}
