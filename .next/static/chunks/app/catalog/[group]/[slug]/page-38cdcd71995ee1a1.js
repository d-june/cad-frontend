(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[426],{

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

/***/ 73289:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;

"use client";

var _interopRequireDefault = __webpack_require__(26314);
__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;
var _createSvgIcon = _interopRequireDefault(__webpack_require__(80984));
var _jsxRuntime = __webpack_require__(57437);
var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"
}), 'ShoppingCart');
exports.Z = _default;

/***/ }),

/***/ 40435:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 70681))

/***/ }),

/***/ 70681:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ components_ProductCard; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(57437);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(61396);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/Breadcrumbs/Breadcrumbs.module.scss
var Breadcrumbs_module = __webpack_require__(98677);
var Breadcrumbs_module_default = /*#__PURE__*/__webpack_require__.n(Breadcrumbs_module);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/HomeOutlined.js
var HomeOutlined = __webpack_require__(50924);
;// CONCATENATED MODULE: ./src/components/Breadcrumbs/index.tsx




const Breadcrumbs = (param)=>{
    let { textItems } = param;
    let itemsArray = textItems;
    if (textItems.length > 1) {
        itemsArray = textItems.slice(0, -1);
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (Breadcrumbs_module_default()).breadcrumbs,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                href: "/",
                className: (Breadcrumbs_module_default()).breadcrumbsHome,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(HomeOutlined["default"], {})
            }),
            "/",
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                children: [
                    itemsArray && itemsArray.map((item, index)=>{
                        if (item.text !== "undefined" && item.link) {
                            return /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                        href: item.link,
                                        children: item.text
                                    }),
                                    " /"
                                ]
                            }, index);
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                        children: textItems[textItems.length - 1].text !== "undefined" && textItems[textItems.length - 1].text
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ var components_Breadcrumbs = (Breadcrumbs);

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 13 modules
var es = __webpack_require__(3198);
// EXTERNAL MODULE: ./src/components/ProductCard/ProductCard.module.scss
var ProductCard_module = __webpack_require__(37603);
var ProductCard_module_default = /*#__PURE__*/__webpack_require__.n(ProductCard_module);
// EXTERNAL MODULE: ./node_modules/@mui/material/Button/Button.js + 3 modules
var Button = __webpack_require__(49050);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/ShoppingCart.js
var ShoppingCart = __webpack_require__(73289);
// EXTERNAL MODULE: ./src/services/api/index.ts + 2 modules
var api = __webpack_require__(27633);
// EXTERNAL MODULE: ./node_modules/swiper/swiper-react.mjs + 3 modules
var swiper_react = __webpack_require__(28278);
// EXTERNAL MODULE: ./node_modules/swiper/modules/index.mjs + 26 modules
var modules = __webpack_require__(97062);
// EXTERNAL MODULE: ./node_modules/swiper/swiper.scss
var swiper = __webpack_require__(42375);
// EXTERNAL MODULE: ./node_modules/swiper/modules/navigation.scss
var navigation = __webpack_require__(67193);
// EXTERNAL MODULE: ./node_modules/swiper/modules/pagination.scss
var pagination = __webpack_require__(52647);
// EXTERNAL MODULE: ./src/redux/slices/cart/slice.ts + 2 modules
var slice = __webpack_require__(36666);
;// CONCATENATED MODULE: ./src/components/ProductCard/index.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 













