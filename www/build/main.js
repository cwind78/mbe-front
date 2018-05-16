webpackJsonp([17],{

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalledPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(22);
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
 * Generated class for the CalledPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CalledPage = /** @class */ (function () {
    function CalledPage(navCtrl, navParams, http, loadingCtrl, toastCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.data = {
            recommand: []
        };
    }
    CalledPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CalledPage');
    };
    CalledPage.prototype.ionViewWillEnter = function () {
        this.calledMeRecommandedUser();
    };
    CalledPage.prototype.calledMeRecommandedUser = function () {
        var _this = this;
        this.updateLoading();
        this.http.get("/api/main/called")
            .subscribe(function (data) {
            console.log(JSON.stringify(data.json()));
            //return data.json();
            _this.data.recommand = data.json();
            _this.loading.dismiss();
        }, function (onerror) {
            //return null;
            _this.data.recommand = [];
            _this.loading.dismiss();
        });
    };
    CalledPage.prototype.updateLoading = function () {
        this.error = null;
        this.loading = this.loadingCtrl.create({
            content: 'Connecting to server...'
        });
        this.loading.present();
    };
    CalledPage.prototype.detail = function (item) {
        var _this = this;
        var myModalOptions = {
            enableBackdropDismiss: false
        };
        var myModal = this.modalCtrl.create('AcceptdetailPage', { data: item }, myModalOptions);
        myModal.present();
        myModal.onDidDismiss(function (data) {
            console.log("I have dismissed.");
            console.log(data);
            _this.calledMeRecommandedUser();
        });
        myModal.onWillDismiss(function (data) {
            console.log("I'm about to dismiss");
            console.log(data);
        });
    };
    CalledPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-called',template:/*ion-inline-start:"D:\2. Private\1. Study\2. IONIC\1. Project\mbe-front\src\pages\called\called.html"*/'\n<ion-header>\n  <ion-navbar hideBackButton>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Called</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n	<div *ngIf="!data.recommand.length">No Data</div>\n	<ion-card *ngFor="let item of data.recommand" (click)="detail(item)">\n		<ion-item>\n			<img src="/api/resources/upload/profile/{{item.photo}}" height="100px" width="100px">\n		</ion-item>\n		<ion-item>\n			<ion-label color="primary" stacked>Name</ion-label>\n			<ion-input type="text" [disabled]="true" value="{{item.nick_name}}"></ion-input>\n		</ion-item>\n		<ion-item *ngIf="item.acceptance_yn==\'Y\'">\n			Acceptance&nbsp;:&nbsp;&nbsp;&nbsp;<ion-icon name="checkmark"></ion-icon>\n		</ion-item>\n		<ion-item *ngIf="item.caution_yn==\'Y\'">\n			Acceptance&nbsp;:&nbsp;&nbsp;&nbsp;<ion-icon name="checkmark"></ion-icon>\n		</ion-item>\n	</ion-card>\n</ion-content>\n'/*ion-inline-end:"D:\2. Private\1. Study\2. IONIC\1. Project\mbe-front\src\pages\called\called.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], CalledPage);
    return CalledPage;
}());

//# sourceMappingURL=called.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(45);
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
 * Generated class for the CardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CardPage = /** @class */ (function () {
    function CardPage(navCtrl, navParams, http, httpClient, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.httpClient = httpClient;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.point = 0;
        this.valid = false;
        this.result = false;
        this.selected_card = null;
        this.data = {
            user: [],
            card: {}
        };
    }
    CardPage.prototype.ionViewWillEnter = function () {
        this.getPoint();
        this.refresh();
    };
    CardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CardPage');
    };
    CardPage.prototype.getPoint = function () {
        var _this = this;
        this.http.get("/api/main/user/point")
            .subscribe(function (data) {
            //console.log(data.json());
            //return data.json();
            _this.data.user = data.json();
            _this.point = _this.data.user[0]["point"];
        }, function (onerror) {
            //return null;
        });
    };
    CardPage.prototype.getColor = function (card) {
        if (this.selected_card == null) {
            return "";
        }
        else {
            if (this.selected_card == card) {
                return "coral";
            }
        }
    };
    CardPage.prototype.refresh = function () {
        this.valid = false;
        this.selected_card = null;
        this.card1 = Math.floor(Math.random() * 100) + 1;
        this.card2 = Math.floor(Math.random() * 100) + 1;
        if (this.card1 == this.card2) {
            this.refresh();
        }
    };
    CardPage.prototype.select = function (flag) {
        if (flag == 1) {
            this.selected_card = this.card1;
        }
        else {
            this.selected_card = this.card2;
        }
    };
    CardPage.prototype.ok = function () {
        if (this.selected_card == null) {
            alert("First select card and retry");
            return false;
        }
        if (this.valid) {
            alert("Refresh and retry");
            return false;
        }
        this.valid = true;
        if (this.selected_card == this.card1) {
            if (this.card1 > this.card2) {
                this.saveResult(this.selected_card, this.card2, 1);
                this.result = true;
            }
            else {
                this.saveResult(this.selected_card, this.card2, -1);
                this.result = false;
            }
        }
        else {
            if (this.card1 < this.card2) {
                this.saveResult(this.selected_card, this.card1, 1);
                this.result = true;
            }
            else {
                this.saveResult(this.selected_card, this.card1, -1);
                this.result = false;
            }
        }
    };
    CardPage.prototype.saveResult = function (my_card, other_card, win) {
        var _this = this;
        this.data.card["lucky_value"] = my_card;
        this.data.card["other_value"] = other_card;
        this.data.card["betting_point"] = "2";
        this.data.card["paid_point"] = 2 * win;
        this.updateLoading();
        console.log(JSON.stringify(this.data.card));
        this.http.post("/api/main/card", { cards: [this.data.card] })
            .subscribe(function (ok) {
            _this.presentToast("Saving is complete.");
            _this.getPoint();
            _this.loading.dismiss();
        }, function (onerror) {
            //return null;
            _this.presentToast("You can only do 50 times a day");
            _this.loading.dismiss();
        });
    };
    CardPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
    };
    CardPage.prototype.updateLoading = function () {
        this.error = null;
        this.loading = this.loadingCtrl.create({
            content: 'Connecting to server...'
        });
        this.loading.present();
    };
    CardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-card',template:/*ion-inline-start:"D:\2. Private\1. Study\2. IONIC\1. Project\mbe-front\src\pages\card\card.html"*/'\n<ion-header>\n	<ion-navbar hideBackButton>\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>Survey Regist</ion-title>\n	</ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n	<button ion-button color="secondary" round large full (click)="refresh(null)">Refresh</button>\n	<button ion-button color="secondary" round large full (click)="ok(null)">Ok</button>\n	<ion-item>\n		<ion-badge>Currency : {{point}}</ion-badge>\n	</ion-item>\n	<ion-card (click)="select(1)" [ngStyle]="{\'background-color\':getColor(card1)}">\n		<ion-item>\n			Card1\n		</ion-item>\n		<div *ngIf="valid">{{card1}}</div>\n	</ion-card>\n	<ion-card (click)="select(2)" [ngStyle]="{\'background-color\':getColor(card2)}">\n		<ion-item>\n			Card2\n		</ion-item>\n		<div *ngIf="valid">{{card2}}</div>\n	</ion-card>\n	<div *ngIf="selected_card==card1">You selected card1</div>\n	<div *ngIf="selected_card==card2">You selected card2</div>\n	<div *ngIf="valid&&result">You win</div>\n	<div *ngIf="valid&&!result">You lost</div>\n</ion-content>\n'/*ion-inline-end:"D:\2. Private\1. Study\2. IONIC\1. Project\mbe-front\src\pages\card\card.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], CardPage);
    return CardPage;
}());

