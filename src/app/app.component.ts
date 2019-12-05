import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { NativeAudio } from '@ionic-native/native-audio';

import { HomePage } from '../pages/home/home';
import { Events } from 'ionic-angular';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private storage: Storage, private nativeAudio: NativeAudio, public event: Events) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.storage.get('alunos').then((alunos) => {
        if (!alunos) 
          this.storage.set('alunos', []);
      });

      this.nativeAudio.preloadComplex('background', 'assets/sfx/background.mp3', 0.1, 1, 0);
    });
  }
}
