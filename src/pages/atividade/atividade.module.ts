import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AtividadePage } from './atividade';
import { DragulaModule } from 'ng2-dragula';

@NgModule({
  declarations: [
    AtividadePage,
  ],
  imports: [
    IonicPageModule.forChild(AtividadePage),
    DragulaModule.forRoot()
  ],
})
export class AtividadePageModule {}
