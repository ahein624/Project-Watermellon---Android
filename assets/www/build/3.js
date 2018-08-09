webpackJsonp([3],{

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryPageModule", function() { return GalleryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gallery__ = __webpack_require__(689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_gallery_grid_gallery_grid_gallery_module__ = __webpack_require__(690);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_gallery_info_gallery_info_gallery_module__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_gallery_shots_gallery_shots_gallery_module__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_gallery_masonry_gallery_masonry_gallery_module__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_gallery_listed_gallery_listed_gallery_module__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_gallery_horizontal_gallery_horizontal_gallery_module__ = __webpack_require__(698);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var GalleryPageModule = (function () {
    function GalleryPageModule() {
    }
    GalleryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__gallery__["a" /* GalleryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__gallery__["a" /* GalleryPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_gallery_grid_gallery_grid_gallery_module__["a" /* GridGalleryModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_gallery_info_gallery_info_gallery_module__["a" /* InfoGalleryModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_gallery_shots_gallery_shots_gallery_module__["a" /* ShotsGalleryModule */],
                __WEBPACK_IMPORTED_MODULE_7__components_gallery_listed_gallery_listed_gallery_module__["a" /* ListedGalleryModule */],
                __WEBPACK_IMPORTED_MODULE_8__components_gallery_horizontal_gallery_horizontal_gallery_module__["a" /* HorizontalGalleryModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_gallery_masonry_gallery_masonry_gallery_module__["a" /* MasonryGalleryModule */]
            ],
        })
    ], GalleryPageModule);
    return GalleryPageModule;
}());

//# sourceMappingURL=gallery.module.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoGalleryModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__info_gallery__ = __webpack_require__(470);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InfoGalleryModule = (function () {
    function InfoGalleryModule() {
    }
    InfoGalleryModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__info_gallery__["a" /* InfoGalleryComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__info_gallery__["a" /* InfoGalleryComponent */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__info_gallery__["a" /* InfoGalleryComponent */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], InfoGalleryModule);
    return InfoGalleryModule;
}());

//# sourceMappingURL=info-gallery.module.js.map

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoGalleryComponent; });
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
 * Generated class for the InfoGalleryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var InfoGalleryComponent = (function () {
    function InfoGalleryComponent() {
        var _this = this;
        this.onCallbackEvent = function (event, item, e) {
            if (e) {
                e.stopPropagation();
            }
            if (_this.events[event]) {
                _this.events[event](item);
            }
        };
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], InfoGalleryComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], InfoGalleryComponent.prototype, "events", void 0);
    InfoGalleryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'info-gallery',template:/*ion-inline-start:"D:\Visual Studio\Personal\Project-Watermellon\src\components\gallery\info-gallery\info-gallery.html"*/'<ion-row class="pdl-5 pdr-5">\n\n<ion-col col-6 *ngFor="let item of data" class="mgb-10 ani-right-to-left">\n\n<div class="wrapper-info-gallery">\n\n	<img src="{{item.path}}" alt="" (click)="onCallbackEvent(\'onClick\',item, $event)">\n\n</div>\n\n\n\n<div class="text-info">\n\n	<h4 class="title fs-13 fw-500 text-ellipsis mgt-5 mgb-0" [innerHTML]="item.title"></h4>\n\n</div>\n\n\n\n</ion-col>\n\n</ion-row>\n\n'/*ion-inline-end:"D:\Visual Studio\Personal\Project-Watermellon\src\components\gallery\info-gallery\info-gallery.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], InfoGalleryComponent);
    return InfoGalleryComponent;
}());

//# sourceMappingURL=info-gallery.js.map

/***/ }),

