import { Component } from '@angular/core';
import { Loading, LoadingController, ToastController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { HttpClient } from "@angular/common/http";
/**
 * Generated class for the CardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-card',
  templateUrl: 'card.html',
})
export class CardPage {
  private point : number = 0;
  private loading: Loading;
  private error : string;
  private card1 : number;
  private card2 : number;
  private valid : boolean = false;
  private result : boolean = false;
  private selected_card : number = null;
  private data = {
  	user : [],
  	card : {}
  };

  constructor(
  	  public navCtrl: NavController
  	  , public navParams: NavParams
  	  , private http : Http
      , private httpClient : HttpClient
      , private loadingCtrl: LoadingController
	  , private toastCtrl: ToastController
  	) {
  	
  }

  ionViewWillEnter() {
    this.getPoint();
    this.refresh();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardPage');
  }

  getPoint() {
  	this.http.get("/api/main/user/point")
      .subscribe(data => {
        //console.log(data.json());
        //return data.json();
        this.data.user = data.json();
        this.point = this.data.user[0]["point"];
      }, 
      onerror => {
        //return null;
      }
    );
  }

  getColor(card) {
  	if (this.selected_card == null) {
  		return "";
  	} else {
  		if (this.selected_card == card) {
  			return "coral";
  		}
  	}
  }

  refresh() {
  	this.valid = false;
  	this.selected_card = null;
  	this.card1 = Math.floor(Math.random() * 100) + 1;
    this.card2 = Math.floor(Math.random() * 100) + 1;

    if (this.card1 == this.card2) {
    	this.refresh();
    }
  }

  select(flag) {
  	if (flag == 1) {
  		this.selected_card = this.card1;
  	} else {
  		this.selected_card = this.card2;
  	}
  }

  ok() {
  	if (this.selected_card == null) {
  		alert("First select card and retry");
  		return false;
  	}
  	if (this.valid) {
  		alert("Refresh and retry");
  		return false;	
  	}
  	this.valid = true;
  	if (this.selected_card == this.card1) {
  		if (this.card1 > this.card2) {
  			this.saveResult(this.selected_card, this.card2, 1);
  			this.result = true;
  		} else {
  			this.saveResult(this.selected_card, this.card2, -1);
  			this.result = false;
  		}
  	} else {
  		if (this.card1 < this.card2) {
  			this.saveResult(this.selected_card, this.card1, 1);
  			this.result = true;
  		} else {
  			this.saveResult(this.selected_card, this.card1, -1);
  			this.result = false;
  		}
  	}
  }

  saveResult(my_card, other_card, win) {
  	this.data.card["lucky_value"] = my_card;
  	this.data.card["other_value"] = other_card;
  	this.data.card["betting_point"] = "2";
  	this.data.card["paid_point"] = 2*win;

  	this.updateLoading();
console.log(JSON.stringify(this.data.card));
    this.http.post("/api/main/card", {cards : [this.data.card]})
      /*.pipe(
        catchError(e => this.handleError(e)),
        finalize(() => this.loading.dismiss())
      )*/
      .subscribe(ok => {
      	  this.presentToast("Saving is complete.");
      	  this.getPoint();
      	  this.loading.dismiss();
        }, 
        onerror => {
          //return null;
          this.presentToast("You can only do 50 times a day");
          this.loading.dismiss();
        }
      );
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });
  }

  private updateLoading(): void {
    this.error = null;
    this.loading = this.loadingCtrl.create({
      content: 'Connecting to server...'
    });

    this.loading.present();
  }
}
