import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { HomePage } from '../home/home';

/**
 * Generated class for the AtividadeConfiguravelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'atividade-configuravel'
})
@Component({
  selector: 'page-atividade-configuravel',
  templateUrl: 'atividade-configuravel.html',
})
export class AtividadeConfiguravelPage {

  private nome: any = null;
  private counterLetrasOcultadas: any = 0;

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
      this.nome = data.nome.split('');

      this.nome = this.nome.map(element => {
        return { value: element, ocultada: false };
      });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AtividadeConfiguravelPage');
  }

  abrirHome() {
    this.navCtrl.push(HomePage);
  } 

  toggleLetra(index: number) {
    if (!this.nome[index].ocultada) {
      if (this.counterLetrasOcultadas < this.nome.length - 1) {
        this.nome[index].ocultada = true;
        this.counterLetrasOcultadas++;
      }
    } else {
      this.nome[index].ocultada = false;
      this.counterLetrasOcultadas--;
    }
  }

  abrirConfiguracoes() {
    this.navCtrl.push('configuracoes');
  } 

  abrirAtividade() {
    let nomePronto = this.nome.map(element => {
      if (element.ocultada) {
        return "_";
      } else {
        return element.value;
      }
    });
    
    if (this.counterLetrasOcultadas > 0) 
      this.navCtrl.push('atividade', { nome: nomePronto });
  } 

}
