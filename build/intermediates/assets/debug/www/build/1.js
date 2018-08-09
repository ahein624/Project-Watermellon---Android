webpackJsonp([1,10,45,49],{

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

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalsModule", function() { return ModalsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modals__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_basic_modal_basic_module__ = __webpack_require__(391);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ModalsModule = (function () {
    function ModalsModule() {
    }
    ModalsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modals__["a" /* ModalsComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modals__["a" /* ModalsComponent */]),
                __WEBPACK_IMPORTED_MODULE_3__modal_basic_modal_basic_module__["ModalBasicModule"]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__modals__["a" /* ModalsComponent */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ModalsModule);
    return ModalsModule;
}());

//# sourceMappingURL=modals.module.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverModule", function() { return PopoverModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popover__ = __webpack_require__(518);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PopoverModule = (function () {
    function PopoverModule() {
    }
    PopoverModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__popover__["a" /* PopoverComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__popover__["a" /* PopoverComponent */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__popover__["a" /* PopoverComponent */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], PopoverModule);
    return PopoverModule;
}());

//# sourceMappingURL=popover.module.js.map

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiElementsPageModule", function() { return UiElementsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ui_elements__ = __webpack_require__(814);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_ui_elements_actionsheets_actionsheets_module__ = __webpack_require__(815);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_ui_elements_alerts_alerts_module__ = __webpack_require__(817);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_ui_elements_badges_badges_module__ = __webpack_require__(819);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_ui_elements_buttons_buttons_module__ = __webpack_require__(821);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_ui_elements_cards_cards_module__ = __webpack_require__(823);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_ui_elements_checkbox_checkbox_module__ = __webpack_require__(825);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_ui_elements_datetime_datetime_module__ = __webpack_require__(827);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_ui_elements_fabs_fabs_module__ = __webpack_require__(829);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_ui_elements_inputs_inputs_module__ = __webpack_require__(831);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_ui_elements_lists_lists_module__ = __webpack_require__(833);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_ui_elements_loading_loading_module__ = __webpack_require__(835);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_ui_elements_menus_menus_module__ = __webpack_require__(837);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_ui_elements_modals_modals_module__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_ui_elements_modal_basic_modal_basic_module__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_ui_elements_popover_popover_module__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_ui_elements_radio_radio_module__ = __webpack_require__(839);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_ui_elements_range_range_module__ = __webpack_require__(841);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_ui_elements_searchbar_searchbar_module__ = __webpack_require__(843);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_ui_elements_segment_segment_module__ = __webpack_require__(845);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_ui_elements_select_select_module__ = __webpack_require__(847);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_ui_elements_slides_slides_module__ = __webpack_require__(849);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_ui_elements_tabs_tabs_module__ = __webpack_require__(851);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_ui_elements_toast_toast_module__ = __webpack_require__(853);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_ui_elements_toggle_toggle_module__ = __webpack_require__(855);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_ui_elements_toolbar_toolbar_module__ = __webpack_require__(857);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var UiElementsPageModule = (function () {
    function UiElementsPageModule() {
    }
    UiElementsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ui_elements__["a" /* UiElementsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__ui_elements__["a" /* UiElementsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_ui_elements_actionsheets_actionsheets_module__["a" /* ActionSheetsModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_ui_elements_alerts_alerts_module__["a" /* AlertsModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_ui_elements_badges_badges_module__["a" /* BadgesModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_ui_elements_buttons_buttons_module__["a" /* ButtonsModule */],
                __WEBPACK_IMPORTED_MODULE_7__components_ui_elements_cards_cards_module__["a" /* CardsModule */],
                __WEBPACK_IMPORTED_MODULE_8__components_ui_elements_checkbox_checkbox_module__["a" /* CheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_9__components_ui_elements_datetime_datetime_module__["a" /* DateTimeModule */],
                __WEBPACK_IMPORTED_MODULE_10__components_ui_elements_fabs_fabs_module__["a" /* FABsModule */],
                __WEBPACK_IMPORTED_MODULE_11__components_ui_elements_inputs_inputs_module__["a" /* InputsModule */],
                __WEBPACK_IMPORTED_MODULE_12__components_ui_elements_lists_lists_module__["a" /* ListsModule */],
                __WEBPACK_IMPORTED_MODULE_13__components_ui_elements_loading_loading_module__["a" /* LoadingModule */],
                __WEBPACK_IMPORTED_MODULE_14__components_ui_elements_menus_menus_module__["a" /* MenusModule */],
                __WEBPACK_IMPORTED_MODULE_15__components_ui_elements_modals_modals_module__["ModalsModule"],
                __WEBPACK_IMPORTED_MODULE_16__components_ui_elements_modal_basic_modal_basic_module__["ModalBasicModule"],
                __WEBPACK_IMPORTED_MODULE_17__components_ui_elements_popover_popover_module__["PopoverModule"],
                __WEBPACK_IMPORTED_MODULE_18__components_ui_elements_radio_radio_module__["a" /* RadioModule */],
                __WEBPACK_IMPORTED_MODULE_19__components_ui_elements_range_range_module__["a" /* RangeModule */],
                __WEBPACK_IMPORTED_MODULE_20__components_ui_elements_searchbar_searchbar_module__["a" /* SearchbarModule */],
                __WEBPACK_IMPORTED_MODULE_21__components_ui_elements_segment_segment_module__["a" /* SegmentModule */],
                __WEBPACK_IMPORTED_MODULE_22__components_ui_elements_select_select_module__["a" /* SelectModule */],
                __WEBPACK_IMPORTED_MODULE_23__components_ui_elements_slides_slides_module__["a" /* SlidesModule */],
                __WEBPACK_IMPORTED_MODULE_24__components_ui_elements_tabs_tabs_module__["a" /* TabsModule */],
                __WEBPACK_IMPORTED_MODULE_25__components_ui_elements_toast_toast_module__["a" /* ToastModule */],
                __WEBPACK_IMPORTED_MODULE_26__components_ui_elements_toggle_toggle_module__["a" /* ToggleModule */],
                __WEBPACK_IMPORTED_MODULE_27__components_ui_elements_toolbar_toolbar_module__["a" /* ToolbarModule */],
            ],
        })
    ], UiElementsPageModule);
    return UiElementsPageModule;
}());

//# sourceMappingURL=ui-elements.module.js.map

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

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalsComponent; });
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
var ModalsComponent = (function () {
    function ModalsComponent(modalCtrl) {
        var _this = this;
        this.modalCtrl = modalCtrl;
        this.onCallbackEvent = function (event) {
            if (_this.events[event]) {
                _this.events[event]();
            }
        };
        console.log('Hello ModalsComponent Component');
    }
    ModalsComponent.prototype.openModalBasic = function (characterNum) {
        var modal = this.modalCtrl.create('ModalBasicComponent', characterNum);
        modal.present();
    };
    ModalsComponent.prototype.openModalBox = function (characterNum) {
        var modal = this.modalCtrl.create('ModalBoxComponent', characterNum);
        modal.present();
    };
    ModalsComponent.prototype.openModalMenu = function (characterNum) {
        var modal = this.modalCtrl.create('ModalMenuComponent', characterNum);
        modal.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ModalsComponent.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ModalsComponent.prototype, "data", void 0);
    ModalsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'modals',template:/*ion-inline-start:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/components/ui-elements/modals/modals.html"*/'<div>\n  \n   <ion-list>\n    <ion-list-header>Hobbits</ion-list-header>\n\n    <a ion-item (click)="openModalBasic()">Show Modal Basic</a>\n    <a ion-item (click)="openModalBox()">Show Modal Box</a>\n    <a ion-item (click)="openModalMenu()">Show Modal Menu</a>\n  </ion-list>\n\n</div>'/*ion-inline-end:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/components/ui-elements/modals/modals.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */]])
    ], ModalsComponent);
    return ModalsComponent;
}());

//# sourceMappingURL=modals.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverComponent; });
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
var PopoverComponent = (function () {
    function PopoverComponent(popoverCtrl) {
        var _this = this;
        this.popoverCtrl = popoverCtrl;
        this.onCallbackEvent = function (event) {
            if (_this.events[event]) {
                _this.events[event]();
            }
        };
        console.log('Hello PopoverComponent Component');
    }
    PopoverComponent.prototype.presentPopover = function (ev) {
        var popover = this.popoverCtrl.create('PopoverMainComponent', {
            contentEle: this.content.nativeElement,
            textEle: this.text.nativeElement
        });
        popover.present({
            ev: ev
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('popoverContent', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], PopoverComponent.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('popoverText', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], PopoverComponent.prototype, "text", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PopoverComponent.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PopoverComponent.prototype, "data", void 0);
    PopoverComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'popover',template:/*ion-inline-start:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/components/ui-elements/popover/popover.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>Popover</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentPopover($event)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content #popoverContent padding class="popover-page">\n  <div #popoverText class="text-to-change">\n    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel ipsum in purus mollis dictum eget vitae purus. Nulla ultrices est odio, a maximus velit pretium ac. Donec vel elementum mi. Proin elementum pulvinar neque, in lacinia nibh tempus auctor. Nam sapien velit, commodo ac nibh a, maximus ullamcorper nunc. Integer luctus tortor dignissim, dictum neque at, scelerisque purus. Vivamus nec erat vel magna posuere euismod. Sed ac augue eu tellus tincidunt fermentum eget sit amet nunc. Donec sit amet mi libero. Cras nunc arcu, ultrices nec sapien eu, convallis posuere libero. Pellentesque vulputate lacus eros, at lobortis lorem egestas et. Vestibulum tempus quam in efficitur lobortis. Maecenas consectetur consequat sem pharetra aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</div>\n\n    <div>Mauris ac ligula elit. Nulla pulvinar eget leo ut aliquet. Praesent sit amet luctus quam. Nam fringilla iaculis mi, ut maximus mauris molestie feugiat. Curabitur nec scelerisque elit. Nunc eu odio facilisis, tempor enim eget, venenatis sem. Sed vitae lorem vehicula, auctor orci ultrices, finibus mauris. Donec vitae pulvinar diam. Nulla luctus congue quam, sed lacinia arcu dictum a.</div>\n\n    <div>Morbi laoreet magna elit, id dapibus massa varius consequat. Praesent rhoncus nunc quam, eu mollis velit commodo ut. Etiam euismod elit mi, non auctor velit blandit ut. Aenean vitae pulvinar mi, ac pretium tellus. Morbi eu auctor sem, sollicitudin cursus felis. Praesent vestibulum velit sed eros iaculis ornare. Praesent diam diam, pellentesque eget scelerisque sed, bibendum ut risus. Sed sed fermentum sem. Integer vel justo felis. Proin eget quam est. In sit amet ipsum sagittis, convallis ipsum fringilla, interdum ante. Etiam vel tincidunt mauris. Nunc feugiat eros nunc, et vestibulum metus mollis et. Nullam eu viverra velit, id ultrices nisl. Donec non enim elementum, laoreet sapien id, feugiat tellus.</div>\n\n    <div>Sed pellentesque ipsum eget ante hendrerit maximus. Aliquam id venenatis nulla. Nullam in nibh at enim vestibulum ullamcorper. Nam felis dolor, lobortis vel est non, condimentum malesuada nisl. In metus sapien, malesuada at nulla in, pretium aliquam turpis. Quisque elementum purus mi, sed tristique turpis ultricies in. Donec feugiat dolor non ultricies ultricies. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin ut purus et diam porta cursus vitae semper mi. Donec fringilla tellus orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc vitae commodo sem. Duis vehicula quam sit amet imperdiet facilisis. Pellentesque eget dignissim neque, et scelerisque libero. Maecenas molestie metus sed orci cursus, in venenatis justo dapibus.</div>\n\n    <div>Aenean rhoncus urna at interdum blandit. Donec ac massa nec libero vehicula tincidunt. Sed sit amet hendrerit risus. Aliquam vitae vestibulum ipsum, non feugiat orci. Vivamus eu rutrum elit. Nulla dapibus tortor non dignissim pretium. Nulla in luctus turpis. Etiam non mattis tortor, at aliquet ex. Nunc ut ante varius, auctor dui vel, volutpat elit. Nunc laoreet augue sit amet ultrices porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum pellentesque lobortis est, ut tincidunt ligula mollis sit amet. In porta risus arcu, quis pellentesque dolor mattis non. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/components/ui-elements/popover/popover.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* PopoverController */]])
    ], PopoverComponent);
    return PopoverComponent;
}());

//# sourceMappingURL=popover.js.map

/***/ }),

