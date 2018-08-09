webpackJsonp([5],{

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComingSoonPageModule", function() { return ComingSoonPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__coming_soon__ = __webpack_require__(675);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_coming_soon_coming_soon_v1_coming_soon_v1_module__ = __webpack_require__(676);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_coming_soon_coming_soon_v2_coming_soon_v2_module__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_coming_soon_coming_soon_v3_coming_soon_v3_module__ = __webpack_require__(680);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ComingSoonPageModule = (function () {
    function ComingSoonPageModule() {
    }
    ComingSoonPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__coming_soon__["a" /* ComingSoonPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__coming_soon__["a" /* ComingSoonPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_coming_soon_coming_soon_v1_coming_soon_v1_module__["a" /* ComingSoonV1Module */],
                __WEBPACK_IMPORTED_MODULE_4__components_coming_soon_coming_soon_v2_coming_soon_v2_module__["a" /* ComingSoonV2Module */],
                __WEBPACK_IMPORTED_MODULE_5__components_coming_soon_coming_soon_v3_coming_soon_v3_module__["a" /* ComingSoonV3Module */]
            ],
        })
    ], ComingSoonPageModule);
    return ComingSoonPageModule;
}());

//# sourceMappingURL=coming-soon.module.js.map

/***/ }),

/***/ 675:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComingSoonPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
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
 * Generated class for the ComingSoonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ComingSoonPage = (function () {
    function ComingSoonPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.data = {};
        this.events = {};
        this.page = this.navParams.get('page');
        this.data = {
            days: 3,
            hours: 17,
            minutes: 33,
            seconds: 25
        };
    }
    ComingSoonPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ComingSoonPage');
    };
    ComingSoonPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-coming-soon',template:/*ion-inline-start:"D:\Visual Studio\Personal\Project-Watermellon\src\pages\coming-soon\coming-soon.html"*/'<!--\n\n  Generated template for the AboutPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{page.title}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n	<coming-soon-v1 *ngIf="page!=undefined && page.name==1" [data]="data" [events]="events"></coming-soon-v1>\n\n	<coming-soon-v2 *ngIf="page!=undefined && page.name==2" [events]="events"></coming-soon-v2>\n\n	<coming-soon-v3 *ngIf="page!=undefined && page.name==3" [events]="events"></coming-soon-v3>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Visual Studio\Personal\Project-Watermellon\src\pages\coming-soon\coming-soon.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */]])
    ], ComingSoonPage);
    return ComingSoonPage;
}());

//# sourceMappingURL=coming-soon.js.map

/***/ }),

/***/ 676:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComingSoonV1Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__coming_soon_v1__ = __webpack_require__(677);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ComingSoonV1Module = (function () {
    function ComingSoonV1Module() {
    }
    ComingSoonV1Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__coming_soon_v1__["a" /* ComingSoonV1Component */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__coming_soon_v1__["a" /* ComingSoonV1Component */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__coming_soon_v1__["a" /* ComingSoonV1Component */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ComingSoonV1Module);
    return ComingSoonV1Module;
}());

//# sourceMappingURL=coming-soon-v1.module.js.map

/***/ }),

