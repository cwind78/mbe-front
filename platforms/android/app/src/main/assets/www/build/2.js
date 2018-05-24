webpackJsonp([2],{

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyeditPageModule", function() { return SurveyeditPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__surveyedit__ = __webpack_require__(740);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SurveyeditPageModule = /** @class */ (function () {
    function SurveyeditPageModule() {
    }
    SurveyeditPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__surveyedit__["a" /* SurveyeditPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__surveyedit__["a" /* SurveyeditPage */]),
            ],
        })
    ], SurveyeditPageModule);
    return SurveyeditPageModule;
}());

//# sourceMappingURL=surveyedit.module.js.map

/***/ }),

/***/ 740:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyeditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_common_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs__);
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
 * Generated class for the SurveyeditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SurveyeditPage = /** @class */ (function () {
    function SurveyeditPage(navCtrl, navParams, http, httpClient, loadingCtrl, toastCtrl, common, view) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.httpClient = httpClient;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.common = common;
        this.view = view;
        this.origin_user_value = 0;
        this.data = {
            survey: {
                survey_subject: "",
                due_time: "",
                user_value: "",
                seq_no: ""
            }
        };
        var originData = navParams.get("data");
        this.origin_user_value = parseInt(navParams.get("user_value"));
        if (originData != null) {
            this.data.survey = JSON.parse(JSON.stringify(originData));
        }
    }
    SurveyeditPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SurveyeditPage');
    };
    SurveyeditPage.prototype.save = function () {
        var _this = this;
        if (!this.common.checkBlank(this.data.survey.survey_subject, "Please input subject and retry")) {
            this.survey_subject.setFocus();
            return false;
        }
        if (!this.common.checkBlank(this.data.survey.due_time, "Please input due_time and retry")) {
            this.due_time.setFocus();
            return false;
        }
        if (!this.common.checkBlank(this.data.survey.user_value, "Please input win count and retry")) {
            this.user_value.setFocus();
            return false;
        }
        if (this.origin_user_value < parseInt(this.data.survey.user_value)) {
            //alert("You used all of today's possible survey or check that your survey finished");
            alert("You are possible to input less more than " + this.origin_user_value + " point");
            this.user_value.setFocus();
            return false;
        }
        this.updateLoading();
        this.http.post("/api/main/survey/user", { surveys: [this.data.survey] })
            .subscribe(function (ok) {
            _this.presentToast("Saving is complete.");
            _this.loading.dismiss();
            _this.dismiss();
        }, function (onerror) {
            //return null;
            _this.presentToast("You can not save if you have two ended surveys or if you have an ongoing survey. And you can only enter less than " + _this.origin_user_value + " points.");
            _this.loading.dismiss();
        });
    };
    SurveyeditPage.prototype.dismiss = function () {
        this.view.dismiss();
    };
    SurveyeditPage.prototype.handleError = function (error) {
        console.log(JSON.stringify(error));
        var errMsg = error.message ? error.message : error.toString();
        this.error = errMsg;
        return __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"].throw(errMsg);
    };
    SurveyeditPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
    };
    SurveyeditPage.prototype.updateLoading = function () {
        this.error = null;
        this.loading = this.loadingCtrl.create({
            content: 'Connecting to server...'
        });
        this.loading.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("survey_subject"),
        __metadata("design:type", Object)
    ], SurveyeditPage.prototype, "survey_subject", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("due_time"),
        __metadata("design:type", Object)
    ], SurveyeditPage.prototype, "due_time", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("user_value"),
        __metadata("design:type", Object)
    ], SurveyeditPage.prototype, "user_value", void 0);
    SurveyeditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-surveyedit',template:/*ion-inline-start:"D:\2. Private\1. Study\2. IONIC\1. Project\mbe-front\src\pages\surveyedit\surveyedit.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Survey Detail</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<button *ngIf="!data.survey.seq_no" ion-button color="secondary" round large full (click)="save()">Save</button>\n	<ion-item>\n		<ion-label color="primary" stacked>Subject</ion-label>\n        <ion-input type="text" clearInput="true" max="100" #survey_subject [(ngModel)]="data.survey.survey_subject" placeholder=""></ion-input>\n    </ion-item>\n    <ion-item>\n		<ion-label color="primary" stacked>Due Time(from registed)</ion-label>\n        <ion-input type="text" clearInput="true" max="2" #due_time [(ngModel)]="data.survey.due_time" placeholder=""></ion-input>\n    </ion-item>\n    <ion-item>\n		<ion-label color="primary" stacked>Win count</ion-label>\n        <ion-input type="text" clearInput="true" max="2" #user_value [(ngModel)]="data.survey.user_value" placeholder=""></ion-input>\n        \n    </ion-item>\n    <ion-item>\n    	<ion-badge item-end>투표수 : {{data.survey.vote}}</ion-badge>\n    	<ion-badge item-end>찬성 : {{data.survey.vote_yes}}</ion-badge>\n    	<ion-badge item-end>반대 : {{data.survey.vote_no}}</ion-badge>\n    </ion-item>\n    <ion-item>\n    <ion-range min="0" max="100" [(ngModel)]="data.survey.vote" disabled color="secondary">\n      <ion-label range-left>0</ion-label>\n      <ion-label range-right>100</ion-label>\n    </ion-range>\n  </ion-item>\n    <div>참여자가 win count에 도달하면 포인트를 지급하고 survey를 종료합니다.</div>\n        <div>다음 설문의 win count 최대치는 입력한 win count * 0.7(내림) 입니다.</div>\n</ion-content>\n'/*ion-inline-end:"D:\2. Private\1. Study\2. IONIC\1. Project\mbe-front\src\pages\surveyedit\surveyedit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__app_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], SurveyeditPage);
    return SurveyeditPage;
}());

//# sourceMappingURL=surveyedit.js.map

/***/ })

});
//# sourceMappingURL=2.js.map