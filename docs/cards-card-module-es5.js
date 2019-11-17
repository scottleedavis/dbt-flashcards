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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _card_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./card.page */ "./src/app/cards/card.page.ts");







var CardPageModule = /** @class */ (function () {
    function CardPageModule() {
    }
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
    return CardPageModule;
}());



/***/ }),

/***/ "./src/app/cards/card.page.scss":
/*!**************************************!*\
  !*** ./src/app/cards/card.page.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ios #flash-cards, .md #flash-cards {\n  height: 100%;\n  font-size: large;\n  /*\n   *  Flip animation by David Walsh: https://davidwalsh.name/css-flip\n   */\n  /* entire container, keeps perspective */\n  /* flip the pane when hovered */\n  /* flip speed goes here */\n  /* hide back of pane during swap */\n  /* front pane, placed above back */\n  /* back, initially hidden pane */\n}\n.ios #flash-cards .flip-container, .md #flash-cards .flip-container {\n  -webkit-perspective: 1000px;\n          perspective: 1000px;\n}\n.ios #flash-cards .flip-container.flipped .flipper, .md #flash-cards .flip-container.flipped .flipper {\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg);\n}\n.ios #flash-cards .flip-container, .ios #flash-cards .front, .ios #flash-cards .back, .md #flash-cards .flip-container, .md #flash-cards .front, .md #flash-cards .back {\n  width: 100%;\n  height: 100%;\n  margin: 20px auto;\n}\n.ios #flash-cards .flipper, .md #flash-cards .flipper {\n  -webkit-transition: 0.6s;\n  transition: 0.6s;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  height: 100%;\n  position: relative;\n}\n.ios #flash-cards .front, .ios #flash-cards .back, .md #flash-cards .front, .md #flash-cards .back {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background-color: #ecf0f1;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  box-shadow: 0px 8px 4px -4px rgba(163, 163, 163, 0.25);\n  border: 1px solid #dee2e3;\n  margin: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 0px 20px;\n}\n.ios #flash-cards .front, .md #flash-cards .front {\n  z-index: 2;\n  /* for firefox 31 */\n  -webkit-transform: rotateY(0deg);\n          transform: rotateY(0deg);\n}\n.ios #flash-cards .back, .md #flash-cards .back {\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg);\n  background-color: #9eeeb6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zY290dGQvd29ya3NwYWNlL2RidG1pbmRzZXQvZmxhc2hjYXJkcy9zcmMvYXBwL2NhcmRzL2NhcmQucGFnZS5zY3NzIiwic3JjL2FwcC9jYXJkcy9jYXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHSTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUVBOztJQUFBO0VBSUEsd0NBQUE7RUFLQSwrQkFBQTtFQVdBLHlCQUFBO0VBUUEsa0NBQUE7RUFrQkEsa0NBQUE7RUFPQSxnQ0FBQTtBQ2hETjtBREFNO0VBQ0UsMkJBQUE7VUFBQSxtQkFBQTtBQ0VSO0FERU07RUFDRSxrQ0FBQTtVQUFBLDBCQUFBO0FDQVI7QURHTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNEUjtBREtNO0VBQ0Usd0JBQUE7RUFBQSxnQkFBQTtFQUNBLG9DQUFBO1VBQUEsNEJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNIUjtBRE9NO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFHQSxzREFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxpQkFBQTtBQ0xSO0FEU007RUFDRSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtVQUFBLHdCQUFBO0FDUFI7QURXTTtFQUNFLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSx5QkFBQTtBQ1RSIiwiZmlsZSI6InNyYy9hcHAvY2FyZHMvY2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5pb3MsIC5tZCB7XG5cbiAgICAjZmxhc2gtY2FyZHMge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgZm9udC1zaXplOiBsYXJnZTtcblxuICAgICAgLypcbiAgICAgICAqICBGbGlwIGFuaW1hdGlvbiBieSBEYXZpZCBXYWxzaDogaHR0cHM6Ly9kYXZpZHdhbHNoLm5hbWUvY3NzLWZsaXBcbiAgICAgICAqL1xuICBcbiAgICAgIC8qIGVudGlyZSBjb250YWluZXIsIGtlZXBzIHBlcnNwZWN0aXZlICovXG4gICAgICAuZmxpcC1jb250YWluZXIge1xuICAgICAgICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xuICAgICAgfVxuICBcbiAgICAgIC8qIGZsaXAgdGhlIHBhbmUgd2hlbiBob3ZlcmVkICovXG4gICAgICAuZmxpcC1jb250YWluZXIuZmxpcHBlZCAuZmxpcHBlciB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xuICAgICAgfVxuICBcbiAgICAgIC5mbGlwLWNvbnRhaW5lciwgLmZyb250LCAuYmFjayB7XG4gICAgICAgIHdpZHRoOiAxMDAlOyAvLzkwdnc7XG4gICAgICAgIGhlaWdodDogMTAwJTsvLzQwdmg7XG4gICAgICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgICAgfVxuICBcbiAgICAgIC8qIGZsaXAgc3BlZWQgZ29lcyBoZXJlICovXG4gICAgICAuZmxpcHBlciB7XG4gICAgICAgIHRyYW5zaXRpb246IDAuNnM7XG4gICAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuICBcbiAgICAgIC8qIGhpZGUgYmFjayBvZiBwYW5lIGR1cmluZyBzd2FwICovXG4gICAgICAuZnJvbnQsIC5iYWNrIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2YwZjE7XG4gICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggOHB4IDRweCAtNHB4IHJnYmEoMTYzLCAxNjMsIDE2MywgMC4yNSk7XG4gICAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDhweCA0cHggLTRweCByZ2JhKDE2MywgMTYzLCAxNjMsIDAuMjUpO1xuICAgICAgICBib3gtc2hhZG93OiAwcHggOHB4IDRweCAtNHB4IHJnYmEoMTYzLCAxNjMsIDE2MywgMC4yNSk7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTM7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHBhZGRpbmc6IDBweCAyMHB4O1xuICAgICAgfVxuICBcbiAgICAgIC8qIGZyb250IHBhbmUsIHBsYWNlZCBhYm92ZSBiYWNrICovXG4gICAgICAuZnJvbnQge1xuICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAvKiBmb3IgZmlyZWZveCAzMSAqL1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XG4gICAgICB9XG4gIFxuICAgICAgLyogYmFjaywgaW5pdGlhbGx5IGhpZGRlbiBwYW5lICovXG4gICAgICAuYmFjayB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWVlZWI2O1xuICAgICAgfVxuICAgIH1cbiAgfSIsIi5pb3MgI2ZsYXNoLWNhcmRzLCAubWQgI2ZsYXNoLWNhcmRzIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmb250LXNpemU6IGxhcmdlO1xuICAvKlxuICAgKiAgRmxpcCBhbmltYXRpb24gYnkgRGF2aWQgV2Fsc2g6IGh0dHBzOi8vZGF2aWR3YWxzaC5uYW1lL2Nzcy1mbGlwXG4gICAqL1xuICAvKiBlbnRpcmUgY29udGFpbmVyLCBrZWVwcyBwZXJzcGVjdGl2ZSAqL1xuICAvKiBmbGlwIHRoZSBwYW5lIHdoZW4gaG92ZXJlZCAqL1xuICAvKiBmbGlwIHNwZWVkIGdvZXMgaGVyZSAqL1xuICAvKiBoaWRlIGJhY2sgb2YgcGFuZSBkdXJpbmcgc3dhcCAqL1xuICAvKiBmcm9udCBwYW5lLCBwbGFjZWQgYWJvdmUgYmFjayAqL1xuICAvKiBiYWNrLCBpbml0aWFsbHkgaGlkZGVuIHBhbmUgKi9cbn1cbi5pb3MgI2ZsYXNoLWNhcmRzIC5mbGlwLWNvbnRhaW5lciwgLm1kICNmbGFzaC1jYXJkcyAuZmxpcC1jb250YWluZXIge1xuICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xufVxuLmlvcyAjZmxhc2gtY2FyZHMgLmZsaXAtY29udGFpbmVyLmZsaXBwZWQgLmZsaXBwZXIsIC5tZCAjZmxhc2gtY2FyZHMgLmZsaXAtY29udGFpbmVyLmZsaXBwZWQgLmZsaXBwZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbn1cbi5pb3MgI2ZsYXNoLWNhcmRzIC5mbGlwLWNvbnRhaW5lciwgLmlvcyAjZmxhc2gtY2FyZHMgLmZyb250LCAuaW9zICNmbGFzaC1jYXJkcyAuYmFjaywgLm1kICNmbGFzaC1jYXJkcyAuZmxpcC1jb250YWluZXIsIC5tZCAjZmxhc2gtY2FyZHMgLmZyb250LCAubWQgI2ZsYXNoLWNhcmRzIC5iYWNrIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG59XG4uaW9zICNmbGFzaC1jYXJkcyAuZmxpcHBlciwgLm1kICNmbGFzaC1jYXJkcyAuZmxpcHBlciB7XG4gIHRyYW5zaXRpb246IDAuNnM7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmlvcyAjZmxhc2gtY2FyZHMgLmZyb250LCAuaW9zICNmbGFzaC1jYXJkcyAuYmFjaywgLm1kICNmbGFzaC1jYXJkcyAuZnJvbnQsIC5tZCAjZmxhc2gtY2FyZHMgLmJhY2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZjBmMTtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA4cHggNHB4IC00cHggcmdiYSgxNjMsIDE2MywgMTYzLCAwLjI1KTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggOHB4IDRweCAtNHB4IHJnYmEoMTYzLCAxNjMsIDE2MywgMC4yNSk7XG4gIGJveC1zaGFkb3c6IDBweCA4cHggNHB4IC00cHggcmdiYSgxNjMsIDE2MywgMTYzLCAwLjI1KTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlMztcbiAgbWFyZ2luOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcGFkZGluZzogMHB4IDIwcHg7XG59XG4uaW9zICNmbGFzaC1jYXJkcyAuZnJvbnQsIC5tZCAjZmxhc2gtY2FyZHMgLmZyb250IHtcbiAgei1pbmRleDogMjtcbiAgLyogZm9yIGZpcmVmb3ggMzEgKi9cbiAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xufVxuLmlvcyAjZmxhc2gtY2FyZHMgLmJhY2ssIC5tZCAjZmxhc2gtY2FyZHMgLmJhY2sge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzllZWViNjtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/state.service */ "./src/app/state.service.ts");
