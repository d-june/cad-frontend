(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[3],{

/***/ 72431:
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 75992:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 64003));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 89553))

/***/ }),

/***/ 64003:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ components_AdminPanel; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(57437);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 13 modules
var es = __webpack_require__(3198);
// EXTERNAL MODULE: ./node_modules/@mui/material/Button/Button.js + 3 modules
var Button = __webpack_require__(49050);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Add.js
var Add = __webpack_require__(89396);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
// EXTERNAL MODULE: ./node_modules/@mui/material/TextField/TextField.js + 3 modules
var TextField = __webpack_require__(21975);
// EXTERNAL MODULE: ./node_modules/@mui/material/FormControl/FormControl.js + 1 modules
var FormControl = __webpack_require__(84081);
// EXTERNAL MODULE: ./node_modules/@mui/material/InputLabel/InputLabel.js + 3 modules
var InputLabel = __webpack_require__(50819);
// EXTERNAL MODULE: ./node_modules/@mui/material/Select/Select.js + 14 modules
var Select = __webpack_require__(18486);
// EXTERNAL MODULE: ./node_modules/@mui/material/MenuItem/MenuItem.js + 4 modules
var MenuItem = __webpack_require__(27739);
// EXTERNAL MODULE: ./node_modules/@mui/material/Checkbox/Checkbox.js + 4 modules
var Checkbox = __webpack_require__(51469);
// EXTERNAL MODULE: ./node_modules/@mui/material/Alert/Alert.js + 8 modules
var Alert = __webpack_require__(89573);
// EXTERNAL MODULE: ./node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(61865);
// EXTERNAL MODULE: ./src/components/AdminPanel/AddProductForm/AddProductForm.module.scss
var AddProductForm_module = __webpack_require__(30803);
var AddProductForm_module_default = /*#__PURE__*/__webpack_require__.n(AddProductForm_module);
// EXTERNAL MODULE: ./src/services/api/index.ts + 2 modules
var api = __webpack_require__(27633);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Close.js
var Close = __webpack_require__(33533);
// EXTERNAL MODULE: ./src/redux/hooks.ts
var hooks = __webpack_require__(82993);
// EXTERNAL MODULE: ./src/redux/slices/adminPanelProducts/slice.ts
var slice = __webpack_require__(85634);
// EXTERNAL MODULE: ./src/components/utils/translit.js
var translit = __webpack_require__(23844);
;// CONCATENATED MODULE: ./src/components/AdminPanel/AddProductForm/index.tsx










