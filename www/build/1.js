webpackJsonp([1],{

/***/ 735:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserdetailPageModule", function() { return UserdetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__userdetail__ = __webpack_require__(741);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UserdetailPageModule = /** @class */ (function () {
    function UserdetailPageModule() {
    }
    UserdetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__userdetail__["a" /* UserdetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__userdetail__["a" /* UserdetailPage */]),
            ],
        })
    ], UserdetailPageModule);
    return UserdetailPageModule;
}());

//# sourceMappingURL=userdetail.module.js.map

/***/ }),

/***/ 741:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
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
 * Generated class for the UserdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserdetailPage = /** @class */ (function () {
    function UserdetailPage(navCtrl, navParams, view, http, httpClient, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.http = http;
        this.httpClient = httpClient;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.data = {
            recommand: {}
        };
        var originData = navParams.get("data");
        if (originData != null) {
            this.data.recommand = JSON.parse(JSON.stringify(originData));
        }
    }
    UserdetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserdetailPage');
    };
    UserdetailPage.prototype.getFilted = function (value) {
        return value != "0" ? "Y" : "";
    };
    UserdetailPage.prototype.dismiss = function () {
        this.view.dismiss();
    };
    UserdetailPage.prototype.call = function (url) {
        var _this = this;
        url = (url == null ? "call" : url);
        if (url == "call") {
            if (!confirm("If you execute to call, your point decrease. Understand this all?")) {
                return false;
            }
        }
        this.updateLoading();
        this.http.post("/api/main/recommand/" + url, this.data.recommand)
            .subscribe(function (ok) {
            _this.presentToast((url == "call" ? "Calling" : "Denial") + " is complete.");
            _this.loading.dismiss();
            _this.dismiss();
        }, function (onerror) {
            //return null;
            _this.presentToast("Faild to " + (url == "call" ? "call. You don't have enough point" : "deny"));
            _this.loading.dismiss();
        });
    };
    UserdetailPage.prototype.deny = function () {
        if (!confirm("If you execute to call, your point decrease. Understand this all?")) {
            return false;
        }
        this.call("deny");
    };
    UserdetailPage.prototype.handleError = function (error) {
        console.log(JSON.stringify(error));
        var errMsg = error.message ? error.message : error.toString();
        this.error = errMsg;
        return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(errMsg);
    };
    UserdetailPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    UserdetailPage.prototype.updateLoading = function () {
        this.error = null;
        this.loading = this.loadingCtrl.create({
            content: 'Connecting to server...'
        });
        this.loading.present();
    };
    UserdetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-userdetail',template:/*ion-inline-start:"D:\2. Private\1. Study\2. IONIC\1. Project\mbe-front\src\pages\userdetail\userdetail.html"*/'<!--\n  Generated template for the UserdetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>User Detail</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n	<ion-card>\n		<button ion-button *ngIf="data.recommand.recommand_status==\'1\'" color="secondary" round full (click)="call()">Call</button>\n		<button ion-button *ngIf="data.recommand.recommand_status==\'1\'" color="secondary" round full (click)="deny()">Deny</button>\n		<ion-item>\n			<img src="/api/resources/upload/profile/{{data.recommand.photo}}" height="100px" width="100px">\n		</ion-item>\n		<ion-item>\n			<ion-label color="primary" stacked>Name</ion-label>\n			<ion-input type="text" [disabled]="true" value="{{data.recommand.user_name}}"></ion-input>\n		</ion-item>\n		<ion-item>\n			<ion-label color="primary" stacked>Job Filter</ion-label>\n			<ion-input type="text" [disabled]="true" value="{{getFilted(data.recommand.job)}}"></ion-input>\n		</ion-item>\n		<ion-item>\n			<ion-label color="primary" stacked>Hobby Filter</ion-label>\n			<ion-input type="text" [disabled]="true" value="{{getFilted(data.recommand.hobby)}}"></ion-input>\n		</ion-item>\n		<ion-item>\n			<ion-label color="primary" stacked>Area Filter</ion-label>\n			<ion-input type="text" [disabled]="true" value="{{getFilted(data.recommand.area)}}"></ion-input>\n		</ion-item>\n		<ion-item>\n			<ion-label color="primary" stacked>Gender Filter</ion-label>\n			<ion-input type="text" [disabled]="true" value="{{getFilted(data.recommand.gender)}}"></ion-input>\n		</ion-item>\n		<ion-item>\n			<ion-label color="primary" stacked>Age Filter</ion-label>\n			<ion-input type="text" [disabled]="true" value="{{getFilted(data.recommand.age)}}"></ion-input>\n		</ion-item>\n		<ion-item>\n			<ion-label color="primary" stacked>Purpose Filter</ion-label>\n			<ion-input type="text" [disabled]="true" value="{{getFilted(data.recommand.purpose)}}"></ion-input>\n		</ion-item>\n		<ion-item>\n			<ion-label color="primary" stacked>Caution</ion-label>\n			<ion-input type="text" [disabled]="true" value="{{data.recommand.caution_yn}}"></ion-input>\n		</ion-item>\n	</ion-card>\n</ion-content>\n'/*ion-inline-end:"D:\2. Private\1. Study\2. IONIC\1. Project\mbe-front\src\pages\userdetail\userdetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], UserdetailPage);
    return UserdetailPage;
}());

//# sourceMappingURL=userdetail.js.map

/***/ })

});
//# sourceMappingURL=1.js.map