(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[43],{

/***/ 50924:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

"use client";

var _interopRequireDefault = __webpack_require__(26314);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _createSvgIcon = _interopRequireDefault(__webpack_require__(80984));
var _jsxRuntime = __webpack_require__(57437);
var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "m12 5.69 5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3 2 12h3v8h6v-6h2v6h6v-8h3L12 3z"
}), 'HomeOutlined');
exports["default"] = _default;

/***/ }),

/***/ 8985:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 48606));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 46685, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 50924));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 98677, 23))

/***/ }),

/***/ 48606:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ components_Products; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(57437);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(61396);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/Product/Product.module.scss
var Product_module = __webpack_require__(74936);
var Product_module_default = /*#__PURE__*/__webpack_require__.n(Product_module);
// EXTERNAL MODULE: ./node_modules/@mui/material/Button/Button.js + 3 modules
var Button = __webpack_require__(49050);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion.mjs + 171 modules
var motion = __webpack_require__(62150);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
// EXTERNAL MODULE: ./src/services/api/index.ts + 2 modules
var api = __webpack_require__(27633);
// EXTERNAL MODULE: ./node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(61865);
// EXTERNAL MODULE: ./node_modules/swiper/swiper-bundle.css
var swiper_bundle = __webpack_require__(31079);
// EXTERNAL MODULE: ./node_modules/swiper/swiper-react.mjs + 3 modules
var swiper_react = __webpack_require__(28278);
// EXTERNAL MODULE: ./node_modules/swiper/modules/index.mjs + 26 modules
var modules = __webpack_require__(97062);
// EXTERNAL MODULE: ./src/components/utils/translit.js
var translit = __webpack_require__(23844);
;// CONCATENATED MODULE: ./src/components/Product/index.tsx












const TopProduct = /*#__PURE__*/ (0,react.forwardRef)((param, ref)=>{
    let { product, user } = param;
    const [domLoaded, setDomLoaded] = (0,react.useState)(false);
    (0,react.useEffect)(()=>{
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
    const [popupVisible, setPopupVisible] = (0,react.useState)(false);
    const openEditDialog = ()=>{
        setPopupVisible(true);
    };
    const closeEditDialog = ()=>{
        setPopupVisible(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("article", {
            ref: ref,
            className: (Product_module_default()).product,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                    href: "/catalog/".concat(String((0,translit/* translit */.b)("/".concat(product.generalGroup))), "/").concat(product.slug, "/"),
                    children: domLoaded && /*#__PURE__*/ (0,jsx_runtime.jsx)(swiper_react/* Swiper */.tq, {
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
                            return /*#__PURE__*/ (0,jsx_runtime.jsx)(swiper_react/* SwiperSlide */.o5, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                    src: "http://api.cadhome.ru/api/products/product-image/".concat(image),
                                    alt: product.title,
                                    className: (Product_module_default()).productImage
                                })
                            }, image.id);
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: (Product_module_default()).productContent,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                            href: "/catalog/".concat(String((0,translit/* translit */.b)("/".concat(product.generalGroup))), "/").concat(product.slug, "/"),
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                className: (Product_module_default()).productTitle,
                                children: product.title
                            })
                        }),
                        product.description && /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            className: (Product_module_default()).productDescription,
                            children: product.description.length > 115 ? product.description.slice(0, 115) + "..." : product.description
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: (Product_module_default()).productVolumeAndPrice,
                            children: [
                                product.price && /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                    className: (Product_module_default()).productPrice,
                                    children: [
                                        product.price,
                                        " ₽"
                                    ]
                                }),
                                product.volume && /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                    className: (Product_module_default()).productVolume,
                                    children: [
                                        product.volume,
                                        " мл."
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                href: "/catalog/".concat(String((0,translit/* translit */.b)("/".concat(product.generalGroup))), "/").concat(product.slug, "/"),
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
/* harmony default export */ var Product = (MTopProduct);

// EXTERNAL MODULE: ./src/components/Products/Products.module.scss
var Products_module = __webpack_require__(16543);
var Products_module_default = /*#__PURE__*/__webpack_require__.n(Products_module);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 13 modules
var es = __webpack_require__(3198);
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
const Products = (param)=>{
    let { top, products } = param;
    const [domLoaded, setDomLoaded] = (0,react.useState)(false);
    (0,react.useEffect)(()=>{
        setDomLoaded(true);
    }, []);
    const { user } = (0,es/* useSelector */.v9)((state)=>state.userReducer);
    const topProducts = products.filter((product)=>product.top === true);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        children: domLoaded && /*#__PURE__*/ (0,jsx_runtime.jsxs)(motion/* motion */.E.section, {
            className: (Products_module_default()).topProducts + " container",
            initial: "hidden",
            whileInView: "visible",
            viewport: {
                amount: 0.1,
                once: true
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: (Products_module_default()).topProductsWrapper,
                    children: top ? topProducts.map((product, index)=>{
                        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Product, {
                            custom: index + 1,
                            variants: productsAnimation,
                            product: product,
                            user: user
                        }, product.id);
                    }) : products.map((product, index)=>{
                        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Product, {
                            custom: index + 1,
                            variants: productsAnimation,
                            product: product,
                            user: user
                        }, product.id + index);
                    })
                }),
                top ? /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                    href: "/catalog",
                    className: (Products_module_default()).topProductsCatalog,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                        children: "Перейти в каталог"
                    })
                }) : null
            ]
        })
    });
};
/* harmony default export */ var components_Products = (Products);


