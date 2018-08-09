webpackJsonp([18],{

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingSidemenuPageModule", function() { return SettingSidemenuPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setting_sidemenu__ = __webpack_require__(812);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingSidemenuPageModule = (function () {
    function SettingSidemenuPageModule() {
    }
    SettingSidemenuPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__setting_sidemenu__["a" /* SettingSidemenuPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__setting_sidemenu__["a" /* SettingSidemenuPage */]),
            ],
        })
    ], SettingSidemenuPageModule);
    return SettingSidemenuPageModule;
}());

//# sourceMappingURL=setting-sidemenu.module.js.map

/***/ }),

/***/ 812:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingSidemenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_settings_settings__ = __webpack_require__(140);
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
var SettingSidemenuPage = (function () {
    function SettingSidemenuPage(menu, settingsProvider) {
        this.menu = menu;
        this.settingsProvider = settingsProvider;
        menu.enable(true);
    }
    SettingSidemenuPage.prototype.open_menu = function (id_menu) {
        var _this = this;
        this.settingsProvider.setMenu(id_menu).then(function (data) {
            _this.menu.enable(false);
            _this.menu.enable(true, id_menu);
            _this.menu.open(id_menu);
        });
    };
    SettingSidemenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'setting-sidemenu',template:/*ion-inline-start:"D:\Visual Studio\Personal\Project-Watermellon\src\pages\settings\setting-sidemenu\setting-sidemenu.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Sidemenu setting</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  \n\n  <button ion-button block round class="lama-vs-coban" (click)="open_menu(\'menu-basic\')">Side Menu Basic</button>\n\n  <button ion-button block round class="indigo" (click)="open_menu(\'menu-avatar\')">Side Menu Avatar</button>\n\n  <button ion-button block round class="pink" (click)="open_menu(\'menu-material\')">Side Menu Material</button>\n\n  <button ion-button block round class="d-purple" (click)="open_menu(\'menu-icon-only\')">Side Menu Only Icon</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Visual Studio\Personal\Project-Watermellon\src\pages\settings\setting-sidemenu\setting-sidemenu.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */], __WEBPACK_IMPORTED_MODULE_2__providers_settings_settings__["a" /* SettingsProvider */]])
    ], SettingSidemenuPage);
    return SettingSidemenuPage;
}());

//# sourceMappingURL=setting-sidemenu.js.map

/***/ })

});
//# sourceMappingURL=18.js.map