webpackJsonp([40],{

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FragmentPageModule", function() { return FragmentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fragment__ = __webpack_require__(685);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FragmentPageModule = (function () {
    function FragmentPageModule() {
    }
    FragmentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__fragment__["a" /* FragmentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__fragment__["a" /* FragmentPage */]),
            ],
        })
    ], FragmentPageModule);
    return FragmentPageModule;
}());

//# sourceMappingURL=fragment.module.js.map

/***/ }),

/***/ 685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FragmentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_loading_service_loading_service__ = __webpack_require__(258);
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
 * Generated class for the FragmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FragmentPage = (function () {
    function FragmentPage(navCtrl, navParams, loadingService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingService = loadingService;
        this.pages = this.navParams.get('pages');
        this.subPage = this.navParams.get('subPage');
        console.log(this.subPage);
        console.log(this.pages);
    }
    FragmentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FragmentPage');
    };
    FragmentPage.prototype.goTo = function (page) {
        var that = this;
        this.loadingService.show();
        this.navCtrl.push(this.subPage, { 'page': page }).then(function () {
            that.loadingService.dismiss();
        });
    };
    FragmentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-fragment',template:/*ion-inline-start:"D:\Visual Studio\Personal\Project-Watermellon\src\pages\fragment\fragment.html"*/'<!--\n\n  Generated template for the FragmentPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!-- <ion-header>\n\n\n\n<ion-navbar>\n\n	<ion-title class="uppercase">Fragment</ion-title>\n\n</ion-navbar>\n\n\n\n</ion-header>\n\n -->\n\n\n\n\n\n<ion-header>\n\n  	<ion-navbar>\n\n    	<button ion-button menuToggle>\n\n      		<ion-icon name="menu"></ion-icon>\n\n    	</button>\n\n    	<ion-title>Fragment</ion-title>\n\n  	</ion-navbar>\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content>\n\n	<ion-list no-lines>\n\n  		<button ion-item *ngFor="let item of pages" ion-item class="ani-bottom-to-left" (click)="goTo(item)">{{item.title}}</button>\n\n	</ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Visual Studio\Personal\Project-Watermellon\src\pages\fragment\fragment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_loading_service_loading_service__["a" /* LoadingService */]])
    ], FragmentPage);
    return FragmentPage;
}());

//# sourceMappingURL=fragment.js.map

/***/ })

});
//# sourceMappingURL=40.js.map