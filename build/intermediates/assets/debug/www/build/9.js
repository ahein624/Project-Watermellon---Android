webpackJsonp([9],{

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacebookPageModule", function() { return FacebookPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__facebook__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(477);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FacebookPageModule = (function () {
    function FacebookPageModule() {
    }
    FacebookPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__facebook__["a" /* FacebookPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__facebook__["a" /* FacebookPage */]),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
            ]
        })
    ], FacebookPageModule);
    return FacebookPageModule;
}());

//# sourceMappingURL=facebook.module.js.map

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

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacebookPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_facebook_facebook__ = __webpack_require__(260);
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
 * Generated class for the FacebookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FacebookPage = (function () {
    function FacebookPage(navCtrl, navParams, http, fbService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.fbService = fbService;
        this.next = null;
        this.page = null;
        this.spnState = 'show';
        this.list = new Array();
    }
    FacebookPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad FacebookPage');
        this.spnState = 'show';
        this.fbService.getPage().subscribe(function (data) {
            _this.page = data;
            _this.loadMore();
        }, function (error) {
            _this.spnState = 'hide';
        });
    };
    FacebookPage.prototype.loadMore = function (infiniteScroll) {
        var _this = this;
        if (infiniteScroll === void 0) { infiniteScroll = null; }
        if (this.next == null) {
            this.fbService.getPosts(this.next).subscribe(function (data) {
                var tmpData = data.data;
                console.log(tmpData);
                _this.next = data.paging.next;
                _this.list = _this.list.concat(tmpData);
                if (infiniteScroll) {
                    infiniteScroll.complete();
                }
                _this.spnState = 'hide';
            }, function (error) {
                console.log(error);
                if (infiniteScroll != null) {
                    infiniteScroll.enable(false);
                }
                _this.spnState = 'hide';
            });
        }
        else {
            this.fbService.getPosts(this.next).subscribe(function (data) {
                var tmpData = data.data;
                _this.next = data.paging.next;
                _this.list = _this.list.concat(tmpData);
                if (infiniteScroll) {
                    infiniteScroll.complete();
                }
                if (_this.next == undefined) {
                    infiniteScroll.enable(false);
                }
                _this.spnState = 'hide';
            }, function (error) {
                console.log(error);
                if (infiniteScroll != null) {
                    infiniteScroll.enable(false);
                }
                _this.spnState = 'hide';
            });
        }
    };
    FacebookPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-facebook',template:/*ion-inline-start:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/pages/ready-app/facebook/facebook.html"*/'<!--\n  Generated template for the Facebook page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n<ion-navbar>\n<button ion-button menuToggle>\n  <ion-icon name="menu"></ion-icon>\n</button>\n<ion-title>facebook</ion-title>\n</ion-navbar>\n</ion-header>\n\n<ion-content class="white-1">\n<ion-spinner class="indicator" [ngClass]="spnState"></ion-spinner>\n<ion-card *ngFor="let item of list" class="bdra-5 mgb-10">\n<ion-item>\n<ion-avatar item-start class="mgt-6 mgb-6">\n<img src="{{page.picture.data.url}}">\n</ion-avatar>\n<h2 class="fs-14">{{page.name}}</h2>\n<p class="fs-10 text-grey-4">{{item.updated_time | timeAgo}}</p> \n</ion-item>\n\n<img [src]="item.full_picture"/>\n<ion-card-content>\n<ion-card-title class="pd-0 fs-15 fw-600">{{item.name}}</ion-card-title>\n<p class="mgt-10">{{item.message}}</p>\n</ion-card-content>\n\n<ion-row>\n<ion-col>\n<button ion-button icon-left clear small class="text-black">\n<ion-icon name="thumbs-up"></ion-icon>\n  <div>{{item.likes.summary.total_count}}</div>\n</button>\n</ion-col>\n\n<ion-col center text-center>\n<button ion-button icon-left clear small class="text-black" (click)="fbService.goToComment(item,navCtrl)">\n  <ion-icon name="chatbubbles"></ion-icon>\n  <div>{{item.comments.summary.total_count}}</div>\n</button>\n</ion-col>\n\n<ion-col right text-right>\n<button ion-button icon-left clear small class="text-black" (click)="fbService.doOpen(item)">\n  <ion-icon name="open"></ion-icon>\n</button>\n</ion-col>\n\n<ion-col right text-right>\n<button (click)="fbService.doShare(navCtrl,item)" ion-button icon-left clear small class="text-black">\n  <ion-icon name="share"></ion-icon>\n</button>\n</ion-col>\n\n</ion-row>\n</ion-card>\n\n<ion-infinite-scroll (ionInfinite)="loadMore($event)">\n<ion-infinite-scroll-content></ion-infinite-scroll-content>\n</ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/pages/ready-app/facebook/facebook.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__providers_facebook_facebook__["a" /* FacebookService */]])
    ], FacebookPage);
    return FacebookPage;
}());

//# sourceMappingURL=facebook.js.map

/***/ })

});
//# sourceMappingURL=9.js.map