const AddProductForm = (param)=>{
    let { setAddProductFormVisible } = param;
    const [errorMessage, setErrorMessage] = (0,react.useState)("");
    const [aromaName, setAromaName] = react.useState("");
    const [aromaCount, setAromaCount] = react.useState(0);
    const [generalGroup, setGeneralGroup] = react.useState("");
    const [specifiedGroup, setSpecifiedGroup] = react.useState("");
    const [color, setColor] = react.useState("");
    const [checkedTop, setCheckedTop] = react.useState(false);
    const dispatch = (0,hooks/* useAppDispatch */.T)();
    const { register, formState: { errors }, handleSubmit, control } = (0,index_esm/* useForm */.cI)();
    const { fields, append, remove } = (0,index_esm/* useFieldArray */.Dq)({
        name: "aromas",
        control: control
    });
    const addAroma = ()=>{
        append({
            name: aromaName,
            count: Number(aromaCount)
        });
    };
    const removeAroma = (index)=>()=>{
            remove(index);
        };
    const onChangeAromaName = (e)=>{
        setAromaName(e.target.value);
    };
    const handlePlusAromaCount = ()=>{
        setAromaCount(aromaCount + 1);
    };
    const handleMinusAromaCount = ()=>{
        setAromaCount(aromaCount - 1);
    };
    const handleChangeColor = (e)=>{
        setColor(e.target.value);
    };
    const handleChangeGeneralGroup = (event)=>{
        setGeneralGroup(event.target.value);
    };
    const handleChangeSpecifiedGroup = (event)=>{
        setSpecifiedGroup(event.target.value);
    };
    const onSubmit = async (dto)=>{
        const slug = (0,translit/* translit */.b)("".concat(dto.color, "-").concat(dto.title, "-").concat(dto.volume));
        const newProduct = {
            ...dto,
            slug
        };
        try {
            const data = await (0,api/* Api */.V)().products.createProduct(newProduct);
            (0,api/* Api */.V)().products.getAll().then((res)=>{
                dispatch((0,slice/* setProductsData */.qH)(res));
            });
            setErrorMessage("");
        } catch (err) {
            console.warn("Ошибка при регистрации", err);
            if (err.response) {
                setErrorMessage(err.response.data.message);
            }
        }
        setAddProductFormVisible(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
        onSubmit: handleSubmit(onSubmit),
        className: (AddProductForm_module_default()).addProductForm,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: (AddProductForm_module_default()).addProductFormCloseIcon,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Close/* default */.Z, {
                    onClick: ()=>setAddProductFormVisible(false)
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                        label: "Название товара",
                        ...register("title", {
                            required: true
                        }),
                        className: (AddProductForm_module_default()).addProductFormItem
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                        label: "Описание",
                        ...register("description", {
                            required: true
                        }),
                        className: (AddProductForm_module_default()).addProductFormItem
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                        label: "Объем",
                        ...register("volume", {
                            required: true
                        }),
                        className: (AddProductForm_module_default()).addProductFormItem
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                        type: "number",
                        label: "Вес",
                        ...register("weight", {
                            required: true
                        }),
                        className: (AddProductForm_module_default()).addProductFormItem
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                        type: "number",
                        label: "Ширина",
                        ...register("width", {
                            required: true
                        }),
                        className: (AddProductForm_module_default()).addProductFormItem
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                        type: "number",
                        label: "Высота",
                        ...register("height", {
                            required: true
                        }),
                        className: (AddProductForm_module_default()).addProductFormItem
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                        type: "number",
                        label: "Глубина",
                        ...register("depth", {
                            required: true
                        }),
                        className: (AddProductForm_module_default()).addProductFormItem
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                        label: "Время горения",
                        ...register("burningTime", {
                            required: true
                        }),
                        className: (AddProductForm_module_default()).addProductFormItem
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                        label: "Цена",
                        ...register("price", {
                            required: true
                        }),
                        className: (AddProductForm_module_default()).addProductFormItem
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(FormControl/* default */.Z, {
                        fullWidth: true,
                        className: (AddProductForm_module_default()).addProductFormItem,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(InputLabel/* default */.Z, {
                                id: "demo-simple-select-label",
                                children: "Общая группа"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Select/* default */.Z, {
                                labelId: "demo-simple-select-label",
                                id: "demo-simple-select",
                                value: generalGroup,
                                label: "Общая группа",
                                ...register("generalGroup", {
                                    required: true
                                }),
                                onChange: handleChangeGeneralGroup,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
                                        value: "Свечи",
                                        children: "Свечи"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
                                        value: "Подсвечники",
                                        children: "Подсвечники"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(FormControl/* default */.Z, {
                        fullWidth: true,
                        className: (AddProductForm_module_default()).addProductFormItem,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(InputLabel/* default */.Z, {
                                id: "demo-simple-select-label",
                                children: "Подгруппа"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Select/* default */.Z, {
                                labelId: "demo-simple-select-label",
                                id: "demo-simple-select",
                                value: specifiedGroup,
                                label: "Подгруппа",
                                ...register("specifiedGroup", {
                                    required: true
                                }),
                                onChange: handleChangeSpecifiedGroup,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
                                        value: "Свечи в гипсовых подсвечниках",
                                        children: "Свечи в гипсовых подсвечниках"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
                                        value: "Свечи в банках",
                                        children: "Свечи в банках"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
                                        value: "Наборы",
                                        children: "Наборы"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(FormControl/* default */.Z, {
                        fullWidth: true,
                        className: (AddProductForm_module_default()).addProductFormItem,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(InputLabel/* default */.Z, {
                                id: "demo-simple-select-label",
                                children: "Цвет"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Select/* default */.Z, {
                                labelId: "demo-simple-select-label",
                                id: "demo-simple-select",
                                label: "Цвет",
                                value: color,
                                ...register("color", {
                                    required: true
                                }),
                                onChange: handleChangeColor,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
                                        value: "Белый",
                                        children: "Белый"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
                                        value: "Белая",
                                        children: "Белая"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
                                        value: "Черный",
                                        children: "Черный"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
                                        value: "Черная",
                                        children: "Черная"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
                                        value: "Черный мрамор",
                                        children: "Черный мрамор"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: (AddProductForm_module_default()).addProductFormAromas,
                        children: fields.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(react.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* Controller */.Qr, {
                                        name: "aromas[".concat(item.id, "].name"),
                                        control: control,
                                        defaultValue: aromaName,
                                        render: (param)=>/*#__PURE__*/ {
                                            let { field: { value, onChange } } = param;
                                            return (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                                                value: value,
                                                onChange: onChange
                                            });
                                        }
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* Controller */.Qr, {
                                        name: "aromas[".concat(item.id, "].count"),
                                        control: control,
                                        defaultValue: aromaCount,
                                        render: (param)=>/*#__PURE__*/ {
                                            let { field: { value, onChange } } = param;
                                            return (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                                                value: value,
                                                onChange: onChange
                                            });
                                        }
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                        type: "button",
                                        onClick: removeAroma(index),
                                        className: (AddProductForm_module_default()).deleteAromaButton,
                                        children: "Удалить аромат"
                                    })
                                ]
                            }, item.id))
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: (AddProductForm_module_default()).addProductFormAromas,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                                placeholder: "Введите аромат...",
                                value: aromaName,
                                onChange: (e)=>onChangeAromaName(e)
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                onClick: handleMinusAromaCount,
                                disabled: aromaCount === 0,
                                children: "-"
                            }),
                            aromaCount,
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                onClick: handlePlusAromaCount,
                                children: "+"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                type: "button",
                                onClick: addAroma,
                                children: "Добавить аромат"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                htmlFor: "top",
                                children: "Нужно отображать в топе?"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
                                id: "top",
                                ...register("top"),
                                checked: checkedTop,
                                onChange: (e)=>setCheckedTop(!checkedTop)
                            })
                        ]
                    }),
                    errorMessage && /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.Z, {
                        severity: "error",
                        children: errorMessage
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                id: "file",
                type: "file",
                ...register("file", {
                    required: true
                }),
                className: (AddProductForm_module_default()).addImageInput
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: (AddProductForm_module_default()).popupBottom,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    variant: "contained",
                    type: "submit",
                    className: (AddProductForm_module_default()).createProductButton,
                    children: "Создать товар"
                })
            })
        ]
    });
};
/* harmony default export */ var AdminPanel_AddProductForm = (AddProductForm);