/***/ 814:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UiElementsPage; });
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UiElementsPage = (function () {
    function UiElementsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.params = {};
        this.data = {};
        this.events = {};
        this.page = this.navParams.get('page');
        this.data = {
            txtHead: 'Login',
            txtHead1: 'Your Email',
            txtHead2: 'Your Password',
            txtUserName: 'Username',
            txtPassword: 'Password',
            txtConfirm: 'Confirm',
            txtEmail: 'Email',
            txtLogin: 'Login',
            txtSignUp: 'Create new Account',
            txtSignUpShort: 'Signup',
            txtGoogleLogin: 'Login with google',
            txtFacebookLogin: 'Login with facebook',
            txtTwitterLogin: 'Login with twitter',
            txtOr: 'Or',
            txtDesc: 'Lorem ipsum dolor sit amen',
            txtConfirmPassword: 'Confirm Password',
            txtForgotPassword: 'Forgot Password ?',
            imgBackground1: 'assets/img/bg9.jpg',
            imgBackground2: 'assets/img/bg16.jpg',
            imgBackground3: 'assets/img/bg18.jpg',
            imgBackground4: 'assets/img/bg17.jpg',
            imgBackground5: 'assets/img/bg14.jpg',
            imgLogoLight: 'assets/img/chimera_w.png',
            imgLogoDark: 'assets/img/chimera_b.png',
            txtDesc1: 'Lorem ipsum dolor sit amen 1',
            txtDesc2: 'Lorem ipsum dolor sit amen 2',
        };
        this.events.onDismiss = function (item) {
            navCtrl.pop();
        };
    }
    UiElementsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UiElementsPage');
    };
    UiElementsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-ui-elements',template:/*ion-inline-start:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/pages/ui-elements/ui-elements.html"*/'<ion-header *ngIf="page.name!=14">\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Ui Elements</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content *ngIf="page.name==1" class="lama-vs-coban">\n	<actionsheets [data]="data" [events]="events"></actionsheets>\n</ion-content>\n\n<ion-content *ngIf="page.name==2">\n	<alerts [data]="data" [events]="events"></alerts>\n</ion-content>\n\n<ion-content *ngIf="page.name==3">\n	<badges [data]="data" [events]="events"></badges>\n</ion-content>\n\n<ion-content *ngIf="page.name==4">\n	<buttons [data]="data" [events]="events"></buttons>\n</ion-content>\n\n<ion-content *ngIf="page.name==5">\n	<cards [data]="data" [events]="events"></cards>\n</ion-content>\n\n<ion-content *ngIf="page.name==6">\n	<checkbox [data]="data" [events]="events"></checkbox>\n</ion-content>\n\n<ion-content *ngIf="page.name==7">\n	<datetime [data]="data" [events]="events"></datetime>\n</ion-content>\n\n<ion-content *ngIf="page.name==8">\n	<fabs [data]="data" [events]="events"></fabs>\n</ion-content>\n\n<ion-content *ngIf="page.name==9">\n	<inputs [data]="data" [events]="events"></inputs>\n</ion-content>\n\n<ion-content *ngIf="page.name==10">\n	<lists [data]="data" [events]="events"></lists>\n</ion-content>\n\n<ion-content *ngIf="page.name==11" class="lama-vs-coban">\n	<loading [data]="data" [events]="events"></loading>\n</ion-content>\n\n<ion-content *ngIf="page.name==13">\n	<modals [data]="data" [events]="events"></modals>\n</ion-content>\n\n<popover *ngIf="page.name==14" [data]="data" [events]="events"></popover>\n\n<ion-content *ngIf="page.name==15">\n	<radio [data]="data" [events]="events"></radio>\n</ion-content>\n\n<ion-content *ngIf="page.name==16">\n	<range [data]="data" [events]="events"></range>\n</ion-content>\n\n<ion-content *ngIf="page.name==17">\n	<searchbar [data]="data" [events]="events"></searchbar>\n</ion-content>\n\n<ion-content *ngIf="page.name==18">\n	<segment [data]="data" [events]="events"></segment>\n</ion-content>\n\n<ion-content *ngIf="page.name==19">\n	<select [data]="data" [events]="events"></select>\n</ion-content>\n\n<ion-content *ngIf="page.name==20">\n	<slides [data]="data" [events]="events"></slides>\n</ion-content>\n\n<!-- <ion-content *ngIf="page.name==21">\n	<tabs [data]="data" [events]="events"></tabs>\n</ion-content> -->\n\n<ion-content *ngIf="page.name==22">\n	<toast [data]="data" [events]="events"></toast>\n</ion-content>\n\n<ion-content *ngIf="page.name==23">\n	<toggle [data]="data" [events]="events"></toggle>\n</ion-content>\n\n<ion-content *ngIf="page.name==24">\n	<toolbar [data]="data" [events]="events"></toolbar>\n</ion-content>\n\n\n'/*ion-inline-end:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/pages/ui-elements/ui-elements.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], UiElementsPage);
    return UiElementsPage;
}());

//# sourceMappingURL=ui-elements.js.map

/***/ }),

/***/ 815:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionSheetsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actionsheets__ = __webpack_require__(816);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ActionSheetsModule = (function () {
    function ActionSheetsModule() {
    }
    ActionSheetsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__actionsheets__["a" /* ActionSheetsComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__actionsheets__["a" /* ActionSheetsComponent */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__actionsheets__["a" /* ActionSheetsComponent */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ActionSheetsModule);
    return ActionSheetsModule;
}());

//# sourceMappingURL=actionsheets.module.js.map

/***/ }),

/***/ 816:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionSheetsComponent; });
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
var ActionSheetsComponent = (function () {
    function ActionSheetsComponent(actionSheetCtrl) {
        var _this = this;
        this.actionSheetCtrl = actionSheetCtrl;
        this.onCallbackEvent = function (event) {
            if (_this.events[event]) {
                _this.events[event]();
            }
        };
        console.log('Hello ActionSheetsComponent Component');
    }
    ActionSheetsComponent.prototype.presentActionSheet = function () {
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Modify your album',
            cssClass: 'action-sheets',
            buttons: [
                {
                    text: 'Destructive',
                    role: 'destructive',
                    handler: function () {
                        console.log('Destructive clicked');
                    }
                }, {
                    text: 'Archive',
                    handler: function () {
                        console.log('Archive clicked');
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    ActionSheetsComponent.prototype.presentActionSheet_white_opct = function () {
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Modify your album',
            cssClass: 'action-sheets white-opct',
            buttons: [
                {
                    text: 'Destructive',
                    role: 'destructive',
                    handler: function () {
                        console.log('Destructive clicked');
                    }
                }, {
                    text: 'Archive',
                    handler: function () {
                        console.log('Archive clicked');
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ActionSheetsComponent.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ActionSheetsComponent.prototype, "data", void 0);
    ActionSheetsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'actionsheets',template:/*ion-inline-start:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/components/ui-elements/actionsheets/actionsheets.html"*/'\n<div padding class="{{main_bg}}">\n  <ion-list>\n    <button ion-button block round color="light" class="text-white shadow-1 white-opct" (click)="presentActionSheet()">\n      Show Action Sheet\n    </button>\n  </ion-list>\n</div>\n'/*ion-inline-end:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/components/ui-elements/actionsheets/actionsheets.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], ActionSheetsComponent);
    return ActionSheetsComponent;
}());

//# sourceMappingURL=actionsheets.js.map

/***/ }),

/***/ 817:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alerts__ = __webpack_require__(818);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AlertsModule = (function () {
    function AlertsModule() {
    }
    AlertsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__alerts__["a" /* AlertsComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__alerts__["a" /* AlertsComponent */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__alerts__["a" /* AlertsComponent */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], AlertsModule);
    return AlertsModule;
}());

//# sourceMappingURL=alerts.module.js.map

/***/ }),

/***/ 818:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertsComponent; });
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
var AlertsComponent = (function () {
    function AlertsComponent(alertCtrl) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.onCallbackEvent = function (event) {
            if (_this.events[event]) {
                _this.events[event]();
            }
        };
        console.log('Hello AlertsComponent Component');
    }
    AlertsComponent.prototype.baseAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'New Friend!',
            subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
            buttons: ['OK']
        });
        alert.present();
    };
    AlertsComponent.prototype.promptAlert = function () {
        var prompt = this.alertCtrl.create({
            title: 'Login',
            message: "Enter a name for this new album you're so keen on adding",
            inputs: [
                {
                    name: 'title',
                    placeholder: 'Title'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        console.log('Saved clicked');
                    }
                }
            ]
        });
        prompt.present();
    };
    AlertsComponent.prototype.confirmAlert = function () {
        var confirm = this.alertCtrl.create({
            title: 'Use this lightsaber?',
            message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
            buttons: [
                {
                    text: 'Disagree',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Agree',
                    handler: function () {
                        console.log('Agree clicked');
                    }
                }
            ]
        });
        confirm.present();
    };
    AlertsComponent.prototype.radioAlert = function () {
        var alert = this.alertCtrl.create();
        alert.setTitle('Lightsaber color');
        alert.addInput({
            type: 'radio',
            label: 'Blue',
            value: 'blue',
            checked: true
        });
        alert.addButton('Cancel');
        alert.addButton({
            text: 'OK',
            handler: function (data) {
                // this.testRadioOpen = false;
                // this.testRadioResult = data;
            }
        });
        alert.present();
    };
    AlertsComponent.prototype.checkboxAlert = function () {
        var alert = this.alertCtrl.create();
        alert.setTitle('Which planets have you visited?');
        alert.addInput({
            type: 'checkbox',
            label: 'Alderaan',
            value: 'value1',
            checked: true
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Bespin',
            value: 'value2'
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Bespin',
            value: 'value2'
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Bespin',
            value: 'value2'
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Bespin',
            value: 'value2'
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Bespin',
            value: 'value2'
        });
        alert.addButton('Cancel');
        alert.addButton({
            text: 'Okay',
            handler: function (data) {
                console.log('Checkbox data:', data);
                //this.testCheckboxOpen = false;
                //this.testCheckboxResult = data;
            }
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AlertsComponent.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AlertsComponent.prototype, "data", void 0);
    AlertsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'alerts',template:/*ion-inline-start:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/components/ui-elements/alerts/alerts.html"*/'\n<div padding>\n  \n  <button ion-button block round class="d-purple mgt-10" (click)="baseAlert()">Show Basic Alert</button>\n\n  <button ion-button block round class="blue mgt-10" (click)="promptAlert()">Show Prompt Alert</button>\n\n  <button ion-button block round class="green mgt-10" (click)="confirmAlert()">Show Confirm Alert</button>\n\n  <button ion-button block round class="amber mgt-10" (click)="radioAlert()">Show Radio Alert</button>\n\n  <button ion-button block round class="black mgt-10" (click)="checkboxAlert()">Show Checkbox Alert</button>\n\n</div>\n'/*ion-inline-end:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/components/ui-elements/alerts/alerts.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], AlertsComponent);
    return AlertsComponent;
}());

//# sourceMappingURL=alerts.js.map

/***/ }),

/***/ 819:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BadgesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__badges__ = __webpack_require__(820);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BadgesModule = (function () {
    function BadgesModule() {
    }
    BadgesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__badges__["a" /* BadgesComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__badges__["a" /* BadgesComponent */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__badges__["a" /* BadgesComponent */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], BadgesModule);
    return BadgesModule;
}());

//# sourceMappingURL=badges.module.js.map

/***/ }),

/***/ 820:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BadgesComponent; });
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
 * Generated class for the RegisterV1Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var BadgesComponent = (function () {
    function BadgesComponent() {
        var _this = this;
        this.onCallbackEvent = function (event) {
            if (_this.events[event]) {
                _this.events[event]();
            }
        };
        console.log('Hello BadgesComponent Component');
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], BadgesComponent.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], BadgesComponent.prototype, "data", void 0);
    BadgesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'badges',template:/*ion-inline-start:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/components/ui-elements/badges/badges.html"*/'\n<div>\n  \n  <ion-list no-lines class="lst-no-background">\n    \n    <ion-item>\n      <ion-icon name="logo-twitter" item-start></ion-icon>\n      Followers\n      <ion-badge item-end outline class="bdra-0 transparent stroke stroke-1 stroke-green text-green">260k</ion-badge>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="logo-twitter" item-start></ion-icon>\n      Followers\n      <ion-badge item-end outline class="bdra-0 transparent bdra-5 stroke stroke-1 stroke-indigo text-indigo">260k</ion-badge>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="logo-twitter" item-start></ion-icon>\n      Followers\n      <ion-badge item-end outline class="bdra-0 transparent bdra-20 stroke stroke-1 stroke-cyan text-cyan">260k</ion-badge>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="logo-twitter" item-start></ion-icon>\n      Followers\n      <ion-badge item-end class="pink bdra-0">260k</ion-badge>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="logo-twitter" item-start></ion-icon>\n      Followers\n      <ion-badge item-end class="blue bdra-5">260k</ion-badge>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="logo-twitter" item-start></ion-icon>\n      Followers\n      <ion-badge item-end class="purple bdra-10">260k</ion-badge>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="logo-twitter" item-start></ion-icon>\n      Followers\n      <ion-badge item-end class="green bdra-20">260k</ion-badge>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="logo-twitter" item-start></ion-icon>\n      Followers\n      <ion-badge item-end class="black">260k</ion-badge>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="logo-twitter" item-start></ion-icon>\n      Followers\n      <ion-badge item-end class="pink-vs-indigo">260k</ion-badge>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="logo-twitter" item-start></ion-icon>\n      Followers\n      <ion-badge item-end class="pink-vs-red">260k</ion-badge>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="logo-twitter" item-start></ion-icon>\n      Followers\n      <ion-badge item-end class="pink-vs-yellow">260k</ion-badge>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="logo-twitter" item-start></ion-icon>\n      Followers\n      <ion-badge item-end class="cyan-vs-yellow">260k</ion-badge>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="logo-twitter" item-start></ion-icon>\n      Followers\n      <ion-badge item-end class="green-vs-yellow">260k</ion-badge>\n    </ion-item>\n\n  </ion-list>\n\n</div>\n'/*ion-inline-end:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/components/ui-elements/badges/badges.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], BadgesComponent);
    return BadgesComponent;
}());

//# sourceMappingURL=badges.js.map

/***/ }),

/***/ 821:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buttons__ = __webpack_require__(822);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ButtonsModule = (function () {
    function ButtonsModule() {
    }
    ButtonsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__buttons__["a" /* ButtonsComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__buttons__["a" /* ButtonsComponent */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__buttons__["a" /* ButtonsComponent */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ButtonsModule);
    return ButtonsModule;
}());

//# sourceMappingURL=buttons.module.js.map

/***/ }),