/***/ 689:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryPage; });
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
 * Generated class for the GalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GalleryPage = (function () {
    function GalleryPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.data = {};
        this.events = [];
        this.page = this.navParams.get('page');
        if (this.page == undefined) {
            this.navCtrl.setRoot('HomePage');
        }
        this.data = [
            { path: 'assets/img/demo1.jpg', title: 'Import MasonryModule into your apps modules' },
            { path: 'assets/img/demo2.jpg', title: 'Import MasonryModule into your apps modules' },
            { path: 'assets/img/demo3.jpg', title: 'Import MasonryModule into your apps modules' },
            { path: 'assets/img/demo4.jpg', title: 'Import MasonryModule into your apps modules' },
            { path: 'assets/img/demo5.jpg', title: 'Import MasonryModule into your apps modules' },
            { path: 'assets/img/demo6.jpg', title: 'Import MasonryModule into your apps modules' },
            { path: 'assets/img/demo7.jpg', title: 'Import MasonryModule into your apps modules' },
            { path: 'assets/img/demo8.jpg', title: 'Import MasonryModule into your apps modules' },
            { path: 'assets/img/demo9.jpg', title: 'Import MasonryModule into your apps modules' },
            { path: 'assets/img/demo10.jpg', title: 'Import MasonryModule into your apps modules' },
            { path: 'assets/img/demo11.jpg', title: 'Import MasonryModule into your apps modules' },
            { path: 'assets/img/demo12.jpg', title: 'Import MasonryModule into your apps modules' },
            { path: 'assets/img/bg1.jpg', title: 'Import MasonryModule into your apps modules' },
            { path: 'assets/img/bg2.jpg', title: 'Import MasonryModule into your apps modules' },
            { path: 'assets/img/bg3.jpg', title: 'Import MasonryModule into your apps modules' },
            { path: 'assets/img/bg4.jpg', title: 'Import MasonryModule into your apps modules' },
            { path: 'assets/img/bg5.jpg', title: 'Import MasonryModule into your apps modules' },
            { path: 'assets/img/bg6.jpg', title: 'Import MasonryModule into your apps modules' },
            { path: 'assets/img/bg7.jpg', title: 'Import MasonryModule into your apps modules' },
            { path: 'assets/img/bg8.jpg', title: 'Import MasonryModule into your apps modules' },
            { path: 'assets/img/bg10.jpg', title: 'Import MasonryModule into your apps modules' },
            { path: 'assets/img/bg11.jpg', title: 'Import MasonryModule into your apps modules' },
            { path: 'assets/img/bg12.jpg', title: 'Import MasonryModule into your apps modules' },
            { path: 'assets/img/bg13.jpg', title: 'Import MasonryModule into your apps modules' },
            { path: 'assets/img/bg14.jpg', title: 'Import MasonryModule into your apps modules' },
            { path: 'assets/img/bg15.jpg', title: 'Import MasonryModule into your apps modules' }
        ];
        this.events.onClick = function (item) {
            var myModal = modalCtrl.create('GalleryModalPage', { 'data': item });
            myModal.present();
        };
    }
    GalleryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GalleryPage');
    };
    GalleryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-gallery',template:/*ion-inline-start:"D:\Visual Studio\Personal\Project-Watermellon\src\pages\gallery\gallery.html"*/'<!--\n\n  Generated template for the GalleryPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title *ngIf="page!=undefined">{{page.title}}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n   <grid-gallery *ngIf="page!=undefined && page.name==1" [data]="data" [events]="events"></grid-gallery>\n\n   <masonry-gallery *ngIf="page!=undefined && page.name==2" [data]="data" [events]="events"></masonry-gallery>\n\n   <info-gallery *ngIf="page!=undefined && page.name==3" [data]="data" [events]="events"></info-gallery>\n\n   <listed-gallery *ngIf="page!=undefined && page.name==4" [data]="data" [events]="events"></listed-gallery>\n\n   <horizontal-gallery *ngIf="page!=undefined && page.name==5" [data]="data" [events]="events"></horizontal-gallery>\n\n   <shots-gallery *ngIf="page!=undefined && page.name==6" [data]="data" [events]="events"></shots-gallery>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Visual Studio\Personal\Project-Watermellon\src\pages\gallery\gallery.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */]])
    ], GalleryPage);
    return GalleryPage;
}());

//# sourceMappingURL=gallery.js.map

/***/ }),

/***/ 690:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridGalleryModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__grid_gallery__ = __webpack_require__(691);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GridGalleryModule = (function () {
    function GridGalleryModule() {
    }
    GridGalleryModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__grid_gallery__["a" /* GridGalleryComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__grid_gallery__["a" /* GridGalleryComponent */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__grid_gallery__["a" /* GridGalleryComponent */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], GridGalleryModule);
    return GridGalleryModule;
}());

//# sourceMappingURL=grid-gallery.module.js.map

/***/ }),

