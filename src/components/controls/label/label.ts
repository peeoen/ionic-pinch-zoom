import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'control-label',
  templateUrl: 'label.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LabelComponent {

  @Input() fontWeight = 'normal';
  @Input() fontSize = '18px';
  @Input() underline = false;
  @Input() align = 'left';
  @Input() text = '';
  
  constructor() {

  }

  getLabelStyle() {
    const styles = {
      'font-size': this.fontSize,
      'font-weight': this.fontWeight,
      'text-decoration': this.underline ? 'underline': 'none',
      'text-align': this.align
    };
    return styles;
  }

}
