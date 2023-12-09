"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[572],{

/***/ 15084:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: function() { return /* binding */ FocusTrap; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95137);
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96278);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57437);
'use client';

/* eslint-disable consistent-return, jsx-a11y/no-noninteractive-tabindex */





// Inspired by https://github.com/focus-trap/tabbable
const candidatesSelector = ['input', 'select', 'textarea', 'a[href]', 'button', '[tabindex]', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])'].join(',');
function getTabIndex(node) {
  const tabindexAttr = parseInt(node.getAttribute('tabindex') || '', 10);
  if (!Number.isNaN(tabindexAttr)) {
    return tabindexAttr;
  }

  // Browsers do not return `tabIndex` correctly for contentEditable nodes;
  // https://bugs.chromium.org/p/chromium/issues/detail?id=661108&q=contenteditable%20tabindex&can=2
  // so if they don't have a tabindex attribute specifically set, assume it's 0.
  // in Chrome, <details/>, <audio controls/> and <video controls/> elements get a default
  //  `tabIndex` of -1 when the 'tabindex' attribute isn't specified in the DOM,
  //  yet they are still part of the regular tab order; in FF, they get a default
  //  `tabIndex` of 0; since Chrome still puts those elements in the regular tab
  //  order, consider their tab index to be 0.
  if (node.contentEditable === 'true' || (node.nodeName === 'AUDIO' || node.nodeName === 'VIDEO' || node.nodeName === 'DETAILS') && node.getAttribute('tabindex') === null) {
    return 0;
  }
  return node.tabIndex;
}
function isNonTabbableRadio(node) {
  if (node.tagName !== 'INPUT' || node.type !== 'radio') {
    return false;
  }
  if (!node.name) {
    return false;
  }
  const getRadio = selector => node.ownerDocument.querySelector(`input[type="radio"]${selector}`);
  let roving = getRadio(`[name="${node.name}"]:checked`);
  if (!roving) {
    roving = getRadio(`[name="${node.name}"]`);
  }
  return roving !== node;
}
function isNodeMatchingSelectorFocusable(node) {
  if (node.disabled || node.tagName === 'INPUT' && node.type === 'hidden' || isNonTabbableRadio(node)) {
    return false;
  }
  return true;
}
function defaultGetTabbable(root) {
  const regularTabNodes = [];
  const orderedTabNodes = [];
  Array.from(root.querySelectorAll(candidatesSelector)).forEach((node, i) => {
    const nodeTabIndex = getTabIndex(node);
    if (nodeTabIndex === -1 || !isNodeMatchingSelectorFocusable(node)) {
      return;
    }
    if (nodeTabIndex === 0) {
      regularTabNodes.push(node);
    } else {
      orderedTabNodes.push({
        documentOrder: i,
        tabIndex: nodeTabIndex,
        node: node
      });
    }
  });
  return orderedTabNodes.sort((a, b) => a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex).map(a => a.node).concat(regularTabNodes);
}
function defaultIsEnabled() {
  return true;
}

/**
 * Utility component that locks focus inside the component.
 *
 * Demos:
 *
 * - [Focus Trap](https://mui.com/base-ui/react-focus-trap/)
 *
 * API:
 *
 * - [FocusTrap API](https://mui.com/base-ui/react-focus-trap/components-api/#focus-trap)
 */