//# sourceMappingURL=card.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__);
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
 * Generated class for the FilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FilterPage = /** @class */ (function () {
    function FilterPage(navCtrl, navParams, http, httpClient, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.httpClient = httpClient;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.data = {
            codes: [],
            filters: [
                { filter_cd: "", filter_value: "" },
                { filter_cd: "", filter_value: "" },
                { filter_cd: "", filter_value: "" },
                { filter_cd: "", filter_value: "" },
                { filter_cd: "", filter_value: "" },
                { filter_cd: "", filter_value: "" },
                { filter_cd: "", filter_value: "" },
                { filter_cd: "", filter_value: "" },
                { filter_cd: "", filter_value: "" },
                { filter_cd: "", filter_value: "" }
            ]
        };
        this.getCode();
        //this.getRecommandFilter();
    }
    FilterPage.prototype.ionViewWillEnter = function () {
        this.getRecommandFilter();
    };
    FilterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FilterPage');
    };
    FilterPage.prototype.getCode = function () {
        var _this = this;
        this.http.get("/api/main/getCommonCode/UH--UJ--UA--UP--UF--UG--UE")
            .subscribe(function (data) {
            //console.log(data.json());
            //return data.json();
            _this.data.codes = data.json();
        }, function (onerror) {
            //return null;
        });
    };
    FilterPage.prototype.getRecommandFilter = function () {
        var _this = this;
        this.updateLoading();
        this.http.get("/api/main/filter")
            .subscribe(function (data) {
            //console.log(data.json());
            //return data.json();
            _this.data.filters = data.json();
            for (var i = 0; i < 10; i++) {
                if (_this.data.filters.length - 1 < i) {
                    _this.data.filters.push({ filter_cd: "", filter_value: "" });
                }
            }
            _this.loading.dismiss();
        }, function (onerror) {
            //return null;
            _this.loading.dismiss();
        });
    };
    FilterPage.prototype.filterSave = function () {
        var _this = this;
        var filters_copy = JSON.parse(JSON.stringify(this.data.filters));
        var send_filters = [];
        for (var _i = 0, filters_copy_1 = filters_copy; _i < filters_copy_1.length; _i++) {
            var filter_1 = filters_copy_1[_i];
            console.log(JSON.stringify(filter_1));
            if (filter_1.filter_cd != undefined && filter_1.filter_cd != null && filter_1.filter_cd != "" &&
                filter_1.filter_value != undefined && filter_1.filter_value != null && filter_1.filter_value != "") {
                send_filters.push(filter_1);
            }
        }
        if (!send_filters.length) {
            alert("저장할 추천 필터가 없습니다.");
            return false;
        }
        else {
            this.data.filters = JSON.parse(JSON.stringify(send_filters));
            for (var i = 0; i < 10; i++) {
                if (this.data.filters.length - 1 < i) {
                    this.data.filters.push({ filter_cd: "", filter_value: "" });
                }
            }
        }
        this.updateLoading();
        var filter = { filters: send_filters };
        console.log(JSON.stringify(filter));
        this.http.post("/api/main/filter", filter)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(function (e) { return _this.handleError(e); }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["finalize"])(function () { return _this.loading.dismiss(); }))
            .subscribe(function (ok) { return _this.presentToast("Saving is complete."); });
    };
    FilterPage.prototype.updateLoading = function () {
        this.error = null;
        this.loading = this.loadingCtrl.create({
            content: 'Connecting to server...'
        });
        this.loading.present();
    };
    FilterPage.prototype.handleError = function (error) {
        var errMsg = error.message ? error.message : error.toString();
        this.error = errMsg;
        return __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"].throw(errMsg);
    };
    FilterPage.prototype.presentToast = function (msg) {
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
    FilterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-filter',template:/*ion-inline-start:"D:\2. Private\1. Study\2. IONIC\1. Project\mbe-front\src\pages\filter\filter.html"*/'\n<ion-header>\n	<ion-navbar hideBackButton>\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>Filter</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<ion-item *ngFor="let frow of data.filters; let i = index">\n		<ion-label color="primary" stacked>Filter{{i+1}}</ion-label>\n		<ion-select [(ngModel)]="frow.filter_cd">\n			<ion-option *ngFor="let item of data.codes | codeFilter : {code_group : \'UF\'}" [value]="item.code">{{item.code_name}}</ion-option>\n		</ion-select>\n		<ion-select [(ngModel)]="frow.filter_value">\n			<ion-option *ngFor="let item of data.codes | codeFilter : {code_group : frow.filter_cd}" [value]="item.code">{{item.code_name}}</ion-option>\n		</ion-select>\n	</ion-item>\n	<button ion-button color="secondary" round large full (click)="filterSave()">Save</button>\n</ion-content>\n'/*ion-inline-end:"D:\2. Private\1. Study\2. IONIC\1. Project\mbe-front\src\pages\filter\filter.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], FilterPage);
    return FilterPage;
}());