// EXTERNAL MODULE: ./node_modules/@mui/material/Accordion/Accordion.js + 3 modules
var Accordion = __webpack_require__(82057);
// EXTERNAL MODULE: ./node_modules/@mui/material/AccordionSummary/AccordionSummary.js + 1 modules
var AccordionSummary = __webpack_require__(15873);
// EXTERNAL MODULE: ./node_modules/@mui/material/AccordionDetails/AccordionDetails.js + 1 modules
var AccordionDetails = __webpack_require__(58768);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/ExpandMore.js
var ExpandMore = __webpack_require__(81344);
// EXTERNAL MODULE: ./src/components/AdminPanel/EditProductPopup/EditProduct.module.scss
var EditProduct_module = __webpack_require__(84116);
var EditProduct_module_default = /*#__PURE__*/__webpack_require__.n(EditProduct_module);
;// CONCATENATED MODULE: ./src/components/AdminPanel/EditProductPopup/AddImage/index.tsx








const AddImage = (param)=>{
    let { productId } = param;
    const [errorMessage, setErrorMessage] = (0,react.useState)("");
    const { register, formState: { errors }, handleSubmit } = (0,index_esm/* useForm */.cI)();
    const dispatch = (0,hooks/* useAppDispatch */.T)();
    const onSubmit = async (dto)=>{
        try {
            const data = await (0,api/* Api */.V)().products.updateImages(productId, dto.file[0]);
            dispatch((0,slice/* updateProductImages */.dy)(data));
        } catch (err) {
            console.warn("Ошибка при добавлении файла", err);
            if (err.response) {
                setErrorMessage(err.response.data.message);
            }
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
        onSubmit: handleSubmit(onSubmit),
        className: (EditProduct_module_default()).editProductFormAddImage,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                type: "file",
                ...register("file", {
                    required: true
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                type: "submit",
                children: "Добавить картинку"
            })
        ]
    });
};
/* harmony default export */ var EditProductPopup_AddImage = (AddImage);

;// CONCATENATED MODULE: ./src/components/AdminPanel/EditProductPopup/UpdateAroma/index.tsx








const UpdateAroma = (param)=>{
    let { aroma, productId } = param;
    const [errorMessage, setErrorMessage] = (0,react.useState)("");
    const dispatch = (0,hooks/* useAppDispatch */.T)();
    const { register, formState: { errors }, handleSubmit } = (0,index_esm/* useForm */.cI)();
    const onSubmit = async (dto)=>{
        const newAroma = {
            id: aroma.id,
            name: dto.name,
            count: Number(dto.count),
            productId: productId
        };
        try {
            (0,api/* Api */.V)().products.updateAroma(newAroma);
            window.confirm("Аромат успешно изменен");
        } catch (err) {
            console.warn("Не удалось обновить аромат", err);
            if (err.response) {
                setErrorMessage(err.response.data.message);
            }
        }
    };
    const removeAroma = async (aromaId)=>{
        if (aromaId) {
            const data = await (0,api/* Api */.V)().products.deleteAroma(aromaId);
            dispatch((0,slice/* deleteProductAroma */.aG)(data));
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
            onSubmit: handleSubmit(onSubmit),
            className: (EditProduct_module_default()).editProductChangeAroma,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControl/* default */.Z, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                        defaultValue: aroma.name,
                        type: "string",
                        ...register("name", {
                            required: true
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControl/* default */.Z, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                        defaultValue: aroma.count,
                        type: "number",
                        ...register("count", {
                            required: true
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    type: "submit",
                    children: "Изменить аромат"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    type: "button",
                    onClick: ()=>removeAroma(aroma.id),
                    className: (EditProduct_module_default()).editProductDeleteAroma,
                    children: "Удалить аромат"
                })
            ]
        })
    });
};
/* harmony default export */ var EditProductPopup_UpdateAroma = (UpdateAroma);

;// CONCATENATED MODULE: ./src/components/AdminPanel/EditProductPopup/AddNewAroma/index.tsx








