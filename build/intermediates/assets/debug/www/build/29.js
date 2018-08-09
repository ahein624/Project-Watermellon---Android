webpackJsonp([29],{

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnsplashModalPhotoPageModule", function() { return UnsplashModalPhotoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__unsplash_modal_photo__ = __webpack_require__(727);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UnsplashModalPhotoPageModule = (function () {
    function UnsplashModalPhotoPageModule() {
    }
    UnsplashModalPhotoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__unsplash_modal_photo__["a" /* UnsplashModalPhotoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__unsplash_modal_photo__["a" /* UnsplashModalPhotoPage */]),
            ],
        })
    ], UnsplashModalPhotoPageModule);
    return UnsplashModalPhotoPageModule;
}());

//# sourceMappingURL=unsplash-modal-photo.module.js.map

/***/ }),

/***/ 727:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnsplashModalPhotoPage; });
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
 * Generated class for the UnsplashModalPhotoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UnsplashModalPhotoPage = (function () {
    function UnsplashModalPhotoPage(navCtrl, navParams, unsplashService, viewCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.unsplashService = unsplashService;
        this.viewCtrl = viewCtrl;
        this.data = {};
        this.data = this.navParams.get('data');
        this.unsplashService.isFavorite(this.data).then(function (result) {
            _this.data.isFavorite = result;
        });
    }
    UnsplashModalPhotoPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    UnsplashModalPhotoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GalleryModalPage');
    };
    UnsplashModalPhotoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-unsplash-modal-photo',template:/*ion-inline-start:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/pages/ready-app/unsplash/unsplash-modal-photo/unsplash-modal-photo.html"*/'<div fullscreen fullscreen-no-pdt>\n	<div class="wrapper-view-img">\n		<div class="view-img-detail">\n			<img [src]="data.path" alt="">\n			<div class="btn-wrapper">\n				<button ion-button icon-only small outline class="text-white button-circle mgr-10 mgt-15 stroke stroke-1 stroke-white icon-close" (click)="dismiss()">\n					<ion-icon class="" name="ios-close"></ion-icon>\n				</button>\n\n				<button ion-button icon-only small outline class="text-white button-circle mgr-10 mgt-15 stroke stroke-1 stroke-white icon-heart" (click)="unsplashService.doFavorite(data)">\n					<ion-icon class="fs-16" name="md-heart-outline" *ngIf="!data.isFavorite"></ion-icon>\n					<ion-icon class="fs-16" name="md-heart" *ngIf="data.isFavorite"></ion-icon>\n				</button>\n\n		         <button ion-button icon-only small outline class="text-white button-circle mgr-10 mgt-15 stroke stroke-1 stroke-white icon-heart" (click)="unsplashService.doShare(data)">\n					<ion-icon class="fs-16" name="md-share"></ion-icon>\n				</button>\n\n				<button ion-button icon-only small outline class="text-white button-circle mgr-10 mgt-15 stroke stroke-1 stroke-white icon-heart" (click)="unsplashService.doOpen(data)">\n					<ion-icon class="fs-16" name="md-open"></ion-icon>\n				</button>\n\n				<button ion-button icon-only small outline class="text-white button-circle mgr-10 mgt-15 stroke stroke-1 stroke-white icon-download" (click)="unsplashService.doDownload(data)">\n					<ion-icon class="fs-16" name="md-download" ></ion-icon>\n				</button>\n			</div>\n		    <h5 class="title" [innerHTML]="data.title"></h5>\n		</div>\n	</div>\n</div>\n\n\n'/*ion-inline-end:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/pages/ready-app/unsplash/unsplash-modal-photo/unsplash-modal-photo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_unsplash_service_unsplash_service__["a" /* UnsplashService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */]])
    ], UnsplashModalPhotoPage);
    return UnsplashModalPhotoPage;
}());

//# sourceMappingURL=unsplash-modal-photo.js.map

/***/ })

});
//# sourceMappingURL=29.js.map