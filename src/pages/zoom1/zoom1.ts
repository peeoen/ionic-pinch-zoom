import { Component, ElementRef, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { Content, DomController } from 'ionic-angular';
import { PinchDirective } from './../../directives/pinch/pinch';

const MAX_SCALE = 2;
const MIN_SCALE = 1;
const BASE_SCALE = 1;

@Component({
  selector: 'page-zoom1',
  templateUrl: 'zoom1.html',
})
export class Zoom1Page {

  @ViewChildren('cell', { read: ElementRef }) cells;

  @ViewChild(PinchDirective, { read: ElementRef }) container;
  @ViewChild(Content) content: Content;

  public appointments = [];

  private scale = BASE_SCALE;
  private alreadyScaled = BASE_SCALE;

  private isScaling = false;

  private transformOriginY;
  private pinchCoords;

  private intialScrollTop = 0;
  private needsScrolling = false;
  private isScrolling = false;

  private totalScaled = BASE_SCALE;
  private containerOffset = 0;

  constructor(

    public renderer: Renderer2,
    private domCtrl: DomController

  ) {

    // add some mockdata, irrelevant method
    this.initData();

  }

  public ionViewDidEnter(): void {

    // the container can have an offset, due to e.g. an ion-header
    // if your view is more complicated, adjust it here
    this.containerOffset = this.container.nativeElement.getBoundingClientRect().top;

  }

  public onPinchStart(e) {
    console.log(JSON.stringify(e));
    // prevent pinch(move) gesture if scrolling is in process
    this.isScrolling = this.content.isScrolling;

    // set the flag, this sets CSS .disable-scrolling class
    this.isScaling = true;

    // calculate the pinch midpoint, it is subsequently used to set the transform-origin
    this.pinchCoords = this.getPinchingCoords(e);

    // get the scrollTop from the content; to calcuate the effective transform-origin Y position and
    // scroll to the correct position when the pinch ends
    this.intialScrollTop = this.content.getContentDimensions().scrollTop;

    // calculate the transform-origin Y coordiate in pixels
    this.transformOriginY = this.pinchCoords.y + this.intialScrollTop - this.containerOffset;

  }


  public onPinchMove(e) {

    // do nothing if we are still scrolling
    if (this.isScrolling) {
      return;
    }

    // if we pinch(moved) even a little we need to adjust the scrollposition, set the flag
    this.needsScrolling = true;

    // if we scale multiple times (e.g. small portions) we need to track the total
    // amount we scaled already
    this.totalScaled = this.alreadyScaled * e.scale;

    // did we hit the max scale (pinch out)
    if (this.totalScaled >= MAX_SCALE) {

      // set the scale by calculating it, don't use e.scale
      // scenario: an insane quick pinch out will result in a large e.scale,
      // larger than "allowed"
      this.scale = MAX_SCALE / this.alreadyScaled;

      // did we hit the min scale (pinch in)
    } else if (this.totalScaled <= MIN_SCALE) {

      // set the scale
      this.scale = MIN_SCALE / this.alreadyScaled;

    } else {

      // just adjust the scale according to the movement of the fingers
      this.scale = e.scale;
    }

    // calculate the negative scale, this to adjust the child elements to correct
    let negativeScale = 1 / this.scale;

    this.domCtrl.write(() => {

      // update the parent
      this.renderer.setStyle(this.container.nativeElement, 'transform-origin', `0px ${this.transformOriginY}px 0px`);
      this.renderer.setStyle(this.container.nativeElement, 'transform', `scaleY(${this.scale})`);

      this.cells.forEach(div => {

        // for each child element, use the invert scale to 'revert' the parent scale
        this.renderer.setStyle(div.nativeElement, 'transform-origin', `0px 0px 0px`);
        this.renderer.setStyle(div.nativeElement, 'transform', `scaleY(${negativeScale})`);

      });

    });


  }


  public onPinchEnd(e) {

    // we are not scaling again
    this.isScaling = false;

    // adjust the total amount we scaled
    this.alreadyScaled = this.scale * this.alreadyScaled;

    // calculate the effective scaled amout (substracting the base scale)
    let scaleChange = this.scale - BASE_SCALE;

    // calculate to which point we need to scroll
    let scrollTo = this.intialScrollTop + (scaleChange * this.transformOriginY);

    this.domCtrl.write(() => {

      // finalize the height for each child element. removing the transform properties
      this.cells.forEach(div => {

        // calcualte the transformed height, and set it as an inline style
        // we "finalize" the height, and remove any transform (scale) traces
        let height = div.nativeElement.getBoundingClientRect().height;

        this.renderer.removeStyle(div.nativeElement, 'transform');
        this.renderer.setStyle(div.nativeElement, 'height', `${height * this.scale}px`);
      });

      // also remove the transform origin from the parent, this makes the parent stick to
      // the top of the view, so we can scroll the whole content
      this.renderer.removeStyle(this.container.nativeElement, 'transform-origin');
      this.renderer.removeStyle(this.container.nativeElement, 'transform');

      // if we did trigger the pinchmove, we need to scroll to the position we had in view
      // at the point we started the pinching
      if (this.needsScrolling) {

        this.needsScrolling = !this.needsScrolling;

        // we include the scrollTo within the .write(() =>) otherwise the "rendering" can
        // be still in progress whilst performing the scroll, which leads to a wrong position
        this
          .content
          .scrollTo(0, scrollTo, 0);

      }

    });

  }


  // compute the coords of the pinch
  private getPinchingCoords(e) {

    let arr = [], coords: any = {};

    for (let i = 0, j = e.touches.length; i < j; i++) {

      let finger = e.touches[i];
      arr.push(finger.clientX, finger.clientY);

    }

    coords.x = Math.floor((arr[0] + arr[2]) / 2);
    coords.y = Math.floor((arr[1] + arr[3]) / 2);

    return coords;

  }


  // mockdata, replace it with your own...
  private initData() {

    let today = new Date();
    today.setHours(0, 0, 0, 0);

    let titles = ["Birthday sister", "Dinner with friends"];
    let details = ["Do not forget the present, and make be on time, you know the surprise party we're throwing? Also, bring the champane she loves it. We need more lines though to reveal. Lets try adding some...",
      "Dress code: none, does that mean I don't wear anything? Maybe that reindeer sweater, it looks nice, yea, wear that one. Maybe it's to early to show up in it, but slash care. No dress code..."]

    for (let i = 0, len = 23; i <= len; i++) {

      let start = today.setHours(i);
      let hasAppointment = false;

      let title = "";
      let detail = "";

      if (i === 14 || i === 18) {

        hasAppointment = true;
        title = titles[i === 14 ? 0 : 1];
        detail = details[i === 14 ? 0 : 1];

      }

      this.appointments.push({

        start: start,
        hasAppointment: hasAppointment,
        title: title,
        details: detail

      });

    }

  }


}