//# sourceMappingURL=filter.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__roulette_roulette__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__survey_survey__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__surveyregist_surveyregist__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__card_card__ = __webpack_require__(155);
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
 * Generated class for the GamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GamePage = /** @class */ (function () {
    function GamePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1 = __WEBPACK_IMPORTED_MODULE_4__surveyregist_surveyregist__["a" /* SurveyregistPage */];
        this.tab2 = __WEBPACK_IMPORTED_MODULE_3__survey_survey__["a" /* SurveyPage */];
        this.tab3 = __WEBPACK_IMPORTED_MODULE_2__roulette_roulette__["a" /* RoulettePage */];
        this.tab4 = __WEBPACK_IMPORTED_MODULE_5__card_card__["a" /* CardPage */];
    }
    GamePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GamePage');
    };
    GamePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-game',template:/*ion-inline-start:"D:\2. Private\1. Study\2. IONIC\1. Project\mbe-front\src\pages\game\game.html"*/'<ion-tabs>\n	<ion-tab tabIcon="create" tabTitle="Survey Regist" [root]="tab1"></ion-tab>\n	<ion-tab tabIcon="pie" tabTitle="Survey" [root]="tab2"></ion-tab>\n	<ion-tab tabIcon="game-controller-b" tabTitle="Roulette" [root]="tab3"></ion-tab>\n	<ion-tab tabIcon="card" tabTitle="Card" [root]="tab4"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"D:\2. Private\1. Study\2. IONIC\1. Project\mbe-front\src\pages\game\game.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], GamePage);
    return GamePage;
}());

//# sourceMappingURL=game.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoulettePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
 * Generated class for the RoulettePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RoulettePage = /** @class */ (function () {
    function RoulettePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RoulettePage.prototype.ionViewWillEnter = function () {
    };
    RoulettePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RoulettePage');
    };
    RoulettePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-roulette',template:/*ion-inline-start:"D:\2. Private\1. Study\2. IONIC\1. Project\mbe-front\src\pages\roulette\roulette.html"*/'<!--\n  Generated template for the RoulettePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Roulette</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\npreparing...\n</ion-content>\n'/*ion-inline-end:"D:\2. Private\1. Study\2. IONIC\1. Project\mbe-front\src\pages\roulette\roulette.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], RoulettePage);
    return RoulettePage;
}());