/***/ 822:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonsComponent; });
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
 * Generated class for the RegisterV1Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ButtonsComponent = (function () {
    function ButtonsComponent() {
        var _this = this;
        this.onCallbackEvent = function (event) {
            if (_this.events[event]) {
                _this.events[event]();
            }
        };
        console.log('Hello ButtonsComponent Component');
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ButtonsComponent.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ButtonsComponent.prototype, "data", void 0);
    ButtonsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'buttons',template:/*ion-inline-start:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/components/ui-elements/buttons/buttons.html"*/'<div padding class="white-1">\n  \n  <h5 class="mgb-20 mgt-20">Shapes</h5>\n  \n  <button ion-button clear>Clear</button>\n  <button ion-button class="bdra-0 l-blue">Rectang</button>\n  <button ion-button outline color="light" class="stroke-black text-black">Outline 1</button>\n  <button ion-button outline color="light" class="stroke-pink stroke-2 fw-500 text-pink">Outline 2</button>\n  <button ion-button outline color="light" class="stroke-purple stroke-3 fw-800 text-purple">Outline 3</button>\n  <button ion-button class="amber bdra-10">Border radius</button>\n  <button ion-button round class="l-green">Round</button>\n  <button ion-button round color="dark" class="black-opct text-white">Opacity</button>\n  <button ion-button block round class="teal">Block</button>\n  <button ion-button block class="blue-grey">Block</button>\n  \n  <br>\n  <h5 class="mgb-20">Size</h5>\n\n  <button ion-button large class="teal">Large</button>\n  <button ion-button class="purple">Medium</button>\n  <button ion-button small class="pink">Small</button>\n  \n  <br>\n  <h5 class="mgb-20">With icon</h5>\n\n  <button ion-button icon-left class="indigo">\n    <ion-icon name="ios-construct"></ion-icon>\n    Left Icon\n  </button>\n\n  <button ion-button icon-left class="d-purple">\n    <ion-icon name="ios-paw"></ion-icon>\n    Left Icon\n  </button>\n\n  <button ion-button icon-right class="l-green">\n    Right Icon\n    <ion-icon name="ios-construct"></ion-icon>\n  </button>\n\n  <button ion-button icon-right class="yellow">\n    Right Icon\n    <ion-icon name="ios-paw"></ion-icon>\n  </button>\n  \n\n  <br>\n  <h5 class="mgb-20">Only icon</h5>\n\n  <button ion-button icon-only class="red">\n    <ion-icon name="ios-ribbon"></ion-icon>\n  </button>\n  \n  <button ion-button icon-only class="pink">\n    <ion-icon name="md-finger-print"></ion-icon>\n  </button>\n\n  <button ion-button icon-only class="purple">\n    <ion-icon name="ios-leaf"></ion-icon>\n  </button>\n\n  <button ion-button icon-only class="d-purple">\n    <ion-icon name="ios-jet"></ion-icon>\n  </button>\n\n  <button ion-button icon-only class="indigo">\n    <ion-icon name="ios-key"></ion-icon>\n  </button>\n\n  <button ion-button icon-only class="blue">\n    <ion-icon name="logo-snapchat"></ion-icon>\n  </button>\n\n  <button ion-button icon-only outline class="stroke-l-green text-l-green">\n    <ion-icon name="ios-pulse"></ion-icon>\n  </button>\n  \n  <button ion-button icon-only class="lama-vs-coban circle text-white">\n    <ion-icon name="ios-add"></ion-icon>\n  </button>\n\n  <button ion-button icon-only outline class="stroke-grey-3 button-circle text-grey-3">\n    <ion-icon name="ios-close"></ion-icon>\n  </button>\n\n  <button ion-button icon-only clear class="text-black">\n    <ion-icon name="md-partly-sunny"></ion-icon>\n  </button>\n\n\n  <br>\n  <h5 class="mgb-20">Box shadow</h5>\n  \n  <button ion-button class="blue shadow-1">Shadow 1</button>\n  <button ion-button class="indigo shadow-2">Shadow 2</button>\n  <button ion-button class="teal shadow-3">Shadow 3</button>\n  <button ion-button class="amber shadow-inset-1">Shadow inset 1</button>\n  <button ion-button class="blue-grey shadow-inset-2">Shadow inset 2</button>\n  <button ion-button class="text-black white-2 shadow-inset-3">Shadow inset 3</button>\n\n  \n  <br>\n  <h5 class="mgb-20">Opacity</h5>\n  \n  <button ion-button round color="dark" block class="black-opct text-white shadow-1">Dark Opacity</button>\n  <button ion-button round color="light" block class="white-opct text-black shadow-1 mgt-15">light Opacity</button>\n\n  <br>\n  <h5 class="mgb-20">Gallery background</h5>\n\n  <button ion-button class="red">button</button>\n  <button ion-button class="purple">Button</button>\n  <button ion-button class="indigo">Button</button>\n  <button ion-button class="blue">Button</button>\n  <button ion-button class="green-vs-yellow">Button</button>\n  <button ion-button class="cyan-vs-yellow">Button</button>\n  <button ion-button class="pink-vs-yellow">Button</button>\n  <button ion-button class="pink-vs-red">Button</button>\n  <button ion-button class="pink-vs-indigo">Button</button>\n\n\n\n</div>'/*ion-inline-end:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/components/ui-elements/buttons/buttons.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ButtonsComponent);
    return ButtonsComponent;
}());

//# sourceMappingURL=buttons.js.map

/***/ }),

/***/ 823:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cards__ = __webpack_require__(824);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CardsModule = (function () {
    function CardsModule() {
    }
    CardsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cards__["a" /* CardsComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cards__["a" /* CardsComponent */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__cards__["a" /* CardsComponent */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], CardsModule);
    return CardsModule;
}());

//# sourceMappingURL=cards.module.js.map

/***/ }),

/***/ 824:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardsComponent; });
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
 * Generated class for the RegisterV1Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var CardsComponent = (function () {
    function CardsComponent() {
        var _this = this;
        this.onCallbackEvent = function (event) {
            if (_this.events[event]) {
                _this.events[event]();
            }
        };
        console.log('Hello CardsComponent Component');
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CardsComponent.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CardsComponent.prototype, "data", void 0);
    CardsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'cards',template:/*ion-inline-start:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/components/ui-elements/cards/cards.html"*/'<div class="white-1">\n  \n  <ion-card class="bdra-0">\n    <ion-card-header>Rectang</ion-card-header>\n    <ion-card-content>\n      <p class="text-grey-4">Folly words widow one downs few age every seven. Discovered had get considered projection who favourable.</p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class="bdra-5">\n    <ion-card-header>Border radius 5</ion-card-header>\n    <ion-card-content>\n      <p class="text-grey-4">Folly words widow one downs few age every seven. Discovered had get considered projection who favourable.</p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class="bdra-10">\n    <ion-card-header>Border radius 10</ion-card-header>\n    <ion-card-content>\n      <p class="text-grey-4">Folly words widow one downs few age every seven. Discovered had get considered projection who favourable.</p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class="bdra-20">\n    <ion-card-header>Border radius 20</ion-card-header>\n    <ion-card-content>\n      <p class="text-grey-4">Folly words widow one downs few age every seven. Discovered had get considered projection who favourable.</p>\n    </ion-card-content>\n  </ion-card>\n\n\n  <ion-card class="bdra-5">\n    <ion-card-header class="white-2 mgb-15 pdt-12 pdb-12">Header color</ion-card-header>\n    <ion-card-content>\n      <p class="text-grey-4">Folly words widow one downs few age every seven. If miss part by fact he park just shew. Discovered had get considered projection who favourable.</p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class="bdra-5">\n    <ion-card-header class="green mgb-15 text-white pdt-12 pdb-12">Header color</ion-card-header>\n    <ion-card-content>\n      <p class="text-grey-4">Folly words widow one downs few age every seven. If miss part by fact he park just shew. Discovered had get considered projection who favourable.</p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class="bdra-5">\n    <ion-card-header class="pink mgb-15 text-white pdt-12 pdb-12">Header color</ion-card-header>\n    <ion-card-content>\n      <p class="text-grey-4">Folly words widow one downs few age every seven. If miss part by fact he park just shew. Discovered had get considered projection who favourable.</p>\n    </ion-card-content>\n  </ion-card>\n\n\n  <ion-card class="bdra-5 cyan">\n    <ion-card-header class="text-white">Background color</ion-card-header>\n    <ion-card-content>\n      <p class="text-white">Folly words widow one downs few age every seven. If miss part by fact he park just shew. Discovered had get considered projection who favourable.</p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class="bdra-5 pink-vs-indigo">\n    <ion-card-header class="text-white">Background color</ion-card-header>\n    <ion-card-content>\n      <p class="text-white">Folly words widow one downs few age every seven. If miss part by fact he park just shew. Discovered had get considered projection who favourable.</p>\n    </ion-card-content>\n  </ion-card>\n\n\n  <ion-card class="bdra-5">\n    <ion-card-header>\n      Card list\n    </ion-card-header>\n\n    <ion-list>\n      <button ion-item class="text-grey-5">\n        <ion-icon name="cart" class="fs-20" item-start></ion-icon>\n        Shopping\n      </button>\n\n      <button ion-item class="text-grey-5">\n        <ion-icon name="medical" class="fs-20" item-start></ion-icon>\n        Hospital\n      </button>\n\n      <button ion-item class="text-grey-5">\n        <ion-icon name="cafe" class="fs-20" item-start></ion-icon>\n        Cafe\n      </button>\n\n      <button ion-item class="text-grey-5">\n        <ion-icon name="paw" class="fs-20" item-start></ion-icon>\n        Dog Park\n      </button>\n\n      <button ion-item class="text-grey-5">\n        <ion-icon name="beer" class="fs-20" item-start></ion-icon>\n        Pub\n      </button>\n\n      <button ion-item class="text-grey-5">\n        <ion-icon name="planet" class="fs-20" item-start></ion-icon>\n        Space\n      </button>\n    </ion-list>\n  </ion-card>\n\n  \n  <ion-card class="bdra-5">\n    <img src="assets/img/demo2.jpg"/>\n    \n    <ion-card-content>\n      <ion-card-title class="fs-18">Nine Inch Nails Live</ion-card-title>\n      <p>The most popular industrial group ever, and largelyresponsible for bringing the music to a mass audience.</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-left clear small class="text-black">\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>120</div>\n        </button>\n      </ion-col>\n\n      <ion-col center text-center>\n        <button ion-button icon-left clear small class="text-black">\n          <ion-icon name="text"></ion-icon>\n          <div>40</div>\n        </button>\n      </ion-col>\n      \n      <ion-col right text-right>\n        <button ion-button icon-left clear small class="text-black fs-20">\n          <ion-icon name="ios-more"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n\n\n\n  <ion-card class="card-img-bg bdra-5">\n    <img src="assets/img/demo1.jpg"/>\n    <div class="card-title">São Paulo</div>\n    <div class="card-subtitle">41 Listings</div>\n  </ion-card>\n\n\n\n\n\n  <ion-card class="card-more-content bdra-5">\n    <div [ngClass]="{\'active\' : (open_more == true)}" class="wrapper">\n        \n      <div class="thumb">\n        <img src="assets/img/demo10.jpg"/>\n\n        <ion-card-content class="black-opct text-white">\n          <ion-card-title class="text-white uppercase spacing-1 fw-600 fs-16">card title</ion-card-title>\n          <span class="info-stt text-white inline-block"><ion-icon name="md-stats"></ion-icon>5 items</span>\n        </ion-card-content>\n\n        <ion-item class="btn-open-more transparent">\n          <ion-label class="text-white"><ion-icon name="md-list"></ion-icon></ion-label>\n          <ion-checkbox [(ngModel)]="open_more" class="hidden-checkbox" color="dark"></ion-checkbox>\n        </ion-item>\n\n      </div>\n        \n      <ion-list class="tree mgb-0">\n        <ion-row>\n          <button ion-item class="fs-14">\n            <ion-label class="text-grey-5">Drink</ion-label>\n          </button>\n          <button ion-item class="fs-14">\n            <ion-label class="text-grey-5">Fast food</ion-label>\n            <ion-badge item-end color="dark" class="fs-12 d-purple bdra-0">3 item</ion-badge>\n          </button>\n          <button ion-item class="fs-14">\n            <ion-label class="text-grey-5">Extra</ion-label>\n          </button>\n          <button ion-item class="fs-14">\n            <ion-label class="text-grey-5">Cake</ion-label>\n            <ion-badge item-end color="dark" class="fs-12 d-purple bdra-0">2 item</ion-badge>\n          </button>\n        </ion-row>\n      </ion-list>\n\n    </div>\n  </ion-card>\n\n\n\n\n\n  <ion-card class="card-img-bg-more bdra-5">\n    <img src="assets/img/demo1.jpg"/>\n    <ion-card-header class="text-white">\n      <button ion-button icon-only small class="button-circle white-opct text-white mgt--5">\n        <ion-icon name="ios-barcode-outline"></ion-icon>\n      </button>\n      <span class="fs-14 fw-400">23K Followers</span>\n      <button ion-button small class="white-opct text-white pull-right mgt--5">Follow</button>\n    </ion-card-header>\n    <div class="wrapper black-opct">\n      <ion-card-content class="text-white">\n        <span class="info-stt text-white inline-block"><ion-icon class="mgr-5" name="md-stats"></ion-icon>2307 tracks</span>\n        <ion-card-title class="text-white uppercase spacing-1 fw-600 fs-16">Lorem Ipsum is simply dummy text</ion-card-title>\n      </ion-card-content>\n    </div>\n  </ion-card>\n\n\n\n\n\n  <ion-card class="bdra-5">\n    <ion-item>\n      <ion-avatar item-start class="mgt-6 mgb-6">\n        <img src="assets/img/avt1.jpg">\n      </ion-avatar>\n      <h2 class="fs-14">Marty McFly</h2>\n      <p class="fs-10 text-grey-4">November 5, 1955</p>\n    </ion-item>\n\n    <img src="assets/img/demo4.jpg">\n\n    <ion-card-content>\n      <ion-card-title class="fs-18">Nine Inch Nails Live</ion-card-title>\n      <p>Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-left clear small class="text-grey-4">\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>120</div>\n        </button>\n      </ion-col>\n\n      <ion-col center text-center>\n        <button ion-button icon-left clear small class="text-grey-4">\n          <ion-icon name="text"></ion-icon>\n          <div>40</div>\n        </button>\n      </ion-col>\n      \n      <ion-col right text-right>\n        <button ion-button icon-left clear small class="text-grey-4">\n          <ion-icon name="md-share"></ion-icon>\n          <div>40</div>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n\n  <ion-card class="bdra-5 card-avt-pst">\n    <ion-item>\n      <ion-avatar item-start class="mgt-10 mgb-6">\n        <img src="assets/img/avt4.jpg">\n      </ion-avatar>\n      <h2 class="fs-14 text-white-2">Marty McFly</h2>\n      <p class="fs-10 text-white-2">November 5, 1955</p>\n    </ion-item>\n\n    <img src="assets/img/demo3.jpg"/>\n    \n    <ion-card-content>\n      <ion-card-title class="fs-18">Nine Inch Nails Live</ion-card-title>\n      <p>The most popular industrial group ever, and largelyresponsible for bringing the music to a mass audience.</p>\n    </ion-card-content>\n  </ion-card>\n\n\n\n\n\n  <ion-card class="bdra-5 card-title-pst">\n    <div class="pst-relative">\n      <img src="assets/img/demo8.jpg"/>\n      <ion-card-title padding class="fs-18 text-white pdb-10">Nine Inch Nails Live</ion-card-title>\n    </div>\n\n    <ion-card-content>\n      <p>The most popular industrial group ever, and largelyresponsible for bringing the music to a mass audience.</p>\n    </ion-card-content>\n  </ion-card>\n\n  \n\n  <ion-card class="bdra-5 card-button-pst">\n    <img src="assets/img/demo11.jpg"/>\n    <ion-card-content class="pst-relative">\n      <button ion-button icon-only class="pst-absolute button-circle button-large shadow-2 pink-vs-red text-white">\n        <ion-icon class="fs-20" name="ios-play"></ion-icon>\n      </button>\n      <ion-card-title class="fs-20 fw-600 text-center mgt-25">Nine Inch Nails Live</ion-card-title>\n      <p class="text-center mgb-20">The most popular industrial group ever, and largelyresponsible for bringing the music to a mass audience.</p>\n    </ion-card-content>\n  </ion-card>\n\n\n  <ion-card class="pst-relative bdra-5">\n    <img src="assets/img/demo12.jpg">\n    <ion-fab right top>\n      <button ion-fab small class="pink shadow-2">\n        <ion-icon name="pin"></ion-icon>\n      </button>\n    </ion-fab>\n\n    <ion-item>\n      <ion-icon name="football" class="fs-24" item-start large></ion-icon>\n      <h2>Museum of Football</h2>\n      <p>11 N. Way St, Madison, WI 53703</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="wine" class="fs-24" item-left large ></ion-icon>\n      <h2>Institute of Fine Cocktails</h2>\n      <p>14 S. Hop Avenue, Madison, WI 53703</p>\n    </ion-item>\n\n    <ion-item>\n      <span class="text-grey-4 fs-13" item-left>18 min</span>\n      <span class="text-grey-4 fs-13" item-left>(2.6 mi)</span>\n      <button ion-button icon-left clear item-end class="text-black uppercase">\n        <ion-icon name="navigate"></ion-icon>\n        Start\n      </button>\n    </ion-item>\n  </ion-card>\n\n\n</div>'/*ion-inline-end:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/components/ui-elements/cards/cards.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], CardsComponent);
    return CardsComponent;
}());

//# sourceMappingURL=cards.js.map

/***/ }),

