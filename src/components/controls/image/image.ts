import { Component, Input } from '@angular/core';


@Component({
  selector: 'control-image',
  templateUrl: 'image.html'
})
export class ImageComponent {

  @Input() src: string;
  @Input() height: string;
  @Input() width: string;
  constructor() {

  }

}