//# sourceMappingURL=roulette.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(45);
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
 * Generated class for the SurveyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SurveyPage = /** @class */ (function () {
    function SurveyPage(navCtrl, navParams, http, httpClient, loadingCtrl, toastCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.httpClient = httpClient;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.data = {
            survey: []
        };
        //this.getSurveyList();
    }
    SurveyPage.prototype.ionViewWillEnter = function () {
        this.getSurveyList();
    };
    SurveyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SurveyPage');
    };
    SurveyPage.prototype.getSurveyList = function () {
        var _this = this;
        this.updateLoading();
        this.http.get("/api/main/survey")
            .subscribe(function (data) {
            //console.log(data.json());
            //return data.json();
            _this.data.survey = data.json();
            _this.loading.dismiss();
        }, function (onerror) {
            //return null;
            _this.loading.dismiss();
        });
    };
    SurveyPage.prototype.vote = function (item) {
        var _this = this;
        var myModalOptions = {
            enableBackdropDismiss: false
        };
        var myModal = this.modalCtrl.create('VotePage', { data: item }, myModalOptions);
        myModal.present();
        myModal.onDidDismiss(function (data) {
            console.log("I have dismissed.");
            console.log(data);
            _this.getSurveyList();
        });
        myModal.onWillDismiss(function (data) {
            console.log("I'm about to dismiss");
            console.log(data);
        });
    };
    SurveyPage.prototype.updateLoading = function () {
        this.error = null;
        this.loading = this.loadingCtrl.create({
            content: 'Connecting to server...'
        });
        this.loading.present();
    };
    SurveyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-survey',template:/*ion-inline-start:"D:\2. Private\1. Study\2. IONIC\1. Project\mbe-front\src\pages\survey\survey.html"*/'\n<ion-header>\n	<ion-navbar hideBackButton>\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>Survey</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<ion-item *ngIf="data.survey.length==0">No data</ion-item>\n	<ion-item *ngFor="let item of data.survey" (click)="vote(item)">{{item.survey_subject}}</ion-item>\n</ion-content>'/*ion-inline-end:"D:\2. Private\1. Study\2. IONIC\1. Project\mbe-front\src\pages\survey\survey.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], SurveyPage);
    return SurveyPage;
}());

//# sourceMappingURL=survey.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyregistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(45);
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
 * Generated class for the SurveyregistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SurveyregistPage = /** @class */ (function () {
    function SurveyregistPage(navCtrl, navParams, http, httpClient, loadingCtrl, toastCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.httpClient = httpClient;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.data = {
            survey: [],
            check: [],
            rData: {}
        };
        //this.getMySurveyList();
    }
    SurveyregistPage.prototype.ionViewWillEnter = function () {
        this.getMySurveyList();
    };
    SurveyregistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SurveyregistPage');
    };
    SurveyregistPage.prototype.getMySurveyList = function () {
        var _this = this;
        this.updateLoading();
        this.http.get("/api/main/survey/user")
            .subscribe(function (data) {
            //console.log(data.json());
            //return data.json();
            _this.data.survey = data.json();
            console.log(_this.data.survey);
            _this.getCheckValue();
        }, function (onerror) {
            //return null;
            //this.loading.dismiss();
            _this.getCheckValue();
        });
    };
    SurveyregistPage.prototype.getCheckValue = function () {
        var _this = this;
        this.http.get("/api/main/survey/user/max")
            .subscribe(function (data) {
            console.log(JSON.stringify(data.json()));
            //return data.json();
            _this.data.check = data.json();
            _this.loading.dismiss();
        }, function (onerror) {
            //return null;
            _this.loading.dismiss();
        });
    };
    SurveyregistPage.prototype.new = function (item) {
        var _this = this;
        var myModalOptions = {
            enableBackdropDismiss: false
        };
        var myModal = this.modalCtrl.create('SurveyeditPage', { data: item, user_value: this.data.check[0].user_value }, myModalOptions);
        myModal.present();
        myModal.onDidDismiss(function (data) {
            console.log("I have dismissed.");
            console.log(data);
            _this.getMySurveyList();
        });
        myModal.onWillDismiss(function (data) {
            console.log("I'm about to dismiss");
            console.log(data);
        });
    };
    SurveyregistPage.prototype.updateLoading = function () {
        this.error = null;
        this.loading = this.loadingCtrl.create({
            content: 'Connecting to server...'
        });
        this.loading.present();
    };
    SurveyregistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-surveyregist',template:/*ion-inline-start:"D:\2. Private\1. Study\2. IONIC\1. Project\mbe-front\src\pages\surveyregist\surveyregist.html"*/'\n<ion-header>\n	<ion-navbar hideBackButton>\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>Survey Regist</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<button *ngIf="data.check.length&&data.check[0].config_value<1" ion-button color="secondary" round large full (click)="new(null)">New Survey</button>\n	<ion-item *ngIf="!data.survey.length">No data</ion-item>\n	<ion-item *ngFor="let item of data.survey" (click)="new(item)">\n		<div col-11 style="float:left;">{{item.survey_subject}}</div>\n		<div col-1>\n			<ion-icon name="checkmark" *ngIf="item.survey_status==\'2\'||item.survey_status==\'3\'"></ion-icon>\n		</div>\n	</ion-item>\n</ion-content>\n'/*ion-inline-end:"D:\2. Private\1. Study\2. IONIC\1. Project\mbe-front\src\pages\surveyregist\surveyregist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], SurveyregistPage);
    return SurveyregistPage;
}());

