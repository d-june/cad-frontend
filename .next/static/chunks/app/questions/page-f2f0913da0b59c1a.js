(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[844],{

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

/***/ 29872:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ Paper_Paper; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(20791);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(13428);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(57042);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(95600);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/colorManipulator.js
var colorManipulator = __webpack_require__(89975);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(35843);
;// CONCATENATED MODULE: ./node_modules/@mui/material/styles/getOverlayAlpha.js
// Inspired by https://github.com/material-components/material-components-ios/blob/bca36107405594d5b7b16265a5b0ed698f85a5ee/components/Elevation/src/UIColor%2BMaterialElevation.m#L61
const getOverlayAlpha = elevation => {
  let alphaValue;
  if (elevation < 1) {
    alphaValue = 5.11916 * elevation ** 2;
  } else {
    alphaValue = 4.5 * Math.log(elevation + 1) + 2;
  }
  return (alphaValue / 100).toFixed(2);
};
/* harmony default export */ var styles_getOverlayAlpha = (getOverlayAlpha);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useThemeProps.js
var useThemeProps = __webpack_require__(87927);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(26520);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(25702);
;// CONCATENATED MODULE: ./node_modules/@mui/material/Paper/paperClasses.js


function getPaperUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiPaper', slot);
}
const paperClasses = (0,generateUtilityClasses/* default */.Z)('MuiPaper', ['root', 'rounded', 'outlined', 'elevation', 'elevation0', 'elevation1', 'elevation2', 'elevation3', 'elevation4', 'elevation5', 'elevation6', 'elevation7', 'elevation8', 'elevation9', 'elevation10', 'elevation11', 'elevation12', 'elevation13', 'elevation14', 'elevation15', 'elevation16', 'elevation17', 'elevation18', 'elevation19', 'elevation20', 'elevation21', 'elevation22', 'elevation23', 'elevation24']);
/* harmony default export */ var Paper_paperClasses = ((/* unused pure expression or super */ null && (paperClasses)));
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(57437);
;// CONCATENATED MODULE: ./node_modules/@mui/material/Paper/Paper.js
'use client';



const _excluded = ["className", "component", "elevation", "square", "variant"];












const useUtilityClasses = ownerState => {
  const {
    square,
    elevation,
    variant,
    classes
  } = ownerState;
  const slots = {
    root: ['root', variant, !square && 'rounded', variant === 'elevation' && `elevation${elevation}`]
  };
  return (0,composeClasses/* default */.Z)(slots, getPaperUtilityClass, classes);
};
const PaperRoot = (0,styled/* default */.ZP)('div', {
  name: 'MuiPaper',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.variant], !ownerState.square && styles.rounded, ownerState.variant === 'elevation' && styles[`elevation${ownerState.elevation}`]];
  }
})(({
  theme,
  ownerState
}) => {
  var _theme$vars$overlays;
  return (0,esm_extends/* default */.Z)({
    backgroundColor: (theme.vars || theme).palette.background.paper,
    color: (theme.vars || theme).palette.text.primary,
    transition: theme.transitions.create('box-shadow')
  }, !ownerState.square && {
    borderRadius: theme.shape.borderRadius
  }, ownerState.variant === 'outlined' && {
    border: `1px solid ${(theme.vars || theme).palette.divider}`
  }, ownerState.variant === 'elevation' && (0,esm_extends/* default */.Z)({
    boxShadow: (theme.vars || theme).shadows[ownerState.elevation]
  }, !theme.vars && theme.palette.mode === 'dark' && {
    backgroundImage: `linear-gradient(${(0,colorManipulator/* alpha */.Fq)('#fff', styles_getOverlayAlpha(ownerState.elevation))}, ${(0,colorManipulator/* alpha */.Fq)('#fff', styles_getOverlayAlpha(ownerState.elevation))})`
  }, theme.vars && {
    backgroundImage: (_theme$vars$overlays = theme.vars.overlays) == null ? void 0 : _theme$vars$overlays[ownerState.elevation]
  }));
});
const Paper = /*#__PURE__*/react.forwardRef(function Paper(inProps, ref) {
  const props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiPaper'
  });
  const {
      className,
      component = 'div',
      elevation = 1,
      square = false,
      variant = 'elevation'
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);
  const ownerState = (0,esm_extends/* default */.Z)({}, props, {
    component,
    elevation,
    square,
    variant
  });
  const classes = useUtilityClasses(ownerState);
  if (false) {}
  return /*#__PURE__*/(0,jsx_runtime.jsx)(PaperRoot, (0,esm_extends/* default */.Z)({
    as: component,
    ownerState: ownerState,
    className: (0,clsx/* default */.Z)(classes.root, className),
    ref: ref
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ var Paper_Paper = (Paper);

/***/ }),

/***/ 41101:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: function() { return /* binding */ useTheme; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95270);
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53794);
/* harmony import */ var _identifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53469);
'use client';