const ProductCard = (param)=>{
    let { slug } = param;
    var _product_aromas, _product, _product_images, _product1, _product2, _product3, _product4, _product5, _product_aromas1, _product6, _product_aromas2, _product7, _checkedProduct, _checkedProductInCart_, _product8, _product9, _product10, _product11, _product12, _product13, _product14;
    const dispatch = (0,es/* useDispatch */.I0)();
    const [product, setProduct] = (0,react.useState)();
    const [checkedAroma, setCheckedAroma] = (0,react.useState)("");
    const [cartDisabled, setCartDisabled] = (0,react.useState)(true);
    const cartProducts = (0,es/* useSelector */.v9)((state)=>state.cartSlice.products);
    const checkedProduct = (_product = product) === null || _product === void 0 ? void 0 : (_product_aromas = _product.aromas) === null || _product_aromas === void 0 ? void 0 : _product_aromas.find((aromas)=>{
        return aromas.name === checkedAroma;
    });
    const checkedProductInCart = cartProducts.filter((cartProduct)=>{
        var _checkedProduct;
        return cartProduct.slug === slug && cartProduct.aroma.name === ((_checkedProduct = checkedProduct) === null || _checkedProduct === void 0 ? void 0 : _checkedProduct.name);
    });
    const [addedCount, setAddedCount] = (0,react.useState)(checkedProductInCart.length !== 0 ? checkedProductInCart[0].aroma.count : 0);
    const onClickAddToCart = ()=>{
        let addedProduct;
        if (product) {
            var _checkedProduct, _product, _product1;
            addedProduct = {
                id: product.id,
                slug: product.slug,
                title: product.title,
                description: product.description,
                price: product.price,
                imageUrl: product.images && product.images[0],
                aroma: {
                    name: checkedAroma,
                    count: addedCount
                },
                availableCount: (_checkedProduct = checkedProduct) === null || _checkedProduct === void 0 ? void 0 : _checkedProduct.count,
                color: (_product = product) === null || _product === void 0 ? void 0 : _product.color,
                volume: (_product1 = product) === null || _product1 === void 0 ? void 0 : _product1.volume
            };
            dispatch((0,slice/* addProduct */.gK)(addedProduct));
        }
    };
    (0,react.useEffect)(()=>{
        (0,api/* Api */.V)().products.getBySlug(slug).then((res)=>{
            setProduct(res);
        });
    }, [
        slug
    ]);
    (0,react.useEffect)(()=>{
        if (addedCount === 0) {
            setCartDisabled(true);
        } else if (addedCount > 0) {
            setCartDisabled(false);
        }
    }, [
        addedCount
    ]);
    (0,react.useEffect)(()=>{
        if (checkedProductInCart.length !== 0) {
            setAddedCount(checkedProductInCart[0].aroma.count);
        } else {
            setAddedCount(0);
        }
    }, [
        checkedAroma
    ]);
    const onClickPlus = ()=>{
        setAddedCount(addedCount + 1);
    };
    const onClickMinus = ()=>{
        setAddedCount(addedCount - 1);
    };
    const handleAromaCheck = (aroma)=>{
        setCheckedAroma(aroma);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(components_Breadcrumbs, {
                textItems: [
                    {
                        text: "Каталог",
                        link: "/catalog"
                    },
                    {
                        text: "".concat(product && product.title)
                    }
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (ProductCard_module_default()).productCard,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: (ProductCard_module_default()).productCardSwiper,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(swiper_react/* Swiper */.tq, {
                            modules: [
                                modules/* Navigation */.W_,
                                modules/* A11y */.s5,
                                modules/* Autoplay */.pt
                            ],
                            autoplay: true,
                            spaceBetween: 50,
                            slidesPerView: 1,
                            navigation: true,
                            className: (ProductCard_module_default()).swiper,
                            children: (_product1 = product) === null || _product1 === void 0 ? void 0 : (_product_images = _product1.images) === null || _product_images === void 0 ? void 0 : _product_images.map((image)=>{
                                return /*#__PURE__*/ (0,jsx_runtime.jsx)(swiper_react/* SwiperSlide */.o5, {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                        src: "http://api.cadhome.ru/api/products/product-image/".concat(image),
                                        alt: product.title
                                    })
                                }, image.id);
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: (ProductCard_module_default()).productCardAbout,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                                children: (_product2 = product) === null || _product2 === void 0 ? void 0 : _product2.title
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: (ProductCard_module_default()).productCardContent,
                                children: [
                                    ((_product3 = product) === null || _product3 === void 0 ? void 0 : _product3.generalGroup) === "Свечи" && /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                        children: "Ароматическая свеча из соевого воска"
                                    }),
                                    ((_product4 = product) === null || _product4 === void 0 ? void 0 : _product4.generalGroup) === "Подсвечники" && /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                        children: "Подсвечник из гипса"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                        className: (ProductCard_module_default()).productCardPrice,
                                        children: [
                                            "Цена: ",
                                            (_product5 = product) === null || _product5 === void 0 ? void 0 : _product5.price,
                                            " ₽"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: (ProductCard_module_default()).productCardAroma,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: (ProductCard_module_default()).productCardAromaItems,
                                            children: (_product6 = product) === null || _product6 === void 0 ? void 0 : (_product_aromas1 = _product6.aromas) === null || _product_aromas1 === void 0 ? void 0 : _product_aromas1.map((aroma)=>{
                                                return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: checkedAroma === aroma.name ? (ProductCard_module_default()).productCardAromaItem + " " + (ProductCard_module_default()).productCardAromaItemChecked : (ProductCard_module_default()).productCardAromaItem,
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                            id: aroma.name,
                                                            type: "radio",
                                                            name: "aroma",
                                                            onClick: ()=>handleAromaCheck(aroma.name)
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                            htmlFor: aroma.name,
                                                            children: aroma.name
                                                        })
                                                    ]
                                                }, aroma.id);
                                            })
                                        })
                                    }),
                                    ((_product7 = product) === null || _product7 === void 0 ? void 0 : (_product_aromas2 = _product7.aromas) === null || _product_aromas2 === void 0 ? void 0 : _product_aromas2.length) ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        children: checkedProductInCart.length !== 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                            disabled: true,
                                            children: "Товар в корзине"
                                        }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: (ProductCard_module_default()).card,
                                            children: [
                                                checkedAroma ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: (ProductCard_module_default()).productChangeCount,
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                                            onClick: onClickMinus,
                                                            className: (ProductCard_module_default()).productButton,
                                                            disabled: addedCount === 0,
                                                            children: "-"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                            className: (ProductCard_module_default()).productCount,
                                                            children: addedCount
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                                            onClick: onClickPlus,
                                                            className: (ProductCard_module_default()).productButton,
                                                            disabled: addedCount === ((_checkedProduct = checkedProduct) === null || _checkedProduct === void 0 ? void 0 : _checkedProduct.count),
                                                            children: "+"
                                                        })
                                                    ]
                                                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    children: "Выберите пожалуйста аромат"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: (ProductCard_module_default()).productAddToCart,
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                            className: (ProductCard_module_default()).productAddToCartButton,
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button/* default */.Z, {
                                                                onClick: onClickAddToCart,
                                                                className: (ProductCard_module_default()).productCart,
                                                                disabled: cartDisabled,
                                                                children: [
                                                                    "В корзину",
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ShoppingCart/* default */.Z, {})
                                                                ]
                                                            })
                                                        }),
                                                        checkedProduct && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                            children: checkedProductInCart.length !== 0 ? "В наличии " + (checkedProduct.count - ((_checkedProductInCart_ = checkedProductInCart[0]) === null || _checkedProductInCart_ === void 0 ? void 0 : _checkedProductInCart_.aroma.count)) + "  шт." : "В наличии " + checkedProduct.count + "  шт."
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }) : "Товара нет в наличии"
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (ProductCard_module_default()).productCardBottom,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: (ProductCard_module_default()).productCardCharacteristics,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                children: "Характеристики:"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                        children: [
                                            "Объем: ",
                                            (_product8 = product) === null || _product8 === void 0 ? void 0 : _product8.volume,
                                            " мл."
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                        children: [
                                            "Вес: ",
                                            (_product9 = product) === null || _product9 === void 0 ? void 0 : _product9.weight,
                                            " гр."
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                        children: [
                                            "Размеры ШхВхГ: ",
                                            (_product10 = product) === null || _product10 === void 0 ? void 0 : _product10.width,
                                            "x",
                                            (_product11 = product) === null || _product11 === void 0 ? void 0 : _product11.height,
                                            "x",
                                            (_product12 = product) === null || _product12 === void 0 ? void 0 : _product12.depth
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                        children: [
                                            "Время горения: ",
                                            (_product13 = product) === null || _product13 === void 0 ? void 0 : _product13.burningTime
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                        children: (_product14 = product) === null || _product14 === void 0 ? void 0 : _product14.description
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ var components_ProductCard = (ProductCard);


/***/ }),

/***/ 36666:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  gK: function() { return /* binding */ addProduct; },
  LL: function() { return /* binding */ clearCart; },
  ZP: function() { return /* binding */ slice; },
  R0: function() { return /* binding */ minusProduct; },
  BG: function() { return /* binding */ plusProduct; },
  kh: function() { return /* binding */ removeProduct; }
});

