webpackJsonp([33],{

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RssHomePageModule", function() { return RssHomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rss_home__ = __webpack_require__(720);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RssHomePageModule = (function () {
    function RssHomePageModule() {
    }
    RssHomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__rss_home__["a" /* RssHomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__rss_home__["a" /* RssHomePage */]),
            ],
        })
    ], RssHomePageModule);
    return RssHomePageModule;
}());

//# sourceMappingURL=rss-home.module.js.map

/***/ }),

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RssHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rss_service_rss_service__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loading_service_loading_service__ = __webpack_require__(258);
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
 * Generated class for the RssHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RssHomePage = (function () {
    function RssHomePage(navCtrl, navParams, rssService, loadingService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rssService = rssService;
        this.loadingService = loadingService;
        this.data = new Array();
        this.spnState = 'show';
        this.item = this.navParams.get('item');
        this.rssService.getPosts(this.item.link).subscribe(function (data) {
            var json = _this.rssService.convertToJson(data);
            json = json.rss.channel.item;
            _this.data = json;
            _this.spnState = 'hide';
        });
    }
    RssHomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        if (this.data.length != 0) {
            var _loop_1 = function (i) {
                this_1.rssService.isFavorite(this_1.data[i]).then(function (result) {
                    _this.data[i].isFavorite = result;
                });
            };
            var this_1 = this;
            for (var i = 0; i < this.data.length; i++) {
                _loop_1(i);
            }
        }
    };
    RssHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-rss-home',template:/*ion-inline-start:"D:\Visual Studio\Personal\Project-Watermellon\src\pages\ready-app\rss\rss-home\rss-home.html"*/'<!--\n\n  Generated template for the RssHomePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>{{item.title}}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="white-1">\n\n   <ion-spinner class="indicator" [ngClass]="spnState"></ion-spinner>\n\n	<ion-card class="bdra-5 card card-ios" *ngFor="let item of data">\n\n    <span *ngIf="item[\'media:content\']!=undefined">\n\n        <img [src]="item[\'media:content\'][\'$\'][\'url\']">\n\n    </span>\n\n\n\n    <ion-card-content class="card-content card-content-ios">\n\n      <ion-card-title class="fs-18 card-title card-title-ios">{{item.title}}</ion-card-title>\n\n      <p>{{item.description}}</p>\n\n    </ion-card-content>\n\n\n\n    <ion-row class="row">\n\n      <ion-col>\n\n        <button (click)="rssService.doFavorite(item)" ion-button icon-left clear small class="text-black favorite">\n\n          <ion-icon  [name]="item.isFavorite == true ? \'heart\' : \'heart-outline\'"></ion-icon>\n\n        </button>\n\n      </ion-col>\n\n\n\n      <ion-col center text-center>\n\n         <button (click)="rssService.doShare(item)" ion-button icon-left clear small class="text-black">\n\n             <ion-icon name="share"></ion-icon>\n\n        </button>\n\n      </ion-col>\n\n\n\n      <ion-col right text-right>\n\n        <button (click)="rssService.doOpen(item)" ion-button icon-left clear small class="text-black">\n\n          <ion-icon name="open"></ion-icon>\n\n        </button>\n\n      </ion-col>\n\n\n\n    </ion-row>\n\n  </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Visual Studio\Personal\Project-Watermellon\src\pages\ready-app\rss\rss-home\rss-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_rss_service_rss_service__["a" /* RssService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_loading_service_loading_service__["a" /* LoadingService */]])
    ], RssHomePage);
    return RssHomePage;
}());

//# sourceMappingURL=rss-home.js.map

/***/ })

});
//# sourceMappingURL=33.js.map