function useTheme() {
  const theme = (0,_mui_system__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(_defaultTheme__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
  if (false) {}
  return theme[_identifier__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z] || theme;
}

/***/ }),

/***/ 4439:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: function() { return /* binding */ getTransitionProps; },
/* harmony export */   n: function() { return /* binding */ reflow; }
/* harmony export */ });
const reflow = node => node.scrollTop;
function getTransitionProps(props, options) {
  var _style$transitionDura, _style$transitionTimi;
  const {
    timeout,
    easing,
    style = {}
  } = props;
  return {
    duration: (_style$transitionDura = style.transitionDuration) != null ? _style$transitionDura : typeof timeout === 'number' ? timeout : timeout[options.mode] || 0,
    easing: (_style$transitionTimi = style.transitionTimingFunction) != null ? _style$transitionTimi : typeof easing === 'object' ? easing[options.mode] : easing,
    delay: style.transitionDelay
  };
}

/***/ }),

/***/ 7933:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 48160));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 46685, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 50924));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 98677, 23))

/***/ }),

/***/ 1295:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    unstable_getImgProps: function() {
        return unstable_getImgProps;
    }
});
const _interop_require_default = __webpack_require__(21024);
const _getimgprops = __webpack_require__(32301);
const _warnonce = __webpack_require__(27873);
const _imagecomponent = __webpack_require__(63222);
const _imageloader = /*#__PURE__*/ _interop_require_default._(__webpack_require__(75033));
const unstable_getImgProps = (imgProps)=>{
    (0, _warnonce.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");
    const { props } = (0, _getimgprops.getImgProps)(imgProps, {
        defaultLoader: _imageloader.default,
        // This is replaced by webpack define plugin
        imgConf: {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","dangerouslyAllowSVG":false,"unoptimized":false}
    });
    for (const [key, value] of Object.entries(props)){
        if (value === undefined) {
            delete props[key];
        }
    }
    return {
        props
    };
};
const _default = _imagecomponent.Image; //# sourceMappingURL=image-external.js.map


/***/ }),