//# sourceMappingURL=surveyregist.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mypage_mypage__ = __webpack_require__(88);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, menu, http, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.http = http;
        this.modalCtrl = modalCtrl;
        this.user = [];
        this.user_id = "lotus78";
        this.user_password = "choi0911";
        this.menu.enable(false);
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.login = function () {
        if (this.user_id == undefined || this.user_id == null || this.user_id == "") {
            alert("Input your id and retry");
            return;
        }
        if (this.user_password == undefined || this.user_password == null || this.user_password == "") {
            alert("Input your password and retry");
            return;
        }
        this.loginCheck();
    };
    LoginPage.prototype.loginCheck = function () {
        var _this = this;
        this.http.get("/api/main/loginCheck?user_id=" + this.user_id + "&user_password=" + this.user_password)
            .subscribe(function (data) {
            _this.user = data.json();
            if (_this.user != undefined && _this.user != null && _this.user.length > 0) {
                if (_this.user[0].user_name != undefined && _this.user[0].user_name != null && _this.user[0].user_name != "") {
                    console.log(_this.user[0].user_name);
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__mypage_mypage__["a" /* MypagePage */]);
                }
                else {
                    alert("Wrong input. Please check your account and retry");
                }
            }
            else {
                alert("Wrong input. Please check your account and retry");
            }
        }, function (onerror) {
            alert("Wrong input. Please check your account and retry");
        });
    };
    LoginPage.prototype.new = function () {
        var myModalOptions = {
            enableBackdropDismiss: false
        };
        var myModalData = {
            name: 'Paul Halliday',
            occupation: 'Developer'
        };
        var myModal = this.modalCtrl.create('SignupPage', { data: myModalData }, myModalOptions);
        myModal.present();
        myModal.onDidDismiss(function (data) {
            console.log("I have dismissed.");
            console.log(data);
        });
        myModal.onWillDismiss(function (data) {
            console.log("I'm about to dismiss");
            console.log(data);
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\2. Private\1. Study\2. IONIC\1. Project\mbe-front\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<ion-label>ID</ion-label>\n	<ion-input type="text" [(ngModel)]="user_id" [placeholder]="\'Input your id\'"></ion-input>\n	<ion-label>PASSWORD</ion-label>\n	<ion-input type="password" [(ngModel)]="user_password" [placeholder]="\'Input your password\'"></ion-input>\n	<button ion-button (click)="login()">Sign in</button>\n  <button ion-button (click)="new()">Sign up</button>\n</ion-content>\n'/*ion-inline-end:"D:\2. Private\1. Study\2. IONIC\1. Project\mbe-front\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PointPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(45);
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
 * Generated class for the PointPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PointPage = /** @class */ (function () {
    function PointPage(navCtrl, navParams, http, httpClient, menu) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.httpClient = httpClient;
        this.menu = menu;
        this.point = 0;
        this.data = {
            point: [],
            user: []
        };
        /*this.getPoint();
        this.getPointData();*/
        this.menu.enable(true);
    }
    PointPage.prototype.ionViewWillEnter = function () {
        this.getPoint();
        this.getPointData();
    };
    PointPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PointPage');
    };
    PointPage.prototype.getPoint = function () {
        var _this = this;
        this.http.get("/api/main/user/point")
            .subscribe(function (data) {
            //console.log(data.json());
            //return data.json();
            _this.data.user = data.json();
            _this.point = _this.data.user[0]["point"];
        }, function (onerror) {
            //return null;
        });
    };
    PointPage.prototype.getPointData = function () {
        var _this = this;
        this.http.get("/api/main/point/user")
            .subscribe(function (data) {
            //console.log(data.json());
            //return data.json();
            _this.data.point = data.json();
        }, function (onerror) {
            //return null;
        });
    };
    PointPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-point',template:/*ion-inline-start:"D:\2. Private\1. Study\2. IONIC\1. Project\mbe-front\src\pages\point\point.html"*/'\n<ion-header>\n	<ion-navbar hideBackButton>\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>Point</ion-title>\n	</ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n	<ion-item>Currency : {{point}}</ion-item>\n\n	<ion-grid>\n		<ion-row>\n			<ion-col>Point</ion-col>\n			<ion-col>Route</ion-col>\n			<ion-col>Date</ion-col>\n		</ion-row>\n		<ion-row *ngFor="let item of data.point">\n			<ion-col>{{item.point}}</ion-col>\n			<ion-col>{{item.route}}</ion-col>\n			<ion-col>{{item.regist_date}}</ion-col>\n		</ion-row>\n	</ion-grid>\n</ion-content>\n'/*ion-inline-end:"D:\2. Private\1. Study\2. IONIC\1. Project\mbe-front\src\pages\point\point.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], PointPage);
    return PointPage;
}());

//# sourceMappingURL=point.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyinfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
 * Generated class for the MyinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyinfoPage = /** @class */ (function () {
    function MyinfoPage(navCtrl, navParams, menu) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.menu.enable(true);
    }
    MyinfoPage.prototype.ionViewWillEnter = function () {
    };
    MyinfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyinfoPage');
    };
    MyinfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-myinfo',template:/*ion-inline-start:"D:\2. Private\1. Study\2. IONIC\1. Project\mbe-front\src\pages\myinfo\myinfo.html"*/'\n<ion-header>\n	<ion-navbar hideBackButton>\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>My Info</ion-title>\n	</ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\nPreparing...\n</ion-content>\n'/*ion-inline-end:"D:\2. Private\1. Study\2. IONIC\1. Project\mbe-front\src\pages\myinfo\myinfo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], MyinfoPage);
    return MyinfoPage;
}());

