webpackJsonp([2],{

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_profile_profile_v1_profile_v1_module__ = __webpack_require__(702);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_profile_profile_v2_profile_v2_module__ = __webpack_require__(704);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_profile_profile_v3_profile_v3_module__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_profile_profile_v4_profile_v4_module__ = __webpack_require__(708);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_profile_profile_v5_profile_v5_module__ = __webpack_require__(710);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_profile_profile_v6_profile_v6_module__ = __webpack_require__(712);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ProfilePageModule = (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_profile_profile_v1_profile_v1_module__["a" /* ProfileV1Module */],
                __WEBPACK_IMPORTED_MODULE_4__components_profile_profile_v2_profile_v2_module__["a" /* ProfileV2Module */],
                __WEBPACK_IMPORTED_MODULE_5__components_profile_profile_v3_profile_v3_module__["a" /* ProfileV3Module */],
                __WEBPACK_IMPORTED_MODULE_6__components_profile_profile_v4_profile_v4_module__["a" /* ProfileV4Module */],
                __WEBPACK_IMPORTED_MODULE_7__components_profile_profile_v5_profile_v5_module__["a" /* ProfileV5Module */],
                __WEBPACK_IMPORTED_MODULE_8__components_profile_profile_v6_profile_v6_module__["a" /* ProfileV6Module */]
            ],
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_toast_service_toast_service__ = __webpack_require__(259);
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
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams, toastService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastService = toastService;
        this.params = {};
        this.data = {};
        this.events = {};
        this.page = this.navParams.get('page');
        if (this.page == undefined) {
            this.navCtrl.setRoot('HomePage');
        }
        var that = this;
        this.data[0] = {
            label: {
                txtLikes: 'Likes',
                txtFollower: 'Follower',
                txtFollowing: 'Following',
                txtPosted: 'Posted',
                txtSocial: 'Social',
                txtAboutMe: 'About Me',
                txtContactMe: 'Contact Me',
                btnFollow: 'Follow',
                btnAddFriend: 'Add Friend'
            },
            user: {
                imgAvatar: 'assets/img/avt1.jpg',
                username: 'Lrandom',
                job: 'Developer',
                followerCount: '193',
                followingCount: '237',
                postCount: '1200',
                aboutMe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa ante, sollicitudin sit amet ante et, suscipit ultrices justo. Duis tellus neque, lacinia non aliquam eget, aliquet sed neque. Etiam a dolor ligula.',
                address: 'Ha Long',
                mail: 'luann4099@gmail.com',
                phone: '0868120192'
            },
            photos: [
                {
                    path: 'assets/img/bg1.jpg'
                },
                {
                    path: 'assets/img/bg2.jpg'
                },
                {
                    path: 'assets/img/bg3.jpg'
                },
                {
                    path: 'assets/img/bg4.jpg'
                },
                {
                    path: 'assets/img/bg5.jpg'
                }
            ]
        };
        this.events[0] = {
            onFacebookIconClick: function () {
                that.toastService.presentToast('facebook icon clicked');
            },
            onTwitterIconClick: function () {
                that.toastService.presentToast('twitter icon clicked');
            },
            onDribbleIconClick: function () {
                that.toastService.presentToast('dribble icon clicked');
            },
            onLinkedInIconClick: function () {
                that.toastService.presentToast('linkedin icon clicked');
            },
            onInstagramIconClick: function () {
                that.toastService.presentToast('instagram icon cliked');
            },
            onPinterestIconClick: function () {
                that.toastService.presentToast('pinterest icon clicked');
            },
            onGoogleIconClick: function () {
                that.toastService.presentToast('google icon clicked');
            },
            onFollowClick: function () {
                that.toastService.presentToast('button follow clicked');
            },
            onAddFriendClick: function () {
                that.toastService.presentToast('button add friend clicked');
            }
        };
        this.data[1] = {
            label: {
                txtFollower: 'Follower',
                txtFollowing: 'Following',
                txtPosted: 'Posted',
                txtPhotos: 'Photos',
                txtAboutMe: 'About Me',
                btnFollow: 'Follow',
                btnAddFriend: 'Add Friend'
            },
            user: {
                imgAvatar: 'assets/img/avt5.jpg',
                imgCover: 'assets/img/bg15.jpg',
                username: 'Lrandom',
                job: 'Developer',
                followerCount: '193',
                followingCount: '237',
                photosCount: '1200',
                aboutMe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa ante, sollicitudin sit amet ante et, suscipit ultrices justo. Duis tellus neque, lacinia non aliquam eget, aliquet sed neque. Etiam a dolor ligula.'
            },
            photos: [
                {
                    path: 'assets/img/bg1.jpg'
                },
                {
                    path: 'assets/img/bg2.jpg'
                },
                {
                    path: 'assets/img/bg3.jpg'
                },
                {
                    path: 'assets/img/bg4.jpg'
                },
                {
                    path: 'assets/img/bg5.jpg'
                }
            ]
        };
        this.events[1] = {
            onFacebookIconClick: function () {
                that.toastService.presentToast('facebook icon clicked');
            },
            onTwitterIconClick: function () {
                that.toastService.presentToast('twitter icon clicked');
            },
            onDribbleIconClick: function () {
                that.toastService.presentToast('dribble icon clicked');
            },
            onLinkedInIconClick: function () {
                that.toastService.presentToast('linkedin icon clicked');
            },
            onInstagramIconClick: function () {
                that.toastService.presentToast('instagram icon cliked');
            },
            onPinterestIconClick: function () {
                that.toastService.presentToast('pinterest icon clicked');
            },
            onGoogleIconClick: function () {
                that.toastService.presentToast('google icon clicked');
            },
            onFollowClick: function () {
                that.toastService.presentToast('button follow clicked');
            },
            onAddFriendClick: function () {
                that.toastService.presentToast('button add friend clicked');
            }
        };
        this.data[2] = {
            label: {
                txtFollower: 'Follower',
                txtFollowing: 'Following',
                txtLikes: 'Likes',
                txtPhotos: 'Photos',
                txtApps: 'Apps',
                txtWebs: 'Webs',
                txtVideos: 'Videos',
                btnFollow: 'Follow',
                btnMessage: 'Send Message'
            },
            user: {
                imgAvatar: 'assets/img/avt5.jpg',
                imgCover: 'assets/img/bg15.jpg',
                username: 'Lrandom',
                job: 'Developer',
                quote: 'It is great day',
                followerCount: '193',
                followingCount: '237',
                likeCount: '2040'
            },
            photos: [
                {
                    path: 'assets/img/bg1.jpg'
                },
                {
                    path: 'assets/img/bg2.jpg'
                },
                {
                    path: 'assets/img/bg3.jpg'
                },
                {
                    path: 'assets/img/bg4.jpg'
                },
                {
                    path: 'assets/img/bg5.jpg'
                }
            ],
            videos: [
                {
                    path: 'assets/img/bg1.jpg'
                },
                {
                    path: 'assets/img/bg2.jpg'
                },
                {
                    path: 'assets/img/bg3.jpg'
                },
                {
                    path: 'assets/img/bg4.jpg'
                },
                {
                    path: 'assets/img/bg5.jpg'
                },
                {
                    path: 'assets/img/bg6.jpg'
                },
                {
                    path: 'assets/img/bg7.jpg'
                }
            ],
            apps: [
                {
                    path: 'assets/img/bg1.jpg'
                },
                {
                    path: 'assets/img/bg2.jpg'
                },
                {
                    path: 'assets/img/bg3.jpg'
                },
                {
                    path: 'assets/img/bg4.jpg'
                },
                {
                    path: 'assets/img/bg5.jpg'
                }
            ],
            webs: [
                {
                    path: 'assets/img/bg1.jpg'
                },
                {
                    path: 'assets/img/bg2.jpg'
                },
                {
                    path: 'assets/img/bg3.jpg'
                },
                {
                    path: 'assets/img/bg4.jpg'
                },
                {
                    path: 'assets/img/bg5.jpg'
                }
            ]
        };
        this.events[2] = {
            onFollowClick: function () {
                that.toastService.presentToast('button follow clicked');
            },
            onSendMessageClick: function () {
                that.toastService.presentToast('button send message clicked');
            }
        };
        this.data[3] = {
            label: {
                txtLikes: 'Likes',
                txtFollower: 'Follower',
                txtFollowing: 'Following',
                txtPins: 'Pins',
                txtPosted: 'Posted',
                btnFollow: 'Follow',
                btnMessage: 'Send An Message'
            },
            user: {
                imgAvatar: 'assets/img/avt5.jpg',
                imgCover: 'assets/img/bg15.jpg',
                likeCount: '371',
                username: 'Lrandom',
                followerCount: '193',
                followingCount: '237',
                address: 'Ha Long',
                quote: 'I have a great day'
            },
            photos: [
                {
                    path: 'assets/img/bg1.jpg'
                },
                {
                    path: 'assets/img/bg2.jpg'
                },
                {
                    path: 'assets/img/bg3.jpg'
                },
                {
                    path: 'assets/img/bg4.jpg'
                },
                {
                    path: 'assets/img/bg5.jpg'
                }
            ],
            pins: [
                {
                    path: 'assets/img/bg1.jpg'
                },
                {
                    path: 'assets/img/bg2.jpg'
                },
                {
                    path: 'assets/img/bg3.jpg'
                },
                {
                    path: 'assets/img/bg4.jpg'
                },
                {
                    path: 'assets/img/bg5.jpg'
                },
                {
                    path: 'assets/img/bg6.jpg'
                }
            ]
        };
        this.events[3] = {
            onFacebookIconClick: function () {
                that.toastService.presentToast('facebook icon clicked');
            },
            onTwitterIconClick: function () {
                that.toastService.presentToast('twitter icon clicked');
            },
            onInstagramIconClick: function () {
                that.toastService.presentToast('instagram icon cliked');
            },
            onFollowClick: function () {
                that.toastService.presentToast('button follow clicked');
            },
            onSendMessageClick: function () {
                that.toastService.presentToast('button send message clicked');
            }
        };
        this.data[4] = {
            label: {
                txtLikes: 'Likes',
                txtFollower: 'Follower',
                txtFollowing: 'Following',
                txtMyCollection: 'My Collection',
                txtItems: 'items'
            },
            user: {
                imgAvatar: 'assets/img/avt5.jpg',
                imgCover: 'assets/img/bg15.jpg',
                likeCount: '371',
                username: 'Lrandom',
                job: 'Developer',
                followerCount: '193',
                followingCount: '237'
            },
            collections: [
                {
                    path: 'assets/img/bg1.jpg',
                    itemsCount: '1k',
                    name: 'Landscape Pics'
                },
                {
                    path: 'assets/img/bg2.jpg',
                    itemsCount: '1.5k',
                    name: 'Landscape Pics'
                },
                {
                    path: 'assets/img/bg3.jpg',
                    itemsCount: '1.9k',
                    name: 'Landscape Pics'
                },
                {
                    path: 'assets/img/bg4.jpg',
                    itemsCount: '2k',
                    name: 'Landscape Pics'
                },
                {
                    path: 'assets/img/bg5.jpg',
                    itemsCount: '4k',
                    name: 'Landscape Pics'
                }
            ]
        };
        this.data[5] = {
            label: {
                txtPosted: 'Posted',
                txtPins: 'Pins',
                txtFollower: 'Follower',
                txtFollowing: 'Following'
            },
            user: {
                imgAvatar: 'assets/img/avt3.jpg',
                likeCount: '371',
                username: 'Lrandom',
                followerCount: '193',
                followingCount: '237',
                pinCount: '2.4k',
                postCount: '1200',
                address: 'Ha Long'
            }
        };
        this.events[5] = {
            onSettingClick: function () {
                that.toastService.presentToast('button setting clicked');
            },
            onSendMessageClick: function () {
                that.toastService.presentToast('button send message clicked');
            }
        };
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/pages/profile/profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title *ngIf="page!=undefined">{{page.title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n   <profile-v1 *ngIf="page!=undefined && page.name==1" [data]="data[0]" [events]="events[0]"></profile-v1>\n   <profile-v2 *ngIf="page!=undefined && page.name==2" [data]="data[1]" [events]="events[1]"></profile-v2>\n   <profile-v3 *ngIf="page!=undefined && page.name==3" [data]="data[2]" [events]="events[2]"></profile-v3>\n   <profile-v4 *ngIf="page!=undefined && page.name==4" [data]="data[3]" [events]="events[3]"></profile-v4>\n   <profile-v5 *ngIf="page!=undefined && page.name==5" [data]="data[4]" [events]="events[4]"></profile-v5>\n   <profile-v6 *ngIf="page!=undefined && page.name==6" [data]="data[5]" [events]="events[5]"></profile-v6>\n</ion-content>\n'/*ion-inline-end:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_toast_service_toast_service__["a" /* ToastService */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileV1Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_v1__ = __webpack_require__(703);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfileV1Module = (function () {
    function ProfileV1Module() {
    }
    ProfileV1Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile_v1__["a" /* ProfileV1Component */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile_v1__["a" /* ProfileV1Component */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__profile_v1__["a" /* ProfileV1Component */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ProfileV1Module);
    return ProfileV1Module;
}());

//# sourceMappingURL=profile-v1.module.js.map

/***/ }),

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileV1Component; });
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
 * Generated class for the ProfileV1Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ProfileV1Component = (function () {
    function ProfileV1Component() {
        var _this = this;
        this.onCallbackEvent = function (event) {
            if (_this.events[event]) {
                _this.events[event]();
            }
        };
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProfileV1Component.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProfileV1Component.prototype, "events", void 0);
    ProfileV1Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'profile-v1',template:/*ion-inline-start:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/components/profile/profile-v1/profile-v1.html"*/'  <div padding *ngIf="data!=null">\n   <div class="top-avt row ani-right-to-left">\n		<div class="thumb-avt bdra-10 pd-0" col-3>\n		  	<img [src]="data.user.imgAvatar" alt="">\n		</div>\n		<div class="text-right mgt-20" col-9>\n			<button ion-button small round outline class="stroke stroke-black stroke-1 text-black pd-10"  (click)="onCallbackEvent(\'onFollowClick\')">{{data.label.btnFollow}}</button>\n			<button ion-button small round class="text-white black pd-10" (click)="onCallbackEvent(\'onAddFriendClick\')">{{data.label.btnAddFriend}}</button>	\n		</div>\n\n		<div class="mgt-15">\n			<h2 class="fs-24 fw-600 spacing-1 mgb-0">{{data.user.username}}</h2>\n			<p class="fs-12 mgt-5">{{data.user.job}}</p>\n		</div>\n	</div>\n\n	<ion-row class="ani-left-to-right">\n		<ion-col>\n			<p class="fw-600 fs-18 mgb-0">{{data.user.followerCount}}</p>\n			<p class="fs-13 text-grey-3 mgt-0">{{data.label.txtFollower}}</p>\n		</ion-col>\n		<ion-col>\n			<p class="fw-600 fs-18 mgb-0">{{data.user.followingCount}}</p>\n			<p class="fs-13 text-grey-3 mgt-0">{{data.label.txtFollowing}}</p>\n		</ion-col>\n		<ion-col>\n			<p class="fw-600 fs-18 mgb-0">{{data.user.postCount}}</p>\n			<p class="fs-13 text-grey-3 mgt-0">{{data.label.txtPosted}}</p>\n		</ion-col>\n	</ion-row>\n\n	<ion-row class="wrapper-prd mgl--5 ani-bottom-to-top">\n		<ion-col col-3 *ngFor="let item of data.photos">\n			<div class="bdra-10 thumb-prd"><img [src]="item.path" alt=""></div>\n		</ion-col>\n	</ion-row>\n\n	<div class="social mgt-40 ani-right-to-left">\n		<h5 class="fs-14 uppercase">{{data.label.txtSocial}}</h5>\n\n		<button ion-button clear small icon-only class="text-grey-4" (click)="onCallbackEvent(\'onFacebookIconClick\')">\n			<ion-icon name="logo-facebook"></ion-icon>\n		</button>\n\n		<button ion-button clear small icon-only class="text-grey-4" (click)="onCallbackEvent(\'onTwitterIconClick\')">\n			<ion-icon name="logo-twitter"></ion-icon>\n		</button>\n\n		<button ion-button clear small icon-only class="text-grey-4" (click)="onCallbackEvent(\'onInstagramIconClick\')">\n			<ion-icon name="logo-instagram"></ion-icon>\n		</button>\n\n		<button ion-button clear small icon-only class="text-grey-4" (click)="onCallbackEvent(\'onGoogleIconClick\')">\n			<ion-icon name="logo-google"></ion-icon>\n		</button>\n\n		<button ion-button clear small icon-only class="text-grey-4" (click)="onCallbackEvent(\'onPinterestIconClick\')">\n			<ion-icon name="logo-pinterest"></ion-icon>\n		</button>\n\n		<button ion-button clear small icon-only class="text-grey-4" (click)="onCallbackEvent(\'onDribbleIconClick\')">\n			<ion-icon name="logo-dribbble"></ion-icon>\n		</button>\n\n		<button ion-button clear small icon-only class="text-grey-4" (click)="onCallbackEvent(\'onLinkedInIconClick\')">\n			<ion-icon name="logo-linkedin"></ion-icon>\n		</button>\n	</div>\n\n	<ion-row class="mgt-30 ani-bottom-to-top">\n		<h5 class="mgb-0 fs-14 uppercase">{{data.label.txtAboutMe}}</h5>\n		<p class="mgt-10 text-grey-4">{{data.user.aboutMe}}</p>\n	</ion-row>\n\n	<ion-row class="mgt-30 mgb-40 ani-right-to-left">\n		<h5 class="mgb-0 fs-14 uppercase">{{data.label.txtContactMe}}</h5>\n		<p class="mgb-0 text-grey-4">\n			<ion-icon class="mgr-10" name="ios-pin"></ion-icon>\n			{{data.user.address}}\n		</p>\n		<p class="mgb-0 text-grey-4">\n			<ion-icon class="mgr-10" name="md-mail"></ion-icon>\n		    {{data.user.mail}}\n		</p>\n		<p class="mgb-0 text-grey-4">\n			<ion-icon class="mgr-10" name="ios-phone-portrait"></ion-icon>\n			{{data.user.phone}}\n		</p>\n	</ion-row>\n	</div>\n\n'/*ion-inline-end:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/components/profile/profile-v1/profile-v1.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ProfileV1Component);
    return ProfileV1Component;
}());

//# sourceMappingURL=profile-v1.js.map

/***/ }),

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileV2Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_v2__ = __webpack_require__(705);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfileV2Module = (function () {
    function ProfileV2Module() {
    }
    ProfileV2Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile_v2__["a" /* ProfileV2Component */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile_v2__["a" /* ProfileV2Component */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__profile_v2__["a" /* ProfileV2Component */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ProfileV2Module);
    return ProfileV2Module;
}());

//# sourceMappingURL=profile-v2.module.js.map

/***/ }),

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileV2Component; });
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
 * Generated class for the ProfileV2Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ProfileV2Component = (function () {
    function ProfileV2Component() {
        var _this = this;
        this.onCallbackEvent = function (event) {
            if (_this.events[event]) {
                _this.events[event]();
            }
        };
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProfileV2Component.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProfileV2Component.prototype, "events", void 0);
    ProfileV2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'profile-v2',template:/*ion-inline-start:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/components/profile/profile-v2/profile-v2.html"*/'<div padding class="white-1" *ngIf="data!=null">\n	<div class="cover mgt--20 mgl--20 mgr--20 ani-fade-out">\n		<img [src]="data.user.imgCover" alt="">\n	</div>\n	<div class="mgt--50 text-center ani-bottom-to-top">\n		<div class="thumb-avt-pst shadow-3">\n			<img [src]="data.user.imgAvatar" alt="">\n		</div>\n		<h2>{{data.user.username}}</h2>\n		<p>{{data.user.job}}</p>\n		<button ion-button small round outline class="stroke stroke-1 stroke-pink text-pink" (click)="onCallbackEvent(\'onAddFriendClick\')">{{data.label.btnAddFriend}}</button>\n		<button ion-button small round class="pink text-white" (click)="onCallbackEvent(\'onFollowClick\')">{{data.label.btnFollow}}</button>\n	</div>\n\n	<ion-row class="mgt-10 ani-bottom-to-top">\n		<ion-col class="text-center">\n			<p class="fw-600 fs-18 mgb-0">{{data.user.followerCount}}</p>\n			<p class="fs-13 text-grey-3 mgt-0">{{data.label.txtFollower}}</p>\n		</ion-col>\n		<ion-col class="text-center">\n			<p class="fw-600 fs-18 mgb-0">{{data.user.followingCount}}</p>\n			<p class="fs-13 text-grey-3 mgt-0">{{data.label.txtFollowing}}</p>\n		</ion-col>\n		<ion-col class="text-center">\n			<p class="fw-600 fs-18 mgb-0">{{data.user.photosCount}}</p>\n			<p class="fs-13 text-grey-3 mgt-0">{{data.label.txtPhotos}}</p>\n		</ion-col>\n	</ion-row>\n\n	<ion-row class="mgt-30 ani-right-to-left">\n		<h5 class="mgb-0 fs-14 uppercase text-grey-3">{{data.label.txtAboutMe}}</h5>\n		<p class="mgt-10 text-grey-4 mgb-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa ante, sollicitudin sit amet ante et, suscipit ultrices justo.</p>\n		<button ion-button clear small icon-only class="text-grey-4" (click)="onCallbackEvent(\'onFacebookIconClick\')">\n			<ion-icon name="logo-facebook"></ion-icon>\n		</button>\n		<button ion-button clear small icon-only class="text-grey-4" (click)="onCallbackEvent(\'onTwitterIconClick\')">\n			<ion-icon name="logo-twitter"></ion-icon>\n		</button>\n		<button ion-button clear small icon-only class="text-grey-4" (click)="onCallbackEvent(\'onInstagramIconClick\')">\n			<ion-icon name="logo-instagram"></ion-icon>\n		</button>\n		<button ion-button clear small icon-only class="text-grey-4" (click)="onCallbackEvent(\'onGoogleIconClick\')">\n			<ion-icon name="logo-google"></ion-icon>\n		</button>\n		<button ion-button clear small icon-only class="text-grey-4" (click)="onCallbackEvent(\'onPinterestIconClick\')">\n			<ion-icon name="logo-pinterest"></ion-icon>\n		</button>\n		<button ion-button clear small icon-only class="text-grey-4" (click)="onCallbackEvent(\'onDribbleIconClick\')">\n			<ion-icon name="logo-dribbble"></ion-icon>\n		</button>\n		<button ion-button clear small icon-only class="text-grey-4" (click)="onCallbackEvent(\'onLinkedInIconClick\')">\n			<ion-icon name="logo-linkedin"></ion-icon>\n		</button>\n	</ion-row>\n	\n\n	<h5 class="fs-14 uppercase mgt-40 mgb-20 text-grey-3 ani-right-to-left">{{data.label.txtPhotos}}</h5>\n	<ion-row class="wrapper-photo mgl--5 mgr--5 mgb-30">\n		<ion-col col-4 *ngFor="let item of data.photos">\n			<div class="bdra-5 thumb-prd"><img [src]="item.path" alt=""></div>\n		</ion-col>\n	</ion-row>\n</div>'/*ion-inline-end:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/components/profile/profile-v2/profile-v2.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ProfileV2Component);
    return ProfileV2Component;
}());

//# sourceMappingURL=profile-v2.js.map

/***/ }),

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileV3Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_v3__ = __webpack_require__(707);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfileV3Module = (function () {
    function ProfileV3Module() {
    }
    ProfileV3Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile_v3__["a" /* ProfileV3Component */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile_v3__["a" /* ProfileV3Component */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__profile_v3__["a" /* ProfileV3Component */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ProfileV3Module);
    return ProfileV3Module;
}());

//# sourceMappingURL=profile-v3.module.js.map

/***/ }),

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileV3Component; });
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
 * Generated class for the ProfileV3Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ProfileV3Component = (function () {
    function ProfileV3Component() {
        var _this = this;
        this.show_prd = 'photos';
        this.onCallbackEvent = function (event) {
            if (_this.events[event]) {
                _this.events[event]();
            }
        };
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProfileV3Component.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProfileV3Component.prototype, "events", void 0);
    ProfileV3Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'profile-v3',template:/*ion-inline-start:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/components/profile/profile-v3/profile-v3.html"*/'<div padding class="white-1" *ngIf="data!=null">\n  	<div class="cover mgl--20 mgr--20 mgt--20 black-opct ani-left-to-right">\n  		<img [src]="data.user.imgCover" alt="">\n  	</div>\n\n	<ion-row class="mgt--30 ani-right-to-left">\n	  	<div class="wrapper-avt pdl-0" col-4>\n	  		<img [src]="data.user.imgAvatar" alt="">\n	  	</div>\n	  	<div class="mgt-40 pdl-15" col-8>\n	  		<h2 class="mgb-0 spacing-1">{{data.user.username}}</h2>\n	  		<p class="status mgt-0 text-grey-4">{{data.user.quote}}</p>\n	  	</div>\n	</ion-row>\n\n	<p class="text-grey-4 mgt-0 ani-right-to-left">{{data.user.job}}</p>\n\n  	<ion-row class="mgt-10 spacing-1 ani-bottom-to-top">\n  		<ion-col>\n			<p class="fw-600 fs-16 mgb-0">{{data.user.likeCount}}</p>\n			<p class="fs-13 text-grey-3 mgt-0">{{data.label.txtLikes}}</p>\n		</ion-col>\n		<ion-col>\n			<p class="fw-600 fs-16 mgb-0">{{data.user.followerCount}}</p>\n			<p class="fs-13 text-grey-3 mgt-0">{{data.label.txtFollower}}</p>\n		</ion-col>\n		<ion-col>\n			<p class="fw-600 fs-16 mgb-0">{{data.user.followingCount}}</p>\n			<p class="fs-13 text-grey-3 mgt-0">{{data.label.txtFollowing}}</p>\n		</ion-col>\n	</ion-row>\n\n	<ion-row class="mgt-10 ani-bottom-to-top">\n		<ion-col>\n			<button ion-button block class="stroke stroke-black stroke-2 uppercase bdra-0 transparent text-black fw-500 spacing-1 fs-13"  (click)="onCallbackEvent(\'onFollowClick\')">{{data.label.btnFollow}}</button>\n		</ion-col>\n		<ion-col>\n			<button ion-button block class="bdra-0 black uppercase text-white fw-500 spacing-1 fs-13" (click)="onCallbackEvent(\'onSendMessageClick\')">{{data.label.btnMessage}}</button>\n		</ion-col>\n	</ion-row>\n\n	<ion-toolbar no-border-top class="mgt-5 mgb-20 mgt-30 ani-bottom-to-top">\n	    <ion-segment [(ngModel)]="show_prd" class="segment-line-balance text-black stroke-black">\n	      	<ion-segment-button class="fs-12 pdl-5 pdr-5 text-left" value="photos">{{data.label.txtPhotos}}</ion-segment-button>\n	      	<ion-segment-button class="fs-12 pdl-5 pdr-5 text-left" value="video">{{data.label.txtVideos}}</ion-segment-button>\n	      	<ion-segment-button class="fs-12 pdl-5 pdr-5 text-left" value="app">{{data.label.txtApps}}</ion-segment-button>\n	      	<ion-segment-button class="fs-12 pdl-5 pdr-5 text-left" value="web">{{data.label.txtWebs}}</ion-segment-button>\n	    </ion-segment>\n	</ion-toolbar>\n\n	<div [ngSwitch]="show_prd" class="wrapper-show-prd mgb-30 ani-bottom-to-top">\n	    <ion-row class="mgl--5 mgr--5" *ngSwitchCase="\'photos\'">\n	      	<ion-col col-4 *ngFor="let item of data.photos">\n				<div class="thumb-prd"><img [src]="item.path" alt=""></div>\n			</ion-col>\n	\n	    </ion-row>\n\n	    <ion-row *ngSwitchCase="\'video\'">\n	       	<ion-col col-4 *ngFor="let item of data.videos">\n				<div class="thumb-prd"><img [src]="item.path" alt=""></div>\n			</ion-col>\n	    </ion-row>\n\n	    <ion-row *ngSwitchCase="\'app\'">\n	      	 	<ion-col col-4 *ngFor="let item of data.apps">\n				<div class="thumb-prd"><img [src]="item.path" alt=""></div>\n			</ion-col>\n	    </ion-row>\n\n	    <ion-row *ngSwitchCase="\'web\'">\n	      	<ion-col col-4 *ngFor="let item of data.webs">\n				<div class="thumb-prd"><img [src]="item.path" alt=""></div>\n			</ion-col>\n	    </ion-row>\n	</div>\n</div>\n'/*ion-inline-end:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/components/profile/profile-v3/profile-v3.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ProfileV3Component);
    return ProfileV3Component;
}());

//# sourceMappingURL=profile-v3.js.map

/***/ }),

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileV4Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_v4__ = __webpack_require__(709);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_masonry__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_masonry___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_masonry__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProfileV4Module = (function () {
    function ProfileV4Module() {
    }
    ProfileV4Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile_v4__["a" /* ProfileV4Component */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile_v4__["a" /* ProfileV4Component */]),
                __WEBPACK_IMPORTED_MODULE_3_angular2_masonry__["MasonryModule"]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__profile_v4__["a" /* ProfileV4Component */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ProfileV4Module);
    return ProfileV4Module;
}());