/***/ 48160:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ QuestionsList; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(57437);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
// EXTERNAL MODULE: ./node_modules/@mui/material/Accordion/Accordion.js + 3 modules
var Accordion = __webpack_require__(82057);
// EXTERNAL MODULE: ./node_modules/@mui/material/AccordionDetails/AccordionDetails.js + 1 modules
var AccordionDetails = __webpack_require__(58768);
// EXTERNAL MODULE: ./node_modules/@mui/material/AccordionSummary/AccordionSummary.js + 1 modules
var AccordionSummary = __webpack_require__(15873);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/ExpandMore.js
var ExpandMore = __webpack_require__(81344);
// EXTERNAL MODULE: ./src/components/QuestionsList/QuestionsList.module.scss
var QuestionsList_module = __webpack_require__(39066);
var QuestionsList_module_default = /*#__PURE__*/__webpack_require__.n(QuestionsList_module);
;// CONCATENATED MODULE: ./public/candles/stok-main/IMG_4536.jpg
/* harmony default export */ var IMG_4536 = ({"src":"/_next/static/media/IMG_4536.4993c40b.jpg","height":3024,"width":4032,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAJxD/8QAHRAAAQQCAwAAAAAAAAAAAAAAAwEEBRMAAhIhcv/aAAgBAQABPwCHcgNG3uRWDVd04ees/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAIRIXH/2gAIAQIBAT8AWp0//8QAGBEAAgMAAAAAAAAAAAAAAAAAAAIRIXH/2gAIAQMBAT8Aa4w//9k=","blurWidth":8,"blurHeight":6});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(16691);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/components/QuestionsList/index.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 








const questionsListData = [
    {
        id: 1,
        question: "Как долго горит свеча?",
        answer: "Свечи из соевого воска горят в 3-4 раза дольше парафиновых. В среднем свеча объемом 50 мл. будет гореть около 10 часов,  объемом 100 мл. - 20 часов, объемом 180 мл. -  35 часов, объёмом 200 мл. - 40 часов. Не забывайте давать свече отдохнуть и остыть после 2 часов горения. Достаточно будет 15-минутного перерыва. Воск затвердеет и можно будет зажигать свечу заново."
    },
    {
        id: 2,
        question: "Почему нельзя задувать свечи?",
        answer: "Когда вы задуваете пламя, горячий воск может брызнуть, создавая риск обжечься или испортить поверхность, на которой стоит свеча. Поэтому безопаснее использовать колпачок или крышку подсвечника, которой можно остановить пламя: кислород перестанет поступать, и свеча тут же погаснет. Также такой способ предотвращает тление фитиля, которое дает неприятный запах, перекрывающий приятный аромат свечи."
    },
    {
        id: 3,
        question: "Для чего нужна ароматическая свеча?",
        answer: "Ароматы наполняют людей эмоциями не меньше, чем красивые вещи, музыка, приятная компания или вкусная еда. А еще запахи влияют на наш разум, настроение и самочувствие. Некоторые помогают взбодриться, наполниться энергией и поймать волну активности. Другие имеют прямо противоположный эффект: убирают тревогу, успокаивают, снимают напряжение и помогают крепче спать. Также ароматические свечи придают уют домашней обстановке."
    },
    {
        id: 4,
        question: "Как ароматические свечи влияют на человека?",
        answer: "Ароматические свечи могут уменьшать уровень стресса и тревожности, улучшать настроение и повышать концентрацию. Некоторые ароматы, такие как лаванда, мята и ромашка, имеют успокаивающие свойства и могут помочь снять напряжение и улучшить сон. Ароматы цитруса улучшают настроение, бодрят и вызывают чувство радости. Ароматы розмарина, базилика и мяты повышают активность мозга и улучшают память."
    },
    {
        id: 5,
        question: "Сколько можно жечь свечу?",
        answer: "Не рекомендуем жечь свечу дольше двух-трех часов: так воск перегревается, и аромамасла перестают отдавать свой аромат. Если хотите использовать свечу продолжительное время, то гасите ее каждые пару часов на 15 минут — этого времени будет достаточно, чтобы воск немного остыл и затвердел."
    },
    {
        id: 6,
        question: "Куда поставить ароматическую свечу?",
        answer: "Ставьте свечу на ровную твердую поверхность в помещении с хорошей вентиляцией, вдали от открытых окон, сквозняков, на безопасном расстоянии от легковоспламеняющихся предметов, например, занавесок. Горящая свеча должна быть недоступна для детей и животных, не оставляйте ее без присмотра."
    },
    {
        id: 7,
        question: "Можно ли спать с зажженной свечой?",
        answer: "Нет, не оставляйте свечи без внимания и присмотра. Если уходите из дома или ложитесь спать - обязательно затушите все свечи для устранения риска возникновения пожара."
    },
    {
        id: 8,
        question: "Почему ароматические свечи такие дорогие?",
        answer: "Ароматические свечи – это не только воск и немного отдушки. В составе готового продукта находится натуральный соевый воск, специальные отдушки, деревянный фитиль, фитиледержатель, наклейка для фитиля и тара (банка или гипсовый подсвечник, которые также имеют свою стоимость), добавим сюда еще стоимость упаковки. Отдельно стоит сказать про ароматы для свечей, этот компонент самый дорогой в свечах, ароматы создаются парфюмерами путем комбинаций различных синтетических веществ, которые должны приятно пахнуть при горении и не источать химических ноток. Каждый аромат тестируется, меняется и снова тестируется. В составе хорошего аромата может быть до 30 компонентов. "
    }
];
function QuestionsList() {
    const [expanded, setExpanded] = react.useState(false);
    const handleChange = (panel)=>(event, isExpanded)=>{
            setExpanded(isExpanded ? panel : false);
        };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (QuestionsList_module_default()).questionsWrapper,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (QuestionsList_module_default()).questionsList,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                        children: "Вопросы и ответы"
                    }),
                    questionsListData.map((question)=>{
                        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Accordion/* default */.Z, {
                            expanded: expanded === "panel".concat(question.id),
                            onChange: handleChange("panel".concat(question.id)),
                            className: (QuestionsList_module_default()).accordion,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionSummary/* default */.Z, {
                                    expandIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(ExpandMore/* default */.Z, {}),
                                    "aria-controls": "panel1bh-content",
                                    id: "panel1bh-header",
                                    className: (QuestionsList_module_default()).accordionTitle,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        children: question.question
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionDetails/* default */.Z, {
                                    className: (QuestionsList_module_default()).accordionDetails,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        children: question.answer
                                    })
                                })
                            ]
                        }, question.id);
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: (QuestionsList_module_default()).questionsListImage,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)((image_default()), {
                    src: IMG_4536,
                    alt: "candle"
                })
            })
        ]
    });
}


