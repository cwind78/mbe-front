import { Injectable } from '@angular/core'; 
import { Http } from '@angular/http';

@Injectable() 
export class CommonService { 
  constructor(private httpd : Http) {
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
}