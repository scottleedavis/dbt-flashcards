(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cards-card-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/cards/card.page.html":
/*!****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cards/card.page.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      DBT Flash Cards\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div id=\"flash-cards\">\n    <div class=\"flip-container\" (click)=\"flip()\" [class.flipped]=\"flipped\">\n      <div class=\"flipper\">\n    \n        <div class=\"front\" [innerHtml]=\"frontContent\"></div>\n    \n        <div class=\"back\" [innerHtml]=\"backContent\"></div>\n    \n      </div>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/cards/card.module.ts":
/*!**************************************!*\
  !*** ./src/app/cards/card.module.ts ***!
  \**************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _card_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./card.page */ "./src/app/cards/card.page.ts");







let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _card_page__WEBPACK_IMPORTED_MODULE_6__["CardPage"] }])
        ],
        declarations: [_card_page__WEBPACK_IMPORTED_MODULE_6__["CardPage"]]
    })
], Tab2PageModule);



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
/* harmony import */ var src_app_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/state.service */ "./src/app/state.service.ts");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data */ "./src/app/cards/data.ts");





let CardPage = class CardPage {
    constructor(state, sanitizer) {
        this.state = state;
        this.sanitizer = sanitizer;
        this.index = 0;
        this.flipped = false;
        const randomizedData = this.shuffle(_data__WEBPACK_IMPORTED_MODULE_4__["data"]);
        this.frontContent = this.sanitizer.bypassSecurityTrustHtml(randomizedData[this.index].a);
        this.backContent = this.sanitizer.bypassSecurityTrustHtml(randomizedData[this.index].b);
        state.subject.subscribe((f) => {
            if (f === "next") {
                this.index = this.index + 1 >= _data__WEBPACK_IMPORTED_MODULE_4__["data"].length ? 0 : this.index + 1;
            }
            else if (f === "previous") {
                this.index = this.index - 1 < 0 ? _data__WEBPACK_IMPORTED_MODULE_4__["data"].length - 1 : this.index - 1;
            }
            this.flipped = false;
            this.frontContent = this.sanitizer.bypassSecurityTrustHtml(randomizedData[this.index].a);
            this.backContent = this.sanitizer.bypassSecurityTrustHtml(randomizedData[this.index].b);
        });
    }
    flip() {
        this.flipped = !this.flipped;
    }
    shuffle(array) {
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
};
CardPage.ctorParameters = () => [
    { type: src_app_state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
CardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab2',
        template: __webpack_require__(/*! raw-loader!./card.page.html */ "./node_modules/raw-loader/index.js!./src/app/cards/card.page.html"),
        styles: [__webpack_require__(/*! ./card.page.scss */ "./src/app/cards/card.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
], CardPage);



/***/ }),

/***/ "./src/app/cards/data.ts":
/*!*******************************!*\
  !*** ./src/app/cards/data.ts ***!
  \*******************************/
/*! exports provided: data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
const data = [
    {
        a: "Wise Mind: States of Mind",
        b: "<img src=\"https://i.pinimg.com/originals/06/62/9a/06629a5942e4b4779d23d686bde4afee.png\">",
    },
    {
        a: "Taking Hold of Your Mind: \"What\" skills",
        b: `
        <ul>
        <li><b>Observe</b>: Notice your body sensations, Pay attention, Control your attention, Practice wordless watching, Observe both inside and outside yourself</li>
        <li><b>Describe</b>: Put words on the experience.  Label what you observe.  Unglue your interpretations and opinions.  Remember, if you can't observe it through your senses you can't describe it.</li>
        <li><b>Participate</b>: Throw yourself copletely into activities of the current moment.  Become one with whatever you are doing.  Act intuitively from Wise Mind.  Go with the flow.</li>
        </ul>
        `,
    },
    {
        a: "Taking Hold of Your Mind: \"How\" skills",
        b: `
        <ul>
        <li><b>Non-Judgementally</b>: See, but don't evaluate as good or bad.  Accept each moment like a blanket spread out on the lawn.  Acknowledge but don't judge.  Don't judge your judging.</li>
        <li><b>One-Mindfully</b>: Rivet yourself to now.  Do one thing at a time.  Let go of distractions.  Concentrate your mind</li>
        <li><b>Effectively</b>: Be mindful of your goals in the situtation.  Focus on what works.  Play by the rules.  Act as skillfully as your can.  Let go of willfulness and sitting on your hands.</li>
        </ul>
        `,
    },
    {
        a: "Right vs. Effective",
        b: "It is better to be effective than right."
    },
    {
        a: "DEAR MAN",
        b: `
        <ul>
        <li><b>Describe</b>: Describe the current situation.  Stick to the facts</li>
        <li><b>Express</b>: Express your FEELINGS and OPINIONS about the situation.  Don't assume the other person knows how you feel</li>
        <li><b>Assert</b>: Assert yourself by ASKING for what you want or SAYING NO clearly.  Don't assume others will figure out what you want</li>
        <li><b>Reinforce</b>: Reinforce the person ahead of time by expaining postive effect of getting what you want or need.</li>
        <li><b>Mindful</b>: Keep your focus ON YOUR GOALS.  Maintain your position.  Don't be distracted.</li>
        <li><b>Appear confident</b>: Appear EFFECTIVE and competent.  Use a confident voice tone and physical mannger.  Make good eye contact.</li>
        <li><b>Negotiate</b>: Be willing to GIVE TO GET.  Offer and ask for other solutions to the problem.</li>
        </ul>
        `
    },
    {
        a: "GIVE (DEAR MAN, GIVE)",
        b: `
        <ul>
        <li><b>Gentle</b>: BE NICE and respectful.  No attacks.  No threats.  No judging.  No sneering</li>
        <li><b>Interested</b>: LISTEN and APPEAR INTERESTED in the other person.  Listen to the other person's point of view.</li>
        <li><b>Validate</b>: With WORDS AND ACTIONS, show that you unerstand the other person's feelings and thoughts about the situation</li>
        <li><b>Easy mannger</b>: Use a little humor.  SMILE.  Ease the person along.  Be light hearted.  Soft sell.</li>
        </ul>
        `
    },
    {
        a: "Levels of Validation",
        b: `
        <ul>
        <li><b>Pay Attention</b>: Look interested in the other person instead of bored.  No multitasking</li>
        <li><b>Reflect Back</b>: Say back what you heard the other person say or do.  No judgemental language or tone of voice.</li>
        <li><b>Don't Read minds</b>: Be sensitive to what is not being said by the other person.  Pay attention to facial expressions, body language.</li>
        <li><b>Understand</b>: Look for how what the other person is feeling, thinking, or doing makes sense, based on the person's past/present experiences.</li>
        <li><b>Acknowledge the Valid</b>: Look for how the person's feelings, thinking, or actions are valid responses.</li>
        <li><b>Show Equality</b>: Be yourself.  Don't "one up" or "one down" the other person.  The the other as an equal</li>
        </ul>
        `
    },
    {
        a: "Keeping Respect for yourself (FAST)",
        b: `
        <ul>
        <li><b>Fair</b>: Be fair to YOURSELF and to the OTHER person  Remember to VALIDATE YOUR OWN feelings and wishes as well as the other person's</li>
        <li><b>Apologies</b>: Don't overapologize.  No apologizing for being alive or making a request or having an opinion or disagreeing.  No LOOKING ASHAMED.</li>
        <li><b>Stick to values</b>: Stick to YOUR OWN values.  Don't seel out your values or integrity for reasons that aren't VERY important.  "Stick to your guns."</li>
        <li><b>Truthful</b>: Don't lie.  Don't act helpless when you are not.  Don't exaggerate or make up excuses.</li>
        </ul>
        `
    },
    {
        a: "Dialectics",
        b: `
        <ol>
        <li><b>The universe is filled with opposing sides/opposing forces</b></li>
        <li><b>Everything and every person is connected in some way</b></li>
        <li><b>Change is the only constant</b></li>
        <li><b>Change is transactional</b></li>
        </ol>
        `
    },
    {
        a: "Check the facts",
        b: "Checkout whether your emotional reactions fit the facts of the situation.  Changing your beliefs and assumptions to fit the facts can help you change your emotional reactions to situations"
    },
    {
        a: "Opposite Action",
        b: "When your emotions do not fit the facts, or when acting on your emotions is not effective, acting opposite (all the way) will change your emotional reactions"
    },
    {
        a: "Problem Solving",
        b: "When the facts themselves are the problem, solving the problem will reduce the frequency of negative emotions."
    },
    {
        a: "ABC PLEASE",
        b: `
        <ul>
        <li><b>A</b>ccumulate positive emtions.
        <li><b>B</b>uild mastery
        <li><b>C</b>ope ahead of time with emotional situations
        <li><b>PLEASE</b>: Take care of your mind by taking care of your body.  Treat Physical illness, balance eating, avoid mood-altering substances, balance sleep, and get exercise
        </ul>
        `
    },
    {
        a: "STOP",
        b: `
        <ul>
        <li><b>S</b>top: Do not just react.  Stop!  Stay in control!
        <li><b>T</b>ake a step back: Take a break.  Let go.  Do not let your feelings make you act impulsively.
        <li><b>O</b>bserve: Notice what is going on inside and outside you.  What is the situation?  What are your thoughts and feelings?  What are others saying or doing?
        <li><b>P</b>roceed mindfully: Act with awareness.  In deciding what to do, consider your thoughts and feelings, the situation, and other peoples thoughts and feelings.  Think about your goals.  Ask Wise Mind: What actions will make it better or worse?
        </ul>
        `
    },
    {
        a: "TIP skills",
        b: `
        <ul>
        <li><b>T</b>ip the temperature of your face with COLD WATER (to calm down fast)
        <li><b>I</b>ntense exercise (to calm down your body when it is revved up by emotion)
        <li><b>P</b>aced Breathing (slow, deep breathing soothes the nervous system and increases oxygen flow)
        <li><b>P</b>aired muscle relaxation (to calm down by pairing muscle relaxation with breathing out)
        </ul>
        `
    },
    {
        a: "What is radical acceptance?",
        b: `
        <ol>
        <li>Radical means all the way, complete and total
        <li>It is accepting in your mind, your heart, and your body.
        <li>It's when you stop fighting reality, stop throwing tantrums because reality is not the way you want it, and let go of bitterness
        </ol>
        `
    }
];


/***/ })

}]);
//# sourceMappingURL=cards-card-module-es2015.js.map