const AddNewAroma = (param)=>{
    let { productId } = param;
    const [aromaName, setAromaName] = react.useState("");
    const [aromaCount, setAromaCount] = react.useState(0);
    const dispatch = (0,hooks/* useAppDispatch */.T)();
    const { register, formState: { errors }, handleSubmit } = (0,index_esm/* useForm */.cI)();
    const onSubmit = async ()=>{
        const newAroma = {
            name: aromaName,
            count: Number(aromaCount)
        };
        try {
            const data = await (0,api/* Api */.V)().products.createAroma(productId, newAroma);
            dispatch((0,slice/* addProductAroma */.hj)(data));
        } catch (err) {
            console.warn("Ошибка при добавлении файла", err);
            if (err.response) {
            // setErrorMessage(err.response.data.message);
            }
        }
    };
    const onChangeAromaName = (e)=>{
        setAromaName(e.target.value);
    };
    const handlePlusAromaCount = ()=>{
        setAromaCount(aromaCount + 1);
    };
    const handleMinusAromaCount = ()=>{
        setAromaCount(aromaCount - 1);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
            onSubmit: handleSubmit(onSubmit),
            className: (EditProduct_module_default()).editProductAddAroma,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                    placeholder: "Введите аромат...",
                    value: aromaName,
                    onChange: (e)=>onChangeAromaName(e)
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    onClick: handleMinusAromaCount,
                    disabled: aromaCount === 0,
                    children: "-"
                }),
                aromaCount,
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    onClick: handlePlusAromaCount,
                    children: "+"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    type: "submit",
                    variant: "contained",
                    children: "Добавить новый аромат"
                })
            ]
        })
    });
};
/* harmony default export */ var EditProductPopup_AddNewAroma = (AddNewAroma);

// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Delete.js
var Delete = __webpack_require__(46446);
;// CONCATENATED MODULE: ./src/components/AdminPanel/EditProductPopup/index.tsx














