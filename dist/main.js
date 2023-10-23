/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const config = {
  API_KEY: "b99363c3a3f449b080a124124230308"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
}

body {
  background: lightblue;
}


.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px;
/*  display: grid;
  grid-template-columns: fit-content;
  grid-template-rows: 1fr 1fr;
  margin-right: 6px;
  justify-items: end;
  
  display: grid;
  grid-template-areas: "label input button"
  "error error error";
    justify-items: center;*/
}

.top-left div {
  font-weight: bold;
}

.input-box {
  width: 120px;
  height: 24px;
  margin: 4px;
}

.input-btn {
  width: 30px;
  height: 24px;
  margin: 4px;
}

.error {
  background-color: palevioletred;
  grid-area: "error";
  display: none;
}

.err-active {
  display: block !important;
}

.current-view {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 12px 6px;
}

.temperature {
  font-size: 2rem;
}

.city-name {
  font-size: 1.2rem;
  font-weight: bold;
}

.time {}

.days-view {
  display: flex;
}

.day-div {
  background-color: rgba(255, 255, 255, 0.2);
  width: 200px;
  height: 400px;
  border: 1px black solid;
  margin: 4px;
  padding: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.day-name {
  font-weight: bold;
  
}

.chance-rain span {
  font-size: 0.8rem;

}

.chance-rain img {
  position: relative;
  top: 4px;
}

.sunrise span,
.sunset span {
  font-size: 0.8rem;
}
.sunrise img,
.sunset img {
  position: relative;
  top: 5px;
}

.max-temp img {
  position: relative;
  top: 2px;
}

.min-temp img {
  position: relative;
  top: 3px;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,qBAAqB;AACvB;;;AAGA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,YAAY;AACd;;;;;;;;;2BAS2B;AAC3B;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,+BAA+B;EAC/B,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA,OAAO;;AAEP;EACE,aAAa;AACf;;AAEA;EACE,0CAA0C;EAC1C,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,WAAW;EACX,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;;AAEnB;;AAEA;EACE,iBAAiB;;AAEnB;;AAEA;EACE,kBAAkB;EAClB,QAAQ;AACV;;AAEA;;EAEE,iBAAiB;AACnB;AACA;;EAEE,kBAAkB;EAClB,QAAQ;AACV;;AAEA;EACE,kBAAkB;EAClB,QAAQ;AACV;;AAEA;EACE,kBAAkB;EAClB,QAAQ;AACV","sourcesContent":["* {\r\n  box-sizing: border-box;\r\n  margin: 0px;\r\n  padding: 0px;\r\n}\r\n\r\nbody {\r\n  background: lightblue;\r\n}\r\n\r\n\r\n.top {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 4px;\r\n/*  display: grid;\r\n  grid-template-columns: fit-content;\r\n  grid-template-rows: 1fr 1fr;\r\n  margin-right: 6px;\r\n  justify-items: end;\r\n  \r\n  display: grid;\r\n  grid-template-areas: \"label input button\"\r\n  \"error error error\";\r\n    justify-items: center;*/\r\n}\r\n\r\n.top-left div {\r\n  font-weight: bold;\r\n}\r\n\r\n.input-box {\r\n  width: 120px;\r\n  height: 24px;\r\n  margin: 4px;\r\n}\r\n\r\n.input-btn {\r\n  width: 30px;\r\n  height: 24px;\r\n  margin: 4px;\r\n}\r\n\r\n.error {\r\n  background-color: palevioletred;\r\n  grid-area: \"error\";\r\n  display: none;\r\n}\r\n\r\n.err-active {\r\n  display: block !important;\r\n}\r\n\r\n.current-view {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin: 12px 6px;\r\n}\r\n\r\n.temperature {\r\n  font-size: 2rem;\r\n}\r\n\r\n.city-name {\r\n  font-size: 1.2rem;\r\n  font-weight: bold;\r\n}\r\n\r\n.time {}\r\n\r\n.days-view {\r\n  display: flex;\r\n}\r\n\r\n.day-div {\r\n  background-color: rgba(255, 255, 255, 0.2);\r\n  width: 200px;\r\n  height: 400px;\r\n  border: 1px black solid;\r\n  margin: 4px;\r\n  padding: 4px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.day-name {\r\n  font-weight: bold;\r\n  \r\n}\r\n\r\n.chance-rain span {\r\n  font-size: 0.8rem;\r\n\r\n}\r\n\r\n.chance-rain img {\r\n  position: relative;\r\n  top: 4px;\r\n}\r\n\r\n.sunrise span,\r\n.sunset span {\r\n  font-size: 0.8rem;\r\n}\r\n.sunrise img,\r\n.sunset img {\r\n  position: relative;\r\n  top: 5px;\r\n}\r\n\r\n.max-temp img {\r\n  position: relative;\r\n  top: 2px;\r\n}\r\n\r\n.min-temp img {\r\n  position: relative;\r\n  top: 3px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/north_FILL0_wght400_GRAD0_opsz24.svg":
/*!**************************************************!*\
  !*** ./src/north_FILL0_wght400_GRAD0_opsz24.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "550078bed341b5317174.svg";

/***/ }),

/***/ "./src/south_FILL0_wght400_GRAD0_opsz24.svg":
/*!**************************************************!*\
  !*** ./src/south_FILL0_wght400_GRAD0_opsz24.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6ebd20b21d153bfe29ec.svg";

/***/ }),

/***/ "./src/water_drop_FILL0_wght400_GRAD0_opsz24.svg":
/*!*******************************************************!*\
  !*** ./src/water_drop_FILL0_wght400_GRAD0_opsz24.svg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6e80795204194c8369ef.svg";

/***/ }),

/***/ "./src/wb_twilight_FILL0_wght400_GRAD0_opsz24.svg":
/*!********************************************************!*\
  !*** ./src/wb_twilight_FILL0_wght400_GRAD0_opsz24.svg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b7c5db1898f69a2c54e9.svg";

/***/ }),

/***/ "./src/wb_twilight_FILL1_wght400_GRAD0_opsz24.svg":
/*!********************************************************!*\
  !*** ./src/wb_twilight_FILL1_wght400_GRAD0_opsz24.svg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7165b01b923b34147f28.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config.js */ "./config.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _water_drop_FILL0_wght400_GRAD0_opsz24_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./water_drop_FILL0_wght400_GRAD0_opsz24.svg */ "./src/water_drop_FILL0_wght400_GRAD0_opsz24.svg");
/* harmony import */ var _wb_twilight_FILL0_wght400_GRAD0_opsz24_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wb_twilight_FILL0_wght400_GRAD0_opsz24.svg */ "./src/wb_twilight_FILL0_wght400_GRAD0_opsz24.svg");
/* harmony import */ var _wb_twilight_FILL1_wght400_GRAD0_opsz24_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wb_twilight_FILL1_wght400_GRAD0_opsz24.svg */ "./src/wb_twilight_FILL1_wght400_GRAD0_opsz24.svg");
/* harmony import */ var _south_FILL0_wght400_GRAD0_opsz24_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./south_FILL0_wght400_GRAD0_opsz24.svg */ "./src/south_FILL0_wght400_GRAD0_opsz24.svg");
/* harmony import */ var _north_FILL0_wght400_GRAD0_opsz24_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./north_FILL0_wght400_GRAD0_opsz24.svg */ "./src/north_FILL0_wght400_GRAD0_opsz24.svg");

// pc import variables, comment them out on mobile






// phone import variables, comment them out on pc
// const drop = "src/water_drop_FILL0_wght400_GRAD0_opsz24.svg";
// const sun0 = "/src/wb_twilight_FILL0_wght400_GRAD0_opsz24.svg";
// const sun1 = "/src/wb_twilight_FILL1_wght400_GRAD0_opsz24.svg";
// const arrow0 = "/src/south_FILL0_wght400_GRAD0_opsz24.svg";
// const arrow1 = "/src/north_FILL0_wght400_GRAD0_opsz24.svg";

