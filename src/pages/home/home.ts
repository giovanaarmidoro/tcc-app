import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { LoginPage } from '../login/login';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  private alunoSelecionado: any = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadCtrl: LoadingController, private storage: Storage) {
    const loader = this.loadCtrl.create({
      content: "Carregando..."
    });
    loader.present()


    this.storage.get('alunoSelecionado').then(data => {
      loader.dismiss();
      this.alunoSelecionado = data;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  abrirLogin() {
    this.navCtrl.push('login');
  } 

  abrirCadastro() {
    this.navCtrl.push('cadastro');
  } 

  abrirConfiguracoes() {
    if (!this.alunoSelecionado) {
      this.navCtrl.push('login', { intended: 'configuracoes' });
    } else {
      this.navCtrl.push('configuracoes');
    }
  } 

  abrirIniciar() {
    if (!this.alunoSelecionado) {
      this.navCtrl.push('login', { intended: 'iniciar' });
    } else {
      this.navCtrl.push('iniciar');
    }
  } 

}
