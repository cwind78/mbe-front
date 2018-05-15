webpackJsonp([1],{

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserdetailPageModule", function() { return UserdetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__userdetail__ = __webpack_require__(707);
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

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
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
    function UserdetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
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
    UserdetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-userdetail',template:/*ion-inline-start:"D:\2. Private\1. Study\2. IONIC\1. Project\mbe-front\src\pages\userdetail\userdetail.html"*/'<!--\n  Generated template for the UserdetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>User Detail</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n	<ion-card>\n		<button ion-button *ngIf="data.recommand.recommand_status==\'1\'" color="secondary" round full (click)="call()">Call</button>\n		<button ion-button *ngIf="data.recommand.recommand_status==\'1\'" color="secondary" round full (click)="deny()">Deny</button>\n		<ion-item>\n			<img src="/api/resources/upload/profile/{{data.recommand.photo}}" height="100px" width="100px">\n		</ion-item>\n		<ion-item>\n			<ion-label color="primary" stacked>Name</ion-label>\n			<ion-input type="text" [disabled]="true" value="{{data.recommand.user_name}}"></ion-input>\n		</ion-item>\n		<ion-item>\n			<ion-label color="primary" stacked>Job Filter</ion-label>\n			<ion-input type="text" [disabled]="true" value="{{getFilted(data.recommand.job)}}"></ion-input>\n		</ion-item>\n		<ion-item>\n			<ion-label color="primary" stacked>Hobby Filter</ion-label>\n			<ion-input type="text" [disabled]="true" value="{{getFilted(data.recommand.hobby)}}"></ion-input>\n		</ion-item>\n		<ion-item>\n			<ion-label color="primary" stacked>Area Filter</ion-label>\n			<ion-input type="text" [disabled]="true" value="{{getFilted(data.recommand.area)}}"></ion-input>\n		</ion-item>\n		<ion-item>\n			<ion-label color="primary" stacked>Gender Filter</ion-label>\n			<ion-input type="text" [disabled]="true" value="{{getFilted(data.recommand.gender)}}"></ion-input>\n		</ion-item>\n		<ion-item>\n			<ion-label color="primary" stacked>Age Filter</ion-label>\n			<ion-input type="text" [disabled]="true" value="{{getFilted(data.recommand.age)}}"></ion-input>\n		</ion-item>\n		<ion-item>\n			<ion-label color="primary" stacked>Purpose Filter</ion-label>\n			<ion-input type="text" [disabled]="true" value="{{getFilted(data.recommand.purpose)}}"></ion-input>\n		</ion-item>\n		<ion-item>\n			<ion-label color="primary" stacked>Caution</ion-label>\n			<ion-input type="text" [disabled]="true" value="{{data.recommand.caution_yn}}"></ion-input>\n		</ion-item>\n	</ion-card>\n</ion-content>\n'/*ion-inline-end:"D:\2. Private\1. Study\2. IONIC\1. Project\mbe-front\src\pages\userdetail\userdetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], UserdetailPage);
    return UserdetailPage;
}());

//# sourceMappingURL=userdetail.js.map

/***/ })

});
//# sourceMappingURL=1.js.map