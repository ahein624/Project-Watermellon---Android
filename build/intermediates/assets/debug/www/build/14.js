webpackJsonp([14],{

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnsplashCategoryDetailPageModule", function() { return UnsplashCategoryDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__unsplash_category_detail__ = __webpack_require__(723);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_gallery_info_gallery_info_gallery_module__ = __webpack_require__(469);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UnsplashCategoryDetailPageModule = (function () {
    function UnsplashCategoryDetailPageModule() {
    }
    UnsplashCategoryDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__unsplash_category_detail__["a" /* UnsplashCategoryDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__unsplash_category_detail__["a" /* UnsplashCategoryDetailPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_gallery_info_gallery_info_gallery_module__["a" /* InfoGalleryModule */]
            ],
        })
    ], UnsplashCategoryDetailPageModule);
    return UnsplashCategoryDetailPageModule;
}());

//# sourceMappingURL=unsplash-category-detail.module.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoGalleryModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__info_gallery__ = __webpack_require__(470);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InfoGalleryModule = (function () {
    function InfoGalleryModule() {
    }
    InfoGalleryModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__info_gallery__["a" /* InfoGalleryComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__info_gallery__["a" /* InfoGalleryComponent */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__info_gallery__["a" /* InfoGalleryComponent */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], InfoGalleryModule);
    return InfoGalleryModule;
}());

//# sourceMappingURL=info-gallery.module.js.map

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoGalleryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * Generated class for the InfoGalleryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var InfoGalleryComponent = (function () {
    function InfoGalleryComponent() {
        var _this = this;
        this.onCallbackEvent = function (event, item, e) {
            if (e) {
                e.stopPropagation();
            }
            if (_this.events[event]) {
                _this.events[event](item);
            }
        };
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], InfoGalleryComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], InfoGalleryComponent.prototype, "events", void 0);
    InfoGalleryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'info-gallery',template:/*ion-inline-start:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/components/gallery/info-gallery/info-gallery.html"*/'<ion-row class="pdl-5 pdr-5">\n<ion-col col-6 *ngFor="let item of data" class="mgb-10 ani-right-to-left">\n<div class="wrapper-info-gallery">\n	<img src="{{item.path}}" alt="" (click)="onCallbackEvent(\'onClick\',item, $event)">\n</div>\n\n<div class="text-info">\n	<h4 class="title fs-13 fw-500 text-ellipsis mgt-5 mgb-0" [innerHTML]="item.title"></h4>\n</div>\n\n</ion-col>\n</ion-row>\n'/*ion-inline-end:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/components/gallery/info-gallery/info-gallery.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], InfoGalleryComponent);
    return InfoGalleryComponent;
}());

//# sourceMappingURL=info-gallery.js.map

/***/ }),

/***/ 723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnsplashCategoryDetailPage; });
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
 * Generated class for the UnsplashCategoryDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UnsplashCategoryDetailPage = (function () {
    function UnsplashCategoryDetailPage(navCtrl, navParams, modalCtrl, unsplashService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.unsplashService = unsplashService;
        this.data = new Array();
        this.events = {};
        this.page = 0;
        this.per_page = 20;
        this.collection_name = '';
        this.spnState = 'show';
        this.collectionId = this.navParams.get('id');
        this.collection_name = this.navParams.get('collection_name');
    }
    UnsplashCategoryDetailPage.prototype.loadMore = function (infiniteScroll) {
        var _this = this;
        if (infiniteScroll === void 0) { infiniteScroll = null; }
        this.page += 1;
        this.unsplashService.getPhotosByCollection(this.collectionId, this.page, this.per_page).subscribe(function (data) {
            for (var i = 0; i < data.length; i++) {
                _this.data.push({
                    'id': data[i].id,
                    'path': data[i].urls.regular,
                    'title': 'Photo by ' + data[i].user.name
                });
            }
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
    UnsplashCategoryDetailPage.prototype.ionViewDidLoad = function () {
        this.loadMore();
        this.events.onClick = function (item) {
            var myModal = this.modalCtrl.create('UnsplashModalPhotoPage', { 'data': item });
            myModal.present();
        };
    };
    UnsplashCategoryDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-unsplash-category-detail',template:/*ion-inline-start:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/pages/ready-app/unsplash/unsplash-category-detail/unsplash-category-detail.html"*/'<!--\n  Generated template for the UnsplashCategoryDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>{{collection_name}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n   <ion-spinner class="indicator" [ngClass]="spnState"></ion-spinner>\n   <info-gallery [data]="data" [events]="events"></info-gallery>\n   <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n     <ion-infinite-scroll-content></ion-infinite-scroll-content>\n   </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/pages/ready-app/unsplash/unsplash-category-detail/unsplash-category-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_unsplash_service_unsplash_service__["a" /* UnsplashService */]])
    ], UnsplashCategoryDetailPage);
    return UnsplashCategoryDetailPage;
}());

//# sourceMappingURL=unsplash-category-detail.js.map

/***/ })

});
//# sourceMappingURL=14.js.map