webpackJsonp([4],{

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about__ = __webpack_require__(665);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_about_about_v1_about_v1_module__ = __webpack_require__(666);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_about_about_v2_about_v2_module__ = __webpack_require__(668);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_about_about_v3_about_v3_module__ = __webpack_require__(670);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_about_about_wcf_about_wcf_module__ = __webpack_require__(672);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AboutPageModule = (function () {
    function AboutPageModule() {
    }
    AboutPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_about_about_v1_about_v1_module__["a" /* AboutV1Module */],
                __WEBPACK_IMPORTED_MODULE_4__components_about_about_v2_about_v2_module__["a" /* AboutV2Module */],
                __WEBPACK_IMPORTED_MODULE_5__components_about_about_v3_about_v3_module__["a" /* AboutV3Module */],
                __WEBPACK_IMPORTED_MODULE_6__components_about_about_wcf_about_wcf_module__["a" /* AboutWCFModule */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], AboutPageModule);
    return AboutPageModule;
}());

//# sourceMappingURL=about.module.js.map

/***/ }),

/***/ 665:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
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
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// Leaving this existing code incase we need to come back and reference it.
var AboutPage = (function () {
    function AboutPage(navCtrl, navParams, sanitize) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sanitize = sanitize;
        this.params = {};
        this.url = {};
        // Commenting this out due to unneeded.
        //  this.page=this.navParams.get('page');
        //  console.log(this.page);
        //  if(this.page==undefined){
        //    this.navCtrl.setRoot('HomePage');
        //  }
        this.url = sanitize.bypassSecurityTrustResourceUrl("https://westmorelandfair.com/_app/about-us/");
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-about',template:/*ion-inline-start:"D:\Visual Studio\Personal\Project-Watermellon\src\pages\about\about.html"*/'<!--\n\n  Generated template for the AboutPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header class="skin skin-wcf skin-brown">\n\n  <ion-navbar>\n\n  <button ion-button menuToggle>\n\n    <ion-icon name="menu"></ion-icon>\n\n  </button>\n\n  <ion-title>About</ion-title>\n\n  </ion-navbar>\n\n  </ion-header>\n\n\n\n\n\n<ion-content claa="no-scroll">\n\n   <!-- <about-v1  [data]="data" [events]="events"></about-v1>\n\n\n\n   <about-v2  *ngIf="page!=undefined && page.name==2" [data]="data" [events]="events"></about-v2>\n\n   \n\n   <about-v3  *ngIf="page!=undefined && page.name==3" [data]="data" [events]="events"></about-v3>\n\n   \n\n   <about-wcf [data]="data"></about-wcf> -->\n\n   <iframe height="100%" width="100%" src="https://westmorelandfair.com/_app/about-us/"></iframe>\n\n</ion-content>\n\n\n\n\n\n '/*ion-inline-end:"D:\Visual Studio\Personal\Project-Watermellon\src\pages\about\about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["DomSanitizer"]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 666:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutV1Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_v1__ = __webpack_require__(667);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AboutV1Module = (function () {
    function AboutV1Module() {
    }
    AboutV1Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__about_v1__["a" /* AboutV1Component */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__about_v1__["a" /* AboutV1Component */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__about_v1__["a" /* AboutV1Component */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], AboutV1Module);
    return AboutV1Module;
}());

//# sourceMappingURL=about-v1.module.js.map

/***/ }),

