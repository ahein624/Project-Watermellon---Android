webpackJsonp([27],{

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordpressCategoryPageModule", function() { return WordpressCategoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wordpress_category__ = __webpack_require__(730);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WordpressCategoryPageModule = (function () {
    function WordpressCategoryPageModule() {
    }
    WordpressCategoryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__wordpress_category__["a" /* WordpressCategoryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__wordpress_category__["a" /* WordpressCategoryPage */]),
            ],
        })
    ], WordpressCategoryPageModule);
    return WordpressCategoryPageModule;
}());

//# sourceMappingURL=wordpress-category.module.js.map

/***/ }),

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordpressCategoryPage; });
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
 * Generated class for the WordpressCategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WordpressCategoryPage = (function () {
    function WordpressCategoryPage(navCtrl, navParams, wpService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.wpService = wpService;
        this.data = new Array();
        this.events = {};
        this.page = 0;
        this.per_page = 15;
        this.spnState = 'show';
    }
    WordpressCategoryPage.prototype.loadMore = function (infiniteScroll) {
        var _this = this;
        if (infiniteScroll === void 0) { infiniteScroll = null; }
        this.page += 1;
        this.wpService.getCategorys(this.page, this.per_page).subscribe(function (data) {
            _this.data = _this.data.concat(data);
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
    WordpressCategoryPage.prototype.ionViewDidLoad = function () {
        this.loadMore();
    };
    WordpressCategoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-wordpress-category',template:/*ion-inline-start:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/pages/ready-app/wordpress/wordpress-category/wordpress-category.html"*/'<!--\n  Generated template for the WordpressCategoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Category</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="white-1">\n  <ion-spinner class="indicator" [ngClass]="spnState"></ion-spinner>\n    <ion-card *ngFor="let item of data"  class="bdra-5 card card-md" (click)="wpService.goToPosts(navCtrl,item)">\n      <ion-card-header class="fs-13 fw-600 uppercase card-header card-header-md" [innerHTML]="item.name"></ion-card-header>\n      <ion-card-content class="card-content card-content-md">\n        <p class="text-grey-4 fs-13" [innerHTML]="item.description"></p>\n      </ion-card-content>\n  </ion-card>\n\n  <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n  <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>\n'/*ion-inline-end:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/pages/ready-app/wordpress/wordpress-category/wordpress-category.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_wordpress_wordpress__["a" /* WordpressService */]])
    ], WordpressCategoryPage);
    return WordpressCategoryPage;
}());

//# sourceMappingURL=wordpress-category.js.map

/***/ })

});
//# sourceMappingURL=27.js.map