import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { DatePicker } from '@ionic-native/date-picker';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Camera } from '@ionic-native/camera';
import {HttpClientModule} from "@angular/common/http";
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { MypagePage } from '../pages/mypage/mypage';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { FilterPage } from '../pages/filter/filter';
import { PointPage } from '../pages/point/point';
import { MyinfoPage } from '../pages/myinfo/myinfo';

import { GamePage } from '../pages/game/game';
import { RoulettePage } from '../pages/roulette/roulette';
import { SurveyPage } from '../pages/survey/survey';
import { SurveyregistPage } from '../pages/surveyregist/surveyregist';
import { CardPage } from '../pages/card/card';

import { CommonService } from './common.service';
import { PipesModule } from '../pipes/pipes.module'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    MypagePage,
    HomePage,
    ListPage,
    FilterPage,
    MyinfoPage,
    PointPage,
    GamePage,
    RoulettePage,
    SurveyPage,
    SurveyregistPage,
    CardPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule,
    PipesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    MypagePage,
    HomePage,
    ListPage,
    FilterPage,
    MyinfoPage,
    PointPage,
    GamePage,
    RoulettePage,
    SurveyPage,
    SurveyregistPage,
    CardPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DatePicker,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FileTransfer,
    CommonService,
    /*FileUploadOptions,
    FileTransferObject,*/
    File,
    Camera
  ]
})
export class AppModule {}