function FocusTrap(props) {
  const {
    children,
    disableAutoFocus = false,
    disableEnforceFocus = false,
    disableRestoreFocus = false,
    getTabbable = defaultGetTabbable,
    isEnabled = defaultIsEnabled,
    open
  } = props;
  const ignoreNextEnforceFocus = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  const sentinelStart = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  const sentinelEnd = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  const nodeToRestore = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  const reactFocusEventTarget = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  // This variable is useful when disableAutoFocus is true.
  // It waits for the active element to move into the component to activate.
  const activated = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  const rootRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  // @ts-expect-error TODO upstream fix
  const handleRef = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(children.ref, rootRef);
  const lastKeydown = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    // We might render an empty child.
    if (!open || !rootRef.current) {
      return;
    }
    activated.current = !disableAutoFocus;
  }, [disableAutoFocus, open]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    // We might render an empty child.
    if (!open || !rootRef.current) {
      return;
    }
    const doc = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(rootRef.current);
    if (!rootRef.current.contains(doc.activeElement)) {
      if (!rootRef.current.hasAttribute('tabIndex')) {
        if (false) {}
        rootRef.current.setAttribute('tabIndex', '-1');
      }
      if (activated.current) {
        rootRef.current.focus();
      }
    }
    return () => {
      // restoreLastFocus()
      if (!disableRestoreFocus) {
        // In IE11 it is possible for document.activeElement to be null resulting
        // in nodeToRestore.current being null.
        // Not all elements in IE11 have a focus method.
        // Once IE11 support is dropped the focus() call can be unconditional.
        if (nodeToRestore.current && nodeToRestore.current.focus) {
          ignoreNextEnforceFocus.current = true;
          nodeToRestore.current.focus();
        }
        nodeToRestore.current = null;
      }
    };
    // Missing `disableRestoreFocus` which is fine.
    // We don't support changing that prop on an open FocusTrap
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    // We might render an empty child.
    if (!open || !rootRef.current) {
      return;
    }
    const doc = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(rootRef.current);
    const loopFocus = nativeEvent => {
      lastKeydown.current = nativeEvent;
      if (disableEnforceFocus || !isEnabled() || nativeEvent.key !== 'Tab') {
        return;
      }

      // Make sure the next tab starts from the right place.
      // doc.activeElement refers to the origin.
      if (doc.activeElement === rootRef.current && nativeEvent.shiftKey) {
        // We need to ignore the next contain as
        // it will try to move the focus back to the rootRef element.
        ignoreNextEnforceFocus.current = true;
        if (sentinelEnd.current) {
          sentinelEnd.current.focus();
        }
      }
    };
    const contain = () => {
      const rootElement = rootRef.current;

      // Cleanup functions are executed lazily in React 17.
      // Contain can be called between the component being unmounted and its cleanup function being run.
      if (rootElement === null) {
        return;
      }
      if (!doc.hasFocus() || !isEnabled() || ignoreNextEnforceFocus.current) {
        ignoreNextEnforceFocus.current = false;
        return;
      }

      // The focus is already inside
      if (rootElement.contains(doc.activeElement)) {
        return;
      }

      // The disableEnforceFocus is set and the focus is outside of the focus trap (and sentinel nodes)
      if (disableEnforceFocus && doc.activeElement !== sentinelStart.current && doc.activeElement !== sentinelEnd.current) {
        return;
      }

      // if the focus event is not coming from inside the children's react tree, reset the refs
      if (doc.activeElement !== reactFocusEventTarget.current) {
        reactFocusEventTarget.current = null;
      } else if (reactFocusEventTarget.current !== null) {
        return;
      }
      if (!activated.current) {
        return;
      }
      let tabbable = [];
      if (doc.activeElement === sentinelStart.current || doc.activeElement === sentinelEnd.current) {
        tabbable = getTabbable(rootRef.current);
      }

      // one of the sentinel nodes was focused, so move the focus
      // to the first/last tabbable element inside the focus trap
      if (tabbable.length > 0) {
        var _lastKeydown$current, _lastKeydown$current2;
        const isShiftTab = Boolean(((_lastKeydown$current = lastKeydown.current) == null ? void 0 : _lastKeydown$current.shiftKey) && ((_lastKeydown$current2 = lastKeydown.current) == null ? void 0 : _lastKeydown$current2.key) === 'Tab');
        const focusNext = tabbable[0];
        const focusPrevious = tabbable[tabbable.length - 1];
        if (typeof focusNext !== 'string' && typeof focusPrevious !== 'string') {
          if (isShiftTab) {
            focusPrevious.focus();
          } else {
            focusNext.focus();
          }
        }
        // no tabbable elements in the trap focus or the focus was outside of the focus trap
      } else {
        rootElement.focus();
      }
    };
    doc.addEventListener('focusin', contain);
    doc.addEventListener('keydown', loopFocus, true);

    // With Edge, Safari and Firefox, no focus related events are fired when the focused area stops being a focused area.
    // e.g. https://bugzilla.mozilla.org/show_bug.cgi?id=559561.
    // Instead, we can look if the active element was restored on the BODY element.
    //
    // The whatwg spec defines how the browser should behave but does not explicitly mention any events:
    // https://html.spec.whatwg.org/multipage/interaction.html#focus-fixup-rule.
    const interval = setInterval(() => {
      if (doc.activeElement && doc.activeElement.tagName === 'BODY') {
        contain();
      }
    }, 50);
    return () => {
      clearInterval(interval);
      doc.removeEventListener('focusin', contain);
      doc.removeEventListener('keydown', loopFocus, true);
    };
  }, [disableAutoFocus, disableEnforceFocus, disableRestoreFocus, isEnabled, open, getTabbable]);
  const onFocus = event => {
    if (nodeToRestore.current === null) {
      nodeToRestore.current = event.relatedTarget;
    }
    activated.current = true;
    reactFocusEventTarget.current = event.target;
    const childrenPropsHandler = children.props.onFocus;
    if (childrenPropsHandler) {
      childrenPropsHandler(event);
    }
  };
  const handleFocusSentinel = event => {
    if (nodeToRestore.current === null) {
      nodeToRestore.current = event.relatedTarget;
    }
    activated.current = true;
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      tabIndex: open ? 0 : -1,
      onFocus: handleFocusSentinel,
      ref: sentinelStart,
      "data-testid": "sentinelStart"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(children, {
      ref: handleRef,
      onFocus
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      tabIndex: open ? 0 : -1,
      onFocus: handleFocusSentinel,
      ref: sentinelEnd,
      "data-testid": "sentinelEnd"
    })]
  });
}
 false ? 0 : void 0;
if (false) {}


/***/ }),

/***/ 57379:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: function() { return /* binding */ Portal; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54887);
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95137);
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1091);
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13840);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57437);
'use client';






function getContainer(container) {
  return typeof container === 'function' ? container() : container;
}

/**
 * Portals provide a first-class way to render children into a DOM node
 * that exists outside the DOM hierarchy of the parent component.
 *
 * Demos:
 *
 * - [Portal](https://mui.com/base-ui/react-portal/)
 *
 * API:
 *
 * - [Portal API](https://mui.com/base-ui/react-portal/components-api/#portal)
 */
