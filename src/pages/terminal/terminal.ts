import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { SelectPage } from './../select/select';

@Component({
  selector: 'page-terminal',
  templateUrl: 'terminal.html',
})
export class TerminalPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TerminalPage');
  }

  
  presentModalSelectPage() {
    let modal = this.modalCtrl.create(SelectPage);
    modal.onDidDismiss(data => {
      if (data) {
        console.log(data);
      }

    });
    modal.present();
  }
}
