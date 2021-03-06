import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular';

/**
 * Generated class for the MyinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-myinfo',
  templateUrl: 'myinfo.html',
})
export class MyinfoPage {

  constructor(
  	  public navCtrl: NavController
  	  , public navParams: NavParams
  	  , private menu : MenuController
  	) {
  	this.menu.enable(true);
  }

  ionViewWillEnter() {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyinfoPage');
  }

}
