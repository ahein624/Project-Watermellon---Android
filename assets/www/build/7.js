webpackJsonp([7],{

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeFavoritePageModule", function() { return YoutubeFavoritePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__youtube_favorite__ = __webpack_require__(738);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(477);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var YoutubeFavoritePageModule = (function () {
    function YoutubeFavoritePageModule() {
    }
    YoutubeFavoritePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__youtube_favorite__["a" /* YoutubeFavoritePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__youtube_favorite__["a" /* YoutubeFavoritePage */]),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], YoutubeFavoritePageModule);
    return YoutubeFavoritePageModule;
}());

//# sourceMappingURL=youtube-favorite.module.js.map

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__time_ago_time_ago__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__time_ago_iso_8061_time_ago_iso_8061__ = __webpack_require__(479);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PipesModule = (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__time_ago_time_ago__["a" /* TimeAgoPipe */],
                __WEBPACK_IMPORTED_MODULE_2__time_ago_iso_8061_time_ago_iso_8061__["a" /* TimeAgoIso_8061Pipe */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__time_ago_time_ago__["a" /* TimeAgoPipe */],
                __WEBPACK_IMPORTED_MODULE_2__time_ago_iso_8061_time_ago_iso_8061__["a" /* TimeAgoIso_8061Pipe */]]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeAgoPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the TimeAgoPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var TimeAgoPipe = (function () {
    function TimeAgoPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    TimeAgoPipe.prototype.transform = function (time) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        //return value.toLowerCase();
        var date = new Date((time || "").replace(/-/g, "/").replace(/[TZ]/g, " ")), diff = (((new Date()).getTime() - date.getTime()) / 1000), day_diff = Math.floor(diff / 86400);
        if (isNaN(day_diff) || day_diff < 0 || day_diff >= 31)
            return;
        return day_diff == 0 && (diff < 60 && "just now" ||
            diff < 120 && "1 minute ago" ||
            diff < 3600 && Math.floor(diff / 60) + " minutes ago" ||
            diff < 7200 && "1 hour ago" ||
            diff < 86400 && Math.floor(diff / 3600) + " hours ago") ||
            day_diff == 1 && "Yesterday" ||
            day_diff < 7 && day_diff + " days ago" ||
            day_diff < 31 && Math.ceil(day_diff / 7) + " weeks ago";
    };
    TimeAgoPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'timeAgo',
        })
    ], TimeAgoPipe);
    return TimeAgoPipe;
}());

//# sourceMappingURL=time-ago.js.map

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeAgoIso_8061Pipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the TimeAgoIso_8061Pipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var TimeAgoIso_8061Pipe = (function () {
    function TimeAgoIso_8061Pipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    TimeAgoIso_8061Pipe.prototype.transform = function (time) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var date = new Date(time);
        var myDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
        return myDate;
    };
    TimeAgoIso_8061Pipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'timeAgoIso_8061',
        })
    ], TimeAgoIso_8061Pipe);
    return TimeAgoIso_8061Pipe;
}());

//# sourceMappingURL=time-ago-iso-8061.js.map

/***/ }),

/***/ 738:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubeFavoritePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_youtube_service_youtube_service__ = __webpack_require__(262);
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
 * Generated class for the YoutubeFavoritePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var YoutubeFavoritePage = (function () {
    function YoutubeFavoritePage(navCtrl, navParams, ytService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ytService = ytService;
        this.data = new Array();
        this.events = {};
    }
    YoutubeFavoritePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.data = new Array();
        this.ytService.getAllFavorites().then(function (result) {
            _this.data = result;
        });
    };
    YoutubeFavoritePage.prototype.doFavorite = function (item) {
        this.ytService.doFavorite(item);
        var index = this.ytService.getIndexOf(item.id.videoId, this.data);
        if (index != -1) {
            this.data.splice(index, 1);
        }
    };
    YoutubeFavoritePage.prototype.doClear = function () {
        this.ytService.clearAllFavorite();
        this.data = new Array();
    };
    YoutubeFavoritePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-youtube-favorite',template:/*ion-inline-start:"D:\Visual Studio\Personal\Project-Watermellon\src\pages\ready-app\youtube\youtube-favorite\youtube-favorite.html"*/'<!--\n\n  Generated template for the YoutubeFavoritePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>youtubeFavorite</ion-title>\n\n     <ion-buttons right>\n\n      <button ion-button icon-only (click)="doClear()">\n\n      <ion-icon class="fs-24 text-grey-5" name="trash">\n\n      </ion-icon>\n\n    </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n <ion-card *ngFor="let item of data" class="bdra-5 card card-md" >\n\n    <img [src]="item.snippet.thumbnails.medium.url" (click)="ytService.doReadMore(item,navCtrl)">\n\n    <ion-card-content class="card-content card-content-md" (click)="ytService.doReadMore(item,navCtrl)">\n\n      <ion-card-title class="fs-18 card-title card-title-md" [innerHTML]="item.snippet.title"></ion-card-title>\n\n      <p class="text-grey fs-12">{{item.snippet.publishedAt | timeAgoIso_8061}}</p>\n\n    </ion-card-content>\n\n\n\n    <ion-row class="row">\n\n      <ion-col>\n\n        <button (click)="doFavorite(item)" ion-button icon-left clear small class="text-black favorite">\n\n          <ion-icon  [name]="item.isFavorite == true ? \'heart\' : \'heart-outline\'"></ion-icon>\n\n        </button>\n\n      </ion-col>\n\n\n\n      <ion-col center text-center>\n\n         <button (click)="ytService.doShare(item)" ion-button icon-left clear small class="text-black">\n\n             <ion-icon name="share"></ion-icon>\n\n        </button>\n\n      </ion-col>\n\n\n\n      <ion-col right text-right>\n\n        <button (click)="ytService.doOpen(item)" ion-button icon-left clear small class="text-black">\n\n          <ion-icon name="open"></ion-icon>\n\n        </button>\n\n      </ion-col>\n\n      \n\n    </ion-row>\n\n  </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Visual Studio\Personal\Project-Watermellon\src\pages\ready-app\youtube\youtube-favorite\youtube-favorite.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_youtube_service_youtube_service__["a" /* YoutubeService */]])
    ], YoutubeFavoritePage);
    return YoutubeFavoritePage;
}());

//# sourceMappingURL=youtube-favorite.js.map

/***/ })

});
//# sourceMappingURL=7.js.map