/***/ 677:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComingSoonV1Component; });
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
 * Generated class for the ComingSoonV1Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ComingSoonV1Component = (function () {
    function ComingSoonV1Component() {
        var _this = this;
        this.running = false;
        this.timer = null;
        this.onCallbackEvent = function (event) {
            if (_this.events[event]) {
                _this.events[event]();
            }
        };
        this.val_days = 3;
        this.val_hours = 17;
        this.val_minutes = 33;
        this.val_seconds = 25;
        this.days = ('0' + this.val_days).slice(-2);
        this.hours = ('0' + this.val_hours).slice(-2);
        this.minutes = ('0' + this.val_minutes).slice(-2);
        this.seconds = ('0' + this.val_seconds).slice(-2);
        //Use setTimeout to wait for time to load from the server
        this.count_down();
    }
    ComingSoonV1Component.prototype.count_down = function () {
        console.log("a");
        this.running = true;
        var thiss = this;
        this.timer = setInterval(function () {
            if (thiss.val_seconds > 0) {
                thiss.val_seconds = thiss.val_seconds - 1;
            }
            if (thiss.val_seconds == 0 && thiss.val_minutes > 0) {
                thiss.val_minutes = thiss.val_minutes - 1;
                thiss.val_seconds = 59;
            }
            if (thiss.val_minutes == 0 && thiss.val_seconds == 0 && thiss.val_hours > 0) {
                thiss.val_hours = thiss.val_hours - 1;
                thiss.val_minutes = 59;
                thiss.val_seconds = 59;
            }
            if (thiss.val_hours == 0 && thiss.val_minutes == 0 && thiss.val_seconds == 0 && thiss.val_days > 0) {
                thiss.val_days = thiss.val_days - 1;
                thiss.val_hours = 24;
                thiss.val_minutes = 59;
                thiss.val_seconds = 59;
            }
            thiss.days = ('0' + thiss.val_days).slice(-2);
            thiss.hours = ('0' + thiss.val_hours).slice(-2);
            thiss.minutes = ('0' + thiss.val_minutes).slice(-2);
            thiss.seconds = ('0' + thiss.val_seconds).slice(-2);
        }, 1000);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ComingSoonV1Component.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ComingSoonV1Component.prototype, "events", void 0);
    ComingSoonV1Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'coming-soon-v1',template:/*ion-inline-start:"D:\Visual Studio\Personal\Project-Watermellon\src\components\coming-soon\coming-soon-v1\coming-soon-v1.html"*/'<div *ngIf="data!=null" class="white-1">\n\n	<div class="bg-img">\n\n		<img src="assets/img/bg2.jpg" alt="">\n\n	</div>\n\n	<div class="wrapper-pst black-opct-1">\n\n		<div class="top-decor">\n\n			<img src="assets/img/decor_coming.png" alt="">\n\n		</div>\n\n		<div class="wrapper-coming">\n\n			<div class="time-count mgt-50 ani-bottom-to-top">\n\n				<p class="text-white text-right fs-14 fw-300 spacing-2 ani-right-to-left">Seconds: {{seconds}}</p>\n\n				<h2 class="text-white fs-50 fw-600 spacing-1 mgt-10">{{days +\':\'+ hours +\':\'+ minutes}}</h2>\n\n			</div>\n\n			<div>\n\n\n\n				<ion-list class="ani-bottom-to-top">\n\n				<ion-item class="text-white white-opct bdra-20">\n\n				<ion-input type="email" placeholder="{{data.txtUserName}}" [(ngModel)]="email"></ion-input>\n\n			</ion-item>\n\n		</ion-list>\n\n\n\n		<button ion-button block outline round color="light" class="mgt-20 stroke-2 stroke-white text-white uppercase fw-600 spacing-1 ani-bottom-to-top" (click)="onCallbackEvent(\'onLogin\')">{{data.txtLogin}}</button>\n\n	</div>\n\n</div>\n\n</div>\n\n</div>\n\n'/*ion-inline-end:"D:\Visual Studio\Personal\Project-Watermellon\src\components\coming-soon\coming-soon-v1\coming-soon-v1.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ComingSoonV1Component);
    return ComingSoonV1Component;
}());

//# sourceMappingURL=coming-soon-v1.js.map

/***/ }),

/***/ 678:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComingSoonV2Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__coming_soon_v2__ = __webpack_require__(679);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ComingSoonV2Module = (function () {
    function ComingSoonV2Module() {
    }
    ComingSoonV2Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__coming_soon_v2__["a" /* ComingSoonV2Component */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__coming_soon_v2__["a" /* ComingSoonV2Component */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__coming_soon_v2__["a" /* ComingSoonV2Component */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ComingSoonV2Module);
    return ComingSoonV2Module;
}());

//# sourceMappingURL=coming-soon-v2.module.js.map

/***/ }),