const Portal = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function Portal(props, forwardedRef) {
  const {
    children,
    container,
    disablePortal = false
  } = props;
  const [mountNode, setMountNode] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);
  // @ts-expect-error TODO upstream fix
  const handleRef = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(children) ? children.ref : null, forwardedRef);
  (0,_mui_utils__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(() => {
    if (!disablePortal) {
      setMountNode(getContainer(container) || document.body);
    }
  }, [container, disablePortal]);
  (0,_mui_utils__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(() => {
    if (mountNode && !disablePortal) {
      (0,_mui_utils__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(forwardedRef, mountNode);
      return () => {
        (0,_mui_utils__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(forwardedRef, null);
      };
    }
    return undefined;
  }, [forwardedRef, mountNode, disablePortal]);
  if (disablePortal) {
    if ( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(children)) {
      const newProps = {
        ref: handleRef
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(children, newProps);
    }
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: children
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: mountNode ? /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal(children, mountNode) : mountNode
  });
});
 false ? 0 : void 0;
if (false) {}


/***/ }),

/***/ 95446:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: function() { return /* binding */ TextareaAutosize; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(13428);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20791);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54887);
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95137);
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88221);
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78078);
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1091);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57437);
'use client';



const _excluded = ["onChange", "maxRows", "minRows", "style", "value"];






function getStyleValue(value) {
  return parseInt(value, 10) || 0;
}
const styles = {
  shadow: {
    // Visibility needed to hide the extra text area on iPads
    visibility: 'hidden',
    // Remove from the content flow
    position: 'absolute',
    // Ignore the scrollbar width
    overflow: 'hidden',
    height: 0,
    top: 0,
    left: 0,
    // Create a new layer, increase the isolation of the computed values
    transform: 'translateZ(0)'
  }
};
function isEmpty(obj) {
  return obj === undefined || obj === null || Object.keys(obj).length === 0 || obj.outerHeightStyle === 0 && !obj.overflow;
}

/**
 *
 * Demos:
 *
 * - [Textarea Autosize](https://mui.com/base-ui/react-textarea-autosize/)
 * - [Textarea Autosize](https://mui.com/material-ui/react-textarea-autosize/)
 *
 * API:
 *
 * - [TextareaAutosize API](https://mui.com/base-ui/react-textarea-autosize/components-api/#textarea-autosize)
 */
const TextareaAutosize = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function TextareaAutosize(props, forwardedRef) {
  const {
      onChange,
      maxRows,
      minRows = 1,
      style,
      value
    } = props,
    other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(props, _excluded);
  const {
    current: isControlled
  } = react__WEBPACK_IMPORTED_MODULE_0__.useRef(value != null);
  const inputRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  const handleRef = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(forwardedRef, inputRef);
  const shadowRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  const renders = react__WEBPACK_IMPORTED_MODULE_0__.useRef(0);
  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
    outerHeightStyle: 0
  });
  const getUpdatedState = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
    const input = inputRef.current;
    const containerWindow = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(input);
    const computedStyle = containerWindow.getComputedStyle(input);

    // If input's width is shrunk and it's not visible, don't sync height.
    if (computedStyle.width === '0px') {
      return {
        outerHeightStyle: 0
      };
    }
    const inputShallow = shadowRef.current;
    inputShallow.style.width = computedStyle.width;
    inputShallow.value = input.value || props.placeholder || 'x';
    if (inputShallow.value.slice(-1) === '\n') {
      // Certain fonts which overflow the line height will cause the textarea
      // to report a different scrollHeight depending on whether the last line
      // is empty. Make it non-empty to avoid this issue.
      inputShallow.value += ' ';
    }
    const boxSizing = computedStyle.boxSizing;
    const padding = getStyleValue(computedStyle.paddingBottom) + getStyleValue(computedStyle.paddingTop);
    const border = getStyleValue(computedStyle.borderBottomWidth) + getStyleValue(computedStyle.borderTopWidth);

    // The height of the inner content
    const innerHeight = inputShallow.scrollHeight;

    // Measure height of a textarea with a single row
    inputShallow.value = 'x';
    const singleRowHeight = inputShallow.scrollHeight;

    // The height of the outer content
    let outerHeight = innerHeight;
    if (minRows) {
      outerHeight = Math.max(Number(minRows) * singleRowHeight, outerHeight);
    }
    if (maxRows) {
      outerHeight = Math.min(Number(maxRows) * singleRowHeight, outerHeight);
    }
    outerHeight = Math.max(outerHeight, singleRowHeight);

    // Take the box sizing into account for applying this value as a style.
    const outerHeightStyle = outerHeight + (boxSizing === 'border-box' ? padding + border : 0);
    const overflow = Math.abs(outerHeight - innerHeight) <= 1;
    return {
      outerHeightStyle,
      overflow
    };
  }, [maxRows, minRows, props.placeholder]);
  const updateState = (prevState, newState) => {
    const {
      outerHeightStyle,
      overflow
    } = newState;
    // Need a large enough difference to update the height.
    // This prevents infinite rendering loop.
    if (renders.current < 20 && (outerHeightStyle > 0 && Math.abs((prevState.outerHeightStyle || 0) - outerHeightStyle) > 1 || prevState.overflow !== overflow)) {
      renders.current += 1;
      return {
        overflow,
        outerHeightStyle
      };
    }
    if (false) {}
    return prevState;
  };
  const syncHeight = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
    const newState = getUpdatedState();
    if (isEmpty(newState)) {
      return;
    }
    setState(prevState => {
      return updateState(prevState, newState);
    });
  }, [getUpdatedState]);
  const syncHeightWithFlushSync = () => {
    const newState = getUpdatedState();
    if (isEmpty(newState)) {
      return;
    }

    // In React 18, state updates in a ResizeObserver's callback are happening after the paint which causes flickering
    // when doing some visual updates in it. Using flushSync ensures that the dom will be painted after the states updates happen
    // Related issue - https://github.com/facebook/react/issues/24331
    react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync(() => {
      setState(prevState => {
        return updateState(prevState, newState);
      });
    });
  };
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    const handleResize = () => {
      renders.current = 0;

      // If the TextareaAutosize component is replaced by Suspense with a fallback, the last
      // ResizeObserver's handler that runs because of the change in the layout is trying to
      // access a dom node that is no longer there (as the fallback component is being shown instead).
      // See https://github.com/mui/material-ui/issues/32640
      if (inputRef.current) {
        syncHeightWithFlushSync();
      }
    };
    const handleResizeWindow = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(() => {
      renders.current = 0;

      // If the TextareaAutosize component is replaced by Suspense with a fallback, the last
      // ResizeObserver's handler that runs because of the change in the layout is trying to
      // access a dom node that is no longer there (as the fallback component is being shown instead).
      // See https://github.com/mui/material-ui/issues/32640
      if (inputRef.current) {
        syncHeightWithFlushSync();
      }
    });
    let resizeObserver;
    const input = inputRef.current;
    const containerWindow = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(input);
    containerWindow.addEventListener('resize', handleResizeWindow);
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(handleResize);
      resizeObserver.observe(input);
    }
    return () => {
      handleResizeWindow.clear();
      containerWindow.removeEventListener('resize', handleResizeWindow);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  });
  (0,_mui_utils__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(() => {
    syncHeight();
  });
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    renders.current = 0;
  }, [value]);
  const handleChange = event => {
    renders.current = 0;
    if (!isControlled) {
      syncHeight();
    }
    if (onChange) {
      onChange(event);
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("textarea", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)({
      value: value,
      onChange: handleChange,
      ref: handleRef
      // Apply the rows prop to get a "correct" first SSR paint
      ,
      rows: minRows,
      style: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)({
        height: state.outerHeightStyle,
        // Need a large enough difference to allow scrolling.
        // This prevents infinite rendering loop.
        overflow: state.overflow ? 'hidden' : undefined
      }, style)
    }, other)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("textarea", {
      "aria-hidden": true,
      className: props.className,
      readOnly: true,
      ref: shadowRef,
      tabIndex: -1,
      style: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)({}, styles.shadow, style, {
        paddingTop: 0,
        paddingBottom: 0
      })
    })]
  });
});
 false ? 0 : void 0;


