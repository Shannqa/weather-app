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

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,eAAe;AACjB;;AAEA,YAAY;;AAEZ,OAAO","sourcesContent":["* {\r\n  box-sizing: border-box;\r\n  margin: 0px;\r\n  padding: 0px;\r\n}\r\n\r\n.input-box {\r\n  width: 120px;\r\n  height: 24px;\r\n  margin: 4px;\r\n}\r\n\r\n.input-btn {\r\n  width: 30px;\r\n  height: 24px;\r\n  margin: 4px;\r\n}\r\n\r\n.temperature {\r\n  font-size: 2rem;\r\n}\r\n\r\n.city-name {}\r\n\r\n.time {}\r\n\r\n"],"sourceRoot":""}]);
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
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config.js */ "./config.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


const apiKey = _config_js__WEBPACK_IMPORTED_MODULE_0__["default"].API_KEY;
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
}
function fillDom() {
  const cityName = document.querySelector(".city-name");
  const temp = document.querySelector(".temperature");
  const time = document.querySelector(".time");
  cityName.textContent = currentWeather.city;
  temp.textContent = currentWeather.tempC + " °C";
  time.textContent = currentWeather.time;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJLENBQUNJLFdBQVcsR0FBR3pELGNBQWMsQ0FBQ0ksS0FBSyxHQUFHLEtBQUs7RUFDL0NGLElBQUksQ0FBQ3VELFdBQVcsR0FBR3pELGNBQWMsQ0FBQ0UsSUFBSTtBQUN4QztBQUVBMEMsU0FBUyxDQUFDLENBQUM7QUFDWHhCLFVBQVUsQ0FBQ3JCLFdBQVcsQ0FBQztBQUV2QixTQUFTOEQsT0FBT0EsQ0FBQSxFQUFHO0VBQ2pCLElBQUlDLE9BQU8sR0FBRyxJQUFJQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7RUFFekMsTUFBTXZELElBQUksR0FDUnNELE9BQU8sQ0FBQ0QsT0FBTyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUdDLE9BQU8sQ0FBQ0UsUUFBUSxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUdGLE9BQU8sQ0FBQ0csV0FBVyxDQUFDLENBQUM7RUFDNUUsTUFBTS9ELElBQUksR0FBRzRELE9BQU8sQ0FBQ0ksUUFBUSxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUdKLE9BQU8sQ0FBQ0ssVUFBVSxDQUFDLENBQUM7RUFDNUR2RSxPQUFPLENBQUNDLEdBQUcsQ0FBQ1csSUFBSSxDQUFDO0VBQ2pCWixPQUFPLENBQUNDLEdBQUcsQ0FBQ0ssSUFBSSxDQUFDO0FBQ25CO0FBRUEyRCxPQUFPLENBQUMsQ0FBQzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi8uL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly9mb3JtLXZhbGlkYXRpb24vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZm9ybS12YWxpZGF0aW9uLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZm9ybS12YWxpZGF0aW9uLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9mb3JtLXZhbGlkYXRpb24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9mb3JtLXZhbGlkYXRpb24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZm9ybS12YWxpZGF0aW9uLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZm9ybS12YWxpZGF0aW9uLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZm9ybS12YWxpZGF0aW9uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9mb3JtLXZhbGlkYXRpb24vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZm9ybS12YWxpZGF0aW9uLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbmZpZyA9IHtcclxuICBBUElfS0VZOiBcImI5OTM2M2MzYTNmNDQ5YjA4MGExMjQxMjQyMzAzMDhcIixcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbmZpZztcclxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4uaW5wdXQtYm94IHtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG4gIG1hcmdpbjogNHB4O1xyXG59XHJcblxyXG4uaW5wdXQtYnRuIHtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDI0cHg7XHJcbiAgbWFyZ2luOiA0cHg7XHJcbn1cclxuXHJcbi50ZW1wZXJhdHVyZSB7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcblxyXG4uY2l0eS1uYW1lIHt9XHJcblxyXG4udGltZSB7fVxyXG5cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQSxZQUFZOztBQUVaLE9BQU9cIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgbWFyZ2luOiAwcHg7XFxyXFxuICBwYWRkaW5nOiAwcHg7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1ib3gge1xcclxcbiAgd2lkdGg6IDEyMHB4O1xcclxcbiAgaGVpZ2h0OiAyNHB4O1xcclxcbiAgbWFyZ2luOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1idG4ge1xcclxcbiAgd2lkdGg6IDMwcHg7XFxyXFxuICBoZWlnaHQ6IDI0cHg7XFxyXFxuICBtYXJnaW46IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRlbXBlcmF0dXJlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNpdHktbmFtZSB7fVxcclxcblxcclxcbi50aW1lIHt9XFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBjb25maWcgZnJvbSBcIi4uL2NvbmZpZy5qc1wiO1xyXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5cclxuY29uc3QgYXBpS2V5ID0gY29uZmlnLkFQSV9LRVk7XHJcblxyXG5jb25zb2xlLmxvZyhcImFhYVwiKTtcclxubGV0IG5ld0NpdHkgPSBcIlwiO1xyXG5sZXQgY3VycmVudENpdHkgPSBcIldhcnNhd1wiO1xyXG5sZXQgY3VycmVudFdlYXRoZXIgPSB7XHJcbiAgY2l0eTogXCJcIixcclxuICB0aW1lOiBcIlwiLFxyXG4gIGNvdW50cnk6IFwiXCIsXHJcbiAgdGVtcEM6IFwiXCIsXHJcbiAgdGVtcEY6IFwiXCIsXHJcbiAgY29uZGl0aW9uOiBcIlwiLFxyXG59O1xyXG5cclxubGV0IGZ1dHVyZVdlYXRoZXIgPSBbXHJcbiAge1xyXG4gICAgZGF0ZTogXCJcIixcclxuICAgIHN1bnJpc2U6IFwiXCIsXHJcbiAgICBzdW5zZXQ6IFwiXCIsXHJcbiAgICBhdmd0ZW1wX2M6IFwiXCIsXHJcbiAgICBhdmd0ZW1wX2Y6IFwiXCIsXHJcbiAgICBjb25kaXRpb25fdGV4dDogXCJcIixcclxuICAgIGNvbmRpdGlvbl9pY29uOiBcIlwiLFxyXG4gICAgZGFpbHlfY2hhbmNlX29mX3JhaW46IFwiXCIsXHJcbiAgICBtYXh0ZW1wX2M6IFwiXCIsXHJcbiAgICBtYXh0ZW1wX2Y6IFwiXCIsXHJcbiAgICBtaW50ZW1wX2M6IFwiXCIsXHJcbiAgICBtaW50ZW1wX2Y6IFwiXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBkYXRlOiBcIlwiLFxyXG4gICAgc3VucmlzZTogXCJcIixcclxuICAgIHN1bnNldDogXCJcIixcclxuICAgIGF2Z3RlbXBfYzogXCJcIixcclxuICAgIGF2Z3RlbXBfZjogXCJcIixcclxuICAgIGNvbmRpdGlvbl90ZXh0OiBcIlwiLFxyXG4gICAgY29uZGl0aW9uX2ljb246IFwiXCIsXHJcbiAgICBkYWlseV9jaGFuY2Vfb2ZfcmFpbjogXCJcIixcclxuICAgIG1heHRlbXBfYzogXCJcIixcclxuICAgIG1heHRlbXBfZjogXCJcIixcclxuICAgIG1pbnRlbXBfYzogXCJcIixcclxuICAgIG1pbnRlbXBfZjogXCJcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGRhdGU6IFwiXCIsXHJcbiAgICBzdW5yaXNlOiBcIlwiLFxyXG4gICAgc3Vuc2V0OiBcIlwiLFxyXG4gICAgYXZndGVtcF9jOiBcIlwiLFxyXG4gICAgYXZndGVtcF9mOiBcIlwiLFxyXG4gICAgY29uZGl0aW9uX3RleHQ6IFwiXCIsXHJcbiAgICBjb25kaXRpb25faWNvbjogXCJcIixcclxuICAgIGRhaWx5X2NoYW5jZV9vZl9yYWluOiBcIlwiLFxyXG4gICAgbWF4dGVtcF9jOiBcIlwiLFxyXG4gICAgbWF4dGVtcF9mOiBcIlwiLFxyXG4gICAgbWludGVtcF9jOiBcIlwiLFxyXG4gICAgbWludGVtcF9mOiBcIlwiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKGNpdHkpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZm9yZWNhc3QgPSBhd2FpdCBmZXRjaChcclxuICAgICAgXCJodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PVwiICtcclxuICAgICAgICBhcGlLZXkgK1xyXG4gICAgICAgIFwiJnE9XCIgK1xyXG4gICAgICAgIGNpdHkgK1xyXG4gICAgICAgIFwiJmRheXM9MTRcIixcclxuICAgICk7XHJcbiAgICBpZiAoZm9yZWNhc3Quc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZvcmVjYXN0Lmpzb24oKTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICBjdXJyZW50V2VhdGhlciA9IHtcclxuICAgICAgICBjaXR5OiBkYXRhLmxvY2F0aW9uLm5hbWUsXHJcbiAgICAgICAgdGltZTogZGF0YS5sb2NhdGlvbi5sb2NhbHRpbWUsXHJcbiAgICAgICAgY291bnRyeTogZGF0YS5sb2NhdGlvbi5jb3VudHJ5LFxyXG4gICAgICAgIHRlbXBDOiBkYXRhLmN1cnJlbnQudGVtcF9jLFxyXG4gICAgICAgIHRlbXBGOiBkYXRhLmN1cnJlbnQudGVtcF9mLFxyXG4gICAgICAgIGNvbmRpdGlvbjogZGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0LFxyXG4gICAgICB9O1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgICAgIGZ1dHVyZVdlYXRoZXJbaV0uZGF0ZSA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF0ZTtcclxuICAgICAgICBmdXR1cmVXZWF0aGVyW2ldLnN1bnJpc2UgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmFzdHJvLnN1bnJpc2U7XHJcbiAgICAgICAgZnV0dXJlV2VhdGhlcltpXS5zdW5zZXQgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmFzdHJvLnN1bnNldDtcclxuICAgICAgICBmdXR1cmVXZWF0aGVyW2ldLmF2Z3RlbXBfYyA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5LmF2Z3RlbXBfYztcclxuICAgICAgICBmdXR1cmVXZWF0aGVyW2ldLmF2Z3RlbXBfZiA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5LmF2Z3RlbXBfZjtcclxuICAgICAgICBmdXR1cmVXZWF0aGVyW2ldLmNvbmRpdGlvbl90ZXh0ID1cclxuICAgICAgICAgIGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5LmNvbmRpdGlvbi50ZXh0O1xyXG4gICAgICAgIGZ1dHVyZVdlYXRoZXJbaV0uY29uZGl0aW9uX2ljb24gPVxyXG4gICAgICAgICAgZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkuY29uZGl0aW9uLmljb247XHJcbiAgICAgICAgZnV0dXJlV2VhdGhlcltpXS5kYWlseV9jaGFuY2Vfb2ZfcmFpbiA9XHJcbiAgICAgICAgICBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5kYWlseV9jaGFuY2Vfb2ZfcmFpbjtcclxuICAgICAgICBmdXR1cmVXZWF0aGVyW2ldLm1heHRlbXBfYyA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5Lm1heHRlbXBfYztcclxuICAgICAgICBmdXR1cmVXZWF0aGVyW2ldLm1heHRlbXBfZiA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5Lm1heHRlbXBfZjtcclxuICAgICAgICBmdXR1cmVXZWF0aGVyW2ldLm1pbnRlbXBfYyA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5Lm1pbnRlbXBfYztcclxuICAgICAgICBmdXR1cmVXZWF0aGVyW2ldLm1pbnRlbXBfZiA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5Lm1pbnRlbXBfZjtcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyhmdXR1cmVXZWF0aGVyWzBdKTtcclxuXHJcbiAgICAgIGZpbGxEb20oKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXMgKyBcIiBcIiArIHJlc3BvbnNlLnN0YXR1c1RleHQpO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xyXG4gIH1cclxuICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRG9tKCkge1xyXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuICBjb25zdCB0b3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGlucHV0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIGNvbnN0IGlucHV0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuXHJcbiAgY29uc3QgY2l0eU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IHRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICBjaXR5TmFtZS5jbGFzc0xpc3QuYWRkKFwiY2l0eS1uYW1lXCIpO1xyXG4gIHRlbXAuY2xhc3NMaXN0LmFkZChcInRlbXBlcmF0dXJlXCIpO1xyXG4gIHRpbWUuY2xhc3NMaXN0LmFkZChcInRpbWVcIik7XHJcbiAgaW5wdXRCb3guY2xhc3NMaXN0LmFkZChcImlucHV0LWJveFwiKTtcclxuICBpbnB1dEJ0bi5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtYnRuXCIpO1xyXG5cclxuICBpbnB1dEJveC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImlucHV0XCIpO1xyXG4gIGlucHV0QnRuLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImlucHV0XCIpO1xyXG5cclxuICBpbnB1dEJ0bi50ZXh0Q29udGVudCA9IFwiT0tcIjtcclxuXHJcbiAgaW5wdXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIG5ld0NpdHkgPSBpbnB1dEJveC52YWx1ZTtcclxuICAgIGNvbnNvbGUubG9nKG5ld0NpdHkpO1xyXG4gICAgZ2V0V2VhdGhlcihuZXdDaXR5KTtcclxuICAgIGlucHV0Qm94LnZhbHVlID0gXCJcIjtcclxuICB9KTtcclxuXHJcbiAgdG9wLmFwcGVuZENoaWxkKGlucHV0Qm94KTtcclxuICB0b3AuYXBwZW5kQ2hpbGQoaW5wdXRCdG4pO1xyXG4gIHRvcC5hcHBlbmRDaGlsZCh0ZW1wKTtcclxuICB0b3AuYXBwZW5kQ2hpbGQoY2l0eU5hbWUpO1xyXG4gIHRvcC5hcHBlbmRDaGlsZCh0aW1lKTtcclxuICBib2R5LmFwcGVuZENoaWxkKHRvcCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbGxEb20oKSB7XHJcbiAgY29uc3QgY2l0eU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNpdHktbmFtZVwiKTtcclxuICBjb25zdCB0ZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZW1wZXJhdHVyZVwiKTtcclxuICBjb25zdCB0aW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aW1lXCIpO1xyXG5cclxuICBjaXR5TmFtZS50ZXh0Q29udGVudCA9IGN1cnJlbnRXZWF0aGVyLmNpdHk7XHJcbiAgdGVtcC50ZXh0Q29udGVudCA9IGN1cnJlbnRXZWF0aGVyLnRlbXBDICsgXCIgwrBDXCI7XHJcbiAgdGltZS50ZXh0Q29udGVudCA9IGN1cnJlbnRXZWF0aGVyLnRpbWU7XHJcbn1cclxuXHJcbmNyZWF0ZURvbSgpO1xyXG5nZXRXZWF0aGVyKGN1cnJlbnRDaXR5KTtcclxuXHJcbmZ1bmN0aW9uIGdldERhdGUoKSB7XHJcbiAgbGV0IG5ld0RhdGUgPSBuZXcgRGF0ZShcIjIwMjMtMTAtMjIgMDo0MVwiKTtcclxuXHJcbiAgY29uc3QgZGF0ZSA9XHJcbiAgICBuZXdEYXRlLmdldERhdGUoKSArIFwiLlwiICsgbmV3RGF0ZS5nZXRNb250aCgpICsgXCIuXCIgKyBuZXdEYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgY29uc3QgdGltZSA9IG5ld0RhdGUuZ2V0SG91cnMoKSArIFwiOlwiICsgbmV3RGF0ZS5nZXRNaW51dGVzKCk7XHJcbiAgY29uc29sZS5sb2coZGF0ZSk7XHJcbiAgY29uc29sZS5sb2codGltZSk7XHJcbn1cclxuXHJcbmdldERhdGUoKTtcclxuXHJcbi8qXHJcbkZ1dHVyZSB3ZWF0aGVyIC0gMyBkYXlzXHJcbjMgY29sdW1ucywgZWFjaCBvZiB0aGVtIGhhdmluZ1xyXG5kYXlcclxudGVtcFxyXG50ZW1wIGF0IG5pZ2h0P1xyXG5jb25kaXRpb25cclxuaW1nIG9mIGNvbmRpdGlvblxyXG5yYWluIGNoYW5jZT9cclxuKi9cclxuXHJcbi8qIFxyXG5pbnB1dCBjaXR5IG5hbWVcclxuaW5wdXQgZmllbGQgYW5kIG9rIGJ1dHRvblxyXG5vbmNlIHVzZXIgY2xpY2tzIG9rL3ByZXNzZXMgZW50ZXIsIGNoYW5nZSB0aGUgZm9sbG93aW5nOlxyXG5uZXdDaXR5ID0gZW50ZXJlZCB2YWx1ZVxyXG5mZXRjaCBmcm9tIGFwaSAtIGN1cnJlbnQgd2VhdGhlciBhbmQgZnV0dXJlIHdlYXRoZXJcclxuaW4gY2FzZSBvZiBlcnJvcjogc2hvdyBhIG1lc3NhZ2UgdG8gdHJ5IGFnYWluLiBkaWZmZXJlbnQgZXJyb3Igd2hlbiB0aGUgY2l0eSBkb2VzbnQgZXhpc3QsIGRpZmZlcmVudCBpbiBjYXNlIG9mIGEgbmV0d29yayBlcnJvclxyXG5pbiBjYXNlIGl0IHdvcmtzOlxyXG5jdXJyZW50Q2l0eSA9IG5ld0NpdHlcclxuZmlsbCB0aGUgZG9tIHdpdGggZmV0Y2hlZCB2YWx1ZXNcclxuXHJcbiovXHJcbiJdLCJuYW1lcyI6WyJjb25maWciLCJBUElfS0VZIiwiYXBpS2V5IiwiY29uc29sZSIsImxvZyIsIm5ld0NpdHkiLCJjdXJyZW50Q2l0eSIsImN1cnJlbnRXZWF0aGVyIiwiY2l0eSIsInRpbWUiLCJjb3VudHJ5IiwidGVtcEMiLCJ0ZW1wRiIsImNvbmRpdGlvbiIsImZ1dHVyZVdlYXRoZXIiLCJkYXRlIiwic3VucmlzZSIsInN1bnNldCIsImF2Z3RlbXBfYyIsImF2Z3RlbXBfZiIsImNvbmRpdGlvbl90ZXh0IiwiY29uZGl0aW9uX2ljb24iLCJkYWlseV9jaGFuY2Vfb2ZfcmFpbiIsIm1heHRlbXBfYyIsIm1heHRlbXBfZiIsIm1pbnRlbXBfYyIsIm1pbnRlbXBfZiIsImdldFdlYXRoZXIiLCJmb3JlY2FzdCIsImZldGNoIiwic3RhdHVzIiwiZGF0YSIsImpzb24iLCJsb2NhdGlvbiIsIm5hbWUiLCJsb2NhbHRpbWUiLCJjdXJyZW50IiwidGVtcF9jIiwidGVtcF9mIiwidGV4dCIsImkiLCJmb3JlY2FzdGRheSIsImFzdHJvIiwiZGF5IiwiaWNvbiIsImZpbGxEb20iLCJFcnJvciIsInJlc3BvbnNlIiwic3RhdHVzVGV4dCIsImVyciIsIm1lc3NhZ2UiLCJjcmVhdGVEb20iLCJib2R5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidG9wIiwiY3JlYXRlRWxlbWVudCIsImlucHV0Qm94IiwiaW5wdXRCdG4iLCJjaXR5TmFtZSIsInRlbXAiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRBdHRyaWJ1dGUiLCJ0ZXh0Q29udGVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ2YWx1ZSIsImFwcGVuZENoaWxkIiwiZ2V0RGF0ZSIsIm5ld0RhdGUiLCJEYXRlIiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsImdldEhvdXJzIiwiZ2V0TWludXRlcyJdLCJzb3VyY2VSb290IjoiIn0=