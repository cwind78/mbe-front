import { Component } from '@angular/core';
import { Events, Platform, IonicPage, NavController, NavParams } from 'ionic-angular';
import { PointPage } from "../point/point";
import { MyinfoPage } from "../myinfo/myinfo";
import { Http } from "@angular/http";
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
  tab1 : any = MyinfoPage;
  tab2 : any = PointPage;

  constructor(
  	  public navCtrl: NavController
  	  , public navParams: NavParams
  	  , private platform : Platform
  	  , private http : Http
  	  , public events : Events
  	) {
      this.events.publish("user:login");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MypagePage');
  }
}
