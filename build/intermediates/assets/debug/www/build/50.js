webpackJsonp([50],{

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessSignupModule", function() { return SuccessSignupModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__success_signup__ = __webpack_require__(516);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SuccessSignupModule = (function () {
    function SuccessSignupModule() {
    }
    SuccessSignupModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__success_signup__["a" /* SuccessSignupComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__success_signup__["a" /* SuccessSignupComponent */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__success_signup__["a" /* SuccessSignupComponent */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], SuccessSignupModule);
    return SuccessSignupModule;
}());

//# sourceMappingURL=success-signup.module.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuccessSignupComponent; });
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
 * Generated class for the RegisterV3Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var SuccessSignupComponent = (function () {
    function SuccessSignupComponent(viewCtrl) {
        var _this = this;
        this.viewCtrl = viewCtrl;
        this.onCallbackEvent = function (event) {
            if (_this.events[event]) {
                _this.events[event]({});
            }
        };
        console.log('Hello SuccessSignupComponent Component');
    }
    SuccessSignupComponent.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SuccessSignupComponent.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SuccessSignupComponent.prototype, "data", void 0);
    SuccessSignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'success-signup',template:/*ion-inline-start:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/components/register/success-signup/success-signup.html"*/'\n<div class="success-signup white" padding>\n  \n  	<div class="wrapper-page">  \n	    <div col-10 class="main-form text-center mg-auto">\n	    	<div class="mgt-50">\n	    		<ion-icon class="text-green fs-100" name="md-checkmark-circle"></ion-icon>\n	    		<h5 class="fw-600 fs-25">Congratulation!</h5>\n	    		<p class="text-grey-3 fs-13">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>\n	    	</div>\n\n	    	<ion-list class="mgb-10 mgt-50">\n	          	<ion-label class="text-black fs-12 uppercase text-left mgb-10">Active Code</ion-label>\n	          	<ion-item class="fs-13 text-white round black-opct">\n	            	<ion-input type="password" placeholder="000000" [(ngModel)]="password"></ion-input>\n	          	</ion-item>\n	        </ion-list>\n\n	        <button ion-button block round color="dark" class="mgt-20 text-white uppercase spacing-1 shadow-3 pink-vs-red">\n	         	Strat Now\n	        </button>\n	    </div>\n  	</div>\n\n  	<ion-row class="wrapper-top-signup ani-right-to-left">\n    	<button ion-button outline icon-only color="dark" class="mg-auto mgt-30 text-grey-3 stroke-grey-3 stroke-1 button-circle back-page" (click)="dismiss()">\n      		<ion-icon name="ios-close"></ion-icon>\n    	</button>\n  	</ion-row>\n\n</div>\n'/*ion-inline-end:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/components/register/success-signup/success-signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */]])
    ], SuccessSignupComponent);
    return SuccessSignupComponent;
}());

//# sourceMappingURL=success-signup.js.map

/***/ })

});
//# sourceMappingURL=50.js.map