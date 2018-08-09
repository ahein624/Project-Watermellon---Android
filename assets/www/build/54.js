webpackJsonp([54],{

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginV4Module", function() { return LoginV4Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_v4__ = __webpack_require__(658);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginV4Module = (function () {
    function LoginV4Module() {
    }
    LoginV4Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login_v4__["a" /* LoginV4Component */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login_v4__["a" /* LoginV4Component */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__login_v4__["a" /* LoginV4Component */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], LoginV4Module);
    return LoginV4Module;
}());

//# sourceMappingURL=login-v4.module.js.map

/***/ }),

/***/ 658:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginV4Component; });
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
 * Generated class for the LoginV4Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var LoginV4Component = (function () {
    function LoginV4Component() {
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
    ], LoginV4Component.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], LoginV4Component.prototype, "events", void 0);
    LoginV4Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'login-v4',template:/*ion-inline-start:"D:\Visual Studio\Personal\Project-Watermellon\src\components\login\login-v4\login-v4.html"*/'<div *ngIf="data!=null">\n\n  <div class="wrapper-page text-center lama-vs-lama {{data.ani}}">\n\n    \n\n    <button ion-button icon-only small color="dark" class="text-white grey-2 back-page" (click)="onCallbackEvent(\'onDismiss\')">\n\n      <ion-icon name="md-close"></ion-icon>\n\n    </button>\n\n    \n\n    <div class="mgt-0">\n\n      <ion-row class="logo-img mgb-70 ani-bottom-to-right">\n\n        <img class="mg-auto" [src]="data.imgLogo" alt="">\n\n      </ion-row>\n\n\n\n      <ion-list>\n\n        <ion-item class="text-grey-5 grey-1 bdra-20 ani-right-to-left">\n\n          <ion-input type="text" placeholder="{{data.txtUserName}}" [(ngModel)]="username"></ion-input>\n\n        </ion-item>\n\n      </ion-list>\n\n\n\n      <ion-list>\n\n        <ion-item class="text-grey-5 grey-1 bdra-20 ani-right-to-left">\n\n          <ion-input type="password" placeholder="{{data.txtPassword}}" [(ngModel)]="password"></ion-input>\n\n        </ion-item>\n\n      </ion-list>\n\n      \n\n      <button ion-button round block color="light" class="blue text-black mgt-25 fw-600 spacing-1 ani-right-to-left" (click)="onCallbackEvent(\'onLogin\')" >{{data.btnLogin}}</button>  \n\n    </div>\n\n    \n\n    <button ion-button color="light" clear small class="btn-signup mgb-15 text-grey-4 ani-top-to-left" (click)="onCallbackEvent(\'onForgotPassword\')">{{data.btnForgotPassword}}</button>\n\n  </div>\n\n  </div>'/*ion-inline-end:"D:\Visual Studio\Personal\Project-Watermellon\src\components\login\login-v4\login-v4.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], LoginV4Component);
    return LoginV4Component;
}());

//# sourceMappingURL=login-v4.js.map

/***/ })

});
//# sourceMappingURL=54.js.map