/***/ 667:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutV1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(33);
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
 * Generated class for the AboutV1Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var AboutV1Component = (function () {
    function AboutV1Component(sanitizer) {
        var _this = this;
        this.sanitizer = sanitizer;
        this.onCallbackEvent = function (event) {
            if (_this.events[event]) {
                _this.events[event]({
                    'fullname': _this.fullname,
                    'email': _this.email,
                    'message': _this.message
                });
            }
        };
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AboutV1Component.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AboutV1Component.prototype, "events", void 0);
    AboutV1Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'about-v1',template:/*ion-inline-start:"D:\Visual Studio\Personal\Project-Watermellon\src\components\about\about-v1\about-v1.html"*/'<div class="white-1 about-v1" *ngIf="data!=null">\n\n	<div class="map ani-left-to-right">\n\n		<iframe [src]="sanitizer.bypassSecurityTrustResourceUrl(data.google_map)" width="100%" height="250" frameborder="0" style="border:0" allowfullscreen></iframe>\n\n	</div>\n\n\n\n	<div padding class="ani-right-to-left">\n\n		<div class="find-us mgt-30">\n\n			<h4 class="fs-26 fw-600">{{data.label.txtGetInTouch}}</h4>\n\n			<p class="text-grey-4 mgb-40">{{data.about}}</p>\n\n			<div class="element-find text-grey-4 mgb-10">\n\n				<ion-icon class="mgl-10 mgr-20" name="md-pin"></ion-icon>\n\n				<p class="mgt-0">{{data.address1}}</p>\n\n			</div>\n\n			<div class="element-find text-grey-4 mgb-10">\n\n				<ion-icon class="mgl-10 mgr-20" name="md-call"></ion-icon>\n\n				<p class="mgt-0">{{data.phone1}}</p>\n\n			</div>\n\n			<div class="element-find text-grey-4 mgb-10">\n\n				<ion-icon class="mgl-10 mgr-20" name="md-mail"></ion-icon>\n\n				<p class="mgt-0">{{data.email1}}</p>\n\n			</div>\n\n			<div class="element-find text-grey-4 mgb-10">\n\n				<ion-icon class="mgl-10 mgr-20" name="md-time"></ion-icon>\n\n				<p class="mgt-0">\n\n					<span class="block mgb-5">{{data.open_time}}</span>\n\n					<span class="block mgb-5">{{data.close_time}}</span>\n\n				</p>\n\n			</div>\n\n		</div>\n\n			\n\n		<div class="social mgt-40 ani-fade-out">\n\n			<h6>{{data.label.txtFollow}}:</h6>\n\n			<button ion-button only-icon clear class="text-grey-4">\n\n				<ion-icon name="logo-facebook"></ion-icon>\n\n			</button>\n\n			<button ion-button only-icon clear class="text-grey-4">\n\n				<ion-icon name="logo-twitter"></ion-icon>\n\n			</button>\n\n			<button ion-button only-icon clear class="text-grey-4">\n\n				<ion-icon name="logo-instagram"></ion-icon>\n\n			</button>\n\n			<button ion-button only-icon clear class="text-grey-4">\n\n				<ion-icon name="logo-google"></ion-icon>\n\n			</button>\n\n			<button ion-button only-icon clear class="text-grey-4">\n\n				<ion-icon name="logo-pinterest"></ion-icon>\n\n			</button>\n\n			<button ion-button only-icon clear class="text-grey-4">\n\n				<ion-icon name="logo-linkedin"></ion-icon>\n\n			</button>\n\n			<button ion-button only-icon clear class="text-grey-4">\n\n				<ion-icon name="logo-dribbble"></ion-icon>\n\n			</button>\n\n		</div>\n\n\n\n		<div class="form-mess mgt-70 pdb-50 ani-bottom-to-top">\n\n			<h4 class="fs-26 fw-600">{{data.label.txtSendAMessage}}</h4>\n\n			<ion-list>\n\n			    <ion-item class="text-grey-5 grey-1 round">\n\n			      	<ion-input type="text" placeholder="{{data.label.txtFullName}}" [(ngModel)]="fullname"></ion-input>\n\n			    </ion-item>\n\n			</ion-list>\n\n			<ion-list>\n\n			    <ion-item class="text-grey-5 grey-1 round">\n\n			      	<ion-input type="email" placeholder="{{data.label.txtEmail}}" [(ngModel)]="email"></ion-input>\n\n			    </ion-item>\n\n			</ion-list>\n\n			<ion-list>\n\n			    <ion-item class="text-grey-5 grey-1 bdra-15">\n\n			      	<ion-textarea type="text" placeholder="{{data.label.txtMessage}}" [(ngModel)]="message"></ion-textarea>\n\n			    </ion-item>\n\n			</ion-list>\n\n			<div class="text-right">\n\n				<button ion-button round icon-left class="pink text-white mgt-10" (click)="onCallbackEvent(\'onSendMessage\')">\n\n					<ion-icon class="text-pink" name="send"></ion-icon>\n\n					{{data.label.txtSend}}\n\n				</button>\n\n			</div>\n\n		</div>\n\n	</div>\n\n</div>\n\n'/*ion-inline-end:"D:\Visual Studio\Personal\Project-Watermellon\src\components\about\about-v1\about-v1.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"]])
    ], AboutV1Component);
    return AboutV1Component;
}());

//# sourceMappingURL=about-v1.js.map

/***/ }),

