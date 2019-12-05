import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { HomePage } from '../home/home';

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'cadastro'
})
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  private imagem: String = null;
  private nome: String = null;
  private nascimento: String = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera) {
  }

  abrirCamera () {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      this.imagem = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      alert(err);
    });
  }

  ionViewDidLoad() {
  }

  abrirHome() {
    this.navCtrl.push(HomePage);
  }

  abrirConfiguracoes() {
    this.navCtrl.push('configuracoes');
  }

  abrirPreferencias() {
    this.navCtrl.push('cadastro-preferencias', {
      dados: {
        imagem: this.imagem,
        nome: this.nome,
        nascimento: this.nascimento
      }
    });
  }
}
