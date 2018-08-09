webpackJsonp([58],{

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var STORAGE_KEY = "settings";
/*
  Generated class for the SettingsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
  */
var SettingsProvider = (function () {
    function SettingsProvider(http, events, storage) {
        this.http = http;
        this.events = events;
        this.storage = storage;
        this.listSkins = [
            { title: 'Lama vs Coban', main_bg: 'lama-vs-coban', text_1: 'text-white', text_2: 'text-grey-1', text_3: 'text-grey-2', text_4: 'text-grey-3', main_skin: 'skin skin-dark skin-transparent' },
            { title: 'Pink vs Indigo', main_bg: 'pink-vs-indigo', text_1: 'text-white', text_2: 'text-grey-1', text_3: 'text-grey-2', text_4: 'text-grey-3', main_skin: 'skin skin-dark skin-transparent' },
            { title: 'Indigo vs Purple', main_bg: 'indigo-vs-purple', text_1: 'text-white', text_2: 'text-grey-1', text_3: 'text-grey-2', text_4: 'text-grey-3', main_skin: 'skin skin-dark skin-transparent' },
            { title: 'Pink vs Red', main_bg: 'pink-vs-red', text_1: 'text-white', text_2: 'text-grey-1', text_3: 'text-grey-2', text_4: 'text-grey-3', main_skin: 'skin skin-dark skin-transparent' },
            { title: 'Pink vs Yellow', main_bg: 'pink-vs-yellow', text_1: 'text-white', text_2: 'text-grey-1', text_3: 'text-grey-2', text_4: 'text-grey-3', main_skin: 'skin skin-dark skin-transparent' },
            { title: 'Green vs Yellow', main_bg: 'green-vs-yellow', text_1: 'text-white', text_2: 'text-grey-1', text_3: 'text-grey-2', text_4: 'text-grey-3', main_skin: 'skin skin-dark skin-transparent' },
            { title: 'Tim vs Datroi', main_bg: 'tim-vs-datroi', text_1: 'text-white', text_2: 'text-grey-1', text_3: 'text-grey-2', text_4: 'text-grey-3', main_skin: 'skin skin-dark skin-transparent' },
            { title: 'Hong vs Lanon', main_bg: 'hong-vs-lanon', text_1: 'text-white', text_2: 'text-grey-1', text_3: 'text-grey-2', text_4: 'text-grey-3', main_skin: 'skin skin-dark skin-transparent' },
            { title: 'Lot vs Phan', main_bg: 'lot-vs-phan', text_1: 'text-black', text_2: 'text-grey-4', text_3: 'text-grey-3', text_4: 'text-grey-2', main_skin: 'skin skin-light skin-transparent' },
            { title: 'Transparent - dark', main_bg: 'transparent', text_1: 'text-white', text_2: 'text-grey-1', text_3: 'text-grey-2', text_4: 'text-grey-3', main_skin: 'skin skin-dark skin-transparent' },
            { title: 'Transparent - light', main_bg: 'transparent', text_1: 'text-black', text_2: 'text-grey-4', text_3: 'text-grey-3', text_4: 'text-grey-2', main_skin: 'skin skin-light skin-transparent' },
            { title: 'White', main_bg: 'white', text_1: 'text-black', text_2: 'text-grey-4', text_3: 'text-grey-3', text_4: 'text-grey-2', main_skin: 'skin skin-light skin-white' },
            { title: 'White 1', main_bg: 'white-1', text_1: 'text-black', text_2: 'text-grey-4', text_3: 'text-grey-3', text_4: 'text-grey-2', main_skin: 'skin skin-light skin-white-1' },
            { title: 'White 2', main_bg: 'white-2', text_1: 'text-black', text_2: 'text-grey-4', text_3: 'text-grey-3', text_4: 'text-grey-2', main_skin: 'skin skin-light skin-white-2' },
            { title: 'Grey 1', main_bg: 'grey-1', text_1: 'text-black', text_2: 'text-grey-4', text_3: 'text-grey-3', text_4: 'text-grey-2', main_skin: 'skin skin-light skin-grey-1' },
            { title: 'Grey 2', main_bg: 'grey-2', text_1: 'text-black', text_2: 'text-grey-4', text_3: 'text-grey-3', text_4: 'text-grey-2', main_skin: 'skin skin-light skin-grey-2' },
            { title: 'Grey 3', main_bg: 'grey-3', text_1: 'text-black', text_2: 'text-grey-4', text_3: 'text-grey-3', text_4: 'text-grey-2', main_skin: 'skin skin-light skin-grey-3' },
            { title: 'Grey 4', main_bg: 'grey-4', text_1: 'text-black', text_2: 'text-grey-4', text_3: 'text-grey-3', text_4: 'text-grey-2', main_skin: 'skin skin-light skin-grey-4' },
            { title: 'Grey 5', main_bg: 'grey-5', text_1: 'text-black', text_2: 'text-grey-4', text_3: 'text-grey-3', text_4: 'text-grey-2', main_skin: 'skin skin-light skin-grey-5' },
            { title: 'Black', main_bg: 'black', text_1: 'text-white', text_2: 'text-grey-1', text_3: 'text-grey-2', text_4: 'text-grey-3', main_skin: 'skin skin-dark skin-black' },
            { title: 'Red', main_bg: 'red', text_1: 'text-white', text_2: 'text-grey-1', text_3: 'text-grey-2', text_4: 'text-grey-3', main_skin: 'skin skin-dark skin-red' },
            { title: 'Pink', main_bg: 'pink', text_1: 'text-white', text_2: 'text-grey-1', text_3: 'text-grey-2', text_4: 'text-grey-3', main_skin: 'skin skin-dark skin-pink' },
            { title: 'Purple', main_bg: 'purple', text_1: 'text-white', text_2: 'text-grey-1', text_3: 'text-grey-2', text_4: 'text-grey-3', main_skin: 'skin skin-dark skin-purple' },
            { title: 'Deep Purple', main_bg: 'd-purple', text_1: 'text-white', text_2: 'text-grey-1', text_3: 'text-grey-2', text_4: 'text-grey-3', main_skin: 'skin skin-dark skin-d-purple' },
            { title: 'Indigo', main_bg: 'indigo', text_1: 'text-white', text_2: 'text-grey-1', text_3: 'text-grey-2', text_4: 'text-grey-3', main_skin: 'skin skin-dark skin-indigo' },
            { title: 'Blue', main_bg: 'blue', text_1: 'text-white', text_2: 'text-grey-1', text_3: 'text-grey-2', text_4: 'text-grey-3', main_skin: 'skin skin-dark skin-blue' },
            { title: 'Light Blue', main_bg: 'l-blue', text_1: 'text-black', text_2: 'text-grey-4', text_3: 'text-grey-3', text_4: 'text-grey-2', main_skin: 'skin skin-light skin-l-blue' },
            { title: 'Cyan', main_bg: 'cyan', text_1: 'text-white', text_2: 'text-grey-1', text_3: 'text-grey-2', text_4: 'text-grey-3', main_skin: 'skin skin-dark skin-cyan' },
            { title: 'Teal', main_bg: 'teal', text_1: 'text-white', text_2: 'text-grey-1', text_3: 'text-grey-2', text_4: 'text-grey-3', main_skin: 'skin skin-dark skin-teal' },
            { title: 'Green', main_bg: 'green', text_1: 'text-white', text_2: 'text-grey-1', text_3: 'text-grey-2', text_4: 'text-grey-3', main_skin: 'skin skin-dark skin-green' },
            { title: 'Light Green', main_bg: 'l-green', text_1: 'text-black', text_2: 'text-grey-4', text_3: 'text-grey-3', text_4: 'text-grey-2', main_skin: 'skin skin-light skin-l-green' },
            { title: 'Lime', main_bg: 'lime', text_1: 'text-black', text_2: 'text-grey-4', text_3: 'text-grey-3', text_4: 'text-grey-2', main_skin: 'skin skin-light skin-lime' },
            { title: 'Yellow', main_bg: 'yellow', text_1: 'text-black', text_2: 'text-grey-4', text_3: 'text-grey-3', text_4: 'text-grey-2', main_skin: 'skin skin-light skin-yellow' },
            { title: 'Amber', main_bg: 'amber', text_1: 'text-black', text_2: 'text-grey-4', text_3: 'text-grey-3', text_4: 'text-grey-2', main_skin: 'skin skin-light skin-amber' },
            { title: 'Orange', main_bg: 'orange', text_1: 'text-white', text_2: 'text-grey-1', text_3: 'text-grey-2', text_4: 'text-grey-3', main_skin: 'skin skin-dark skin-orange' },
            { title: 'Deep Orange', main_bg: 'd-orange', text_1: 'text-white', text_2: 'text-grey-1', text_3: 'text-grey-2', text_4: 'text-grey-3', main_skin: 'skin skin-dark skin-d-orange' },
            { title: 'Brown', main_bg: 'brown', text_1: 'text-white', text_2: 'text-grey-1', text_3: 'text-grey-2', text_4: 'text-grey-3', main_skin: 'skin skin-dark skin-brown' },
            { title: 'Blue Grey', main_bg: 'blue-grey', text_1: 'text-white', text_2: 'text-grey-1', text_3: 'text-grey-2', text_4: 'text-grey-3', main_skin: 'skin skin-dark skin-blue-grey' },
            { title: 'Westmoreland County', main_bg: 'white', text_1: 'text-black', text_2: 'text-grey-4', text_3: 'text-grey-3', text_4: 'text-grey-2', main_skin: 'skin skin-wcf skin-brown' },
        ];
        this.settings = {
            dashboard_type: 1,
            skin: this.listSkins[38],
            menu_id: 'menu-basic'
        };
    }
    SettingsProvider.prototype.setDashboard = function (dashboard_type) {
        this.settings.dashboard_type = dashboard_type;
        return this.storage.set(STORAGE_KEY, this.settings);
    };
    SettingsProvider.prototype.getSkins = function () {
        return this.listSkins;
    };
    SettingsProvider.prototype.setSkin = function (skin) {
        this.settings.skin = skin;
        return this.storage.set(STORAGE_KEY, this.settings);
    };
    SettingsProvider.prototype.setMenu = function (menu_id) {
        this.settings.menu_id = menu_id;
        return this.storage.set(STORAGE_KEY, this.settings);
    };
    SettingsProvider.prototype.getSettings = function () {
        var _this = this;
        return this.storage.get(STORAGE_KEY).then(function (data) {
            if (!data || data == null) {
                console.log(_this.settings);
                return _this.settings;
            }
            return data;
        });
    };
    SettingsProvider.prototype.clearAll = function () {
        this.storage.clear();
    };
    SettingsProvider.prototype.getIndexOf = function (main_bg, result) {
        for (var i = 0; i < result.length; i++) {
            if (result[i].main_bg == main_bg) {
                return i;
            }
        }
        return -1;
    };
    SettingsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], SettingsProvider);
    return SettingsProvider;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the MenuProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
  */
var MenuProvider = (function () {
    function MenuProvider(http) {
        this.http = http;
        console.log('Hello MenuProvider Provider');
    }
    MenuProvider.prototype.getContent = function () {
        return [
            //  Westmoreland County Fair menu.
            {
                'title': 'OnePerRow',
                'group': [
                    {
                        'title': 'Daily Events',
                        'page': 'DailyEventsPage',
                        'icon': 'md-calendar'
                    },
                ]
            },
            {
                'title': 'TwoPerRow',
                'group': [
                    {
                        'title': 'Vendors',
                        'page': 'VendorsPage',
                        'icon': 'md-basket'
                    },
                    {
                        'title': 'Sponsors',
                        'page': 'SponsorsPage',
                        'icon': 'md-ribbon'
                    },
                    {
                        'title': 'Directions',
                        'page': 'DirectionsPage',
                        'icon': 'md-map'
                    },
                    {
                        'title': 'Buy Tickets',
                        'page': 'BuyTicketsPage',
                        'icon': 'md-pricetags'
                    },
                    {
                        'title': 'Facebook',
                        'page': 'FacebookPage',
                        'icon': 'logo-facebook'
                    },
                    {
                        'title': 'Instagram',
                        'page': 'InstagramPage',
                        'icon': 'logo-instagram'
                    },
                    {
                        'title': 'About',
                        'page': 'AboutPage',
                        'icon': 'md-information-circle'
                    },
                    {
                        'title': 'Contact',
                        'page': 'ContactUsPage',
                        'icon': 'md-mail'
                    },
                ]
            },
        ]; //end menu list
    }; //end getContent
    MenuProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], MenuProvider);
    return MenuProvider;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 154:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 154;

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../components/login/login-v1/login-v1.module": [
		395,
		57
	],
	"../components/login/login-v2/login-v2.module": [
		396,
		56
	],
	"../components/login/login-v3/login-v3.module": [
		397,
		55
	],
	"../components/login/login-v4/login-v4.module": [
		398,
		54
	],
	"../components/login/login-v5/login-v5.module": [
		399,
		53
	],
	"../components/login/login-v6/login-v6.module": [
		400,
		52
	],
	"../components/login/login-v7/login-v7.module": [
		401,
		51
	],
	"../components/register/success-signup/success-signup.module": [
		392,
		50
	],
	"../components/ui-elements/modal-basic/modal-basic.module": [
		391,
		49
	],
	"../components/ui-elements/modal-box/modal-box.module": [
		402,
		48
	],
	"../components/ui-elements/modal-menu/modal-menu.module": [
		403,
		47
	],
	"../components/ui-elements/modals/modals.module": [
		393,
		10
	],
	"../components/ui-elements/popover-main/popover-main.module": [
		404,
		46
	],
	"../components/ui-elements/popover/popover.module": [
		394,
		45
	],
	"../pages/about/about.module": [
		405,
		4
	],
	"../pages/buy-tickets/buy-tickets.module": [
		406,
		44
	],
	"../pages/coming-soon/coming-soon.module": [
		407,
		5
	],
	"../pages/contact-us/contact-us.module": [
		408,
		43
	],
	"../pages/daily-events/daily-events.module": [
		409,
		42
	],
	"../pages/directions/directions.module": [
		410,
		41
	],
	"../pages/fragment/fragment.module": [
		411,
		40
	],
	"../pages/gallery/gallery-modal/gallery-modal.module": [
		413,
		15
	],
	"../pages/gallery/gallery.module": [
		412,
		3
	],
	"../pages/home/home.module": [
		414,
		39
	],
	"../pages/profile/profile.module": [
		415,
		2
	],
	"../pages/ready-app/facebook/facebook-comment/facebook-comment.module": [
		416,
		38
	],
	"../pages/ready-app/facebook/facebook.module": [
		417,
		9
	],
	"../pages/ready-app/instagram/instagram-comment/instagram-comment.module": [
		418,
		37
	],
	"../pages/ready-app/instagram/instagram.module": [
		419,
		36
	],
	"../pages/ready-app/radio/radio.module": [
		420,
		35
	],
	"../pages/ready-app/rss/rss-favorite/rss-favorite.module": [
		421,
		34
	],
	"../pages/ready-app/rss/rss-home/rss-home.module": [
		422,
		33
	],
	"../pages/ready-app/rss/rss.module": [
		423,
		32
	],
	"../pages/ready-app/twitter/twitter.module": [
		424,
		31
	],
	"../pages/ready-app/unsplash/unsplash-category-detail/unsplash-category-detail.module": [
		425,
		14
	],
	"../pages/ready-app/unsplash/unsplash-collection/unsplash-collection.module": [
		426,
		30
	],
	"../pages/ready-app/unsplash/unsplash-favorite/unsplash-favorite.module": [
		427,
		13
	],
	"../pages/ready-app/unsplash/unsplash-home/unsplash-home.module": [
		428,
		12
	],
	"../pages/ready-app/unsplash/unsplash-modal-photo/unsplash-modal-photo.module": [
		429,
		29
	],
	"../pages/ready-app/unsplash/unsplash-search/unsplash-search.module": [
		430,
		11
	],
	"../pages/ready-app/unsplash/unsplash.module": [
		431,
		28
	],
	"../pages/ready-app/wordpress/wordpress-category/wordpress-category.module": [
		432,
		27
	],
	"../pages/ready-app/wordpress/wordpress-detail/wordpress-detail.module": [
		433,
		26
	],
	"../pages/ready-app/wordpress/wordpress-favorite/wordpress-favorite.module": [
		434,
		25
	],
	"../pages/ready-app/wordpress/wordpress-home/wordpress-home.module": [
		435,
		24
	],
	"../pages/ready-app/wordpress/wordpress-posts/wordpress-posts.module": [
		436,
		23
	],
	"../pages/ready-app/wordpress/wordpress-search/wordpress-search.module": [
		437,
		22
	],
	"../pages/ready-app/wordpress/wordpress.module": [
		438,
		21
	],
	"../pages/ready-app/youtube/youtube-detail/youtube-detail.module": [
		439,
		8
	],
	"../pages/ready-app/youtube/youtube-favorite/youtube-favorite.module": [
		440,
		7
	],
	"../pages/ready-app/youtube/youtube.module": [
		441,
		6
	],
	"../pages/register/register.module": [
		442,
		0
	],
	"../pages/settings/setting-color/setting-color.module": [
		443,
		20
	],
	"../pages/settings/setting-dashboard/setting-dashboard.module": [
		444,
		19
	],
	"../pages/settings/setting-sidemenu/setting-sidemenu.module": [
		445,
		18
	],
	"../pages/sponsors/sponsors.module": [
		446,
		17
	],
	"../pages/ui-elements/ui-elements.module": [
		447,
		1
	],
	"../pages/vendors/vendors.module": [
		448,
		16
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 195;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnsplashService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var STORAGE_KEY = "unsplash_favorites";
var config = {
    'api_link': 'https://api.unsplash.com/',
    'client_id': '5d36fcf2215455d7f96a5e8b74878eea0d47f040ee151c9990c6da52f593f3b2'
};
/*
  Generated class for the UnsplashServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
  */
var UnsplashService = (function () {
    function UnsplashService(http, storage, iab, socialSharing) {
        this.http = http;
        this.storage = storage;
        this.iab = iab;
        this.socialSharing = socialSharing;
    }
    UnsplashService.prototype.getCollections = function (page, per_page) {
        return this.http.get(config.api_link + 'collections?page=' + page + '&per_page=' + per_page + '&client_id=' + config.client_id);
    };
    UnsplashService.prototype.getPhotos = function (page, per_page) {
        return this.http.get(config.api_link + 'photos?page=' + page + '&per_page=' + per_page + '&client_id=' + config.client_id);
    };
    UnsplashService.prototype.searchPhotos = function (query, page, per_page) {
        return this.http.get(config.api_link + 'search/photos?query=' + query + '&page=' + page + '&per_page=' + per_page + '&client_id=' + config.client_id);
    };
    UnsplashService.prototype.getPhotosByCollection = function (collectionId, page, per_page) {
        return this.http.get(config.api_link + '/collections/' + collectionId + '/photos?page=' + page + '&per_page=' + per_page + '&client_id=' + config.client_id);
    };
    UnsplashService.prototype.isFavorite = function (item) {
        var _this = this;
        return this.getAllFavorites().then(function (result) {
            if (result) {
                if (_this.getIndexOf(item.id, result) != -1) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        });
    };
    UnsplashService.prototype.favorite = function (item) {
        var _this = this;
        return this.getAllFavorites().then(function (result) {
            if (result) {
                result.push(item);
                return _this.storage.set(STORAGE_KEY, result);
            }
            else {
                return _this.storage.set(STORAGE_KEY, [item]);
            }
        });
    };
    UnsplashService.prototype.unFavorite = function (item) {
        var _this = this;
        return this.getAllFavorites().then(function (result) {
            if (result) {
                var index = _this.getIndexOf(item.id, result);
                result.splice(index, 1);
                return _this.storage.set(STORAGE_KEY, result);
            }
        });
    };
    UnsplashService.prototype.getAllFavorites = function () {
        return this.storage.get(STORAGE_KEY);
    };
    UnsplashService.prototype.getIndexOf = function (id, result) {
        for (var i = 0; i < result.length; i++) {
            if (result[i].id == id) {
                return i;
            }
        }
        return -1;
    };
    UnsplashService.prototype.clearAllFavorite = function () {
        this.storage.remove(STORAGE_KEY);
    };
    //action on click event
    UnsplashService.prototype.doFavorite = function (item) {
        var _this = this;
        this.isFavorite(item).then(function (result) {
            if (result == false) {
                item.isFavorite = true;
                _this.favorite(item);
            }
            else {
                item.isFavorite = false;
                _this.unFavorite(item);
            }
        });
    };
    UnsplashService.prototype.doShare = function (item) {
        this.socialSharing.share(item.title, item.links.html, null, item.link);
    };
    UnsplashService.prototype.doOpen = function (item) {
        var browser = this.iab.create(item.links.html);
    };
    UnsplashService.prototype.doDownload = function (item) {
    };
    UnsplashService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */]])
    ], UnsplashService);
    return UnsplashService;
}());