/***/ 668:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutV2Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_v2__ = __webpack_require__(669);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AboutV2Module = (function () {
    function AboutV2Module() {
    }
    AboutV2Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__about_v2__["a" /* AboutV2Component */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__about_v2__["a" /* AboutV2Component */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__about_v2__["a" /* AboutV2Component */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], AboutV2Module);
    return AboutV2Module;
}());

//# sourceMappingURL=about-v2.module.js.map

/***/ }),

/***/ 669:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutV2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(33);
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
 * Generated class for the AboutV2Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var AboutV2Component = (function () {
    function AboutV2Component(sanitizer) {
        var _this = this;
        this.sanitizer = sanitizer;
        this.onCallbackEvent = function (event) {
            if (_this.events[event]) {
                _this.events[event]({
                    'fullname': _this.fullname,
                    'email': _this.email,
                    'message': _this.message
                });
            }
        };
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AboutV2Component.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AboutV2Component.prototype, "events", void 0);
    AboutV2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'about-v2',template:/*ion-inline-start:"D:\Visual Studio\Personal\Project-Watermellon\src\components\about\about-v2\about-v2.html"*/'<div class="black about-v2" *ngIf="data!=null">\n\n  <div class="top-banner">\n\n    <img class="ani-fade-out" src="../../assets/img/bg3.jpg" alt="">\n\n    <div class="slogan black-opct">\n\n      <span class="text-white stroke stroke-white stroke-3 pd-10 fs-24 fw-600 uppercase ani-top-to-bottom">{{data.label.txtContactUs}}</span>\n\n    </div>\n\n  </div>\n\n\n\n  <div padding class="find-us text-center mgt-40 ani-left-to-right">\n\n    <h4 class="fs-18 fw-600 text-orange text-center mgb-40">{{data.label.txtGetInTouch}}</h4>\n\n    <div class="mgb-40">\n\n      <ion-icon class="text-orange fs-24" name="ios-phone-portrait"></ion-icon>\n\n      <p class="text-orange fs-11 uppercase fw-600">{{data.label.txtPhone}}</p>\n\n      <p class="text-grey-2 mg-5 fs-13">{{data.phone1}}</p>\n\n      <p class="text-grey-2 mg-5 fs-13">{{data.phone2}}</p>\n\n    </div>\n\n    <div class="mgb-40">\n\n      <ion-icon class="text-orange fs-24" name="ios-pin-outline"></ion-icon>\n\n      <p class="text-orange fs-11 uppercase fw-600">{{data.label.txtAddress}}</p>\n\n      <p class="text-grey-2 mg-5 fs-13">{{data.address1}}</p>\n\n      <p class="text-grey-2 mg-5 fs-13">{{data.address2}}</p>\n\n    </div>\n\n    <div class="mgb-40">\n\n      <ion-icon class="text-orange fs-24" name="ios-mail-outline"></ion-icon>\n\n      <p class="text-orange fs-11 uppercase fw-600">{{data.label.txtEmail}}</p>\n\n      <p class="text-grey-2 mg-5 fs-13">{{data.email1}}</p>\n\n      <p class="text-grey-2 mg-5 fs-13">{{data.email2}}</p>\n\n    </div>\n\n  </div>\n\n\n\n  <div class="form-mess mgt-20 ani-bottom-to-top">\n\n    <div class="bg-pst">\n\n      <img src="assets/img/bg1.jpg">\n\n    </div>\n\n    <div padding class="black-opct-1 pdt-50 pdb-50 main-form">\n\n      <h4 class="fs-18 fw-600 text-white-2 text-center">{{data.label.txtSendAMessage}}</h4>\n\n      <p class="mgb-50 text-white-2 text-center fs-13">{{data.about}}</p>\n\n      <ion-list>\n\n          <ion-item class="text-white-2 white-opct">\n\n              <ion-input type="text" [(ngModel)]="fullname" placeholder="{{data.label.txtFullName}}"></ion-input>\n\n          </ion-item>\n\n      </ion-list>\n\n      <ion-list>\n\n          <ion-item class="text-white-2 white-opct">\n\n              <ion-input type="email" [(ngModel)]="email" placeholder="{{data.label.txtEmail}}"></ion-input>\n\n          </ion-item>\n\n      </ion-list>\n\n      <ion-list>\n\n          <ion-item class="text-white-2 white-opct">\n\n              <ion-textarea type="text" [(ngModel)]="message" placeholder="{{data.label.txtMessage}}"></ion-textarea>\n\n          </ion-item>\n\n      </ion-list>\n\n      <div class="text-center">\n\n        <button ion-button icon-left class="orange text-black mgt-10 bdra-0 fw-600 uppercase spacing-1 fs-12" (click)="onCallbackEvent(\'onSendMessage\')">\n\n          {{data.label.txtSendMessage}}\n\n        </button>\n\n      </div>\n\n    </div>\n\n  </div>\n\n\n\n  <div padding class="social mgt-40 mgb-30 text-black text-center ani-right-to-left">\n\n    <h6 class="text-orange">{{data.label.txtFollowWidth}}</h6>\n\n    <button ion-button only-icon small class="text-black orange">\n\n      <ion-icon name="logo-facebook"></ion-icon>\n\n    </button>\n\n    <button ion-button only-icon small class="text-black orange">\n\n      <ion-icon name="logo-twitter"></ion-icon>\n\n    </button>\n\n    <button ion-button only-icon small class="text-black orange">\n\n      <ion-icon name="logo-instagram"></ion-icon>\n\n    </button>\n\n    <button ion-button only-icon small class="text-black orange">\n\n      <ion-icon name="logo-google"></ion-icon>\n\n    </button>\n\n    <button ion-button only-icon small class="text-black orange">\n\n      <ion-icon name="logo-linkedin"></ion-icon>\n\n    </button>\n\n  </div>\n\n\n\n  <div class="map ani-left-to-right">\n\n    <iframe [src]="sanitizer.bypassSecurityTrustResourceUrl(data.google_map)" width="100%" height="350" frameborder="0" style="border:0" allowfullscreen></iframe>\n\n  </div>\n\n\n\n  <div padding class="logo-brand text-center ani-bottom-to-top">\n\n    <img src="assets/img/chimera_w.png" alt="">\n\n    <p class="text-white-2 fs-12 pdl-20 pdr-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n\n  </div>\n\n\n\n</div>\n\n'/*ion-inline-end:"D:\Visual Studio\Personal\Project-Watermellon\src\components\about\about-v2\about-v2.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"]])
    ], AboutV2Component);
    return AboutV2Component;
}());

//# sourceMappingURL=about-v2.js.map

/***/ }),