//# sourceMappingURL=myinfo.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecommandPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__filter_filter__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__called_called__ = __webpack_require__(154);
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
 * Generated class for the RecommandPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RecommandPage = /** @class */ (function () {
    function RecommandPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1 = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2 = __WEBPACK_IMPORTED_MODULE_4__called_called__["a" /* CalledPage */];
        this.tab3 = __WEBPACK_IMPORTED_MODULE_3__filter_filter__["a" /* FilterPage */];
    }
    RecommandPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecommandPage');
    };
    RecommandPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-recommand',template:/*ion-inline-start:"D:\2. Private\1. Study\2. IONIC\1. Project\mbe-front\src\pages\recommand\recommand.html"*/'  <ion-tabs>\n    <ion-tab tabIcon="people" tabTitle="Recommand" [root]="tab1"></ion-tab>\n    <ion-tab tabIcon="call" tabTitle="Contact" [root]="tab2"></ion-tab>\n    <ion-tab tabIcon="funnel" tabTitle="Filter" [root]="tab3"></ion-tab>\n  </ion-tabs>'/*ion-inline-end:"D:\2. Private\1. Study\2. IONIC\1. Project\mbe-front\src\pages\recommand\recommand.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], RecommandPage);
    return RecommandPage;
}());

//# sourceMappingURL=recommand.js.map

/***/ }),