/***/ }),

/***/ 23844:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: function() { return /* binding */ translit; }
/* harmony export */ });
function translit(word) {
    const converter = {
        а: "a",
        б: "b",
        в: "v",
        г: "g",
        д: "d",
        е: "e",
        ё: "e",
        ж: "zh",
        з: "z",
        и: "i",
        й: "y",
        к: "k",
        л: "l",
        м: "m",
        н: "n",
        о: "o",
        п: "p",
        р: "r",
        с: "s",
        т: "t",
        у: "u",
        ф: "f",
        х: "h",
        ц: "c",
        ч: "ch",
        ш: "sh",
        щ: "sch",
        ь: "",
        ы: "y",
        ъ: "",
        э: "e",
        ю: "yu",
        я: "ya"
    };
    word = word.toLowerCase();
    let answer = "";
    for(let i = 0; i < word.length; ++i){
        if (converter[word[i]] == undefined) {
            answer += word[i];
        } else {
            answer += converter[word[i]];
        }
    }
    answer = answer.replace(/[^-0-9a-z]/g, "-");
    answer = answer.replace(/[-]+/g, "-");
    answer = answer.replace(/^\-|-$/g, "");
    return answer;
}


/***/ }),

/***/ 27633:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  V: function() { return /* binding */ Api; }
});

// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 42 modules
var axios = __webpack_require__(92173);
;// CONCATENATED MODULE: ./src/services/api/products.ts
const ProductsApi = (instance)=>({
        async getAll () {
            const { data } = await instance.get("/products");
            return data;
        },
        async getBySlug (slug) {
            const { data } = await instance.get("/products/".concat(slug));
            return data;
        },
        async createProductData (productInfo) {
            const { data } = await instance.post("/products/new", productInfo);
            return data;
        },
        async updateImages (productId, image) {
            const formData = new FormData();
            formData.append("file", image);
            const { data } = await instance.post("/products/upload/".concat(productId), formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            return data;
        },
        async deleteImage (productId, filename) {
            const { data } = await instance.delete("/products/images/".concat(productId, "/").concat(filename));
            return data;
        },
        async createProduct (productInfo) {
            const data = await this.createProductData(productInfo).then((res)=>{
                this.updateImages(res.id, productInfo.file[0]);
            });
            return data;
        },
        async updateProduct (productInfo) {
            const { data } = await instance.post("/products/update", productInfo);
            return data;
        },
        async deleteProduct (productId) {
            const { data } = await instance.delete("/products/".concat(productId));
            return data;
        },
        async sendOrder (name, phone, email, delivery, address, text, totalPrice) {
            const { data } = await instance.get("/products/send?name=".concat(name, "&phone=").concat(phone, "&email=").concat(email, "&delivery=").concat(delivery, "&address=").concat(address, "&text=").concat(text, "&totalPrice=").concat(totalPrice));
            return data;
        },
        async createAroma (productId, aroma) {
            const { data } = await instance.post("/products/aroma/create/".concat(productId), aroma);
            return data;
        },
        async updateAroma (aroma) {
            const { data } = await instance.post("/products/aroma/update/".concat(aroma.id), aroma);
            return data;
        },
        async deleteAroma (aromaId) {
            const { data } = await instance.delete("/products/aroma/".concat(aromaId));
            return data;
        }
    });
const getAllProducts = async ()=>{
    return fetch("http://api.cadhome.ru/api/products", {
        next: {
            revalidate: 10
        }
    }).then((res)=>res.json());
};
const getProductById = async (slug)=>{
    const response = await fetch("http://api.cadhome.ru/api/products/".concat(slug));
    if (!response.ok) throw new Error("Ошибка сервера. Товар не найден");
    return response.json();
};

;// CONCATENATED MODULE: ./src/services/api/user.ts
let accessToken = "";
const UsersApi = (instance)=>({
        async getAll () {
            const { data } = await instance.get("/users");
            return data;
        },
        async register (dto) {
            const { data } = await instance.post("/auth/register", dto);
            return data;
        },
        async login (dto) {
            const { data } = await instance.post("/auth/login", dto);
            localStorage.setItem("token", data.accessToken);
            return data;
        },
        async logout () {
            const { data } = await instance.get("/auth/logout");
            localStorage.clear();
            return data;
        },
        async getMe () {
            const { data } = await instance.get("/user/me");
            return data;
        }
    });

;// CONCATENATED MODULE: ./src/services/api/index.ts



const Api = (ctx)=>{
    const token = localStorage.getItem("token");
    const instance = axios/* default */.Z.create({
        baseURL: "http://api.cadhome.ru/api",
        headers: {
            Authorization: token
        }
    });
    return {
        products: ProductsApi(instance),
        users: UsersApi(instance)
    };
};


/***/ }),

/***/ 31079:
/***/ (function() {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 98677:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"breadcrumbs":"Breadcrumbs_breadcrumbs__0II_j","breadcrumbsHome":"Breadcrumbs_breadcrumbsHome__1JjLd"};

/***/ }),

/***/ 74936:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"product":"Product_product__AIg_U","productImage":"Product_productImage__a2MCs","productContent":"Product_productContent__GSQE_","productEdit":"Product_productEdit__Mu4N9","productDelete":"Product_productDelete__KqGKW","productDescription":"Product_productDescription__JkUoR","productVolumeAndPrice":"Product_productVolumeAndPrice__WRpj5","productVolume":"Product_productVolume__och9b","productPrice":"Product_productPrice__T6lor","productBottom":"Product_productBottom__NbdsR","productCart":"Product_productCart__Rd_9V","productButton":"Product_productButton__N73TZ","productCount":"Product_productCount__7MrPe","productLinkMore":"Product_productLinkMore__Lm80g"};

/***/ }),

/***/ 16543:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"topProducts":"Products_topProducts__QerK7","topProductsWrapper":"Products_topProductsWrapper__MWD9a","topProductsCatalog":"Products_topProductsCatalog__AFD2P"};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [42,271,685,172,198,295,182,865,897,582,822,971,596,744], function() { return __webpack_exec__(8985); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);