/***/ }),

/***/ 91546:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: function() { return /* binding */ ariaHidden; },
/* harmony export */   g: function() { return /* binding */ ModalManager; }
/* harmony export */ });
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96278);
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88221);
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60878);

// Is a vertical scrollbar displayed?
function isOverflowing(container) {
  const doc = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(container);
  if (doc.body === container) {
    return (0,_mui_utils__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(container).innerWidth > doc.documentElement.clientWidth;
  }
  return container.scrollHeight > container.clientHeight;
}
function ariaHidden(element, show) {
  if (show) {
    element.setAttribute('aria-hidden', 'true');
  } else {
    element.removeAttribute('aria-hidden');
  }
}
function getPaddingRight(element) {
  return parseInt((0,_mui_utils__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(element).getComputedStyle(element).paddingRight, 10) || 0;
}
function isAriaHiddenForbiddenOnElement(element) {
  // The forbidden HTML tags are the ones from ARIA specification that
  // can be children of body and can't have aria-hidden attribute.
  // cf. https://www.w3.org/TR/html-aria/#docconformance
  const forbiddenTagNames = ['TEMPLATE', 'SCRIPT', 'STYLE', 'LINK', 'MAP', 'META', 'NOSCRIPT', 'PICTURE', 'COL', 'COLGROUP', 'PARAM', 'SLOT', 'SOURCE', 'TRACK'];
  const isForbiddenTagName = forbiddenTagNames.indexOf(element.tagName) !== -1;
  const isInputHidden = element.tagName === 'INPUT' && element.getAttribute('type') === 'hidden';
  return isForbiddenTagName || isInputHidden;
}
function ariaHiddenSiblings(container, mountElement, currentElement, elementsToExclude, show) {
  const blacklist = [mountElement, currentElement, ...elementsToExclude];
  [].forEach.call(container.children, element => {
    const isNotExcludedElement = blacklist.indexOf(element) === -1;
    const isNotForbiddenElement = !isAriaHiddenForbiddenOnElement(element);
    if (isNotExcludedElement && isNotForbiddenElement) {
      ariaHidden(element, show);
    }
  });
}
function findIndexOf(items, callback) {
  let idx = -1;
  items.some((item, index) => {
    if (callback(item)) {
      idx = index;
      return true;
    }
    return false;
  });
  return idx;
}
function handleContainer(containerInfo, props) {
  const restoreStyle = [];
  const container = containerInfo.container;
  if (!props.disableScrollLock) {
    if (isOverflowing(container)) {
      // Compute the size before applying overflow hidden to avoid any scroll jumps.
      const scrollbarSize = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)((0,_mui_utils__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(container));
      restoreStyle.push({
        value: container.style.paddingRight,
        property: 'padding-right',
        el: container
      });
      // Use computed style, here to get the real padding to add our scrollbar width.
      container.style.paddingRight = `${getPaddingRight(container) + scrollbarSize}px`;

      // .mui-fixed is a global helper.
      const fixedElements = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(container).querySelectorAll('.mui-fixed');
      [].forEach.call(fixedElements, element => {
        restoreStyle.push({
          value: element.style.paddingRight,
          property: 'padding-right',
          el: element
        });
        element.style.paddingRight = `${getPaddingRight(element) + scrollbarSize}px`;
      });
    }
    let scrollContainer;
    if (container.parentNode instanceof DocumentFragment) {
      scrollContainer = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(container).body;
    } else {
      // Support html overflow-y: auto for scroll stability between pages
      // https://css-tricks.com/snippets/css/force-vertical-scrollbar/
      const parent = container.parentElement;
      const containerWindow = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(container);
      scrollContainer = (parent == null ? void 0 : parent.nodeName) === 'HTML' && containerWindow.getComputedStyle(parent).overflowY === 'scroll' ? parent : container;
    }

    // Block the scroll even if no scrollbar is visible to account for mobile keyboard
    // screensize shrink.
    restoreStyle.push({
      value: scrollContainer.style.overflow,
      property: 'overflow',
      el: scrollContainer
    }, {
      value: scrollContainer.style.overflowX,
      property: 'overflow-x',
      el: scrollContainer
    }, {
      value: scrollContainer.style.overflowY,
      property: 'overflow-y',
      el: scrollContainer
    });
    scrollContainer.style.overflow = 'hidden';
  }
  const restore = () => {
    restoreStyle.forEach(({
      value,
      el,
      property
    }) => {
      if (value) {
        el.style.setProperty(property, value);
      } else {
        el.style.removeProperty(property);
      }
    });
  };
  return restore;
}
function getHiddenSiblings(container) {
  const hiddenSiblings = [];
  [].forEach.call(container.children, element => {
    if (element.getAttribute('aria-hidden') === 'true') {
      hiddenSiblings.push(element);
    }
  });
  return hiddenSiblings;
}
/**
 * @ignore - do not document.
 *
 * Proper state management for containers and the modals in those containers.
 * Simplified, but inspired by react-overlay's ModalManager class.
 * Used by the Modal to ensure proper styling of containers.
 */
class ModalManager {
  constructor() {
    this.containers = void 0;
    this.modals = void 0;
    this.modals = [];
    this.containers = [];
  }
  add(modal, container) {
    let modalIndex = this.modals.indexOf(modal);
    if (modalIndex !== -1) {
      return modalIndex;
    }
    modalIndex = this.modals.length;
    this.modals.push(modal);

    // If the modal we are adding is already in the DOM.
    if (modal.modalRef) {
      ariaHidden(modal.modalRef, false);
    }
    const hiddenSiblings = getHiddenSiblings(container);
    ariaHiddenSiblings(container, modal.mount, modal.modalRef, hiddenSiblings, true);
    const containerIndex = findIndexOf(this.containers, item => item.container === container);
    if (containerIndex !== -1) {
      this.containers[containerIndex].modals.push(modal);
      return modalIndex;
    }
    this.containers.push({
      modals: [modal],
      container,
      restore: null,
      hiddenSiblings
    });
    return modalIndex;
  }
  mount(modal, props) {
    const containerIndex = findIndexOf(this.containers, item => item.modals.indexOf(modal) !== -1);
    const containerInfo = this.containers[containerIndex];
    if (!containerInfo.restore) {
      containerInfo.restore = handleContainer(containerInfo, props);
    }
  }
  remove(modal, ariaHiddenState = true) {
    const modalIndex = this.modals.indexOf(modal);
    if (modalIndex === -1) {
      return modalIndex;
    }
    const containerIndex = findIndexOf(this.containers, item => item.modals.indexOf(modal) !== -1);
    const containerInfo = this.containers[containerIndex];
    containerInfo.modals.splice(containerInfo.modals.indexOf(modal), 1);
    this.modals.splice(modalIndex, 1);

    // If that was the last modal in a container, clean up the container.
    if (containerInfo.modals.length === 0) {
      // The modal might be closed before it had the chance to be mounted in the DOM.
      if (containerInfo.restore) {
        containerInfo.restore();
      }
      if (modal.modalRef) {
        // In case the modal wasn't in the DOM yet.
        ariaHidden(modal.modalRef, ariaHiddenState);
      }
      ariaHiddenSiblings(containerInfo.container, modal.mount, modal.modalRef, containerInfo.hiddenSiblings, false);
      this.containers.splice(containerIndex, 1);
    } else {
      // Otherwise make sure the next top modal is visible to a screen reader.
      const nextTop = containerInfo.modals[containerInfo.modals.length - 1];
      // as soon as a modal is adding its modalRef is undefined. it can't set
      // aria-hidden because the dom element doesn't exist either
      // when modal was unmounted before modalRef gets null
      if (nextTop.modalRef) {
        ariaHidden(nextTop.modalRef, false);
      }
    }
    return modalIndex;
  }
  isTopModal(modal) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === modal;
  }
}

/***/ }),

