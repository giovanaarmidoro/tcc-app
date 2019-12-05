import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';

/**
 * Generated class for the LuminosidadePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'luminosidade'
})
@Component({
  selector: 'page-luminosidade',
  templateUrl: 'luminosidade.html',
})
export class LuminosidadePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LuminosidadePage');
  }

  abrirHome() {
    this.navCtrl.push(HomePage);
  } 
  abrirConfiguracoes() {
    this.navCtrl.push('configuracoes');
  } 

}
