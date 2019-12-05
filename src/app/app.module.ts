import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
// import { AtividadePage } from '../pages/atividade/atividade';
// import { CadastroPage } from '../pages/cadastro/cadastro';
// import { CadastroPreferenciasPage } from '../pages/cadastro-preferencias/cadastro-preferencias';
// import { ConfiguracoesPage } from '../pages/configuracoes/configuracoes';
// import { AtividadeConfiguravelPage } from '../pages/atividade-configuravel/atividade-configuravel';
// import { LoginPage } from '../pages/login/login';
// import { IniciarPage } from '../pages/iniciar/iniciar';
// import { LuminosidadePage } from '../pages/luminosidade/luminosidade';
// import { PaletasPage } from '../pages/paletas/paletas';
// import { AtividadeRandomicaPage } from '../pages/atividade-randomica/atividade-randomica';
// import { RecompensasPage } from '../pages/recompensas/recompensas';
// import { SomPage } from '../pages/som/som';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// plugins
import { Camera } from '@ionic-native/camera';
import {Brightness} from '@ionic-native/brightness';
import { NativeAudio } from '@ionic-native/native-audio';
import { BrMaskerModule } from 'brmasker-ionic-3';
import { AppState } from './app.global';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    // AtividadePage,
    // CadastroPage,
    // CadastroPreferenciasPage,
    // ConfiguracoesPage,
    // AtividadeConfiguravelPage,
    // LoginPage,
    // IniciarPage,
    // LuminosidadePage,
    // PaletasPage,
    // AtividadeRandomicaPage,
    // RecompensasPage,
    // SomPage
  ],
  imports: [
    BrowserModule,
    BrMaskerModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    // AtividadePage,
    // CadastroPage,
    // CadastroPreferenciasPage,
    // ConfiguracoesPage,
    // AtividadeConfiguravelPage,
    // LoginPage,
    // IniciarPage,
    // LuminosidadePage,
    // PaletasPage,
    // AtividadeRandomicaPage,
    // RecompensasPage,
    // SomPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    Brightness,
    NativeAudio,
    AppState,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