//# sourceMappingURL=unsplash-service.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordpressService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var STORAGE_KEY = "wp_favorites";
var config = {
    api_link: 'http://wp.lrandomdev.com/wp-json/wp/v2/'
};
/*

  Generated class for the WordpressProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
  */
var WordpressService = (function () {
    function WordpressService(http, storage, iab, socialSharing) {
        this.http = http;
        this.storage = storage;
        this.iab = iab;
        this.socialSharing = socialSharing;
    }
    WordpressService.prototype.getPosts = function (page, per_page, search) {
        if (search === void 0) { search = ''; }
        if (search != '') {
            return this.http.get(config.api_link + 'posts?page=' + page + '&per_page=' + per_page + '&search=' + search);
        }
        return this.http.get(config.api_link + 'posts?page=' + page + '&per_page=' + per_page);
    };
    WordpressService.prototype.getPostsByCategories = function (page, per_page, categories) {
        return this.http.get(config.api_link + 'posts?page=' + page + '&per_page=' + per_page + '&categories=' + categories);
    };
    WordpressService.prototype.getPost = function (id) {
        return this.http.get(config.api_link + 'posts/' + id);
    };
    WordpressService.prototype.getCategorys = function (page, per_page) {
        return this.http.get(config.api_link + 'categories?page=' + page + '&per_page=' + per_page);
    };
    WordpressService.prototype.getMedia = function (id) {
        return this.http.get(config.api_link + 'media/' + id);
    };
    WordpressService.prototype.getComments = function (page, per_page, post_id) {
        if (post_id === void 0) { post_id = null; }
        return this.http.get(config.api_link + 'comments?page=' + page + '&per_page=' + per_page + '&post=' + post_id);
    };
    //favorites
    WordpressService.prototype.isFavorite = function (item) {
        var _this = this;
        return this.getAllFavorites().then(function (result) {
            if (result) {
                if (_this.getIndexOf(item.id, result) != -1) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        });
    };
    WordpressService.prototype.favorite = function (item) {
        var _this = this;
        return this.getAllFavorites().then(function (result) {
            if (result) {
                result.push(item);
                return _this.storage.set(STORAGE_KEY, result);
            }
            else {
                return _this.storage.set(STORAGE_KEY, [item]);
            }
        });
    };
    WordpressService.prototype.unFavorite = function (item) {
        var _this = this;
        return this.getAllFavorites().then(function (result) {
            if (result) {
                var index = _this.getIndexOf(item.id, result);
                result.splice(index, 1);
                return _this.storage.set(STORAGE_KEY, result);
            }
        });
    };
    WordpressService.prototype.getAllFavorites = function () {
        return this.storage.get(STORAGE_KEY);
    };
    WordpressService.prototype.getIndexOf = function (id, result) {
        for (var i = 0; i < result.length; i++) {
            if (result[i].id == id) {
                return i;
            }
        }
        return -1;
    };
    WordpressService.prototype.clearAllFavorite = function () {
        this.storage.remove(STORAGE_KEY);
    };
    //action on click event
    WordpressService.prototype.doFavorite = function (item) {
        var _this = this;
        this.isFavorite(item).then(function (result) {
            if (result == false) {
                item.isFavorite = true;
                _this.favorite(item);
            }
            else {
                item.isFavorite = false;
                _this.unFavorite(item);
            }
        });
    };
    WordpressService.prototype.doReadMore = function (navCtrl, item) {
        navCtrl.push('WordpressDetailPage', { id: item.id });
    };
    WordpressService.prototype.doShare = function (item) {
        this.socialSharing.share(item.name, item.content, null, item.link);
    };
    WordpressService.prototype.goToPosts = function (navCtrl, item) {
        navCtrl.push('WordpressPostsPage', { id: item.id });
    };
    WordpressService.prototype.doOpen = function (item) {
        var browser = this.iab.create(item.link);
    };
    WordpressService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */]])
    ], WordpressService);
    return WordpressService;
}());