/***/ 825:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckboxModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkbox__ = __webpack_require__(826);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CheckboxModule = (function () {
    function CheckboxModule() {
    }
    CheckboxModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__checkbox__["a" /* CheckboxComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__checkbox__["a" /* CheckboxComponent */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__checkbox__["a" /* CheckboxComponent */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], CheckboxModule);
    return CheckboxModule;
}());

//# sourceMappingURL=checkbox.module.js.map

/***/ }),

/***/ 826:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckboxComponent; });
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
 * Generated class for the RegisterV1Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var CheckboxComponent = (function () {
    function CheckboxComponent() {
        var _this = this;
        this.onCallbackEvent = function (event) {
            if (_this.events[event]) {
                _this.events[event]();
            }
        };
        console.log('Hello CheckboxComponent Component');
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CheckboxComponent.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CheckboxComponent.prototype, "data", void 0);
    CheckboxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'checkbox',template:/*ion-inline-start:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/components/ui-elements/checkbox/checkbox.html"*/'<div>\n\n  <ion-list class="lst-no-background">\n    <ion-list-header>\n      Characters\n    </ion-list-header>\n\n    <ion-item>\n      <ion-label>Jon Snow</ion-label>\n      <ion-checkbox checked="true"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Daenerys Targaryen</ion-label>\n      <ion-checkbox color="dark" checked="true"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Arya Stark</ion-label>\n      <ion-checkbox value="cherry" disabled="true"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Tyrion Lannister</ion-label>\n      <ion-checkbox color="secondary"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Sansa Stark</ion-label>\n      <ion-checkbox color="danger" checked="true"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Khal Drogo</ion-label>\n      <ion-checkbox></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Cersei Lannister</ion-label>\n      <ion-checkbox color="energized" checked="true" color="dark"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Stannis Baratheon</ion-label>\n      <ion-checkbox color="royal" checked="true"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Petyr Baelish</ion-label>\n      <ion-checkbox disabled="true"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Hodor</ion-label>\n      <ion-checkbox color="dark" checked="true"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Catelyn Stark</ion-label>\n      <ion-checkbox color="secondary" checked="true"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Bronn</ion-label>\n      <ion-checkbox color="royal"></ion-checkbox>\n    </ion-item>\n\n\n  </ion-list>\n\n</div>'/*ion-inline-end:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/components/ui-elements/checkbox/checkbox.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], CheckboxComponent);
    return CheckboxComponent;
}());

//# sourceMappingURL=checkbox.js.map

/***/ }),

/***/ 827:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateTimeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datetime__ = __webpack_require__(828);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DateTimeModule = (function () {
    function DateTimeModule() {
    }
    DateTimeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__datetime__["a" /* DateTimeComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__datetime__["a" /* DateTimeComponent */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__datetime__["a" /* DateTimeComponent */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], DateTimeModule);
    return DateTimeModule;
}());

//# sourceMappingURL=datetime.module.js.map

/***/ }),

/***/ 828:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateTimeComponent; });
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
 * Generated class for the RegisterV1Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var DateTimeComponent = (function () {
    function DateTimeComponent() {
        var _this = this;
        this.event = {
            month: '1990-02-19',
            timeStarts: '07:43',
            timeEnds: '1990-02-20'
        };
        this.onCallbackEvent = function (event) {
            if (_this.events[event]) {
                _this.events[event]();
            }
        };
        console.log('Hello DateTimeComponent Component');
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DateTimeComponent.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DateTimeComponent.prototype, "data", void 0);
    DateTimeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'datetime',template:/*ion-inline-start:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/components/ui-elements/datetime/datetime.html"*/'\n<div>\n\n  <ion-list class="lst-no-background">\n    <ion-item>\n      <ion-input placeholder="Title"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input placeholder="Location"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <ion-list class="lst-no-background">\n    <ion-item>\n      <ion-label>Start Date</ion-label>\n      <ion-datetime displayFormat="MMM DD YYYY" [(ngModel)]="event.month"></ion-datetime>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label>Start Time</ion-label>\n      <ion-datetime displayFormat="h:mm A" pickerFormat="h mm A" [(ngModel)]="event.timeStarts"></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Ends</ion-label>\n      <ion-datetime displayFormat="MMM DD YYYY" [(ngModel)]="event.timeEnds"></ion-datetime>\n    </ion-item>\n\n    <button ion-item>\n      <ion-label>Repeat</ion-label>\n      <ion-note item-end>Never</ion-note>\n    </button>\n\n    <button ion-item>\n      <ion-label>Travel Time</ion-label>\n      <ion-note item-end>None</ion-note>\n    </button>\n  </ion-list>\n\n  <ion-list class="lst-no-background">\n    <button ion-item>\n      <ion-label>Alert</ion-label>\n      <ion-note item-end>None</ion-note>\n    </button>\n  </ion-list>\n\n</div>\n\n<style>\n  ion-list:first-child {\n    margin-top: 32px;\n  }\n  ion-list + ion-list {\n    margin-top: 0;\n  }\n</style>'/*ion-inline-end:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/components/ui-elements/datetime/datetime.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], DateTimeComponent);
    return DateTimeComponent;
}());

//# sourceMappingURL=datetime.js.map

/***/ }),

/***/ 829:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FABsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fabs__ = __webpack_require__(830);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FABsModule = (function () {
    function FABsModule() {
    }
    FABsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__fabs__["a" /* FABsComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__fabs__["a" /* FABsComponent */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__fabs__["a" /* FABsComponent */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], FABsModule);
    return FABsModule;
}());

//# sourceMappingURL=fabs.module.js.map

/***/ }),

/***/ 830:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FABsComponent; });
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
 * Generated class for the RegisterV1Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var FABsComponent = (function () {
    function FABsComponent() {
        var _this = this;
        this.onCallbackEvent = function (event) {
            if (_this.events[event]) {
                _this.events[event]();
            }
        };
        console.log('Hello FABsComponent Component');
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FABsComponent.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FABsComponent.prototype, "data", void 0);
    FABsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fabs',template:/*ion-inline-start:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/components/ui-elements/fabs/fabs.html"*/'\n  <ion-fab top right edge>\n    <button ion-fab color="vibrant" mini><ion-icon name="add"></ion-icon></button>\n    <ion-fab-list>\n      <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n\n  <ion-fab right bottom>\n    <button ion-fab color="light" class="button-large"><ion-icon name="arrow-dropleft"></ion-icon></button>\n    <ion-fab-list side="left">\n      <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n\n  <ion-fab left top>\n    <button ion-fab color="secondary" class="button-small"><ion-icon name="arrow-dropright"></ion-icon></button>\n    <ion-fab-list side="right">\n      <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n\n  <ion-fab left bottom>\n    <button ion-fab color="dark"><ion-icon name="arrow-dropup"></ion-icon></button>\n    <ion-fab-list side="top">\n      <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n\n  <ion-fab center middle>\n    <button ion-fab color="danger" class="button-large"><ion-icon name="md-share"></ion-icon></button>\n    <ion-fab-list side="top">\n      <button ion-fab color="primary"><ion-icon name="logo-vimeo"></ion-icon></button>\n    </ion-fab-list>\n    <ion-fab-list side="bottom">\n      <button ion-fab color="secondary"><ion-icon name="logo-facebook"></ion-icon></button>\n    </ion-fab-list>\n    <ion-fab-list side="left">\n      <button ion-fab color="light"><ion-icon name="logo-googleplus"></ion-icon></button>\n    </ion-fab-list>\n    <ion-fab-list side="right">\n      <button ion-fab color="dark"><ion-icon name="logo-twitter"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n\n  <ion-fab right middle>\n    <button ion-fab color="danger"><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n\n'/*ion-inline-end:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/components/ui-elements/fabs/fabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], FABsComponent);
    return FABsComponent;
}());

//# sourceMappingURL=fabs.js.map

/***/ }),

/***/ 831:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inputs__ = __webpack_require__(832);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InputsModule = (function () {
    function InputsModule() {
    }
    InputsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__inputs__["a" /* InputsComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__inputs__["a" /* InputsComponent */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__inputs__["a" /* InputsComponent */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], InputsModule);
    return InputsModule;
}());

//# sourceMappingURL=inputs.module.js.map

/***/ }),