/***/ 679:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComingSoonV2Component; });
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
 * Generated class for the ComingSoonV3Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ComingSoonV2Component = (function () {
    function ComingSoonV2Component() {
        var _this = this;
        this.val_days = 3;
        this.val_hours = 17;
        this.val_minutes = 33;
        this.val_seconds = 25;
        this.onCallbackEvent = function (event) {
            if (_this.events[event]) {
                _this.events[event]();
            }
        };
        this.days = ('0' + this.val_days).slice(-2);
        this.hours = ('0' + this.val_hours).slice(-2);
        this.minutes = ('0' + this.val_minutes).slice(-2);
        this.seconds = ('0' + this.val_seconds).slice(-2);
        this.count_down();
    }
    ComingSoonV2Component.prototype.count_down = function () {
        var thiss = this;
        setInterval(function () {
            if (thiss.val_seconds > 0) {
                thiss.val_seconds = thiss.val_seconds - 1;
            }
            if (thiss.val_seconds == 0 && thiss.val_minutes > 0) {
                thiss.val_minutes = thiss.val_minutes - 1;
                thiss.val_seconds = 59;
            }
            if (thiss.val_minutes == 0 && thiss.val_seconds == 0 && thiss.val_hours > 0) {
                thiss.val_hours = thiss.val_hours - 1;
                thiss.val_minutes = 59;
                thiss.val_seconds = 59;
            }
            if (thiss.val_hours == 0 && thiss.val_minutes == 0 && thiss.val_seconds == 0 && thiss.val_days > 0) {
                thiss.val_days = thiss.val_days - 1;
                thiss.val_hours = 24;
                thiss.val_minutes = 59;
                thiss.val_seconds = 59;
            }
            thiss.days = ('0' + thiss.val_days).slice(-2);
            thiss.hours = ('0' + thiss.val_hours).slice(-2);
            thiss.minutes = ('0' + thiss.val_minutes).slice(-2);
            thiss.seconds = ('0' + thiss.val_seconds).slice(-2);
        }, 1000);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ComingSoonV2Component.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ComingSoonV2Component.prototype, "events", void 0);
    ComingSoonV2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'coming-soon-v2',template:/*ion-inline-start:"D:\Visual Studio\Personal\Project-Watermellon\src\components\coming-soon\coming-soon-v2\coming-soon-v2.html"*/'<div class="white-1 comingsoon-event">\n\n  <div class="wrapper-content">\n\n\n\n    <div class="wrapper-coming black-opct-1">\n\n      <div class="bg-img">\n\n        <img src="assets/img/bg9.jpg" alt="">\n\n      </div>\n\n      <div class="main-time text-white text-center black-opct">\n\n        <h2 class="fs-60 fw-800 mgb-0 spacing-3 ani-bottom-to-top">{{days}}</h2>\n\n        <p class="mgt-0 spacing-2 fs-13 ani-fade-out">days</p>\n\n        \n\n        <h2 class="fs-60 fw-600 mgb-0 spacing-3 ani-bottom-to-top">{{hours}}</h2>\n\n        <p class="mgt-0 spacing-2 fs-13 ani-fade-out">hours</p>\n\n\n\n        <h2 class="fs-60 fw-600 mgb-0 spacing-3 ani-bottom-to-top">{{minutes}}</h2>\n\n        <p class="mgt-0 spacing-2 fs-13 ani-fade-out">minutes</p>\n\n\n\n        <p class="seconds spacing-3">seconds {{seconds}}</p>\n\n      </div>\n\n    </div>\n\n\n\n    <ion-card class="bdra-0 stroke-bottom stroke-3 stroke-cyan mg-0 full-width main-event ani-bottom-to-top">\n\n      <ion-row class="wrapper-item-line">\n\n        <div class="left-time-flex text-center stroke-right stroke-1 stroke-grey-1 pdt-20 pdb-20" col-3>\n\n          <span class="fw-400 block text-grey-3 uppercase mgb-10">Nov</span>\n\n          <p class="day fs-24 fw-600 stroke-1 stroke stroke-cyan text-cyan">29</p>\n\n          <p class="time">\n\n            <b class="fs-12">11:05 am</b>\n\n          </p>\n\n        </div>\n\n\n\n        <div class="right-content pd-15 pdr-10" col-9>\n\n          <h3 class="fs-15 fw-600 mgb-10">Folly words widow one downs few age.</h3>\n\n          \n\n          <ion-list no-border no-lines lst-small class="lst-no-background">\n\n            <ion-item class="text-grey-3 fs-13 pdl-0">\n\n              <ion-icon name=\'md-pin\' class="fs-16" item-start></ion-icon>\n\n              2B/324 Thuy Khue, Tay Ho, Ha Noi\n\n            </ion-item>\n\n            <ion-item class="text-grey-3 fs-13 pdl-0">\n\n              <ion-icon name=\'ios-phone-portrait\' class="fs-16" item-start></ion-icon>\n\n              +84 868 271 095\n\n            </ion-item>\n\n          </ion-list>\n\n\n\n          <button ion-button small round icon-left outline class="stroke stroke-1 stroke-cyan text-cyan">Note</button>\n\n          <button ion-button small round icon-left class="text-black grey-2">More</button>\n\n        </div>\n\n      </ion-row>\n\n    </ion-card>\n\n\n\n  </div>\n\n\n\n</div>\n\n'/*ion-inline-end:"D:\Visual Studio\Personal\Project-Watermellon\src\components\coming-soon\coming-soon-v2\coming-soon-v2.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ComingSoonV2Component);
    return ComingSoonV2Component;
}());

//# sourceMappingURL=coming-soon-v2.js.map

/***/ }),

