webpackJsonp([57],{

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginV1Module", function() { return LoginV1Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_v1__ = __webpack_require__(655);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginV1Module = (function () {
    function LoginV1Module() {
    }
    LoginV1Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login_v1__["a" /* LoginV1Component */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login_v1__["a" /* LoginV1Component */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__login_v1__["a" /* LoginV1Component */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], LoginV1Module);
    return LoginV1Module;
}());

//# sourceMappingURL=login-v1.module.js.map

/***/ }),

/***/ 655:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginV1Component; });
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
 * Generated class for the LoginV1Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var LoginV1Component = (function () {
    function LoginV1Component() {
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
    ], LoginV1Component.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], LoginV1Component.prototype, "events", void 0);
    LoginV1Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'login-v1',template:/*ion-inline-start:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/components/login/login-v1/login-v1.html"*/'\n  <div *ngIf="data!=null">\n\n    <div class="wrapper-page text-center {{data.ani}}">\n      <button ion-button outline icon-only small color="dark" class="text-grey-3 stroke-grey-3 stroke-1 button-circle back-page" (click)="onCallbackEvent(\'onDismiss\')">\n        <ion-icon name="ios-close"></ion-icon>\n      </button>\n\n      <div>\n        <ion-row>\n          <h3 class="fs-20 fw-600 text-black mgb-30 mgt--30 spacing-3 pull-left ani-fade-out">{{data.txtHead}}</h3>\n        </ion-row>\n\n        <ion-row class="logo-img mgb-70 pull-left ani-fade-out">\n          <img [src]="data.imgLogo" alt="">\n        </ion-row>\n\n        <ion-list class="ani-right-to-left">\n          <ion-item class="fs-13 text-black line-1 pdl-0 stroke-black">\n            <ion-input type="text" placeholder="{{data.txtUserName}}" [(ngModel)]="username"></ion-input>\n          </ion-item>\n        </ion-list>\n\n        <ion-list class="ani-right-to-left">\n          <ion-item class="fs-13 text-black line-1 pdl-0 stroke-black">\n            <ion-input type="password" placeholder="{{data.txtPassword}}" [(ngModel)]="password"></ion-input>\n          </ion-item>\n        </ion-list>\n\n        <div class="text-center ani-bottom-to-top">\n          <button ion-button block round color="dark" class="mgt-30 text-white uppercase spacing-1 shadow-3 black" (click)="onCallbackEvent(\'onLogin\')">{{data.btnLogin}}</button>\n        </div>\n      </div>\n\n      <button ion-button color="light" clear small class="mgb-20 btn-signup text-grey-5 ani-fade-out" (click)="onCallbackEvent(\'onSignUp\')">{{data.btnSignUp}}</button>\n    </div>\n\n  </div>\n\n\n\n\n\n'/*ion-inline-end:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/components/login/login-v1/login-v1.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], LoginV1Component);
    return LoginV1Component;
}());

//# sourceMappingURL=login-v1.js.map

/***/ })

});
//# sourceMappingURL=57.js.map