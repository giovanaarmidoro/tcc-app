import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Brightness } from '@ionic-native/brightness';
import { NativeAudio } from '@ionic-native/native-audio';

import { DragulaService } from 'ng2-dragula';

import { HomePage } from '../home/home';

/**
 * Generated class for the AtividadePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'atividade'
})
@Component({
  selector: 'page-atividade',
  templateUrl: 'atividade.html',
})
export class AtividadePage {

  private alunoSelecionado: any = null;
  private nomeLacunas: any = null;
  private letrasOcultas: any = null;
  private paleta: string = "default";

  LETRAS = 'LETRAS';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadCtrl: LoadingController,
    public alertCtrl: AlertController,
    private storage: Storage,
    private dragulaService: DragulaService,
    private brightness: Brightness,
    private nativeAudio: NativeAudio,  
  ) {
    // Cria a apresenta loader enquanto carrega aluno selecionado
    const loader = this.loadCtrl.create({
      content: "Carregando..."
    });
    loader.present()

    // Busca alunoSelecionado no Storage
    this.storage.get('alunoSelecionado').then(data => {

      this.carregarConfiguracoesDoAluno(data);
      this.configurarAtividade(data);
      this.configurarDragula();

      // Fecha loader ao resolver promise do alunoSelecionado e
      // finalizar configurações  
      loader.dismiss();
    });
  }

  carregarConfiguracoesDoAluno(data: any) {
    // configura som
    let audioLevel = data.configuracoes.som / 10;
    this.nativeAudio.setVolumeForComplexAsset('background', audioLevel).then(() => {
      this.nativeAudio.play('background');
    });

    // configura luz
    let brightLevel = data.configuracoes.luz / 10;
    this.brightness.setBrightness(brightLevel);

    // configura cor
    this.paleta = data.configuracoes.cor;
  }

  configurarAtividade(data: any) {
    // Atribui dados encontrados no Storage à variável alunoSelecionado
    this.alunoSelecionado = data;

    // Atribui array de char contendo nome e lacunas  
    this.nomeLacunas = this.navParams.get("nome").map((element: string) => {
      return element;
    });

    // Transforma nome do alunoSelecionado em array de char
    let nomeSplit = this.alunoSelecionado.nome.split('');

    // Encontra letras ocultas no array de char e retorna 
    // elas com seus indexes referentes ao array original 
    this.letrasOcultas = this.nomeLacunas.map((element: string, index: number) => {
      if (element === "_")
        return nomeSplit[index];

      return null;
    });

    // Filtra elementos nulos no array de letras ocultas
    this.letrasOcultas = this.letrasOcultas.filter((element: string) => {
      return element != null;
    });
  }

  configurarDragula() {
    // Eventos do Dragula
    this.dragulaService.dropModel(this.LETRAS)
    .subscribe(({ sourceModel, targetModel, item, targetIndex }) => {

        // Remove lacuna
        targetModel.splice(targetIndex, 1);
        // Atribui letra à posição
        targetModel[targetIndex] = item;

        // Checa se não existem mais letras avulsas
        if (sourceModel.length === 0) {
          // Compara palavra finalizada com nome 
          if (JSON.stringify(targetModel) === JSON.stringify(this.alunoSelecionado.nome.split(''))) {
            // Apresenta alerta caso a apalavra esteja correta
            const alert = this.alertCtrl.create({
              title: 'parabéns',
              subTitle: 'Você conseguiu!',
              buttons: ['OK']
            });
            alert.present();
          }
        }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AtividadePage');
  }

  abrirHome() {
    this.navCtrl.push(HomePage);
  } 
  abrirConfiguracoes() {
    this.navCtrl.push('configuracoes');
  } 
}
