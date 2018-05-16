webpackJsonp([3],{

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(360);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], SignupPageModule);
    return SignupPageModule;
}());

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 712:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_date_picker__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_common_service__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












/**
 * Generated class for the SignupPage page.
import { Calendar } from '@ionic-native/calendar';
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = /** @class */ (function () {
    //@ViewChild("signup_gender") signup_gender : any;
    //@ViewChild("signup_birth") signup_birth : any;
    //@ViewChild("signup_hobby1") signup_hobby1 : any;
    //@ViewChild("signup_area") signup_area : any;
    //@ViewChild("signup_purpose1") signup_purpose1 : any;
    //@ViewChild("signup_information_aggrement") signup_information_aggrement : any;
    //@ViewChild("signup_photo") signup_photo : any;
    //@ViewChild("signup_job") signup_job : any;
    function SignupPage(navCtrl, navParams, view, httpd, datePicker, transfer, camera, loadingCtrl, toastCtrl, common, renderer, elementRef, file, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.httpd = httpd;
        this.datePicker = datePicker;
        this.transfer = transfer;
        this.camera = camera;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.common = common;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.file = file;
        this.http = http;
        this.data = {};
        this.user = [];
        this.signup = {};
        this.valid = false;
        this.nvalid = false;
        this.calendarVisible = false;
        this.codes = [];
        var param = [];
        //param.push('UH')
        this.httpd.get("/api/main/getCommonCode/UH--UJ--UA--UP")
            .subscribe(function (data) {
            //console.log(data.json());
            //return data.json();
            _this.codes = data.json();
        }, function (onerror) {
            //return null;
        });
        //this.codes = common.getCommonCodes(param);
        //console.log(this.codes);
    }
    SignupPage.prototype.checkId = function () {
        var _this = this;
        if (this.user_id == undefined || this.user_id == null || this.user_id == "") {
            alert("Please input your id and retry");
            return false;
        }
        this.httpd.get("/api/main/dupleCheck?user_id=" + this.user_id)
            .subscribe(function (data) {
            _this.user = data.json();
            console.log(_this.user);
            alert("You can not use this id");
            _this.valid = false;
        }, function (onerror) {
            alert("You can use this id");
            _this.valid = true;
        });
    };
    SignupPage.prototype.checkNickName = function () {
        var _this = this;
        if (this.nick_name == undefined || this.user_id == null || this.user_id == "") {
            alert("Please input your nick name and retry");
            return false;
        }
        this.httpd.get("/api/main/dupleCheck?user_id=" + this.user_id)
            .subscribe(function (data) {
            _this.user = data.json();
            console.log(_this.user);
            alert("You can not use this nick name");
            _this.nvalid = false;
        }, function (onerror) {
            alert("You can use this nick name");
            _this.nvalid = true;
        });
    };
    SignupPage.prototype.dismiss = function () {
        this.data = { "user_id": this.user_id };
        this.view.dismiss(this.data);
    };
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
    SignupPage.prototype.takePhoto = function () {
        var _this = this;
        this.camera.getPicture({
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.CAMERA,
            encodingType: this.camera.EncodingType.PNG,
            saveToPhotoAlbum: true
        }).then(function (imageData) {
            _this.myPhoto = imageData;
            _this.uploadPhoto(imageData);
        }, function (error) {
            _this.error = JSON.stringify(error);
        });
    };
    SignupPage.prototype.selectPhoto = function () {
        var _this = this;
        this.camera.getPicture({
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.FILE_URI,
            quality: 100,
            encodingType: this.camera.EncodingType.PNG,
        }).then(function (imageData) {
            _this.myPhoto = imageData;
            _this.uploadPhoto(imageData);
        }, function (error) {
            _this.error = JSON.stringify(error);
        });
    };
    SignupPage.prototype.uploadPhoto = function (imageFileUri) {
        var _this = this;
        this.error = null;
        this.loading = this.loadingCtrl.create({
            content: 'Uploading...'
        });
        this.loading.present();
        this.file.resolveLocalFilesystemUrl(imageFileUri)
            .then(function (entry) { return entry.file(function (file) { return _this.readFile(file); }); })
            .catch(function (err) { return console.log(err); });
    };
    SignupPage.prototype.updateLoading = function () {
        this.error = null;
        this.loading = this.loadingCtrl.create({
            content: 'Connecting to server...'
        });
        this.loading.present();
    };
    SignupPage.prototype.readFile = function (file) {
        var _this = this;
        var reader = new FileReader();
        reader.onloadend = function () {
            var formData = new FormData();
            var imgBlob = new Blob([reader.result], { type: file.type });
            formData.append('photoimage', imgBlob, file.name);
            _this.file_name_temp = file.name;
            console.log(file.type);
            console.log(file.name);
            _this.postData(formData);
        };
        reader.readAsArrayBuffer(file);
    };
    SignupPage.prototype.postData = function (formData) {
        var _this = this;
        /*let headers = new Headers();
            headers.append('Content-Type', 'multipart/form-data');
            headers.append('Accept', 'application/json');
            let options = new RequestOptions({ "headers": headers });*/
        this.http.post("/api/main/uploadImage", formData /*, { headers : {
            'Content-Type' : 'multipart/form-data',
            }
          }*/)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["catchError"])(function (e) { return _this.handleError(e); }), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["finalize"])(function () { return _this.loading.dismiss(); }))
            .subscribe(function (ok) { return _this.showToast(true); });
    };
    SignupPage.prototype.showToast = function (ok) {
        if (ok) {
            var toast = this.toastCtrl.create({
                message: 'Upload successful',
                duration: 3000,
                position: 'top'
            });
            toast.present();
            this.file_name = this.file_name_temp;
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Upload failed',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
    };
    SignupPage.prototype.handleError = function (error) {
        console.log(JSON.stringify(error));
        var errMsg = error.message ? error.message : error.toString();
        this.error = errMsg;
        return __WEBPACK_IMPORTED_MODULE_9_rxjs__["Observable"].throw(errMsg);
    };
    SignupPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    SignupPage.prototype.signUp = function () {
        var _this = this;
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
            alert("Different password and re-type password. check your password");
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
            "user_id": this.user_id,
            "user_password": this.user_password,
            "user_name": this.user_name,
            "nick_name": this.nick_name,
            "email": this.email,
            "domain": this.domain,
            "cellphone1": this.cellphone1,
            "cellphone2": this.cellphone2,
            "cellphone3": this.cellphone3,
            "gender": this.gender,
            "birth": this.birth,
            "photo": this.file_name,
            "recommand_aggrement": this.recommand_aggrement,
            "information_aggrement": this.information_aggrement,
            "remark": this.remark,
            "hobby1": this.hobby1,
            "hobby2": this.hobby2,
            "hobby3": this.hobby3,
            "job": this.job,
            "area": this.area,
            "purpose1": this.purpose1,
            "purpose2": this.purpose2,
            "push_message_aggrement": this.push_message_aggrement,
            "email_aggrement": this.email_aggrement
        };
        console.log("make signup data" + JSON.stringify(this.signup));
        this.http.post("/api/main/signup", this.signup /*, { headers : {
            'Content-Type' : 'multipart/form-data',
            }
          }*/)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["catchError"])(function (e) { return _this.handleError(e); }), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["finalize"])(function () { return _this.loading.dismiss(); }))
            .subscribe(function (ok) { /*ok.json()[0].result=="1"?*/ return _this.presentToast("Saving is complete. And I've sent you an email, so certify."); } /*
                           :this.presentToast("Saving is fail.")*/);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("signup_user_id"),
        __metadata("design:type", Object)
    ], SignupPage.prototype, "signup_user_id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("signup_user_password"),
        __metadata("design:type", Object)
    ], SignupPage.prototype, "signup_user_password", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("signup_user_password1"),
        __metadata("design:type", Object)
    ], SignupPage.prototype, "signup_user_password1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("signup_user_name"),
        __metadata("design:type", Object)
    ], SignupPage.prototype, "signup_user_name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("signup_nick_name"),
        __metadata("design:type", Object)
    ], SignupPage.prototype, "signup_nick_name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("signup_email"),
        __metadata("design:type", Object)
    ], SignupPage.prototype, "signup_email", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("signup_domain"),
        __metadata("design:type", Object)
    ], SignupPage.prototype, "signup_domain", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("signup_cellphone1"),
        __metadata("design:type", Object)
    ], SignupPage.prototype, "signup_cellphone1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("signup_cellphone2"),
        __metadata("design:type", Object)
    ], SignupPage.prototype, "signup_cellphone2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("signup_cellphone3"),
        __metadata("design:type", Object)
    ], SignupPage.prototype, "signup_cellphone3", void 0);
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"D:\2. Private\1. Study\2. IONIC\1. Project\mbe-front\src\pages\signup\signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Sign Up</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<ion-item>\n		<ion-label color="primary" stacked>ID</ion-label>\n        <ion-input type="text" clearInput="true" max="20" min="6" #signup_user_id [(ngModel)]="user_id" placeholder=""></ion-input>\n      	<button ion-button clear item-right (click)="checkId()">ID Check</button>\n    </ion-item>\n    <ion-item>\n    	<ion-label color="primary" stacked>PASSWORD</ion-label>\n    	<ion-input type="password" #signup_user_password [(ngModel)]="user_password" placeholder=""></ion-input>\n    </ion-item>\n    <ion-item>\n    	<ion-label color="primary" stacked>Re-type PWD</ion-label>\n    	<ion-input type="password" #signup_user_password1 [(ngModel)]="user_password1" placeholder=""></ion-input>\n    </ion-item>\n    <ion-item>\n    	<ion-label color="primary" stacked>Name</ion-label>\n    	<ion-input type="text" #signup_user_name [(ngModel)]="user_name" placeholder=""></ion-input>\n    </ion-item>\n    <ion-item>\n    	<ion-label color="primary" stacked>Nick name</ion-label>\n    	<ion-input type="text" #signup_nick_name [(ngModel)]="nick_name" placeholder=""></ion-input>\n    	<button ion-button clear item-right (click)="checkNickName()">ID Check</button>\n    </ion-item>\n    <ion-item>\n    	<ion-label color="primary" stacked>Email</ion-label>\n    	<ion-input type="text" #signup_email [(ngModel)]="email" placeholder="Email ID"></ion-input>\n    	<ion-input type="text" #signup_domain [(ngModel)]="domain" placeholder="Eamil server address"></ion-input>\n    </ion-item>\n    <ion-item>\n    	<ion-label color="primary" stacked>Cellphone</ion-label>\n    	<ion-input type="text" #signup_cellphone1 [(ngModel)]="cellphone1" placeholder="010"></ion-input>\n    	<ion-input type="text" #signup_cellphone2 [(ngModel)]="cellphone2" placeholder="1111"></ion-input>\n    	<ion-input type="text" #signup_cellphone3 [(ngModel)]="cellphone3" placeholder="2222"></ion-input>\n    </ion-item>\n    \n	<ion-card radio-group [(ngModel)]="gender">\n		<ion-item>\n	    	<ion-label color="primary" stacked>Female</ion-label>\n	    	<ion-radio value="F"></ion-radio>\n	    </ion-item>\n	    <ion-item>\n	    	<ion-label color="primary" stacked>Male</ion-label>\n	    	<ion-radio value="M"></ion-radio>\n	    </ion-item>\n    </ion-card>\n    <ion-item>\n    	<ion-label color="primary" stacked>Birth</ion-label>\n    	<ion-datetime #signup_birth displayFormat="YYYY-MM-DD" [(ngModel)]="birth"></ion-datetime>\n    	<!--ion-input type="text" (click)="openCalendar()" [(ngModel)]="birth" placeholder="" [readonly]="true"></ion-input-->\n    </ion-item>\n    <!--ion-item>\n    <p>{{imageURI}}</p>\n    <button ion-button color="secondary" #signup_photo (click)="getImage()">Get Image</button>\n    <button ion-button (click)="uploadFile()">Upload</button>\n  </ion-item-->\n  <!--ion-item>\n    <h4>Image Preview</h4>\n    <img src="{{imageFileName}}" *ngIf="imageFileName" alt="Ionic File" width="300" />\n  </ion-item-->\n  <!--ion-item>\n    <button ion-button (click)="uploadFile()">Upload</button>\n  </ion-item-->\n  <ion-item>\n  	<button ion-button color="danger" type="button" round large (click)="takePhoto()">\n         <ion-icon name="camera"></ion-icon>\n       </button>\n       <button ion-button color="secondary" type="button" round large (click)="selectPhoto()">\n         <ion-icon name="image"></ion-icon>\n       </button>\n  </ion-item>\n  <ion-item>\n  	<img src="/api/resources/upload/profile/{{file_name}}" *ngIf="file_name" width="300"/>\n  </ion-item>\n  <ion-item>\n    <ion-label color="primary" stacked>Hobby1</ion-label>\n    <ion-select #signup_hobby1 [(ngModel)]="hobby1">\n      <ion-option *ngFor="let item of codes | codeFilter : {code_group : \'UH\'}" [value]="item.code">{{item.code_name}}</ion-option>\n    </ion-select>\n  </ion-item>\n  <ion-item>\n    <ion-label stacked>Hobby2</ion-label>\n    <ion-select [(ngModel)]="hobby2">\n      <ion-option *ngFor="let item of codes | codeFilter : {code_group : \'UH\'}" [value]="item.code">{{item.code_name}}</ion-option>\n    </ion-select>\n  </ion-item>\n  <ion-item>\n    <ion-label stacked>Hobby3</ion-label>\n    <ion-select [(ngModel)]="hobby3">\n      <ion-option *ngFor="let item of codes | codeFilter : {code_group : \'UH\'}" [value]="item.code">{{item.code_name}}</ion-option>\n    </ion-select>\n  </ion-item>\n  <ion-item>\n    <ion-label color="primary" stacked>Job</ion-label>\n    <ion-select #signup_job [(ngModel)]="job">\n      <ion-option *ngFor="let item of codes | codeFilter : {code_group : \'UJ\'}" [value]="item.code">{{item.code_name}}</ion-option>\n    </ion-select>\n  </ion-item>\n  <ion-item>\n    <ion-label color="primary" stacked>Area</ion-label>\n    <ion-select #signup_area [(ngModel)]="area">\n      <ion-option *ngFor="let item of codes | codeFilter : {code_group : \'UA\'}" [value]="item.code">{{item.code_name}}</ion-option>\n    </ion-select>\n  </ion-item>\n  <ion-item>\n    <ion-label color="primary" stacked>Purpose1</ion-label>\n    <ion-select #signup_purpose1 [(ngModel)]="purpose1">\n      <ion-option *ngFor="let item of codes | codeFilter : {code_group : \'UP\'}" [value]="item.code">{{item.code_name}}</ion-option>\n    </ion-select>\n  </ion-item>\n  <ion-item>\n    <ion-label stacked>Purpose2</ion-label>\n    <ion-select [(ngModel)]="purpose2">\n      <ion-option *ngFor="let item of codes | codeFilter : {code_group : \'UP\'}" [value]="item.code">{{item.code_name}}</ion-option>\n    </ion-select>\n  </ion-item>\n  <ion-card>\n  <ion-item>\n    <ion-label stacked>Recommand</ion-label>\n    <ion-toggle [(ngModel)]="recommand_aggrement"></ion-toggle>\n  </ion-item>\n  <ion-item>\n    <ion-label color="primary" stacked>Collection and use of personal information</ion-label>\n    <ion-toggle #signup_information_aggrement [(ngModel)]="information_aggrement"></ion-toggle>\n  </ion-item>\n  <ion-item>\n    <ion-label stacked>Aggrement of receving email</ion-label>\n    <ion-toggle [(ngModel)]="email_aggrement"></ion-toggle>\n  </ion-item>\n  <ion-item>\n    <ion-label stacked>Aggrement of receving push notification</ion-label>\n    <ion-toggle [(ngModel)]="push_message_aggrement"></ion-toggle>\n  </ion-item>\n  </ion-card>\n  <ion-item>\n    	<ion-label color="primary" stacked>Introduce</ion-label>\n    	<ion-input type="text" #signup_remark [(ngModel)]="remark" placeholder=""></ion-input>\n    </ion-item>\n  <button ion-button color="secondary" round large full (click)="signUp()">Sign Up</button>\n</ion-content>'/*ion-inline-end:"D:\2. Private\1. Study\2. IONIC\1. Project\mbe-front\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_date_picker__["a" /* DatePicker */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_6__app_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["a" /* HttpClient */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ })

});
//# sourceMappingURL=3.js.map