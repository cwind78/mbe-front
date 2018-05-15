import { Component } from '@angular/core';
import { Modal, ModalController, ModalOptions, Loading, LoadingController, ToastController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { HttpClient } from "@angular/common/http";

/**
 * Generated class for the SurveyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-survey',
  templateUrl: 'survey.html',
})
export class SurveyPage {
  private loading: Loading;
  private error : string;

  data = {
    survey : []
  };

  constructor(
  	  private navCtrl: NavController
  	  , private navParams: NavParams
      , private http : Http
      , private httpClient : HttpClient
      , private loadingCtrl: LoadingController
	  , private toastCtrl: ToastController
	  , private modalCtrl : ModalController
  	) {
  	//this.getSurveyList();
  }

  ionViewWillEnter() {
    this.getSurveyList();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SurveyPage');
  }

  getSurveyList() {
  	this.updateLoading();
    this.http.get("/api/main/survey")
      .subscribe(data => {
        //console.log(data.json());
        //return data.json();
        this.data.survey = data.json();
        this.loading.dismiss();
      }, 
      onerror => {
        //return null;
        this.loading.dismiss();
      }
    );
  }

  vote(item) {
  	const myModalOptions: ModalOptions = {
      enableBackdropDismiss: false
    };

    const myModal: Modal = this.modalCtrl.create('VotePage', { data: item}, myModalOptions);

    myModal.present();

    myModal.onDidDismiss((data) => {
      console.log("I have dismissed.");
      console.log(data);
      this.getSurveyList();
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