/***/ 680:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComingSoonV3Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__coming_soon_v3__ = __webpack_require__(681);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ComingSoonV3Module = (function () {
    function ComingSoonV3Module() {
    }
    ComingSoonV3Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__coming_soon_v3__["a" /* ComingSoonV3Component */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__coming_soon_v3__["a" /* ComingSoonV3Component */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__coming_soon_v3__["a" /* ComingSoonV3Component */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ComingSoonV3Module);
    return ComingSoonV3Module;
}());

//# sourceMappingURL=coming-soon-v3.module.js.map

/***/ }),

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComingSoonV3Component; });
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
 * Generated class for the ComingSoonV2Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ComingSoonV3Component = (function () {
    function ComingSoonV3Component() {
        var _this = this;
        this.running = false;
        this.timer = null;
        this.val_days = 3;
        this.val_hours = 17;
        this.val_minutes = 33;
        this.val_seconds = 25;
        this.onCallbackEvent = function (event) {
            if (_this.events[event]) {
                _this.events[event]();
            }
        };
        this.days = ('0' + this.val_days).slice(-2);
        this.hours = ('0' + this.val_hours).slice(-2);
        this.minutes = ('0' + this.val_minutes).slice(-2);
        this.seconds = ('0' + this.val_seconds).slice(-2);
        this.count_down();
    }
    ComingSoonV3Component.prototype.count_down = function () {
        this.running = true;
        var thiss = this;
        this.timer = setInterval(function () {
            if (thiss.val_seconds > 0) {
                thiss.val_seconds = thiss.val_seconds - 1;
            }
            if (thiss.val_seconds == 0 && thiss.val_minutes > 0) {
                thiss.val_minutes = thiss.val_minutes - 1;
                thiss.val_seconds = 59;
            }
            if (thiss.val_minutes == 0 && thiss.val_seconds == 0 && thiss.val_hours > 0) {
                thiss.val_hours = thiss.val_hours - 1;
                thiss.val_minutes = 59;
                thiss.val_seconds = 59;
            }
            if (thiss.val_hours == 0 && thiss.val_minutes == 0 && thiss.val_seconds == 0 && thiss.val_days > 0) {
                thiss.val_days = thiss.val_days - 1;
                thiss.val_hours = 24;
                thiss.val_minutes = 59;
                thiss.val_seconds = 59;
            }
            thiss.days = ('0' + thiss.val_days).slice(-2);
            thiss.hours = ('0' + thiss.val_hours).slice(-2);
            thiss.minutes = ('0' + thiss.val_minutes).slice(-2);
            thiss.seconds = ('0' + thiss.val_seconds).slice(-2);
        }, 1000);
    };
    ComingSoonV3Component.prototype.play = function () {
        if (this.running == true) {
            clearInterval(this.timer);
            this.running = false;
        }
        else {
            this.count_down();
        }
    };
    ComingSoonV3Component.prototype.restart = function () {
        clearInterval(this.timer);
        this.running = false;
        this.constructor();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ComingSoonV3Component.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ComingSoonV3Component.prototype, "events", void 0);
    ComingSoonV3Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'coming-soon-v3',template:/*ion-inline-start:"D:\Visual Studio\Personal\Project-Watermellon\src\components\coming-soon\coming-soon-v3\coming-soon-v3.html"*/'<div class="white-1 blog-detail">\n\n  <ion-card class="bdra-5 blue shadow-2 ani-bottom-to-left">\n\n    <ion-card-content>\n\n      <div class="">\n\n        <h2 class="fw-600 fs-30 text-center pdt-20 pdb-20 text-white">{{days +\':\'+ hours +\':\'+ minutes +\':\'+ seconds}}</h2>\n\n      </div>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  \n\n  <ion-card class="bdra-0 stroke-bottom stroke-red stroke-3 ani-bottom-to-left">\n\n    <ion-card-content>\n\n      <div class="">\n\n        <h2 class="fw-600 fs-30 text-center pdt-20 pdb-20 text-red">{{days +\':\'+ hours +\':\'+ minutes +\':\'+ seconds}}</h2>\n\n      </div>\n\n\n\n      <ion-row>\n\n        <ion-col>\n\n          <button ion-button icon-left clear class="text-black" (click)="restart()">\n\n            <ion-icon name="md-refresh"></ion-icon>\n\n            <div>Restar</div>\n\n          </button>\n\n        </ion-col>\n\n        <ion-col center text-center>\n\n          <button ion-button icon-left clear class="text-black" (click)="play()" *ngIf="running == false">\n\n            <ion-icon name="ios-play"></ion-icon>\n\n            <div>Play</div>\n\n          </button>\n\n          <button ion-button icon-left clear class="text-black" (click)="play()" *ngIf="running == true">\n\n            <ion-icon name="ios-pause"></ion-icon>\n\n            <div>Pause</div>\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card class="bdra-5 comingsoon-card-img pst-relative ani-bottom-to-left">\n\n    <img src="assets/img/bg5.jpg" alt="">\n\n    <ion-card-content class="black-opct-1">\n\n      <div class="wrapper-time text-center">\n\n        <span class="inline-block white-opct text-white bdra-5 time-element mg-5 fs-20 fw-600 pd-15">{{days}}</span>\n\n        <span class="inline-block white-opct text-white bdra-5 time-element mg-5 fs-20 fw-600 pd-15">{{hours}}</span>\n\n        <span class="inline-block white-opct text-white bdra-5 time-element mg-5 fs-20 fw-600 pd-15">{{minutes}}</span>\n\n        <span class="inline-block white-opct text-white bdra-5 time-element mg-5 fs-20 fw-600 pd-15">{{seconds}}</span>\n\n      </div>\n\n      <ion-row class="mgt-20">\n\n        <ion-col center text-center>\n\n          <button ion-button icon-left round small class="text-white white-opct" (click)="restart()">\n\n            <ion-icon name="md-refresh"></ion-icon>\n\n            <div>Restar</div>\n\n          </button>\n\n        </ion-col>\n\n\n\n        <ion-col center text-center>\n\n          <button ion-button icon-left round small class="text-white white-opct" (click)="play()" *ngIf="running == false">\n\n            <ion-icon name="ios-pause"></ion-icon>\n\n            <div>Play</div>\n\n          </button>\n\n          <button ion-button icon-left round small class="text-white white-opct" (click)="play()" *ngIf="running == true">\n\n            <ion-icon name="ios-pause"></ion-icon>\n\n            <div>Pause</div>\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n</div>\n\n'/*ion-inline-end:"D:\Visual Studio\Personal\Project-Watermellon\src\components\coming-soon\coming-soon-v3\coming-soon-v3.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ComingSoonV3Component);
    return ComingSoonV3Component;
}());

//# sourceMappingURL=coming-soon-v3.js.map

/***/ })

});
//# sourceMappingURL=5.js.map