/***/ 15613:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: function() { return /* binding */ useModal; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13428);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95137);
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96278);
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78136);
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(62940);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55095);
/* harmony import */ var _ModalManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91546);
'use client';






function getContainer(container) {
  return typeof container === 'function' ? container() : container;
}
function getHasTransition(children) {
  return children ? children.props.hasOwnProperty('in') : false;
}

// A modal manager used to track and manage the state of open Modals.
// Modals don't open on the server so this won't conflict with concurrent requests.
const defaultManager = new _ModalManager__WEBPACK_IMPORTED_MODULE_1__/* .ModalManager */ .g();
/**
 *
 * Demos:
 *
 * - [Modal](https://mui.com/base-ui/react-modal/#hook)
 *
 * API:
 *
 * - [useModal API](https://mui.com/base-ui/react-modal/hooks-api/#use-modal)
 */
function useModal(parameters) {
  const {
    container,
    disableEscapeKeyDown = false,
    disableScrollLock = false,
    // @ts-ignore internal logic - Base UI supports the manager as a prop too
    manager = defaultManager,
    closeAfterTransition = false,
    onTransitionEnter,
    onTransitionExited,
    children,
    onClose,
    open,
    rootRef
  } = parameters;

  // @ts-ignore internal logic
  const modal = react__WEBPACK_IMPORTED_MODULE_0__.useRef({});
  const mountNodeRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  const modalRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  const handleRef = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(modalRef, rootRef);
  const [exited, setExited] = react__WEBPACK_IMPORTED_MODULE_0__.useState(!open);
  const hasTransition = getHasTransition(children);
  let ariaHiddenProp = true;
  if (parameters['aria-hidden'] === 'false' || parameters['aria-hidden'] === false) {
    ariaHiddenProp = false;
  }
  const getDoc = () => (0,_mui_utils__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(mountNodeRef.current);
  const getModal = () => {
    modal.current.modalRef = modalRef.current;
    modal.current.mount = mountNodeRef.current;
    return modal.current;
  };
  const handleMounted = () => {
    manager.mount(getModal(), {
      disableScrollLock
    });

    // Fix a bug on Chrome where the scroll isn't initially 0.
    if (modalRef.current) {
      modalRef.current.scrollTop = 0;
    }
  };
  const handleOpen = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(() => {
    const resolvedContainer = getContainer(container) || getDoc().body;
    manager.add(getModal(), resolvedContainer);

    // The element was already mounted.
    if (modalRef.current) {
      handleMounted();
    }
  });
  const isTopModal = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => manager.isTopModal(getModal()), [manager]);
  const handlePortalRef = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(node => {
    mountNodeRef.current = node;
    if (!node) {
      return;
    }
    if (open && isTopModal()) {
      handleMounted();
    } else if (modalRef.current) {
      (0,_ModalManager__WEBPACK_IMPORTED_MODULE_1__/* .ariaHidden */ .G)(modalRef.current, ariaHiddenProp);
    }
  });
  const handleClose = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
    manager.remove(getModal(), ariaHiddenProp);
  }, [ariaHiddenProp, manager]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    return () => {
      handleClose();
    };
  }, [handleClose]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (open) {
      handleOpen();
    } else if (!hasTransition || !closeAfterTransition) {
      handleClose();
    }
  }, [open, handleClose, hasTransition, closeAfterTransition, handleOpen]);
  const createHandleKeyDown = otherHandlers => event => {
    var _otherHandlers$onKeyD;
    (_otherHandlers$onKeyD = otherHandlers.onKeyDown) == null || _otherHandlers$onKeyD.call(otherHandlers, event);

    // The handler doesn't take event.defaultPrevented into account:
    //
    // event.preventDefault() is meant to stop default behaviors like
    // clicking a checkbox to check it, hitting a button to submit a form,
    // and hitting left arrow to move the cursor in a text input etc.
    // Only special HTML elements have these default behaviors.
    if (event.key !== 'Escape' || !isTopModal()) {
      return;
    }
    if (!disableEscapeKeyDown) {
      // Swallow the event, in case someone is listening for the escape key on the body.
      event.stopPropagation();
      if (onClose) {
        onClose(event, 'escapeKeyDown');
      }
    }
  };
  const createHandleBackdropClick = otherHandlers => event => {
    var _otherHandlers$onClic;
    (_otherHandlers$onClic = otherHandlers.onClick) == null || _otherHandlers$onClic.call(otherHandlers, event);
    if (event.target !== event.currentTarget) {
      return;
    }
    if (onClose) {
      onClose(event, 'backdropClick');
    }
  };
  const getRootProps = (otherHandlers = {}) => {
    const propsEventHandlers = (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .extractEventHandlers */ ._)(parameters);

    // The custom event handlers shouldn't be spread on the root element
    delete propsEventHandlers.onTransitionEnter;
    delete propsEventHandlers.onTransitionExited;
    const externalEventHandlers = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)({}, propsEventHandlers, otherHandlers);
    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)({
      role: 'presentation'
    }, externalEventHandlers, {
      onKeyDown: createHandleKeyDown(externalEventHandlers),
      ref: handleRef
    });
  };
  const getBackdropProps = (otherHandlers = {}) => {
    const externalEventHandlers = otherHandlers;
    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)({
      'aria-hidden': true
    }, externalEventHandlers, {
      onClick: createHandleBackdropClick(externalEventHandlers),
      open
    });
  };
  const getTransitionProps = () => {
    const handleEnter = () => {
      setExited(false);
      if (onTransitionEnter) {
        onTransitionEnter();
      }
    };
    const handleExited = () => {
      setExited(true);
      if (onTransitionExited) {
        onTransitionExited();
      }
      if (closeAfterTransition) {
        handleClose();
      }
    };
    return {
      onEnter: (0,_mui_utils__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(handleEnter, children == null ? void 0 : children.props.onEnter),
      onExited: (0,_mui_utils__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(handleExited, children == null ? void 0 : children.props.onExited)
    };
  };
  return {
    getRootProps,
    getBackdropProps,
    getTransitionProps,
    rootRef: handleRef,
    portalRef: handlePortalRef,
    isTopModal,
    exited,
    hasTransition
  };
}

/***/ }),

