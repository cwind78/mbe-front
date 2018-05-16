webpackJsonp([0],{

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VotePageModule", function() { return VotePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vote__ = __webpack_require__(715);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VotePageModule = /** @class */ (function () {
    function VotePageModule() {
    }
    VotePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__vote__["a" /* VotePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__vote__["a" /* VotePage */]),
            ],
        })
    ], VotePageModule);
    return VotePageModule;
}());

//# sourceMappingURL=vote.module.js.map

/***/ }),

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VotePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_common_service__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs__ = __webpack_require__(358);
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
 * Generated class for the VotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VotePage = /** @class */ (function () {
    function VotePage(navCtrl, navParams, http, httpClient, loadingCtrl, toastCtrl, common, view) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.httpClient = httpClient;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.common = common;
        this.view = view;
        this.data = {
            survey: {}
        };
        var originData = navParams.get("data");
        if (originData != null) {
            this.data.survey = JSON.parse(JSON.stringify(originData));
        }
    }
    VotePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VotePage');
    };
    VotePage.prototype.dismiss = function () {
        this.view.dismiss();
    };
    VotePage.prototype.vote = function (flag) {
        var _this = this;
        this.updateLoading();
        if (flag == "Y") {
            if (this.data.survey["vote_yes"] == undefined || this.data.survey["vote_yes"] == null || this.data.survey["vote_yes"] == "") {
                this.data.survey["vote_yes"] = 1;
            }
            else {
                this.data.survey["vote_yes"] = parseInt(this.data.survey["vote_yes"]) + 1;
            }
        }
        else {
            if (this.data.survey["vote_no"] == undefined || this.data.survey["vote_no"] == null || this.data.survey["vote_no"] == "") {
                this.data.survey["vote_no"] = 1;
            }
            else {
                this.data.survey["vote_no"] = parseInt(this.data.survey["vote_no"]) + 1;
            }
        }
        this.data.survey["vote_yes_or_no"] = flag;
        this.http.post("/api/main/survey/vote", { surveys: [this.data.survey] })
            .subscribe(function (ok) {
            _this.presentToast("Saving is complete.");
            _this.loading.dismiss();
            _this.dismiss();
        }, function (onerror) {
            //return null;
            _this.presentToast("Faild to vote");
            _this.loading.dismiss();
        });
    };
    VotePage.prototype.handleError = function (error) {
        console.log(JSON.stringify(error));
        var errMsg = error.message ? error.message : error.toString();
        this.error = errMsg;
        return __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"].throw(errMsg);
    };
    VotePage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
    };
    VotePage.prototype.updateLoading = function () {
        this.error = null;
        this.loading = this.loadingCtrl.create({
            content: 'Connecting to server...'
        });
        this.loading.present();
    };
    VotePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-vote',template:/*ion-inline-start:"D:\2. Private\1. Study\2. IONIC\1. Project\mbe-front\src\pages\vote\vote.html"*/'<!--\n  Generated template for the VotePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Vote</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<button ion-button color="secondary" round large (click)="vote(\'Y\')">Yes</button>\n<button ion-button color="danger" round large (click)="vote(\'N\')">No</button>\n	<ion-item>\n		<ion-label color="primary" stacked>Subject</ion-label>\n        <ion-input type="text" clearInput="true" max="100" #survey_subject [(ngModel)]="data.survey.survey_subject" placeholder=""></ion-input>\n    </ion-item>\n    <ion-item>\n		<ion-label color="primary" stacked>Due Time(from registed)</ion-label>\n        <ion-input type="text" clearInput="true" max="2" #due_time [(ngModel)]="data.survey.due_time" placeholder=""></ion-input>\n    </ion-item>\n    <ion-item>\n		<ion-label color="primary" stacked>Win count</ion-label>\n        <ion-input type="text" clearInput="true" max="2" #user_value [(ngModel)]="data.survey.user_value" placeholder=""></ion-input>\n        \n    </ion-item>\n    <ion-item>\n    	<ion-badge item-end>투표수 : {{data.survey.vote}}</ion-badge>\n    	<ion-badge item-end>찬성 : {{data.survey.vote_yes}}</ion-badge>\n    	<ion-badge item-end>반대 : {{data.survey.vote_no}}</ion-badge>\n    </ion-item>\n    <ion-item>\n    <ion-range min="0" max="100" [(ngModel)]="data.survey.vote" disabled color="secondary">\n      <ion-label range-left>0</ion-label>\n      <ion-label range-right>100</ion-label>\n    </ion-range>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"D:\2. Private\1. Study\2. IONIC\1. Project\mbe-front\src\pages\vote\vote.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__app_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], VotePage);
    return VotePage;
}());

//# sourceMappingURL=vote.js.map

/***/ })

});
//# sourceMappingURL=0.js.map