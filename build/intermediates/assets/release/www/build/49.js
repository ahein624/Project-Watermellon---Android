webpackJsonp([49],{

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBasicModule", function() { return ModalBasicModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_basic__ = __webpack_require__(488);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalBasicModule = (function () {
    function ModalBasicModule() {
    }
    ModalBasicModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modal_basic__["a" /* ModalBasicComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_basic__["a" /* ModalBasicComponent */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__modal_basic__["a" /* ModalBasicComponent */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ModalBasicModule);
    return ModalBasicModule;
}());

//# sourceMappingURL=modal-basic.module.js.map

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalBasicComponent; });
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
var ModalBasicComponent = (function () {
    function ModalBasicComponent(modalCtrl, viewCtrl) {
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
    ModalBasicComponent.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ModalBasicComponent.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ModalBasicComponent.prototype, "data", void 0);
    ModalBasicComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'modal-basic',template:/*ion-inline-start:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/components/ui-elements/modal-basic/modal-basic.html"*/'<ion-header class="skin-transparent transparent">\n  <ion-toolbar class="skin-transparent">\n    <ion-title>\n      modal_basic\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button icon-only class="circle text-grey-5 button-circle mgr-10 mgl-10" (click)="dismiss()">\n        <ion-icon name="ios-close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>    \n  <h4 padding class="mgt-50 mgb-10">modal_box_title</h4>\n  \n  <ion-list>\n    <ion-item>\n      <ion-label>view_all_location</ion-label>\n      <ion-toggle [(ngModel)]="all_local"></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>county</ion-label>\n      <ion-select [disabled]="all_local ? true : null" [(ngModel)]="county">\n        <ion-option value="null">County 1</ion-option>\n        <ion-option value="null">County 2</ion-option>\n        <ion-option value="null">County 3</ion-option>\n        <ion-option value="null">County 4</ion-option>\n        <ion-option value="null">County 5</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>cities</ion-label>\n      <ion-select [disabled]="all_local ? true : null" [(ngModel)]="cities">\n        <ion-option value="null">All cities</ion-option>\n        <ion-option value="null">Cities 1</ion-option>\n        <ion-option value="null">Cities 2</ion-option>\n        <ion-option value="null">Cities 3</ion-option>\n        <ion-option value="null">Cities 4</ion-option>\n        <ion-option value="null">Cities 5</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/components/ui-elements/modal-basic/modal-basic.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */]])
    ], ModalBasicComponent);
    return ModalBasicComponent;
}());

//# sourceMappingURL=modal-basic.js.map

/***/ })

});
//# sourceMappingURL=49.js.map