//# sourceMappingURL=wordpress.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RssService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_xml2js__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_xml2js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_xml2js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var STORAGE_KEY = "rss_favorites";
/*
  Generated class for the RssServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
  */
var RssService = (function () {
    function RssService(http, iab, socialSharing, storage) {
        this.http = http;
        this.iab = iab;
        this.socialSharing = socialSharing;
        this.storage = storage;
        this.category = [
            {
                'title': 'Events',
                'link': 'https://westmorelandfair.com/feed/?post_type=ai1ec_event'
            },
            {
                'title': 'Arts',
                'link': 'http://rss.nytimes.com/services/xml/rss/nyt/Arts.xml'
            },
            {
                'title': 'Health',
                'link': 'https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/section/well/rss.xml'
            },
            {
                'title': 'Travel',
                'link': 'https://intransit.blogs.nytimes.com/feed'
            }
        ];
    }
    RssService.prototype.getCategory = function (data) {
        return new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
            observer.next(data);
            observer.complete();
        });
    };
    RssService.prototype.getPosts = function (link) {
        if (link === void 0) { link = null; }
        return this.http.get(link, { responseType: "text" });
    };
    RssService.prototype.convertToJson = function (data) {
        var res;
        __WEBPACK_IMPORTED_MODULE_2_xml2js___default.a.parseString(data, { explicitArray: false }, function (error, result) {
            if (error) {
                throw new Error(error);
            }
            else {
                res = result;
            }
        });
        return res;
    };
    RssService.prototype.isFavorite = function (item) {
        var _this = this;
        return this.getAllFavorites().then(function (result) {
            if (result) {
                if (_this.getIndexOf(item.link, result) != -1) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        });
    };
    RssService.prototype.favorite = function (item) {
        var _this = this;
        return this.getAllFavorites().then(function (result) {
            if (result) {
                result.push(item);
                return _this.storage.set(STORAGE_KEY, result);
            }
            else {
                return _this.storage.set(STORAGE_KEY, [item]);
            }
        });
    };
    RssService.prototype.unFavorite = function (item) {
        var _this = this;
        return this.getAllFavorites().then(function (result) {
            if (result) {
                var index = _this.getIndexOf(item.link, result);
                result.splice(index, 1);
                return _this.storage.set(STORAGE_KEY, result);
            }
        });
    };
    RssService.prototype.getAllFavorites = function () {
        return this.storage.get(STORAGE_KEY);
    };
    RssService.prototype.getIndexOf = function (link, result) {
        for (var i = 0; i < result.length; i++) {
            if (result[i].link == link) {
                return i;
            }
        }
        return -1;
    };
    RssService.prototype.clearAllFavorite = function () {
        this.storage.remove(STORAGE_KEY);
    };
    //action on click event
    RssService.prototype.doFavorite = function (item) {
        var _this = this;
        this.isFavorite(item).then(function (result) {
            if (result == false) {
                item.isFavorite = true;
                _this.favorite(item);
            }
            else {
                item.isFavorite = false;
                _this.unFavorite(item);
            }
        });
    };
    RssService.prototype.goToHomePage = function (navCtrl, item) {
        navCtrl.push('RssHomePage', {
            'item': item
        });
    };
    RssService.prototype.doOpen = function (item) {
        this.iab.create(item.link);
    };
    RssService.prototype.doShare = function (item) {
        this.socialSharing.share(item.title, item.description, null, item.link);
    };
    RssService.prototype.goToFavoritePage = function (navCtrl) {
        navCtrl.push('RssFavoritePage');
    };
    RssService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], RssService);
    return RssService;
}());

