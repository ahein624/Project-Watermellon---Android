webpackJsonp([31],{

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterPageModule", function() { return TwitterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__twitter__ = __webpack_require__(722);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TwitterPageModule = (function () {
    function TwitterPageModule() {
    }
    TwitterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__twitter__["a" /* TwitterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__twitter__["a" /* TwitterPage */]),
            ],
        })
    ], TwitterPageModule);
    return TwitterPageModule;
}());

//# sourceMappingURL=twitter.module.js.map

/***/ }),

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TwitterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_twitter_twitter__ = __webpack_require__(263);
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
 * Generated class for the TwitterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TwitterPage = (function () {
    function TwitterPage(navCtrl, navParams, twitterService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.twitterService = twitterService;
        this.count = 20;
        this.max_id = null;
        this.spnState = 'show';
        this.list = new Array();
    }
    TwitterPage.prototype.loadMore = function (infiniteScroll) {
        var _this = this;
        if (infiniteScroll === void 0) { infiniteScroll = null; }
        this.twitterService.getTweets(this.count, this.max_id).subscribe(function (data) {
            var tmpData = data.json();
            console.log(tmpData[0]);
            _this.max_id = tmpData[tmpData.length - 1].id;
            _this.list = _this.list.concat(tmpData);
            if (infiniteScroll) {
                infiniteScroll.complete();
            }
            _this.spnState = 'hide';
        });
    };
    TwitterPage.prototype.ionViewDidLoad = function () {
        this.loadMore();
    };
    TwitterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-twitter',template:/*ion-inline-start:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/pages/ready-app/twitter/twitter.html"*/'<!--\n  Generated template for the TwitterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n<ion-navbar>\n<button ion-button menuToggle>\n  <ion-icon name="menu"></ion-icon>\n</button>\n<ion-title>twitter</ion-title>\n</ion-navbar>\n</ion-header>\n\n<ion-content class="white">\n<ion-spinner class="indicator" [ngClass]="spnState"></ion-spinner>\n<ion-card class="bdra-5" *ngFor="let item of list">\n<ion-item>\n<ion-avatar item-start class="mgt-6 mgb-6">\n<img src="{{item.user.profile_image_url}}">\n</ion-avatar>\n\n<h2 class="fs-14 fw-600 text-grey-5">{{item.user.name}}</h2>\n<p class="fs-10 text-grey-3">{{item.user.created_at}}</p>\n</ion-item> \n\n<span *ngIf="item.entities.media!=undefined">\n  <img src="{{item.entities.media[0].media_url}}">\n</span>\n\n<ion-card-content>\n<p>{{item.text}}</p>\n</ion-card-content>\n\n<ion-row>\n<ion-col>\n<button ion-button icon-left clear small class="text-grey-4 fs-16">\n  <ion-icon name="repeat"></ion-icon>\n  <div>{{item.retweet_count}}</div> \n</button>\n</ion-col>\n\n<ion-col center text-center>\n<button ion-button icon-left clear small class="text-grey-4 fs-16" (click)="twitterService.doShare(item)">\n <ion-icon name="share"></ion-icon>\n</button>\n</ion-col>\n\n<ion-col right text-right>\n<button ion-button icon-left clear small class="text-grey-4 fs-20" (click)="twitterService.doOpen(item)">\n  <ion-icon name="open"></ion-icon>\n</button>\n</ion-col>\n</ion-row>\n</ion-card>\n\n<ion-infinite-scroll (ionInfinite)="loadMore($event)">\n<ion-infinite-scroll-content></ion-infinite-scroll-content>\n</ion-infinite-scroll>\n\n</ion-content>'/*ion-inline-end:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/pages/ready-app/twitter/twitter.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_twitter_twitter__["a" /* TwitterProvider */]])
    ], TwitterPage);
    return TwitterPage;
}());

//# sourceMappingURL=twitter.js.map

/***/ })

});
//# sourceMappingURL=31.js.map