//# sourceMappingURL=profile-v4.module.js.map

/***/ }),

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileV4Component; });
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
 * Generated class for the ProfileV4Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ProfileV4Component = (function () {
    function ProfileV4Component() {
        var _this = this;
        this.show_prd = "posted";
        this.onCallbackEvent = function (event) {
            if (_this.events[event]) {
                _this.events[event]();
            }
        };
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProfileV4Component.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProfileV4Component.prototype, "events", void 0);
    ProfileV4Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'profile-v4',template:/*ion-inline-start:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/components/profile/profile-v4/profile-v4.html"*/'<div *ngIf="data!=null">\n	<div class="cover-blur">\n		<div class="wrapper-cover">\n			<img [src]="data.user.imgAvatar" alt="">\n		</div>\n\n		<div class="info-pst pdt-40">		\n			<h3 class="text-white spacing-1 mgt-5 text-center ani-bottom-to-top">{{data.user.username}}</h3>\n			<div class="wrapper-avt mg-auto shadow-3 ani-bottom-to-top">\n				<img [src]="data.user.imgAvatar" alt="">\n			</div>\n			<p class="text-white pdl-30 pdr-30 text-center ani-bottom-to-top">{{data.user.quote}}</p>\n			<div class="text-center ani-bottom-to-top">\n				<button ion-button round small class="white text-grey-5" (click)="onCallbackEvent(\'onFollowClick\')">{{data.label.btnFollow}}</button>\n				<button ion-button round small class="white text-grey-5" (click)="onCallbackEvent(\'onSendMessageClick\')">{{data.label.btnMessage}}</button>\n			</div>\n\n			<ion-row class="pdl-15 pdr-15 mgt-20 ani-bottom-to-top">\n			<div class="local" col-6>\n				<p class="text-white"><ion-icon name="ios-pin-outline" class="mgr-5"></ion-icon>{{data.user.address}}</p>\n			</div>\n			<div class="social text-right" col-6>\n				<button ion-button icon-only outline class="button-circle stroke-white stroke-1 text-white" (click)="onCallbackEvent(\'onFacebookIconClick\')">\n					<ion-icon class="fs-20" name="logo-facebook"></ion-icon>\n				</button>\n				<button ion-button icon-only outline class="button-circle stroke-white stroke-1 text-white" (click)="onCallbackEvent(\'onTwitterIconClick\')">\n					<ion-icon class="fs-20" name="logo-twitter"></ion-icon>\n				</button>\n				<button ion-button icon-only outline class="button-circle stroke-white stroke-1 text-white" (click)="onCallbackEvent(\'onInstagramIconClick\')">\n					<ion-icon class="fs-20" name="logo-instagram"></ion-icon>\n				</button>\n			</div>\n		</ion-row>\n\n		<ion-row class="mgt-10 pdl-15 pdr-15 spacing-1 black-opct ani-bottom-to-top">\n		<ion-col class="text-white text-center">\n		<p class="fw-100 fs-30 mgb-0 mgt-15">{{data.user.likeCount}}</p>\n		<p class="fs-13 text-white mgt-0">{{data.label.txtLikes}}</p>\n	</ion-col>\n	<ion-col class="text-white text-center">\n	<p class="fw-100 fs-30 mgb-0 mgt-15">{{data.user.followerCount}}</p>\n	<p class="fs-13 text-white mgt-0">{{data.label.txtFollower}}</p>\n</ion-col>\n<ion-col class="text-white text-center">\n<p class="fw-100 fs-30 mgb-0 mgt-15">{{data.user.followingCount}}</p>\n<p class="fs-13 text-white mgt-0">{{data.label.txtFollowing}}</p>\n</ion-col>\n</ion-row>\n</div>\n</div>\n\n\n<ion-toolbar no-border-top class="mgt-20 ani-top-to-bottom">\n<ion-segment [(ngModel)]="show_prd" class="segment-btn-group text-black stroke-black stroke-1 bdra-15">\n<ion-segment-button class="fs-14 black" value="posted">73 {{data.label.txtPosted}}</ion-segment-button>\n<ion-segment-button class="fs-14 black" value="pins">320 {{data.label.txtPins}}</ion-segment-button>\n</ion-segment>\n</ion-toolbar>\n\n\n<div [ngSwitch]="show_prd" class="mgt-10 ani-right-to-left">\n	<div *ngSwitchCase="\'posted\'">\n		<ion-row class="wrapper-prd">\n		  <ion-col col-3 *ngFor="let item of data.photos">\n		   <div class=" thumb-prd"><img [src]="item.path" alt=""></div>\n	    </ion-col>\n       </ion-row>\n</div>\n\n<div *ngSwitchCase="\'pins\'">\n	<ion-row class="wrapper-prd">\n	  <ion-col col-3 *ngFor="let item of data.pins">\n	    <div class="thumb-prd"><img [src]="item.path" alt=""></div>\n      </ion-col>\n    </ion-row>\n</div>\n</div>\n</div>\n'/*ion-inline-end:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/components/profile/profile-v4/profile-v4.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ProfileV4Component);
    return ProfileV4Component;
}());

//# sourceMappingURL=profile-v4.js.map

/***/ }),

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileV5Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_v5__ = __webpack_require__(711);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfileV5Module = (function () {
    function ProfileV5Module() {
    }
    ProfileV5Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile_v5__["a" /* ProfileV5Component */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile_v5__["a" /* ProfileV5Component */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__profile_v5__["a" /* ProfileV5Component */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ProfileV5Module);
    return ProfileV5Module;
}());

//# sourceMappingURL=profile-v5.module.js.map

/***/ }),

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileV5Component; });
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
 * Generated class for the ProfileV5Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ProfileV5Component = (function () {
    function ProfileV5Component() {
        var _this = this;
        this.onCallbackEvent = function (event) {
            if (_this.events[event]) {
                _this.events[event]();
            }
        };
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProfileV5Component.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProfileV5Component.prototype, "events", void 0);
    ProfileV5Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'profile-v5',template:/*ion-inline-start:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/components/profile/profile-v5/profile-v5.html"*/'<div class="white-1 profile-v5" *ngIf="data!=null">\n	<div class="cover">\n		<img [src]="data.user.imgCover" alt="">\n	</div>\n\n	<div padding class="wrapper-profile">\n		<div class="white shadow-2 mgt--70 ani-bottom-to-top">\n			<ion-row class="pdl-10 pdr-10 ani-bottom-to-top">\n				<div class="mgt--20 mgr-10 wrapper-avt pull-left">\n					<img [src]="data.user.imgAvatar" alt="">\n				</div>\n				<div>\n					<h3 class="fw-400 mgt-10 mgb-5">{{data.user.username}}</h3>\n					<p class="text-grey-4 fs-12 mgb-0 mgt-0">{{data.user.job}}</p>\n				</div>\n			</ion-row>\n			<ion-row class="spacing-1 pdb-10 mgt-15 ani-bottom-to-top">\n		  		<ion-col class="text-center">\n					<p class="text-grey-4 fs-20 mgb-0 mgt-0">{{data.user.likeCount}}</p>\n					<p class="fs-13 text-grey-3 mgt-0">{{data.label.txtLikes}}</p>\n				</ion-col>\n				<ion-col class="text-center">\n					<p class="text-grey-4 fs-20 mgb-0 mgt-0">{{data.user.followerCount}}</p>\n					<p class="fs-13 text-grey-3 mgt-0">{{data.label.txtFollower}}</p>\n				</ion-col>\n				<ion-col class="text-center">\n					<p class="text-grey-4 fs-20 mgb-0 mgt-0">{{data.user.followingCount}}</p>\n					<p class="fs-13 text-grey-3 mgt-0">{{data.label.txtFollowing}}</p>\n				</ion-col>\n			</ion-row>\n		</div>\n\n		<div class="white shadow-2 mgt-20 mgb-10 pdl-5 pdr-5 ani-bottom-to-top">\n			<ion-row class="pdt-10 ani-bottom-to-top">\n				<ion-col col-7>\n					<h5 class="mgt-5 text-grey-4 fs-14">{{data.label.txtMyCollection}}</h5>\n				</ion-col>\n			</ion-row>\n			\n			<ion-row>\n				<ion-col col-6 class="ani-bottom-to-top" *ngFor="let item of data.collections">\n					<div class="wrapper-item">\n						<img [src]="item.path" alt="">\n					</div>\n					<p class="fs-16 fw-500 mgt-5 mgb-5">{{item.name}}</p>\n					<p class="fs-13 mgt-0 text-grey-3">{{item.itemsCount}} {{data.label.txtItems}}</p>\n				</ion-col>\n				\n			</ion-row>\n		</div>\n	</div>\n</div>\n'/*ion-inline-end:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/components/profile/profile-v5/profile-v5.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ProfileV5Component);
    return ProfileV5Component;
}());

//# sourceMappingURL=profile-v5.js.map

/***/ }),