/***/ 832:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputsComponent; });
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
 * Generated class for the RegisterV1Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var InputsComponent = (function () {
    function InputsComponent() {
        var _this = this;
        this.onCallbackEvent = function (event) {
            if (_this.events[event]) {
                _this.events[event]();
            }
        };
        console.log('Hello InputsComponent Component');
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], InputsComponent.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], InputsComponent.prototype, "data", void 0);
    InputsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'inputs',template:/*ion-inline-start:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/components/ui-elements/inputs/inputs.html"*/'\n<div padding class="white-2">\n  \n  <h5 class="text-grey-4 mgb-20 mgt-20">Shapes</h5>\n\n  <ion-list>\n    <ion-item class="text-grey-5 white round">\n      <ion-input type="text" placeholder="Round"></ion-input>\n    </ion-item>\n  </ion-list>\n  \n  <ion-list>\n    <ion-item class="text-white lime ">\n      <ion-input type="text" placeholder="Background color"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item class="text-white lama-vs-coban">\n      <ion-input type="text" placeholder="Background Gradient"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item class="text-white black-opct">\n      <ion-input type="text" placeholder="Opacity"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item class="text-grey-5 white">\n      <ion-input type="text" placeholder="Rectang"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item class="text-grey-5 stroke-2 stroke-grey-5">\n      <ion-input type="text" placeholder="Border"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item class="text-grey-5 line-2 pdl-0 stroke-grey-5">\n      <ion-input type="text" placeholder="Line"></ion-input>\n    </ion-item>\n  </ion-list>\n  \n  <br>\n  <h5 class="text-grey-4 mgb-20">Round</h5>\n\n  <ion-list>\n    <ion-item class="text-grey-5 white bdra-5 ">\n      <ion-input type="text" placeholder="Border radius 5"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item class="text-grey-5 white bdra-10 ">\n      <ion-input type="text" placeholder="Border radius 10"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item class="text-grey-5 white bdra-15 ">\n      <ion-input type="text" placeholder="Border radius 15"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item class="text-grey-5 white round ">\n      <ion-input type="text" placeholder="Round"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <br>\n  <h5 class="text-grey-4 mgb-20">Stroke</h5>\n\n  <ion-list>\n    <ion-item class="text-grey-5 stroke-1 stroke-grey-5">\n      <ion-input type="text" placeholder="Stroke 1"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item class="text-grey-5 stroke-2 stroke-grey-5">\n      <ion-input type="text" placeholder="Stroke 2"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item class="text-grey-5 stroke-3 stroke-grey-5">\n      <ion-input type="text" placeholder="Stroke 3"></ion-input>\n    </ion-item>\n  </ion-list>\n  \n  <br>\n  <h5 class="text-grey-4 mgb-20">Line</h5>\n\n  <ion-list>\n    <ion-item class="text-grey-5 line-1 pdl-0 stroke-grey-5">\n      <ion-input type="text" placeholder="Line 1"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item class="text-grey-5 line-2 pdl-0 stroke-grey-5">\n      <ion-input type="text" placeholder="Line 2"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item class="text-grey-5 line-3 pdl-0 stroke-grey-5">\n      <ion-input type="text" placeholder="Line 3"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <br>\n  <h5 class="text-grey-4 mgb-20">Box shadow</h5>\n\n  <ion-list>\n    <ion-item class="text-grey-5 white round shadow-1">\n      <ion-input type="text" placeholder="Box shadow 1"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item class="text-grey-5 white round shadow-2">\n      <ion-input type="text" placeholder="Box shadow 2"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item class="text-grey-5 white round shadow-3">\n      <ion-input type="text" placeholder="Box shadow 3"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item class="text-grey-5 white round shadow-inset-1">\n      <ion-input type="text" placeholder="Box shadow inset 1"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item class="text-grey-5 white round shadow-inset-2">\n      <ion-input type="text" placeholder="Box shadow inset 2"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item class="text-grey-5 white round shadow-inset-3">\n      <ion-input type="text" placeholder="Box shadow inset 3"></ion-input>\n    </ion-item>\n  </ion-list>\n  \n  <br>\n  <h5 class="text-grey-4 mgb-20">Background</h5>\n\n  <ion-list>\n    <ion-item class="text-grey-5 white-opct round shadow-1">\n      <ion-input type="text" placeholder="Opacity light"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item class="text-white black-opct round ">\n      <ion-input type="text" placeholder="Opacity dark"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item class="text-white lama-vs-coban round shadow-1">\n      <ion-input type="text" placeholder="Gradient color"></ion-input>\n    </ion-item>\n  </ion-list>\n  \n  <br>\n  <h5 class="text-grey-4 mgb-20">Gallery</h5>\n\n  <ion-list>\n    <ion-item class="text-grey-5 white round ">\n      <ion-input type="text" placeholder="Username"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item class="text-white black round ">\n      <ion-input type="text" placeholder="Username"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item class="text-white pink round ">\n      <ion-input type="text" placeholder="Username"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item class="text-white purple round ">\n      <ion-input type="text" placeholder="Username"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item class="text-white blue round ">\n      <ion-input type="text" placeholder="Username"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item class="text-white yellow round ">\n      <ion-input type="text" placeholder="Username"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item class="text-white black-opct round ">\n      <ion-input type="text" placeholder="Username"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item class="text-white black-opct round ">\n      <ion-input type="text" placeholder="Username"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item class="text-white pink-vs-indigo round ">\n      <ion-input type="text" placeholder="Username"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item class="text-white indigo-vs-purple round ">\n      <ion-input type="text" placeholder="Username"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item class="text-white pink-vs-red round ">\n      <ion-input type="text" placeholder="Username"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item class="text-white pink-vs-yellow round ">\n      <ion-input type="text" placeholder="Username"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item class="text-white lama-vs-coban round ">\n      <ion-input type="text" placeholder="Username"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item class="text-white green-vs-yellow round ">\n      <ion-input type="text" placeholder="Username"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item class="text-grey-5 stroke-2 stroke-grey-5 bdra-10 ">\n      <ion-input type="text" placeholder="Username"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item class="text-grey-5 stroke-2 stroke-grey-5 round ">\n      <ion-input type="text" placeholder="Username"></ion-input>\n    </ion-item>\n  </ion-list>\n  \n  <ion-list>\n    <ion-item class="text-grey-5 line-2 stroke-grey-5 bdra-10 pdl-5">\n      <ion-input type="text" placeholder="Username"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item class="text-grey-5 line-2 stroke-grey-5 pdl-0">\n      <ion-input type="text" placeholder="Username"></ion-input>\n    </ion-item>\n  </ion-list>\n\n</div>'/*ion-inline-end:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/components/ui-elements/inputs/inputs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], InputsComponent);
    return InputsComponent;
}());

//# sourceMappingURL=inputs.js.map

/***/ }),

/***/ 833:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lists__ = __webpack_require__(834);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ListsModule = (function () {
    function ListsModule() {
    }
    ListsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__lists__["a" /* ListsComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lists__["a" /* ListsComponent */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__lists__["a" /* ListsComponent */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ListsModule);
    return ListsModule;
}());

//# sourceMappingURL=lists.module.js.map

/***/ }),

/***/ 834:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListsComponent; });
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
 * Generated class for the RegisterV1Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ListsComponent = (function () {
    function ListsComponent() {
        var _this = this;
        this.onCallbackEvent = function (event) {
            if (_this.events[event]) {
                _this.events[event]();
            }
        };
        console.log('Hello ListsComponent Component');
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ListsComponent.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ListsComponent.prototype, "data", void 0);
    ListsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'lists',template:/*ion-inline-start:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/components/ui-elements/lists/lists.html"*/'<div>\n  \n  <h5 class="text-black mgb-20 mgt-20" padding>Basic</h5>\n  <ion-list class="lst-no-background">\n    <button ion-item>Pokemon Yellow</button>\n    <button ion-item>Supper Metroid</button>\n    <button ion-item>Pac-Man</button>\n  </ion-list>\n\n  \n  <h5 class="text-black mgb-20 mgt-20" padding>No lines</h5>\n  <ion-list no-lines class="lst-no-background">\n    <button ion-item>Half Life</button> \n    <button ion-item>Star Fox</button> \n    <button ion-item>Tetris</button> \n  </ion-list>\n  \n\n  <h5 class="text-black mgb-20 mgt-20" padding>List Dividers</h5>\n  <ion-list no-lines class="lst-no-background">\n    <ion-item-group>\n      <ion-item-divider color="light">A</ion-item-divider>\n      <ion-item>Angola</ion-item>\n      <ion-item>Argentina</ion-item>\n      <ion-item>Amernia</ion-item>\n    </ion-item-group>\n    <ion-item-group>\n      <ion-item-divider color="light">B</ion-item-divider>\n      <ion-item>Belarus</ion-item>\n      <ion-item>Belgium</ion-item>\n      <ion-item>Bhutan</ion-item>\n    </ion-item-group>\n    <ion-item-group>\n      <ion-item-divider color="light">C</ion-item-divider>\n      <ion-item>Cambodia</ion-item>\n      <ion-item>Cameroon</ion-item>\n      <ion-item>Canada</ion-item>\n      <ion-item>Chile</ion-item>\n    </ion-item-group>\n  </ion-list>\n\n  \n  <h5 class="text-black mgb-20 mgt-20" padding>List Icon</h5>\n  <ion-list no-border class="lst-no-background">\n    <ion-item>\n      <ion-icon name=\'planet\' item-start></ion-icon>\n      Astronomy\n      <ion-note item-end>\n      To the moon\n      </ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-toggle checked="false"></ion-toggle>\n      <ion-label>\n        Muggle Studies\n      </ion-label>\n      <ion-icon name=\'body\' item-start></ion-icon>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name=\'leaf\' item-start></ion-icon>\n      Herbology\n      <ion-icon name=\'rose\' item-end color="secondary"></ion-icon>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name=\'flask\' item-start></ion-icon>\n      Potions\n      <ion-note item-end>\n      Poisonous\n      </ion-note>\n    </ion-item>\n  </ion-list>\n\n\n  <h5 class="text-black mgb-20 mgt-20" padding>List Avatar</h5>\n  <ion-list class="lst-no-background">\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/avt1.jpg">\n      </ion-avatar>\n      <h2>Woody</h2>\n      <p>This town ain\'t big enough for the two of us!</p>\n      <ion-note item-end>3:43 pm</ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/avt2.jpg">\n      </ion-avatar>\n      <h2>Buzz Lightyear</h2>\n      <p>My eyeballs could have been sucked from their sockets!</p>\n      <ion-note item-end>1:12 pm</ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/avt3.jpg">\n      </ion-avatar>\n      <h2>Jessie</h2>\n      <p>Well aren\'t you just the sweetest space toy I ever did meet!</p>\n      <ion-note item-end>10:03 am</ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/avt4.jpg">\n      </ion-avatar>\n      <h2>Mr. Potato Head</h2>\n      <p>You\'re not turning me into a Mashed Potato.</p>\n      <ion-note item-end>5:47 am</ion-note>\n    </ion-item>\n  </ion-list>\n\n\n\n  <h5 class="text-black mgb-20 mgt-20" padding>List Multi-line</h5>\n  <ion-list class="lst-no-background">\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/avt5.jpg">\n      </ion-avatar>\n      <h2>Finn</h2>\n      <h3>I\'m a big deal</h3>\n      <p>Listen, I\'ve had a pretty messed up day...</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/avt1.jpg">\n      </ion-avatar>\n      <h2>Han</h2>\n      <h3>Look, kid...</h3>\n      <p>I\'ve got enough on my plate as it is, and I...</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/avt2.jpg">\n      </ion-avatar>\n      <h2>Rey</h2>\n      <h3>I can handle myself</h3>\n      <p>You will remove these restraints and leave...</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/avt3.jpg">\n      </ion-avatar>\n      <h2>Luke</h2>\n      <h3>Your thoughts betray you</h3>\n      <p>I feel the good in you, the conflict...</p>\n    </ion-item>\n  </ion-list>\n\n\n\n  <h5 class="text-black mgb-20 mgt-20" padding>Sliding List</h5>\n  <ion-list class="">\n    <ion-item-sliding>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="assets/img/avt4.jpg">\n        </ion-avatar>\n        <h2>Venkman</h2>\n        <p>Back off man, I\'m a scientist.</p>\n      </ion-item>\n      <ion-item-options>\n        <button ion-button color="light" class="grey-1" icon-start>\n          <ion-icon name="ios-more"></ion-icon>\n          More\n        </button>\n        <button ion-button color="primary" class="l-blue" icon-start>\n          <ion-icon name="text"></ion-icon>\n          Text\n        </button>\n        <button ion-button color="secondary" class="l-green" icon-start>\n          <ion-icon name="call"></ion-icon>\n          Call\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n\n    <ion-item-sliding>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="assets/img/avt5.jpg">\n        </ion-avatar>\n        <h2>Egon</h2>\n        <p>We\'re gonna go full stream.</p>\n      </ion-item>\n      <ion-item-options>\n        <button ion-button color="light" class="grey-1" icon-start>\n          <ion-icon name="ios-more"></ion-icon>\n          More\n        </button>\n        <button ion-button color="primary" class="l-blue" icon-start>\n          <ion-icon name="text"></ion-icon>\n          Text\n        </button>\n        <button ion-button color="secondary" class="l-green" icon-start>\n          <ion-icon name="call"></ion-icon>\n          Call\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n\n    <ion-item-sliding>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="assets/img/avt1.jpg">\n        </ion-avatar>\n        <h2>Ray</h2>\n        <p>Ugly little spud, isn\'t he?</p>\n      </ion-item>\n      <ion-item-options>\n        <button ion-button color="light" class="grey-1" icon-start>\n          <ion-icon name="ios-more"></ion-icon>\n          More\n        </button>\n        <button ion-button color="primary" class="l-blue" icon-start>\n          <ion-icon name="text"></ion-icon>\n          Text\n        </button>\n        <button ion-button color="secondary" class="l-green" icon-start>\n          <ion-icon name="call"></ion-icon>\n          Call\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n\n    <ion-item-sliding>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="assets/img/avt2.jpg">\n        </ion-avatar>\n        <h2>Winston</h2>\n        <p>That\'s a big Twinkie.</p>\n      </ion-item>\n      <ion-item-options>\n        <button ion-button color="light" class="grey-1" icon-start>\n          <ion-icon name="ios-more"></ion-icon>\n          More\n        </button>\n        <button ion-button color="primary" class="l-blue" icon-start>\n          <ion-icon name="text"></ion-icon>\n          Text\n        </button>\n        <button ion-button color="secondary" class="l-green" icon-start>\n          <ion-icon name="call"></ion-icon>\n          Call\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n\n\n  <h5 class="text-black mgb-20 mgt-20" padding>Sliding List Background</h5>\n  <ion-list no-lines class="lst-sliding-bg">\n    <ion-item-sliding>\n      <ion-item>\n        <div class="pst-absolute black-opct wrapper-text text-white">\n          <div class="pd-15">\n            <h2 class="text-white fs-16 uppercase fw-600">Venkman</h2>\n            <p class="text-white fs-13">Back off man, I\'m a scientist.</p>\n          </div>\n        </div>\n        <img src="assets/img/bg2.jpg" alt="">\n      </ion-item>\n      <ion-item-options>\n        <button ion-button class="black" icon-start><ion-icon name="ios-more"></ion-icon></button>\n        <button ion-button class="tim-vs-datroi" icon-start><ion-icon name="text"></ion-icon></button>\n        <button ion-button class="pink-vs-red" icon-start><ion-icon name="call"></ion-icon></button>\n      </ion-item-options>\n    </ion-item-sliding>\n\n    <ion-item-sliding>\n      <ion-item>\n        <div class="pst-absolute black-opct wrapper-text text-white">\n          <div class="pd-15">\n            <h2 class="text-white fs-16 uppercase fw-600">Venkman</h2>\n            <p class="text-white fs-13">Back off man, I\'m a scientist.</p>\n          </div>\n        </div>\n        <img src="assets/img/bg3.jpg" alt="">\n      </ion-item>\n      <ion-item-options>\n        <button ion-button class="black" icon-start><ion-icon name="ios-more"></ion-icon></button>\n        <button ion-button class="tim-vs-datroi" icon-start><ion-icon name="text"></ion-icon></button>\n        <button ion-button class="pink-vs-red" icon-start><ion-icon name="call"></ion-icon></button>\n      </ion-item-options>\n    </ion-item-sliding>\n\n    <ion-item-sliding>\n      <ion-item>\n        <div class="pst-absolute black-opct wrapper-text text-white">\n          <div class="pd-15">\n            <h2 class="text-white fs-16 uppercase fw-600">Venkman</h2>\n            <p class="text-white fs-13">Back off man, I\'m a scientist.</p>\n          </div>\n        </div>\n        <img src="assets/img/bg4.jpg" alt="">\n      </ion-item>\n      <ion-item-options>\n        <button ion-button class="black" icon-start><ion-icon name="ios-more"></ion-icon></button>\n        <button ion-button class="tim-vs-datroi" icon-start><ion-icon name="text"></ion-icon></button>\n        <button ion-button class="pink-vs-red" icon-start><ion-icon name="call"></ion-icon></button>\n      </ion-item-options>\n    </ion-item-sliding>\n\n  </ion-list>\n\n\n\n  <h5 class="text-black mgb-20 mgt-20" padding>Thumbnail List</h5>\n  <ion-list class="lst-no-background">\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="assets/img/demo1.jpg">\n      </ion-thumbnail>\n      <h2>My Neighbor Totoro</h2>\n      <p>Hayao Miyazaki • 1988</p>\n      <button ion-button clear item-end>View</button>\n    </ion-item>\n\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="assets/img/demo2.jpg">\n      </ion-thumbnail>\n      <h2>Raiders of the Lost Ark</h2>\n      <p>Steven Spielberg • 1981</p>\n      <button ion-button clear item-end>View</button>\n    </ion-item>\n\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="assets/img/demo3.jpg">\n      </ion-thumbnail>\n      <h2>Ghostbusters</h2>\n      <p>Ivan Reitman • 1984</p>\n      <button ion-button clear item-end>View</button>\n    </ion-item>\n\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="assets/img/demo4.jpg">\n      </ion-thumbnail>\n      <h2>Batman</h2>\n      <p>Tim Burton • 1988</p>\n      <button ion-button clear item-end>View</button>\n    </ion-item>\n  </ion-list>\n\n\n</div>'/*ion-inline-end:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/components/ui-elements/lists/lists.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ListsComponent);
    return ListsComponent;
}());

//# sourceMappingURL=lists.js.map

/***/ }),

