import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';

/**
 * Generated class for the ConfiguracoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'configuracoes'
})
@Component({
  selector: 'page-configuracoes',
  templateUrl: 'configuracoes.html',
})
export class ConfiguracoesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfiguracoesPage');
  }

  abrirHome() {
    this.navCtrl.push(HomePage);
  } 
  abrirConfiguracoes() {
    this.navCtrl.push('configuracoes');
  } 

  abrirSom() {
    this.navCtrl.push('som');
  } 
  abrirPaletas() {
    this.navCtrl.push('paletas');
  } 
  abrirLuminosidade() {
    this.navCtrl.push('luminosidade');
  } 
  abrirRecompensas() {
    this.navCtrl.push('recompensas');
  } 

}
