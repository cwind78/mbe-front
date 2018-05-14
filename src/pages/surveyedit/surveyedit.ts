import { ViewChild, Component } from '@angular/core';
import { ViewController, Loading, LoadingController, ToastController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { HttpClient } from "@angular/common/http";
import { CommonService } from '../../app/common.service';
import { catchError, finalize } from "rxjs/operators";
import { Observable } from "rxjs";

/**
 * Generated class for the SurveyeditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-surveyedit',
  templateUrl: 'surveyedit.html',
})
export class SurveyeditPage {
  private loading: Loading;
  private error : string;
  public origin_user_value : number = 0;

  data = {
    survey : {
      survey_subject : "",
      due_time : "",
      user_value : "",
      seq_no : ""
    }
  };

  @ViewChild("survey_subject") survey_subject : any;
  @ViewChild("due_time") due_time : any;
  @ViewChild("user_value") user_value : any;
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
  	  this.origin_user_value = parseInt(navParams.get("user_value"));
  	  if (originData != null) {
  	    this.data.survey = JSON.parse(JSON.stringify(originData));
  	  }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SurveyeditPage');
  }

  save() {
  	if (!this.common.checkBlank(this.data.survey.survey_subject, "Please input subject and retry")) {
  	  this.survey_subject.setFocus();
  	  return false;
  	}
	if (!this.common.checkBlank(this.data.survey.due_time, "Please input due_time and retry")) {
  	  this.due_time.setFocus();
  	  return false;
  	}
  	if (!this.common.checkBlank(this.data.survey.user_value, "Please input win count and retry")) {
  	  this.user_value.setFocus();
  	  return false;
  	}
  	if (this.origin_user_value < parseInt(this.data.survey.user_value)) {
      //alert("You used all of today's possible survey or check that your survey finished");
      alert("You are possible to input less more than "+this.origin_user_value+" point");
  	  this.user_value.setFocus();
  	  return false;
  	}

    this.updateLoading();

    this.http.post("/api/main/survey/user", {surveys : [this.data.survey]})
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
          this.presentToast("You can not save if you have two ended surveys or if you have an ongoing survey. And you can only enter less than "+this.origin_user_value+" points.");
          this.loading.dismiss();
        }
      );
  }

  dismiss() {
  	this.view.dismiss();
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
