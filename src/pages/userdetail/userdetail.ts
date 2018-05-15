import { Component } from '@angular/core';
import { ViewController, Loading, LoadingController, ToastController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

/**
 * Generated class for the UserdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-userdetail',
  templateUrl: 'userdetail.html',
})
export class UserdetailPage {
  private loading: Loading;
  private error : string;

  data = {
    recommand : {}
  };
  constructor(
  	  public navCtrl: NavController
  	  , public navParams: NavParams
  	  , private view : ViewController
  	  , private http : Http
      , private httpClient : HttpClient
      , private loadingCtrl: LoadingController
	  , private toastCtrl: ToastController
  	) {
  	  let originData = navParams.get("data");
  	  if (originData != null) {
  	    this.data.recommand = JSON.parse(JSON.stringify(originData));
  	  }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserdetailPage');
  }

  getFilted(value) {
  	return value!="0"?"Y":"";
  }

  dismiss() {
  	this.view.dismiss();
  }

  call(url) {
  	url = (url == null?"call":url);
  	if (url == "call") {
	  	if(!confirm("If you execute to call, your point decrease. Understand this all?")) {
	  		return false;
	  	}
	}

  	this.updateLoading();
  	this.http.post("/api/main/recommand/"+url, this.data.recommand)
      /*.pipe(
        catchError(e => this.handleError(e)),
        finalize(() => this.loading.dismiss())
      )*/
      .subscribe(ok => {
      	  this.presentToast((url=="call"?"Calling":"Denial")+" is complete.");
      	  this.loading.dismiss();
      	  this.dismiss();
        }, 
        onerror => {
          //return null;
          this.presentToast("Faild to "+(url=="call"?"call. You don't have enough point":"deny"));
          this.loading.dismiss();
        }
      );
  }

  deny() {
    if(!confirm("If you execute to call, your point decrease. Understand this all?")) {
	  return false;
	}

	this.call("deny");
  }

  private handleError(error: any) {
  	console.log(JSON.stringify(error));
    const errMsg = error.message ? error.message : error.toString();
    this.error = errMsg;
    return Observable.throw(errMsg);
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });

    toast.present();
  }

  private updateLoading(): void {
    this.error = null;
    this.loading = this.loadingCtrl.create({
      content: 'Connecting to server...'
    });

    this.loading.present();
  }
}