//# sourceMappingURL=rss-service.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the LoadingServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var LoadingService = (function () {
    function LoadingService(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
    }
    LoadingService.prototype.show = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Loading...'
        });
        this.loading.present();
    };
    LoadingService.prototype.dismiss = function () {
        this.loading.dismiss();
    };
    LoadingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["i" /* LoadingController */]])
    ], LoadingService);
    return LoadingService;
}());

//# sourceMappingURL=loading-service.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastService; });
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


/*
  Generated class for the ToastServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ToastService = (function () {
    function ToastService(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    ToastService.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            'message': message,
            'duration': 100
        });
        toast.present();
    };
    ToastService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */]])
    ], ToastService);
    return ToastService;
}());

//# sourceMappingURL=toast-service.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacebookService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the FacebookProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var config = {
    'graph_link': 'https://graph.facebook.com/v2.9/',
    'app_access_token': '1552011421763113|-A86UxDz911AEhnyrWwJoYtFdRI',
    'page_id': '123399517348',
    'limit_post': 10,
    'limit_comment': 20
};
var FacebookService = (function () {
    function FacebookService(http, iab, socialSharing) {
        this.http = http;
        this.iab = iab;
        this.socialSharing = socialSharing;
    }
    FacebookService.prototype.getPage = function () {
        return this.http.get(config.graph_link + config.page_id + '?fields=picture,name&access_token=' + config.app_access_token);
    };
    FacebookService.prototype.getPosts = function (next) {
        if (next == null) {
            return this.http.get(config.graph_link + config.page_id + '/feed?access_token=' + config.app_access_token + '&fields=full_picture,picture,name,message,link,type,updated_time,likes.summary(true),comments.summary(true)&limit=' + config.limit_post);
        }
        else {
            return this.http.get(next);
        }
    };
    FacebookService.prototype.getComments = function (next, item) {
        if (next == null) {
            return this.http.get(config.graph_link + item.id + '/comments?access_token=' + config.app_access_token + '&limit=' + config.limit_comment + '&fields=message');
        }
        else {
            return this.http.get(next);
        }
    };
    FacebookService.prototype.goToComment = function (item, navCtrl) {
        navCtrl.push('FacebookCommentPage', {
            'item': item
        });
    };
    FacebookService.prototype.doOpen = function (item) {
        var browser = this.iab.create(item.link);
    };
    FacebookService.prototype.doShare = function (item) {
        this.socialSharing.share(item.name, item.message, null, item.link);
    };
    FacebookService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */]])
    ], FacebookService);
    return FacebookService;
}());

