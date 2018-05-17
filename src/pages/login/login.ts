import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { Modal, ModalController, ModalOptions } from 'ionic-angular';
import { Http } from '@angular/http';
import { MypagePage } from "../mypage/mypage";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user = [];
  user_id : string = "lotus78";
  user_password : string = "choi0911";
  constructor(
      public navCtrl: NavController
      , public navParams: NavParams
      , private menu: MenuController
      , private http : Http
      , private modalCtrl : ModalController
    ) {
  	this.menu.enable(false);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
  	if (this.user_id == undefined || this.user_id == null || this.user_id == "") {
  		alert("Input your id and retry");
  		return;
  	}
  	if (this.user_password == undefined || this.user_password == null || this.user_password == "") {
  		alert("Input your password and retry");
  		return;
  	}

  	this.loginCheck();
  }

  loginCheck() {
  	this.http.get("/api/main/loginCheck?user_id="+this.user_id+"&user_password="+this.user_password)
  		.subscribe(data => {
  			this.user = data.json();
  			if (this.user != undefined && this.user != null && this.user.length > 0) {
  				if (this.user[0].user_name != undefined && this.user[0].user_name != null && this.user[0].user_name != "") {
  					console.log(this.user[0].user_name);
  					this.navCtrl.setRoot(MypagePage, {user_id : this.user_id});
  				} else {
  					alert("Wrong input. Please check your account and retry");
  				}
  			} else {
  				alert("Wrong input. Please check your account and retry");
  			}
  		}, onerror => {
        alert("Wrong input. Please check your account and retry");
      });
  }

  new() {
    const myModalOptions: ModalOptions = {
      enableBackdropDismiss: false
    };

    const myModalData = {
      name: 'Paul Halliday',
      occupation: 'Developer'
    };

    const myModal: Modal = this.modalCtrl.create('SignupPage', { data: myModalData }, myModalOptions);

    myModal.present();

    myModal.onDidDismiss((data) => {
      console.log("I have dismissed.");
      console.log(data);
    });

    myModal.onWillDismiss((data) => {
      console.log("I'm about to dismiss");
      console.log(data);
    });

  }
}
