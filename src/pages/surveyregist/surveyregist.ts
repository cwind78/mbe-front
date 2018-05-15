import { Component } from '@angular/core';
import { Modal, ModalController, ModalOptions, Loading, LoadingController, ToastController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { HttpClient } from "@angular/common/http";

/**
 * Generated class for the SurveyregistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-surveyregist',
  templateUrl: 'surveyregist.html',
})
export class SurveyregistPage {
  private loading: Loading;
  private error : string;

  data = {
    survey : [],
    check : [],
    rData : {}
  };

  constructor(
  	  public navCtrl: NavController
  	  , public navParams: NavParams
  	  , private http : Http
      , private httpClient : HttpClient
      , private loadingCtrl: LoadingController
	  , private toastCtrl: ToastController
	  , private modalCtrl : ModalController
  	) {
  	//this.getMySurveyList();
  }

  ionViewWillEnter() {
    this.getMySurveyList();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SurveyregistPage');
  }

  getMySurveyList() {
  	this.updateLoading();
    this.http.get("/api/main/survey/user")
      .subscribe(data => {
        //console.log(data.json());
        //return data.json();
        this.data.survey = data.json();
        console.log(this.data.survey);
        this.getCheckValue();
      }, 
      onerror => {
        //return null;
        //this.loading.dismiss();
        this.getCheckValue();
      }
    ); 
  }

  getCheckValue() {
  	this.http.get("/api/main/survey/user/max")
      .subscribe(data => {
        console.log(JSON.stringify(data.json()));
        //return data.json();
        this.data.check = data.json();
        this.loading.dismiss();
      }, 
      onerror => {
        //return null;
        this.loading.dismiss();
      }
    ); 
  }

  new(item) {
  	const myModalOptions: ModalOptions = {
      enableBackdropDismiss: false
    };

    const myModal: Modal = this.modalCtrl.create('SurveyeditPage', { data: item, user_value : this.data.check[0].user_value }, myModalOptions);

    myModal.present();

    myModal.onDidDismiss((data) => {
      console.log("I have dismissed.");
      console.log(data);
      this.getMySurveyList();
    });

    myModal.onWillDismiss((data) => {
      console.log("I'm about to dismiss");
      console.log(data);
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