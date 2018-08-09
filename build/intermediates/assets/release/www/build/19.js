webpackJsonp([19],{

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingDashboardPageModule", function() { return SettingDashboardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setting_dashboard__ = __webpack_require__(811);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingDashboardPageModule = (function () {
    function SettingDashboardPageModule() {
    }
    SettingDashboardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__setting_dashboard__["a" /* SettingDashboardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__setting_dashboard__["a" /* SettingDashboardPage */]),
            ],
        })
    ], SettingDashboardPageModule);
    return SettingDashboardPageModule;
}());

//# sourceMappingURL=setting-dashboard.module.js.map

/***/ }),

/***/ 811:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingDashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_settings_settings__ = __webpack_require__(140);
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
var SettingDashboardPage = (function () {
    function SettingDashboardPage(settingsProvider) {
        var _this = this;
        this.settingsProvider = settingsProvider;
        this.settings = {};
        this.settingsProvider.getSettings().then(function (data) {
            _this.settings = data;
        });
    }
    SettingDashboardPage.prototype.setDashboard = function () {
        this.settingsProvider.setDashboard(this.settings.dashboard_type);
    };
    SettingDashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'setting-dashboard',template:/*ion-inline-start:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/pages/settings/setting-dashboard/setting-dashboard.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Dashboard Setting</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  	\n  	<ion-list radio-group [(ngModel)]="settings.dashboard_type" (ionChange)="setDashboard()">\n	  <ion-item>\n	    <ion-label>Grid</ion-label>\n	    <ion-radio  value="1" checked></ion-radio>\n	  </ion-item>\n	  <ion-item>\n	    <ion-label>Categories</ion-label>\n	    <ion-radio value="2"></ion-radio>\n	  </ion-item>\n	  <ion-item>\n	    <ion-label>List</ion-label>\n	    <ion-radio  value="3"></ion-radio>\n	  </ion-item>\n	</ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/pages/settings/setting-dashboard/setting-dashboard.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_settings_settings__["a" /* SettingsProvider */]])
    ], SettingDashboardPage);
    return SettingDashboardPage;
}());

//# sourceMappingURL=setting-dashboard.js.map

/***/ })

});
//# sourceMappingURL=19.js.map