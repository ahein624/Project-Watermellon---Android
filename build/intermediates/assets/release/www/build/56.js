webpackJsonp([56],{

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginV2Module", function() { return LoginV2Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_v2__ = __webpack_require__(656);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginV2Module = (function () {
    function LoginV2Module() {
    }
    LoginV2Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login_v2__["a" /* LoginV2Component */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login_v2__["a" /* LoginV2Component */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__login_v2__["a" /* LoginV2Component */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], LoginV2Module);
    return LoginV2Module;
}());

//# sourceMappingURL=login-v2.module.js.map

/***/ }),

/***/ 656:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginV2Component; });
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
 * Generated class for the LoginV2Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var LoginV2Component = (function () {
    function LoginV2Component() {
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
    ], LoginV2Component.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], LoginV2Component.prototype, "events", void 0);
    LoginV2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'login-v2',template:/*ion-inline-start:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/components/login/login-v2/login-v2.html"*/'<div *ngIf="data!=null">\n  <div class="bg-img">\n    <img [src]="data.imgBg" alt="">\n  </div>\n\n  <div padding class="wrapper-page text-center black-opct-1 {{data.ani}}">\n    <button ion-button outline icon-only small color="dark" class="text-grey-3 stroke-grey-3 stroke-1 button-circle back-page" (click)="onCallbackEvent(\'onDismiss\')">\n      <ion-icon name="ios-close"></ion-icon>\n    </button>\n    \n    <div>\n      <ion-row class="logo-img mgb-30 mgt-20 ani-left-to-right">\n        <img class="mg-auto" [src]="data.imgLogo" alt="">\n        <p class="text-grey-3 mgt-0 pdl-15 pdr-15">{{data.txtHead}}</p>\n      </ion-row>\n      <ion-list class="ani-bottom-to-top">\n        <ion-item class="text-white white-opct bdra-20">\n          <ion-input type="text" placeholder="{{data.txtUserName}}" [(ngModel)]="username"></ion-input>\n        </ion-item>\n      </ion-list>\n      <ion-list class="ani-bottom-to-top">\n        <ion-item class="text-white white-opct bdra-20">\n          <ion-input type="password" placeholder="{{data.txtPassword}}" [(ngModel)]="password"></ion-input>\n        </ion-item>\n      </ion-list>\n      \n      <button ion-button block outline round color="light" class="mgt-20 stroke-2 stroke-white text-white uppercase fw-600 spacing-1 ani-bottom-to-top" (click)="onCallbackEvent(\'onLogin\')">{{data.btnLogin}}</button>\n\n      <ion-row>\n        <p class="section text-white fs-13 text-center mgt-40 mgb-20 ani-right-to-left">{{data.txtOr}}</p>\n        <button ion-button block outline round icon-left color="light" class="ani-fade-out stroke-2 stroke-white text-white uppercase fw-600 spacing-1" (click)="onCallbackEvent(\'onFacebookLogin\')">\n          <ion-icon name="logo-facebook"></ion-icon>\n          {{data.btnFacebookLogin}}\n        </button>\n\n        <button ion-button block outline round icon-left color="light" class="ani-bottom-to-top stroke-2 stroke-white text-white uppercase fw-600 spacing-1" (click)="onCallbackEvent(\'onGoogleLogin\')">\n          <ion-icon name="logo-google"></ion-icon>\n          {{data.btnGoogleLogin}}\n        </button>\n      </ion-row>\n      \n      <div class="mgt-30">\n        <button ion-button color="light" clear small class="ani-fade-out mgb--5 pull-left text-grey-3" (click)="onCallbackEvent(\'onSignUp\')">{{data.btnSignUp}}</button>\n\n        <button ion-button color="light" clear small class="ani-fade-out mgb--5 pull-right text-grey-3" (click)="onCallbackEvent(\'onForgotPassword\')">{{data.btnForgotPassword}}</button>\n      </div>\n    </div>\n  </div>\n</div>\n'/*ion-inline-end:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/components/login/login-v2/login-v2.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], LoginV2Component);
    return LoginV2Component;
}());

//# sourceMappingURL=login-v2.js.map

/***/ })

});
//# sourceMappingURL=56.js.map