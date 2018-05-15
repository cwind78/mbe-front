import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalledPage } from './called';

@NgModule({
  declarations: [
    CalledPage,
  ],
  imports: [
    IonicPageModule.forChild(CalledPage),
  ],
})
export class CalledPageModule {}
