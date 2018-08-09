webpackJsonp([13],{

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnsplashFavoriestPageModule", function() { return UnsplashFavoriestPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__unsplash_favorite__ = __webpack_require__(725);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_gallery_info_gallery_info_gallery_module__ = __webpack_require__(469);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UnsplashFavoriestPageModule = (function () {
    function UnsplashFavoriestPageModule() {
    }
    UnsplashFavoriestPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__unsplash_favorite__["a" /* UnsplashFavoritePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__unsplash_favorite__["a" /* UnsplashFavoritePage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_gallery_info_gallery_info_gallery_module__["a" /* InfoGalleryModule */]
            ],
        })
    ], UnsplashFavoriestPageModule);
    return UnsplashFavoriestPageModule;
}());

//# sourceMappingURL=unsplash-favorite.module.js.map

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
            selector: 'info-gallery',template:/*ion-inline-start:"D:\Visual Studio\Personal\Project-Watermellon\src\components\gallery\info-gallery\info-gallery.html"*/'<ion-row class="pdl-5 pdr-5">\n\n<ion-col col-6 *ngFor="let item of data" class="mgb-10 ani-right-to-left">\n\n<div class="wrapper-info-gallery">\n\n	<img src="{{item.path}}" alt="" (click)="onCallbackEvent(\'onClick\',item, $event)">\n\n</div>\n\n\n\n<div class="text-info">\n\n	<h4 class="title fs-13 fw-500 text-ellipsis mgt-5 mgb-0" [innerHTML]="item.title"></h4>\n\n</div>\n\n\n\n</ion-col>\n\n</ion-row>\n\n'/*ion-inline-end:"D:\Visual Studio\Personal\Project-Watermellon\src\components\gallery\info-gallery\info-gallery.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], InfoGalleryComponent);
    return InfoGalleryComponent;
}());

//# sourceMappingURL=info-gallery.js.map

/***/ }),

/***/ 725:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnsplashFavoritePage; });
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
* Generated class for the UnsplashFavoriestPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
var UnsplashFavoritePage = (function () {
    function UnsplashFavoritePage(navCtrl, navParams, unsplashService, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.unsplashService = unsplashService;
        this.modalCtrl = modalCtrl;
        this.data = new Array();
        this.events = {};
    }
    UnsplashFavoritePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.data = new Array();
        var that = this;
        this.unsplashService.getAllFavorites().then(function (result) {
            for (var i = 0; i < result.length; i++) {
                _this.data.push({
                    'id': result[i].id,
                    'path': result[i].path,
                    'title': 'Photo by ' + result[i].title,
                    'links': result[i].links,
                    'isFavorite': true
                });
            }
            _this.events.onClick = function (item) {
                var myModal = that.modalCtrl.create('UnsplashModalPhotoPage', { 'data': item });
                myModal.present();
            };
        });
    };
    UnsplashFavoritePage.prototype.removeAll = function () {
        this.unsplashService.clearAllFavorite();
        this.data = new Array();
    };
    UnsplashFavoritePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-unsplash-favorite',template:/*ion-inline-start:"D:\Visual Studio\Personal\Project-Watermellon\src\pages\ready-app\unsplash\unsplash-favorite\unsplash-favorite.html"*/'<!--\n\n  Generated template for the UnsplashFavoriestPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Favorite</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only small class="grey-2 bdra-50 text-black" (click)="removeAll()">\n\n        <ion-icon class="fs-18" name="md-trash"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <info-gallery [data]="data" [events]="events"></info-gallery>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Visual Studio\Personal\Project-Watermellon\src\pages\ready-app\unsplash\unsplash-favorite\unsplash-favorite.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_unsplash_service_unsplash_service__["a" /* UnsplashService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */]])
    ], UnsplashFavoritePage);
    return UnsplashFavoritePage;
}());

//# sourceMappingURL=unsplash-favorite.js.map

/***/ })

});
//# sourceMappingURL=13.js.map