/***/ 175:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 175;

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/acceptdetail/acceptdetail.module": [
		694,
		4
	],
	"../pages/called/called.module": [
		695,
		16
	],
	"../pages/card/card.module": [
		696,
		15
	],
	"../pages/filter/filter.module": [
		697,
		14
	],
	"../pages/game/game.module": [
		698,
		13
	],
	"../pages/login/login.module": [
		699,
		12
	],
	"../pages/myinfo/myinfo.module": [
		700,
		11
	],
	"../pages/mypage/mypage.module": [
		701,
		10
	],
	"../pages/point/point.module": [
		702,
		9
	],
	"../pages/recommand/recommand.module": [
		703,
		8
	],
	"../pages/roulette/roulette.module": [
		704,
		7
	],
	"../pages/signup/signup.module": [
		705,
		3
	],
	"../pages/survey/survey.module": [
		706,
		6
	],
	"../pages/surveyedit/surveyedit.module": [
		707,
		2
	],
	"../pages/surveyregist/surveyregist.module": [
		708,
		5
	],
	"../pages/userdetail/userdetail.module": [
		709,
		1
	],
	"../pages/vote/vote.module": [
		710,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 219;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, menu, http, loadingCtrl, toastCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.data = {
            recommand: []
        };
        this.menu.enable(true);
        //this.getRecommandUser();
    }
    HomePage.prototype.ionViewWillEnter = function () {
        this.getRecommandUser();
    };
    HomePage.prototype.getRecommandUser = function () {
        var _this = this;
        this.updateLoading();
        this.http.get("/api/main/recommand")
            .subscribe(function (data) {
            console.log(JSON.stringify(data.json()));
            //return data.json();
            _this.data.recommand = data.json();
            _this.loading.dismiss();
        }, function (onerror) {
            //return null;
            _this.data.recommand = [];
            _this.loading.dismiss();
        });
    };
    HomePage.prototype.updateLoading = function () {
        this.error = null;
        this.loading = this.loadingCtrl.create({
            content: 'Connecting to server...'
        });
        this.loading.present();
    };
    HomePage.prototype.detail = function (item) {
        var _this = this;
        var myModalOptions = {
            enableBackdropDismiss: false
        };
        var myModal = this.modalCtrl.create('UserdetailPage', { data: item }, myModalOptions);
        myModal.present();
        myModal.onDidDismiss(function (data) {
            console.log("I have dismissed.");
            console.log(data);
            _this.getRecommandUser();
        });
        myModal.onWillDismiss(function (data) {
            console.log("I'm about to dismiss");
            console.log(data);
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\2. Private\1. Study\2. IONIC\1. Project\mbe-front\src\pages\home\home.html"*/'\n<ion-header>\n  <ion-navbar hideBackButton>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Recommanded user</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n	<ion-card *ngFor="let item of data.recommand" (click)="detail(item)">\n		<ion-item>\n			<img src="/api/resources/upload/profile/{{item.photo}}" height="100px" width="100px">\n		</ion-item>\n		<ion-item>\n			<ion-label color="primary" stacked>Name</ion-label>\n			<ion-input type="text" [disabled]="true" value="{{item.user_name}}"></ion-input>\n		</ion-item>\n		<ion-item *ngIf="item.recommand_status==\'3\'">\n			I called&nbsp;:&nbsp;&nbsp;&nbsp;<ion-icon name="checkmark"></ion-icon>\n		</ion-item>\n		<ion-item *ngIf="item.recommand_status==\'4\'">\n			Recommanded user denied my call&nbsp;:&nbsp;&nbsp;&nbsp;<ion-icon name="checkmark"></ion-icon>\n		</ion-item>\n	</ion-card>\n</ion-content>'/*ion-inline-end:"D:\2. Private\1. Study\2. IONIC\1. Project\mbe-front\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommonService = /** @class */ (function () {
    function CommonService(httpd) {
        this.httpd = httpd;
    }
    CommonService.prototype.getCommonCodes = function (code_group) {
        this.httpd.get("/api/main/getCommonCode/" + code_group.join("--"))
            .subscribe(function (data) {
            //console.log(data.json());
            return data.json();
        }, function (onerror) {
            return null;
        });
    };
    CommonService.prototype.checkBlank = function (value, message) {
        if (value == undefined || value == null) {
            alert(message);
            return false;
        }
        else {
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
    };
    CommonService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], CommonService);
    return CommonService;
}());

//# sourceMappingURL=common.service.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__code_filter_code_filter__ = __webpack_require__(671);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__code_filter_code_filter__["a" /* CodeFilterPipe */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__code_filter_code_filter__["a" /* CodeFilterPipe */]]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(370);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_date_picker__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_mypage_mypage__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_list_list__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_filter_filter__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_point_point__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_myinfo_myinfo__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_called_called__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_recommand_recommand__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_game_game__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_roulette_roulette__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_survey_survey__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_surveyregist_surveyregist__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_card_card__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__common_service__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pipes_pipes_module__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_status_bar__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_splash_screen__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_push__ = __webpack_require__(357);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_mypage_mypage__["a" /* MypagePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_filter_filter__["a" /* FilterPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_myinfo_myinfo__["a" /* MyinfoPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_point_point__["a" /* PointPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_game_game__["a" /* GamePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_roulette_roulette__["a" /* RoulettePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_survey_survey__["a" /* SurveyPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_surveyregist_surveyregist__["a" /* SurveyregistPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_card_card__["a" /* CardPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_called_called__["a" /* CalledPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_recommand_recommand__["a" /* RecommandPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/acceptdetail/acceptdetail.module#AcceptdetailPageModule', name: 'AcceptdetailPage', segment: 'acceptdetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/called/called.module#CalledPageModule', name: 'CalledPage', segment: 'called', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/card/card.module#CardPageModule', name: 'CardPage', segment: 'card', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/filter/filter.module#FilterPageModule', name: 'FilterPage', segment: 'filter', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/game/game.module#GamePageModule', name: 'GamePage', segment: 'game', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myinfo/myinfo.module#MyinfoPageModule', name: 'MyinfoPage', segment: 'myinfo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mypage/mypage.module#MypagePageModule', name: 'MypagePage', segment: 'mypage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/point/point.module#PointPageModule', name: 'PointPage', segment: 'point', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recommand/recommand.module#RecommandPageModule', name: 'RecommandPage', segment: 'recommand', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/roulette/roulette.module#RoulettePageModule', name: 'RoulettePage', segment: 'roulette', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/survey/survey.module#SurveyPageModule', name: 'SurveyPage', segment: 'survey', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/surveyedit/surveyedit.module#SurveyeditPageModule', name: 'SurveyeditPage', segment: 'surveyedit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/surveyregist/surveyregist.module#SurveyregistPageModule', name: 'SurveyregistPage', segment: 'surveyregist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/userdetail/userdetail.module#UserdetailPageModule', name: 'UserdetailPage', segment: 'userdetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vote/vote.module#VotePageModule', name: 'VotePage', segment: 'vote', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_25__pipes_pipes_module__["a" /* PipesModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_mypage_mypage__["a" /* MypagePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_filter_filter__["a" /* FilterPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_myinfo_myinfo__["a" /* MyinfoPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_point_point__["a" /* PointPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_game_game__["a" /* GamePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_roulette_roulette__["a" /* RoulettePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_survey_survey__["a" /* SurveyPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_surveyregist_surveyregist__["a" /* SurveyregistPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_card_card__["a" /* CardPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_called_called__["a" /* CalledPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_recommand_recommand__["a" /* RecommandPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_date_picker__["a" /* DatePicker */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_push__["a" /* Push */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_24__common_service__["a" /* CommonService */],
                /*FileUploadOptions,
                FileTransferObject,*/
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 671:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodeFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the CodeFilterPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var CodeFilterPipe = /** @class */ (function () {
    function CodeFilterPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    CodeFilterPipe.prototype.transform = function (items, filter) {
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered Injectable, out
        return items.filter(function (item) { return item.code_group.indexOf(filter["code_group"]) > -1; });
    };
    CodeFilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'codeFilter'
        })
    ], CodeFilterPipe);
    return CodeFilterPipe;
}());

