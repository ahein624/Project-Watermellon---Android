webpackJsonp([48],{

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBoxModule", function() { return ModalBoxModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_box__ = __webpack_require__(662);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalBoxModule = (function () {
    function ModalBoxModule() {
    }
    ModalBoxModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modal_box__["a" /* ModalBoxComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_box__["a" /* ModalBoxComponent */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__modal_box__["a" /* ModalBoxComponent */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ModalBoxModule);
    return ModalBoxModule;
}());

//# sourceMappingURL=modal-box.module.js.map

/***/ }),

/***/ 662:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalBoxComponent; });
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
var ModalBoxComponent = (function () {
    function ModalBoxComponent(modalCtrl, viewCtrl) {
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
    ModalBoxComponent.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ModalBoxComponent.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ModalBoxComponent.prototype, "data", void 0);
    ModalBoxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'modal-box',template:/*ion-inline-start:"D:\Visual Studio\Personal\Project-Watermellon\src\components\ui-elements\modal-box\modal-box.html"*/'<ion-content padding class="modal-box">\n\n  <ion-row class="close-modal" (click)="dismiss()"></ion-row>\n\n  <ion-row class="main-modal bdra-10" col-2>\n\n    <div class="modal-box-wrapper">\n\n      \n\n      <h4 class="mgb-10">modal_box_title</h4>\n\n      <h6 class="mgt-5 mgb-20">modal_box_quote</h6>\n\n      \n\n      <ion-list>\n\n        <ion-item>\n\n          <ion-label>view_all_location</ion-label>\n\n          <ion-toggle [(ngModel)]="all_local"></ion-toggle>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label>county</ion-label>\n\n          <ion-select [disabled]="all_local ? true : null" [(ngModel)]="county">\n\n            <ion-option value="null">County 1</ion-option>\n\n            <ion-option value="null">County 2</ion-option>\n\n            <ion-option value="null">County 3</ion-option>\n\n            <ion-option value="null">County 4</ion-option>\n\n            <ion-option value="null">County 5</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label>cities</ion-label>\n\n          <ion-select [disabled]="all_local ? true : null" [(ngModel)]="cities">\n\n            <ion-option value="null">All cities</ion-option>\n\n            <ion-option value="null">Cities 1</ion-option>\n\n            <ion-option value="null">Cities 2</ion-option>\n\n            <ion-option value="null">Cities 3</ion-option>\n\n            <ion-option value="null">Cities 4</ion-option>\n\n            <ion-option value="null">Cities 5</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-list>\n\n\n\n    </div>\n\n  </ion-row>\n\n</ion-content>'/*ion-inline-end:"D:\Visual Studio\Personal\Project-Watermellon\src\components\ui-elements\modal-box\modal-box.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */]])
    ], ModalBoxComponent);
    return ModalBoxComponent;
}());

//# sourceMappingURL=modal-box.js.map

/***/ })

});
//# sourceMappingURL=48.js.map