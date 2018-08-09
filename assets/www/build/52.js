webpackJsonp([52],{

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginV6Module", function() { return LoginV6Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_v6__ = __webpack_require__(660);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginV6Module = (function () {
    function LoginV6Module() {
    }
    LoginV6Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login_v6__["a" /* LoginV6Component */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login_v6__["a" /* LoginV6Component */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__login_v6__["a" /* LoginV6Component */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], LoginV6Module);
    return LoginV6Module;
}());

//# sourceMappingURL=login-v6.module.js.map

/***/ }),

/***/ 660:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginV6Component; });
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
 * Generated class for the LoginV6Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var LoginV6Component = (function () {
    function LoginV6Component() {
        var _this = this;
        this.type = "signup";
        this.onCallbackEvent = function (event) {
            if (_this.events[event]) {
                _this.events[event]({
                    'email': _this.email,
                    'password': _this.password,
                    'signUpEmail': _this.signUpEmail,
                    'signUpPassword': _this.signUpPassword,
                    'confirmPassword': _this.confirmPassword
                });
            }
        };
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], LoginV6Component.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], LoginV6Component.prototype, "events", void 0);
    LoginV6Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'login-v6',template:/*ion-inline-start:"D:\Visual Studio\Personal\Project-Watermellon\src\components\login\login-v6\login-v6.html"*/'<div *ngIf="data!=null">\n\n<div class="bg-img">\n\n    <img [src]="data.imgBg" alt="">\n\n  </div>\n\n  \n\n  <div padding class="wrapper-page text-center black-opct-1 block {{data.ani}}">\n\n    \n\n    <button ion-button icon-only small color="dark" class="text-grey-3 white-opct button-circle back-page" (click)="onCallbackEvent(\'onDismiss\')">\n\n      <ion-icon name="ios-close"></ion-icon>\n\n    </button>\n\n    \n\n    <div class="wrapper-flex" padding>\n\n      <ion-row class="logo-img mgb-50 mgt-50 ani-top-to-bottom">\n\n        <img class="mg-auto" [src]="data.imgLogo" alt="">\n\n        <p class="text-grey-3 mgt-0 pdl-15 pdr-15">{{data.txtHead}}</p>\n\n      </ion-row>\n\n\n\n      <div class="wrapper-slide">\n\n        <div class="full-width">\n\n          <ion-toolbar no-border-top class="mgb-30 ani-fade-out">\n\n            <ion-segment [(ngModel)]="type" class="segment-line-deviation text-white stroke-red">\n\n              <ion-segment-button value="signin" class="fs-18 fw-300 spacing-1">\n\n                {{data.btnSegmentLogin}}\n\n              </ion-segment-button>\n\n              <ion-segment-button value="signup" class="fs-18 fw-300 spacing-1">\n\n                {{data.btnSegmentSignUp}}\n\n              </ion-segment-button>\n\n            </ion-segment>\n\n          </ion-toolbar>\n\n\n\n\n\n          <div [ngSwitch]="type" class="ani-bottom-to-top">\n\n            <ion-list *ngSwitchCase="\'signin\'" class="mgb-0">\n\n              <div>\n\n                <ion-list class="mgb-5">\n\n                  <ion-item class="text-white line-1 stroke-white pdl-0">\n\n                    <ion-input type="email" placeholder="{{data.txtEmail}}" [(ngModel)]="email"></ion-input>\n\n                  </ion-item>\n\n                </ion-list>\n\n                <ion-list>\n\n                  <ion-item class="text-white line-1 stroke-white pdl-0">\n\n                    <ion-input type="password" placeholder="{{data.txtPassword}}" [(ngModel)]="password"></ion-input>\n\n                  </ion-item>\n\n                </ion-list>\n\n            \n\n                <button ion-button round color="light" class="white-opct text-white uppercase fw-600 spacing-1 mgt-20 fs-12" (click)="onCallbackEvent(\'onLogin\')">{{data.btnLogin}}</button>\n\n                <button ion-button color="light" clear block small class="mgb-10 mgt-35 pull-right text-grey-3" (click)="onCallbackEvent(\'onForgotPassword\')">{{data.btnForgotPassword}}</button>\n\n              </div>\n\n            </ion-list>\n\n\n\n            <ion-list *ngSwitchCase="\'signup\'" class="mgb-0">\n\n              <div>\n\n                <ion-list class="mgb-0">\n\n                  <ion-item class="text-grey-3 line-1 stroke-grey-3 pdl-0">\n\n                    <ion-input type="email" placeholder="{{data.txtEmail}}" [(ngModel)]="signUpEmail"></ion-input>\n\n                  </ion-item>\n\n                </ion-list>\n\n                <ion-list class="mgb-0">\n\n                  <ion-item class="text-grey-3 line-1 stroke-grey-3 pdl-0">\n\n                    <ion-input type="password" placeholder="{{data.txtPassword}}" [(ngModel)]="signUpPassword"></ion-input>\n\n                  </ion-item>\n\n                </ion-list>\n\n                <ion-list>\n\n                  <ion-item class="text-grey-3 line-1 stroke-grey-3 pdl-0">\n\n                    <ion-input type="password" placeholder="{{data.txtConfirmPassword}}" [(ngModel)]="confirmPassword"></ion-input>\n\n                  </ion-item>\n\n                </ion-list>\n\n            \n\n                <button ion-button round color="light" class="white-opct text-white uppercase fw-600 spacing-1 mgt-20 fs-12" (click)="onCallbackEvent(\'onSignUp\')">{{data.btnSignUp}}</button>\n\n\n\n                <ion-row class="block text-center mgt-30">\n\n                  <button ion-button icon-only clear small color="light" class="text-white pdl-5 pdr-5 fs-14" (click)="onCallbackEvent(\'onFacebookIconClick\')">\n\n                    <ion-icon name="logo-facebook"></ion-icon>\n\n                  </button>\n\n                  <button ion-button icon-only clear small color="light" class="text-white pdl-5 pdr-5 fs-14" (click)="onCallbackEvent(\'onTwitterIconClick\')">\n\n                    <ion-icon name="logo-twitter">\n\n                    </ion-icon>\n\n                  </button>\n\n                  <button ion-button icon-only clear small color="light" class="text-white pdl-5 pdr-5 fs-14" (click)="onCallbackEvent(\'onGoogleIconClick\')">\n\n                    <ion-icon name="logo-google"></ion-icon>\n\n                  </button>\n\n                  <button ion-button icon-only clear small color="light" class="text-white pdl-5 pdr-5 fs-14" (click)="onCallbackEvent(\'onLinkedInIconClick\')">\n\n                    <ion-icon name="logo-linkedin"></ion-icon>\n\n                  </button>\n\n                </ion-row>\n\n              </div>\n\n            </ion-list>\n\n\n\n          </div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n  </div>'/*ion-inline-end:"D:\Visual Studio\Personal\Project-Watermellon\src\components\login\login-v6\login-v6.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], LoginV6Component);
    return LoginV6Component;
}());

//# sourceMappingURL=login-v6.js.map

/***/ })

});
//# sourceMappingURL=52.js.map