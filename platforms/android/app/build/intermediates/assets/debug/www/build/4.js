webpackJsonp([4],{

/***/ 694:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcceptdetailPageModule", function() { return AcceptdetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__acceptdetail__ = __webpack_require__(711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(360);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AcceptdetailPageModule = /** @class */ (function () {
    function AcceptdetailPageModule() {
    }
    AcceptdetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__acceptdetail__["a" /* AcceptdetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__acceptdetail__["a" /* AcceptdetailPage */]),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], AcceptdetailPageModule);
    return AcceptdetailPageModule;
}());

//# sourceMappingURL=acceptdetail.module.js.map

/***/ }),

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AcceptdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(358);
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
 * Generated class for the AcceptdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AcceptdetailPage = /** @class */ (function () {
    function AcceptdetailPage(navCtrl, navParams, http, httpClient, loadingCtrl, toastCtrl, view) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.httpClient = httpClient;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.view = view;
        this.data = {
            codes: [],
            recommand: {}
        };
        var originData = navParams.get("data");
        if (originData != null) {
            this.data.recommand = JSON.parse(JSON.stringify(originData));
        }
        this.getCode();
    }
    AcceptdetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AcceptdetailPage');
    };
    AcceptdetailPage.prototype.ionViewWillEnter = function () {
        //
    };
    AcceptdetailPage.prototype.getCode = function () {
        var _this = this;
        this.http.get("/api/main/getCommonCode/UH--UJ--UA--UP--UG")
            .subscribe(function (data) {
            //console.log(data.json());
            //return data.json();
            _this.data.codes = data.json();
        }, function (onerror) {
            //return null;
        });
    };
    AcceptdetailPage.prototype.dismiss = function () {
        this.view.dismiss();
    };
    AcceptdetailPage.prototype.accept = function (url) {
        var _this = this;
        this.updateLoading();
        this.http.post("/api/main/called/accept", this.data.recommand)
            .subscribe(function (ok) {
            _this.presentToast("Acceptance is complete.");
            _this.loading.dismiss();
            _this.dismiss();
        }, function (onerror) {
            //return null;
            _this.presentToast("Faild to acceptance");
            _this.loading.dismiss();
        });
    };
    AcceptdetailPage.prototype.deny = function () {
        var _this = this;
        this.updateLoading();
        this.http.post("/api/main/called/deny", this.data.recommand)
            .subscribe(function (ok) {
            _this.presentToast("Denial is complete.");
            _this.loading.dismiss();
            _this.dismiss();
        }, function (onerror) {
            //return null;
            _this.presentToast("Faild to denial");
            _this.loading.dismiss();
        });
    };
    AcceptdetailPage.prototype.handleError = function (error) {
        console.log(JSON.stringify(error));
        var errMsg = error.message ? error.message : error.toString();
        this.error = errMsg;
        return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(errMsg);
    };
    AcceptdetailPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    AcceptdetailPage.prototype.updateLoading = function () {
        this.error = null;
        this.loading = this.loadingCtrl.create({
            content: 'Connecting to server...'
        });
        this.loading.present();
    };
    AcceptdetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-acceptdetail',template:/*ion-inline-start:"D:\2. Private\1. Study\2. IONIC\1. Project\mbe-front\src\pages\acceptdetail\acceptdetail.html"*/'<!--\n  Generated template for the AcceptdetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Acceptance Detail</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n	<ion-card>\n		<button ion-button *ngIf="data.recommand.acceptance_yn==\'N\'" color="secondary" round full (click)="accept()">Accept</button>\n		<button ion-button *ngIf="data.recommand.acceptance_yn==\'N\'" color="secondary" round full (click)="deny()">Deny</button>\n		<ion-item>\n			<img src="/api/resources/upload/profile/{{data.recommand.photo}}" height="100px" width="100px">\n		</ion-item>\n		<ion-item>\n			<ion-label color="primary" stacked>Name</ion-label>\n			<ion-input type="text" [disabled]="true" value="{{data.recommand.nick_name}}"></ion-input>\n		</ion-item>\n		<ion-item>\n			<ion-label color="primary" stacked>Job</ion-label>\n			<ion-select [(ngModel)]="data.recommand.job" [disabled]="true">\n				<ion-option *ngFor="let item of data.codes | codeFilter : {code_group : \'UJ\'}" [value]="item.code">{{item.code_name}}</ion-option>\n			</ion-select>\n		</ion-item>\n		<ion-item>\n			<ion-label color="primary" stacked>Area</ion-label>\n			<ion-select [(ngModel)]="data.recommand.area" [disabled]="true">\n				<ion-option *ngFor="let item of data.codes | codeFilter : {code_group : \'UA\'}" [value]="item.code">{{item.code_name}}</ion-option>\n			</ion-select>\n		</ion-item>\n		<ion-item>\n			<ion-label color="primary" stacked>Hobby1</ion-label>\n			<ion-select [(ngModel)]="data.recommand.hobby1" [disabled]="true">\n				<ion-option *ngFor="let item of data.codes | codeFilter : {code_group : \'UH\'}" [value]="item.code">{{item.code_name}}</ion-option>\n			</ion-select>\n		</ion-item>\n		<ion-item>\n			<ion-label color="primary" stacked>Hobby2</ion-label>\n			<ion-select [(ngModel)]="data.recommand.hobby2" [disabled]="true">\n				<ion-option *ngFor="let item of data.codes | codeFilter : {code_group : \'UH\'}" [value]="item.code">{{item.code_name}}</ion-option>\n			</ion-select>\n		</ion-item>\n		<ion-item>\n			<ion-label color="primary" stacked>Hobby3</ion-label>\n			<ion-select [(ngModel)]="data.recommand.hobby3" [disabled]="true">\n				<ion-option *ngFor="let item of data.codes | codeFilter : {code_group : \'UH\'}" [value]="item.code">{{item.code_name}}</ion-option>\n			</ion-select>\n		</ion-item>\n		<ion-item>\n			<ion-label color="primary" stacked>Purpose1</ion-label>\n			<ion-select [(ngModel)]="data.recommand.purpose1" [disabled]="true">\n				<ion-option *ngFor="let item of data.codes | codeFilter : {code_group : \'UP\'}" [value]="item.code">{{item.code_name}}</ion-option>\n			</ion-select>\n		</ion-item>\n		<ion-item>\n			<ion-label color="primary" stacked>Purpose2</ion-label>\n			<ion-select [(ngModel)]="data.recommand.purpose2" [disabled]="true">\n				<ion-option *ngFor="let item of data.codes | codeFilter : {code_group : \'UP\'}" [value]="item.code">{{item.code_name}}</ion-option>\n			</ion-select>\n		</ion-item>\n		<ion-item>\n			<ion-label color="primary" stacked>Gender</ion-label>\n			<ion-select [(ngModel)]="data.recommand.gender" [disabled]="true">\n				<ion-option *ngFor="let item of data.codes | codeFilter : {code_group : \'UG\'}" [value]="item.code">{{item.code_name}}</ion-option>\n			</ion-select>\n		</ion-item>\n		<ion-item>\n			<ion-label color="primary" stacked>Remark</ion-label>\n			<ion-input type="text" [disabled]="true" value="{{data.recommand.remark}}"></ion-input>\n		</ion-item>\n	</ion-card>\n</ion-content>'/*ion-inline-end:"D:\2. Private\1. Study\2. IONIC\1. Project\mbe-front\src\pages\acceptdetail\acceptdetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], AcceptdetailPage);
    return AcceptdetailPage;
}());

//# sourceMappingURL=acceptdetail.js.map

/***/ })

});
//# sourceMappingURL=4.js.map