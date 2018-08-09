webpackJsonp([30],{

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnsplashCollectionPageModule", function() { return UnsplashCollectionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__unsplash_collection__ = __webpack_require__(724);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UnsplashCollectionPageModule = (function () {
    function UnsplashCollectionPageModule() {
    }
    UnsplashCollectionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__unsplash_collection__["a" /* UnsplashCollectionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__unsplash_collection__["a" /* UnsplashCollectionPage */]),
            ],
        })
    ], UnsplashCollectionPageModule);
    return UnsplashCollectionPageModule;
}());

//# sourceMappingURL=unsplash-collection.module.js.map

/***/ }),

/***/ 724:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnsplashCollectionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_unsplash_service_unsplash_service__ = __webpack_require__(254);
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
 * Generated class for the UnsplashCollectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UnsplashCollectionPage = (function () {
    function UnsplashCollectionPage(navCtrl, unsplashService, navParams) {
        this.navCtrl = navCtrl;
        this.unsplashService = unsplashService;
        this.navParams = navParams;
        this.list = new Array();
        this.page = 0;
        this.per_page = 20;
        this.spnState = 'show';
    }
    UnsplashCollectionPage.prototype.loadMore = function (infiniteScroll) {
        var _this = this;
        if (infiniteScroll === void 0) { infiniteScroll = null; }
        this.page += 1;
        this.unsplashService.getCollections(this.page, this.per_page).subscribe(function (data) {
            _this.list = _this.list.concat(data);
            if (infiniteScroll) {
                infiniteScroll.complete();
            }
            _this.spnState = 'hide';
        }, function (error) {
            if (infiniteScroll != null) {
                infiniteScroll.enable(false);
            }
            _this.spnState = 'hide';
        });
    };
    UnsplashCollectionPage.prototype.ionViewDidLoad = function () {
        this.loadMore();
    };
    UnsplashCollectionPage.prototype.detail = function (item) {
        console.log(item.id);
        this.navCtrl.push('UnsplashCategoryDetailPage', { id: item.id, collection_name: item.title });
    };
    UnsplashCollectionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-unsplash-collection',template:/*ion-inline-start:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/pages/ready-app/unsplash/unsplash-collection/unsplash-collection.html"*/'<!--\n  Generated template for the UnsplashCollectionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n	      <ion-icon name="menu"></ion-icon>\n	    </button>\n		<ion-title>Collection</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n<ion-spinner class="indicator" [ngClass]="spnState"></ion-spinner>\n<ion-card *ngFor="let item of list" class="card-img-bg bdra-5 card card-md" (click)=\'detail(item)\'>\n<img  *ngIf="item.preview_photos[0]" [src]="item.preview_photos[0].urls.regular">\n<img  *ngIf="item.preview_photos.length==0" src="assets/img/bg-material.jpg">\n<div class="card-title">{{item.title}}</div>\n<div class="card-subtitle">{{item.total_photos}} photos</div>\n</ion-card>\n   <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n     <ion-infinite-scroll-content></ion-infinite-scroll-content>\n   </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/pages/ready-app/unsplash/unsplash-collection/unsplash-collection.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_unsplash_service_unsplash_service__["a" /* UnsplashService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], UnsplashCollectionPage);
    return UnsplashCollectionPage;
}());

//# sourceMappingURL=unsplash-collection.js.map

/***/ })

});
//# sourceMappingURL=30.js.map