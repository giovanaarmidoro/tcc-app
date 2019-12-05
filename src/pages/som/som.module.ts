import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SomPage } from './som';

@NgModule({
  declarations: [
    SomPage,
  ],
  imports: [
    IonicPageModule.forChild(SomPage),
  ],
})
export class SomPageModule {}