/***/ 20202:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: function() { return /* binding */ appendOwnerState; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13428);
/* harmony import */ var _isHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43655);



/**
 * Type of the ownerState based on the type of an element it applies to.
 * This resolves to the provided OwnerState for React components and `undefined` for host components.
 * Falls back to `OwnerState | undefined` when the exact type can't be determined in development time.
 */

/**
 * Appends the ownerState object to the props, merging with the existing one if necessary.
 *
 * @param elementType Type of the element that owns the `existingProps`. If the element is a DOM node or undefined, `ownerState` is not applied.
 * @param otherProps Props of the element.
 * @param ownerState
 */
function appendOwnerState(elementType, otherProps, ownerState) {
  if (elementType === undefined || (0,_isHostComponent__WEBPACK_IMPORTED_MODULE_0__/* .isHostComponent */ .X)(elementType)) {
    return otherProps;
  }
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({}, otherProps, {
    ownerState: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({}, otherProps.ownerState, ownerState)
  });
}

/***/ }),

/***/ 55095:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: function() { return /* binding */ extractEventHandlers; }
/* harmony export */ });
/**
 * Extracts event handlers from a given object.
 * A prop is considered an event handler if it is a function and its name starts with `on`.
 *
 * @param object An object to extract event handlers from.
 * @param excludeKeys An array of keys to exclude from the returned object.
 */
