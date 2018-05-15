import { Component, ViewChild } from '@angular/core';
import { Gesture, NavController, NavParams, Platform, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('image') element;
  @ViewChild('imageParent') elementParent;
  showControls
  image = null;
  scale = 1;
  container = null;
  transforms = [];
  adjustScale = 1;
  adjustDeltaX = 0;
  adjustDeltaY = 0;

  currentScale = null;
  currentDeltaX = null;
  currentDeltaY = null;

  public media: any;
  public src: string;
  public mediaType: string;
  private gesture: Gesture;
  public mediaLoaded:boolean = false;
  constructor(
    public platform: Platform,
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    private navParams : NavParams,
    
  ) {

  }

  setMediaLoaded (){

  }

  ionViewDidLoad() {

  }


  closeModal() {
    this.viewCtrl.dismiss();
  }

  afterZoomIn(event) {
    console.log(event);
  }

  afterZoomOut(event) {
    console.log(event);
  }
}
