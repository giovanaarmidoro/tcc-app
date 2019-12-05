import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';

/**
 * Generated class for the PaletasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'paletas'
})
@Component({
  selector: 'page-paletas',
  templateUrl: 'paletas.html',
})
export class PaletasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaletasPage');
  }

  abrirHome() {
    this.navCtrl.push(HomePage);
  } 
  abrirConfiguracoes() {
    this.navCtrl.push('configuracoes');
  } 

}
