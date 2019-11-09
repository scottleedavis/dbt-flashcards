(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nav-nav-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/nav/nav.page.html":
/*!*************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/nav/nav.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button (click)=\"clickPrevious()\">\n      <ion-icon name=\"arrow-round-back\"></ion-icon>\n      <ion-label>Previous</ion-label>\n    </ion-tab-button>\n\n\n    <ion-tab-button (click)=\"clickNext()\">\n      <ion-icon name=\"arrow-round-forward\"></ion-icon>\n      <ion-label>Next</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n\n</ion-tabs>\n"

/***/ }),

/***/ "./src/app/nav/nav-routing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/nav/nav-routing.module.ts ***!
  \*******************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _nav_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav.page */ "./src/app/nav/nav.page.ts");




var routes = [
    {
        path: 'tabs',
        component: _nav_page__WEBPACK_IMPORTED_MODULE_3__["NavPage"],
        children: [
            {
                path: 'tab2',
                children: [
                    {
                        path: '',
                        loadChildren: function () {
                            return __webpack_require__.e(/*! import() | cards-card-module */ "cards-card-module").then(__webpack_require__.bind(null, /*! ../cards/card.module */ "./src/app/cards/card.module.ts")).then(function (m) { return m.Tab2PageModule; });
                        }
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/tab2',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/tab2',
        pathMatch: 'full'
    }
];
var TabsPageRoutingModule = /** @class */ (function () {
    function TabsPageRoutingModule() {
    }
    TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TabsPageRoutingModule);
    return TabsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/nav/nav.module.ts":
/*!***********************************!*\
  !*** ./src/app/nav/nav.module.ts ***!
  \***********************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _nav_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav-routing.module */ "./src/app/nav/nav-routing.module.ts");
/* harmony import */ var _nav_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav.page */ "./src/app/nav/nav.page.ts");







var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _nav_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]
            ],
            declarations: [_nav_page__WEBPACK_IMPORTED_MODULE_6__["NavPage"]]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());



/***/ }),

/***/ "./src/app/nav/nav.page.scss":
/*!***********************************!*\
  !*** ./src/app/nav/nav.page.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/nav/nav.page.ts":
/*!*********************************!*\
  !*** ./src/app/nav/nav.page.ts ***!
  \*********************************/
/*! exports provided: NavPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavPage", function() { return NavPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/state.service */ "./src/app/state.service.ts");



var NavPage = /** @class */ (function () {
    function NavPage(state) {
        this.state = state;
    }
    NavPage.prototype.clickPrevious = function () {
        this.state.update("previous");
    };
    NavPage.prototype.clickNext = function () {
        this.state.update("next");
    };
    NavPage.ctorParameters = function () { return [
        { type: src_app_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"] }
    ]; };
    NavPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! raw-loader!./nav.page.html */ "./node_modules/raw-loader/index.js!./src/app/nav/nav.page.html"),
            styles: [__webpack_require__(/*! ./nav.page.scss */ "./src/app/nav/nav.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"]])
    ], NavPage);
    return NavPage;
}());



/***/ }),

/***/ "./src/app/state.service.ts":
/*!**********************************!*\
  !*** ./src/app/state.service.ts ***!
  \**********************************/
/*! exports provided: StateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateService", function() { return StateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var StateService = /** @class */ (function () {
    function StateService() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    StateService.prototype.update = function (action) {
        this.subject.next(action);
    };
    StateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StateService);
    return StateService;
}());



/***/ })

}]);
//# sourceMappingURL=nav-nav-module-es5.js.map