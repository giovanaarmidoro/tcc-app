import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';

/**
 * Generated class for the IniciarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'iniciar'
})
@Component({
  selector: 'page-iniciar',
  templateUrl: 'iniciar.html',
})
export class IniciarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IniciarPage');
  }

  abrirHome() {
    this.navCtrl.push(HomePage);
  } 
  abrirConfiguracoes() {
    this.navCtrl.push('configuracoes');
  } 

  abrirRandomica() {
    this.navCtrl.push('atividade-randomica');
  } 

  abrirConfiguravel() {
    this.navCtrl.push('atividade-configuravel');
  } 

}