const apiKey = _config_js__WEBPACK_IMPORTED_MODULE_0__["default"].API_KEY;
let newCity = "";
let currentCity = "Warsaw";
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let currentWeather = {
  city: "",
  time: "",
  country: "",
  tempC: "",
  tempF: "",
  condition: "",
  condition_icon: ""
};
let futureWeather = [{
  date: "",
  sunrise: "",
  sunset: "",
  avgtemp_c: "",
  avgtemp_f: "",
  condition_text: "",
  condition_icon: "",
  daily_chance_of_rain: "",
  maxtemp_c: "",
  maxtemp_f: "",
  mintemp_c: "",
  mintemp_f: ""
}, {
  date: "",
  sunrise: "",
  sunset: "",
  avgtemp_c: "",
  avgtemp_f: "",
  condition_text: "",
  condition_icon: "",
  daily_chance_of_rain: "",
  maxtemp_c: "",
  maxtemp_f: "",
  mintemp_c: "",
  mintemp_f: ""
}, {
  date: "",
  sunrise: "",
  sunset: "",
  avgtemp_c: "",
  avgtemp_f: "",
  condition_text: "",
  condition_icon: "",
  daily_chance_of_rain: "",
  maxtemp_c: "",
  maxtemp_f: "",
  mintemp_c: "",
  mintemp_f: ""
}];
async function getWeather(city) {
  const errorMsg = document.querySelector(".error");
  try {
    const forecast = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=14`);
    const data = await forecast.json();
    if (!forecast.ok) {
      errorMsg.classList.add("err-active");
      if (data.error.code === 1006) {
        errorMsg.textContent = "City not found";
        throw new Error(`Error ${forecast.status} ${forecast.statusText}. ${data.error.message}`);
      } else if (data.error.code === 1003) {
        errorMsg.textContent = "You must enter a city name";
        throw new Error(`Error ${forecast.status} ${forecast.statusText}. ${data.error.message}`);
      } else if (data.error.code === 9999) {
        errorMsg.textContent = "Internal error, please try again";
        throw new Error(`Error ${forecast.status} ${forecast.statusText}. ${data.error.message}`);
      } else {
        errorMsg.textContent = "Error, please try again later";
        throw new Error(`Error ${forecast.status} ${forecast.statusText}`);
      }
    }
    // console.log(data);
    currentWeather = {
      city: data.location.name,
      time: data.location.localtime,
      country: data.location.country,
      tempC: data.current.temp_c,
      tempF: data.current.temp_f,
      condition: data.current.condition.text,
      condition_icon: data.current.condition.icon
    };
    for (let i = 0; i < 3; i++) {
      futureWeather[i].date = data.forecast.forecastday[i].date;
      futureWeather[i].sunrise = data.forecast.forecastday[i].astro.sunrise;
      futureWeather[i].sunset = data.forecast.forecastday[i].astro.sunset;
      futureWeather[i].avgtemp_c = data.forecast.forecastday[i].day.avgtemp_c;
      futureWeather[i].avgtemp_f = data.forecast.forecastday[i].day.avgtemp_f;
      futureWeather[i].condition_text = data.forecast.forecastday[i].day.condition.text;
      futureWeather[i].condition_icon = data.forecast.forecastday[i].day.condition.icon;
      futureWeather[i].daily_chance_of_rain = data.forecast.forecastday[i].day.daily_chance_of_rain;
      futureWeather[i].maxtemp_c = data.forecast.forecastday[i].day.maxtemp_c;
      futureWeather[i].maxtemp_f = data.forecast.forecastday[i].day.maxtemp_f;
      futureWeather[i].mintemp_c = data.forecast.forecastday[i].day.mintemp_c;
      futureWeather[i].mintemp_f = data.forecast.forecastday[i].day.mintemp_f;
    }
    errorMsg.classList.remove("err-active");

    // console.log(futureWeather[0]);

    fillDom();
    // errorMsg.classList.add("err-active");
    // throw new Error(forecast.status + " " + forecast.statusText + data.error.code);
  } catch (err) {
    // errorMsg.classList.add("err-active");
    // errorMsg.textContent = err.message;
    console.log(err.message);
    // errorMsg.classList.add("err-active");
    // console.log(data.error.code + " " + data.error.status);
  }
  // console.log(data);
}

function createDom() {
  const body = document.querySelector("body");

  // top navigation
  const top = document.createElement("div");
  const topLeft = document.createElement("div");
  const siteName = document.createElement("div");
  const topRight = document.createElement("div");
  const inputLabel = document.createElement("label");
  const inputBox = document.createElement("input");
  const inputBtn = document.createElement("button");
  const error = document.createElement("div");

  // today's forecast elements
  const currentView = document.createElement("div");
  const currentLeft = document.createElement("div");
  const currentRight = document.createElement("div");
  const currCondition = document.createElement("div");
  const currConIcon = new Image();
  const dayTime = document.createElement("div");
  const today = document.createElement("div");
  const localTime = document.createElement("div");
  const cityName = document.createElement("div");
  const temp = document.createElement("div");
  top.classList.add("top");
  topLeft.classList.add("top-left");
  topRight.classList.add("top-right");
  inputBox.classList.add("input-box");
  inputBtn.classList.add("input-btn");
  siteName.textContent = "Weather App";
  inputBox.setAttribute("id", "input");
  inputBox.setAttribute("placeholder", "Enter city name");
  inputBtn.setAttribute("for", "input");
  inputLabel.setAttribute("for", "input");
  inputLabel.textContent = "Search:";
  inputBtn.textContent = "OK";
  inputBtn.addEventListener("click", () => {
    newCity = inputBox.value;
    console.log(newCity);
    getWeather(newCity);
    inputBox.value = "";
  });
  error.classList.add("error");
  error.textContent = "Error";
  currentView.classList.add("current-view");
  currConIcon.classList.add("curr-con-icon");
  today.classList.add("today");
  localTime.classList.add("local-time");
  cityName.classList.add("city-name");
  temp.classList.add("temperature");

  // 3-day forecast elements
  const daysView = document.createElement("div");
  for (let i = 0; i < 3; i++) {
    const dayDiv = document.createElement("div");
    const dayName = document.createElement("div");
    const conditionDiv = document.createElement("div");
    const conditionIcon = new Image();
    const maxT = document.createElement("div");
    const maxTIcon = new Image();
    maxTIcon.src = _north_FILL0_wght400_GRAD0_opsz24_svg__WEBPACK_IMPORTED_MODULE_6__;
    const maxTText = document.createElement("span");
    const minT = document.createElement("div");
    const minTIcon = new Image();
    minTIcon.src = _south_FILL0_wght400_GRAD0_opsz24_svg__WEBPACK_IMPORTED_MODULE_5__;
    const minTText = document.createElement("span");
    const chanceRain = document.createElement("div");
    const chanceRainText = document.createElement("span");
    const chanceRainIcon = new Image();
    chanceRainIcon.src = _water_drop_FILL0_wght400_GRAD0_opsz24_svg__WEBPACK_IMPORTED_MODULE_2__;
    const sunrise = document.createElement("div");
    const sunriseIcon = new Image();
    sunriseIcon.src = _wb_twilight_FILL0_wght400_GRAD0_opsz24_svg__WEBPACK_IMPORTED_MODULE_3__;
    const sunriseText = document.createElement("span");
    const sunset = document.createElement("div");
    const sunsetIcon = new Image();
    sunsetIcon.src = _wb_twilight_FILL1_wght400_GRAD0_opsz24_svg__WEBPACK_IMPORTED_MODULE_4__;
    const sunsetText = document.createElement("span");
    daysView.classList.add("days-view");
    dayDiv.setAttribute("id", `day${i}`);
    dayDiv.classList.add("day-div");
    dayName.classList.add("day-name");
    conditionDiv.classList.add("condition-div");
    conditionIcon.classList.add("condition-icon");
    maxT.classList.add("max-temp");
    minT.classList.add("min-temp");
    chanceRain.classList.add("chance-rain");
    sunrise.classList.add("sunrise");
    sunset.classList.add("sunset");
    dayDiv.appendChild(dayName);
    conditionDiv.appendChild(conditionIcon);
    dayDiv.appendChild(conditionDiv);
    maxT.appendChild(maxTIcon);
    maxT.appendChild(maxTText);
    dayDiv.appendChild(maxT);
    minT.appendChild(minTIcon);
    minT.appendChild(minTText);
    dayDiv.appendChild(minT);
    chanceRain.appendChild(chanceRainIcon);
    chanceRain.appendChild(chanceRainText);
    dayDiv.appendChild(chanceRain);
    sunrise.appendChild(sunriseIcon);
    sunrise.appendChild(sunriseText);
    dayDiv.appendChild(sunrise);
    sunset.appendChild(sunsetIcon);
    sunset.appendChild(sunsetText);
    dayDiv.appendChild(sunset);
    daysView.appendChild(dayDiv);
  }
  topLeft.appendChild(siteName);
  topRight.appendChild(inputLabel);
  topRight.appendChild(inputBox);
  topRight.appendChild(inputBtn);
  topRight.appendChild(error);
  top.appendChild(topLeft);
  top.appendChild(topRight);
  currentLeft.appendChild(cityName);
  currentLeft.appendChild(today);
  currentLeft.appendChild(localTime);
  currCondition.appendChild(currConIcon);
  currentRight.appendChild(temp);
  currentRight.appendChild(currCondition);
  currentView.appendChild(currentLeft);
  currentView.appendChild(currentRight);
  body.appendChild(top);
  body.appendChild(currentView);
  body.appendChild(daysView);
}
function fillDom() {
  const cityName = document.querySelector(".city-name");
  const temp = document.querySelector(".temperature");
  const currConIcon = document.querySelector(".curr-con-icon");
  const today = document.querySelector(".today");
  const localTime = document.querySelector(".local-time");
  const todayWeek = new Date(`${currentWeather.time}`);
  // month - from 0 to 11, so need to add +1
  today.textContent = `Today is ${weekdays[todayWeek.getDay()]}, ${todayWeek.getDate()}.${todayWeek.getMonth() + 1}.${todayWeek.getFullYear()}. `;
  localTime.textContent = `Local time: ${todayWeek.getHours()}:${todayWeek.getMinutes()}.`;
  currConIcon.src = `https:${currentWeather.condition_icon}`;
  cityName.textContent = currentWeather.city;
  temp.textContent = `${currentWeather.tempC} °C`;

  // weather forecast for 3 days - fill with fetched data
  for (let i = 0; i < 3; i++) {
    const dayName = document.querySelector(`#day${i} .day-name`);
    const maxT = document.querySelector(`#day${i} .max-temp span`);
    const minT = document.querySelector(`#day${i} .min-temp span`);
    const conditionIcon = document.querySelector(`#day${i} .condition-icon`);
    const chanceRainText = document.querySelector(`#day${i} .chance-rain span`);
    const sunriseText = document.querySelector(`#day${i} .sunrise span`);
    const sunsetText = document.querySelector(`#day${i} .sunset span`);
    if (i === 0) {
      dayName.textContent = "Today";
    } else {
      const dayNum = new Date(`${futureWeather[i].date}`).getDay();
      dayName.textContent = weekdays[dayNum];
    }
    conditionIcon.src = `https:${futureWeather[i].condition_icon}`;
    maxT.textContent = `${futureWeather[i].maxtemp_c} °C`;
    minT.textContent = `${futureWeather[i].mintemp_c} °C`;
    chanceRainText.textContent = `${futureWeather[i].daily_chance_of_rain}%`;
    sunriseText.textContent = futureWeather[i].sunrise;
    sunsetText.textContent = futureWeather[i].sunset;
  }
}
createDom();
getWeather(currentCity);

