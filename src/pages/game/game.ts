import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RoulettePage } from "../roulette/roulette";
import { SurveyPage } from "../survey/survey";
import { SurveyregistPage } from '../surveyregist/surveyregist';
import { CardPage } from "../card/card";

/**
 * Generated class for the GamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage {
  tab1 : any = SurveyregistPage;
  tab2 : any = SurveyPage;
  tab3 : any = RoulettePage;
  tab4 : any = CardPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamePage');
  }

}
