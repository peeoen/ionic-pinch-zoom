import { Component } from '@angular/core';
import { NavParams, Platform, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-select',
  templateUrl: 'select.html',
})
export class SelectPage {

  character;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {

  }

  dismiss() {
    let data = { 'foo': 'bar' };
    this.viewCtrl.dismiss(data);
  }

  goToPage(page) {
    this.viewCtrl.dismiss(page);
  }

}