//# sourceMappingURL=facebook.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstagramService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the InstagramProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
  */
var config = {
    'api_link': 'https://api.instagram.com/v1/',
    'access_token': '355600265.1677ed0.fc760e8d0cfa49198ffbfd29a72acdc4',
    'limit_post': 10
};
var InstagramService = (function () {
    function InstagramService(http, iab, socialSharing) {
        this.http = http;
        this.iab = iab;
        this.socialSharing = socialSharing;
    }
    InstagramService.prototype.getPosts = function (next) {
        if (next == '' && next != null) {
            return this.http.get(config.api_link + 'users/self/media/recent?access_token=' + config.access_token + '&count=' + config.limit_post);
        }
        else {
            return this.http.get(next);
        }
    };
    InstagramService.prototype.getComments = function (item) {
        return this.http.get(config.api_link + 'media/' + item.id + '/comments/?access_token=' + config.access_token);
    };
    InstagramService.prototype.goToComment = function (item, navCtrl) {
        navCtrl.push('InstagramCommentPage', {
            'item': item
        });
    };
    InstagramService.prototype.doOpen = function (item) {
        var browser = this.iab.create(item.link);
    };
    InstagramService.prototype.doShare = function (item) {
        this.socialSharing.share(item.name, item.message, null, item.link);
    };
    InstagramService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */]])
    ], InstagramService);
    return InstagramService;
}());

//# sourceMappingURL=instagram.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var STORAGE_KEY = "youtube_favorites";
var config = {
    'api_key': 'AIzaSyBkIDvXVRC_cz5OesRYQzMcw5RG2E5hYVk',
    'api_link': 'https://www.googleapis.com/youtube/v3/search?',
    'channel_id': 'UCAL3JXZSzSm8AlZyD3nQdBA',
    'limit_post': 20
};
/*
  Generated class for the YoutubeServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
  */
var YoutubeService = (function () {
    function YoutubeService(http, iab, socialSharing, storage) {
        this.http = http;
        this.iab = iab;
        this.socialSharing = socialSharing;
        this.storage = storage;
    }
    YoutubeService.prototype.getVideos = function (next) {
        if (next == null) {
            return this.http.get(config.api_link
                + 'key=' + config.api_key
                + '&channelId='
                + config.channel_id
                + '&part=snippet,id&order=date&maxResults=' + config.limit_post);
        }
        else {
            return this.http.get(config.api_link
                + 'key=' + config.api_key
                + '&channelId='
                + config.channel_id
                + '&part=snippet,id&order=date&maxResults=' + config.limit_post + '&pageToken=' + next);
        }
    };
    YoutubeService.prototype.isFavorite = function (item) {
        var _this = this;
        return this.getAllFavorites().then(function (result) {
            if (result) {
                if (_this.getIndexOf(item.id.videoId, result) != -1) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        });
    };
    YoutubeService.prototype.favorite = function (item) {
        var _this = this;
        return this.getAllFavorites().then(function (result) {
            if (result) {
                result.push(item);
                return _this.storage.set(STORAGE_KEY, result);
            }
            else {
                return _this.storage.set(STORAGE_KEY, [item]);
            }
        });
    };
    YoutubeService.prototype.unFavorite = function (item) {
        var _this = this;
        return this.getAllFavorites().then(function (result) {
            if (result) {
                var index = _this.getIndexOf(item.id.videoId, result);
                result.splice(index, 1);
                return _this.storage.set(STORAGE_KEY, result);
            }
        });
    };
    YoutubeService.prototype.getAllFavorites = function () {
        return this.storage.get(STORAGE_KEY);
    };
    YoutubeService.prototype.getIndexOf = function (id, result) {
        for (var i = 0; i < result.length; i++) {
            if (result[i].id.videoId == id) {
                return i;
            }
        }
        return -1;
    };
    YoutubeService.prototype.clearAllFavorite = function () {
        this.storage.remove(STORAGE_KEY);
    };
    //action on click event
    YoutubeService.prototype.doFavorite = function (item) {
        var _this = this;
        this.isFavorite(item).then(function (result) {
            if (result == false) {
                item.isFavorite = true;
                _this.favorite(item);
            }
            else {
                item.isFavorite = false;
                _this.unFavorite(item);
            }
        });
    };
    YoutubeService.prototype.doReadMore = function (item, navCtrl) {
        navCtrl.push('YoutubeDetailPage', { item: item });
    };
    YoutubeService.prototype.doShare = function (item) {
        this.socialSharing.share(item.snippet.title, item.snippet.description, null, 'https://www.youtube.com/watch?v=' + item.id.videoId);
    };
    YoutubeService.prototype.doOpen = function (item, navCtrl) {
        var browser = this.iab.create('https://www.youtube.com/watch?v=' + item.id.videoId);
    };
    YoutubeService.prototype.goToFavoritePage = function (navCtrl) {
        navCtrl.push('YoutubeFavoritePage');
    };
    YoutubeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], YoutubeService);
    return YoutubeService;
}());

//# sourceMappingURL=youtube-service.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TwitterProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_twitter__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the TwitterProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
  */
var config = {
    url: 'https://api.twitter.com/1.1/statuses/home_timeline.json',
    consumerKey: 'g6SFahLWKtA3zgYDKbpxQywda',
    consumerSecret: 'cCqMOzPPSvxG9YqEXf0ceMS1UAHghNs1tm3Gf1NHyS6IcKJVqr',
    token: '273344994-yDHtIyy9r64dVDtvo4EaZMxF6jh2itCTqlKVICn3',
    secret: 'NiVBWOA3asQlavbZwASIqnZlqzf9xgv1AahrRoeKP0y63'
};
var TwitterProvider = (function () {
    function TwitterProvider(http, iab, twitterSerivce, socialSharing) {
        this.http = http;
        this.iab = iab;
        this.twitterSerivce = twitterSerivce;
        this.socialSharing = socialSharing;
    }
    TwitterProvider.prototype.getTweets = function (count, max_id) {
        if (max_id === void 0) { max_id = null; }
        if (max_id == null) {
            return this.twitterSerivce.get(config.url, {
                count: count
            }, {
                consumerKey: config.consumerKey,
                consumerSecret: config.consumerSecret
            }, {
                token: config.token,
                tokenSecret: config.secret
            });
        }
        else {
            return this.twitterSerivce.get(config.url, {
                count: count,
                max_id: max_id
            }, {
                consumerKey: config.consumerKey,
                consumerSecret: config.consumerSecret
            }, {
                token: config.token,
                tokenSecret: config.secret
            });
        }
        //end if
    };
    TwitterProvider.prototype.doOpen = function (item) {
        var browser = this.iab.create('https://twitter.com/' + item.user.id + '/status/' + item.id_str);
    };
    TwitterProvider.prototype.doShare = function (item) {
        this.socialSharing.share(item.user.name, item.text, null, 'https://twitter.com/' + item.user.id + '/status/' + item.id_str);
    };
    TwitterProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_twitter__["a" /* TwitterService */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__["a" /* SocialSharing */]])
    ], TwitterProvider);
    return TwitterProvider;
}());