/***/ }),

/***/ 98677:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"breadcrumbs":"Breadcrumbs_breadcrumbs__0II_j","breadcrumbsHome":"Breadcrumbs_breadcrumbsHome__1JjLd"};

/***/ }),

/***/ 39066:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"questionsWrapper":"QuestionsList_questionsWrapper__aQlxi","questionsList":"QuestionsList_questionsList__JvLgu","accordion":"QuestionsList_accordion__wxWHx","accordionTitle":"QuestionsList_accordionTitle__RmOXh","accordionDetails":"QuestionsList_accordionDetails__159oh","questionsListImage":"QuestionsList_questionsListImage__tFgCY"};

/***/ }),

/***/ 16691:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(1295)


/***/ }),

/***/ 81870:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ix: function() { return /* binding */ EXITING; },
/* harmony export */   cn: function() { return /* binding */ ENTERED; },
/* harmony export */   d0: function() { return /* binding */ ENTERING; }
/* harmony export */ });
/* unused harmony exports UNMOUNTED, EXITED */
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20791);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63142);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54887);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80478);
/* harmony import */ var _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(54439);
/* harmony import */ var _utils_reflow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37295);









var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  } // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }
  ;

  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      if (nextStatus === ENTERING) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var node = this.props.nodeRef ? this.props.nodeRef.current : react_dom__WEBPACK_IMPORTED_MODULE_1__.findDOMNode(this); // https://github.com/reactjs/react-transition-group/pull/749
          // With unmountOnExit or mountOnEnter, the enter animation should happen at the transition between `exited` and `entering`.
          // To make the animation happen,  we have to separate each rendering and avoid being processed as batched.

          if (node) (0,_utils_reflow__WEBPACK_IMPORTED_MODULE_3__/* .forceReflow */ .Q)(node);
        }

        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;

    var _ref2 = this.props.nodeRef ? [appearing] : [react_dom__WEBPACK_IMPORTED_MODULE_1__.findDOMNode(this), appearing],
        maybeNode = _ref2[0],
        maybeAppearing = _ref2[1];

    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || _config__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }

    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(maybeNode, maybeAppearing);

      _this2.onTransitionEnd(enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };

  _proto.performExit = function performExit() {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? undefined : react_dom__WEBPACK_IMPORTED_MODULE_1__.findDOMNode(this); // no exit animation skip right to EXITED

    if (!exit || _config__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(maybeNode);
      });
      return;
    }

    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(maybeNode);

      _this3.onTransitionEnd(timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : react_dom__WEBPACK_IMPORTED_MODULE_1__.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
          maybeNode = _ref3[0],
          maybeNextCallback = _ref3[1];

      this.props.addEndListener(maybeNode, maybeNextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        _in = _this$props.in,
        _mountOnEnter = _this$props.mountOnEnter,
        _unmountOnExit = _this$props.unmountOnExit,
        _appear = _this$props.appear,
        _enter = _this$props.enter,
        _exit = _this$props.exit,
        _timeout = _this$props.timeout,
        _addEndListener = _this$props.addEndListener,
        _onEnter = _this$props.onEnter,
        _onEntering = _this$props.onEntering,
        _onEntered = _this$props.onEntered,
        _onExit = _this$props.onExit,
        _onExiting = _this$props.onExiting,
        _onExited = _this$props.onExited,
        _nodeRef = _this$props.nodeRef,
        childProps = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

    return (
      /*#__PURE__*/
      // allows for nested Transitions
      react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.Provider, {
        value: null
      }, typeof children === 'function' ? children(status, childProps) : react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(react__WEBPACK_IMPORTED_MODULE_0__.Children.only(children), childProps))
    );
  };

  return Transition;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

Transition.contextType = _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z;
Transition.propTypes =  false ? 0 : {}; // Name the function so it is clearer in the documentation

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
/* harmony default export */ __webpack_exports__.ZP = (Transition);

/***/ }),

/***/ 80478:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
/* harmony default export */ __webpack_exports__.Z = ({
  disabled: false
});

/***/ }),

/***/ 37295:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: function() { return /* binding */ forceReflow; }
/* harmony export */ });
var forceReflow = function forceReflow(node) {
  return node.scrollTop;
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [42,271,685,172,222,295,461,971,596,744], function() { return __webpack_exec__(7933); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);