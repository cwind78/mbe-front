import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from "../home/home";
import { FilterPage } from "../filter/filter";
import { PointPage } from "../point/point";
import { MyinfoPage } from "../myinfo/myinfo";

/**
 * Generated class for the MypagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mypage',
  templateUrl: 'mypage.html',
})
export class MypagePage {
  tab1 : any = HomePage;
  tab2 : any = FilterPage;
  tab3 : any = PointPage;
  tab4 : any = MyinfoPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MypagePage');
  }

}