/***/ 670:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutV3Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_v3__ = __webpack_require__(671);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AboutV3Module = (function () {
    function AboutV3Module() {
    }
    AboutV3Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__about_v3__["a" /* AboutV3Component */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__about_v3__["a" /* AboutV3Component */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__about_v3__["a" /* AboutV3Component */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], AboutV3Module);
    return AboutV3Module;
}());

//# sourceMappingURL=about-v3.module.js.map

/***/ }),

/***/ 671:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutV3Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(33);
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
 * Generated class for the AboutV3Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var AboutV3Component = (function () {
    function AboutV3Component(sanitizer) {
        var _this = this;
        this.sanitizer = sanitizer;
        this.onCallbackEvent = function (event) {
            if (_this.events[event]) {
                _this.events[event]({
                    'fullname': _this.fullname,
                    'email': _this.email,
                    'message': _this.message
                });
            }
        };
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AboutV3Component.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AboutV3Component.prototype, "events", void 0);
    AboutV3Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'about-v3',template:/*ion-inline-start:"D:\Visual Studio\Personal\Project-Watermellon\src\components\about\about-v3\about-v3.html"*/'<div padding class="white-1 about-v3" *ngIf="data!=null">	\n\n	<div class="banner">\n\n		<div class="pst-relative mgl-20" col-9>\n\n			<img class="ani-top-to-right" src="assets/img/bg14.jpg" alt="">\n\n			<div class="decor transparent stroke stroke-grey-2 ani-bottom-to-left"></div>\n\n		</div>\n\n		<h2 class="fw-800 fs-40 uppercase text-grey-3 text-right pdt-10 pdr-20 ani-left-to-right">{{data.label.txtContact}}</h2>\n\n	</div>\n\n\n\n	<div class="mgb-30 mgt-40 ani-bottom-to-top">\n\n		<h4 class="fs-20 fw-600 mgb-25">{{data.label.txtAboutUs}}</h4>\n\n		<p class="text-grey-4 fs-13 mgt-0 mgb-0 pdl-20">{{data.address1}}</p>\n\n		<p class="text-grey-4 fs-13 mgt-0 mgb-0 pdl-20">Call Us: {{data.phone1}}</p>\n\n		<p class="text-grey-4 fs-13 mgt-0 mgb-0 pdl-20">{{data.txtWorkingTime}}</p>\n\n		<p class="text-grey-4 fs-13 mgt-0 mgb-0 pdl-20">{{data.workingTime}}</p>\n\n	</div>\n\n\n\n	<div class="row map ani-right-to-left">\n\n		<div class="mgl-40" col-9>\n\n			<iframe [src]="sanitizer.bypassSecurityTrustResourceUrl(data.google_map)" width="100%" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>\n\n		</div>\n\n	</div>\n\n	\n\n	<ion-row class="mgt-50 ani-top-to-bottom">\n\n		<h2 class="fw-600">Just say hi!</h2>\n\n		<p class="text-grey-4 fs-13 pdl-20">{{data.about}}</p>\n\n	</ion-row>\n\n  	\n\n  	<div padding class="bdra-10 mgt-20 pdb-30 pdt-25 shadow-3 pst-relative white ani-fade-out">\n\n    	<ion-list>\n\n		    <ion-item class="text-grey-4 stroke stroke-2 stroke-grey-3">\n\n		      	<ion-input type="text" [(ngModel)]="fullname" placeholder="{{data.label.txtFullName}}"></ion-input>\n\n		    </ion-item>\n\n		</ion-list>\n\n		<ion-list>\n\n		    <ion-item class="text-grey-4 stroke stroke-2 stroke-grey-3">\n\n		      	<ion-input type="text" [(ngModel)]="email" placeholder="{{data.label.txtEmail}}"></ion-input>\n\n		    </ion-item>\n\n		</ion-list>\n\n		<ion-list>\n\n		    <ion-item class="text-grey-4 stroke stroke-2 stroke-grey-3">\n\n		      	<ion-input type="text" [(ngModel)]="message" placeholder="{{data.label.txtMessage}}"></ion-input>\n\n		    </ion-item>\n\n		</ion-list>\n\n		<button ion-button icon-right round class="btn-send black text-white shadow-3" (click)="onCallbackEvent(\'onSendMessage\')">{{data.label.txtSend}} <ion-icon class="fs-28" name="ios-send-outline"></ion-icon></button>\n\n  	</div>\n\n\n\n  	<div class="pdl-30 mgt-50 mgb-30 ani-left-to-right">\n\n  		<button ion-button icon-only class="button-circle grey-3 text-white"><ion-icon class="fs-20" name="logo-facebook"></ion-icon></button>\n\n  		<button ion-button icon-only class="button-circle grey-3 text-white"><ion-icon class="fs-20" name="logo-linkedin"></ion-icon></button>\n\n  		<button ion-button icon-only class="button-circle grey-3 text-white"><ion-icon class="fs-20" name="logo-twitter"></ion-icon></button>\n\n  	</div>\n\n</div>'/*ion-inline-end:"D:\Visual Studio\Personal\Project-Watermellon\src\components\about\about-v3\about-v3.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"]])
    ], AboutV3Component);
    return AboutV3Component;
}());

//# sourceMappingURL=about-v3.js.map

/***/ }),