function extractEventHandlers(object, excludeKeys = []) {
  if (object === undefined) {
    return {};
  }
  const result = {};
  Object.keys(object).filter(prop => prop.match(/^on[A-Z]/) && typeof object[prop] === 'function' && !excludeKeys.includes(prop)).forEach(prop => {
    result[prop] = object[prop];
  });
  return result;
}

/***/ }),

/***/ 43655:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: function() { return /* binding */ isHostComponent; }
/* harmony export */ });
/**
 * Determines if a given element is a DOM element name (i.e. not a React component).
 */
function isHostComponent(element) {
  return typeof element === 'string';
}

/***/ }),

/***/ 76744:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  L: function() { return /* binding */ mergeSlotProps; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(13428);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(57042);
// EXTERNAL MODULE: ./node_modules/@mui/base/utils/extractEventHandlers.js
var extractEventHandlers = __webpack_require__(55095);
;// CONCATENATED MODULE: ./node_modules/@mui/base/utils/omitEventHandlers.js
/**
 * Removes event handlers from the given object.
 * A field is considered an event handler if it is a function with a name beginning with `on`.
 *
 * @param object Object to remove event handlers from.
 * @returns Object with event handlers removed.
 */
function omitEventHandlers(object) {
  if (object === undefined) {
    return {};
  }
  const result = {};
  Object.keys(object).filter(prop => !(prop.match(/^on[A-Z]/) && typeof object[prop] === 'function')).forEach(prop => {
    result[prop] = object[prop];
  });
  return result;
}
;// CONCATENATED MODULE: ./node_modules/@mui/base/utils/mergeSlotProps.js




/**
 * Merges the slot component internal props (usually coming from a hook)
 * with the externally provided ones.
 *
 * The merge order is (the latter overrides the former):
 * 1. The internal props (specified as a getter function to work with get*Props hook result)
 * 2. Additional props (specified internally on a Base UI component)
 * 3. External props specified on the owner component. These should only be used on a root slot.
 * 4. External props specified in the `slotProps.*` prop.
 * 5. The `className` prop - combined from all the above.
 * @param parameters
 * @returns
 */
function mergeSlotProps(parameters) {
  const {
    getSlotProps,
    additionalProps,
    externalSlotProps,
    externalForwardedProps,
    className
  } = parameters;
  if (!getSlotProps) {
    // The simpler case - getSlotProps is not defined, so no internal event handlers are defined,
    // so we can simply merge all the props without having to worry about extracting event handlers.
    const joinedClasses = (0,clsx/* default */.Z)(externalForwardedProps == null ? void 0 : externalForwardedProps.className, externalSlotProps == null ? void 0 : externalSlotProps.className, className, additionalProps == null ? void 0 : additionalProps.className);
    const mergedStyle = (0,esm_extends/* default */.Z)({}, additionalProps == null ? void 0 : additionalProps.style, externalForwardedProps == null ? void 0 : externalForwardedProps.style, externalSlotProps == null ? void 0 : externalSlotProps.style);
    const props = (0,esm_extends/* default */.Z)({}, additionalProps, externalForwardedProps, externalSlotProps);
    if (joinedClasses.length > 0) {
      props.className = joinedClasses;
    }
    if (Object.keys(mergedStyle).length > 0) {
      props.style = mergedStyle;
    }
    return {
      props,
      internalRef: undefined
    };
  }

  // In this case, getSlotProps is responsible for calling the external event handlers.
  // We don't need to include them in the merged props because of this.

  const eventHandlers = (0,extractEventHandlers/* extractEventHandlers */._)((0,esm_extends/* default */.Z)({}, externalForwardedProps, externalSlotProps));
  const componentsPropsWithoutEventHandlers = omitEventHandlers(externalSlotProps);
  const otherPropsWithoutEventHandlers = omitEventHandlers(externalForwardedProps);
  const internalSlotProps = getSlotProps(eventHandlers);

  // The order of classes is important here.
  // Emotion (that we use in libraries consuming Base UI) depends on this order
  // to properly override style. It requires the most important classes to be last
  // (see https://github.com/mui/material-ui/pull/33205) for the related discussion.
  const joinedClasses = (0,clsx/* default */.Z)(internalSlotProps == null ? void 0 : internalSlotProps.className, additionalProps == null ? void 0 : additionalProps.className, className, externalForwardedProps == null ? void 0 : externalForwardedProps.className, externalSlotProps == null ? void 0 : externalSlotProps.className);
  const mergedStyle = (0,esm_extends/* default */.Z)({}, internalSlotProps == null ? void 0 : internalSlotProps.style, additionalProps == null ? void 0 : additionalProps.style, externalForwardedProps == null ? void 0 : externalForwardedProps.style, externalSlotProps == null ? void 0 : externalSlotProps.style);
  const props = (0,esm_extends/* default */.Z)({}, internalSlotProps, additionalProps, otherPropsWithoutEventHandlers, componentsPropsWithoutEventHandlers);
  if (joinedClasses.length > 0) {
    props.className = joinedClasses;
  }
  if (Object.keys(mergedStyle).length > 0) {
    props.style = mergedStyle;
  }
  return {
    props,
    internalRef: internalSlotProps.ref
  };
}

/***/ }),

