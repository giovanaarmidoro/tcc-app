import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AppState } from '../../app/app.global';

import { HomePage } from '../home/home';

/**
 * Generated class for the CadastroPreferenciasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'cadastro-preferencias'
})
@Component({
  selector: 'page-cadastro-preferencias',
  templateUrl: 'cadastro-preferencias.html',
})
export class CadastroPreferenciasPage {

  private dados: any = null;
  private configuracoes: any = {
    som: null,
    cor: null,
    luz: null
  }
  private alunos: any = null;
  private corInput: any = null;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public global: AppState,
    private storage: Storage,
    public event: Events) {

  }

  ionViewDidLoad() {
    this.dados = this.navParams.get('dados');

    this.storage.get('alunos').then((alunos) => {
      this.alunos = alunos;
    });
  }

  abrirHome() {
    this.navCtrl.push(HomePage);
  }

  abrirConfiguracoes() {
    this.navCtrl.push('configuracoes');
  }

  salvarConfiguracoes() {
    this.configurarCor();
    this.alunos.push({ ...this.dados, ...this.configuracoes });
    this.storage.set('alunos', this.alunos);
    this.alertSucesso();
  }

  // configurar intensidade do som
  configurarSom() {
    console.log('configurando som: ' + this.configuracoes.som);
  }

  // configurar instensidade do brilho
  configurarLuz() {
    console.log('configurando luz: ' + this.configuracoes.luz);
  }

  configurarCor() {
    if (this.corInput >= 8) {
      this.configuracoes.cor = "colorida";
    } else if (this.corInput >= 8 && this.configuracoes.luz < 5) {
      this.configuracoes.cor = "pastel";
    } else if (this.corInput >= 5 && this.corInput <= 7) {
      this.configuracoes.cor = "monocromarica";
    } else if (this.corInput >= 2 && this.corInput <= 4) {
      this.configuracoes.cor = "cinza";
    } else if (this.corInput == 1) {
      this.configuracoes.cor = "coloridasl";
    }
  }

  alertSucesso() {
    const alert = this.alertCtrl.create({
      title: 'Sucesso',
      subTitle: 'Aluno cadastrado com sucesso!',
      buttons: ['OK']
    });
    alert.present();
  }

}
