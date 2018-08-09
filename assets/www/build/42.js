webpackJsonp([42],{

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailyEventsPageModule", function() { return DailyEventsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__daily_events__ = __webpack_require__(683);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DailyEventsPageModule = (function () {
    function DailyEventsPageModule() {
    }
    DailyEventsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__daily_events__["a" /* DailyEventsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__daily_events__["a" /* DailyEventsPage */]),
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], DailyEventsPageModule);
    return DailyEventsPageModule;
}());

//# sourceMappingURL=daily-events.module.js.map

/***/ }),

/***/ 683:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DailyEventsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(33);
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
 * Generated class for the DailyEventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// Leaving this existing code incase we need to come back and reference it.
var DailyEventsPage = (function () {
    function DailyEventsPage(navCtrl, navParams, sanitize) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sanitize = sanitize;
        this.params = {};
        this.url = sanitize.bypassSecurityTrustResourceUrl("https://westmorelandfair.com/_app/daily-events/");
    }
    DailyEventsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DailyEventsPage');
    };
    DailyEventsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-events',template:/*ion-inline-start:"D:\Visual Studio\Personal\Project-Watermellon\src\pages\daily-events\daily-events.html"*/'<!--\n\n  Generated template for the AboutPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header class="skin skin-wcf skin-brown">\n\n  <ion-navbar>\n\n  <button ion-button menuToggle>\n\n    <ion-icon name="menu"></ion-icon>\n\n  </button>\n\n  <ion-title>Daily Events</ion-title>\n\n  </ion-navbar>\n\n  </ion-header>\n\n\n\n\n\n<ion-content class="no-scroll">\n\n    <iframe height="100%" width="100%" [src]="url"></iframe>\n\n</ion-content>\n\n\n\n\n\n '/*ion-inline-end:"D:\Visual Studio\Personal\Project-Watermellon\src\pages\daily-events\daily-events.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["DomSanitizer"]])
    ], DailyEventsPage);
    return DailyEventsPage;
}());

//# sourceMappingURL=daily-events.js.map

/***/ })

});
//# sourceMappingURL=42.js.map