webpackJsonp([37],{

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstagramCommentPageModule", function() { return InstagramCommentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__instagram_comment__ = __webpack_require__(716);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InstagramCommentPageModule = (function () {
    function InstagramCommentPageModule() {
    }
    InstagramCommentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__instagram_comment__["a" /* InstagramCommentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__instagram_comment__["a" /* InstagramCommentPage */]),
            ],
        })
    ], InstagramCommentPageModule);
    return InstagramCommentPageModule;
}());

//# sourceMappingURL=instagram-comment.module.js.map

/***/ }),

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstagramCommentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_instagram_instagram__ = __webpack_require__(261);
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
 * Generated class for the InstagramCommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InstagramCommentPage = (function () {
    function InstagramCommentPage(navCtrl, navParams, instagramService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.instagramService = instagramService;
        this.spnState = 'show';
        this.item = this.navParams.get('item');
        this.instagramService.getComments(this.item).subscribe(function (data) {
            _this.list = new Array();
            _this.list = data.data;
            _this.spnState = 'hide';
        }, function (error) {
            _this.spnState = 'hide';
        });
    }
    InstagramCommentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InstagramCommentPage');
    };
    InstagramCommentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-instagram-comment',template:/*ion-inline-start:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/pages/ready-app/instagram/instagram-comment/instagram-comment.html"*/'<!--\n  Generated template for the InstagramCommentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>instagram-comment</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-spinner class="indicator" [ngClass]="spnState"></ion-spinner>\n  <ion-list>\n  <ion-item *ngFor="let item of list">\n    <ion-avatar item-start>\n      <img src="{{item.from.profile_picture}}">\n    </ion-avatar>\n    <h2>{{item.from.username}}</h2>\n    <p>{{item.text}}</p>\n  </ion-item>\n </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/pages/ready-app/instagram/instagram-comment/instagram-comment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_instagram_instagram__["a" /* InstagramService */]])
    ], InstagramCommentPage);
    return InstagramCommentPage;
}());

//# sourceMappingURL=instagram-comment.js.map

/***/ })

});
//# sourceMappingURL=37.js.map