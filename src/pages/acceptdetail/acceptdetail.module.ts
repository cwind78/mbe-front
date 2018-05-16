import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AcceptdetailPage } from './acceptdetail';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    AcceptdetailPage,
  ],
  imports: [
    IonicPageModule.forChild(AcceptdetailPage),
    PipesModule
  ],
})
export class AcceptdetailPageModule {}
