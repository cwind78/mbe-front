import { Injectable } from '@angular/core'; 
import { Http } from '@angular/http';
import { AngularFireDatabase } from 'angularfire2/database';
import { Chat } from '../model/chat.model';

@Injectable() 
export class CommonService { 
  user_id:string = "";
  private chatRef = this.db.list<Chat>('chat');

  constructor(
      private httpd : Http
      , private db : AngularFireDatabase
    ) {
  }

  getCommonCodes(code_group) {
  	this.httpd.get("/api/main/getCommonCode/"+code_group.join("--"))
  	  .subscribe(data => {
  	  	//console.log(data.json());
  	    return data.json();
  	  }, 
  	  onerror => {
  	    return null;
  	  }
    );
  }

  checkBlank(value, message) {
  	if (value == undefined || value == null) {
  		alert(message);
  		return false;
  	} else {
  		if (typeof value == 'string') {
  		  if (value.trim() == "") {
  		  	alert(message);
  		  	return false;
  		  }
  		}
  		if (typeof value == 'boolean') {
  		  if (!value) {
  		  	alert(message);
  		  	return false;
  		  }
  		}
  		return true;
  	}

  }

  formatDate(date) {
    var m = date.getMonth()+1;
    var d = date.getDate();
    var h = date.getHours();
    var i = date.getMinutes();
    var s = date.getSeconds();
    return date.getFullYear()+'-'+(m>9?m:'0'+m)+'-'+(d>9?d:'0'+d)+' '+(h>9?h:'0'+h)+':'+(i>9?i:'0'+i)+':'+(s>9?s:'0'+s);
}

  /*
  service about chat
  */
  getChat(user_id) {
        return this.db.list<Chat>('chat', ref => ref.orderByChild('user_id').equalTo(user_id));
    }
 
  addChat(chat: Chat) {
    return this.chatRef.push(chat);
  }
 
  updateChat(chat: Chat) {
    return this.chatRef.update(chat.key, chat);
  }
 
  removeChat(user_id:string) {//chat: Chat) {
    //return this.chatRef.remove(chat.key);
    return this.db.list<Chat>('chat', ref => ref.orderByChild('user_id').equalTo(user_id)).remove();
  }
}