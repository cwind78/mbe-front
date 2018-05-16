import { Component } from '@angular/core';
import { ViewController, Loading, LoadingController, ToastController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { HttpClient } from "@angular/common/http";
import { catchError, finalize } from "rxjs/operators";
import { Observable } from "rxjs";

/**
 * Generated class for the AcceptdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-acceptdetail',
  templateUrl: 'acceptdetail.html',
})
export class AcceptdetailPage {
  data = {
  	codes : [],
  	recommand : {}
  };

  private loading: Loading;
  public error: string;

  constructor(
  	  public navCtrl: NavController
  	  , public navParams: NavParams
  	  , private http : Http
  	  , private httpClient : HttpClient
      , private loadingCtrl: LoadingController
	  , private toastCtrl: ToastController
	  , private view : ViewController
  	) {
      let originData = navParams.get("data");
  	  if (originData != null) {
  	    this.data.recommand = JSON.parse(JSON.stringify(originData));
  	  }

  	  this.getCode();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcceptdetailPage');
  }

  ionViewWillEnter() {
    //
  }

  getCode() {
    this.http.get("/api/main/getCommonCode/UH--UJ--UA--UP--UG")
      .subscribe(data => {
        //console.log(data.json());
        //return data.json();
        this.data.codes = data.json();
      }, 
      onerror => {
        //return null;
      }
    );
  }

  dismiss() {
  	this.view.dismiss();
  }

  accept(url) {
  	this.updateLoading();
  	this.http.post("/api/main/called/accept", this.data.recommand)
      /*.pipe(
        catchError(e => this.handleError(e)),
        finalize(() => this.loading.dismiss())
      )*/
      .subscribe(ok => {
      	  this.presentToast("Acceptance is complete.");
      	  this.loading.dismiss();
      	  this.dismiss();
        }, 
        onerror => {
          //return null;
          this.presentToast("Faild to acceptance");
          this.loading.dismiss();
        }
      );
  }

  deny() {
    this.updateLoading();
  	this.http.post("/api/main/called/deny", this.data.recommand)
      /*.pipe(
        catchError(e => this.handleError(e)),
        finalize(() => this.loading.dismiss())
      )*/
      .subscribe(ok => {
      	  this.presentToast("Denial is complete.");
      	  this.loading.dismiss();
      	  this.dismiss();
        }, 
        onerror => {
          //return null;
          this.presentToast("Faild to denial");
          this.loading.dismiss();
        }
      );
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