/***/ 691:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridGalleryComponent; });
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
 * Generated class for the GridGalleryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var GridGalleryComponent = (function () {
    function GridGalleryComponent() {
        var _this = this;
        this.onCallbackEvent = function (event, item, e) {
            if (e) {
                e.stopPropagation();
            }
            if (_this.events[event]) {
                _this.events[event](item);
            }
        };
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], GridGalleryComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], GridGalleryComponent.prototype, "events", void 0);
    GridGalleryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'grid-gallery',template:/*ion-inline-start:"D:\Visual Studio\Personal\Project-Watermellon\src\components\gallery\grid-gallery\grid-gallery.html"*/'<div>\n\n	<ion-row class="">\n\n		<ion-col col-3 class="pd-0 ani-scale" *ngFor="let item of data">\n\n			<div class="wrapper-grid-gallery">\n\n				<img src="{{item.path}}" alt="" (click)="onCallbackEvent(\'onClick\',item, $event)">\n\n		 	</div>\n\n		</ion-col>\n\n	</ion-row>\n\n</div>'/*ion-inline-end:"D:\Visual Studio\Personal\Project-Watermellon\src\components\gallery\grid-gallery\grid-gallery.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], GridGalleryComponent);
    return GridGalleryComponent;
}());

//# sourceMappingURL=grid-gallery.js.map

/***/ }),

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShotsGalleryModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shots_gallery__ = __webpack_require__(693);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ShotsGalleryModule = (function () {
    function ShotsGalleryModule() {
    }
    ShotsGalleryModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__shots_gallery__["a" /* ShotsGalleryComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__shots_gallery__["a" /* ShotsGalleryComponent */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__shots_gallery__["a" /* ShotsGalleryComponent */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ShotsGalleryModule);
    return ShotsGalleryModule;
}());

//# sourceMappingURL=shots-gallery.module.js.map

/***/ }),

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShotsGalleryComponent; });
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
 * Generated class for the InfoGalleryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ShotsGalleryComponent = (function () {
    function ShotsGalleryComponent() {
        var _this = this;
        this.onCallbackEvent = function (event, item, e) {
            if (e) {
                e.stopPropagation();
            }
            if (_this.events[event]) {
                _this.events[event](item);
            }
        };
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ShotsGalleryComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ShotsGalleryComponent.prototype, "events", void 0);
    ShotsGalleryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'shots-gallery',template:/*ion-inline-start:"D:\Visual Studio\Personal\Project-Watermellon\src\components\gallery\shots-gallery\shots-gallery.html"*/'\n\n<div class="white-1">\n\n	<div padding class="top-gallery pdb-0">\n\n		<div class="white shadow-1 bdra-10">\n\n			<div class="wrapper-slide">\n\n				<ion-slides autoplay="1500" loop="true" effect="fade" speed="1000" class="height-auto" #slide4>\n\n					<ion-slide>\n\n					    <img src="{{data[0].path}}" alt="">\n\n					</ion-slide>\n\n					<ion-slide>\n\n					    <img src="{{data[1].path}}" alt="">\n\n					</ion-slide>\n\n					<ion-slide>\n\n					    <img src="{{data[2].path}}" alt="">\n\n					</ion-slide>\n\n				</ion-slides>\n\n			</div>\n\n\n\n			<div padding class="pdt-5">\n\n				<h4 class="uppercase fw-100 text-grey-4 mg-0">Experiment</h4>\n\n				<h1 class="mg-0">Free!</h1>\n\n				<p class="fs-13 text-grey-3 mgt-0">Explore new test functions.</p>\n\n				<button ion-button round class="lama-vs-coban text-white">Upgrade</button>\n\n			</div>\n\n		</div>\n\n	</div>\n\n\n\n	<h5 padding class="block pdb-0">Feature Shots</h5>\n\n\n\n	<ion-row class="pdl-5 pdr-5 pdb-15">\n\n		<ion-col col-6 *ngFor="let item of data" class="ani-right-to-left">\n\n			<div class="shadow-1 bdra-5 pdl-5 pdr-5 white">\n\n				<div class="text-info pdt-5 pdb-5 pdl-5">\n\n					<h4 class="title fs-12 text-grey-3 fw-500 text-ellipsis mgt-5 mgb-0" [innerHTML]="item.title"></h4>\n\n				</div>\n\n				<div class="wrapper-shots-gallery bdra-3">\n\n					<img src="{{item.path}}" alt="" (click)="onCallbackEvent(\'onClick\',item, $event)">\n\n				</div>\n\n				<div class="btn-bottom">\n\n					<button ion-button icon-left clear small class="mg-0 fs-10 text-grey-3">\n\n						<ion-icon class="" name="md-heart-outline"></ion-icon>\n\n						271\n\n					</button>\n\n					<button ion-button icon-left clear small class="mg-0 fs-10 text-grey-3">\n\n						<ion-icon class="" name="ios-chatbubbles-outline"></ion-icon>\n\n						130\n\n					</button>\n\n				</div>\n\n			</div>\n\n		</ion-col>\n\n	</ion-row>\n\n</div>\n\n'/*ion-inline-end:"D:\Visual Studio\Personal\Project-Watermellon\src\components\gallery\shots-gallery\shots-gallery.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ShotsGalleryComponent);
    return ShotsGalleryComponent;
}());

//# sourceMappingURL=shots-gallery.js.map

/***/ }),

