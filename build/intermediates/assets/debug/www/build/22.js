webpackJsonp([22],{

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordpressSearchPageModule", function() { return WordpressSearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wordpress_search__ = __webpack_require__(735);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WordpressSearchPageModule = (function () {
    function WordpressSearchPageModule() {
    }
    WordpressSearchPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__wordpress_search__["a" /* WordpressSearchPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__wordpress_search__["a" /* WordpressSearchPage */]),
            ],
        })
    ], WordpressSearchPageModule);
    return WordpressSearchPageModule;
}());

//# sourceMappingURL=wordpress-search.module.js.map

/***/ }),

/***/ 735:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordpressSearchPage; });
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
 * Generated class for the WordpressSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WordpressSearchPage = (function () {
    function WordpressSearchPage(navCtrl, navParams, wpService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.wpService = wpService;
        this.data = new Array();
        this.events = {};
        this.page = 0;
        this.per_page = 5;
        this.query = '';
        this.spnState = 'show';
    }
    WordpressSearchPage.prototype.onInput = function () {
        this.spnState = 'show';
        this.page = 0;
        this.data = [];
        this.loadMore();
    };
    WordpressSearchPage.prototype.loadMore = function (infiniteScroll) {
        var _this = this;
        if (infiniteScroll === void 0) { infiniteScroll = null; }
        this.page += 1;
        this.wpService.getPosts(this.page, this.per_page, this.query).subscribe(function (data) {
            var _loop_1 = function () {
                var post = {
                    id: data[i].id,
                    title: data[i].title.rendered,
                    excerpt: data[i].excerpt.rendered,
                    link: data[i].link,
                    thumb: null,
                    isFavorite: false
                };
                _this.wpService.getMedia(data[i].featured_media).subscribe(function (media) {
                    post.thumb = media.source_url;
                });
                _this.wpService.isFavorite(data[i]).then(function (result) {
                    post.isFavorite = result;
                    _this.data.push(post);
                });
            };
            for (var i = 0; i < data.length; i++) {
                _loop_1();
            }
            ;
            _this.spnState = 'hide';
            if (infiniteScroll) {
                infiniteScroll.complete();
            }
        }, function (error) {
            _this.spnState = 'hide';
            if (infiniteScroll != null) {
                infiniteScroll.enable(false);
            }
        });
    };
    WordpressSearchPage.prototype.ionViewDidLoad = function () {
        this.loadMore();
    };
    WordpressSearchPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        if (this.data.length != 0) {
            var _loop_2 = function (i) {
                this_1.wpService.isFavorite(this_1.data[i]).then(function (result) {
                    _this.data[i].isFavorite = result;
                });
            };
            var this_1 = this;
            for (var i = 0; i < this.data.length; i++) {
                _loop_2(i);
            }
        }
    };
    WordpressSearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-wordpress-search',template:/*ion-inline-start:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/pages/ready-app/wordpress/wordpress-search/wordpress-search.html"*/'<!--\n  Generated template for the WordpressSearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-searchbar [(ngModel)]="query" [showCancelButton]="shouldShowCancel" (ionInput)="onInput()" class="light-searchbar round transparent text-white pdl-10 pdr-10"></ion-searchbar>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="white-1">\n   <ion-spinner class="indicator" [ngClass]="spnState"></ion-spinner>\n   <ion-card *ngFor="let item of data" class="bdra-5 card card-md">\n    <img [src]="item.thumb" (click)="wpService.doReadMore(navCtrl,item)">\n    <ion-card-content class="card-content card-content-md" (click)="wpService.doReadMore(navCtrl,item)">\n      <ion-card-title class="fs-16 fw-600 card-title card-title-md" [innerHTML]="item.title"></ion-card-title>\n      <p  [innerHTML]="item.excerpt"></p>\n    </ion-card-content>\n\n    <ion-row class="row">\n      <ion-col>\n        <button (click)="wpService.doFavorite(item)" ion-button icon-left clear small class="text-grey-5 favorite">\n          <ion-icon  [name]="item.isFavorite == true ? \'heart\' : \'heart-outline\'"></ion-icon>\n        </button>\n      </ion-col>\n\n      <ion-col center text-center>\n         <button (click)="wpService.doShare(item)" ion-button icon-left clear small class="text-grey-5">\n             <ion-icon name="md-share"></ion-icon>\n        </button>\n      </ion-col>\n\n     <ion-col right text-right>\n        <button (click)="wpService.doOpen(item)" ion-button icon-left clear small class="text-grey-5">\n          <ion-icon name="md-open"></ion-icon>\n        </button>\n      </ion-col>\n      \n      \n      <ion-col right text-right>\n        <button (click)="wpService.doReadMore(navCtrl,item)" ion-button icon-left clear small class="text-grey-5 fs-20">\n          <ion-icon name="ios-more"></ion-icon>\n        </button>\n      </ion-col>\n\n    </ion-row>\n  </ion-card>\n   <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n     <ion-infinite-scroll-content></ion-infinite-scroll-content>\n   </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/pages/ready-app/wordpress/wordpress-search/wordpress-search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_wordpress_wordpress__["a" /* WordpressService */]])
    ], WordpressSearchPage);
    return WordpressSearchPage;
}());

//# sourceMappingURL=wordpress-search.js.map

/***/ })

});
//# sourceMappingURL=22.js.map