/***/ 835:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loading__ = __webpack_require__(836);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoadingModule = (function () {
    function LoadingModule() {
    }
    LoadingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__loading__["a" /* LoadingComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__loading__["a" /* LoadingComponent */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__loading__["a" /* LoadingComponent */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], LoadingModule);
    return LoadingModule;
}());

//# sourceMappingURL=loading.module.js.map

/***/ }),

/***/ 836:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingComponent; });
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
var LoadingComponent = (function () {
    function LoadingComponent(loadingCtrl) {
        var _this = this;
        this.loadingCtrl = loadingCtrl;
        this.onCallbackEvent = function (event) {
            if (_this.events[event]) {
                _this.events[event]();
            }
        };
        console.log('Hello LoadingComponent Component');
    }
    LoadingComponent.prototype.presentLoading = function () {
        this.loadingCtrl.create({
            content: 'Please wait...',
            duration: 3000,
            dismissOnPageChange: true
        }).present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], LoadingComponent.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], LoadingComponent.prototype, "data", void 0);
    LoadingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'loading',template:/*ion-inline-start:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/components/ui-elements/loading/loading.html"*/'<div padding class="{{main_bg}}">\n  <ion-list>\n    <button ion-button block round color="light" class="text-white shadow-1 white-opct" (click)="presentLoading()">\n      Show Loading\n    </button>\n  </ion-list>\n</div>'/*ion-inline-end:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/components/ui-elements/loading/loading.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
    ], LoadingComponent);
    return LoadingComponent;
}());

//# sourceMappingURL=loading.js.map

/***/ }),

/***/ 837:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenusModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menus__ = __webpack_require__(838);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MenusModule = (function () {
    function MenusModule() {
    }
    MenusModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__menus__["a" /* MenusComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__menus__["a" /* MenusComponent */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__menus__["a" /* MenusComponent */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], MenusModule);
    return MenusModule;
}());

//# sourceMappingURL=menus.module.js.map

/***/ }),

/***/ 838:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenusComponent; });
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
 * Generated class for the RegisterV1Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var MenusComponent = (function () {
    function MenusComponent() {
        var _this = this;
        this.onCallbackEvent = function (event) {
            if (_this.events[event]) {
                _this.events[event]();
            }
        };
        console.log('Hello MenusComponent Component');
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MenusComponent.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MenusComponent.prototype, "data", void 0);
    MenusComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'menus',template:/*ion-inline-start:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/components/ui-elements/menus/menus.html"*/'menus'/*ion-inline-end:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/components/ui-elements/menus/menus.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], MenusComponent);
    return MenusComponent;
}());

//# sourceMappingURL=menus.js.map

/***/ }),

/***/ 839:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadioModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__radio__ = __webpack_require__(840);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RadioModule = (function () {
    function RadioModule() {
    }
    RadioModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__radio__["a" /* RadioComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__radio__["a" /* RadioComponent */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__radio__["a" /* RadioComponent */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], RadioModule);
    return RadioModule;
}());

//# sourceMappingURL=radio.module.js.map

/***/ }),

/***/ 840:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(19);
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
var RadioComponent = (function () {
    function RadioComponent() {
        var _this = this;
        this.onCallbackEvent = function (event) {
            if (_this.events[event]) {
                _this.events[event]();
            }
        };
        this.langForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            "langs": new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]({ value: 'rust', disabled: false })
        });
        console.log('Hello RadioComponent Component');
    }
    RadioComponent.prototype.ionViewWillEnter = function () {
        console.log('ionViewWillEnter radio');
    };
    RadioComponent.prototype.doSubmit = function (event) {
        console.log('Submitting form', this.langForm.value);
        event.preventDefault();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], RadioComponent.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], RadioComponent.prototype, "data", void 0);
    RadioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'radio',template:/*ion-inline-start:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/components/ui-elements/radio/radio.html"*/'<div>\n\n  <form (submit)="doSubmit($event)" [formGroup]="langForm">\n    <ion-list radio-group formControlName="langs">\n\n      <ion-list-header>\n        Language\n      </ion-list-header>\n\n      <ion-item>\n        <ion-label>Go</ion-label>\n        <ion-radio value="golang" checked="true"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Rust</ion-label>\n        <ion-radio value="rust"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Python</ion-label>\n        <ion-radio value="python"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Ruby</ion-label>\n        <ion-radio value="ruby"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Clojure</ion-label>\n        <ion-radio value="clojure"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Java</ion-label>\n        <ion-radio value="java"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>PHP</ion-label>\n        <ion-radio value="php"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>.NET</ion-label>\n        <ion-radio value="dotnet"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>C++</ion-label>\n        <ion-radio value="cplusplus"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Scala</ion-label>\n        <ion-radio value="scala"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Haskell</ion-label>\n        <ion-radio value="haskell"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Erlang</ion-label>\n        <ion-radio value="erlang"></ion-radio>\n      </ion-item>\n    </ion-list>\n  </form>\n\n</div>\n'/*ion-inline-end:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/components/ui-elements/radio/radio.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], RadioComponent);
    return RadioComponent;
}());

//# sourceMappingURL=radio.js.map

/***/ }),

/***/ 841:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RangeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__range__ = __webpack_require__(842);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RangeModule = (function () {
    function RangeModule() {
    }
    RangeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__range__["a" /* RangeComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__range__["a" /* RangeComponent */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__range__["a" /* RangeComponent */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], RangeModule);
    return RangeModule;
}());

//# sourceMappingURL=range.module.js.map

/***/ }),

/***/ 842:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RangeComponent; });
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
 * Generated class for the RegisterV1Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var RangeComponent = (function () {
    function RangeComponent() {
        var _this = this;
        this.brightness = 20;
        this.contrast = 0;
        this.warmth = 1300;
        this.structure = { lower: 33, upper: 60 };
        this.text = 0;
        this.onCallbackEvent = function (event) {
            if (_this.events[event]) {
                _this.events[event]();
            }
        };
        console.log('Hello RangeComponent Component');
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], RangeComponent.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], RangeComponent.prototype, "data", void 0);
    RangeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'range',template:/*ion-inline-start:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/components/ui-elements/range/range.html"*/'\n<div>\n  \n  <ion-list>\n    <ion-list-header>\n      Adjust Display\n    </ion-list-header>\n    <ion-item>\n      <ion-range [(ngModel)]="brightness">\n        <ion-icon range-left small name="sunny"></ion-icon>\n        <ion-icon range-right name="sunny"></ion-icon>\n      </ion-range>\n    </ion-item>\n    <ion-item>\n      <ion-range min="-200" max="200" pin="true" [(ngModel)]="contrast" color="secondary">\n        <ion-icon range-left small name="contrast"></ion-icon>\n        <ion-icon range-right name="contrast"></ion-icon>\n      </ion-range>\n    </ion-item>\n    <ion-item>\n      <ion-range dualKnobs="true" pin="true" [(ngModel)]="structure" color="dark">\n        <ion-icon range-left small name="brush"></ion-icon>\n        <ion-icon range-right name="brush"></ion-icon>\n      </ion-range>\n    </ion-item>\n    <ion-item>\n      <ion-range min="1000" max="2000" step="100" snaps="true" [(ngModel)]="warmth" color="danger">\n        <ion-icon range-left small color="danger" name="thermometer"></ion-icon>\n        <ion-icon range-right color="danger" name="thermometer"></ion-icon>\n      </ion-range>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header>\n      Adjust Text\n    </ion-list-header>\n    <ion-item>\n      <ion-range min="-100" step="10" snaps="true" [(ngModel)]="text">\n        <ion-label range-left class="small-text">A</ion-label>\n        <ion-label range-right>A</ion-label>\n      </ion-range>\n    </ion-item>\n  </ion-list>\n\n</div>'/*ion-inline-end:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/components/ui-elements/range/range.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], RangeComponent);
    return RangeComponent;
}());

//# sourceMappingURL=range.js.map

/***/ }),

/***/ 843:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchbarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__searchbar__ = __webpack_require__(844);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SearchbarModule = (function () {
    function SearchbarModule() {
    }
    SearchbarModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__searchbar__["a" /* SearchbarComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__searchbar__["a" /* SearchbarComponent */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__searchbar__["a" /* SearchbarComponent */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], SearchbarModule);
    return SearchbarModule;
}());

//# sourceMappingURL=searchbar.module.js.map

/***/ }),

/***/ 844:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchbarComponent; });
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
 * Generated class for the RegisterV1Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var SearchbarComponent = (function () {
    function SearchbarComponent() {
        var _this = this;
        this.onCallbackEvent = function (event) {
            if (_this.events[event]) {
                _this.events[event]();
            }
        };
        this.initializeItems();
        console.log('Hello SearchbarComponent Component');
    }
    SearchbarComponent.prototype.initializeItems = function () {
        this.items = [
            'Amsterdam',
            'Bogota',
            'Buenos Aires',
            'Cairo',
            'Dhaka',
            'Edinburgh',
            'Geneva',
            'Genoa',
            'Glasglow',
            'Hanoi',
            'Hong Kong',
            'Islamabad',
            'Istanbul',
            'Jakarta',
            'Kiel',
            'Kyoto',
            'Le Havre',
            'Lebanon',
            'Lhasa',
            'Lima',
            'London',
            'Los Angeles',
            'Madrid',
            'Manila',
            'New York',
            'Olympia',
            'Oslo',
            'Panama City',
            'Peking',
            'Philadelphia',
            'San Francisco',
            'Seoul',
            'Taipeh',
            'Tel Aviv',
            'Tokio',
            'Uelzen',
            'Washington'
        ];
    };
    SearchbarComponent.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the ev target
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SearchbarComponent.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SearchbarComponent.prototype, "data", void 0);
    SearchbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'searchbar',template:/*ion-inline-start:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/components/ui-elements/searchbar/searchbar.html"*/'\n<div>\n  \n  <ion-searchbar (ionInput)="getItems($event)" color="primary" class="dark-searchbar round black text-white"></ion-searchbar>\n\n  <ion-searchbar (ionInput)="getItems($event)" color="primary" class="light-searchbar round grey-1 text-black"></ion-searchbar>\n\n  <ion-searchbar (ionInput)="getItems($event)" color="primary" class="dark-searchbar round line green text-white"></ion-searchbar>\n  \n  <ion-searchbar (ionInput)="getItems($event)" color="primary" class="dark-searchbar pink text-white"></ion-searchbar>\n\n  <ion-list>\n    <ion-item *ngFor="let item of items">\n      {{ item }}\n    </ion-item>\n  </ion-list>\n\n</div>'/*ion-inline-end:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/components/ui-elements/searchbar/searchbar.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], SearchbarComponent);
    return SearchbarComponent;
}());

//# sourceMappingURL=searchbar.js.map

/***/ }),

/***/ 845:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SegmentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__segment__ = __webpack_require__(846);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SegmentModule = (function () {
    function SegmentModule() {
    }
    SegmentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__segment__["a" /* SegmentComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__segment__["a" /* SegmentComponent */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__segment__["a" /* SegmentComponent */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], SegmentModule);
    return SegmentModule;
}());

//# sourceMappingURL=segment.module.js.map

/***/ }),