const EditProduct = (param)=>{
    let { product } = param;
    var _product_images, _product_aromas;
    const [errorMessage, setErrorMessage] = (0,react.useState)("");
    const [generalGroup, setGeneralGroup] = react.useState(product.generalGroup);
    const [specifiedGroup, setSpecifiedGroup] = react.useState(product.specifiedGroup);
    const [color, setColor] = react.useState(product.color);
    const [checkedTop, setCheckedTop] = react.useState(product.top);
    const [expanded, setExpanded] = react.useState(false);
    const dispatch = (0,hooks/* useAppDispatch */.T)();
    const { register, formState: { errors }, handleSubmit } = (0,index_esm/* useForm */.cI)({
        defaultValues: {
            id: product.id,
            title: product.title,
            description: product.description,
            volume: product.volume,
            weight: product.weight,
            width: product.width,
            height: product.height,
            depth: product.depth,
            burningTime: product.burningTime,
            price: product.price,
            generalGroup: product.generalGroup,
            specifiedGroup: product.specifiedGroup,
            color: product.color,
            aromas: product.aromas,
            top: product.top
        }
    });
    const handleChangeAccordion = (panel)=>(event, isExpanded)=>{
            setExpanded(isExpanded ? panel : false);
        };
    const handleChangeGeneralGroup = (event)=>{
        setGeneralGroup(event.target.value);
    };
    const handleChangeSpecifiedGroup = (event)=>{
        setSpecifiedGroup(event.target.value);
    };
    const handleChangeColor = (e)=>{
        setColor(e.target.value);
    };
    const onSubmit = async (dto)=>{
        const slug = (0,translit/* translit */.b)("".concat(dto.color, "-").concat(dto.title, "-").concat(dto.volume));
        const newProduct = {
            ...dto,
            slug
        };
        try {
            const data = await (0,api/* Api */.V)().products.updateProduct(newProduct);
            window.confirm("Товар успешно изменен");
            setErrorMessage("");
        } catch (err) {
            console.warn("Ошибка при изменении товара", err);
            if (err.response) {
                setErrorMessage(err.response.data.message);
            }
        }
    };
    const deleteProduct = async ()=>{
        if (window.confirm("Вы действительно хотите удалить товар?")) {
            await (0,api/* Api */.V)().products.deleteProduct(product.id);
            dispatch((0,slice/* deleteProductData */.UY)(product));
        }
    };
    const deleteImage = async (image)=>{
        if (window.confirm("Вы действительно хотите удалить картинку?")) {
            const data = await (0,api/* Api */.V)().products.deleteImage(product.id, image);
            dispatch((0,slice/* updateProductImages */.dy)(data));
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (EditProduct_module_default()).editProduct,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (EditProduct_module_default()).editProductTop,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                        children: product.title
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: (EditProduct_module_default()).editProductDelete,
                        onClick: deleteProduct,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Delete/* default */.Z, {}),
                            " Удалить товар"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: (EditProduct_module_default()).editProductImages,
                children: (_product_images = product.images) === null || _product_images === void 0 ? void 0 : _product_images.map((image)=>{
                    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: (EditProduct_module_default()).editProductImage,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                src: "http://api.cadhome.ru/api/products/product-image/".concat(image)
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: (EditProduct_module_default()).editProductDeleteImage,
                                onClick: ()=>deleteImage(image),
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Delete/* default */.Z, {})
                            })
                        ]
                    });
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(EditProductPopup_AddImage, {
                productId: product.id
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Accordion/* default */.Z, {
                expanded: expanded === "panel1",
                onChange: handleChangeAccordion("panel1"),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionSummary/* default */.Z, {
                        expandIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(ExpandMore/* default */.Z, {}),
                        "aria-controls": "panel1bh-content",
                        id: "panel1bh-header",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: (EditProduct_module_default()).editProductAccordionTitle,
                            children: "Редактировать описание и цену"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionDetails/* default */.Z, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                            onSubmit: handleSubmit(onSubmit),
                            className: (EditProduct_module_default()).editProductForm,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                                            label: "Название товара",
                                            ...register("title", {
                                                required: true
                                            }),
                                            className: (EditProduct_module_default()).editProductItem
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                                            label: "Описание",
                                            ...register("description", {
                                                required: true
                                            }),
                                            className: (EditProduct_module_default()).editProductItem
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                                            label: "Объем",
                                            ...register("volume", {
                                                required: true
                                            }),
                                            className: (EditProduct_module_default()).editProductItem
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                                            type: "number",
                                            label: "Вес",
                                            ...register("weight", {
                                                required: true
                                            }),
                                            className: (EditProduct_module_default()).editProductItem
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                                            type: "number",
                                            label: "Ширина",
                                            ...register("width", {
                                                required: true
                                            }),
                                            className: (EditProduct_module_default()).editProductItem
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                                            type: "number",
                                            label: "Высота",
                                            ...register("height", {
                                                required: true
                                            }),
                                            className: (EditProduct_module_default()).editProductItem
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                                            type: "number",
                                            label: "Глубина",
                                            ...register("depth", {
                                                required: true
                                            }),
                                            className: (EditProduct_module_default()).editProductItem
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                                            label: "Время горения",
                                            ...register("burningTime", {
                                                required: true
                                            }),
                                            className: (EditProduct_module_default()).editProductItem
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                                            label: "Цена",
                                            ...register("price", {
                                                required: true
                                            }),
                                            className: (EditProduct_module_default()).editProductItem
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(FormControl/* default */.Z, {
                                            fullWidth: true,
                                            className: (EditProduct_module_default()).editProductItem,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(InputLabel/* default */.Z, {
                                                    id: "demo-simple-select-label",
                                                    children: "Основная группа"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Select/* default */.Z, {
                                                    labelId: "demo-simple-select-label",
                                                    id: "demo-simple-select",
                                                    value: generalGroup,
                                                    label: "Основная группа",
                                                    ...register("generalGroup", {
                                                        required: true
                                                    }),
                                                    onChange: handleChangeGeneralGroup,
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
                                                            value: "Свечи",
                                                            children: "Свечи"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
                                                            value: "Подсвечники",
                                                            children: "Подсвечники"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(FormControl/* default */.Z, {
                                            fullWidth: true,
                                            className: (EditProduct_module_default()).editProductItem,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(InputLabel/* default */.Z, {
                                                    id: "demo-simple-select-label",
                                                    children: "Подгруппа"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Select/* default */.Z, {
                                                    labelId: "demo-simple-select-label",
                                                    id: "demo-simple-select",
                                                    value: specifiedGroup,
                                                    label: "Подгруппа",
                                                    ...register("specifiedGroup", {
                                                        required: true
                                                    }),
                                                    onChange: handleChangeSpecifiedGroup,
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
                                                            value: "Свечи в гипсовых подсвечниках",
                                                            children: "Свечи в гипсовых подсвечниках"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
                                                            value: "Свечи в банках",
                                                            children: "Свечи в банках"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
                                                            value: "Наборы",
                                                            children: "Наборы"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(FormControl/* default */.Z, {
                                            fullWidth: true,
                                            className: (EditProduct_module_default()).editProductItem,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(InputLabel/* default */.Z, {
                                                    id: "demo-simple-select-label",
                                                    children: "Цвет"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Select/* default */.Z, {
                                                    labelId: "demo-simple-select-label",
                                                    id: "demo-simple-select",
                                                    label: "Цвет",
                                                    value: color,
                                                    ...register("color", {
                                                        required: true
                                                    }),
                                                    onChange: handleChangeColor,
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
                                                            value: "Белый",
                                                            children: "Белый"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
                                                            value: "Белая",
                                                            children: "Белая"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
                                                            value: "Черный",
                                                            children: "Черный"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
                                                            value: "Черная",
                                                            children: "Черная"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
                                                            value: "Черный мрамор",
                                                            children: "Черный мрамор"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(InputLabel/* default */.Z, {
                                                htmlFor: "top",
                                                children: [
                                                    "Нужно отображать в топе?",
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
                                                        id: "top",
                                                        ...register("top"),
                                                        checked: checkedTop,
                                                        onChange: (e)=>setCheckedTop(!checkedTop)
                                                    })
                                                ]
                                            })
                                        }),
                                        errorMessage && /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.Z, {
                                            severity: "error",
                                            children: errorMessage
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                        variant: "contained",
                                        type: "submit",
                                        className: (EditProduct_module_default()).editProductChangeProduct,
                                        children: "Изменить товар"
                                    })
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Accordion/* default */.Z, {
                expanded: expanded === "panel2",
                onChange: handleChangeAccordion("panel2"),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionSummary/* default */.Z, {
                        expandIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(ExpandMore/* default */.Z, {}),
                        "aria-controls": "panel1bh-content",
                        id: "panel1bh-header",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: (EditProduct_module_default()).editProductAccordionTitle,
                            children: "Редактировать ароматы"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(AccordionDetails/* default */.Z, {
                        className: (EditProduct_module_default()).editProducAromas,
                        children: [
                            (_product_aromas = product.aromas) === null || _product_aromas === void 0 ? void 0 : _product_aromas.map((aroma)=>{
                                return /*#__PURE__*/ (0,jsx_runtime.jsx)(EditProductPopup_UpdateAroma, {
                                    aroma: aroma,
                                    productId: product.id
                                });
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(EditProductPopup_AddNewAroma, {
                                productId: product.id
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ var EditProductPopup = (EditProduct);

;// CONCATENATED MODULE: ./src/components/AdminPanel/index.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 









const AdminPanel = ()=>{
    const { user } = (0,es/* useSelector */.v9)((state)=>state.userReducer);
    const { products } = (0,es/* useSelector */.v9)((state)=>state.adminPanelProductsSlice);
    const [addProductFormVisible, setAddProductFormVisible] = (0,react.useState)(false);
    const dispatch = (0,hooks/* useAppDispatch */.T)();
    (0,react.useEffect)(()=>{
        (0,api/* Api */.V)().products.getAll().then((res)=>{
            dispatch((0,slice/* setProductsData */.qH)(res));
        });
    }, [
        products.length,
        dispatch
    ]);
    if (user && user.roles && user.roles.includes("ADMIN")) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            children: [
                addProductFormVisible ? /*#__PURE__*/ (0,jsx_runtime.jsx)(AdminPanel_AddProductForm, {
                    setAddProductFormVisible: setAddProductFormVisible
                }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button/* default */.Z, {
                    onClick: ()=>setAddProductFormVisible(!addProductFormVisible),
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        gap: "10px",
                        width: "100%",
                        minHeight: "400px",
                        marginTop: "20px",
                        textTransform: "uppercase"
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Add/* default */.Z, {}),
                        "Добавить товар"
                    ]
                }),
                products.map((product)=>{
                    return /*#__PURE__*/ (0,jsx_runtime.jsx)(EditProductPopup, {
                        product: product
                    });
                })
            ]
        });
    } else {
        return null;
    }
};
/* harmony default export */ var components_AdminPanel = (AdminPanel);


/***/ }),

/***/ 89553:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Auth_AdminLogin; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(57437);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
// EXTERNAL MODULE: ./node_modules/@mui/material/Dialog/Dialog.js + 2 modules
var Dialog = __webpack_require__(3027);
// EXTERNAL MODULE: ./node_modules/@mui/material/DialogContent/DialogContent.js + 2 modules
var DialogContent = __webpack_require__(5242);
// EXTERNAL MODULE: ./src/components/Auth/AdminLogin/AdminLogin.module.scss
var AdminLogin_module = __webpack_require__(10135);
var AdminLogin_module_default = /*#__PURE__*/__webpack_require__.n(AdminLogin_module);
// EXTERNAL MODULE: ./node_modules/@mui/material/Alert/Alert.js + 8 modules
var Alert = __webpack_require__(89573);
// EXTERNAL MODULE: ./node_modules/@mui/material/Button/Button.js + 3 modules
var Button = __webpack_require__(49050);
// EXTERNAL MODULE: ./node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(61865);
// EXTERNAL MODULE: ./node_modules/@hookform/resolvers/yup/dist/yup.mjs + 1 modules
var yup = __webpack_require__(89701);
// EXTERNAL MODULE: ./node_modules/yup/index.esm.js
var yup_index_esm = __webpack_require__(35691);
;// CONCATENATED MODULE: ./src/components/utils/schemas/formsValidation.ts

const LoginFormSchema = yup_index_esm/* object */.Ry().shape({
    email: yup_index_esm/* string */.Z_().email("Неверная почта").required("Почта обязательна"),
    password: yup_index_esm/* string */.Z_().min(6, "Длина пароля должна быть не менее 6 символов").required("Пароль обязателен")
});
const RegisterFormSchema = yup_index_esm/* object */.Ry().shape({
    fullName: yup_index_esm/* string */.Z_().required("Имя и фамилия обязательны")
}).concat(LoginFormSchema);

// EXTERNAL MODULE: ./node_modules/@mui/material/TextField/TextField.js + 3 modules
var TextField = __webpack_require__(21975);
;// CONCATENATED MODULE: ./src/components/FormField.tsx




const FormField = (param)=>{
    let { name, label } = param;
    var _formState_errors_name;
    const { register, formState } = (0,index_esm/* useFormContext */.Gc)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
        ...register(name),
        name: name,
        autoFocus: true,
        margin: "dense",
        label: label,
        error: !!((_formState_errors_name = formState.errors[name]) === null || _formState_errors_name === void 0 ? void 0 : _formState_errors_name.message),
        // helperText={formState.errors[name]?.message}
        fullWidth: true,
        variant: "outlined"
    });
};
/* harmony default export */ var components_FormField = (FormField);

// EXTERNAL MODULE: ./src/components/Auth/AuthPopup.module.scss
var AuthPopup_module = __webpack_require__(97802);
var AuthPopup_module_default = /*#__PURE__*/__webpack_require__.n(AuthPopup_module);
// EXTERNAL MODULE: ./src/redux/hooks.ts
var hooks = __webpack_require__(82993);
// EXTERNAL MODULE: ./src/redux/slices/user.ts
var slices_user = __webpack_require__(90235);
// EXTERNAL MODULE: ./src/services/api/index.ts + 2 modules
var api = __webpack_require__(27633);
;// CONCATENATED MODULE: ./src/components/Auth/Login.tsx











const Login = (param)=>{
    let { onClickRegister } = param;
    const dispatch = (0,hooks/* useAppDispatch */.T)();
    const [errorMessage, setErrorMessage] = (0,react.useState)("");
    const form = (0,index_esm/* useForm */.cI)({
        mode: "onSubmit",
        resolver: (0,yup/* yupResolver */.X)(LoginFormSchema)
    });
    const onSubmit = async (dto)=>{
        try {
            const data = await (0,api/* Api */.V)().users.login(dto);
            setErrorMessage("");
            dispatch((0,slices_user/* setUserData */.M)(data));
        } catch (err) {
            console.warn("Ошибка при регистрации", err);
            if (err.response) {
                setErrorMessage(err.response.data.message);
            }
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* FormProvider */.RV, {
            ...form,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                onSubmit: form.handleSubmit(onSubmit),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: (AuthPopup_module_default()).popupFields,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(components_FormField, {
                                name: "email",
                                label: "Email"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(components_FormField, {
                                name: "password",
                                label: "Пароль"
                            }),
                            errorMessage && /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.Z, {
                                severity: "error",
                                children: errorMessage
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: (AuthPopup_module_default()).popupBottom,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                disabled: form.formState.isSubmitting,
                                type: "submit",
                                children: "Войти"
                            }),
                            onClickRegister && /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                onClick: onClickRegister,
                                variant: "outlined",
                                children: "Зарегистрироваться"
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ var Auth_Login = (Login);

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 13 modules
var es = __webpack_require__(3198);
;// CONCATENATED MODULE: ./src/components/Auth/AdminLogin/index.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 








const AdminLogin = ()=>{
    const [formType, setFormType] = (0,react.useState)("main");
    const { user } = (0,es/* useSelector */.v9)((state)=>state.userReducer);
    const [authVisible, setAuthVisible] = (0,react.useState)(true);
    const [logoutVisible, setLogoutVisible] = (0,react.useState)(false);
    const [popupVisible, setPopupVisible] = (0,react.useState)(false);
    const dispatch = (0,hooks/* useAppDispatch */.T)();
    (0,react.useEffect)(()=>{
        (0,api/* Api */.V)().users.getMe().then((res)=>{
            dispatch((0,slices_user/* setUserData */.M)(res));
        });
    }, [
        user ? user.id : ""
    ]);
    const openAuthDialog = ()=>{
        setAuthVisible(true);
    };
    const closeAuthDialog = ()=>{
        setAuthVisible(false);
    };
    (0,react.useEffect)(()=>{
        if (authVisible && user) {
            setAuthVisible(false);
        }
    }, [
        authVisible,
        user
    ]);
    const handleChangeInput = async (e)=>{
        setPopupVisible(true);
    };
    const handleLogout = async ()=>{
        (0,api/* Api */.V)().users.logout().then((res)=>{
            dispatch((0,slices_user/* setUserData */.M)(null));
        });
        setLogoutVisible(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Dialog/* default */.Z, {
        open: authVisible,
        maxWidth: "xs",
        fullWidth: true,
        className: (AdminLogin_module_default()).authLogin,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Auth_Login, {})
        })
    });
};
/* harmony default export */ var Auth_AdminLogin = (AdminLogin);


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

/***/ 82993:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: function() { return /* binding */ useAppDispatch; }
/* harmony export */ });
/* unused harmony export useAppSelector */
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3198);

const useAppDispatch = ()=>(0,react_redux__WEBPACK_IMPORTED_MODULE_0__/* .useDispatch */ .I0)();
const useAppSelector = (/* unused pure expression or super */ null && (useSelector));


/***/ }),

/***/ 85634:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UY: function() { return /* binding */ deleteProductData; },
/* harmony export */   aG: function() { return /* binding */ deleteProductAroma; },
/* harmony export */   dy: function() { return /* binding */ updateProductImages; },
/* harmony export */   hj: function() { return /* binding */ addProductAroma; },
/* harmony export */   qH: function() { return /* binding */ setProductsData; }
/* harmony export */ });
/* unused harmony export addProductsData */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20064);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45058);


const initialState = {
    products: []
};
const adminPanelProductsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__/* .createSlice */ .oM)({
    name: "adminPanelProducts",
    initialState,
    reducers: {
        setProductsData (state, action) {
            state.products = action.payload;
        },
        addProductsData (state, action) {
            state.products = [
                ...state.products,
                action.payload
            ];
        },
        deleteProductData (state, action) {
            state.products = state.products.filter((product)=>{
                product.id !== action.payload.id;
            });
        },
        updateProductImages (state, action) {
            state.products.map((product)=>{
                if (product.id === action.payload.id) {
                    product.images = action.payload.images;
                }
            });
        },
        deleteProductAroma (state, action) {
            state.products.map((product)=>{
                if (product.id === action.payload.productId) {
                    var _product_aromas;
                    product.aromas = (_product_aromas = product.aromas) === null || _product_aromas === void 0 ? void 0 : _product_aromas.filter((aroma)=>aroma.id !== action.payload.id);
                }
            });
        },
        addProductAroma (state, action) {
            state.products.map((product)=>{
                if (product.aromas && product.id === action.payload.productId) {
                    product.aromas = [
                        ...product.aromas,
                        action.payload
                    ];
                }
            });
        }
    },
    extraReducers: {
        [next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__/* .HYDRATE */ .ju]: (state, action)=>{
            state = action.payload;
        }
    }
});
const { setProductsData, addProductsData, deleteProductData, updateProductImages, addProductAroma, deleteProductAroma } = adminPanelProductsSlice.actions;
/* harmony default export */ __webpack_exports__.ZP = (adminPanelProductsSlice.reducer);


/***/ }),

/***/ 90235:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: function() { return /* binding */ setUserData; },
/* harmony export */   M3: function() { return /* binding */ userReducer; }
/* harmony export */ });
/* unused harmony exports userSlice, selectUserData */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20064);

const initialState = {
    user: null
};
const userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__/* .createSlice */ .oM)({
    name: "user",
    initialState,
    reducers: {
        setUserData: (state, action)=>{
            console.log(action.payload);
            state.user = action.payload;
        }
    },
    extraReducers: (builder)=>{
    // [HYDRATE]: (state, action) => {
    //   state.user = action.payload.user.data;
    // },
    }
});
const { setUserData } = userSlice.actions;
const selectUserData = (state)=>state.userReducer;
const userReducer = userSlice.reducer;


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

/***/ 30803:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"addProductForm":"AddProductForm_addProductForm__nE_XJ","addProductFormItem":"AddProductForm_addProductFormItem__HKqLR","addProductFormCloseIcon":"AddProductForm_addProductFormCloseIcon__Fh9lA","addProductFormSelect":"AddProductForm_addProductFormSelect__g4Yzq","addProductFormAromas":"AddProductForm_addProductFormAromas__hML9N","deleteAromaButton":"AddProductForm_deleteAromaButton___5rdl","createProductButton":"AddProductForm_createProductButton__pm7ic","addImageInput":"AddProductForm_addImageInput__kDM93"};

