exports.id = 871;
exports.ids = [871];
exports.modules = {

/***/ 34698:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ components_Products)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(11440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/Product/Product.module.scss
var Product_module = __webpack_require__(55415);
var Product_module_default = /*#__PURE__*/__webpack_require__.n(Product_module);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/index.js
var node = __webpack_require__(17421);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion.mjs + 171 modules
var motion = __webpack_require__(41379);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./src/services/api/index.ts + 2 modules
var api = __webpack_require__(2498);
// EXTERNAL MODULE: ./node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(66558);
// EXTERNAL MODULE: ./node_modules/swiper/swiper-bundle.css
var swiper_bundle = __webpack_require__(97061);
// EXTERNAL MODULE: ./node_modules/swiper/swiper-react.mjs + 3 modules
var swiper_react = __webpack_require__(2797);
// EXTERNAL MODULE: ./node_modules/swiper/modules/index.mjs + 26 modules
var modules = __webpack_require__(11987);
// EXTERNAL MODULE: ./src/components/utils/translit.js
var translit = __webpack_require__(63522);
;// CONCATENATED MODULE: ./src/components/Product/index.tsx












const TopProduct = /*#__PURE__*/ (0,react_.forwardRef)(({ product, user }, ref)=>{
    const [domLoaded, setDomLoaded] = (0,react_.useState)(false);
    (0,react_.useEffect)(()=>{
        setDomLoaded(true);
    }, []);
    const { register, formState: { errors }, handleSubmit } = (0,index_esm/* useForm */.cI)();
    const onSubmit = async (dto)=>{
        try {
            const data = await (0,api/* Api */.V)().products.updateImages(product.id, dto.file[0]);
        } catch (err) {
            console.warn("Ошибка при добавлении файла", err);
            if (err.response) {
            // setErrorMessage(err.response.data.message);
            }
        }
    };
    const [popupVisible, setPopupVisible] = (0,react_.useState)(false);
    const openEditDialog = ()=>{
        setPopupVisible(true);
    };
    const closeEditDialog = ()=>{
        setPopupVisible(false);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
            ref: ref,
            className: (Product_module_default()).product,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: `/catalog/${String((0,translit/* translit */.b)(`/${product.generalGroup}`))}/${product.slug}/`,
                    children: domLoaded && /*#__PURE__*/ jsx_runtime_.jsx(swiper_react/* Swiper */.tq, {
                        modules: [
                            modules/* Navigation */.W_,
                            modules/* A11y */.s5,
                            modules/* Autoplay */.pt
                        ],
                        spaceBetween: 50,
                        slidesPerView: 1,
                        navigation: true,
                        className: (Product_module_default()).swiper,
                        children: product.images.map((image)=>{
                            return /*#__PURE__*/ jsx_runtime_.jsx(swiper_react/* SwiperSlide */.o5, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: `http://api.cadhome.ru/api/products/product-image/${image}`,
                                    alt: product.title,
                                    className: (Product_module_default()).productImage
                                })
                            }, image.id);
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Product_module_default()).productContent,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: `/catalog/${String((0,translit/* translit */.b)(`/${product.generalGroup}`))}/${product.slug}/`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: (Product_module_default()).productTitle,
                                children: product.title
                            })
                        }),
                        product.description && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: (Product_module_default()).productDescription,
                            children: product.description.length > 115 ? product.description.slice(0, 115) + "..." : product.description
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (Product_module_default()).productVolumeAndPrice,
                            children: [
                                product.price && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    className: (Product_module_default()).productPrice,
                                    children: [
                                        product.price,
                                        " ₽"
                                    ]
                                }),
                                product.volume && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    className: (Product_module_default()).productVolume,
                                    children: [
                                        product.volume,
                                        " мл."
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(node.Button, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: `/catalog/${String((0,translit/* translit */.b)(`/${product.generalGroup}`))}/${product.slug}/`,
                                className: (Product_module_default()).productLinkMore,
                                children: "Подробнее"
                            })
                        })
                    ]
                })
            ]
        })
    });
});
const MTopProduct = (0,motion/* motion */.E)(TopProduct);
/* harmony default export */ const Product = (MTopProduct);

// EXTERNAL MODULE: ./src/components/Products/Products.module.scss
var Products_module = __webpack_require__(82965);
var Products_module_default = /*#__PURE__*/__webpack_require__.n(Products_module);
// EXTERNAL MODULE: ./node_modules/react-redux/lib/index.js
var lib = __webpack_require__(8250);
;// CONCATENATED MODULE: ./src/components/Products/index.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 






const productsAnimation = {
    hidden: {
        opacity: 0,
        scale: 0
    },
    visible: (custom)=>({
            opacity: 1,
            scale: 1,
            transition: {
                delay: custom * 0.2,
                duration: 0.9
            }
        })
};
const Products = ({ top, products })=>{
    const [domLoaded, setDomLoaded] = (0,react_.useState)(false);
    (0,react_.useEffect)(()=>{
        setDomLoaded(true);
    }, []);
    const { user } = (0,lib.useSelector)((state)=>state.userReducer);
    const topProducts = products.filter((product)=>product.top === true);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: domLoaded && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(motion/* motion */.E.section, {
            className: (Products_module_default()).topProducts + " container",
            initial: "hidden",
            whileInView: "visible",
            viewport: {
                amount: 0.1,
                once: true
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (Products_module_default()).topProductsWrapper,
                    children: top ? topProducts.map((product, index)=>{
                        return /*#__PURE__*/ jsx_runtime_.jsx(Product, {
                            custom: index + 1,
                            variants: productsAnimation,
                            product: product,
                            user: user
                        }, product.id);
                    }) : products.map((product, index)=>{
                        return /*#__PURE__*/ jsx_runtime_.jsx(Product, {
                            custom: index + 1,
                            variants: productsAnimation,
                            product: product,
                            user: user
                        }, product.id + index);
                    })
                }),
                top ? /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/catalog",
                    className: (Products_module_default()).topProductsCatalog,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Перейти в каталог"
                    })
                }) : null
            ]
        })
    });
};
/* harmony default export */ const components_Products = (Products);


/***/ }),

/***/ 55415:
/***/ ((module) => {

// Exports
module.exports = {
	"product": "Product_product__AIg_U",
	"productImage": "Product_productImage__a2MCs",
	"productContent": "Product_productContent__GSQE_",
	"productEdit": "Product_productEdit__Mu4N9",
	"productDelete": "Product_productDelete__KqGKW",
	"productDescription": "Product_productDescription__JkUoR",
	"productVolumeAndPrice": "Product_productVolumeAndPrice__WRpj5",
	"productVolume": "Product_productVolume__och9b",
	"productPrice": "Product_productPrice__T6lor",
	"productBottom": "Product_productBottom__NbdsR",
	"productCart": "Product_productCart__Rd_9V",
	"productButton": "Product_productButton__N73TZ",
	"productCount": "Product_productCount__7MrPe",
	"productLinkMore": "Product_productLinkMore__Lm80g"
};


/***/ }),

/***/ 82965:
/***/ ((module) => {

// Exports
module.exports = {
	"topProducts": "Products_topProducts__QerK7",
	"topProductsWrapper": "Products_topProductsWrapper__MWD9a",
	"topProductsCatalog": "Products_topProductsCatalog__AFD2P"
};


/***/ }),

/***/ 37283:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`D:\development\react\cad\frontend\src\components\Products\index.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ })

};
;