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

.temperature {
  font-size: 2rem;
}

.city-name {}

.time {}

.days-view {
  display: flex;
}

.day-div {
  background-color: aquamarine;
  width: 200px;
  height: 400px;
  border: 1px black solid;
  margin: 4px;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,eAAe;AACjB;;AAEA,YAAY;;AAEZ,OAAO;;AAEP;EACE,aAAa;AACf;;AAEA;EACE,4BAA4B;EAC5B,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,WAAW;AACb","sourcesContent":["* {\r\n  box-sizing: border-box;\r\n  margin: 0px;\r\n  padding: 0px;\r\n}\r\n\r\n.input-box {\r\n  width: 120px;\r\n  height: 24px;\r\n  margin: 4px;\r\n}\r\n\r\n.input-btn {\r\n  width: 30px;\r\n  height: 24px;\r\n  margin: 4px;\r\n}\r\n\r\n.temperature {\r\n  font-size: 2rem;\r\n}\r\n\r\n.city-name {}\r\n\r\n.time {}\r\n\r\n.days-view {\r\n  display: flex;\r\n}\r\n\r\n.day-div {\r\n  background-color: aquamarine;\r\n  width: 200px;\r\n  height: 400px;\r\n  border: 1px black solid;\r\n  margin: 4px;\r\n}\r\n"],"sourceRoot":""}]);
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
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


const apiKey = _config__WEBPACK_IMPORTED_MODULE_0__["default"].API_KEY;
console.log("aaa");
let newCity = "";
let currentCity = "Warsaw";
let currentWeather = {
  city: "",
  time: "",
  country: "",
  tempC: "",
  tempF: "",
  condition: ""
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
  try {
    const forecast = await fetch("http://api.weatherapi.com/v1/forecast.json?key=" + apiKey + "&q=" + city + "&days=14");
    if (forecast.status === 200) {
      const data = await forecast.json();
      console.log(data);
      currentWeather = {
        city: data.location.name,
        time: data.location.localtime,
        country: data.location.country,
        tempC: data.current.temp_c,
        tempF: data.current.temp_f,
        condition: data.current.condition.text
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
      console.log(futureWeather[0]);
      fillDom();
    } else {
      throw new Error(response.status + " " + response.statusText);
    }
  } catch (err) {
    console.log(err.message);
  }
  // console.log(data);
}

function createDom() {
  const body = document.querySelector("body");
  const top = document.createElement("div");
  const inputBox = document.createElement("input");
  const inputBtn = document.createElement("button");
  const daysView = document.createElement("div");
  for (let i = 0; i < 3; i++) {
    const dayDiv = document.createElement("div");
    const dayName = document.createElement("div");
    const conditionDiv = document.createElement("div");
    const conditionIcon = new Image();
    const maxT = document.createElement("div");
    const minT = document.createElement("div");
    const chanceRain = document.createElement("div");
    daysView.classList.add("days-view");
    dayDiv.setAttribute("id", `day${i}`);
    dayDiv.classList.add("day-div");
    dayName.classList.add("day-name");
    conditionDiv.classList.add("condition-div");
    conditionIcon.classList.add("condition-icon");
    maxT.classList.add("max-temp");
    minT.classList.add("min-temp");
    chanceRain.classList.add("chance-rain");
    dayDiv.appendChild(dayName);
    conditionDiv.appendChild(conditionIcon);
    dayDiv.appendChild(conditionDiv);
    dayDiv.appendChild(maxT);
    dayDiv.appendChild(minT);
    dayDiv.appendChild(chanceRain);
    daysView.appendChild(dayDiv);
  }
  const cityName = document.createElement("div");
  const temp = document.createElement("div");
  const time = document.createElement("div");
  cityName.classList.add("city-name");
  temp.classList.add("temperature");
  time.classList.add("time");
  inputBox.classList.add("input-box");
  inputBtn.classList.add("input-btn");
  inputBox.setAttribute("id", "input");
  inputBtn.setAttribute("for", "input");
  inputBtn.textContent = "OK";
  inputBtn.addEventListener("click", () => {
    newCity = inputBox.value;
    console.log(newCity);
    getWeather(newCity);
    inputBox.value = "";
  });
  top.appendChild(inputBox);
  top.appendChild(inputBtn);
  top.appendChild(temp);
  top.appendChild(cityName);
  top.appendChild(time);
  body.appendChild(top);
  body.appendChild(daysView);
}
function fillDom() {
  const cityName = document.querySelector(".city-name");
  const temp = document.querySelector(".temperature");
  const time = document.querySelector(".time");
  const daysView = document.querySelector(".days-view");
  // const dayDiv = document.querySelector(".day-div");
  // const conditionDiv = document.querySelector(".condition-div");
  // const maxT = document.querySelector(".max-temp");
  // const minT = document.querySelector(".min-temp");
  // const day0 = document.querySelector("#day0");
  // const day1 = document.querySelector("#day1");
  // const day2 = document.querySelector("#day2");

  cityName.textContent = currentWeather.city;
  temp.textContent = currentWeather.tempC + " °C";
  time.textContent = currentWeather.time;

  // weather forecast for 3 days - fill with fetched data
  for (let i = 0; i < 3; i++) {
    const day = document.querySelector(`#day${i}`);
    const maxT = document.querySelector(`#day${i} .max-temp`);
    const minT = document.querySelector(`#day${i} .min-temp`);
    const conditionIcon = document.querySelector(`#day${i} .condition-icon`);
    const chanceRain = document.querySelector(`#day${i} .chance-rain`);
    conditionIcon.src = "https:" + futureWeather[i].condition_icon;
    maxT.textContent = futureWeather[i].maxtemp_c;
    minT.textContent = futureWeather[i].mintemp_c;
    chanceRain.textContent = futureWeather[i].daily_chance_of_rain + "%";
  }
}
createDom();
getWeather(currentCity);
function getDate() {
  let newDate = new Date("2023-10-22 0:41");
  const date = newDate.getDate() + "." + newDate.getMonth() + "." + newDate.getFullYear();
  const time = newDate.getHours() + ":" + newDate.getMinutes();
  console.log(date);
  console.log(time);
}
getDate();

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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSyxFQUFFLEVBQUU7RUFDVEMsU0FBUyxFQUFFO0FBQ2IsQ0FBQztBQUVELElBQUlDLGFBQWEsR0FBRyxDQUNsQjtFQUNFQyxJQUFJLEVBQUUsRUFBRTtFQUNSQyxPQUFPLEVBQUUsRUFBRTtFQUNYQyxNQUFNLEVBQUUsRUFBRTtFQUNWQyxTQUFTLEVBQUUsRUFBRTtFQUNiQyxTQUFTLEVBQUUsRUFBRTtFQUNiQyxjQUFjLEVBQUUsRUFBRTtFQUNsQkMsY0FBYyxFQUFFLEVBQUU7RUFDbEJDLG9CQUFvQixFQUFFLEVBQUU7RUFDeEJDLFNBQVMsRUFBRSxFQUFFO0VBQ2JDLFNBQVMsRUFBRSxFQUFFO0VBQ2JDLFNBQVMsRUFBRSxFQUFFO0VBQ2JDLFNBQVMsRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNFWCxJQUFJLEVBQUUsRUFBRTtFQUNSQyxPQUFPLEVBQUUsRUFBRTtFQUNYQyxNQUFNLEVBQUUsRUFBRTtFQUNWQyxTQUFTLEVBQUUsRUFBRTtFQUNiQyxTQUFTLEVBQUUsRUFBRTtFQUNiQyxjQUFjLEVBQUUsRUFBRTtFQUNsQkMsY0FBYyxFQUFFLEVBQUU7RUFDbEJDLG9CQUFvQixFQUFFLEVBQUU7RUFDeEJDLFNBQVMsRUFBRSxFQUFFO0VBQ2JDLFNBQVMsRUFBRSxFQUFFO0VBQ2JDLFNBQVMsRUFBRSxFQUFFO0VBQ2JDLFNBQVMsRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNFWCxJQUFJLEVBQUUsRUFBRTtFQUNSQyxPQUFPLEVBQUUsRUFBRTtFQUNYQyxNQUFNLEVBQUUsRUFBRTtFQUNWQyxTQUFTLEVBQUUsRUFBRTtFQUNiQyxTQUFTLEVBQUUsRUFBRTtFQUNiQyxjQUFjLEVBQUUsRUFBRTtFQUNsQkMsY0FBYyxFQUFFLEVBQUU7RUFDbEJDLG9CQUFvQixFQUFFLEVBQUU7RUFDeEJDLFNBQVMsRUFBRSxFQUFFO0VBQ2JDLFNBQVMsRUFBRSxFQUFFO0VBQ2JDLFNBQVMsRUFBRSxFQUFFO0VBQ2JDLFNBQVMsRUFBRTtBQUNiLENBQUMsQ0FDRjtBQUVELGVBQWVDLFVBQVVBLENBQUNuQixJQUFJLEVB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VSxDQUFDLENBQUM7RUFDNURqRixPQUFPLENBQUNDLEdBQUcsQ0FBQ1csSUFBSSxDQUFDO0VBQ2pCWixPQUFPLENBQUNDLEdBQUcsQ0FBQ0ssSUFBSSxDQUFDO0FBQ25CO0FBRUFxRSxPQUFPLENBQUMsQ0FBQzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi8uL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly9mb3JtLXZhbGlkYXRpb24vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZm9ybS12YWxpZGF0aW9uLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZm9ybS12YWxpZGF0aW9uLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9mb3JtLXZhbGlkYXRpb24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9mb3JtLXZhbGlkYXRpb24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZm9ybS12YWxpZGF0aW9uLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZm9ybS12YWxpZGF0aW9uLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZm9ybS12YWxpZGF0aW9uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9mb3JtLXZhbGlkYXRpb24vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZm9ybS12YWxpZGF0aW9uLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbmZpZyA9IHtcclxuICBBUElfS0VZOiBcImI5OTM2M2MzYTNmNDQ5YjA4MGExMjQxMjQyMzAzMDhcIixcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbmZpZztcclxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4uaW5wdXQtYm94IHtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG4gIG1hcmdpbjogNHB4O1xyXG59XHJcblxyXG4uaW5wdXQtYnRuIHtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDI0cHg7XHJcbiAgbWFyZ2luOiA0cHg7XHJcbn1cclxuXHJcbi50ZW1wZXJhdHVyZSB7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcblxyXG4uY2l0eS1uYW1lIHt9XHJcblxyXG4udGltZSB7fVxyXG5cclxuLmRheXMtdmlldyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmRheS1kaXYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7XHJcbiAgbWFyZ2luOiA0cHg7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQSxZQUFZOztBQUVaLE9BQU87O0FBRVA7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsV0FBVztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIG1hcmdpbjogMHB4O1xcclxcbiAgcGFkZGluZzogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtYm94IHtcXHJcXG4gIHdpZHRoOiAxMjBweDtcXHJcXG4gIGhlaWdodDogMjRweDtcXHJcXG4gIG1hcmdpbjogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtYnRuIHtcXHJcXG4gIHdpZHRoOiAzMHB4O1xcclxcbiAgaGVpZ2h0OiAyNHB4O1xcclxcbiAgbWFyZ2luOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi50ZW1wZXJhdHVyZSB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5jaXR5LW5hbWUge31cXHJcXG5cXHJcXG4udGltZSB7fVxcclxcblxcclxcbi5kYXlzLXZpZXcge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLmRheS1kaXYge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcXHJcXG4gIHdpZHRoOiAyMDBweDtcXHJcXG4gIGhlaWdodDogNDAwcHg7XFxyXFxuICBib3JkZXI6IDFweCBibGFjayBzb2xpZDtcXHJcXG4gIG1hcmdpbjogNHB4O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi4vY29uZmlnXCI7XHJcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcblxyXG5jb25zdCBhcGlLZXkgPSBjb25maWcuQVBJX0tFWTtcclxuXHJcbmNvbnNvbGUubG9nKFwiYWFhXCIpO1xyXG5sZXQgbmV3Q2l0eSA9IFwiXCI7XHJcbmxldCBjdXJyZW50Q2l0eSA9IFwiV2Fyc2F3XCI7XHJcbmxldCBjdXJyZW50V2VhdGhlciA9IHtcclxuICBjaXR5OiBcIlwiLFxyXG4gIHRpbWU6IFwiXCIsXHJcbiAgY291bnRyeTogXCJcIixcclxuICB0ZW1wQzogXCJcIixcclxuICB0ZW1wRjogXCJcIixcclxuICBjb25kaXRpb246IFwiXCIsXHJcbn07XHJcblxyXG5sZXQgZnV0dXJlV2VhdGhlciA9IFtcclxuICB7XHJcbiAgICBkYXRlOiBcIlwiLFxyXG4gICAgc3VucmlzZTogXCJcIixcclxuICAgIHN1bnNldDogXCJcIixcclxuICAgIGF2Z3RlbXBfYzogXCJcIixcclxuICAgIGF2Z3RlbXBfZjogXCJcIixcclxuICAgIGNvbmRpdGlvbl90ZXh0OiBcIlwiLFxyXG4gICAgY29uZGl0aW9uX2ljb246IFwiXCIsXHJcbiAgICBkYWlseV9jaGFuY2Vfb2ZfcmFpbjogXCJcIixcclxuICAgIG1heHRlbXBfYzogXCJcIixcclxuICAgIG1heHRlbXBfZjogXCJcIixcclxuICAgIG1pbnRlbXBfYzogXCJcIixcclxuICAgIG1pbnRlbXBfZjogXCJcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGRhdGU6IFwiXCIsXHJcbiAgICBzdW5yaXNlOiBcIlwiLFxyXG4gICAgc3Vuc2V0OiBcIlwiLFxyXG4gICAgYXZndGVtcF9jOiBcIlwiLFxyXG4gICAgYXZndGVtcF9mOiBcIlwiLFxyXG4gICAgY29uZGl0aW9uX3RleHQ6IFwiXCIsXHJcbiAgICBjb25kaXRpb25faWNvbjogXCJcIixcclxuICAgIGRhaWx5X2NoYW5jZV9vZl9yYWluOiBcIlwiLFxyXG4gICAgbWF4dGVtcF9jOiBcIlwiLFxyXG4gICAgbWF4dGVtcF9mOiBcIlwiLFxyXG4gICAgbWludGVtcF9jOiBcIlwiLFxyXG4gICAgbWludGVtcF9mOiBcIlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgZGF0ZTogXCJcIixcclxuICAgIHN1bnJpc2U6IFwiXCIsXHJcbiAgICBzdW5zZXQ6IFwiXCIsXHJcbiAgICBhdmd0ZW1wX2M6IFwiXCIsXHJcbiAgICBhdmd0ZW1wX2Y6IFwiXCIsXHJcbiAgICBjb25kaXRpb25fdGV4dDogXCJcIixcclxuICAgIGNvbmRpdGlvbl9pY29uOiBcIlwiLFxyXG4gICAgZGFpbHlfY2hhbmNlX29mX3JhaW46IFwiXCIsXHJcbiAgICBtYXh0ZW1wX2M6IFwiXCIsXHJcbiAgICBtYXh0ZW1wX2Y6IFwiXCIsXHJcbiAgICBtaW50ZW1wX2M6IFwiXCIsXHJcbiAgICBtaW50ZW1wX2Y6IFwiXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIoY2l0eSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBmb3JlY2FzdCA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBcImh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9XCIgK1xyXG4gICAgICAgIGFwaUtleSArXHJcbiAgICAgICAgXCImcT1cIiArXHJcbiAgICAgICAgY2l0eSArXHJcbiAgICAgICAgXCImZGF5cz0xNFwiLFxyXG4gICAgKTtcclxuICAgIGlmIChmb3JlY2FzdC5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgZm9yZWNhc3QuanNvbigpO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIGN1cnJlbnRXZWF0aGVyID0ge1xyXG4gICAgICAgIGNpdHk6IGRhdGEubG9jYXRpb24ubmFtZSxcclxuICAgICAgICB0aW1lOiBkYXRhLmxvY2F0aW9uLmxvY2FsdGltZSxcclxuICAgICAgICBjb3VudHJ5OiBkYXRhLmxvY2F0aW9uLmNvdW50cnksXHJcbiAgICAgICAgdGVtcEM6IGRhdGEuY3VycmVudC50ZW1wX2MsXHJcbiAgICAgICAgdGVtcEY6IGRhdGEuY3VycmVudC50ZW1wX2YsXHJcbiAgICAgICAgY29uZGl0aW9uOiBkYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQsXHJcbiAgICAgIH07XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XHJcbiAgICAgICAgZnV0dXJlV2VhdGhlcltpXS5kYXRlID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXRlO1xyXG4gICAgICAgIGZ1dHVyZVdlYXRoZXJbaV0uc3VucmlzZSA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uYXN0cm8uc3VucmlzZTtcclxuICAgICAgICBmdXR1cmVXZWF0aGVyW2ldLnN1bnNldCA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uYXN0cm8uc3Vuc2V0O1xyXG4gICAgICAgIGZ1dHVyZVdlYXRoZXJbaV0uYXZndGVtcF9jID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkuYXZndGVtcF9jO1xyXG4gICAgICAgIGZ1dHVyZVdlYXRoZXJbaV0uYXZndGVtcF9mID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkuYXZndGVtcF9mO1xyXG4gICAgICAgIGZ1dHVyZVdlYXRoZXJbaV0uY29uZGl0aW9uX3RleHQgPVxyXG4gICAgICAgICAgZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkuY29uZGl0aW9uLnRleHQ7XHJcbiAgICAgICAgZnV0dXJlV2VhdGhlcltpXS5jb25kaXRpb25faWNvbiA9XHJcbiAgICAgICAgICBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5jb25kaXRpb24uaWNvbjtcclxuICAgICAgICBmdXR1cmVXZWF0aGVyW2ldLmRhaWx5X2NoYW5jZV9vZl9yYWluID1cclxuICAgICAgICAgIGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5LmRhaWx5X2NoYW5jZV9vZl9yYWluO1xyXG4gICAgICAgIGZ1dHVyZVdlYXRoZXJbaV0ubWF4dGVtcF9jID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkubWF4dGVtcF9jO1xyXG4gICAgICAgIGZ1dHVyZVdlYXRoZXJbaV0ubWF4dGVtcF9mID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkubWF4dGVtcF9mO1xyXG4gICAgICAgIGZ1dHVyZVdlYXRoZXJbaV0ubWludGVtcF9jID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkubWludGVtcF9jO1xyXG4gICAgICAgIGZ1dHVyZVdlYXRoZXJbaV0ubWludGVtcF9mID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkubWludGVtcF9mO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnNvbGUubG9nKGZ1dHVyZVdlYXRoZXJbMF0pO1xyXG5cclxuICAgICAgZmlsbERvbSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1cyArIFwiIFwiICsgcmVzcG9uc2Uuc3RhdHVzVGV4dCk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XHJcbiAgfVxyXG4gIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVEb20oKSB7XHJcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xyXG4gIGNvbnN0IHRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgaW5wdXRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgY29uc3QgaW5wdXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGNvbnN0IGRheXNWaWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgIGNvbnN0IGRheURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBkYXlOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IGNvbmRpdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBjb25kaXRpb25JY29uID0gbmV3IEltYWdlKCk7XHJcbiAgICBjb25zdCBtYXhUID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IG1pblQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgY2hhbmNlUmFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gICAgZGF5c1ZpZXcuY2xhc3NMaXN0LmFkZChcImRheXMtdmlld1wiKTtcclxuICAgIGRheURpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgZGF5JHtpfWApO1xyXG4gICAgZGF5RGl2LmNsYXNzTGlzdC5hZGQoXCJkYXktZGl2XCIpO1xyXG4gICAgZGF5TmFtZS5jbGFzc0xpc3QuYWRkKFwiZGF5LW5hbWVcIik7XHJcbiAgICBjb25kaXRpb25EaXYuY2xhc3NMaXN0LmFkZChcImNvbmRpdGlvbi1kaXZcIik7XHJcbiAgICBjb25kaXRpb25JY29uLmNsYXNzTGlzdC5hZGQoXCJjb25kaXRpb24taWNvblwiKTtcclxuICAgIG1heFQuY2xhc3NMaXN0LmFkZChcIm1heC10ZW1wXCIpO1xyXG4gICAgbWluVC5jbGFzc0xpc3QuYWRkKFwibWluLXRlbXBcIik7XHJcbiAgICBjaGFuY2VSYWluLmNsYXNzTGlzdC5hZGQoXCJjaGFuY2UtcmFpblwiKTtcclxuXHJcbiAgICBkYXlEaXYuYXBwZW5kQ2hpbGQoZGF5TmFtZSk7XHJcbiAgICBjb25kaXRpb25EaXYuYXBwZW5kQ2hpbGQoY29uZGl0aW9uSWNvbik7XHJcbiAgICBkYXlEaXYuYXBwZW5kQ2hpbGQoY29uZGl0aW9uRGl2KTtcclxuICAgIGRheURpdi5hcHBlbmRDaGlsZChtYXhUKTtcclxuICAgIGRheURpdi5hcHBlbmRDaGlsZChtaW5UKTtcclxuICAgIGRheURpdi5hcHBlbmRDaGlsZChjaGFuY2VSYWluKTtcclxuICAgIGRheXNWaWV3LmFwcGVuZENoaWxkKGRheURpdik7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjaXR5TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgdGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gIGNpdHlOYW1lLmNsYXNzTGlzdC5hZGQoXCJjaXR5LW5hbWVcIik7XHJcbiAgdGVtcC5jbGFzc0xpc3QuYWRkKFwidGVtcGVyYXR1cmVcIik7XHJcbiAgdGltZS5jbGFzc0xpc3QuYWRkKFwidGltZVwiKTtcclxuICBpbnB1dEJveC5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtYm94XCIpO1xyXG4gIGlucHV0QnRuLmNsYXNzTGlzdC5hZGQoXCJpbnB1dC1idG5cIik7XHJcblxyXG4gIGlucHV0Qm94LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaW5wdXRcIik7XHJcbiAgaW5wdXRCdG4uc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiaW5wdXRcIik7XHJcblxyXG4gIGlucHV0QnRuLnRleHRDb250ZW50ID0gXCJPS1wiO1xyXG5cclxuICBpbnB1dEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgbmV3Q2l0eSA9IGlucHV0Qm94LnZhbHVlO1xyXG4gICAgY29uc29sZS5sb2cobmV3Q2l0eSk7XHJcbiAgICBnZXRXZWF0aGVyKG5ld0NpdHkpO1xyXG4gICAgaW5wdXRCb3gudmFsdWUgPSBcIlwiO1xyXG4gIH0pO1xyXG5cclxuICB0b3AuYXBwZW5kQ2hpbGQoaW5wdXRCb3gpO1xyXG4gIHRvcC5hcHBlbmRDaGlsZChpbnB1dEJ0bik7XHJcbiAgdG9wLmFwcGVuZENoaWxkKHRlbXApO1xyXG4gIHRvcC5hcHBlbmRDaGlsZChjaXR5TmFtZSk7XHJcbiAgdG9wLmFwcGVuZENoaWxkKHRpbWUpO1xyXG4gIGJvZHkuYXBwZW5kQ2hpbGQodG9wKTtcclxuICBib2R5LmFwcGVuZENoaWxkKGRheXNWaWV3KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZmlsbERvbSgpIHtcclxuICBjb25zdCBjaXR5TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2l0eS1uYW1lXCIpO1xyXG4gIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXBlcmF0dXJlXCIpO1xyXG4gIGNvbnN0IHRpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpbWVcIik7XHJcbiAgY29uc3QgZGF5c1ZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRheXMtdmlld1wiKTtcclxuICAvLyBjb25zdCBkYXlEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRheS1kaXZcIik7XHJcbiAgLy8gY29uc3QgY29uZGl0aW9uRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb25kaXRpb24tZGl2XCIpO1xyXG4gIC8vIGNvbnN0IG1heFQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1heC10ZW1wXCIpO1xyXG4gIC8vIGNvbnN0IG1pblQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1pbi10ZW1wXCIpO1xyXG4gIC8vIGNvbnN0IGRheTAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RheTBcIik7XHJcbiAgLy8gY29uc3QgZGF5MSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF5MVwiKTtcclxuICAvLyBjb25zdCBkYXkyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXkyXCIpO1xyXG5cclxuICBjaXR5TmFtZS50ZXh0Q29udGVudCA9IGN1cnJlbnRXZWF0aGVyLmNpdHk7XHJcbiAgdGVtcC50ZXh0Q29udGVudCA9IGN1cnJlbnRXZWF0aGVyLnRlbXBDICsgXCIgwrBDXCI7XHJcbiAgdGltZS50ZXh0Q29udGVudCA9IGN1cnJlbnRXZWF0aGVyLnRpbWU7XHJcblxyXG4gIC8vIHdlYXRoZXIgZm9yZWNhc3QgZm9yIDMgZGF5cyAtIGZpbGwgd2l0aCBmZXRjaGVkIGRhdGFcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgY29uc3QgZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2RheSR7aX1gKTtcclxuICAgIGNvbnN0IG1heFQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZGF5JHtpfSAubWF4LXRlbXBgKTtcclxuICAgIGNvbnN0IG1pblQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZGF5JHtpfSAubWluLXRlbXBgKTtcclxuICAgIGNvbnN0IGNvbmRpdGlvbkljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZGF5JHtpfSAuY29uZGl0aW9uLWljb25gKTtcclxuICAgIGNvbnN0IGNoYW5jZVJhaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZGF5JHtpfSAuY2hhbmNlLXJhaW5gKTtcclxuXHJcbiAgICBjb25kaXRpb25JY29uLnNyYyA9IFwiaHR0cHM6XCIgKyBmdXR1cmVXZWF0aGVyW2ldLmNvbmRpdGlvbl9pY29uO1xyXG4gICAgbWF4VC50ZXh0Q29udGVudCA9IGZ1dHVyZVdlYXRoZXJbaV0ubWF4dGVtcF9jO1xyXG4gICAgbWluVC50ZXh0Q29udGVudCA9IGZ1dHVyZVdlYXRoZXJbaV0ubWludGVtcF9jO1xyXG4gICAgY2hhbmNlUmFpbi50ZXh0Q29udGVudCA9IGZ1dHVyZVdlYXRoZXJbaV0uZGFpbHlfY2hhbmNlX29mX3JhaW4gKyBcIiVcIjtcclxuICB9XHJcbn1cclxuXHJcbmNyZWF0ZURvbSgpO1xyXG5nZXRXZWF0aGVyKGN1cnJlbnRDaXR5KTtcclxuXHJcbmZ1bmN0aW9uIGdldERhdGUoKSB7XHJcbiAgbGV0IG5ld0RhdGUgPSBuZXcgRGF0ZShcIjIwMjMtMTAtMjIgMDo0MVwiKTtcclxuXHJcbiAgY29uc3QgZGF0ZSA9XHJcbiAgICBuZXdEYXRlLmdldERhdGUoKSArIFwiLlwiICsgbmV3RGF0ZS5nZXRNb250aCgpICsgXCIuXCIgKyBuZXdEYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgY29uc3QgdGltZSA9IG5ld0RhdGUuZ2V0SG91cnMoKSArIFwiOlwiICsgbmV3RGF0ZS5nZXRNaW51dGVzKCk7XHJcbiAgY29uc29sZS5sb2coZGF0ZSk7XHJcbiAgY29uc29sZS5sb2codGltZSk7XHJcbn1cclxuXHJcbmdldERhdGUoKTtcclxuXHJcbi8qXHJcbkZ1dHVyZSB3ZWF0aGVyIC0gMyBkYXlzXHJcbjMgY29sdW1ucywgZWFjaCBvZiB0aGVtIGhhdmluZ1xyXG5kYXlcclxudGVtcFxyXG50ZW1wIGF0IG5pZ2h0P1xyXG5jb25kaXRpb25cclxuaW1nIG9mIGNvbmRpdGlvblxyXG5yYWluIGNoYW5jZT9cclxuKi9cclxuXHJcbi8qIFxyXG5pbnB1dCBjaXR5IG5hbWVcclxuaW5wdXQgZmllbGQgYW5kIG9rIGJ1dHRvblxyXG5vbmNlIHVzZXIgY2xpY2tzIG9rL3ByZXNzZXMgZW50ZXIsIGNoYW5nZSB0aGUgZm9sbG93aW5nOlxyXG5uZXdDaXR5ID0gZW50ZXJlZCB2YWx1ZVxyXG5mZXRjaCBmcm9tIGFwaSAtIGN1cnJlbnQgd2VhdGhlciBhbmQgZnV0dXJlIHdlYXRoZXJcclxuaW4gY2FzZSBvZiBlcnJvcjogc2hvdyBhIG1lc3NhZ2UgdG8gdHJ5IGFnYWluLiBkaWZmZXJlbnQgZXJyb3Igd2hlbiB0aGUgY2l0eSBkb2VzbnQgZXhpc3QsIGRpZmZlcmVudCBpbiBjYXNlIG9mIGEgbmV0d29yayBlcnJvclxyXG5pbiBjYXNlIGl0IHdvcmtzOlxyXG5jdXJyZW50Q2l0eSA9IG5ld0NpdHlcclxuZmlsbCB0aGUgZG9tIHdpdGggZmV0Y2hlZCB2YWx1ZXNcclxuXHJcbiovXHJcbiJdLCJuYW1lcyI6WyJjb25maWciLCJBUElfS0VZIiwiYXBpS2V5IiwiY29uc29sZSIsImxvZyIsIm5ld0NpdHkiLCJjdXJyZW50Q2l0eSIsImN1cnJlbnRXZWF0aGVyIiwiY2l0eSIsInRpbWUiLCJjb3VudHJ5IiwidGVtcEMiLCJ0ZW1wRiIsImNvbmRpdGlvbiIsImZ1dHVyZVdlYXRoZXIiLCJkYXRlIiwic3VucmlzZSIsInN1bnNldCIsImF2Z3RlbXBfYyIsImF2Z3RlbXBfZiIsImNvbmRpdGlvbl90ZXh0IiwiY29uZGl0aW9uX2ljb24iLCJkYWlseV9jaGFuY2Vfb2ZfcmFpbiIsIm1heHRlbXBfYyIsIm1heHRlbXBfZiIsIm1pbnRlbXBfYyIsIm1pbnRlbXBfZiIsImdldFdlYXRoZXIiLCJmb3JlY2FzdCIsImZldGNoIiwic3RhdHVzIiwiZGF0YSIsImpzb24iLCJsb2NhdGlvbiIsIm5hbWUiLCJsb2NhbHRpbWUiLCJjdXJyZW50IiwidGVtcF9jIiwidGVtcF9mIiwidGV4dCIsImkiLCJmb3JlY2FzdGRheSIsImFzdHJvIiwiZGF5IiwiaWNvbiIsImZpbGxEb20iLCJFcnJvciIsInJlc3BvbnNlIiwic3RhdHVzVGV4dCIsImVyciIsIm1lc3NhZ2UiLCJjcmVhdGVEb20iLCJib2R5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidG9wIiwiY3JlYXRlRWxlbWVudCIsImlucHV0Qm94IiwiaW5wdXRCdG4iLCJkYXlzVmlldyIsImRheURpdiIsImRheU5hbWUiLCJjb25kaXRpb25EaXYiLCJjb25kaXRpb25JY29uIiwiSW1hZ2UiLCJtYXhUIiwibWluVCIsImNoYW5jZVJhaW4iLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRBdHRyaWJ1dGUiLCJhcHBlbmRDaGlsZCIsImNpdHlOYW1lIiwidGVtcCIsInRleHRDb250ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInZhbHVlIiwic3JjIiwiZ2V0RGF0ZSIsIm5ld0RhdGUiLCJEYXRlIiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsImdldEhvdXJzIiwiZ2V0TWludXRlcyJdLCJzb3VyY2VSb290IjoiIn0=