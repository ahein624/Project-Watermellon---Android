webpackJsonp([6],{

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubePageModule", function() { return YoutubePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__youtube__ = __webpack_require__(739);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(477);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var YoutubePageModule = (function () {
    function YoutubePageModule() {
    }
    YoutubePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__youtube__["a" /* YoutubePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__youtube__["a" /* YoutubePage */]),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], YoutubePageModule);
    return YoutubePageModule;
}());

//# sourceMappingURL=youtube.module.js.map

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

/***/ 739:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubePage; });
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
 * Generated class for the YoutubePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var YoutubePage = (function () {
    function YoutubePage(navCtrl, navParams, ytService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ytService = ytService;
        this.data = new Array();
        this.next = null;
        this.spnState = 'show';
        this.data = new Array();
    }
    YoutubePage.prototype.loadMore = function (infiniteScroll) {
        var _this = this;
        if (infiniteScroll === void 0) { infiniteScroll = null; }
        var that = this;
        this.ytService.getVideos(this.next).subscribe(function (data) {
            var items = data.items;
            var _loop_1 = function () {
                var data_1 = items[i];
                _this.ytService.isFavorite(items[i]).then(function (result) {
                    data_1.isFavorite = false;
                    _this.data.push(data_1);
                });
            };
            for (var i = 0; i < items.length; i++) {
                _loop_1();
            }
            _this.next = data.nextPageToken;
            if (infiniteScroll) {
                infiniteScroll.complete();
            }
            _this.spnState = 'hide';
        }, function (error) {
            _this.spnState = 'hide';
            if (infiniteScroll != null) {
                infiniteScroll.enable(false);
            }
        });
    };
    YoutubePage.prototype.ionViewDidLoad = function () {
        this.loadMore();
    };
    YoutubePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        if (this.data.length != 0) {
            var _loop_2 = function (i) {
                this_1.ytService.isFavorite(this_1.data[i]).then(function (result) {
                    _this.data[i].isFavorite = result;
                });
            };
            var this_1 = this;
            for (var i = 0; i < this.data.length; i++) {
                _loop_2(i);
            }
        }
    };
    YoutubePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-youtube',template:/*ion-inline-start:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/pages/ready-app/youtube/youtube.html"*/'<!--\n  Generated template for the Youtube page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>youtube</ion-title>\n    \n    <ion-buttons right style="margin-right:10px">\n      <button ion-button icon-only (click)="ytService.goToFavoritePage(navCtrl)">\n      <ion-icon class="fs-24 text-grey-5" name="heart">\n      </ion-icon>\n    </button>\n    </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n<ion-spinner class="indicator" [ngClass]="spnState"></ion-spinner>\n <ion-card *ngFor="let item of data" class="bdra-5 card card-md" >\n    <img [src]="item.snippet.thumbnails.medium.url" (click)="ytService.doReadMore(item,navCtrl)">\n    <ion-card-content class="card-content card-content-md" (click)="ytService.doReadMore(item,navCtrl)">\n      <ion-card-title class="fs-18 card-title card-title-md" [innerHTML]="item.snippet.title"></ion-card-title>\n      <p class="text-grey fs-12">{{item.snippet.publishedAt | timeAgoIso_8061}}</p>\n    </ion-card-content>\n\n    <ion-row class="row">\n      <ion-col>\n        <button (click)="ytService.doFavorite(item)" ion-button icon-left clear small class="text-black favorite">\n          <ion-icon  [name]="item.isFavorite == true ? \'heart\' : \'heart-outline\'"></ion-icon>\n        </button>\n      </ion-col>\n\n      <ion-col center text-center>\n         <button (click)="ytService.doShare(item)" ion-button icon-left clear small class="text-black">\n             <ion-icon name="share"></ion-icon>\n        </button>\n      </ion-col>\n\n      <ion-col right text-right>\n        <button (click)="ytService.doOpen(item)" ion-button icon-left clear small class="text-black">\n          <ion-icon name="open"></ion-icon>\n        </button>\n      </ion-col>\n      \n    </ion-row>\n  </ion-card>\n\n\n  <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/pages/ready-app/youtube/youtube.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_youtube_service_youtube_service__["a" /* YoutubeService */]])
    ], YoutubePage);
    return YoutubePage;
}());

//# sourceMappingURL=youtube.js.map

/***/ })

});
//# sourceMappingURL=6.js.map