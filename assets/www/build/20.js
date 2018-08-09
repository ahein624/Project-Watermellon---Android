webpackJsonp([20],{

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingColorPageModule", function() { return SettingColorPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setting_color__ = __webpack_require__(810);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingColorPageModule = (function () {
    function SettingColorPageModule() {
    }
    SettingColorPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__setting_color__["a" /* SettingColorPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__setting_color__["a" /* SettingColorPage */]),
            ],
        })
    ], SettingColorPageModule);
    return SettingColorPageModule;
}());

//# sourceMappingURL=setting-color.module.js.map

/***/ }),

/***/ 810:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingColorPage; });
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
var SettingColorPage = (function () {
    function SettingColorPage(settingsProvider, events) {
        var _this = this;
        this.settingsProvider = settingsProvider;
        this.events = events;
        this.list = new Array();
        this.settings = null;
        this.selected_skin = 1;
        this.list = this.settingsProvider.getSkins();
        this.settingsProvider.getSettings().then(function (data) {
            _this.settings = data;
            _this.selected_skin = _this.settingsProvider.getIndexOf(_this.settings.skin.main_bg, _this.list);
        });
    }
    SettingColorPage.prototype.setSkin = function () {
        var _this = this;
        this.settingsProvider.setSkin(this.list[this.selected_skin]).then(function (data) {
            _this.events.publish('settings_change: change', data);
            _this.settings = data;
        });
    };
    SettingColorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'setting-color',template:/*ion-inline-start:"D:\Visual Studio\Personal\Project-Watermellon\src\pages\settings\setting-color\setting-color.html"*/'<ion-header *ngIf="settings!=null"  class="{{settings.skin.main_skin}}">\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Theme Setting</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content *ngIf="settings!=null" padding class="{{settings.skin.main_bg}}">\n\n  	<h4 class="mgb-10 {{settings.skin.text_1}}">Setting color</h4>\n\n  	<h6 class="mgt-5 mgb-20 {{settings.skin.text_2}} fw-400">Choose color you love</h6>\n\n\n\n  	<ion-list no-lines class="lst-no-background" radio-group [(ngModel)]="selected_skin" (ionChange)="setSkin()" >\n\n	    <ion-item *ngFor="let item of list, let i = index" class="pdl-0 fs-13 text-grey-5">\n\n	      	<ion-label class="{{settings.skin.text_1}}">{{item.title}}</ion-label>\n\n	      	<ion-radio [value]="i"></ion-radio>\n\n	    </ion-item>\n\n  	</ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Visual Studio\Personal\Project-Watermellon\src\pages\settings\setting-color\setting-color.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_settings_settings__["a" /* SettingsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
    ], SettingColorPage);
    return SettingColorPage;
}());

//# sourceMappingURL=setting-color.js.map

/***/ })

});
//# sourceMappingURL=20.js.map