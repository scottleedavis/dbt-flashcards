(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cards-card-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/cards/card.page.html":
/*!****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cards/card.page.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      {{ categoryContent }}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div id=\"flash-cards\" (swipeLeft)=\"swipeLeft()\" (swipeRight)=\"swipeRight()\">\n    <div class=\"flip-container\" (click)=\"flip()\" [class.flipped]=\"flipped\">\n      <div class=\"flipper\">\n    \n        <div class=\"front\" [innerHtml]=\"frontContent\"></div>\n    \n        <div class=\"back\" [innerHtml]=\"backContent\"></div>\n    \n      </div>\n    </div>\n  </div>\n</ion-content>\n\n<ion-tab-bar slot=\"bottom\">\n  <ion-tab-button (click)=\"clickPrevious()\">\n    <ion-icon name=\"arrow-round-back\"></ion-icon>\n    <ion-label>Previous</ion-label>\n  </ion-tab-button>\n\n  <ion-tab-button (click)=\"clickSearch()\">\n    <ion-icon name=\"search\"></ion-icon>\n    <ion-label>Search</ion-label>\n  </ion-tab-button>\n\n  <ion-tab-button (click)=\"clickNext()\">\n    <ion-icon name=\"arrow-round-forward\"></ion-icon>\n    <ion-label>Next</ion-label>\n  </ion-tab-button>\n</ion-tab-bar>\n"

/***/ }),

/***/ "./src/app/cards/card.module.ts":
/*!**************************************!*\
  !*** ./src/app/cards/card.module.ts ***!
  \**************************************/
/*! exports provided: CardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardPageModule", function() { return CardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _card_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./card.page */ "./src/app/cards/card.page.ts");







let CardPageModule = class CardPageModule {
};
CardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _card_page__WEBPACK_IMPORTED_MODULE_6__["CardPage"] }])
        ],
        declarations: [_card_page__WEBPACK_IMPORTED_MODULE_6__["CardPage"]],
    })
], CardPageModule);



/***/ }),

