import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { HttpClient } from "@angular/common/http";
/**
 * Generated class for the PointPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-point',
  templateUrl: 'point.html',
})
export class PointPage {
  private point : number = 0;
  private data = {
    point : [],
    user : []
  };
  constructor(
  	  public navCtrl: NavController
  	  , public navParams: NavParams
  	  , private http : Http
      , private httpClient : HttpClient
  	) {
  	this.getPoint();
  	this.getPointData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PointPage');
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

  getPointData() {
  	this.http.get("/api/main/point/user")
      .subscribe(data => {
        //console.log(data.json());
        //return data.json();
        this.data.point = data.json();
      }, 
      onerror => {
        //return null;
      }
    );
  }
}
