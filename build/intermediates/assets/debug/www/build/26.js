webpackJsonp([26],{

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordpressDetailPageModule", function() { return WordpressDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wordpress_detail__ = __webpack_require__(731);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WordpressDetailPageModule = (function () {
    function WordpressDetailPageModule() {
    }
    WordpressDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__wordpress_detail__["a" /* WordpressDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__wordpress_detail__["a" /* WordpressDetailPage */]),
            ],
        })
    ], WordpressDetailPageModule);
    return WordpressDetailPageModule;
}());

//# sourceMappingURL=wordpress-detail.module.js.map

/***/ }),

/***/ 731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordpressDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wordpress_wordpress__ = __webpack_require__(255);
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
 * Generated class for the WordpressDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WordpressDetailPage = (function () {
    function WordpressDetailPage(navCtrl, navParams, wpService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.wpService = wpService;
        this.post_id = null;
        this.post = null;
        this.comments = new Array();
        this.page = 0;
        this.per_page = 20;
        this.spnState = 'show';
        this.favorite_post = {};
        this.post_id = this.navParams.get('id');
        if (this.post_id != null) {
            this.wpService.getPost(this.post_id).subscribe(function (data) {
                _this.post = data;
                _this.favorite_post = {
                    id: data.id,
                    title: data.title.rendered,
                    excerpt: data.excerpt.rendered,
                    link: data.link,
                    thumb: null,
                    isFavorite: false
                };
                _this.wpService.getMedia(data.featured_media).subscribe(function (media) {
                    _this.favorite_post.thumb = media.source_url;
                });
                _this.wpService.isFavorite(_this.favorite_post).then(function (result) {
                    _this.favorite_post.isFavorite = result;
                    console.log(_this.favorite_post);
                });
                _this.spnState = 'hide';
            });
        }
        else {
            this.spnState = 'hide';
        }
    }
    WordpressDetailPage.prototype.loadComment = function () {
        var _this = this;
        this.page += 1;
        this.wpService.getComments(this.page, this.per_page, this.post_id).subscribe(function (data) {
            _this.comments = _this.comments.concat(data);
        });
    };
    WordpressDetailPage.prototype.ionViewDidLoad = function () {
        this.loadComment();
    };
    WordpressDetailPage.prototype.favorite = function (item) {
        var _this = this;
        this.wpService.isFavorite(item).then(function (result) {
            if (result == false) {
                item.isFavorite = true;
                _this.wpService.favorite(item);
            }
            else {
                item.isFavorite = false;
                _this.wpService.unFavorite(item);
            }
        });
    };
    WordpressDetailPage.prototype.share = function (item) {
    };
    WordpressDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-wordpress-detail',template:/*ion-inline-start:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/pages/ready-app/wordpress/wordpress-detail/wordpress-detail.html"*/'<!--\n  Generated template for the WordpressDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    \n    <ion-title>Detail</ion-title>\n\n    <ion-buttons right>\n      <button ion-button icon-only small (click)="wpService.doFavorite(favorite_post)" >\n          <ion-icon class="fs-18" [name]="favorite_post.isFavorite == true ? \'heart\' : \'heart-outline\'"></ion-icon>\n      </button>\n\n      <button ion-button icon-only small (click)="wpService.doShare(post)">\n          <ion-icon class="fs-18" name="md-share"></ion-icon>\n      </button>\n\n      <button ion-button icon-only small (click)="wpService.doOpen(post)">\n          <ion-icon class="fs-18" name="md-open"></ion-icon>\n      </button>\n\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="white-1">\n <ion-spinner class="indicator" [ngClass]="spnState"></ion-spinner> \n <div *ngIf="post!=null" padding class="">\n\n      <ion-card-title class="fs-18 fw-600 uppercase card-title card-title-md" [innerHTML]="post.title.rendered"></ion-card-title>\n      <p class="text-grey-4" [innerHTML]="post.content.rendered"></p>\n\n    <ion-row class="row" *ngIf="comments.length!=0">\n    <ion-list class="lst-no-background list list-md">\n      <ion-item *ngFor="let item of comments">\n        <ion-avatar item-start>\n          <img [src]="item.author_avatar_urls[\'24\']">\n        </ion-avatar>\n        <h2>{{item.author_name}}</h2>\n        <p [innerHTML]="item.content.rendered"></p>\n        <ion-note item-end>3:43 pm</ion-note>\n      </ion-item>\n     </ion-list>\n    <button ion-button block round class="indigo" (click)="loadComment()">Load More</button>\n    </ion-row> \n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/pages/ready-app/wordpress/wordpress-detail/wordpress-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_wordpress_wordpress__["a" /* WordpressService */]])
    ], WordpressDetailPage);
    return WordpressDetailPage;
}());

//# sourceMappingURL=wordpress-detail.js.map

/***/ })

});
//# sourceMappingURL=26.js.map