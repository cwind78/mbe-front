import { Component } from '@angular/core';
import { Loading, LoadingController, ToastController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { HttpClient } from "@angular/common/http";
import { catchError, finalize } from "rxjs/operators";
import { Observable } from "rxjs";

/**
 * Generated class for the FilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filter',
  templateUrl: 'filter.html',
})
export class FilterPage {
  data = {
  	codes : [],
  	filters : [
  	  {filter_cd : "", filter_value : ""},
  	  {filter_cd : "", filter_value : ""},
  	  {filter_cd : "", filter_value : ""},
  	  {filter_cd : "", filter_value : ""},
  	  {filter_cd : "", filter_value : ""},
  	  {filter_cd : "", filter_value : ""},
  	  {filter_cd : "", filter_value : ""},
  	  {filter_cd : "", filter_value : ""},
  	  {filter_cd : "", filter_value : ""},
  	  {filter_cd : "", filter_value : ""}
  	]
  };

  private loading: Loading;
  public error: string;

  constructor(public navCtrl: NavController
  	  , public navParams: NavParams
      , private http : Http
      , public httpClient : HttpClient
      , public loadingCtrl: LoadingController
	  , public toastCtrl: ToastController
  	) {
  	this.getCode();
  	this.getRecommandFilter();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilterPage');
  }

  getCode() {
    this.http.get("/api/main/getCommonCode/UH--UJ--UA--UP--UF--UG--UE")
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

  getRecommandFilter() {
  	this.updateLoading();
    this.http.get("/api/main/filter")
      .subscribe(data => {
        //console.log(data.json());
        //return data.json();
        this.data.filters = data.json();
        for (let i=0; i<10; i++) {
          if (this.data.filters.length-1 < i) {
          	this.data.filters.push({filter_cd:"", filter_value:""});
          }
        }

        this.loading.dismiss();
      }, 
      onerror => {
        //return null;
        this.loading.dismiss();
      }
    );
  }

  filterSave() {
  	let filters_copy = JSON.parse(JSON.stringify(this.data.filters));
  	let send_filters = [];

  	for (let filter of filters_copy) {
  		console.log(JSON.stringify(filter));
  	  if (filter.filter_cd != undefined && filter.filter_cd != null && filter.filter_cd != "" &&
  	  	  filter.filter_value != undefined && filter.filter_value != null && filter.filter_value != ""
  	  	) {
  	  	send_filters.push(filter);
  	  }
  	}

  	if (!send_filters.length) {
  		alert("저장할 추천 필터가 없습니다.");
  		return false;
  	} else {
  		this.data.filters = JSON.parse(JSON.stringify(send_filters));
  		for (let i=0; i<10; i++) {
          if (this.data.filters.length-1 < i) {
          	this.data.filters.push({filter_cd:"", filter_value:""});
          }
        }
  	}

  	this.updateLoading();

  	let filter:any = {filters : send_filters};
  	console.log(JSON.stringify(filter));
    this.http.post("/api/main/filter", filter)
      .pipe(
        catchError(e => this.handleError(e)),
        finalize(() => this.loading.dismiss())
      )
      .subscribe(ok => this.presentToast("Saving is complete.")
      );
  }

  private updateLoading(): void {
    this.error = null;
    this.loading = this.loadingCtrl.create({
      content: 'Connecting to server...'
    });

    this.loading.present();
  }

  private handleError(error: any) {
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
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
}