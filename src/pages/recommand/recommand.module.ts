import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecommandPage } from './recommand';

@NgModule({
  declarations: [
    RecommandPage,
  ],
  imports: [
    IonicPageModule.forChild(RecommandPage),
  ],
})
export class RecommandPageModule {}