/***/ 9700:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: function() { return /* binding */ resolveComponentProps; }
/* harmony export */ });
/**
 * If `componentProps` is a function, calls it with the provided `ownerState`.
 * Otherwise, just returns `componentProps`.
 */
function resolveComponentProps(componentProps, ownerState, slotState) {
  if (typeof componentProps === 'function') {
    return componentProps(ownerState, slotState);
  }
  return componentProps;
}

/***/ }),

/***/ 11156:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: function() { return /* binding */ useSlotProps; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13428);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20791);
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95137);
/* harmony import */ var _appendOwnerState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20202);
/* harmony import */ var _mergeSlotProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76744);
/* harmony import */ var _resolveComponentProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9700);
'use client';



const _excluded = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];




/**
 * @ignore - do not document.
 * Builds the props to be passed into the slot of an unstyled component.
 * It merges the internal props of the component with the ones supplied by the user, allowing to customize the behavior.
 * If the slot component is not a host component, it also merges in the `ownerState`.
 *
 * @param parameters.getSlotProps - A function that returns the props to be passed to the slot component.
 */
function useSlotProps(parameters) {
  var _parameters$additiona;
  const {
      elementType,
      externalSlotProps,
      ownerState,
      skipResolvingSlotProps = false
    } = parameters,
    rest = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(parameters, _excluded);
  const resolvedComponentsProps = skipResolvingSlotProps ? {} : (0,_resolveComponentProps__WEBPACK_IMPORTED_MODULE_1__/* .resolveComponentProps */ .x)(externalSlotProps, ownerState);
  const {
    props: mergedProps,
    internalRef
  } = (0,_mergeSlotProps__WEBPACK_IMPORTED_MODULE_2__/* .mergeSlotProps */ .L)((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({}, rest, {
    externalSlotProps: resolvedComponentsProps
  }));
  const ref = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(internalRef, resolvedComponentsProps == null ? void 0 : resolvedComponentsProps.ref, (_parameters$additiona = parameters.additionalProps) == null ? void 0 : _parameters$additiona.ref);
  const props = (0,_appendOwnerState__WEBPACK_IMPORTED_MODULE_5__/* .appendOwnerState */ .$)(elementType, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({}, mergedProps, {
    ref
  }), ownerState);
  return props;
}

/***/ }),

/***/ 45536:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: function() { return /* binding */ GlobalStyles; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99538);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57437);
'use client';





function isEmpty(obj) {
  return obj === undefined || obj === null || Object.keys(obj).length === 0;
}
function GlobalStyles(props) {
  const {
    styles,
    defaultTheme = {}
  } = props;
  const globalStyles = typeof styles === 'function' ? themeInput => styles(isEmpty(themeInput) ? defaultTheme : themeInput) : styles;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_emotion_react__WEBPACK_IMPORTED_MODULE_2__/* .Global */ .xB, {
    styles: globalStyles
  });
}
 false ? 0 : void 0;

/***/ }),

/***/ 65474:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);
/* harmony import */ var _mui_styled_engine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45536);
/* harmony import */ var _useTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95270);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57437);
'use client';






function GlobalStyles({
  styles,
  themeId,
  defaultTheme = {}
}) {
  const upperTheme = (0,_useTheme__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(defaultTheme);
  const globalStyles = typeof styles === 'function' ? styles(themeId ? upperTheme[themeId] || upperTheme : upperTheme) : styles;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_styled_engine__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    styles: globalStyles
  });
}
 false ? 0 : void 0;
/* harmony default export */ __webpack_exports__.Z = (GlobalStyles);

/***/ }),

/***/ 60878:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: function() { return /* binding */ getScrollbarSize; }
/* harmony export */ });
// A change of the browser zoom change the scrollbar size.
// Credit https://github.com/twbs/bootstrap/blob/488fd8afc535ca3a6ad4dc581f5e89217b6a36ac/js/src/util/scrollbar.js#L14-L18
function getScrollbarSize(doc) {
  // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
  const documentWidth = doc.documentElement.clientWidth;
  return Math.abs(window.innerWidth - documentWidth);
}

/***/ }),

/***/ 81870:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/* harmony default export */ __webpack_exports__.Z = ({
  disabled: false
});

/***/ }),

/***/ 37295:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: function() { return /* binding */ forceReflow; }
/* harmony export */ });
var forceReflow = function forceReflow(node) {
  return node.scrollTop;
};

/***/ })

}]);