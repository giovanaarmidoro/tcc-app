import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'login'
})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private alunos: any = null;
  private alunoSelecionado: any = null;

  private intendedPage: any = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    this.storage.get('alunos').then((alunos) => {
      this.alunos = alunos;
    });

    this.intendedPage = this.navParams.get('intended');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  abrirHome() {
    this.navCtrl.push(HomePage);
  }

  abrirConfiguracoes() {
    this.navCtrl.push('configuracoes');
  }

  // função que seleciona aluno ao clicar na foto
  // salva aluno selecionado no storage
  // abre a página de iniciar atividade como raiz
  selecionarAluno(aluno: any) {
    this.alunoSelecionado = aluno;
    this.storage.set('alunoSelecionado', aluno);

    if (!this.intendedPage) {
      this.navCtrl.setRoot('iniciar');
    } else {
      this.navCtrl.setRoot(this.intendedPage);
    }
  }
}
