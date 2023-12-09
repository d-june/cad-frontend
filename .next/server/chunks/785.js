exports.id = 785;
exports.ids = [785];
exports.modules = {

/***/ 95184:
/***/ ((module) => {

// Exports
module.exports = {
	"breadcrumbs": "Breadcrumbs_breadcrumbs__0II_j",
	"breadcrumbsHome": "Breadcrumbs_breadcrumbsHome__1JjLd"
};


/***/ }),

/***/ 12785:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25124);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Breadcrumbs_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95184);
/* harmony import */ var _Breadcrumbs_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Breadcrumbs_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_icons_material_HomeOutlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85180);
/* harmony import */ var _mui_icons_material_HomeOutlined__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_HomeOutlined__WEBPACK_IMPORTED_MODULE_3__);




const Breadcrumbs = ({ textItems })=>{
    let itemsArray = textItems;
    if (textItems.length > 1) {
        itemsArray = textItems.slice(0, -1);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_Breadcrumbs_module_scss__WEBPACK_IMPORTED_MODULE_2___default().breadcrumbs),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: "/",
                className: (_Breadcrumbs_module_scss__WEBPACK_IMPORTED_MODULE_2___default().breadcrumbsHome),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_HomeOutlined__WEBPACK_IMPORTED_MODULE_3___default()), {})
            }),
            "/",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                children: [
                    itemsArray && itemsArray.map((item, index)=>{
                        if (item.text !== "undefined" && item.link) {
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: item.link,
                                        children: item.text
                                    }),
                                    " /"
                                ]
                            }, index);
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: textItems[textItems.length - 1].text !== "undefined" && textItems[textItems.length - 1].text
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Breadcrumbs);


/***/ })

};
;