//# sourceMappingURL=twitter.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(284);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_social_sharing__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_youtube_video_player__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_photo_library__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_call_number__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_sms__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_email_composer__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_admob_free__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular2_masonry__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular2_masonry___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_angular2_masonry__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ngx_translate_core__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ngx_translate_http_loader__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_firebase__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_menu_menu__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_toast_service_toast_service__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_loading_service_loading_service__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_helper_helper__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ng2_twitter__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_facebook_facebook__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_instagram_instagram__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_twitter_twitter__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_unsplash_service_unsplash_service__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_wordpress_wordpress__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_rss_service_rss_service__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_youtube_service_youtube_service__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_settings_settings__ = __webpack_require__(140);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















/*translate loader*/


/*end translate loader*/
function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_20__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}

/*Utils Services*/




/*End Utils Services*/
/**ready app service**/
//twitter

//facebook

//instagram

//twitter

//unsplash 

//wordpress 

//rss service

//youtube


/**end ready app service **/
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../components/login/login-v1/login-v1.module#LoginV1Module', name: 'LoginV1Component', segment: 'login-v1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/login/login-v2/login-v2.module#LoginV2Module', name: 'LoginV2Component', segment: 'login-v2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/login/login-v3/login-v3.module#LoginV3Module', name: 'LoginV3Component', segment: 'login-v3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/login/login-v4/login-v4.module#LoginV4Module', name: 'LoginV4Component', segment: 'login-v4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/login/login-v5/login-v5.module#LoginV5Module', name: 'LoginV5Component', segment: 'login-v5', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/login/login-v6/login-v6.module#LoginV6Module', name: 'LoginV6Component', segment: 'login-v6', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/login/login-v7/login-v7.module#LoginV7Module', name: 'LoginV7Component', segment: 'login-v7', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/register/success-signup/success-signup.module#SuccessSignupModule', name: 'SuccessSignupComponent', segment: 'success-signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/ui-elements/modal-basic/modal-basic.module#ModalBasicModule', name: 'ModalBasicComponent', segment: 'modal-basic', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/ui-elements/modal-box/modal-box.module#ModalBoxModule', name: 'ModalBoxComponent', segment: 'modal-box', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/ui-elements/modal-menu/modal-menu.module#ModalMenuModule', name: 'ModalMenuComponent', segment: 'modal-menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/ui-elements/modals/modals.module#ModalsModule', name: 'ModalsComponent', segment: 'modals', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/ui-elements/popover-main/popover-main.module#PopoverMainModule', name: 'PopoverMainComponent', segment: 'popover-main', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/ui-elements/popover/popover.module#PopoverModule', name: 'PopoverComponent', segment: 'popover', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/buy-tickets/buy-tickets.module#BuyTicketsPageModule', name: 'BuyTicketsPage', segment: 'buy-tickets', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/coming-soon/coming-soon.module#ComingSoonPageModule', name: 'ComingSoonPage', segment: 'coming-soon', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact-us/contact-us.module#ContactUsPageModule', name: 'ContactUsPage', segment: 'contact-us', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/daily-events/daily-events.module#DailyEventsPageModule', name: 'DailyEventsPage', segment: 'daily-events', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/directions/directions.module#DirectionsPageModule', name: 'DirectionsPage', segment: 'directions', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/fragment/fragment.module#FragmentPageModule', name: 'FragmentPage', segment: 'fragment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/gallery/gallery.module#GalleryPageModule', name: 'GalleryPage', segment: 'gallery', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/gallery/gallery-modal/gallery-modal.module#GalleryModalPageModule', name: 'GalleryModalPage', segment: 'gallery-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ready-app/facebook/facebook-comment/facebook-comment.module#FacebookCommentPageModule', name: 'FacebookCommentPage', segment: 'facebook-comment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ready-app/facebook/facebook.module#FacebookPageModule', name: 'FacebookPage', segment: 'facebook', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ready-app/instagram/instagram-comment/instagram-comment.module#InstagramCommentPageModule', name: 'InstagramCommentPage', segment: 'instagram-comment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ready-app/instagram/instagram.module#InstagramPageModule', name: 'InstagramPage', segment: 'instagram', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ready-app/radio/radio.module#RadioPageModule', name: 'RadioPage', segment: 'radio', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ready-app/rss/rss-favorite/rss-favorite.module#RssFavoritePageModule', name: 'RssFavoritePage', segment: 'rss-favorite', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ready-app/rss/rss-home/rss-home.module#RssHomePageModule', name: 'RssHomePage', segment: 'rss-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ready-app/rss/rss.module#RssPageModule', name: 'RssPage', segment: 'rss', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ready-app/twitter/twitter.module#TwitterPageModule', name: 'TwitterPage', segment: 'twitter', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ready-app/unsplash/unsplash-category-detail/unsplash-category-detail.module#UnsplashCategoryDetailPageModule', name: 'UnsplashCategoryDetailPage', segment: 'unsplash-category-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ready-app/unsplash/unsplash-collection/unsplash-collection.module#UnsplashCollectionPageModule', name: 'UnsplashCollectionPage', segment: 'unsplash-collection', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ready-app/unsplash/unsplash-favorite/unsplash-favorite.module#UnsplashFavoriestPageModule', name: 'UnsplashFavoritePage', segment: 'unsplash-favorite', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ready-app/unsplash/unsplash-home/unsplash-home.module#UnsplashHomePageModule', name: 'UnsplashHomePage', segment: 'unsplash-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ready-app/unsplash/unsplash-modal-photo/unsplash-modal-photo.module#UnsplashModalPhotoPageModule', name: 'UnsplashModalPhotoPage', segment: 'unsplash-modal-photo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ready-app/unsplash/unsplash-search/unsplash-search.module#UnsplashSearchPageModule', name: 'UnsplashSearchPage', segment: 'unsplash-search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ready-app/unsplash/unsplash.module#UnsplashPageModule', name: 'UnsplashPage', segment: 'unsplash', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ready-app/wordpress/wordpress-category/wordpress-category.module#WordpressCategoryPageModule', name: 'WordpressCategoryPage', segment: 'wordpress-category', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ready-app/wordpress/wordpress-detail/wordpress-detail.module#WordpressDetailPageModule', name: 'WordpressDetailPage', segment: 'wordpress-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ready-app/wordpress/wordpress-favorite/wordpress-favorite.module#WordpressFavoritePageModule', name: 'WordpressFavoritePage', segment: 'wordpress-favorite', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ready-app/wordpress/wordpress-home/wordpress-home.module#WordpressHomePageModule', name: 'WordpressHomePage', segment: 'wordpress-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ready-app/wordpress/wordpress-posts/wordpress-posts.module#WordpressPostsPageModule', name: 'WordpressPostsPage', segment: 'wordpress-posts', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ready-app/wordpress/wordpress-search/wordpress-search.module#WordpressSearchPageModule', name: 'WordpressSearchPage', segment: 'wordpress-search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ready-app/wordpress/wordpress.module#WordpressPageModule', name: 'WordpressPage', segment: 'wordpress', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ready-app/youtube/youtube-detail/youtube-detail.module#YoutubeDetailPageModule', name: 'YoutubeDetailPage', segment: 'youtube-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ready-app/youtube/youtube-favorite/youtube-favorite.module#YoutubeFavoritePageModule', name: 'YoutubeFavoritePage', segment: 'youtube-favorite', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ready-app/youtube/youtube.module#YoutubePageModule', name: 'YoutubePage', segment: 'youtube', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/setting-color/setting-color.module#SettingColorPageModule', name: 'SettingColorPage', segment: 'setting-color', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/setting-dashboard/setting-dashboard.module#SettingDashboardPageModule', name: 'SettingDashboardPage', segment: 'setting-dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/setting-sidemenu/setting-sidemenu.module#SettingSidemenuPageModule', name: 'SettingSidemenuPage', segment: 'setting-sidemenu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sponsors/sponsors.module#SponsorsPageModule', name: 'SponsorsPage', segment: 'sponsors', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ui-elements/ui-elements.module#UiElementsPageModule', name: 'UiElementsPage', segment: 'ui-elements', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vendors/vendors.module#VendorsPageModule', name: 'VendorsPage', segment: 'vendors', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_19__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_19__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_18_angular2_masonry__["MasonryModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_photo_library__["a" /* PhotoLibrary */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_sms__["a" /* SMS */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_firebase__["a" /* Firebase */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_email_composer__["a" /* EmailComposer */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_admob_free__["a" /* AdMobFree */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_22__providers_menu_menu__["a" /* MenuProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_toast_service_toast_service__["a" /* ToastService */],
                __WEBPACK_IMPORTED_MODULE_25__providers_helper_helper__["a" /* HelperProvider */],
                __WEBPACK_IMPORTED_MODULE_24__providers_loading_service_loading_service__["a" /* LoadingService */],
                __WEBPACK_IMPORTED_MODULE_27__providers_facebook_facebook__["a" /* FacebookService */],
                __WEBPACK_IMPORTED_MODULE_28__providers_instagram_instagram__["a" /* InstagramService */],
                __WEBPACK_IMPORTED_MODULE_26_ng2_twitter__["a" /* TwitterService */],
                __WEBPACK_IMPORTED_MODULE_29__providers_twitter_twitter__["a" /* TwitterProvider */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_youtube_video_player__["a" /* YoutubeVideoPlayer */],
                __WEBPACK_IMPORTED_MODULE_33__providers_youtube_service_youtube_service__["a" /* YoutubeService */],
                __WEBPACK_IMPORTED_MODULE_32__providers_rss_service_rss_service__["a" /* RssService */],
                __WEBPACK_IMPORTED_MODULE_30__providers_unsplash_service_unsplash_service__["a" /* UnsplashService */],
                __WEBPACK_IMPORTED_MODULE_31__providers_wordpress_wordpress__["a" /* WordpressService */],
                __WEBPACK_IMPORTED_MODULE_34__providers_settings_settings__["a" /* SettingsProvider */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 339:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 341:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_menu_menu__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_settings_settings__ = __webpack_require__(140);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, events, storage, menuProvider, app, settingsProvider) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.events = events;
        this.storage = storage;
        this.menuProvider = menuProvider;
        this.app = app;
        this.settingsProvider = settingsProvider;
        this.rootPage = 'HomePage';
        this.settings = null;
        this.initializeApp();
        this.pages = this.menuProvider.getContent();
        this.settingsProvider.getSettings().then(function (data) {
            _this.settings = data;
            console.log(_this.settings);
        });
        this.events.subscribe('settings_change: change', function (data) {
            _this.settings = data;
        });
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (menuItem) {
        var _this = this;
        if (menuItem.subPage != undefined) {
            this.nav.popToRoot().then(function () {
                _this.nav.setRoot(menuItem.page, { 'subPage': menuItem.subPage, 'pages': menuItem.pages });
            });
        }
        else {
            if (menuItem.layout != undefined && menuItem.layout == 'tabs') {
                this.nav.popToRoot().then(function () {
                    _this.nav.push(menuItem.page);
                });
            }
            else {
                this.nav.popToRoot().then(function () {
                    _this.nav.setRoot(menuItem.page);
                });
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/app/app.html"*/'<div *ngIf="settings!=null">\n\n<ion-split-pane when="md">\n  <!-- <ion-menu class="{{settings.skin.main_skin}}" [content]="content" id="menu-material">\n    <ion-content class="{{settings.skin.main_bg}}">\n      <div class="info-user mgb-30 pdt-5 pdb-5 pdb-10">\n        <div class="bg-img"><img src="assets/img/bg-material.jpg" alt=""></div>\n        <div class="wrapper-avt pd-10">\n          <div class="main-avt mg-5 pull-left shadow-1"><img src="assets/img/avt1.jpg" alt=""></div>\n          <div class="sub-avt mg-5 pull-right shadow-1"><img src="assets/img/avt2.jpg" alt=""></div>\n          <div class="sub-avt mg-5 pull-right shadow-1"><img src="assets/img/avt3.jpg" alt=""></div>\n        </div>\n      </div>\n\n      <ion-list no-lines class="lst-menu">\n        <span *ngFor="let item of pages" class="{{settings.skin.text_1}}">\n          <ion-item class="transparent uppercase mgt-20 fs-14 fw-400 spacing-1">\n            {{item.title}}\n          </ion-item>\n          <button menuClose="menu-material" ion-item icon-left *ngFor="let sub of item.group" class="transparent fw-500" (click)="openPage(sub)">\n            <ion-icon name="{{sub.icon}}" item-left></ion-icon>\n            {{sub.title}}\n          </button>\n        </span>\n\n        <!-- <span class="{{settings.skin.text_1}}">\n          <ion-item class="transparent uppercase mgt-20 fs-14 fw-400 spacing-1">\n            Level Menu\n          </ion-item>\n          <ion-list class="tree mgb-0">\n            <ion-item icon-left class="btn-open-more transparent">\n              <ion-label ion-left><ion-icon class="mgr-15 pdr-5 text-center" name="ios-stats"></ion-icon>Level Collapse</ion-label>\n              <ion-checkbox [(ngModel)]="show_drop" class="hidden-checkbox" color="dark"></ion-checkbox>\n            </ion-item>\n\n            <ion-row class="dropdown" [ngClass]="{\'active\' : (show_drop == true)}">\n              <button ion-item small class="transparent fs-14">\n                <ion-icon name="md-radio-button-off" class="fs-8 text-center pdr-5 mgl-35 mgr-5"></ion-icon>\n                Drink\n              </button>\n              <button ion-item small class="transparent fs-14">\n                <ion-icon name="md-radio-button-off" class="fs-8 text-center pdr-5 mgl-35 mgr-5"></ion-icon>\n                Fast food\n                <ion-badge item-end color="dark" class="fs-12 white-opct {{settings.skin.text_1}} bdra-5">3</ion-badge>\n              </button>\n              <button ion-item small class="transparent fs-14">\n                <ion-icon name="md-radio-button-off" class="fs-8 text-center pdr-5 mgl-35 mgr-5"></ion-icon>\n                Extra\n              </button>\n              <button ion-item small class="transparent fs-14">\n                <ion-icon name="md-radio-button-off" class="fs-8 text-center pdr-5 mgl-35 mgr-5"></ion-icon>\n                Cake\n                <ion-badge item-end color="dark" class="fs-12 white-opct {{settings.skin.text_1}} bdra-5">2</ion-badge>\n              </button>\n            </ion-row>\n          </ion-list>\n        </span> \n\n      </ion-list>\n    </ion-content>\n  </ion-menu> -->\n\n\n  <ion-menu class="" [content]="content" id="menu-basic">\n    <!-- <ion-header class="{{settings.skin.main_skin}}">\n      <ion-toolbar>\n        <ion-title>\n          <img class="logo-brand light-brand" src="assets/img/chimera_w.png" alt="">\n          <img class="logo-brand dark-brand" src="assets/img/chimera_b.png" alt="">\n        </ion-title>\n      </ion-toolbar>\n    </ion-header> -->\n\n    <ion-content class="{{settings.skin.main_skin}} menu">\n      <ion-list no-lines class="lst-menu">\n        <!-- If we don\'t want a home button in the off canvas nav, comment the following ion-item-group block -->\n        <ion-item-group submenu>\n          <button submenu-item menuClose ion-item icon-left class="transparent" (click)="openPage({ \'title\': \'Home\', \'page\': \'HomePage\', \'icon\': \'md-home\'})">\n            <ion-icon name="md-home" item-left></ion-icon>\n            Home\n          </button>\n        </ion-item-group>\n        <span *ngFor="let item of pages" class="{{settings.skin.text_4">\n          <ion-item-group submenu>\n            <button submenu-item menuClose ion-item icon-left *ngFor="let sub of item.group" class="transparent" (click)="openPage(sub)">\n              <ion-icon name={{sub.icon}} item-left></ion-icon>\n              {{sub.title}}\n            </button>\n          </ion-item-group>\n        </span>\n\n\n        <!-- <span class="{{settings.skin.text_1}}">\n          <ion-item class="transparent uppercase mgt-20 fs-14 fw-400 spacing-1">\n            Level Menu\n          </ion-item>\n          <ion-list class="tree mgb-0">\n            <ion-item icon-left class="btn-open-more transparent">\n              <ion-label ion-left class="text-white-1"><ion-icon class="mgr-15 pdr-5 text-center" name="ios-stats"></ion-icon>Level Collapse</ion-label>\n              <ion-checkbox [(ngModel)]="show_drop" class="hidden-checkbox" color="dark"></ion-checkbox>\n            </ion-item>\n            <ion-list class="tree mgb-0">\n              <ion-item icon-left class="btn-open-more transparent">\n                <ion-label ion-left><ion-icon class="mgr-15 pdr-5 text-center" name="ios-stats"></ion-icon>Level Collapse</ion-label>\n                <ion-checkbox [(ngModel)]="show_drop" class="hidden-checkbox" color="dark"></ion-checkbox>\n              </ion-item>\n\n              <ion-row class="dropdown" [ngClass]="{\'active\' : (show_drop == true)}">\n                <button ion-item small class="transparent fs-14">\n                  <ion-icon name="md-radio-button-off" class="fs-8 text-center pdr-5 mgl-35 mgr-5"></ion-icon>\n                  Drink\n                </button>\n                <button ion-item small class="transparent fs-14">\n                  <ion-icon name="md-radio-button-off" class="fs-8 text-center pdr-5 mgl-35 mgr-5"></ion-icon>\n                  Fast food\n                  <ion-badge item-end color="dark" class="fs-12 white-opct {{settings.skin.text_1}} bdra-5">3</ion-badge>\n                </button>\n                <button ion-item small class="transparent fs-14">\n                  <ion-icon name="md-radio-button-off" class="fs-8 text-center pdr-5 mgl-35 mgr-5"></ion-icon>\n                  Extra\n                </button>\n                <button ion-item small class="transparent fs-14">\n                  <ion-icon name="md-radio-button-off" class="fs-8 text-center pdr-5 mgl-35 mgr-5"></ion-icon>\n                  Cake\n                  <ion-badge item-end color="dark" class="fs-12 white-opct {{settings.skin.text_1}} bdra-5">2</ion-badge>\n                </button>\n              </ion-row>\n            </ion-list>\n          </ion-list>\n        </span> -->\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n\n\n  <ion-menu class="{{settings.skin.main_skin}}" [content]="content" id="menu-avatar">\n\n    <ion-content class="{{settings.skin.main_bg}}">\n\n      <div class="info-user mgb-30 pdt-50 pdb-20 black-opct">\n        <button ion-button clear only-icon small class="user-setting text-grey-1"><ion-icon name="ios-settings"></ion-icon></button>\n        <div class="bg-img"><img src="assets/img/bg9.jpg" alt=""></div>\n        <div class="wrapper-avt mgl-15 mgr-10">\n          <img src="assets/img/avt1.jpg" alt="">\n        </div>\n        <div class="main-info">\n          <h2 class="user-name fs-20 fw-600 mg-0 text-white">Koodinh</h2>\n          <button ion-button clear small class="pd-0 mg-0 text-left text-grey-1">koodinh@gmail.com</button>\n        </div>\n      </div>\n\n      <ion-list no-lines class="lst-menu">\n        <span *ngFor="let item of pages" class="{{settings.skin.text_1}}">\n          <ion-item class="transparent uppercase mgt-20 fs-14 fw-400 spacing-1">\n            {{item.title}}\n          </ion-item>\n\n          <button menuClose="menu-avatar" ion-item icon-left *ngFor="let sub of item.group" class="transparent" (click)="openPage(sub)">\n            <ion-icon name="{{sub.icon}}" item-left></ion-icon>\n            {{sub.title}}\n          </button>\n        </span>\n\n        <!-- <span class="{{settings.skin.text_1}}">\n          <ion-item class="transparent uppercase mgt-20 fs-14 fw-400 spacing-1">\n            Level Menu\n          </ion-item>\n          <ion-list class="tree mgb-0">\n            <ion-item icon-left class="btn-open-more transparent">\n              <ion-label ion-left><ion-icon class="mgr-15 pdr-5 text-center" name="ios-stats"></ion-icon>Level Collapse</ion-label>\n              <ion-checkbox [(ngModel)]="show_drop" class="hidden-checkbox" color="dark"></ion-checkbox>\n            </ion-item>\n\n            <ion-row class="dropdown" [ngClass]="{\'active\' : (show_drop == true)}">\n              <button ion-item small class="transparent fs-14">\n                <ion-icon name="md-radio-button-off" class="fs-8 text-center pdr-5 mgl-35 mgr-5"></ion-icon>\n                Drink\n              </button>\n              <button ion-item small class="transparent fs-14">\n                <ion-icon name="md-radio-button-off" class="fs-8 text-center pdr-5 mgl-35 mgr-5"></ion-icon>\n                Fast food\n                <ion-badge item-end color="dark" class="fs-12 white-opct {{settings.skin.text_1}} bdra-5">3</ion-badge>\n              </button>\n              <button ion-item small class="transparent fs-14">\n                <ion-icon name="md-radio-button-off" class="fs-8 text-center pdr-5 mgl-35 mgr-5"></ion-icon>\n                Extra\n              </button>\n              <button ion-item small class="transparent fs-14">\n                <ion-icon name="md-radio-button-off" class="fs-8 text-center pdr-5 mgl-35 mgr-5"></ion-icon>\n                Cake\n                <ion-badge item-end color="dark" class="fs-12 white-opct {{settings.skin.text_1}} bdra-5">2</ion-badge>\n              </button>\n            </ion-row>\n          </ion-list>\n        </span> -->\n\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n\n\n\n  <ion-menu class="{{settings.skin.main_skin}}" small menu-small-width [content]="content" id="menu-icon-only">\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>\n          <h1 class="text-center {{settings.skin.text_1}}">C</h1>\n        </ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content class="{{settings.skin.main_bg}}">\n\n      <div class="user-avt">\n        <img src="assets/img/avt2.jpg" alt="">\n      </div>\n\n      <ion-list no-lines class="lst-menu">\n        <span *ngFor="let item of pages" class="{{settings.skin.text_1}}">\n          <button menuClose="menu-material" ion-button block icon-only *ngFor="let sub of item.group" class="transparent" (click)="openPage(sub)">\n            <ion-icon name="{{sub.icon}}" class="fs-20" item-left></ion-icon>\n          </button>\n        </span>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n\n\n  <ion-nav [root]="rootPage" #content main swipeBackEnabled="true"></ion-nav>\n</ion-split-pane>\n</div>\n'/*ion-inline-end:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/app/app.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_5__providers_menu_menu__["a" /* MenuProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__providers_menu_menu__["a" /* MenuProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_6__providers_settings_settings__["a" /* SettingsProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelperProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the HelperProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var HelperProvider = (function () {
    function HelperProvider(http) {
        this.http = http;
        console.log('Hello HelperProvider Provider');
    }
    HelperProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], HelperProvider);
    return HelperProvider;
}());

//# sourceMappingURL=helper.js.map

/***/ })

},[264]);
//# sourceMappingURL=main.js.map