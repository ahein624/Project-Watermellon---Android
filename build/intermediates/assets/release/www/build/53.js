webpackJsonp([53],{

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginV5Module", function() { return LoginV5Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_v5__ = __webpack_require__(659);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginV5Module = (function () {
    function LoginV5Module() {
    }
    LoginV5Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login_v5__["a" /* LoginV5Component */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login_v5__["a" /* LoginV5Component */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__login_v5__["a" /* LoginV5Component */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], LoginV5Module);
    return LoginV5Module;
}());

//# sourceMappingURL=login-v5.module.js.map

/***/ }),

/***/ 659:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginV5Component; });
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
 * Generated class for the LoginV5Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var LoginV5Component = (function () {
    function LoginV5Component() {
        var _this = this;
        this.onCallbackEvent = function (event) {
            if (_this.events[event]) {
                _this.events[event]({
                    'username': _this.username,
                    'password': _this.password
                });
            }
        };
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], LoginV5Component.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], LoginV5Component.prototype, "events", void 0);
    LoginV5Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'login-v5',template:/*ion-inline-start:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/components/login/login-v5/login-v5.html"*/'<div *ngIf="data!=null">\n	<div class="bg-img">\n		<img [src]="data.imgBg" alt="">\n	</div>\n\n	<div class="wrapper-page text-center black-opct {{data.ani}}">\n		<button ion-button icon-only small color="light" class="text-white white-opct bdra-10 back-page" (click)="onCallbackEvent(\'onDismiss\')">\n			<ion-icon name="ios-close"></ion-icon>\n		</button>\n\n		<div class="wrapper-flex">\n			<div class="main-form pdl-40 pdr-40 mgt-40">\n				<div>\n					<ion-row class="logo-img mgb-30 mgt-30 ani-fade-out">\n					<img class="mg-auto" [src]="data.imgLogo" alt="">\n					<p class="text-white mgt-0 pdl-15 pdr-15">{{data.txtHead}}</p>\n				</ion-row>\n\n				<ion-list class="mgb-10 ani-top-to-bottom">\n				<ion-item class="text-grey-5 white-opct-1 bdra-10">\n				<ion-input type="text" placeholder="{{data.txtUserName}}" [(ngModel)]="username"></ion-input>\n			</ion-item>\n		</ion-list>\n		<ion-list class="ani-top-to-bottom">\n		<ion-item class="text-grey-5 white-opct-1 bdra-10">\n		<ion-input type="password" placeholder="{{data.txtPassword}}" [(ngModel)]="password"></ion-input>\n	</ion-item>\n</ion-list>\n\n<button ion-button color="light" outline class="ani-top-to-bottom stroke-white stroke-1 bdra-10 text-white uppercase spacing-1" (click)="onCallbackEvent(\'onLogin\')">{{data.btnLogin}}</button>\n</div>\n</div>\n\n<div class="grey-1 mgt-30 full-width pdb-0 pdt-10 ani-bottom-to-top" padding>\n	<div class="full-width">\n		<ion-row class="block text-center" padding>\n		<button ion-button block icon-left color="light" class="text-white bdra-10 indigo pdl-20 pdr-20 fs-12 mgb-10" (click)="onCallbackEvent(\'onFacebookLogin\')">\n			<ion-icon name="logo-facebook"></ion-icon>\n			{{data.btnFacebookLogin}}\n		</button>\n		<button ion-button block icon-left color="light" class="text-white bdra-10 cyan pdl-20 pdr-20 fs-12" (click)="onCallbackEvent(\'onTwitterLogin\')">\n			<ion-icon name="logo-twitter"></ion-icon>\n			{{data.btnTwitterLogin}}\n		</button>\n	</ion-row>\n\n\n	<button ion-button color="light" clear small class="btn-signup mgb-5 text-grey-4" (click)="onCallbackEvent(\'onSignUp\')">{{data.btnSignUp}}</button>\n	<button ion-button color="light" clear small class="mgt-5 mgb-10 text-grey-4" (click)="onCallbackEvent(\'onForgotPassword\')">{{data.btnForgotPassword}}</button>\n</div>\n</div>\n</div>\n</div>\n</div>\n'/*ion-inline-end:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/components/login/login-v5/login-v5.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], LoginV5Component);
    return LoginV5Component;
}());

//# sourceMappingURL=login-v5.js.map

/***/ })

});
//# sourceMappingURL=53.js.map