/***/ 712:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileV6Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_v6__ = __webpack_require__(713);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfileV6Module = (function () {
    function ProfileV6Module() {
    }
    ProfileV6Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile_v6__["a" /* ProfileV6Component */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile_v6__["a" /* ProfileV6Component */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__profile_v6__["a" /* ProfileV6Component */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ProfileV6Module);
    return ProfileV6Module;
}());

//# sourceMappingURL=profile-v6.module.js.map

/***/ }),

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileV6Component; });
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
 * Generated class for the ProfileV6Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ProfileV6Component = (function () {
    function ProfileV6Component() {
        var _this = this;
        this.onCallbackEvent = function (event) {
            if (_this.events[event]) {
                _this.events[event]();
            }
        };
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProfileV6Component.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProfileV6Component.prototype, "events", void 0);
    ProfileV6Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'profile-v6',template:/*ion-inline-start:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/components/profile/profile-v6/profile-v6.html"*/'<div class="indigo-vs-purple profile-v6" *ngIf="data!=null">  \n	<div padding class="ani-bottom-to-top">\n		<ion-row>\n			<ion-col col-4 class="text-center mgt-20">\n				<button ion-button icon-only class="button-circle black-opct text-white" (click)="onCallbackEvent(\'onSettingClick\')">\n					<ion-icon class="fs-20" name="ios-settings"></ion-icon>\n				</button>\n			</ion-col>\n			<div col-4 class="wrapper-avt">\n				<img src="{{data.user.imgAvatar}}" alt="">\n			</div>\n			<ion-col col-4 class="text-center mgt-20">\n				<button ion-button icon-only class="button-circle black-opct text-white" (click)="onCallbackEvent(\'onSendMessageClick\')">\n					<ion-icon class="fs-20" name="ios-text"></ion-icon>\n				</button>\n			</ion-col>\n		</ion-row>\n		<h2 class="text-center text-white mgt-10 mgb-0">{{data.user.username}}</h2>\n		<p class="text-center text-white-2 mgt-5"><ion-icon name="ios-pin-outline" class="mgr-5"></ion-icon>{{data.user.address}}</p>\n	</div>\n\n	<ion-row class="spacing-1 pdb-10 mgt-40 ani-bottom-to-top">\n  		<ion-col class="text-center text-white stroke-right stroke-grey-3 stroke-1">\n			<p class="fs-20 mgb-0 mgt-0">{{data.user.postCount}}</p>\n			<p class="fs-13 text-white-2 mgt-0 mgb-5">{{data.label.txtPosted}}</p>\n		</ion-col>\n		<ion-col class="text-center text-white stroke-right stroke-grey-3 stroke-1">\n			<p class="fs-20 mgb-0 mgt-0">{{data.user.pinCount}}</p>\n			<p class="fs-13 text-white-2 mgt-0 mgb-5">{{data.label.txtPins}}</p>\n		</ion-col>\n		<ion-col class="text-center text-white stroke-right stroke-grey-3 stroke-1">\n			<p class="fs-20 mgb-0 mgt-0">{{data.user.followerCount}}</p>\n			<p class="fs-13 text-white-2 mgt-0 mgb-5">{{data.label.txtFollower}}</p>\n		</ion-col>\n		<ion-col class="text-center text-white">\n			<p class="fs-20 mgb-0 mgt-0">{{data.user.followingCount}}</p>\n			<p class="fs-13 text-white-2 mgt-0 mgb-5">{{data.label.txtFollowing}}</p>\n		</ion-col>\n	</ion-row>\n\n\n	<div class="mgt-50 pdb-20 ani-bottom-to-top">\n      <ion-card class="bdra-5 black-opct">\n        <ion-row class="wrapper-item-line">\n          <div class="left-time-flex text-center stroke-right stroke-1 stroke-black-opct pdt-20 pdb-20" col-3>\n            <p class="day fs-24 fw-600 stroke-1 stroke stroke-white text-white">29</p>\n            <p class="time">\n              <span class="fw-400 block text-grey-3 uppercase">Nov</span>\n              <b class="fs-12 text-grey-3">11:05 am</b>\n            </p>\n          </div>\n\n          <div class="right-content pd-15 pdr-10" col-9>\n            <ion-list class="lst-no-background">\n              <ion-item class="pdl-0">\n                <ion-avatar item-start>\n                  <img src="assets/img/avt1.jpg">\n                </ion-avatar>\n                <h2 class="fs-13 fw-600 text-white">Woody</h2>\n                <p class="fs-12 text-grey-3">Designer</p>\n              </ion-item>\n            </ion-list>\n            <h3 class="fs-16 fw-600 mgb-10 text-white">Folly words widow one downs few age every seven.</h3>\n            <button ion-button round small icon-left outline class="stroke-white text-white">Call</button>\n            <button ion-button round small icon-left outline class="stroke-white text-white">SMS</button>\n          </div>\n        </ion-row>\n      </ion-card>\n\n\n      <ion-card class="bdra-5 black-opct">\n        <ion-row class="wrapper-item-line">\n          <div class="left-time-flex text-center stroke-right stroke-1 stroke-black-opct pdt-20 pdb-20" col-3>\n            <p class="day fs-24 fw-600 stroke-1 stroke stroke-white text-white">27</p>\n            <p class="time">\n              <span class="fw-400 block text-grey-3 uppercase">Nov</span>\n              <b class="fs-12 text-grey-3">9:01 pm</b>\n            </p>\n          </div>\n\n          <div class="right-content pd-15 pdr-10" col-9>\n            <ion-card-title class="fs-14 fw-600 text-white">Nine Inch Nails Live</ion-card-title>\n            <p class="fs-12 text-grey-3">The most popular industrial group ever, and largelyresponsible.</p>\n\n            <ion-row>\n                <ion-col col-4>\n                  <button ion-button icon-left clear small class="text-grey-2 pdl-0">\n                      <ion-icon name="thumbs-up"></ion-icon>\n                      <div>120</div>\n                  </button>\n                </ion-col>\n                <ion-col col-4 center text-center>\n                  <button ion-button icon-left clear small class="text-grey-2">\n                      <ion-icon name="text"></ion-icon>\n                      <div>40</div>\n                  </button>\n                </ion-col>\n                <ion-col col-4 right text-right>\n                  <button ion-button icon-left clear small class="text-grey-2 fs-20">\n                      <ion-icon name="ios-more"></ion-icon>\n                  </button>\n                </ion-col>\n            </ion-row>\n          </div>\n        </ion-row>\n      </ion-card>\n\n\n      <ion-card class="bdra-5 black-opct">\n        <ion-row class="wrapper-item-line">\n          <div class="left-time-flex text-center stroke-right stroke-1 stroke-black-opct pdt-20 pdb-20" col-3>\n            <p class="day fs-24 fw-600 stroke-1 stroke stroke-white text-white">25</p>\n            <p class="time">\n              <span class="fw-400 block text-grey-3 uppercase">Nov</span>\n              <b class="fs-12 text-grey-3">6:30 pm</b>\n            </p>\n          </div>\n\n          <div class="right-content pd-15 pdr-10" col-9>\n            <span class="text-white-2 inline-block mgt-10 indigo fs-11 bdra-5 pd-5 uppercase">\n              <ion-icon name="quote" class="fs-20 mgr-5"></ion-icon>quote\n            </span>\n            <ion-card-title class="fs-22 fw-600 text-white">Etiam rutrum iaculis nisi, eu faucibus arcu malesuada eu.</ion-card-title>\n\n            <ion-row>\n                <ion-col col-4>\n                  <button ion-button icon-left clear small class="text-grey-3 pdl-0">\n                      <ion-icon name="thumbs-up"></ion-icon>\n                      <div>120</div>\n                  </button>\n                </ion-col>\n                <ion-col col-4>\n                  <button ion-button icon-left clear small class="text-grey-3">\n                      <ion-icon name="text"></ion-icon>\n                      <div>40</div>\n                  </button>\n                </ion-col>\n            </ion-row>\n\n            <ion-item class="mgt-30 transparent pdb-10">\n                <ion-avatar item-start class="mgt-6 mgb-6">\n                  <img src="assets/img/avt1.jpg">\n                </ion-avatar>\n                <h2 class="fs-14 text-white">Marty McFly</h2>\n                <p class="fs-10 text-grey-3">November 5, 1955</p>\n            </ion-item>\n          </div>\n        </ion-row>\n      </ion-card>\n\n\n\n      <ion-card class="bdra-5 black-opct">\n        <ion-row class="wrapper-item-line">\n          <div class="left-time-flex text-center stroke-right stroke-1 stroke-black-opct pdt-20 pdb-20" col-3>\n            <p class="day fs-24 fw-600 stroke-1 stroke stroke-white text-white">21</p>\n            <p class="time">\n              <span class="fw-400 block text-grey-3 uppercase">Nov</span>\n              <b class="fs-12 text-grey-3">8:25 pm</b>\n            </p>\n          </div>\n\n          <div class="right-content pd-15 pdr-10" col-9>\n            <ion-card-title class="fs-18 fw-600 text-white">Nine Inch Nails Live</ion-card-title>\n            <p class="mgb-20 text-grey-3">The most popular industrial group ever, and largelyresponsible.</p>\n          </div>\n        </ion-row>\n      </ion-card>\n\n\n\n      <ion-card class="bdra-5 black-opct">\n        <ion-row class="wrapper-item-line">\n          <div class="left-time-flex text-center stroke-right stroke-1 stroke-black-opct pdt-20 pdb-20" col-3>\n            <p class="day fs-24 fw-600 stroke-1 stroke stroke-white text-white">19</p>\n            <p class="time">\n              <span class="fw-400 block text-grey-3 uppercase">Nov</span>\n              <b class="fs-12 text-grey-3">7:09 am</b>\n            </p>\n          </div>\n\n          <div class="right-content pd-15 pdr-10" col-9>\n            <ion-card-title class="fs-22 fw-600 spacing-1 text-white">Largelyresponsible for bringing the music to a mass audience.</ion-card-title>\n            <p class="text-grey-3">The most popular industrial group ever, and largelyresponsible for bringing the music to a mass audience.</p>\n            <button ion-button outline small round class="text-white stroke-1 stroke-white uppercase spacing-1 mgt-20 mgb-10">Read more</button>\n          </div>\n        </ion-row>\n      </ion-card>\n\n      <ion-card class="bdra-5 black-opct">\n        <ion-row class="wrapper-item-line">\n          <div class="left-time-flex text-center stroke-right stroke-1 stroke-black-opct pdt-20 pdb-20" col-3>\n            <p class="day fs-24 fw-600 stroke-1 stroke stroke-white text-white">9</p>\n            <p class="time">\n              <span class="fw-400 block text-grey-3 uppercase">Nov</span>\n              <b class="fs-12 text-grey-3">1:33 am</b>\n            </p>\n          </div>\n\n          <div class="right-content pd-15 pdr-10" col-9>\n            <img src="assets/img/bg16.jpg"/>\n            <ion-card-title class="fs-18 spacing-1 text-white">Nam maximus molestie mi.</ion-card-title>\n            <p class="card-subtitle text-grey-3">Phasellus rutrum iaculis arcu, at sodales tellus mattis vel.</p>\n          </div>\n        </ion-row>\n      </ion-card>\n\n\n      <ion-card class="bdra-5 black-opct">\n        <ion-row class="wrapper-item-line">\n          <div class="left-time-flex text-center stroke-right stroke-1 stroke-black-opct pdt-20 pdb-20" col-3>\n            <p class="day fs-24 fw-600 stroke-1 stroke stroke-white text-white">3</p>\n            <p class="time">\n              <span class="fw-400 block text-grey-3 uppercase">Nov</span>\n              <b class="fs-12 text-grey-3">5:03 am</b>\n            </p>\n          </div>\n\n          <div class="right-content pd-15 pdr-10" col-9>\n            <ion-card-title class="fs-18 fw-600 spacing-1 text-white">Largelyresponsible for bringing the music to a mass audience.</ion-card-title>\n            <p class="mgb-15 text-grey-3">The most popular industrial group ever, and largelyresponsible.</p>\n          </div>\n        </ion-row>\n      </ion-card>\n\n    </div>\n</div>\n'/*ion-inline-end:"/Users/andrewhein/Documents/GitHub/Project-Watermellon/src/components/profile/profile-v6/profile-v6.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ProfileV6Component);
    return ProfileV6Component;
}());

//# sourceMappingURL=profile-v6.js.map

/***/ })

});
//# sourceMappingURL=2.js.map