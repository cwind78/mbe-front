import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SurveyeditPage } from './surveyedit';

@NgModule({
  declarations: [
    SurveyeditPage,
  ],
  imports: [
    IonicPageModule.forChild(SurveyeditPage),
  ],
})
export class SurveyeditPageModule {}