// EXTERNAL MODULE: ./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js + 8 modules
var redux_toolkit_esm = __webpack_require__(20064);
;// CONCATENATED MODULE: ./src/utils/calcTotalPrice.ts
const calcTotalPrice = (products)=>{
    return products.reduce((sum, obj)=>obj.price * obj.aroma.count + sum, 0);
};

;// CONCATENATED MODULE: ./src/utils/getCartFromLocalStorage.ts

const getCartFromLocalStorage = ()=>{
    let data = "";
    if (typeof localStorage !== "undefined") {
        data = localStorage.getItem("cart");
    }
    const products = data ? JSON.parse(data) : [];
    const totalPrice = calcTotalPrice(products);
    return {
        products,
        totalPrice
    };
};

;// CONCATENATED MODULE: ./src/redux/slices/cart/slice.ts



const { products, totalPrice } = getCartFromLocalStorage();
const initialState = {
    totalPrice,
    products
};
const cartSlice = (0,redux_toolkit_esm/* createSlice */.oM)({
    name: "cart",
    initialState,
    reducers: {
        addProduct (state, action) {
            state.products.push({
                ...action.payload
            });
            state.totalPrice = calcTotalPrice(state.products);
        },
        plusProduct (state, action) {
            const findProduct = state.products.find((obj)=>obj.id === action.payload.id && obj.aroma.name === action.payload.aroma);
            if (findProduct) {
                findProduct.aroma.count++;
                state.totalPrice = calcTotalPrice(state.products);
            }
        },
        minusProduct (state, action) {
            const findProduct = state.products.find((obj)=>obj.id === action.payload.id && obj.aroma.name === action.payload.aroma);
            if (findProduct) {
                findProduct.aroma.count--;
                state.totalPrice = calcTotalPrice(state.products);
            }
        },
        removeProduct (state, action) {
            state.products = state.products.filter((obj)=>obj.id !== action.payload.id || obj.aroma.name !== action.payload.aroma);
            state.totalPrice = calcTotalPrice(state.products);
        },
        clearCart (state) {
            state.products = [];
            state.totalPrice = 0;
        }
    }
});
const { addProduct, removeProduct, minusProduct, plusProduct, clearCart } = cartSlice.actions;
/* harmony default export */ var slice = (cartSlice.reducer);


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

