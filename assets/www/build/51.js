webpackJsonp([51],{

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginV7Module", function() { return LoginV7Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_v7__ = __webpack_require__(661);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginV7Module = (function () {
    function LoginV7Module() {
    }
    LoginV7Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login_v7__["a" /* LoginV7Component */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login_v7__["a" /* LoginV7Component */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__login_v7__["a" /* LoginV7Component */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], LoginV7Module);
    return LoginV7Module;
}());

//# sourceMappingURL=login-v7.module.js.map

/***/ }),

/***/ 661:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginV7Component; });
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
 * Generated class for the LoginV7Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var LoginV7Component = (function () {
    function LoginV7Component() {
        var _this = this;
        this.onCallbackEvent = function (event) {
            if (_this.events[event]) {
                _this.events[event]({
                    'email': _this.email,
                    'password': _this.password
                });
            }
        };
    }
    LoginV7Component.prototype.next = function () {
        this.signupSlider.slideNext();
    };
    LoginV7Component.prototype.prev = function () {
        this.signupSlider.slidePrev();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], LoginV7Component.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], LoginV7Component.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('signupSlider'),
        __metadata("design:type", Object)
    ], LoginV7Component.prototype, "signupSlider", void 0);
    LoginV7Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'login-v7',template:/*ion-inline-start:"D:\Visual Studio\Personal\Project-Watermellon\src\components\login\login-v7\login-v7.html"*/'<div *ngIf="data!=null">\n\n  <div class="bg-img">\n\n    <img [src]="data.imgBg" alt="">\n\n  </div>\n\n  \n\n  <div class="wrapper-page text-center black-opct block {{data.ani}}">\n\n    <button ion-button icon-only small color="dark" class="text-white white-opct button-circle back-page" (click)="onCallbackEvent(\'onDismiss\')">\n\n      <ion-icon name="ios-close"></ion-icon>\n\n    </button>\n\n    \n\n    <div>\n\n      <ion-row class="logo-img mgb-20 mgt-30 pdt-50 ani-left-to-right">\n\n        <img class="mg-auto" [src]="data.imgLogo" alt="">\n\n      </ion-row>\n\n      \n\n      <ion-slides #signupSlider class="ani-bottom-to-top">\n\n        <ion-slide class="text-white" padding>\n\n          <h4 class="text-left uppercase spacing-1 fw-400">{{data.txtHead1}}</h4>\n\n          <p class="text-left fs-14 text-grey-2">{{data.txtHead2}}</p>\n\n          <button ion-button color="light" clear small class="pull-left mgb-30 text-grey-3" (click)="onCallbackEvent(\'onSignUp\')">{{data.btnSignUp}}</button>\n\n          <ion-list class="mgt-40">\n\n            <ion-item class="text-grey-5 white round">\n\n              <ion-input type="email" placeholder="{{data.txtEmail}}" [(ngModel)]="email"></ion-input>\n\n            </ion-item>\n\n          </ion-list>\n\n          <button ion-button outline (click)="next()" color="light" class="mgt-40 text-amber stroke-2 stroke-amber button-circle uppercase fw-600 spacing-1 fs-14">\n\n            <ion-icon name="ios-arrow-forward-outline"></ion-icon>\n\n          </button>\n\n        </ion-slide>\n\n\n\n        <ion-slide class="text-white" padding>\n\n          <h4 class="text-left uppercase spacing-1 fw-400">{{data.txtHead3}}</h4>\n\n          <p class="text-left fs-14 text-grey-2">{{data.txtHead4}}</p>\n\n          <button ion-button color="light" clear small class="pull-left mgb-30 text-grey-3" (click)="onCallbackEvent(\'onForgotPassword\')">{{data.btnForgotPassword}}</button>\n\n          <ion-list class="mgt-40">\n\n            <ion-item class="text-grey-5 white round">\n\n              <ion-input type="password" placeholder="{{data.txtPassword}}" [(ngModel)]="password"></ion-input>\n\n            </ion-item>\n\n          </ion-list>\n\n          <button ion-button round outline color="light" class="text-amber stroke-2 stroke-amber pull-right uppercase fw-600 spacing-1 fs-12"  (click)="onCallbackEvent(\'onLogin\')">{{data.btnLogin}}</button>\n\n          <button ion-button outline (click)="prev()" color="light" class="mgr-5 text-amber stroke-2 stroke-amber button-circle pull-right uppercase fw-600 spacing-1 fs-14">\n\n            <ion-icon name="ios-arrow-back-outline"></ion-icon>\n\n          </button>\n\n        </ion-slide>\n\n      </ion-slides>\n\n    </div>\n\n  </div>\n\n  </div>\n\n'/*ion-inline-end:"D:\Visual Studio\Personal\Project-Watermellon\src\components\login\login-v7\login-v7.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], LoginV7Component);
    return LoginV7Component;
}());

//# sourceMappingURL=login-v7.js.map

/***/ })

});
//# sourceMappingURL=51.js.map