/* harmony import */ var _card_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./card.data */ "./src/app/cards/card.data.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../search/search.component */ "./src/app/search/search.component.ts");







var CardPage = /** @class */ (function () {
    function CardPage(state, sanitizer, modalController) {
        var _this = this;
        this.state = state;
        this.sanitizer = sanitizer;
        this.modalController = modalController;
        this.index = 0;
        this.flipped = false;
        var randomizedData = this.shuffle(_card_data__WEBPACK_IMPORTED_MODULE_5__["data"]);
        this.frontContent = this.sanitizer.bypassSecurityTrustHtml(randomizedData[this.index].a);
        this.backContent = this.sanitizer.bypassSecurityTrustHtml(randomizedData[this.index].b);
        this.categoryContent = randomizedData[this.index].category;
        state.subject.subscribe(function (f) {
            if (!f) {
            }
            else if (f === "next") {
                _this.index = _this.index + 1 >= _card_data__WEBPACK_IMPORTED_MODULE_5__["data"].length ? 0 : _this.index + 1;
            }
            else if (f === "previous") {
                _this.index = _this.index - 1 < 0 ? _card_data__WEBPACK_IMPORTED_MODULE_5__["data"].length - 1 : _this.index - 1;
            }
            else if (f === "close") {
                _this.modalController.dismiss();
            }
            else {
                _this.modalController.dismiss();
                _this.index = randomizedData.findIndex(function (rd) { return rd.a === f; });
            }
            _this.flipped = false;
            _this.frontContent = _this.sanitizer.bypassSecurityTrustHtml(randomizedData[_this.index].a);
            _this.backContent = _this.sanitizer.bypassSecurityTrustHtml(randomizedData[_this.index].b);
            _this.categoryContent = randomizedData[_this.index].category;
        });
    }
    CardPage.prototype.swipeLeft = function () {
        this.state.update("next");
    };
    CardPage.prototype.swipeRight = function () {
        this.state.update("previous");
    };
    CardPage.prototype.flip = function () {
        this.flipped = !this.flipped;
    };
    CardPage.prototype.shuffle = function (origArray) {
        var array = origArray.slice();
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
    };
    CardPage.prototype.clickPrevious = function () {
        this.state.update("previous");
    };
    CardPage.prototype.clickNext = function () {
        this.state.update("next");
    };
    CardPage.prototype.clickSearch = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _search_search_component__WEBPACK_IMPORTED_MODULE_6__["SearchComponent"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CardPage.ctorParameters = function () { return [
        { type: src_app_state_service__WEBPACK_IMPORTED_MODULE_4__["StateService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
    ]; };
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
    return CardPage;
}());



/***/ })

}]);
//# sourceMappingURL=cards-card-module-es5.js.map