/***/ "./src/app/cards/card.page.scss":
/*!**************************************!*\
  !*** ./src/app/cards/card.page.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ios #flash-cards, .md #flash-cards {\n  height: 100%;\n  font-size: large;\n  /*\n   *  Flip animation by David Walsh: https://davidwalsh.name/css-flip\n   */\n  /* entire container, keeps perspective */\n  /* flip the pane when hovered */\n  /* flip speed goes here */\n  /* hide back of pane during swap */\n  /* front pane, placed above back */\n  /* back, initially hidden pane */\n}\n.ios #flash-cards .flip-container, .md #flash-cards .flip-container {\n  -webkit-perspective: 1000px;\n          perspective: 1000px;\n}\n.ios #flash-cards .flip-container.flipped .flipper, .md #flash-cards .flip-container.flipped .flipper {\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg);\n}\n.ios #flash-cards .flip-container, .ios #flash-cards .front, .ios #flash-cards .back, .md #flash-cards .flip-container, .md #flash-cards .front, .md #flash-cards .back {\n  width: 100%;\n  height: 100%;\n  margin: 20px auto;\n}\n.ios #flash-cards .flipper, .md #flash-cards .flipper {\n  -webkit-transition: 0.6s;\n  transition: 0.6s;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  height: 100%;\n  position: relative;\n}\n.ios #flash-cards .front, .ios #flash-cards .back, .md #flash-cards .front, .md #flash-cards .back {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background-color: #ecf0f1;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  box-shadow: 0px 8px 4px -4px rgba(163, 163, 163, 0.25);\n  border: 1px solid #dee2e3;\n  margin: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 0px 20px;\n}\n.ios #flash-cards .front, .md #flash-cards .front {\n  z-index: 2;\n  /* for firefox 31 */\n  -webkit-transform: rotateY(0deg);\n          transform: rotateY(0deg);\n}\n.ios #flash-cards .back, .md #flash-cards .back {\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg);\n  background-color: #9eeeb6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zY290dGQvd29ya3NwYWNlL2RidC1mbGFzaGNhcmRzL3NyYy9hcHAvY2FyZHMvY2FyZC5wYWdlLnNjc3MiLCJzcmMvYXBwL2NhcmRzL2NhcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdJO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBRUE7O0lBQUE7RUFJQSx3Q0FBQTtFQUtBLCtCQUFBO0VBV0EseUJBQUE7RUFRQSxrQ0FBQTtFQWtCQSxrQ0FBQTtFQU9BLGdDQUFBO0FDaEROO0FEQU07RUFDRSwyQkFBQTtVQUFBLG1CQUFBO0FDRVI7QURFTTtFQUNFLGtDQUFBO1VBQUEsMEJBQUE7QUNBUjtBREdNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0RSO0FES007RUFDRSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0Esb0NBQUE7VUFBQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0hSO0FET007RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUdBLHNEQUFBO0VBQ0EseUJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGlCQUFBO0FDTFI7QURTTTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO1VBQUEsd0JBQUE7QUNQUjtBRFdNO0VBQ0Usa0NBQUE7VUFBQSwwQkFBQTtFQUNBLHlCQUFBO0FDVFIiLCJmaWxlIjoic3JjL2FwcC9jYXJkcy9jYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmlvcywgLm1kIHtcblxuICAgICNmbGFzaC1jYXJkcyB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBmb250LXNpemU6IGxhcmdlO1xuXG4gICAgICAvKlxuICAgICAgICogIEZsaXAgYW5pbWF0aW9uIGJ5IERhdmlkIFdhbHNoOiBodHRwczovL2Rhdmlkd2Fsc2gubmFtZS9jc3MtZmxpcFxuICAgICAgICovXG4gIFxuICAgICAgLyogZW50aXJlIGNvbnRhaW5lciwga2VlcHMgcGVyc3BlY3RpdmUgKi9cbiAgICAgIC5mbGlwLWNvbnRhaW5lciB7XG4gICAgICAgIHBlcnNwZWN0aXZlOiAxMDAwcHg7XG4gICAgICB9XG4gIFxuICAgICAgLyogZmxpcCB0aGUgcGFuZSB3aGVuIGhvdmVyZWQgKi9cbiAgICAgIC5mbGlwLWNvbnRhaW5lci5mbGlwcGVkIC5mbGlwcGVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG4gICAgICB9XG4gIFxuICAgICAgLmZsaXAtY29udGFpbmVyLCAuZnJvbnQsIC5iYWNrIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7IC8vOTB2dztcbiAgICAgICAgaGVpZ2h0OiAxMDAlOy8vNDB2aDtcbiAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgICB9XG4gIFxuICAgICAgLyogZmxpcCBzcGVlZCBnb2VzIGhlcmUgKi9cbiAgICAgIC5mbGlwcGVyIHtcbiAgICAgICAgdHJhbnNpdGlvbjogMC42cztcbiAgICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG4gIFxuICAgICAgLyogaGlkZSBiYWNrIG9mIHBhbmUgZHVyaW5nIHN3YXAgKi9cbiAgICAgIC5mcm9udCwgLmJhY2sge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZjBmMTtcbiAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA4cHggNHB4IC00cHggcmdiYSgxNjMsIDE2MywgMTYzLCAwLjI1KTtcbiAgICAgICAgLW1vei1ib3gtc2hhZG93OiAwcHggOHB4IDRweCAtNHB4IHJnYmEoMTYzLCAxNjMsIDE2MywgMC4yNSk7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA4cHggNHB4IC00cHggcmdiYSgxNjMsIDE2MywgMTYzLCAwLjI1KTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlMztcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcGFkZGluZzogMHB4IDIwcHg7XG4gICAgICB9XG4gIFxuICAgICAgLyogZnJvbnQgcGFuZSwgcGxhY2VkIGFib3ZlIGJhY2sgKi9cbiAgICAgIC5mcm9udCB7XG4gICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgIC8qIGZvciBmaXJlZm94IDMxICovXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcbiAgICAgIH1cbiAgXG4gICAgICAvKiBiYWNrLCBpbml0aWFsbHkgaGlkZGVuIHBhbmUgKi9cbiAgICAgIC5iYWNrIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5ZWVlYjY7XG4gICAgICB9XG4gICAgfVxuICB9IiwiLmlvcyAjZmxhc2gtY2FyZHMsIC5tZCAjZmxhc2gtY2FyZHMge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIC8qXG4gICAqICBGbGlwIGFuaW1hdGlvbiBieSBEYXZpZCBXYWxzaDogaHR0cHM6Ly9kYXZpZHdhbHNoLm5hbWUvY3NzLWZsaXBcbiAgICovXG4gIC8qIGVudGlyZSBjb250YWluZXIsIGtlZXBzIHBlcnNwZWN0aXZlICovXG4gIC8qIGZsaXAgdGhlIHBhbmUgd2hlbiBob3ZlcmVkICovXG4gIC8qIGZsaXAgc3BlZWQgZ29lcyBoZXJlICovXG4gIC8qIGhpZGUgYmFjayBvZiBwYW5lIGR1cmluZyBzd2FwICovXG4gIC8qIGZyb250IHBhbmUsIHBsYWNlZCBhYm92ZSBiYWNrICovXG4gIC8qIGJhY2ssIGluaXRpYWxseSBoaWRkZW4gcGFuZSAqL1xufVxuLmlvcyAjZmxhc2gtY2FyZHMgLmZsaXAtY29udGFpbmVyLCAubWQgI2ZsYXNoLWNhcmRzIC5mbGlwLWNvbnRhaW5lciB7XG4gIHBlcnNwZWN0aXZlOiAxMDAwcHg7XG59XG4uaW9zICNmbGFzaC1jYXJkcyAuZmxpcC1jb250YWluZXIuZmxpcHBlZCAuZmxpcHBlciwgLm1kICNmbGFzaC1jYXJkcyAuZmxpcC1jb250YWluZXIuZmxpcHBlZCAuZmxpcHBlciB7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xufVxuLmlvcyAjZmxhc2gtY2FyZHMgLmZsaXAtY29udGFpbmVyLCAuaW9zICNmbGFzaC1jYXJkcyAuZnJvbnQsIC5pb3MgI2ZsYXNoLWNhcmRzIC5iYWNrLCAubWQgI2ZsYXNoLWNhcmRzIC5mbGlwLWNvbnRhaW5lciwgLm1kICNmbGFzaC1jYXJkcyAuZnJvbnQsIC5tZCAjZmxhc2gtY2FyZHMgLmJhY2sge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDIwcHggYXV0bztcbn1cbi5pb3MgI2ZsYXNoLWNhcmRzIC5mbGlwcGVyLCAubWQgI2ZsYXNoLWNhcmRzIC5mbGlwcGVyIHtcbiAgdHJhbnNpdGlvbjogMC42cztcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaW9zICNmbGFzaC1jYXJkcyAuZnJvbnQsIC5pb3MgI2ZsYXNoLWNhcmRzIC5iYWNrLCAubWQgI2ZsYXNoLWNhcmRzIC5mcm9udCwgLm1kICNmbGFzaC1jYXJkcyAuYmFjayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNmMGYxO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDhweCA0cHggLTRweCByZ2JhKDE2MywgMTYzLCAxNjMsIDAuMjUpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCA4cHggNHB4IC00cHggcmdiYSgxNjMsIDE2MywgMTYzLCAwLjI1KTtcbiAgYm94LXNoYWRvdzogMHB4IDhweCA0cHggLTRweCByZ2JhKDE2MywgMTYzLCAxNjMsIDAuMjUpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmUzO1xuICBtYXJnaW46IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBwYWRkaW5nOiAwcHggMjBweDtcbn1cbi5pb3MgI2ZsYXNoLWNhcmRzIC5mcm9udCwgLm1kICNmbGFzaC1jYXJkcyAuZnJvbnQge1xuICB6LWluZGV4OiAyO1xuICAvKiBmb3IgZmlyZWZveCAzMSAqL1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XG59XG4uaW9zICNmbGFzaC1jYXJkcyAuYmFjaywgLm1kICNmbGFzaC1jYXJkcyAuYmFjayB7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWVlZWI2O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/cards/card.page.ts":
