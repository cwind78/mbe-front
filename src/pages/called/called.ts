import { Component } from '@angular/core';
import { Modal, ModalController, ModalOptions, Loading, LoadingController, ToastController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

/**
 * Generated class for the CalledPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-called',
  templateUrl: 'called.html',
})
export class CalledPage {
  data = {
  	recommand : []
  };

  private loading: Loading;
  private error : string;

  constructor(
  	  public navCtrl: NavController
  	  , public navParams: NavParams
  	  , private http : Http
  	  , private loadingCtrl: LoadingController
	    , private toastCtrl: ToastController
	    , private modalCtrl : ModalController
  	) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalledPage');
  }

  ionViewWillEnter() {
  	this.calledMeRecommandedUser();
  }

  calledMeRecommandedUser() {
  	this.updateLoading();
    this.http.get("/api/main/called")
      .subscribe(data => {
        console.log(JSON.stringify(data.json()));
        //return data.json();
        this.data.recommand = data.json();
        this.loading.dismiss();
      }, 
      onerror => {
        //return null;
        this.data.recommand = [];
        this.loading.dismiss();
      }
    );
  }

  private updateLoading(): void {
    this.error = null;
    this.loading = this.loadingCtrl.create({
      content: 'Connecting to server...'
    });

    this.loading.present();
  }

  detail(item) {
  	const myModalOptions: ModalOptions = {
      enableBackdropDismiss: false
    };

    const myModal: Modal = this.modalCtrl.create('AcceptdetailPage', { data: item}, myModalOptions);

    myModal.present();

    myModal.onDidDismiss((data) => {
      console.log("I have dismissed.");
      console.log(data);
      this.calledMeRecommandedUser();
    });

    myModal.onWillDismiss((data) => {
      console.log("I'm about to dismiss");
      console.log(data);
    });
  }
}