/***/ 672:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutWCFModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_wcf__ = __webpack_require__(673);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AboutWCFModule = (function () {
    function AboutWCFModule() {
    }
    AboutWCFModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__about_wcf__["a" /* AboutWCFComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__about_wcf__["a" /* AboutWCFComponent */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__about_wcf__["a" /* AboutWCFComponent */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], AboutWCFModule);
    return AboutWCFModule;
}());

//# sourceMappingURL=about-wcf.module.js.map

/***/ }),

/***/ 673:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutWCFComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutWCFComponent = (function () {
    function AboutWCFComponent(sanitizer) {
        var _this = this;
        this.sanitizer = sanitizer;
        this.onCallbackEvent = function (event) {
            if (_this.events[event]) {
                _this.events[event]({
                    'fullname': _this.fullname,
                    'email': _this.email,
                    'message': _this.message
                });
            }
        };
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AboutWCFComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AboutWCFComponent.prototype, "events", void 0);
    AboutWCFComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'about-wcf',template:/*ion-inline-start:"D:\Visual Studio\Personal\Project-Watermellon\src\components\about\about-wcf\about-wcf.html"*/'<iframe [src]="sanitizer.bypassSecurityTrustResourceUrl(data.wcf_url)" frameborder="0" style="border:0; width: 100%; height: 100%;" allowfullscreen></iframe>\n\n'/*ion-inline-end:"D:\Visual Studio\Personal\Project-Watermellon\src\components\about\about-wcf\about-wcf.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"]])
    ], AboutWCFComponent);
    return AboutWCFComponent;
}());

//# sourceMappingURL=about-wcf.js.map

/***/ })

});
//# sourceMappingURL=4.js.map