/***/ 846:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SegmentComponent; });
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
 * Generated class for the RegisterV1Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var SegmentComponent = (function () {
    function SegmentComponent() {
        var _this = this;
        this.onCallbackEvent = function (event) {
            if (_this.events[event]) {
                _this.events[event]();
            }
        };
        console.log('Hello SegmentComponent Component');
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SegmentComponent.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SegmentComponent.prototype, "data", void 0);
    SegmentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'segment',template:/*ion-inline-start:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/components/ui-elements/segment/segment.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Segment</ion-title>\n  </ion-navbar>\n  \n  <ion-toolbar no-border-top>\n    <ion-segment [(ngModel)]="pet" class="segment-bg text-white blue">\n      <ion-segment-button class="fs-14" value="puppies">\n        Puppies\n      </ion-segment-button>\n      <ion-segment-button class="fs-14" value="kittens">\n        Kittens\n      </ion-segment-button>\n      <ion-segment-button class="fs-14" value="ducklings">\n        Ducklings\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n  \n  <ion-toolbar no-border-top class="mgt-5">\n    <ion-segment [(ngModel)]="pet" class="segment-line-deviation text-red stroke-red">\n      <ion-segment-button class="fs-14" value="puppies">\n        Puppies\n      </ion-segment-button>\n      <ion-segment-button class="fs-14" value="kittens">\n        Kittens\n      </ion-segment-button>\n      <ion-segment-button class="fs-14" value="ducklings">\n        Ducklings\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n\n  <ion-toolbar no-border-top class="mgt-5">\n    <ion-segment [(ngModel)]="pet" class="segment-line-balance text-green stroke-green">\n      <ion-segment-button class="fs-14" value="puppies">\n        Puppies\n      </ion-segment-button>\n      <ion-segment-button class="fs-14" value="kittens">\n        Kittens\n      </ion-segment-button>\n      <ion-segment-button class="fs-14" value="ducklings">\n        Ducklings\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n\n  <ion-toolbar no-border-top class="mgt-5">\n    <ion-segment [(ngModel)]="pet" class="segment-btn-group text-black stroke-black stroke-1 bdra-5">\n      <ion-segment-button class="fs-14 black" value="puppies">\n        Puppies\n      </ion-segment-button>\n      <ion-segment-button class="fs-14 black" value="kittens">\n        Kittens\n      </ion-segment-button>\n      <ion-segment-button class="fs-14 black" value="ducklings">\n        Ducklings\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n\n  <ion-toolbar no-border-top>\n    <ion-segment [(ngModel)]="pet" class="segment-btn-group text-pink stroke-pink stroke-2 bdra-15">\n      <ion-segment-button class="fs-14 pink" value="puppies">\n        Puppies\n      </ion-segment-button>\n      <ion-segment-button class="fs-14 pink" value="kittens">\n        Kittens\n      </ion-segment-button>\n      <ion-segment-button class="fs-14 pink" value="ducklings">\n        Ducklings\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content>\n  \n  <div [ngSwitch]="pet">\n    <ion-list *ngSwitchCase="\'puppies\'">\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/avt1.jpg">\n        </ion-thumbnail>\n        <h2>Ruby</h2>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/avt2.jpg">\n        </ion-thumbnail>\n        <h2>Oscar</h2>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/avt3.jpg">\n        </ion-thumbnail>\n        <h2>Zoey</h2>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/avt4.jpg">\n        </ion-thumbnail>\n        <h2>Otto</h2>\n      </ion-item>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'kittens\'">\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/avt5.jpg">\n        </ion-thumbnail>\n        <h2>Luna</h2>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/avt1.jpg">\n        </ion-thumbnail>\n        <h2>Milo</h2>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/avt2.jpg">\n        </ion-thumbnail>\n        <h2>Bandit</h2>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/avt3.jpg">\n        </ion-thumbnail>\n        <h2>Nala</h2>\n      </ion-item>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'ducklings\'">\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/avt4.jpg">\n        </ion-thumbnail>\n        <h2>Daffy</h2>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/avt5.jpg">\n        </ion-thumbnail>\n        <h2>Huey</h2>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/avt1.jpg">\n        </ion-thumbnail>\n        <h2>Dewey</h2>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/avt2.jpg">\n        </ion-thumbnail>\n        <h2>Louie</h2>\n      </ion-item>\n    </ion-list>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/components/ui-elements/segment/segment.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], SegmentComponent);
    return SegmentComponent;
}());

//# sourceMappingURL=segment.js.map

/***/ }),

/***/ 847:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select__ = __webpack_require__(848);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SelectModule = (function () {
    function SelectModule() {
    }
    SelectModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__select__["a" /* SelectComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__select__["a" /* SelectComponent */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__select__["a" /* SelectComponent */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], SelectModule);
    return SelectModule;
}());

//# sourceMappingURL=select.module.js.map

/***/ }),

/***/ 848:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectComponent; });
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
 * Generated class for the RegisterV1Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var SelectComponent = (function () {
    function SelectComponent() {
        var _this = this;
        this.gaming = "n64";
        this.gender = "f";
        this.onCallbackEvent = function (event) {
            if (_this.events[event]) {
                _this.events[event]();
            }
        };
        this.musicAlertOpts = {
            title: '1994 Music',
            subTitle: 'Select your favorite'
        };
        console.log('Hello SelectComponent Component');
    }
    SelectComponent.prototype.stpSelect = function () {
        console.log('STP selected');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SelectComponent.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SelectComponent.prototype, "data", void 0);
    SelectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'select',template:/*ion-inline-start:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/components/ui-elements/select/select.html"*/'\n  <ion-list>\n    <ion-item>\n      <ion-label>Gender</ion-label>\n      <ion-select [(ngModel)]="gender">\n        <ion-option value="f">Female</ion-option>\n        <ion-option value="m">Male</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Gaming</ion-label>\n      <ion-select [(ngModel)]="gaming" interface="popover">\n        <ion-option value="nes">NES</ion-option>\n        <ion-option value="n64">Nintendo64</ion-option>\n        <ion-option value="ps">PlayStation</ion-option>\n        <ion-option value="genesis">Sega Genesis</ion-option>\n        <ion-option value="saturn">Sega Saturn</ion-option>\n        <ion-option value="snes">SNES</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Notifications</ion-label>\n      <ion-select [(ngModel)]="notifications" interface="action-sheet">\n        <ion-option value="enable">Enable</ion-option>\n        <ion-option value="mute">Mute</ion-option>\n        <ion-option value="mute_week">Mute for a week</ion-option>\n        <ion-option value="mute_year" (ionSelect)="notificationSelect($event)">Mute for a year</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Operating System</ion-label>\n      <ion-select [(ngModel)]="os" submitText="Okay" cancelText="Nah">\n        <ion-option value="dos">DOS</ion-option>\n        <ion-option value="lunix">Linux</ion-option>\n        <ion-option value="mac7">Mac OS 7</ion-option>\n        <ion-option value="mac8">Mac OS 8</ion-option>\n        <ion-option value="win3.1">Windows 3.1</ion-option>\n        <ion-option value="win95">Windows 95</ion-option>\n        <ion-option value="win98">Windows 98</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Music</ion-label>\n      <ion-select [(ngModel)]="music" [selectOptions]="musicAlertOpts">\n        <ion-option>Alice in Chains</ion-option>\n        <ion-option>Green Day</ion-option>\n        <ion-option>Nirvana</ion-option>\n        <ion-option>Pearl Jam</ion-option>\n        <ion-option>Smashing Pumpkins</ion-option>\n        <ion-option>Soundgarden</ion-option>\n        <ion-option (select)="stpSelect()">Stone Temple Pilots</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Date</ion-label>\n      <ion-select [(ngModel)]="month">\n        <ion-option value="01">January</ion-option>\n        <ion-option value="02">February</ion-option>\n        <ion-option value="03">March</ion-option>\n        <ion-option value="04">April</ion-option>\n        <ion-option value="05">May</ion-option>\n        <ion-option value="06">June</ion-option>\n        <ion-option value="07">July</ion-option>\n        <ion-option value="08">August</ion-option>\n        <ion-option value="09">September</ion-option>\n        <ion-option value="10">October</ion-option>\n        <ion-option value="11">November</ion-option>\n        <ion-option value="12" checked="true">December</ion-option>\n      </ion-select>\n      <ion-select [(ngModel)]="year">\n        <ion-option>1989</ion-option>\n        <ion-option>1990</ion-option>\n        <ion-option>1991</ion-option>\n        <ion-option>1992</ion-option>\n        <ion-option>1993</ion-option>\n        <ion-option checked="true">1994</ion-option>\n        <ion-option>1995</ion-option>\n        <ion-option>1996</ion-option>\n        <ion-option>1997</ion-option>\n        <ion-option>1998</ion-option>\n        <ion-option>1999</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n'/*ion-inline-end:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/components/ui-elements/select/select.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], SelectComponent);
    return SelectComponent;
}());

//# sourceMappingURL=select.js.map

/***/ }),

/***/ 849:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlidesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slides__ = __webpack_require__(850);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SlidesModule = (function () {
    function SlidesModule() {
    }
    SlidesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__slides__["a" /* SlidesComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__slides__["a" /* SlidesComponent */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__slides__["a" /* SlidesComponent */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], SlidesModule);
    return SlidesModule;
}());

//# sourceMappingURL=slides.module.js.map

/***/ }),

/***/ 850:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlidesComponent; });
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
 * Generated class for the RegisterV1Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var SlidesComponent = (function () {
    function SlidesComponent() {
        var _this = this;
        this.onCallbackEvent = function (event) {
            if (_this.events[event]) {
                _this.events[event]();
            }
        };
        console.log('Hello SlidesComponent Component');
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SlidesComponent.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SlidesComponent.prototype, "data", void 0);
    SlidesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'slides',template:/*ion-inline-start:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/components/ui-elements/slides/slides.html"*/'<div>\n	\n	<div class="wrapper-slide">\n		<h5 padding>Basic slide</h5>\n		<ion-slides autoplay="2500" loop="true" speed="500" pager="true" class="height-auto" #slide1>\n			<ion-slide>\n			    <img src="assets/img/bg17.jpg" alt="">\n			    <div class="slogan black-opct">\n			    	<div padding class="wrapper-slogan">\n				    	<h3 class="title text-white fs-30 fw-600">Lorem Ipsum</h3>\n				    	<p class="text-white fs-12">Lorem Ipsum is simply dummy text of the printing</p>\n				    </div>\n			    </div>\n			</ion-slide>\n\n			<ion-slide>\n			    <img src="assets/img/bg18.jpg" alt="">\n			    <div class="slogan black-opct">\n			    	<div padding class="wrapper-slogan">\n				    	<h3 class="title text-white fs-30 fw-600">Lorem Ipsum</h3>\n				    	<p class="text-white fs-12">Lorem Ipsum is simply dummy text of the printing</p>\n				    </div>\n			    </div>\n			</ion-slide>\n\n			<ion-slide>\n			    <img src="assets/img/bg19.jpg" alt="">\n			    <div class="slogan black-opct">\n			    	<div padding class="wrapper-slogan">\n				    	<h3 class="title text-white fs-30 fw-600">Lorem Ipsum</h3>\n				    	<p class="text-white fs-12">Lorem Ipsum is simply dummy text of the printing</p>\n				    </div>\n			    </div>\n			</ion-slide>\n		</ion-slides>\n	</div>\n\n	<div class="wrapper-slide">\n		<h5 padding>Free mode</h5>\n		<ion-slides slidesPerView="2" autoplay="2500" loop="true" speed="500" pager="true" paginationType="progress" class="height-auto" #slide2>\n			<ion-slide>\n			    <img src="assets/img/bg17.jpg" alt="">\n			</ion-slide>\n\n			<ion-slide>\n			    <img src="assets/img/bg18.jpg" alt="">\n			</ion-slide>\n\n			<ion-slide>\n			    <img src="assets/img/bg19.jpg" alt="">\n			</ion-slide>\n		</ion-slides>\n	</div>\n\n	<div class="wrapper-slide">\n		<h5 padding>Pagination button</h5>\n		<div class="wrapper-slide-pagination">\n			<ion-slides autoplay="2500" loop="true" speed="500" pager="false" class="height-auto" #slide3>\n				<ion-slide>\n				    <img src="assets/img/bg17.jpg" alt="">\n				    <div class="slogan black-opct">\n				    	<div padding class="text-left wrapper-slogan pdl-40">\n					    	<h3 class="title text-white fs-30 fw-600">Lorem Ipsum</h3>\n					    	<p class="text-white fs-12 pdr-40">Lorem Ipsum is simply dummy text of the printing</p>\n					    </div>\n				    </div>\n				</ion-slide>\n\n				<ion-slide>\n				    <img src="assets/img/bg18.jpg" alt="">\n				    <div class="slogan black-opct">\n				    	<div padding class="text-left wrapper-slogan pdl-40">\n					    	<h3 class="title text-white fs-30 fw-600">Lorem Ipsum</h3>\n					    	<p class="text-white fs-12 pdr-40">Lorem Ipsum is simply dummy text of the printing</p>\n					    </div>\n				    </div>\n				</ion-slide>\n\n				<ion-slide>\n				    <img src="assets/img/bg19.jpg" alt="">\n				    <div class="slogan black-opct">\n				    	<div padding class="text-left wrapper-slogan pdl-40">\n					    	<h3 class="title text-white fs-30 fw-600">Lorem Ipsum</h3>\n					    	<p class="text-white fs-12 pdr-40">Lorem Ipsum is simply dummy text of the printing</p>\n					    </div>\n				    </div>\n				</ion-slide>\n			</ion-slides>\n			<div class="btn-pagination">\n				<button ion-button clear class="button-circle text-white pull-right" (click)="slide_next()">\n					<ion-icon class="fs-26" name="ios-arrow-dropright"></ion-icon>\n				</button>\n				<button ion-button clear class="button-circle text-white pull-left" (click)="slide_prev()">\n					<ion-icon class="fs-26" name="ios-arrow-dropleft"></ion-icon>\n				</button>\n			</div>\n		</div>\n	</div>\n\n	<div class="wrapper-slide">\n		<h5 padding>Effect fade</h5>\n		<ion-slides autoplay="1500" loop="true" effect="fade" speed="500" pager="true" class="height-auto" #slide4>\n			<ion-slide>\n			    <img src="assets/img/bg17.jpg" alt="">\n			</ion-slide>\n\n			<ion-slide>\n			    <img src="assets/img/bg18.jpg" alt="">\n			</ion-slide>\n\n			<ion-slide>\n			    <img src="assets/img/bg19.jpg" alt="">\n			</ion-slide>\n		</ion-slides>\n	</div>\n\n	<div class="wrapper-slide">\n		<h5 padding>Effect cube</h5>\n		<ion-slides autoplay="1500" loop="true" effect="cube" speed="500" pager="true" class="height-auto" #slide5>\n			<ion-slide>\n			    <img src="assets/img/bg17.jpg" alt="">\n			</ion-slide>\n\n			<ion-slide>\n			    <img src="assets/img/bg18.jpg" alt="">\n			</ion-slide>\n\n			<ion-slide>\n			    <img src="assets/img/bg19.jpg" alt="">\n			</ion-slide>\n		</ion-slides>\n	</div>\n\n	<div class="wrapper-slide">\n		<h5 padding>Effect coverflow</h5>\n		<ion-slides autoplay="1500" loop="true" effect="coverflow" speed="500" pager="true" class="height-auto" #slide6>\n			<ion-slide>\n			    <img src="assets/img/bg17.jpg" alt="">\n			</ion-slide>\n\n			<ion-slide>\n			    <img src="assets/img/bg18.jpg" alt="">\n			</ion-slide>\n\n			<ion-slide>\n			    <img src="assets/img/bg19.jpg" alt="">\n			</ion-slide>\n		</ion-slides>\n	</div>\n\n	<div class="wrapper-slide">\n		<h5 padding>Effect flip</h5>\n		<ion-slides autoplay="1500" loop="true" effect="flip" speed="500" pager="true" class="height-auto" #slide7>\n			<ion-slide>\n			    <img src="assets/img/bg17.jpg" alt="">\n			</ion-slide>\n\n			<ion-slide>\n			    <img src="assets/img/bg18.jpg" alt="">\n			</ion-slide>\n\n			<ion-slide>\n			    <img src="assets/img/bg19.jpg" alt="">\n			</ion-slide>\n		</ion-slides>\n	</div>\n\n\n</div>'/*ion-inline-end:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/components/ui-elements/slides/slides.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], SlidesComponent);
    return SlidesComponent;
}());

//# sourceMappingURL=slides.js.map

/***/ }),