/*
Future weather - 3 days
3 columns, each of them having
day
temp
temp at night?
condition
img of condition
rain chance?
*/

/* 
input city name
input field and ok button
once user clicks ok/presses enter, change the following:
newCity = entered value
fetch from api - current weather and future weather
in case of error: show a message to try again. different error when the city doesnt exist, different in case of a network error
in case it works:
currentCity = newCity
fill the dom with fetched values

*/

/*
l
Search:
add event listener for enter in input box
error: City not found.
Error, please try again.

problem with hours, minutes and months - it shows 1 number instead of 01
different errors for different codes
*/
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9ybS12YWxpZGF0aW9uLy4vY29uZmlnLmpzIiwid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vZm9ybS12YWxpZGF0aW9uLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9mb3JtLXZhbGlkYXRpb24vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9mb3JtLXZhbGlkYXRpb24vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vZm9ybS12YWxpZGF0aW9uLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZm9ybS12YWxpZGF0aW9uLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9mb3JtLXZhbGlkYXRpb24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9mb3JtLXZhbGlkYXRpb24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9mb3JtLXZhbGlkYXRpb24vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZm9ybS12YWxpZGF0aW9uL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZm9ybS12YWxpZGF0aW9uL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vZm9ybS12YWxpZGF0aW9uL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZm9ybS12YWxpZGF0aW9uL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZm9ybS12YWxpZGF0aW9uL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZm9ybS12YWxpZGF0aW9uLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbmZpZyA9IHtcclxuICBBUElfS0VZOiBcImI5OTM2M2MzYTNmNDQ5YjA4MGExMjQxMjQyMzAzMDhcIixcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbmZpZztcclxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XHJcbn1cclxuXHJcblxyXG4udG9wIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDRweDtcclxuLyogIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBmaXQtY29udGVudDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XHJcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbiAganVzdGlmeS1pdGVtczogZW5kO1xyXG4gIFxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJsYWJlbCBpbnB1dCBidXR0b25cIlxyXG4gIFwiZXJyb3IgZXJyb3IgZXJyb3JcIjtcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjsqL1xyXG59XHJcblxyXG4udG9wLWxlZnQgZGl2IHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmlucHV0LWJveCB7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIGhlaWdodDogMjRweDtcclxuICBtYXJnaW46IDRweDtcclxufVxyXG5cclxuLmlucHV0LWJ0biB7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG4gIG1hcmdpbjogNHB4O1xyXG59XHJcblxyXG4uZXJyb3Ige1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHBhbGV2aW9sZXRyZWQ7XHJcbiAgZ3JpZC1hcmVhOiBcImVycm9yXCI7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmVyci1hY3RpdmUge1xyXG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jdXJyZW50LXZpZXcge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAxMnB4IDZweDtcclxufVxyXG5cclxuLnRlbXBlcmF0dXJlIHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbn1cclxuXHJcbi5jaXR5LW5hbWUge1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4udGltZSB7fVxyXG5cclxuLmRheXMtdmlldyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmRheS1kaXYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICBib3JkZXI6IDFweCBibGFjayBzb2xpZDtcclxuICBtYXJnaW46IDRweDtcclxuICBwYWRkaW5nOiA0cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5kYXktbmFtZSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgXHJcbn1cclxuXHJcbi5jaGFuY2UtcmFpbiBzcGFuIHtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuXHJcbn1cclxuXHJcbi5jaGFuY2UtcmFpbiBpbWcge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDRweDtcclxufVxyXG5cclxuLnN1bnJpc2Ugc3BhbixcclxuLnN1bnNldCBzcGFuIHtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxufVxyXG4uc3VucmlzZSBpbWcsXHJcbi5zdW5zZXQgaW1nIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5tYXgtdGVtcCBpbWcge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDJweDtcclxufVxyXG5cclxuLm1pbi10ZW1wIGltZyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogM3B4O1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7OztBQUdBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOzs7Ozs7Ozs7MkJBUzJCO0FBQzNCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUEsT0FBTzs7QUFFUDtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDBDQUEwQztFQUMxQyxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCOztBQUVuQjs7QUFFQTtFQUNFLGlCQUFpQjs7QUFFbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtBQUNWOztBQUVBOztFQUVFLGlCQUFpQjtBQUNuQjtBQUNBOztFQUVFLGtCQUFrQjtFQUNsQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtBQUNWOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7QUFDVlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBtYXJnaW46IDBweDtcXHJcXG4gIHBhZGRpbmc6IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XFxyXFxufVxcclxcblxcclxcblxcclxcbi50b3Age1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiA0cHg7XFxyXFxuLyogIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGZpdC1jb250ZW50O1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XFxyXFxuICBqdXN0aWZ5LWl0ZW1zOiBlbmQ7XFxyXFxuICBcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwibGFiZWwgaW5wdXQgYnV0dG9uXFxcIlxcclxcbiAgXFxcImVycm9yIGVycm9yIGVycm9yXFxcIjtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyOyovXFxyXFxufVxcclxcblxcclxcbi50b3AtbGVmdCBkaXYge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1ib3gge1xcclxcbiAgd2lkdGg6IDEyMHB4O1xcclxcbiAgaGVpZ2h0OiAyNHB4O1xcclxcbiAgbWFyZ2luOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1idG4ge1xcclxcbiAgd2lkdGg6IDMwcHg7XFxyXFxuICBoZWlnaHQ6IDI0cHg7XFxyXFxuICBtYXJnaW46IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmVycm9yIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHBhbGV2aW9sZXRyZWQ7XFxyXFxuICBncmlkLWFyZWE6IFxcXCJlcnJvclxcXCI7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZXJyLWFjdGl2ZSB7XFxyXFxuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4uY3VycmVudC12aWV3IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAxMnB4IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRlbXBlcmF0dXJlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNpdHktbmFtZSB7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4udGltZSB7fVxcclxcblxcclxcbi5kYXlzLXZpZXcge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLmRheS1kaXYge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcclxcbiAgd2lkdGg6IDIwMHB4O1xcclxcbiAgaGVpZ2h0OiA0MDBweDtcXHJcXG4gIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkO1xcclxcbiAgbWFyZ2luOiA0cHg7XFxyXFxuICBwYWRkaW5nOiA0cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kYXktbmFtZSB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIFxcclxcbn1cXHJcXG5cXHJcXG4uY2hhbmNlLXJhaW4gc3BhbiB7XFxyXFxuICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmNoYW5jZS1yYWluIGltZyB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0b3A6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnN1bnJpc2Ugc3BhbixcXHJcXG4uc3Vuc2V0IHNwYW4ge1xcclxcbiAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxufVxcclxcbi5zdW5yaXNlIGltZyxcXHJcXG4uc3Vuc2V0IGltZyB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0b3A6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1heC10ZW1wIGltZyB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0b3A6IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1pbi10ZW1wIGltZyB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0b3A6IDNweDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi4vY29uZmlnLmpzXCI7XHJcbi8vIHBjIGltcG9ydCB2YXJpYWJsZXMsIGNvbW1lbnQgdGhlbSBvdXQgb24gbW9iaWxlXHJcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCBkcm9wIGZyb20gXCIuL3dhdGVyX2Ryb3BfRklMTDBfd2dodDQwMF9HUkFEMF9vcHN6MjQuc3ZnXCI7XHJcbmltcG9ydCBzdW4wIGZyb20gXCIuL3diX3R3aWxpZ2h0X0ZJTEwwX3dnaHQ0MDBfR1JBRDBfb3BzejI0LnN2Z1wiO1xyXG5pbXBvcnQgc3VuMSBmcm9tIFwiLi93Yl90d2lsaWdodF9GSUxMMV93Z2h0NDAwX0dSQUQwX29wc3oyNC5zdmdcIjtcclxuaW1wb3J0IGFycm93MCBmcm9tIFwiLi9zb3V0aF9GSUxMMF93Z2h0NDAwX0dSQUQwX29wc3oyNC5zdmdcIjtcclxuaW1wb3J0IGFycm93MSBmcm9tIFwiLi9ub3J0aF9GSUxMMF93Z2h0NDAwX0dSQUQwX29wc3oyNC5zdmdcIjtcclxuLy8gcGhvbmUgaW1wb3J0IHZhcmlhYmxlcywgY29tbWVudCB0aGVtIG91dCBvbiBwY1xyXG4vLyBjb25zdCBkcm9wID0gXCJzcmMvd2F0ZXJfZHJvcF9GSUxMMF93Z2h0NDAwX0dSQUQwX29wc3oyNC5zdmdcIjtcclxuLy8gY29uc3Qgc3VuMCA9IFwiL3NyYy93Yl90d2lsaWdodF9GSUxMMF93Z2h0NDAwX0dSQUQwX29wc3oyNC5zdmdcIjtcclxuLy8gY29uc3Qgc3VuMSA9IFwiL3NyYy93Yl90d2lsaWdodF9GSUxMMV93Z2h0NDAwX0dSQUQwX29wc3oyNC5zdmdcIjtcclxuLy8gY29uc3QgYXJyb3cwID0gXCIvc3JjL3NvdXRoX0ZJTEwwX3dnaHQ0MDBfR1JBRDBfb3BzejI0LnN2Z1wiO1xyXG4vLyBjb25zdCBhcnJvdzEgPSBcIi9zcmMvbm9ydGhfRklMTDBfd2dodDQwMF9HUkFEMF9vcHN6MjQuc3ZnXCI7XHJcblxyXG5jb25zdCBhcGlLZXkgPSBjb25maWcuQVBJX0tFWTtcclxuXHJcbmxldCBuZXdDaXR5ID0gXCJcIjtcclxubGV0IGN1cnJlbnRDaXR5ID0gXCJXYXJzYXdcIjtcclxuY29uc3Qgd2Vla2RheXMgPSBbXHJcbiAgXCJTdW5kYXlcIixcclxuICBcIk1vbmRheVwiLFxyXG4gIFwiVHVlc2RheVwiLFxyXG4gIFwiV2VkbmVzZGF5XCIsXHJcbiAgXCJUaHVyc2RheVwiLFxyXG4gIFwiRnJpZGF5XCIsXHJcbiAgXCJTYXR1cmRheVwiLFxyXG5dO1xyXG5sZXQgY3VycmVudFdlYXRoZXIgPSB7XHJcbiAgY2l0eTogXCJcIixcclxuICB0aW1lOiBcIlwiLFxyXG4gIGNvdW50cnk6IFwiXCIsXHJcbiAgdGVtcEM6IFwiXCIsXHJcbiAgdGVtcEY6IFwiXCIsXHJcbiAgY29uZGl0aW9uOiBcIlwiLFxyXG4gIGNvbmRpdGlvbl9pY29uOiBcIlwiLFxyXG59O1xyXG5cclxubGV0IGZ1dHVyZVdlYXRoZXIgPSBbXHJcbiAge1xyXG4gICAgZGF0ZTogXCJcIixcclxuICAgIHN1bnJpc2U6IFwiXCIsXHJcbiAgICBzdW5zZXQ6IFwiXCIsXHJcbiAgICBhdmd0ZW1wX2M6IFwiXCIsXHJcbiAgICBhdmd0ZW1wX2Y6IFwiXCIsXHJcbiAgICBjb25kaXRpb25fdGV4dDogXCJcIixcclxuICAgIGNvbmRpdGlvbl9pY29uOiBcIlwiLFxyXG4gICAgZGFpbHlfY2hhbmNlX29mX3JhaW46IFwiXCIsXHJcbiAgICBtYXh0ZW1wX2M6IFwiXCIsXHJcbiAgICBtYXh0ZW1wX2Y6IFwiXCIsXHJcbiAgICBtaW50ZW1wX2M6IFwiXCIsXHJcbiAgICBtaW50ZW1wX2Y6IFwiXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBkYXRlOiBcIlwiLFxyXG4gICAgc3VucmlzZTogXCJcIixcclxuICAgIHN1bnNldDogXCJcIixcclxuICAgIGF2Z3RlbXBfYzogXCJcIixcclxuICAgIGF2Z3RlbXBfZjogXCJcIixcclxuICAgIGNvbmRpdGlvbl90ZXh0OiBcIlwiLFxyXG4gICAgY29uZGl0aW9uX2ljb246IFwiXCIsXHJcbiAgICBkYWlseV9jaGFuY2Vfb2ZfcmFpbjogXCJcIixcclxuICAgIG1heHRlbXBfYzogXCJcIixcclxuICAgIG1heHRlbXBfZjogXCJcIixcclxuICAgIG1pbnRlbXBfYzogXCJcIixcclxuICAgIG1pbnRlbXBfZjogXCJcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGRhdGU6IFwiXCIsXHJcbiAgICBzdW5yaXNlOiBcIlwiLFxyXG4gICAgc3Vuc2V0OiBcIlwiLFxyXG4gICAgYXZndGVtcF9jOiBcIlwiLFxyXG4gICAgYXZndGVtcF9mOiBcIlwiLFxyXG4gICAgY29uZGl0aW9uX3RleHQ6IFwiXCIsXHJcbiAgICBjb25kaXRpb25faWNvbjogXCJcIixcclxuICAgIGRhaWx5X2NoYW5jZV9vZl9yYWluOiBcIlwiLFxyXG4gICAgbWF4dGVtcF9jOiBcIlwiLFxyXG4gICAgbWF4dGVtcF9mOiBcIlwiLFxyXG4gICAgbWludGVtcF9jOiBcIlwiLFxyXG4gICAgbWludGVtcF9mOiBcIlwiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKGNpdHkpIHtcclxuICBjb25zdCBlcnJvck1zZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXJyb3JcIik7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBmb3JlY2FzdCA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0ke2FwaUtleX0mcT0ke2NpdHl9JmRheXM9MTRgLFxyXG4gICAgKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmb3JlY2FzdC5qc29uKCk7XHJcblxyXG4gICAgaWYgKCFmb3JlY2FzdC5vaykge1xyXG4gICAgICBlcnJvck1zZy5jbGFzc0xpc3QuYWRkKFwiZXJyLWFjdGl2ZVwiKTtcclxuICAgICAgaWYgKGRhdGEuZXJyb3IuY29kZSA9PT0gMTAwNikge1xyXG4gICAgICAgIGVycm9yTXNnLnRleHRDb250ZW50ID0gXCJDaXR5IG5vdCBmb3VuZFwiO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAgIGBFcnJvciAke2ZvcmVjYXN0LnN0YXR1c30gJHtmb3JlY2FzdC5zdGF0dXNUZXh0fS4gJHtkYXRhLmVycm9yLm1lc3NhZ2V9YCxcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2UgaWYgKGRhdGEuZXJyb3IuY29kZSA9PT0gMTAwMykge1xyXG4gICAgICAgIGVycm9yTXNnLnRleHRDb250ZW50ID0gXCJZb3UgbXVzdCBlbnRlciBhIGNpdHkgbmFtZVwiO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAgIGBFcnJvciAke2ZvcmVjYXN0LnN0YXR1c30gJHtmb3JlY2FzdC5zdGF0dXNUZXh0fS4gJHtkYXRhLmVycm9yLm1lc3NhZ2V9YCxcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2UgaWYgKGRhdGEuZXJyb3IuY29kZSA9PT0gOTk5OSkge1xyXG4gICAgICAgIGVycm9yTXNnLnRleHRDb250ZW50ID0gXCJJbnRlcm5hbCBlcnJvciwgcGxlYXNlIHRyeSBhZ2FpblwiO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAgIGBFcnJvciAke2ZvcmVjYXN0LnN0YXR1c30gJHtmb3JlY2FzdC5zdGF0dXNUZXh0fS4gJHtkYXRhLmVycm9yLm1lc3NhZ2V9YCxcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVycm9yTXNnLnRleHRDb250ZW50ID0gXCJFcnJvciwgcGxlYXNlIHRyeSBhZ2FpbiBsYXRlclwiO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3IgJHtmb3JlY2FzdC5zdGF0dXN9ICR7Zm9yZWNhc3Quc3RhdHVzVGV4dH1gKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICBjdXJyZW50V2VhdGhlciA9IHtcclxuICAgICAgY2l0eTogZGF0YS5sb2NhdGlvbi5uYW1lLFxyXG4gICAgICB0aW1lOiBkYXRhLmxvY2F0aW9uLmxvY2FsdGltZSxcclxuICAgICAgY291bnRyeTogZGF0YS5sb2NhdGlvbi5jb3VudHJ5LFxyXG4gICAgICB0ZW1wQzogZGF0YS5jdXJyZW50LnRlbXBfYyxcclxuICAgICAgdGVtcEY6IGRhdGEuY3VycmVudC50ZW1wX2YsXHJcbiAgICAgIGNvbmRpdGlvbjogZGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0LFxyXG4gICAgICBjb25kaXRpb25faWNvbjogZGF0YS5jdXJyZW50LmNvbmRpdGlvbi5pY29uLFxyXG4gICAgfTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XHJcbiAgICAgIGZ1dHVyZVdlYXRoZXJbaV0uZGF0ZSA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF0ZTtcclxuICAgICAgZnV0dXJlV2VhdGhlcltpXS5zdW5yaXNlID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5hc3Ryby5zdW5yaXNlO1xyXG4gICAgICBmdXR1cmVXZWF0aGVyW2ldLnN1bnNldCA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uYXN0cm8uc3Vuc2V0O1xyXG4gICAgICBmdXR1cmVXZWF0aGVyW2ldLmF2Z3RlbXBfYyA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5LmF2Z3RlbXBfYztcclxuICAgICAgZnV0dXJlV2VhdGhlcltpXS5hdmd0ZW1wX2YgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5hdmd0ZW1wX2Y7XHJcbiAgICAgIGZ1dHVyZVdlYXRoZXJbaV0uY29uZGl0aW9uX3RleHQgPVxyXG4gICAgICAgIGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5LmNvbmRpdGlvbi50ZXh0O1xyXG4gICAgICBmdXR1cmVXZWF0aGVyW2ldLmNvbmRpdGlvbl9pY29uID1cclxuICAgICAgICBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5jb25kaXRpb24uaWNvbjtcclxuICAgICAgZnV0dXJlV2VhdGhlcltpXS5kYWlseV9jaGFuY2Vfb2ZfcmFpbiA9XHJcbiAgICAgICAgZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkuZGFpbHlfY2hhbmNlX29mX3JhaW47XHJcbiAgICAgIGZ1dHVyZVdlYXRoZXJbaV0ubWF4dGVtcF9jID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkubWF4dGVtcF9jO1xyXG4gICAgICBmdXR1cmVXZWF0aGVyW2ldLm1heHRlbXBfZiA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5Lm1heHRlbXBfZjtcclxuICAgICAgZnV0dXJlV2VhdGhlcltpXS5taW50ZW1wX2MgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5taW50ZW1wX2M7XHJcbiAgICAgIGZ1dHVyZVdlYXRoZXJbaV0ubWludGVtcF9mID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkubWludGVtcF9mO1xyXG4gICAgfVxyXG4gICAgZXJyb3JNc2cuY2xhc3NMaXN0LnJlbW92ZShcImVyci1hY3RpdmVcIik7XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coZnV0dXJlV2VhdGhlclswXSk7XHJcblxyXG4gICAgZmlsbERvbSgpO1xyXG4gICAgLy8gZXJyb3JNc2cuY2xhc3NMaXN0LmFkZChcImVyci1hY3RpdmVcIik7XHJcbiAgICAvLyB0aHJvdyBuZXcgRXJyb3IoZm9yZWNhc3Quc3RhdHVzICsgXCIgXCIgKyBmb3JlY2FzdC5zdGF0dXNUZXh0ICsgZGF0YS5lcnJvci5jb2RlKTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIC8vIGVycm9yTXNnLmNsYXNzTGlzdC5hZGQoXCJlcnItYWN0aXZlXCIpO1xyXG4gICAgLy8gZXJyb3JNc2cudGV4dENvbnRlbnQgPSBlcnIubWVzc2FnZTtcclxuICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcclxuICAgIC8vIGVycm9yTXNnLmNsYXNzTGlzdC5hZGQoXCJlcnItYWN0aXZlXCIpO1xyXG4gICAgLy8gY29uc29sZS5sb2coZGF0YS5lcnJvci5jb2RlICsgXCIgXCIgKyBkYXRhLmVycm9yLnN0YXR1cyk7XHJcbiAgfVxyXG4gIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVEb20oKSB7XHJcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xyXG5cclxuICAvLyB0b3AgbmF2aWdhdGlvblxyXG4gIGNvbnN0IHRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgdG9wTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3Qgc2l0ZU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IHRvcFJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBpbnB1dExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gIGNvbnN0IGlucHV0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIGNvbnN0IGlucHV0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBjb25zdCBlcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gIC8vIHRvZGF5J3MgZm9yZWNhc3QgZWxlbWVudHNcclxuICBjb25zdCBjdXJyZW50VmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgY3VycmVudExlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGN1cnJlbnRSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgY3VyckNvbmRpdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgY3VyckNvbkljb24gPSBuZXcgSW1hZ2UoKTtcclxuXHJcbiAgY29uc3QgZGF5VGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgdG9kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGxvY2FsVGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgY2l0eU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICB0b3AuY2xhc3NMaXN0LmFkZChcInRvcFwiKTtcclxuICB0b3BMZWZ0LmNsYXNzTGlzdC5hZGQoXCJ0b3AtbGVmdFwiKTtcclxuICB0b3BSaWdodC5jbGFzc0xpc3QuYWRkKFwidG9wLXJpZ2h0XCIpO1xyXG4gIGlucHV0Qm94LmNsYXNzTGlzdC5hZGQoXCJpbnB1dC1ib3hcIik7XHJcbiAgaW5wdXRCdG4uY2xhc3NMaXN0LmFkZChcImlucHV0LWJ0blwiKTtcclxuICBzaXRlTmFtZS50ZXh0Q29udGVudCA9IFwiV2VhdGhlciBBcHBcIjtcclxuICBpbnB1dEJveC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImlucHV0XCIpO1xyXG4gIGlucHV0Qm94LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiRW50ZXIgY2l0eSBuYW1lXCIpO1xyXG4gIGlucHV0QnRuLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImlucHV0XCIpO1xyXG4gIGlucHV0TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiaW5wdXRcIik7XHJcbiAgaW5wdXRMYWJlbC50ZXh0Q29udGVudCA9IFwiU2VhcmNoOlwiO1xyXG4gIGlucHV0QnRuLnRleHRDb250ZW50ID0gXCJPS1wiO1xyXG4gIGlucHV0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBuZXdDaXR5ID0gaW5wdXRCb3gudmFsdWU7XHJcbiAgICBjb25zb2xlLmxvZyhuZXdDaXR5KTtcclxuICAgIGdldFdlYXRoZXIobmV3Q2l0eSk7XHJcbiAgICBpbnB1dEJveC52YWx1ZSA9IFwiXCI7XHJcbiAgfSk7XHJcbiAgZXJyb3IuY2xhc3NMaXN0LmFkZChcImVycm9yXCIpO1xyXG4gIGVycm9yLnRleHRDb250ZW50ID0gXCJFcnJvclwiO1xyXG5cclxuICBjdXJyZW50Vmlldy5jbGFzc0xpc3QuYWRkKFwiY3VycmVudC12aWV3XCIpO1xyXG4gIGN1cnJDb25JY29uLmNsYXNzTGlzdC5hZGQoXCJjdXJyLWNvbi1pY29uXCIpO1xyXG4gIHRvZGF5LmNsYXNzTGlzdC5hZGQoXCJ0b2RheVwiKTtcclxuICBsb2NhbFRpbWUuY2xhc3NMaXN0LmFkZChcImxvY2FsLXRpbWVcIik7XHJcbiAgY2l0eU5hbWUuY2xhc3NMaXN0LmFkZChcImNpdHktbmFtZVwiKTtcclxuICB0ZW1wLmNsYXNzTGlzdC5hZGQoXCJ0ZW1wZXJhdHVyZVwiKTtcclxuXHJcbiAgLy8gMy1kYXkgZm9yZWNhc3QgZWxlbWVudHNcclxuICBjb25zdCBkYXlzVmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgIGNvbnN0IGRheURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBkYXlOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IGNvbmRpdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBjb25kaXRpb25JY29uID0gbmV3IEltYWdlKCk7XHJcbiAgICBjb25zdCBtYXhUID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IG1heFRJY29uID0gbmV3IEltYWdlKCk7XHJcbiAgICBtYXhUSWNvbi5zcmMgPSBhcnJvdzE7XHJcbiAgICBjb25zdCBtYXhUVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgY29uc3QgbWluVCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBtaW5USWNvbiA9IG5ldyBJbWFnZSgpO1xyXG4gICAgbWluVEljb24uc3JjID0gYXJyb3cwO1xyXG4gICAgY29uc3QgbWluVFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIGNvbnN0IGNoYW5jZVJhaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgY2hhbmNlUmFpblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIGNvbnN0IGNoYW5jZVJhaW5JY29uID0gbmV3IEltYWdlKCk7XHJcbiAgICBjaGFuY2VSYWluSWNvbi5zcmMgPSBkcm9wO1xyXG4gICAgY29uc3Qgc3VucmlzZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBzdW5yaXNlSWNvbiA9IG5ldyBJbWFnZSgpO1xyXG4gICAgc3VucmlzZUljb24uc3JjID0gc3VuMDtcclxuICAgIGNvbnN0IHN1bnJpc2VUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBjb25zdCBzdW5zZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3Qgc3Vuc2V0SWNvbiA9IG5ldyBJbWFnZSgpO1xyXG4gICAgc3Vuc2V0SWNvbi5zcmMgPSBzdW4xO1xyXG4gICAgY29uc3Qgc3Vuc2V0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG5cclxuICAgIGRheXNWaWV3LmNsYXNzTGlzdC5hZGQoXCJkYXlzLXZpZXdcIik7XHJcbiAgICBkYXlEaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgYGRheSR7aX1gKTtcclxuICAgIGRheURpdi5jbGFzc0xpc3QuYWRkKFwiZGF5LWRpdlwiKTtcclxuICAgIGRheU5hbWUuY2xhc3NMaXN0LmFkZChcImRheS1uYW1lXCIpO1xyXG4gICAgY29uZGl0aW9uRGl2LmNsYXNzTGlzdC5hZGQoXCJjb25kaXRpb24tZGl2XCIpO1xyXG4gICAgY29uZGl0aW9uSWNvbi5jbGFzc0xpc3QuYWRkKFwiY29uZGl0aW9uLWljb25cIik7XHJcbiAgICBtYXhULmNsYXNzTGlzdC5hZGQoXCJtYXgtdGVtcFwiKTtcclxuICAgIG1pblQuY2xhc3NMaXN0LmFkZChcIm1pbi10ZW1wXCIpO1xyXG4gICAgY2hhbmNlUmFpbi5jbGFzc0xpc3QuYWRkKFwiY2hhbmNlLXJhaW5cIik7XHJcbiAgICBzdW5yaXNlLmNsYXNzTGlzdC5hZGQoXCJzdW5yaXNlXCIpO1xyXG4gICAgc3Vuc2V0LmNsYXNzTGlzdC5hZGQoXCJzdW5zZXRcIik7XHJcblxyXG4gICAgZGF5RGl2LmFwcGVuZENoaWxkKGRheU5hbWUpO1xyXG4gICAgY29uZGl0aW9uRGl2LmFwcGVuZENoaWxkKGNvbmRpdGlvbkljb24pO1xyXG4gICAgZGF5RGl2LmFwcGVuZENoaWxkKGNvbmRpdGlvbkRpdik7XHJcbiAgICBtYXhULmFwcGVuZENoaWxkKG1heFRJY29uKTtcclxuICAgIG1heFQuYXBwZW5kQ2hpbGQobWF4VFRleHQpO1xyXG4gICAgZGF5RGl2LmFwcGVuZENoaWxkKG1heFQpO1xyXG4gICAgbWluVC5hcHBlbmRDaGlsZChtaW5USWNvbik7XHJcbiAgICBtaW5ULmFwcGVuZENoaWxkKG1pblRUZXh0KTtcclxuICAgIGRheURpdi5hcHBlbmRDaGlsZChtaW5UKTtcclxuICAgIGNoYW5jZVJhaW4uYXBwZW5kQ2hpbGQoY2hhbmNlUmFpbkljb24pO1xyXG4gICAgY2hhbmNlUmFpbi5hcHBlbmRDaGlsZChjaGFuY2VSYWluVGV4dCk7XHJcbiAgICBkYXlEaXYuYXBwZW5kQ2hpbGQoY2hhbmNlUmFpbik7XHJcbiAgICBzdW5yaXNlLmFwcGVuZENoaWxkKHN1bnJpc2VJY29uKTtcclxuICAgIHN1bnJpc2UuYXBwZW5kQ2hpbGQoc3VucmlzZVRleHQpO1xyXG4gICAgZGF5RGl2LmFwcGVuZENoaWxkKHN1bnJpc2UpO1xyXG4gICAgc3Vuc2V0LmFwcGVuZENoaWxkKHN1bnNldEljb24pO1xyXG4gICAgc3Vuc2V0LmFwcGVuZENoaWxkKHN1bnNldFRleHQpO1xyXG4gICAgZGF5RGl2LmFwcGVuZENoaWxkKHN1bnNldCk7XHJcbiAgICBkYXlzVmlldy5hcHBlbmRDaGlsZChkYXlEaXYpO1xyXG4gIH1cclxuXHJcbiAgdG9wTGVmdC5hcHBlbmRDaGlsZChzaXRlTmFtZSk7XHJcbiAgdG9wUmlnaHQuYXBwZW5kQ2hpbGQoaW5wdXRMYWJlbCk7XHJcbiAgdG9wUmlnaHQuYXBwZW5kQ2hpbGQoaW5wdXRCb3gpO1xyXG4gIHRvcFJpZ2h0LmFwcGVuZENoaWxkKGlucHV0QnRuKTtcclxuICB0b3BSaWdodC5hcHBlbmRDaGlsZChlcnJvcik7XHJcbiAgdG9wLmFwcGVuZENoaWxkKHRvcExlZnQpO1xyXG4gIHRvcC5hcHBlbmRDaGlsZCh0b3BSaWdodCk7XHJcblxyXG4gIGN1cnJlbnRMZWZ0LmFwcGVuZENoaWxkKGNpdHlOYW1lKTtcclxuICBjdXJyZW50TGVmdC5hcHBlbmRDaGlsZCh0b2RheSk7XHJcbiAgY3VycmVudExlZnQuYXBwZW5kQ2hpbGQobG9jYWxUaW1lKTtcclxuICBjdXJyQ29uZGl0aW9uLmFwcGVuZENoaWxkKGN1cnJDb25JY29uKTtcclxuICBjdXJyZW50UmlnaHQuYXBwZW5kQ2hpbGQodGVtcCk7XHJcbiAgY3VycmVudFJpZ2h0LmFwcGVuZENoaWxkKGN1cnJDb25kaXRpb24pO1xyXG4gIGN1cnJlbnRWaWV3LmFwcGVuZENoaWxkKGN1cnJlbnRMZWZ0KTtcclxuICBjdXJyZW50Vmlldy5hcHBlbmRDaGlsZChjdXJyZW50UmlnaHQpO1xyXG5cclxuICBib2R5LmFwcGVuZENoaWxkKHRvcCk7XHJcbiAgYm9keS5hcHBlbmRDaGlsZChjdXJyZW50Vmlldyk7XHJcbiAgYm9keS5hcHBlbmRDaGlsZChkYXlzVmlldyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbGxEb20oKSB7XHJcbiAgY29uc3QgY2l0eU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNpdHktbmFtZVwiKTtcclxuICBjb25zdCB0ZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZW1wZXJhdHVyZVwiKTtcclxuICBjb25zdCBjdXJyQ29uSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3Vyci1jb24taWNvblwiKTtcclxuICBjb25zdCB0b2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kYXlcIik7XHJcbiAgY29uc3QgbG9jYWxUaW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2NhbC10aW1lXCIpO1xyXG5cclxuICBjb25zdCB0b2RheVdlZWsgPSBuZXcgRGF0ZShgJHtjdXJyZW50V2VhdGhlci50aW1lfWApO1xyXG4gIC8vIG1vbnRoIC0gZnJvbSAwIHRvIDExLCBzbyBuZWVkIHRvIGFkZCArMVxyXG4gIHRvZGF5LnRleHRDb250ZW50ID0gYFRvZGF5IGlzICR7XHJcbiAgICB3ZWVrZGF5c1t0b2RheVdlZWsuZ2V0RGF5KCldXHJcbiAgfSwgJHt0b2RheVdlZWsuZ2V0RGF0ZSgpfS4ke1xyXG4gICAgdG9kYXlXZWVrLmdldE1vbnRoKCkgKyAxXHJcbiAgfS4ke3RvZGF5V2Vlay5nZXRGdWxsWWVhcigpfS4gYDtcclxuICBsb2NhbFRpbWUudGV4dENvbnRlbnQgPSBgTG9jYWwgdGltZTogJHt0b2RheVdlZWsuZ2V0SG91cnMoKX06JHt0b2RheVdlZWsuZ2V0TWludXRlcygpfS5gO1xyXG4gIGN1cnJDb25JY29uLnNyYyA9IGBodHRwczoke2N1cnJlbnRXZWF0aGVyLmNvbmRpdGlvbl9pY29ufWA7XHJcblxyXG4gIGNpdHlOYW1lLnRleHRDb250ZW50ID0gY3VycmVudFdlYXRoZXIuY2l0eTtcclxuICB0ZW1wLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFdlYXRoZXIudGVtcEN9IMKwQ2A7XHJcblxyXG4gIC8vIHdlYXRoZXIgZm9yZWNhc3QgZm9yIDMgZGF5cyAtIGZpbGwgd2l0aCBmZXRjaGVkIGRhdGFcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgY29uc3QgZGF5TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNkYXkke2l9IC5kYXktbmFtZWApO1xyXG4gICAgY29uc3QgbWF4VCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNkYXkke2l9IC5tYXgtdGVtcCBzcGFuYCk7XHJcbiAgICBjb25zdCBtaW5UID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2RheSR7aX0gLm1pbi10ZW1wIHNwYW5gKTtcclxuICAgIGNvbnN0IGNvbmRpdGlvbkljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZGF5JHtpfSAuY29uZGl0aW9uLWljb25gKTtcclxuICAgIGNvbnN0IGNoYW5jZVJhaW5UZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2RheSR7aX0gLmNoYW5jZS1yYWluIHNwYW5gKTtcclxuICAgIGNvbnN0IHN1bnJpc2VUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2RheSR7aX0gLnN1bnJpc2Ugc3BhbmApO1xyXG4gICAgY29uc3Qgc3Vuc2V0VGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNkYXkke2l9IC5zdW5zZXQgc3BhbmApO1xyXG5cclxuICAgIGlmIChpID09PSAwKSB7XHJcbiAgICAgIGRheU5hbWUudGV4dENvbnRlbnQgPSBcIlRvZGF5XCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBkYXlOdW0gPSBuZXcgRGF0ZShgJHtmdXR1cmVXZWF0aGVyW2ldLmRhdGV9YCkuZ2V0RGF5KCk7XHJcbiAgICAgIGRheU5hbWUudGV4dENvbnRlbnQgPSB3ZWVrZGF5c1tkYXlOdW1dO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbmRpdGlvbkljb24uc3JjID0gYGh0dHBzOiR7ZnV0dXJlV2VhdGhlcltpXS5jb25kaXRpb25faWNvbn1gO1xyXG4gICAgbWF4VC50ZXh0Q29udGVudCA9IGAke2Z1dHVyZVdlYXRoZXJbaV0ubWF4dGVtcF9jfSDCsENgO1xyXG4gICAgbWluVC50ZXh0Q29udGVudCA9IGAke2Z1dHVyZVdlYXRoZXJbaV0ubWludGVtcF9jfSDCsENgO1xyXG4gICAgY2hhbmNlUmFpblRleHQudGV4dENvbnRlbnQgPSBgJHtmdXR1cmVXZWF0aGVyW2ldLmRhaWx5X2NoYW5jZV9vZl9yYWlufSVgO1xyXG4gICAgc3VucmlzZVRleHQudGV4dENvbnRlbnQgPSBmdXR1cmVXZWF0aGVyW2ldLnN1bnJpc2U7XHJcbiAgICBzdW5zZXRUZXh0LnRleHRDb250ZW50ID0gZnV0dXJlV2VhdGhlcltpXS5zdW5zZXQ7XHJcbiAgfVxyXG59XHJcblxyXG5jcmVhdGVEb20oKTtcclxuZ2V0V2VhdGhlcihjdXJyZW50Q2l0eSk7XHJcblxyXG4vKlxyXG5GdXR1cmUgd2VhdGhlciAtIDMgZGF5c1xyXG4zIGNvbHVtbnMsIGVhY2ggb2YgdGhlbSBoYXZpbmdcclxuZGF5XHJcbnRlbXBcclxudGVtcCBhdCBuaWdodD9cclxuY29uZGl0aW9uXHJcbmltZyBvZiBjb25kaXRpb25cclxucmFpbiBjaGFuY2U/XHJcbiovXHJcblxyXG4vKiBcclxuaW5wdXQgY2l0eSBuYW1lXHJcbmlucHV0IGZpZWxkIGFuZCBvayBidXR0b25cclxub25jZSB1c2VyIGNsaWNrcyBvay9wcmVzc2VzIGVudGVyLCBjaGFuZ2UgdGhlIGZvbGxvd2luZzpcclxubmV3Q2l0eSA9IGVudGVyZWQgdmFsdWVcclxuZmV0Y2ggZnJvbSBhcGkgLSBjdXJyZW50IHdlYXRoZXIgYW5kIGZ1dHVyZSB3ZWF0aGVyXHJcbmluIGNhc2Ugb2YgZXJyb3I6IHNob3cgYSBtZXNzYWdlIHRvIHRyeSBhZ2Fpbi4gZGlmZmVyZW50IGVycm9yIHdoZW4gdGhlIGNpdHkgZG9lc250IGV4aXN0LCBkaWZmZXJlbnQgaW4gY2FzZSBvZiBhIG5ldHdvcmsgZXJyb3JcclxuaW4gY2FzZSBpdCB3b3JrczpcclxuY3VycmVudENpdHkgPSBuZXdDaXR5XHJcbmZpbGwgdGhlIGRvbSB3aXRoIGZldGNoZWQgdmFsdWVzXHJcblxyXG4qL1xyXG5cclxuLypcclxubFxyXG5TZWFyY2g6XHJcbmFkZCBldmVudCBsaXN0ZW5lciBmb3IgZW50ZXIgaW4gaW5wdXQgYm94XHJcbmVycm9yOiBDaXR5IG5vdCBmb3VuZC5cclxuRXJyb3IsIHBsZWFzZSB0cnkgYWdhaW4uXHJcblxyXG5wcm9ibGVtIHdpdGggaG91cnMsIG1pbnV0ZXMgYW5kIG1vbnRocyAtIGl0IHNob3dzIDEgbnVtYmVyIGluc3RlYWQgb2YgMDFcclxuZGlmZmVyZW50IGVycm9ycyBmb3IgZGlmZmVyZW50IGNvZGVzXHJcbiovXHJcbiJdLCJuYW1lcyI6WyJjb25maWciLCJBUElfS0VZIiwiZHJvcCIsInN1bjAiLCJzdW4xIiwiYXJyb3cwIiwiYXJyb3cxIiwiYXBpS2V5IiwibmV3Q2l0eSIsImN1cnJlbnRDaXR5Iiwid2Vla2RheXMiLCJjdXJyZW50V2VhdGhlciIsImNpdHkiLCJ0aW1lIiwiY291bnRyeSIsInRlbXBDIiwidGVtcEYiLCJjb25kaXRpb24iLCJjb25kaXRpb25faWNvbiIsImZ1dHVyZVdlYXRoZXIiLCJkYXRlIiwic3VucmlzZSIsInN1bnNldCIsImF2Z3RlbXBfYyIsImF2Z3RlbXBfZiIsImNvbmRpdGlvbl90ZXh0IiwiZGFpbHlfY2hhbmNlX29mX3JhaW4iLCJtYXh0ZW1wX2MiLCJtYXh0ZW1wX2YiLCJtaW50ZW1wX2MiLCJtaW50ZW1wX2YiLCJnZXRXZWF0aGVyIiwiZXJyb3JNc2ciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJmb3JlY2FzdCIsImZldGNoIiwiZGF0YSIsImpzb24iLCJvayIsImNsYXNzTGlzdCIsImFkZCIsImVycm9yIiwiY29kZSIsInRleHRDb250ZW50IiwiRXJyb3IiLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwibWVzc2FnZSIsImxvY2F0aW9uIiwibmFtZSIsImxvY2FsdGltZSIsImN1cnJlbnQiLCJ0ZW1wX2MiLCJ0ZW1wX2YiLCJ0ZXh0IiwiaWNvbiIsImkiLCJmb3JlY2FzdGRheSIsImFzdHJvIiwiZGF5IiwicmVtb3ZlIiwiZmlsbERvbSIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVEb20iLCJib2R5IiwidG9wIiwiY3JlYXRlRWxlbWVudCIsInRvcExlZnQiLCJzaXRlTmFtZSIsInRvcFJpZ2h0IiwiaW5wdXRMYWJlbCIsImlucHV0Qm94IiwiaW5wdXRCdG4iLCJjdXJyZW50VmlldyIsImN1cnJlbnRMZWZ0IiwiY3VycmVudFJpZ2h0IiwiY3VyckNvbmRpdGlvbiIsImN1cnJDb25JY29uIiwiSW1hZ2UiLCJkYXlUaW1lIiwidG9kYXkiLCJsb2NhbFRpbWUiLCJjaXR5TmFtZSIsInRlbXAiLCJzZXRBdHRyaWJ1dGUiLCJhZGRFdmVudExpc3RlbmVyIiwidmFsdWUiLCJkYXlzVmlldyIsImRheURpdiIsImRheU5hbWUiLCJjb25kaXRpb25EaXYiLCJjb25kaXRpb25JY29uIiwibWF4VCIsIm1heFRJY29uIiwic3JjIiwibWF4VFRleHQiLCJtaW5UIiwibWluVEljb24iLCJtaW5UVGV4dCIsImNoYW5jZVJhaW4iLCJjaGFuY2VSYWluVGV4dCIsImNoYW5jZVJhaW5JY29uIiwic3VucmlzZUljb24iLCJzdW5yaXNlVGV4dCIsInN1bnNldEljb24iLCJzdW5zZXRUZXh0IiwiYXBwZW5kQ2hpbGQiLCJ0b2RheVdlZWsiLCJEYXRlIiwiZ2V0RGF5IiwiZ2V0RGF0ZSIsImdldE1vbnRoIiwiZ2V0RnVsbFllYXIiLCJnZXRIb3VycyIsImdldE1pbnV0ZXMiLCJkYXlOdW0iXSwic291cmNlUm9vdCI6IiJ9