/***/ 694:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MasonryGalleryModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__masonry_gallery__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_masonry__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_masonry___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_masonry__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MasonryGalleryModule = (function () {
    function MasonryGalleryModule() {
    }
    MasonryGalleryModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__masonry_gallery__["a" /* MasonryGalleryComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__masonry_gallery__["a" /* MasonryGalleryComponent */]),
                __WEBPACK_IMPORTED_MODULE_3_angular2_masonry__["MasonryModule"]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__masonry_gallery__["a" /* MasonryGalleryComponent */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], MasonryGalleryModule);
    return MasonryGalleryModule;
}());

//# sourceMappingURL=masonry-gallery.module.js.map

/***/ }),

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MasonryGalleryComponent; });
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
 * Generated class for the MasonryGalleryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var MasonryGalleryComponent = (function () {
    function MasonryGalleryComponent() {
        var _this = this;
        this.onCallbackEvent = function (event, item, e) {
            if (e) {
                e.stopPropagation();
            }
            if (_this.events[event]) {
                _this.events[event](item);
            }
        };
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MasonryGalleryComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MasonryGalleryComponent.prototype, "events", void 0);
    MasonryGalleryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'masonry-gallery',template:/*ion-inline-start:"D:\Visual Studio\Personal\Project-Watermellon\src\components\gallery\masonry-gallery\masonry-gallery.html"*/' <masonry>\n\n  <masonry-brick class="brick" *ngFor="let item of data">  \n\n 	<img src="{{item.path}}" (click)="onCallbackEvent(\'onClick\',item, $event)">\n\n  </masonry-brick>\n\n</masonry>\n\n'/*ion-inline-end:"D:\Visual Studio\Personal\Project-Watermellon\src\components\gallery\masonry-gallery\masonry-gallery.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], MasonryGalleryComponent);
    return MasonryGalleryComponent;
}());

//# sourceMappingURL=masonry-gallery.js.map

/***/ }),

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListedGalleryModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__listed_gallery__ = __webpack_require__(697);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ListedGalleryModule = (function () {
    function ListedGalleryModule() {
    }
    ListedGalleryModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__listed_gallery__["a" /* ListedGalleryComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__listed_gallery__["a" /* ListedGalleryComponent */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__listed_gallery__["a" /* ListedGalleryComponent */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ListedGalleryModule);
    return ListedGalleryModule;
}());

//# sourceMappingURL=listed-gallery.module.js.map

/***/ }),

/***/ 697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListedGalleryComponent; });
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
 * Generated class for the InfoGalleryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ListedGalleryComponent = (function () {
    function ListedGalleryComponent() {
        var _this = this;
        this.onCallbackEvent = function (event, item, e) {
            if (e) {
                e.stopPropagation();
            }
            if (_this.events[event]) {
                _this.events[event](item);
            }
        };
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ListedGalleryComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ListedGalleryComponent.prototype, "events", void 0);
    ListedGalleryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'listed-gallery',template:/*ion-inline-start:"D:\Visual Studio\Personal\Project-Watermellon\src\components\gallery\listed-gallery\listed-gallery.html"*/'\n\n<div class="">\n\n	<div padding class="top-gallery pdb-0">\n\n		<div class="white shadow-1 bdra-5 ovfl-hidden" (click)="onCallbackEvent(\'onClick\',data[2], $event)">\n\n			<img src="{{data[2].path}}" alt="">\n\n\n\n			<div padding class="pdt-5 pdb-5">\n\n				<p class="fs-14 text-grey-4 mg-0">Explore new test functions.</p>\n\n				<button ion-button icon-left clear small class="mg-0 fs-12 text-grey-3">\n\n					<ion-icon class="" name="md-heart-outline"></ion-icon>\n\n					271\n\n				</button>\n\n				<button ion-button icon-left clear small class="mg-0 fs-10 text-grey-3">\n\n					<ion-icon class="" name="ios-chatbubbles-outline"></ion-icon>\n\n					130\n\n				</button>\n\n			</div>\n\n		</div>\n\n	</div>\n\n\n\n	<h5 padding class="block pdb-0 mgt-5 fw-400">Feature Shots</h5>\n\n	\n\n	<ion-list class="lst-no-background">\n\n	    <ion-item *ngFor="let item of data" class="ani-right-to-left sahdow-2 bdra-5" (click)="onCallbackEvent(\'onClick\',item, $event)">\n\n	      	<ion-thumbnail item-start class="bdra-5 ovfl-hidden">\n\n	        	<img src="{{item.path}}">\n\n	      	</ion-thumbnail>\n\n	      	<h2 class="text-ellipsis fs-14 text-grey-4" [innerHTML]="item.title"></h2>\n\n	      	<button ion-button icon-left clear small class="mg-0 fs-11 text-grey-3">\n\n				<ion-icon class="fs-16" name="md-heart-outline"></ion-icon>\n\n				271\n\n			</button>\n\n			<button ion-button icon-left clear small class="mg-0 fs-11 text-grey-3">\n\n				<ion-icon class="fs-16" name="ios-chatbubbles-outline"></ion-icon>\n\n				130\n\n			</button>\n\n	    </ion-item>\n\n	</ion-list>\n\n\n\n</div>\n\n'/*ion-inline-end:"D:\Visual Studio\Personal\Project-Watermellon\src\components\gallery\listed-gallery\listed-gallery.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ListedGalleryComponent);
    return ListedGalleryComponent;
}());

//# sourceMappingURL=listed-gallery.js.map

/***/ }),

