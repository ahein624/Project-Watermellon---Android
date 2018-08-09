webpackJsonp([55],{

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginV3Module", function() { return LoginV3Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_v3__ = __webpack_require__(657);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginV3Module = (function () {
    function LoginV3Module() {
    }
    LoginV3Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login_v3__["a" /* LoginV3Component */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login_v3__["a" /* LoginV3Component */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__login_v3__["a" /* LoginV3Component */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], LoginV3Module);
    return LoginV3Module;
}());

//# sourceMappingURL=login-v3.module.js.map

/***/ }),

/***/ 657:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginV3Component; });
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
 * Generated class for the LoginV3Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var LoginV3Component = (function () {
    function LoginV3Component() {
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
    ], LoginV3Component.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], LoginV3Component.prototype, "events", void 0);
    LoginV3Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'login-v3',template:/*ion-inline-start:"D:\Visual Studio\Personal\Project-Watermellon\src\components\login\login-v3\login-v3.html"*/'<div *ngIf="data!=null">\n\n  <div class="bg-img">\n\n    <img [src]="data.imgBg" alt="">\n\n  </div>\n\n \n\n  <div class="wrapper-page text-center black-opct-1 {{data.ani}}">\n\n    <button ion-button outline icon-only small color="dark" class="text-grey-3 stroke-grey-3 stroke-1 button-circle back-page" (click)="onCallbackEvent(\'onDismiss\')">\n\n      <ion-icon name="ios-close"></ion-icon>\n\n    </button>\n\n    \n\n    <div class="full-width">\n\n      <ion-row class="logo-img mgb-50 ani-fade-out">\n\n        <img class="mg-auto" [src]="data.imgLogo" alt="">\n\n        <p class="text-grey-3 mgt-0 pdl-15 pdr-15">{{data.txtHead}}</p>\n\n      </ion-row>\n\n      <ion-list class="mgb-0 ani-bottom-to-top">\n\n        <ion-item class="text-white white-opct">\n\n          <ion-input type="text" placeholder="{{data.txtUserName}}" [(ngModel)]="username"></ion-input>\n\n        </ion-item>\n\n      </ion-list>\n\n      <ion-list class="ani-bottom-to-top">\n\n        <ion-item class="text-white white-opct">\n\n          <ion-input type="password" placeholder="{{data.txtPassword}}" [(ngModel)]="password"></ion-input>\n\n        </ion-item>\n\n      </ion-list>\n\n      \n\n      <button ion-button block color="light" class="ani-bottom-to-top white-opct text-white uppercase fw-600 spacing-1"  (click)="onCallbackEvent(\'onLogin\')">{{data.btnLogin}}</button>\n\n\n\n      <button ion-button color="light" clear block small class="ani-fade-out mgb-35 mgt-20 pull-right text-grey-3"\n\n       (click)="onCallbackEvent(\'onForgotPassword\')">{{data.btnForgotPassword}}</button>\n\n\n\n      <ion-row class="block text-center ani-fade-out">\n\n        <button ion-button icon-only color="light" class="text-white indigo pdl-20 pdr-20 fs-12" (click)="onCallbackEvent(\'onFacebookLogin\')">\n\n          <ion-icon name="logo-facebook"></ion-icon>\n\n        </button>\n\n        <button ion-button icon-only color="light" class="text-white cyan pdl-20 pdr-20 fs-12" (click)="onCallbackEvent(\'onTwitterLogin\')">\n\n          <ion-icon name="logo-twitter"></ion-icon>\n\n        </button>\n\n      </ion-row>\n\n      \n\n      <button ion-button color="light" clear block small class="ani-fade-out btn-signup mgb-15 text-grey-3"  (click)="onCallbackEvent(\'onSignUp\')">{{data.btnSignUp}}</button>\n\n\n\n    </div>\n\n  </div>\n\n  </div>\n\n'/*ion-inline-end:"D:\Visual Studio\Personal\Project-Watermellon\src\components\login\login-v3\login-v3.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], LoginV3Component);
    return LoginV3Component;
}());

//# sourceMappingURL=login-v3.js.map

/***/ })

});
//# sourceMappingURL=55.js.map