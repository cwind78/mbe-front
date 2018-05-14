import { ViewChild, Component } from '@angular/core';
import { ViewController, Loading, LoadingController, ToastController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { HttpClient } from "@angular/common/http";
import { CommonService } from '../../app/common.service';
import { catchError, finalize } from "rxjs/operators";
import { Observable } from "rxjs";

/**
 * Generated class for the VotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vote',
  templateUrl: 'vote.html',
})
export class VotePage {
  private loading: Loading;
  private error : string;
  data = {
    survey : {}
  };

  constructor(
  	  public navCtrl: NavController
  	  , public navParams: NavParams
  	  , private http : Http
      , private httpClient : HttpClient
      , private loadingCtrl: LoadingController
	  , private toastCtrl: ToastController
	  , public common : CommonService
	  , private view : ViewController
  	) {
  	  let originData = navParams.get("data");
  	  if (originData != null) {
  	    this.data.survey = JSON.parse(JSON.stringify(originData));
  	  }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VotePage');
  }

  dismiss() {
  	this.view.dismiss();
  }

  vote(flag) {
  	this.updateLoading();

    if (flag == "Y") {
    	if (this.data.survey["vote_yes"] == undefined || this.data.survey["vote_yes"] == null || this.data.survey["vote_yes"] == "") {
    		this.data.survey["vote_yes"] = 1;
    	} else {
    		this.data.survey["vote_yes"] = parseInt(this.data.survey["vote_yes"]) + 1;
    	}
    } else {
    	if (this.data.survey["vote_no"] == undefined || this.data.survey["vote_no"] == null || this.data.survey["vote_no"] == "") {
    		this.data.survey["vote_no"] = 1;
    	} else {
    		this.data.survey["vote_no"] = parseInt(this.data.survey["vote_no"]) + 1;
    	}
    }
    this.data.survey["vote_yes_or_no"] = flag;

    this.http.post("/api/main/survey/vote", {surveys : [this.data.survey]})
      /*.pipe(
        catchError(e => this.handleError(e)),
        finalize(() => this.loading.dismiss())
      )*/
      .subscribe(ok => {
      	  this.presentToast("Saving is complete.");
      	  this.loading.dismiss();
      	  this.dismiss();
        }, 
        onerror => {
          //return null;
          this.presentToast("Faild to vote");
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
  }

  private updateLoading(): void {
    this.error = null;
    this.loading = this.loadingCtrl.create({
      content: 'Connecting to server...'
    });

    this.loading.present();
  }
}