/*!************************************!*\
  !*** ./src/app/cards/card.page.ts ***!
  \************************************/
/*! exports provided: CardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardPage", function() { return CardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/state.service */ "./src/app/state.service.ts");
/* harmony import */ var _card_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./card.data */ "./src/app/cards/card.data.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../search/search.component */ "./src/app/search/search.component.ts");







let CardPage = class CardPage {
    constructor(state, sanitizer, modalController) {
        this.state = state;
        this.sanitizer = sanitizer;
        this.modalController = modalController;
        this.index = 0;
        this.flipped = false;
        const randomizedData = this.shuffle(_card_data__WEBPACK_IMPORTED_MODULE_5__["data"]);
        this.frontContent = this.sanitizer.bypassSecurityTrustHtml(randomizedData[this.index].a);
        this.backContent = this.sanitizer.bypassSecurityTrustHtml(randomizedData[this.index].b);
        this.categoryContent = randomizedData[this.index].category;
        state.subject.subscribe((f) => {
            if (!f) {
            }
            else if (f === "next") {
                this.index = this.index + 1 >= _card_data__WEBPACK_IMPORTED_MODULE_5__["data"].length ? 0 : this.index + 1;
            }
            else if (f === "previous") {
                this.index = this.index - 1 < 0 ? _card_data__WEBPACK_IMPORTED_MODULE_5__["data"].length - 1 : this.index - 1;
            }
            else if (f === "close") {
                this.modalController.dismiss();
            }
            else {
                this.modalController.dismiss();
                this.index = randomizedData.findIndex(rd => rd.a === f);
            }
            this.flipped = false;
            this.frontContent = this.sanitizer.bypassSecurityTrustHtml(randomizedData[this.index].a);
            this.backContent = this.sanitizer.bypassSecurityTrustHtml(randomizedData[this.index].b);
            this.categoryContent = randomizedData[this.index].category;
        });
    }
    swipeLeft() {
        this.state.update("next");
    }
    swipeRight() {
        this.state.update("previous");
    }
    flip() {
        this.flipped = !this.flipped;
    }
    shuffle(origArray) {
        let array = [...origArray];
        var currentIndex = array.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
    clickPrevious() {
        this.state.update("previous");
    }
    clickNext() {
        this.state.update("next");
    }
    clickSearch() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _search_search_component__WEBPACK_IMPORTED_MODULE_6__["SearchComponent"]
            });
            return yield modal.present();
        });
    }
};
CardPage.ctorParameters = () => [
    { type: src_app_state_service__WEBPACK_IMPORTED_MODULE_4__["StateService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
];
CardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab2',
        template: __webpack_require__(/*! raw-loader!./card.page.html */ "./node_modules/raw-loader/index.js!./src/app/cards/card.page.html"),
        styles: [__webpack_require__(/*! ./card.page.scss */ "./src/app/cards/card.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_state_service__WEBPACK_IMPORTED_MODULE_4__["StateService"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
], CardPage);



/***/ })

}]);
//# sourceMappingURL=cards-card-module-es2015.js.map