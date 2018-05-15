import { Component } from '@angular/core';
import { Modal, ModalController, ModalOptions, Loading, LoadingController, ToastController, NavController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  data = {
  	recommand : []
  };

  private loading: Loading;
  private error : string;

  constructor(
  	  public navCtrl: NavController
  	  , private menu : MenuController
  	  , private http : Http
  	  , private loadingCtrl: LoadingController
	  , private toastCtrl: ToastController
	  , private modalCtrl : ModalController
  	) {
  	this.menu.enable(true);
  	//this.getRecommandUser();
  }

  ionViewWillEnter() {
  	this.getRecommandUser();
  }

  getRecommandUser() {
  	this.updateLoading();
    this.http.get("/api/main/recommand")
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

    const myModal: Modal = this.modalCtrl.create('UserdetailPage', { data: item}, myModalOptions);

    myModal.present();

    myModal.onDidDismiss((data) => {
      console.log("I have dismissed.");
      console.log(data);
      this.getRecommandUser();
    });

    myModal.onWillDismiss((data) => {
      console.log("I'm about to dismiss");
      console.log(data);
    });
  }
}