/***/ 698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HorizontalGalleryModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__horizontal_gallery__ = __webpack_require__(699);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HorizontalGalleryModule = (function () {
    function HorizontalGalleryModule() {
    }
    HorizontalGalleryModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__horizontal_gallery__["a" /* HorizontalGalleryComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__horizontal_gallery__["a" /* HorizontalGalleryComponent */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__horizontal_gallery__["a" /* HorizontalGalleryComponent */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], HorizontalGalleryModule);
    return HorizontalGalleryModule;
}());

//# sourceMappingURL=horizontal-gallery.module.js.map

/***/ }),

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HorizontalGalleryComponent; });
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
 * Generated class for the InfoGalleryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var HorizontalGalleryComponent = (function () {
    function HorizontalGalleryComponent() {
        var _this = this;
        this.onCallbackEvent = function (event, item, e) {
            if (e) {
                e.stopPropagation();
            }
            if (_this.events[event]) {
                _this.events[event](item);
            }
        };
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], HorizontalGalleryComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], HorizontalGalleryComponent.prototype, "events", void 0);
    HorizontalGalleryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'horizontal-gallery',template:/*ion-inline-start:"D:\Visual Studio\Personal\Project-Watermellon\src\components\gallery\horizontal-gallery\horizontal-gallery.html"*/'\n\n<div class="white-1">\n\n	<ion-card class="card-img-bg-more mg-0 bdra-0 full-width" *ngFor="let item of data">\n\n	    <img src="{{item.path}}" (click)="onCallbackEvent(\'onClick\',item, $event)" />\n\n	    <ion-card-header class="text-white">\n\n	      <button ion-button icon-only small class="button-circle white-opct text-white mgt--5">\n\n	        <ion-icon name="ios-chatbubbles-outline"></ion-icon>\n\n	      </button>\n\n	      <span class="fs-14 fw-400">23 Comments</span>\n\n	      <button ion-button small icon-left class="white-opct text-white pull-right mgt--5">\n\n	      	<ion-icon name="md-heart-outline"></ion-icon>130\n\n	      </button>\n\n	    </ion-card-header>\n\n	    <div class="wrapper black-opct" (click)="onCallbackEvent(\'onClick\',item, $event)">\n\n	      <ion-card-content class="text-white full-width">\n\n	        <span class="info-stt text-white inline-block">Otc 23, 017</span>\n\n	        <ion-card-title class="text-white uppercase spacing-1 fw-600 fs-14 text-ellipsis" [innerHTML]="item.title"></ion-card-title>\n\n	      </ion-card-content>\n\n	    </div>\n\n	</ion-card>\n\n</div>\n\n'/*ion-inline-end:"D:\Visual Studio\Personal\Project-Watermellon\src\components\gallery\horizontal-gallery\horizontal-gallery.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], HorizontalGalleryComponent);
    return HorizontalGalleryComponent;
}());

//# sourceMappingURL=horizontal-gallery.js.map

/***/ })

});
//# sourceMappingURL=3.js.map