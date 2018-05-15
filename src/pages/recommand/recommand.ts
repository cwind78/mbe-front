import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from "../home/home";
import { FilterPage } from "../filter/filter";
import { CalledPage } from "../called/called";

/**
 * Generated class for the RecommandPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recommand',
  templateUrl: 'recommand.html',
})
export class RecommandPage {
  tab1 : any = HomePage;
  tab2 : any = CalledPage;
  tab3 : any = FilterPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecommandPage');
  }

}
