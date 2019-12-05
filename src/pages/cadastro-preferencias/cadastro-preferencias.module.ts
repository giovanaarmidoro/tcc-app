import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroPreferenciasPage } from './cadastro-preferencias';
import { IonicStorageModule } from '@ionic/storage';


@NgModule({
  declarations: [
    CadastroPreferenciasPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroPreferenciasPage),
    IonicStorageModule.forRoot(),
  ],
})
export class CadastroPreferenciasPageModule {}