/***/ }),

/***/ 84116:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"editProduct":"EditProduct_editProduct__Utl0n","editProductTop":"EditProduct_editProductTop__UrZs9","editProductDelete":"EditProduct_editProductDelete__iTKBa","editProductImages":"EditProduct_editProductImages__YfCN8","editProductImage":"EditProduct_editProductImage__zDzAb","editProductDeleteImage":"EditProduct_editProductDeleteImage__uqsy3","editProductForm":"EditProduct_editProductForm__xf5nU","editProductClose":"EditProduct_editProductClose__0XGyt","editProductAccordionTitle":"EditProduct_editProductAccordionTitle__Ubi_t","editProductFormAddImage":"EditProduct_editProductFormAddImage__39ZEF","editProductItem":"EditProduct_editProductItem__7gQPr","editProductChangeProduct":"EditProduct_editProductChangeProduct__58LEO","editProducAromas":"EditProduct_editProducAromas__Xrrq1","editProductChangeAroma":"EditProduct_editProductChangeAroma__tmFuo","editProductDeleteAroma":"EditProduct_editProductDeleteAroma__sWSwv","editProductAddAroma":"EditProduct_editProductAddAroma__caZpr"};

/***/ }),

/***/ 10135:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"authLogin":"AdminLogin_authLogin__nC7uR"};

/***/ }),

/***/ 97802:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"popupTitleAuthorization":"AuthPopup_popupTitleAuthorization__tKPmc","popupContent":"AuthPopup_popupContent__jch64","popupFields":"AuthPopup_popupFields__kMD10","bottomButtons":"AuthPopup_bottomButtons__NZmsX","popupBottom":"AuthPopup_popupBottom__2d1lX"};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [42,271,172,198,295,182,572,64,865,364,58,461,191,971,596,744], function() { return __webpack_exec__(75992); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);