//# sourceMappingURL=code-filter.js.map

/***/ }),

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_mypage_mypage__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_game_game__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_recommand_recommand__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_push__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, events, push, http) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.events = events;
        this.push = push;
        this.http = http;
        //rootPage: any = HomePage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        this.token = "";
        this.initPushNotification();
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'My Info', component: __WEBPACK_IMPORTED_MODULE_4__pages_mypage_mypage__["a" /* MypagePage */] },
            { title: 'Recommand', component: __WEBPACK_IMPORTED_MODULE_7__pages_recommand_recommand__["a" /* RecommandPage */] },
            { title: 'Point', component: __WEBPACK_IMPORTED_MODULE_6__pages_game_game__["a" /* GamePage */] }
        ];
        events.subscribe('user:login', function () {
            //console.log("user:login event published");
            //console.log("token : ]]]]]]]]]]]]]]]]]]]]]]]]]]] " +this.token);
            _this.saveToken(_this.token);
        });
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.initPushNotification = function () {
        var _this = this;
        if (!this.platform.is('cordova')) {
            console.warn("Push notifications not initialized. Cordova is not available - Run in physical device");
            return;
        }
        this.push.hasPermission()
            .then(function (res) {
            if (res.isEnabled) {
                console.log('We have permission to send push notifications');
            }
            else {
                console.log('We do not have permission to send push notifications');
            }
        });
        // to initialize push notifications
        var options = {
            android: {},
            ios: {
                alert: 'true',
                badge: true,
                sound: 'false'
            },
            windows: {},
            browser: {
                pushServiceURL: 'http://push.api.phonegap.com/v1/push'
            }
        };
        var pushObject = this.push.init(options);
        pushObject.on('notification').subscribe(function (notification) { return console.log('Received a notification', notification); });
        pushObject.on('registration').subscribe(function (registration) { _this.token = registration.registrationId; console.log('Device registered', registration.registrationId); });
        pushObject.on('error').subscribe(function (error) { return console.error('Error with Push plugin', error); });
    };
    MyApp.prototype.saveToken = function (token) {
        console.log("http send start >>>>");
        this.http.get('/api/main/token/' + token).subscribe(function (data) {
            //console.log("data", data.json());
        });
    };
    MyApp.prototype.logout = function () {
        var _this = this;
        console.log("logout");
        this.http.get('/api/main/logout').subscribe(function (data) {
            //console.log("data", data.json());
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */]);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]) === "function" && _a || Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\2. Private\1. Study\2. IONIC\1. Project\mbe-front\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n      \n    </ion-list>\n\n  </ion-content>\n  <ion-footer>\n    <button ion-button icon-only clear (click)="logout()" style="float:right;">\n        <ion-icon name="close-circle"></ion-icon>\n      </button>\n  </ion-footer>\n</ion-menu>\n    \n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="true"></ion-nav>'/*ion-inline-end:"D:\2. Private\1. Study\2. IONIC\1. Project\mbe-front\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_8__ionic_native_push__["a" /* Push */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__ionic_native_push__["a" /* Push */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Http */]) === "function" && _g || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"D:\2. Private\1. Study\2. IONIC\1. Project\mbe-front\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\2. Private\1. Study\2. IONIC\1. Project\mbe-front\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MypagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__point_point__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__myinfo_myinfo__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(22);
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
 * Generated class for the MypagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MypagePage = /** @class */ (function () {
    function MypagePage(navCtrl, navParams, platform, http, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.http = http;
        this.events = events;
        this.tab1 = __WEBPACK_IMPORTED_MODULE_3__myinfo_myinfo__["a" /* MyinfoPage */];
        this.tab2 = __WEBPACK_IMPORTED_MODULE_2__point_point__["a" /* PointPage */];
        this.events.publish("user:login");
    }
    MypagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MypagePage');
    };
    MypagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mypage',template:/*ion-inline-start:"D:\2. Private\1. Study\2. IONIC\1. Project\mbe-front\src\pages\mypage\mypage.html"*/'  <ion-tabs>\n    <ion-tab tabIcon="contact" tabTitle="My Info" [root]="tab1"></ion-tab>\n    <ion-tab tabIcon="trophy" tabTitle="Point" [root]="tab2"></ion-tab>\n  </ion-tabs>'/*ion-inline-end:"D:\2. Private\1. Study\2. IONIC\1. Project\mbe-front\src\pages\mypage\mypage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
    ], MypagePage);
    return MypagePage;
}());

//# sourceMappingURL=mypage.js.map

/***/ })

},[365]);
//# sourceMappingURL=main.js.map