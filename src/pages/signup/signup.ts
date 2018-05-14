import { Component, ViewChild, ElementRef, Renderer } from '@angular/core';
import { Http } from '@angular/http';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';
import { NavController, Loading, LoadingController, ToastController } from 'ionic-angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { CommonService } from '../../app/common.service';
import { catchError, finalize } from "rxjs/operators";
import { File, FileEntry } from "@ionic-native/file";
import { Observable } from "rxjs";
import {HttpClient} from "@angular/common/http";

/**
 * Generated class for the SignupPage page.
import { Calendar } from '@ionic-native/calendar';
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  data = {};
  user = [];
  signup = {};
  user_id : string;
  user_password : string;
  user_password1 : string;
  user_name : string;
  nick_name : string;
  email : string;
  domain : string;
  cellphone1 : string;
  cellphone2 : string;
  cellphone3 : string;
  gender : string;
  birth : string;
  hobby1 : string;
  hobby2 : string;
  hobby3 : string;
  job : string;
  area : string;
  purpose1 : string;
  purpose2 : string;
  recommand_aggrement : string;
  information_aggrement : string;
  email_aggrement : string;
  push_message_aggrement : string;
  remark : string;
  valid : boolean = false;
  nvalid : boolean = false;
  date : string;
  type : 'string';
  calendarVisible : boolean = false;
  codes : any = [];
  //birth : string;
  imageURI:any;
  imageFileName:any;
  photo : string;
  file_name_temp : string;
  file_name : string;
  
  public myPhoto: any;
  public myPhotoURL: any;
  public error: string;
  private loading: Loading;

  @ViewChild("signup_user_id") signup_user_id : any;
  @ViewChild("signup_user_password") signup_user_password : any;
  @ViewChild("signup_user_password1") signup_user_password1 : any;
  @ViewChild("signup_user_name") signup_user_name : any;
  @ViewChild("signup_nick_name") signup_nick_name : any;
  @ViewChild("signup_email") signup_email : any;
  @ViewChild("signup_domain") signup_domain : any;
  @ViewChild("signup_cellphone1") signup_cellphone1 : any;
  @ViewChild("signup_cellphone2") signup_cellphone2 : any;
  @ViewChild("signup_cellphone3") signup_cellphone3 : any;
  //@ViewChild("signup_gender") signup_gender : any;
  //@ViewChild("signup_birth") signup_birth : any;
  //@ViewChild("signup_hobby1") signup_hobby1 : any;
  //@ViewChild("signup_area") signup_area : any;
  //@ViewChild("signup_purpose1") signup_purpose1 : any;
  //@ViewChild("signup_information_aggrement") signup_information_aggrement : any;
  //@ViewChild("signup_photo") signup_photo : any;
  //@ViewChild("signup_job") signup_job : any;

  constructor(
  	  public navCtrl: NavController,
  	  public navParams: NavParams,
  	  private view: ViewController,
  	  private httpd : Http,
  	  private datePicker: DatePicker,
  	  private transfer: FileTransfer,
	  private camera: Camera,
	  public loadingCtrl: LoadingController,
	  public toastCtrl: ToastController,
	  public common : CommonService,
	  public renderer : Renderer,
	  public elementRef : ElementRef,
	  private readonly file: File,
	  private readonly http: HttpClient
    ) {

  		let param = [];
  		//param.push('UH')
  		this.httpd.get("/api/main/getCommonCode/UH--UJ--UA--UP")
  	      .subscribe(data => {
  	  	    //console.log(data.json());
  	        //return data.json();
  	        this.codes = data.json();
  	      }, 
  	      onerror => {
  	        //return null;
  	      }
        );
  	    //this.codes = common.getCommonCodes(param);
  	    //console.log(this.codes);
  }

  checkId() {
  	if (this.user_id == undefined || this.user_id == null || this.user_id == "") {
  	  alert("Please input your id and retry");
  	  return false;
  	}

  	this.httpd.get("/api/main/dupleCheck?user_id="+this.user_id)
  	  .subscribe(data => {
  	    this.user = data.json();
  		console.log(this.user);
  		alert("You can not use this id");
  		this.valid = false;
      }, 
  	  onerror => {
  	    alert("You can use this id");
  		this.valid = true;
  	  });
  }

  checkNickName() {
  	if (this.nick_name == undefined || this.user_id == null || this.user_id == "") {
  	  alert("Please input your nick name and retry");
  	  return false;
  	}

  	this.httpd.get("/api/main/dupleCheck?user_id="+this.user_id)
  	  .subscribe(data => {
  	    this.user = data.json();
  		console.log(this.user);
  		alert("You can not use this nick name");
  		this.nvalid = false;
      }, 
  	  onerror => {
  	    alert("You can use this nick name");
  		this.nvalid = true;
  	  });
  }

  dismiss() {
    this.data = {"user_id"  : this.user_id};
  	this.view.dismiss(this.data);
  }

  /*getImage() {
	const options: CameraOptions = {
	  quality: 100,
	  destinationType: this.camera.DestinationType.FILE_URI,
	  sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
	}

	this.camera.getPicture(options).then((imageData) => {
	    this.imageURI = imageData;
	  },
	  (err) => {
	    console.log(err);
	    this.presentToast(err);
      }
    );
  }

  uploadFile() {
    let loader = this.loadingCtrl.create({
	  content: "Uploading..."
	});
	loader.present();
	const fileTransfer: FileTransferObject = this.transfer.create();

	let options: FileUploadOptions = {
	  fileKey: 'ionicfile',
	  fileName: this.user_id,
	  chunkedMode: false,
	  mimeType: "image/jpeg",
	  headers: {}
	}

	fileTransfer.upload(this.imageURI, 'http://110.14.70.40/main/uploadImage', options)
	  .then((data) => {
	    //console.log("Uploaded Successfully");
	    //this.imageFileName = "http://192.168.0.7:8080/static/images/ionicfile.jpg"
	    this.photo = this.user_id+".jpg";
	    loader.dismiss();
	    this.presentToast("Image uploaded successfully");
	  }, (err) => {
	    //this.errordata = err.json();
	    console.log(JSON.stringify(err));
	    loader.dismiss();
	    this.presentToast(err);
	  }
	);
  }*/

  takePhoto() {
    this.camera.getPicture({
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.CAMERA,
      encodingType: this.camera.EncodingType.PNG,
      saveToPhotoAlbum: true
    }).then(imageData => {
      this.myPhoto = imageData;
      this.uploadPhoto(imageData);
    }, error => {
      this.error = JSON.stringify(error);
    });
  }

  selectPhoto(): void {
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.FILE_URI,
      quality: 100,
      encodingType: this.camera.EncodingType.PNG,
    }).then(imageData => {
      this.myPhoto = imageData;
      this.uploadPhoto(imageData);
    }, error => {
      this.error = JSON.stringify(error);
    });
  }

  private uploadPhoto(imageFileUri: any): void {
    this.error = null;
    this.loading = this.loadingCtrl.create({
      content: 'Uploading...'
    });

    this.loading.present();
    this.file.resolveLocalFilesystemUrl(imageFileUri)
      .then(entry => (<FileEntry>entry).file(file => this.readFile(file)))
      .catch(err => console.log(err));
  }

  private updateLoading(): void {
    this.error = null;
    this.loading = this.loadingCtrl.create({
      content: 'Connecting to server...'
    });

    this.loading.present();

  }

  private readFile(file: any) {
    const reader = new FileReader();
    reader.onloadend = () => {
      const formData = new FormData();
      const imgBlob = new Blob([reader.result], {type: file.type});
      formData.append('photoimage', imgBlob, file.name);
      
      this.file_name_temp = file.name;
      console.log(file.type);
      console.log(file.name);
      
      this.postData(formData);
    };
    reader.readAsArrayBuffer(file);
  }

  private postData(formData: FormData) {
  	/*let headers = new Headers();
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        let options = new RequestOptions({ "headers": headers });*/
  	this.http.post("/api/main/uploadImage", formData/*, { headers : {
        'Content-Type' : 'multipart/form-data',
    	}
      }*/)
      .pipe(
        catchError(e => this.handleError(e)),
        finalize(() => this.loading.dismiss())
      )
      .subscribe(ok => this.showToast(true));
  }

  private showToast(ok: boolean) {
    if (ok) {
      const toast = this.toastCtrl.create({
        message: 'Upload successful',
        duration: 3000,
        position: 'top'
      });
      toast.present();

      this.file_name = this.file_name_temp;
    }
    else {
      const toast = this.toastCtrl.create({
        message: 'Upload failed',
        duration: 3000,
        position: 'top'
      });
      toast.present();
    }
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

	toast.onDidDismiss(() => {
	  console.log('Dismissed toast');
	});

	toast.present();
  }

  signUp() {
  	if (!this.common.checkBlank(this.user_id, "Please input your id and retry")) {
  		this.signup_user_id.setFocus();
  		return false;
  	}

  	if (!this.common.checkBlank(this.user_password, "Please input your password and retry")) {
  		this.signup_user_password.setFocus();
  		return false;
  	}

  	if (!this.common.checkBlank(this.user_password1, "Please input your re-type password and retry")) {
  		this.signup_user_password1.setFocus();
  		return false;
  	}

  	if (this.user_password != this.user_password1) {
  		alert("Different password and re-type password. check your password")
  		this.signup_user_password1.setFocus();
  		return false;
  	}
  	if (!this.common.checkBlank(this.user_name, "Please input your name and retry")) {
  		this.signup_user_name.setFocus();
  		return false;
  	}
  	if (!this.common.checkBlank(this.nick_name, "Please input your nick name and retry")) {
  		this.signup_nick_name.setFocus();
  		return false;
  	}
  	if (!this.common.checkBlank(this.email, "Please input your email and retry")) {
  		this.signup_email.setFocus();
  		return false;
  	}
  	if (!this.common.checkBlank(this.domain, "Please input your email server address and retry")) {
  		this.signup_domain.setFocus();
  		return false;
  	}
  	if (!this.common.checkBlank(this.cellphone1, "Please input your cellphone number and retry")) {
  		this.signup_cellphone1.setFocus();
  		return false;
  	}
  	if (!this.common.checkBlank(this.cellphone2, "Please input your cellphone number and retry")) {
  		this.signup_cellphone2.setFocus();
  		return false;
  	}
  	if (!this.common.checkBlank(this.cellphone3, "Please input your cellphone number and retry")) {
  		this.signup_cellphone3.setFocus();
  		return false;
  	}
  	if (!this.common.checkBlank(this.gender, "Please select your gender and retry")) {
  		//this.signup_gender.setFocus();
  		return false;
  	}
  	if (!this.common.checkBlank(this.birth, "Please select your birth day and retry")) {
  		//this.signup_birth.setFocus();
  		return false;
  	}
  	if (!this.common.checkBlank(this.file_name, "Please select your photo and retry")) {
  		//this.signup_photo.setFocus();
  		return false;
  	}
  	if (!this.common.checkBlank(this.hobby1, "Please select your hobby1 and retry")) {
  		//this.signup_hobby1.setFocus();
  		return false;
  	}
  	if (!this.common.checkBlank(this.job, "Please select your job and retry")) {
  		//this.signup_job.setFocus();
  		return false;
  	}
  	if (!this.common.checkBlank(this.area, "Please select your area and retry")) {
  		//this.signup_area.setFocus();
  		return false;
  	}
  	if (!this.common.checkBlank(this.purpose1, "Please select your purpose1 and retry")) {
  		//this.signup_purpose1.setFocus();
  		return false;
  	}
  	if (!this.common.checkBlank(this.information_aggrement, "Please check 'Collection and use of personal information' aggrement and retry")) {
  		//this.signup_information_aggrement.setFocus();
  		return false;
  	}

  	if (!this.valid) {
  		alert("You don't id check. Please do and retry");
  		return false;
  	}
  	if (!this.nvalid) {
  		alert("You don't nick name check. Please do and retry");
  		return false;
  	}

  	console.log("signup start");
  	this.updateLoading();
  	console.log("loading start");
  	this.signup = {
  		"user_id" : this.user_id,
  		"user_password" : this.user_password,
  		"user_name" : this.user_name,
  		"nick_name" : this.nick_name,
  		"email" : this.email,
  		"domain" : this.domain,
  		"cellphone1" : this.cellphone1,
  		"cellphone2" : this.cellphone2,
  		"cellphone3" : this.cellphone3,
  		"gender" : this.gender,
  		"birth" : this.birth,
  		"photo" : this.file_name,
  		"recommand_aggrement" : this.recommand_aggrement,
  		"information_aggrement" : this.information_aggrement,
  		"remark" : this.remark,
  		"hobby1" : this.hobby1,
  		"hobby2" : this.hobby2,
  		"hobby3" : this.hobby3,
  		"job" : this.job,
  		"area" : this.area,
  		"purpose1" : this.purpose1,
  		"purpose2" : this.purpose2,
  		"push_message_aggrement" : this.push_message_aggrement,
  		"email_aggrement" : this.email_aggrement
  	}

  	console.log("make signup data"+JSON.stringify(this.signup));

  	this.http.post("/api/main/signup", this.signup/*, { headers : {
        'Content-Type' : 'multipart/form-data',
    	}
      }*/)
      .pipe(
        catchError(e => this.handleError(e)),
        finalize(() => this.loading.dismiss())
      )
      .subscribe(ok => /*ok.json()[0].result=="1"?*/this.presentToast("Saving is complete. And I've sent you an email, so certify.")/*
                         :this.presentToast("Saving is fail.")*/

      	);
  
  }
}
