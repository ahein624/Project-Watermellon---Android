webpackJsonp([25],{

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordpressFavoritePageModule", function() { return WordpressFavoritePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wordpress_favorite__ = __webpack_require__(732);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WordpressFavoritePageModule = (function () {
    function WordpressFavoritePageModule() {
    }
    WordpressFavoritePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__wordpress_favorite__["a" /* WordpressFavoritePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__wordpress_favorite__["a" /* WordpressFavoritePage */]),
            ],
        })
    ], WordpressFavoritePageModule);
    return WordpressFavoritePageModule;
}());

//# sourceMappingURL=wordpress-favorite.module.js.map

/***/ }),

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordpressFavoritePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wordpress_wordpress__ = __webpack_require__(255);
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
 * Generated class for the WordpressFavoritePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WordpressFavoritePage = (function () {
    function WordpressFavoritePage(navCtrl, navParams, wpService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.wpService = wpService;
        this.data = new Array();
    }
    WordpressFavoritePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.data = new Array();
        var that = this;
        this.wpService.getAllFavorites().then(function (result) {
            _this.data = result;
        });
    };
    WordpressFavoritePage.prototype.doFavorite = function (item) {
        this.wpService.doFavorite(item);
        var index = this.wpService.getIndexOf(item.id, this.data);
        if (index != -1) {
            this.data.splice(index, 1);
        }
    };
    WordpressFavoritePage.prototype.doClear = function () {
        this.wpService.clearAllFavorite();
        this.data = new Array();
    };
    WordpressFavoritePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-wordpress-favorite',template:/*ion-inline-start:"D:\Visual Studio\Personal\Project-Watermellon\src\pages\ready-app\wordpress\wordpress-favorite\wordpress-favorite.html"*/'<!--\n\n  Generated template for the WordpressFavoritePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Favorites</ion-title>\n\n    <ion-buttons right>\n\n      <button ion-button icon-only (click)="doClear()">\n\n      <ion-icon class="fs-24 text-grey-5" name="trash">\n\n      </ion-icon>\n\n    </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="white-1">\n\n<ion-card *ngFor="let item of data" class="bdra-5 card card-md">\n\n    <img *ngIf="item.thumb!=null" [src]="item.thumb" (click)="wpService.doReadMore(navCtrl,item)">\n\n    <ion-card-content class="card-content card-content-md" (click)="wpService.doReadMore(navCtrl,item)">\n\n      <ion-card-title class="fs-16 fw-600 card-title card-title-md" [innerHTML]="item.title"></ion-card-title>\n\n      <p  [innerHTML]="item.excerpt"></p>\n\n    </ion-card-content>\n\n\n\n    <ion-row class="row">\n\n      <ion-col>\n\n        <button (click)="doFavorite(item)" ion-button icon-left clear small class="text-grey-5 favorite">\n\n          <ion-icon  [name]="item.isFavorite == true ? \'heart\' : \'heart-outline\'"></ion-icon>\n\n        </button>\n\n      </ion-col>\n\n\n\n      <ion-col center text-center>\n\n         <button (click)="wpService.doShare(item)" ion-button icon-left clear small class="text-grey-5">\n\n             <ion-icon name="md-share"></ion-icon>\n\n        </button>\n\n      </ion-col>\n\n\n\n      <ion-col right text-right>\n\n        <button (click)="wpService.doOpen(item)" ion-button icon-left clear small class="text-grey-5">\n\n          <ion-icon name="md-open"></ion-icon>\n\n        </button>\n\n      </ion-col>\n\n      \n\n      <ion-col right text-right>\n\n        <button (click)="wpService.doReadMore(navCtrl,item)" ion-button icon-left clear small class="text-grey-5 fs-20">\n\n          <ion-icon name="ios-more"></ion-icon>\n\n        </button>\n\n      </ion-col>\n\n\n\n    </ion-row>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Visual Studio\Personal\Project-Watermellon\src\pages\ready-app\wordpress\wordpress-favorite\wordpress-favorite.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_wordpress_wordpress__["a" /* WordpressService */]])
    ], WordpressFavoritePage);
    return WordpressFavoritePage;
}());

//# sourceMappingURL=wordpress-favorite.js.map

/***/ })

});
//# sourceMappingURL=25.js.map