/***/ 851:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs__ = __webpack_require__(852);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabsModule = (function () {
    function TabsModule() {
    }
    TabsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsComponent */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsComponent */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], TabsModule);
    return TabsModule;
}());

//# sourceMappingURL=tabs.module.js.map

/***/ }),

/***/ 852:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsComponent; });
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
 * Generated class for the RegisterV1Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var TabsComponent = (function () {
    // tab1Root = HomeBasicComponent;
    // 	tab2Root = HomeBasicComponent;
    // 	tab3Root = HomeBasicComponent;
    // 	tab4Root = HomeBasicComponent;
    function TabsComponent() {
        var _this = this;
        this.onCallbackEvent = function (event) {
            if (_this.events[event]) {
                _this.events[event]();
            }
        };
        console.log('Hello TabsComponent Component');
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TabsComponent.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TabsComponent.prototype, "data", void 0);
    TabsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'tabs',template:/*ion-inline-start:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/components/ui-elements/tabs/tabs.html"*/'<ion-tabs class="shadow-3 skin skin-light">\n  <ion-tab [root]="tab1Root" tabTitle="" tabIcon="md-text"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="" tabIcon="md-people"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="" tabIcon="md-list-box"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="" tabIcon="ios-contact"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/components/ui-elements/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsComponent);
    return TabsComponent;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 853:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toast__ = __webpack_require__(854);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ToastModule = (function () {
    function ToastModule() {
    }
    ToastModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__toast__["a" /* ToastComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__toast__["a" /* ToastComponent */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__toast__["a" /* ToastComponent */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ToastModule);
    return ToastModule;
}());

//# sourceMappingURL=toast.module.js.map

/***/ }),

/***/ 854:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastComponent; });
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
var ToastComponent = (function () {
    function ToastComponent(toastCtrl) {
        var _this = this;
        this.toastCtrl = toastCtrl;
        this.onCallbackEvent = function (event) {
            if (_this.events[event]) {
                _this.events[event]();
            }
        };
        console.log('Hello ToastComponent Component');
    }
    ToastComponent.prototype.showToast = function (position) {
        var toast = this.toastCtrl.create({
            message: 'Mmmm, buttered toast',
            duration: 2000,
            position: position
        });
        toast.present(toast);
    };
    ToastComponent.prototype.showToastWithCloseButton = function () {
        var toast = this.toastCtrl.create({
            message: 'Your files were successfully saved',
            showCloseButton: true,
            closeButtonText: 'Ok'
        });
        toast.present();
    };
    ToastComponent.prototype.showLongToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea voluptatibus quibusdam eum nihil optio, ullam accusamus magni, nobis suscipit reprehenderit, sequi quam amet impedit. Accusamus dolorem voluptates laborum dolor obcaecati.',
            duration: 2000,
        });
        toast.present();
    };
    ToastComponent.prototype.showBgColorToast = function (position, css_class) {
        var toast = this.toastCtrl.create({
            message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            duration: 2000,
            position: position,
            cssClass: css_class
        });
        toast.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ToastComponent.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ToastComponent.prototype, "data", void 0);
    ToastComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'toast',template:/*ion-inline-start:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/components/ui-elements/toast/toast.html"*/'<div padding class="{{main_bg}}">\n  \n  <h5 class="mgt-10 mgb-15">Basic</h5>\n  \n  <button ion-button block round class="d-purple" (click)="showToast(\'top\')">Show Toast Top Position</button>\n  <button ion-button block round class="indigo" (click)="showToast(\'middle\')">Show Toast Middle Position</button>\n  <button ion-button block round class="blue" (click)="showToast(\'bottom\')">Show Toast Bottom Position</button>\n  <button ion-button block round class="teal" (click)="showLongToast()">Show Long Toast</button>\n  <button ion-button block round class="black" (click)="showToastWithCloseButton()">Show Toast W/ Close Button</button>\n\n  <h5 class="mgt-30 mgb-15">Opacity</h5>\n\n  <button ion-button block round class="white-opct text-white shadow-1 mgb-15" (click)="showBgColorToast(\'top\', \'white-opct\')">Show Toast Opacity White</button>\n  <button ion-button block round class="black-opct" (click)="showBgColorToast(\'top\', \'black-opct\')">Show Toast Opacity black</button>\n\n  <h5 class="mgt-30 mgb-15">Background color</h5>\n  \n  <button ion-button block round class="white text-grey-5 shadow-1" (click)="showBgColorToast(\'top\', \'white\')">Show Toast white</button>\n  <button ion-button block round class="yellow text-grey-5" (click)="showBgColorToast(\'top\', \'yellow\')">Show Toast warning</button>\n  <button ion-button block round class="red" (click)="showBgColorToast(\'top\', \'red\')">Show Toast danger</button>\n  <button ion-button block round class="l-green" (click)="showBgColorToast(\'top\', \'l-green\')">Show Toast success</button>\n  <button ion-button block round class="l-blue" (click)="showBgColorToast(\'top\', \'l-blue\')">Show Toast info</button>\n\n</div>'/*ion-inline-end:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/components/ui-elements/toast/toast.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */]])
    ], ToastComponent);
    return ToastComponent;
}());

//# sourceMappingURL=toast.js.map

/***/ }),

/***/ 855:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToggleModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toggle__ = __webpack_require__(856);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ToggleModule = (function () {
    function ToggleModule() {
    }
    ToggleModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__toggle__["a" /* ToggleComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__toggle__["a" /* ToggleComponent */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__toggle__["a" /* ToggleComponent */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ToggleModule);
    return ToggleModule;
}());

//# sourceMappingURL=toggle.module.js.map

/***/ }),

/***/ 856:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToggleComponent; });
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
 * Generated class for the RegisterV1Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ToggleComponent = (function () {
    function ToggleComponent() {
        var _this = this;
        this.onCallbackEvent = function (event) {
            if (_this.events[event]) {
                _this.events[event]();
            }
        };
        console.log('Hello ToggleComponent Component');
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ToggleComponent.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ToggleComponent.prototype, "data", void 0);
    ToggleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'toggle',template:/*ion-inline-start:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/components/ui-elements/toggle/toggle.html"*/'<div>\n  \n  <ion-list no-lines>\n    <ion-list-header>\n      Characters\n    </ion-list-header>\n\n    <ion-item>\n      <ion-label>Frodo Baggins</ion-label>\n      <ion-toggle value="foo" checked="true"></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Sam</ion-label>\n      <ion-toggle color="energized"></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Éowyn</ion-label>\n      <ion-toggle color="danger" checked="true"></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Legolas</ion-label>\n      <ion-toggle color="royal" checked="true"></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Gimli</ion-label>\n      <ion-toggle color="danger"></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Saruman</ion-label>\n      <ion-toggle color="dark" checked="true"></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Gandalf</ion-label>\n      <ion-toggle color="energized" checked="true"></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Arwen</ion-label>\n      <ion-toggle color="royal"></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Treebeard</ion-label>\n      <ion-toggle color="secondary" checked="true"></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Boromir</ion-label>\n      <ion-toggle color="royal"></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Gollum</ion-label>\n      <ion-toggle color="dark" checked="true"></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Galadriel</ion-label>\n      <ion-toggle color="energized"></ion-toggle>\n    </ion-item>\n\n\n  </ion-list>\n\n</div>'/*ion-inline-end:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/components/ui-elements/toggle/toggle.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ToggleComponent);
    return ToggleComponent;
}());

//# sourceMappingURL=toggle.js.map

/***/ }),

/***/ 857:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toolbar__ = __webpack_require__(858);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ToolbarModule = (function () {
    function ToolbarModule() {
    }
    ToolbarModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__toolbar__["a" /* ToolbarComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__toolbar__["a" /* ToolbarComponent */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__toolbar__["a" /* ToolbarComponent */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ToolbarModule);
    return ToolbarModule;
}());

//# sourceMappingURL=toolbar.module.js.map

/***/ }),

/***/ 858:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarComponent; });
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
 * Generated class for the RegisterV1Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ToolbarComponent = (function () {
    function ToolbarComponent() {
        var _this = this;
        this.onCallbackEvent = function (event) {
            if (_this.events[event]) {
                _this.events[event]();
            }
        };
        console.log('Hello ToolbarComponent Component');
    }
    ToolbarComponent.prototype.initializeItems = function () {
        this.items = [
            'Amsterdam',
            'Bogota',
            'Buenos Aires',
            'Cairo',
            'Dhaka',
            'Edinburgh',
            'Geneva',
            'Genoa',
            'Glasglow',
            'Hanoi',
            'Hong Kong',
            'Islamabad',
            'Istanbul',
            'Jakarta',
            'Kiel',
            'Kyoto',
            'Le Havre',
            'Lebanon',
            'Lhasa',
            'Lima',
            'London',
            'Los Angeles',
            'Madrid',
            'Manila',
            'New York',
            'Olympia',
            'Oslo',
            'Panama City',
            'Peking',
            'Philadelphia',
            'San Francisco',
            'Seoul',
            'Taipeh',
            'Tel Aviv',
            'Tokio',
            'Uelzen',
            'Washington'
        ];
    };
    ToolbarComponent.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the ev target
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ToolbarComponent.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ToolbarComponent.prototype, "data", void 0);
    ToolbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'toolbar',template:/*ion-inline-start:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/components/ui-elements/toolbar/toolbar.html"*/'\n<ion-header>\n\n  <ion-navbar class="white">\n    <ion-title>Toolbar</ion-title>\n  </ion-navbar> \n\n  <expandable-header class="lama-vs-coban" [scrollArea]="mycontent" headerHeight="45"></expandable-header>\n\n  <ion-toolbar padding class="pink text-white">\n    <ion-buttons start>\n      <button ion-button icon-only color="royal">\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Send To...</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only color="royal">\n        <ion-icon name="person-add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n\n\n\n  <ion-toolbar padding class="white">\n    <ion-buttons start>\n      <button ion-button icon-only>\n        <ion-icon name="create"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-segment class="segment-btn-group text-black stroke-2 stroke-black bdra-5">\n      <ion-segment-button class="black" value="new">\n        New\n      </ion-segment-button>\n      <ion-segment-button class="black" value="hot">\n        Hot\n      </ion-segment-button>\n    </ion-segment>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n\n\n\n  <ion-toolbar color="primary" class="pd-0">\n    <ion-searchbar class="dark-searchbar round indigo text-white" padding (input)="getItems($event)"></ion-searchbar>\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content fullscreen #mycontent>\n\n  <ion-list>\n    <ion-item *ngFor="let item of items">\n      {{ item }}\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n\n\n\n\n<ion-footer>\n  <ion-toolbar padding class="white">\n    <p>Ash, Misty, Brock</p>\n    <ion-buttons end>\n      <button ion-button icon-right color="royal">\n        Send\n        <ion-icon name="send"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n\n\n  <ion-toolbar padding class="black text-white">\n    <ion-title>Footer</ion-title>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/components/ui-elements/toolbar/toolbar.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ToolbarComponent);
    return ToolbarComponent;
}());

//# sourceMappingURL=toolbar.js.map

/***/ })

});
//# sourceMappingURL=1.js.map