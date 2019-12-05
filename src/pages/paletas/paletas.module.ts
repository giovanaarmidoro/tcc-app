import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaletasPage } from './paletas';

@NgModule({
  declarations: [
    PaletasPage,
  ],
  imports: [
    IonicPageModule.forChild(PaletasPage),
  ],
})
export class PaletasPageModule {}
