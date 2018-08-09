webpackJsonp([36],{

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstagramPageModule", function() { return InstagramPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__instagram__ = __webpack_require__(717);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InstagramPageModule = (function () {
    function InstagramPageModule() {
    }
    InstagramPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__instagram__["a" /* InstagramPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__instagram__["a" /* InstagramPage */]),
            ],
        })
    ], InstagramPageModule);
    return InstagramPageModule;
}());

//# sourceMappingURL=instagram.module.js.map

/***/ }),

/***/ 717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstagramPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_instagram_instagram__ = __webpack_require__(261);
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
 * Generated class for the InstagramPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InstagramPage = (function () {
    function InstagramPage(navCtrl, http, isService, navParams) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.isService = isService;
        this.navParams = navParams;
        this.next = '';
        this.next_max_id = 0;
        this.spnState = 'show';
        this.list = new Array();
    }
    InstagramPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Instagram');
        this.loadMore();
    };
    InstagramPage.prototype.loadMore = function (infiniteScroll) {
        var _this = this;
        if (infiniteScroll === void 0) { infiniteScroll = null; }
        this.isService.getPosts(this.next).subscribe(function (data) {
            var tmpData = data.data;
            _this.next = data.pagination.next_url;
            _this.list = _this.list.concat(tmpData);
            if (infiniteScroll) {
                infiniteScroll.complete();
            }
            _this.spnState = 'hide';
        }, function (error) {
            if (infiniteScroll != null) {
                infiniteScroll.enable(false);
            }
            _this.spnState = 'hide';
        });
    };
    InstagramPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-instagram',template:/*ion-inline-start:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/pages/ready-app/instagram/instagram.html"*/'<!--\n  Generated template for the Instagram page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>instagram</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="white">\n  <ion-spinner class="indicator" [ngClass]="spnState"></ion-spinner>\n  <ion-card class="bdra-5" *ngFor="let item of list">\n    <ion-item>\n      <ion-avatar item-start class="mgt-6 mgb-6">\n        <img src="{{item.user.profile_picture}}">\n      </ion-avatar>\n      <h2 class="fs-14 fw-600 text-grey-5">{{item.user.username}}</h2>\n      <p class="fs-10 text-grey-3">{{item.user.full_name}}</p>\n      <p *ngIf="item.caption!=null" class="fs-10 text-white">{{item.caption.created_time}}</p> \n    </ion-item>\n\n    <img src="{{item.images.standard_resolution.url}}">\n\n    <ion-card-content>\n      <p *ngIf="item.caption!=null">{{item.caption.text}}</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-left clear small class="text-black favorite">\n          <ion-icon name="heart"></ion-icon>\n          <div>{{item.likes.count}}</div>\n        </button>\n      </ion-col>\n\n      <ion-col center text-center>\n         <button (click)="isService.goToComment(item,navCtrl)" ion-button icon-left clear small class="text-black">\n             <ion-icon name="chatbubbles"></ion-icon>\n             <div>{{item.comments.count}}</div>\n        </button>\n      </ion-col>\n\n      <ion-col right text-right>\n        <button (click)="isService.doOpen(item)" ion-button icon-left clear small class="text-black">\n          <ion-icon name="open"></ion-icon>\n        </button>\n      </ion-col>\n      \n      <ion-col right text-right>\n        <button (click)="isService.doShare(navCtrl,item)" ion-button icon-left clear small class="text-black">\n          <ion-icon name="share"></ion-icon>\n        </button>\n      </ion-col>\n\n    </ion-row>\n  </ion-card>\n\n\n  <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>\n'/*ion-inline-end:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/pages/ready-app/instagram/instagram.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__providers_instagram_instagram__["a" /* InstagramService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], InstagramPage);
    return InstagramPage;
}());

//# sourceMappingURL=instagram.js.map

/***/ })

});
//# sourceMappingURL=36.js.map