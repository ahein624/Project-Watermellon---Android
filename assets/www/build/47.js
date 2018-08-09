webpackJsonp([47],{

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalMenuModule", function() { return ModalMenuModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_menu__ = __webpack_require__(663);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalMenuModule = (function () {
    function ModalMenuModule() {
    }
    ModalMenuModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modal_menu__["a" /* ModalMenuComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_menu__["a" /* ModalMenuComponent */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__modal_menu__["a" /* ModalMenuComponent */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ModalMenuModule);
    return ModalMenuModule;
}());

//# sourceMappingURL=modal-menu.module.js.map

/***/ }),

/***/ 663:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalMenuComponent; });
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
 * Generated class for the RegisterV1Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ModalMenuComponent = (function () {
    function ModalMenuComponent(modalCtrl, viewCtrl) {
        var _this = this;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.onCallbackEvent = function (event) {
            if (_this.events[event]) {
                _this.events[event]();
            }
        };
        console.log('Hello ModalsComponent Component');
    }
    ModalMenuComponent.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ModalMenuComponent.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ModalMenuComponent.prototype, "data", void 0);
    ModalMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'modal-menu',template:/*ion-inline-start:"D:\Visual Studio\Personal\Project-Watermellon\src\components\ui-elements\modal-menu\modal-menu.html"*/'<ion-content padding class="modal-menu black">\n\n  <ion-row class="main-modal bdra-10">\n\n    <div class="modal-box-wrapper">\n\n      \n\n      <div class="thumb text-center mg-auto mgt-40" col-6>\n\n        <img src="assets/img/demo11.jpg" alt="">\n\n      </div>\n\n      \n\n      <p class="text-grey-4 text-center">Koodinh Producer</p>\n\n\n\n      <ion-list no-lines class="lst-no-background text-white mgt-40">\n\n        <button class="uppercase spacing-3 fw-600 text-center" ion-item>Home</button> \n\n        <button class="uppercase spacing-3 fw-600 text-center" ion-item>Product</button>\n\n        <button class="uppercase spacing-3 fw-600 text-center" ion-item>Profile</button>\n\n        <button class="uppercase spacing-3 fw-600 text-center" ion-item>Blog</button> \n\n        <button class="uppercase spacing-3 fw-600 text-center" ion-item>Contact</button> \n\n      </ion-list>\n\n\n\n    </div>\n\n  </ion-row>\n\n  \n\n\n\n  <ion-footer>\n\n    <ion-toolbar padding class="transparent text-white shadow-0 text-center">\n\n      <button ion-button icon-only outline class="stroke-grey-3 button-circle text-grey-3" (click)="dismiss()">\n\n        <ion-icon name="ios-close"></ion-icon>\n\n      </button>\n\n    </ion-toolbar>\n\n  </ion-footer>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\Visual Studio\Personal\Project-Watermellon\src\components\ui-elements\modal-menu\modal-menu.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */]])
    ], ModalMenuComponent);
    return ModalMenuComponent;
}());

//# sourceMappingURL=modal-menu.js.map

/***/ })

});
//# sourceMappingURL=47.js.map