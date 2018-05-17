import { Component } from '@angular/core';
import { ViewController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chat } from '../../model/chat.model';
import { CommonService } from '../../app/common.service';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  chatlist:Observable<Chat[]>;
  user_id : string = "";
  data = {recommand : {}};
  chat:Chat = {
  	user_id : "",
  	text : "",
  	date : "",
  	my_id : ""
  };

  dismiss() {
  	this.view.dismiss();
  }

  constructor(
  	  public navCtrl: NavController
  	  , public navParams: NavParams
  	  , private commonService: CommonService
  	  , private view: ViewController
  	) {
  	  let originData = navParams.get("data");
  	  if (originData != null) {
  	    this.data.recommand = JSON.parse(JSON.stringify(originData));
  	    this.user_id = this.data.recommand["user_id"] + "_" + this.data.recommand["recommand_user_id"]
  	  }

  	this.chatlist = this.commonService.getChat(this.user_id)
      .snapshotChanges()
      .map(
      changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      })
      .map(changes => changes.reverse());
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

  add() {
  	if (this.chat.text == undefined || this.chat.text == null || this.chat.text == "") {
  		alert("Nothing was input. First, input and retry please");
  		return false;
  	}
  	this.chat["user_id"] = this.user_id;
  	this.chat["date"] = this.commonService.formatDate(new Date());
  	this.chat["my_id"] = this.commonService.user_id;

  	this.commonService.addChat(this.chat);
  }

  /*
      parameter user_id === "user_id"+"-"+"recommand_user_id"
  */
  who(user_id) {
    if (this.commonService.user_id == user_id) {
    	return "Me";
    } else {
    	return this.data.recommand["nick_name"];
    }
  }

  paintMe(user_id) {
    if (this.commonService.user_id == user_id) {
    	return "coral";
    } else {
    	return "";
    }
  }
}