/***/ 67193:
/***/ (function() {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 52647:
/***/ (function() {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 42375:
/***/ (function() {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 98677:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"breadcrumbs":"Breadcrumbs_breadcrumbs__0II_j","breadcrumbsHome":"Breadcrumbs_breadcrumbsHome__1JjLd"};

/***/ }),

/***/ 37603:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"productCard":"ProductCard_productCard__ARvOv","productCardSwiper":"ProductCard_productCardSwiper__uJolp","productCardAbout":"ProductCard_productCardAbout__BKewO","productCardContent":"ProductCard_productCardContent__fUdHj","productCardPrice":"ProductCard_productCardPrice__63dmr","productCardAroma":"ProductCard_productCardAroma__S_mth","productCardAromaItems":"ProductCard_productCardAromaItems__ya2YZ","productCardAromaItem":"ProductCard_productCardAromaItem__1TODY","productCardAromaItemChecked":"ProductCard_productCardAromaItemChecked__B_8ZT","card":"ProductCard_card__F5Ind","productChangeCount":"ProductCard_productChangeCount__nxzu_","productAddToCart":"ProductCard_productAddToCart__OS9L1","productAddToCartButton":"ProductCard_productAddToCartButton__5Me9_","productCardBottom":"ProductCard_productCardBottom__aFWWU","productCardCharacteristics":"ProductCard_productCardCharacteristics__tiQ25"};

/***/ }),

/***/ 61396:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(46685)


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [42,271,685,172,198,295,182,64,582,971,596,744], function() { return __webpack_exec__(40435); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);