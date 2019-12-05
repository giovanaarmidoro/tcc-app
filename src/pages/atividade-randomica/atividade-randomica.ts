import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { HomePage } from '../home/home';

/**
 * Generated class for the AtividadeRandomicaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'atividade-randomica'
})
@Component({
  selector: 'page-atividade-randomica',
  templateUrl: 'atividade-randomica.html',
})
export class AtividadeRandomicaPage {

  private qtdLetras: number = 1;
  private alunoSelecionado: any = null;
  private nomeAtividade: any = null;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public loadCtrl: LoadingController, 
    private storage: Storage
  ) {
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
    console.log('ionViewDidLoad AtividadeRandomicaPage');
  }

  remove() {
    if (this.qtdLetras > 1)
      this.qtdLetras -= 1;
  }

  add() {
    let limite = this.qtdLetras + 1;

    if (!(limite >= this.alunoSelecionado.nome.length))
      this.qtdLetras += 1;
  }

  configurarNome() {
    let strArray = this.alunoSelecionado.nome.split('');

    let finishedFlag = false;
    let counter = 0;
    while (!finishedFlag) {
      let position = Math.floor(Math.random() * strArray.length);
      let randChar = strArray[position];

      if (randChar !== "_") {
        strArray[position] = "_";
        counter++;

        if (counter >= this.qtdLetras) {
          finishedFlag = true;
        }
      }
    }

    this.nomeAtividade = strArray;
  }

  abrirHome() {
    this.navCtrl.push(HomePage);
  } 
  abrirConfiguracoes() {
    this.navCtrl.push('configuracoes');
  } 

  abrirAtividade() {
    this.configurarNome();
    this.navCtrl.push('atividade', { nome: this.nomeAtividade });
  } 

}
