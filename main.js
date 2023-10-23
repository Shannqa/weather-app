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
  display: flex;
  flex-direction: column;
  align-items: center;
}


.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px;
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
  position: absolute;
}

.current-view {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 12px 6px;
  font-size: 1.2rem;
}

.current-left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
}
.current-right {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.temperature {
  font-size: 2rem;
}

.city-name {
  font-size: 1.6rem;
  font-weight: bold;
}

.time {}

.days-view {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
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
  font-size: 1.4rem;
  margin: 8px;
}
.max-temp,
.min-temp {
  font-size: 1.2rem;
  margin: 8px;
}

.max-temp img {
  position: relative;
  top: 2px;
}

.min-temp img {
  position: relative;
  top: 3px;
}

.chance-rain {
  margin-top: 12px;
  margin-bottom: 4px;
}

.chance-rain span {
  font-size: 1rem;

}

.chance-rain img {
  position: relative;
  top: 4px;
  right: 2px;
}

.sunrise,
.sunset {
  margin-bottom: 4px;
}

.sunrise span,
.sunset span {
  font-size: 1rem;
}

.sunrise img,
.sunset img {
  position: relative;
  top: 5px;
  right: 2px;
}



/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .top, 
  .current-view {
    min-width: 400px;
    width: 100vw;
  }
  /* .current-right {
    display: flex;
    flex-direction: column;
    align-items: center;
  } */
}
/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .top, 
  .current-view {
    width: 600px;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .top, 
  .current-view {
    width: 700px;
  }
  

}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {

}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {

}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,qBAAqB;EACrB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;;AAGA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,+BAA+B;EAC/B,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,eAAe;AACjB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA,OAAO;;AAEP;EACE,aAAa;EACb,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,0CAA0C;EAC1C,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,WAAW;EACX,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,WAAW;AACb;AACA;;EAEE,iBAAiB;EACjB,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,QAAQ;AACV;;AAEA;EACE,kBAAkB;EAClB,QAAQ;AACV;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,eAAe;;AAEjB;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,UAAU;AACZ;;AAEA;;EAEE,kBAAkB;AACpB;;AAEA;;EAEE,eAAe;AACjB;;AAEA;;EAEE,kBAAkB;EAClB,QAAQ;EACR,UAAU;AACZ;;;;AAIA,iDAAiD;AACjD;EACE;;IAEE,gBAAgB;IAChB,YAAY;EACd;EACA;;;;KAIG;AACL;AACA,oEAAoE;AACpE;EACE;;IAEE,YAAY;EACd;AACF;;AAEA,qDAAqD;AACrD;EACE;;IAEE,YAAY;EACd;;;AAGF;;AAEA,mDAAmD;AACnD;;AAEA;;AAEA,oEAAoE;AACpE;;AAEA","sourcesContent":["* {\r\n  box-sizing: border-box;\r\n  margin: 0px;\r\n  padding: 0px;\r\n}\r\n\r\nbody {\r\n  background: lightblue;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n\r\n.top {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 4px;\r\n}\r\n\r\n.top-left div {\r\n  font-weight: bold;\r\n}\r\n\r\n.input-box {\r\n  width: 120px;\r\n  height: 24px;\r\n  margin: 4px;\r\n}\r\n\r\n.input-btn {\r\n  width: 30px;\r\n  height: 24px;\r\n  margin: 4px;\r\n}\r\n\r\n.error {\r\n  background-color: palevioletred;\r\n  grid-area: \"error\";\r\n  display: none;\r\n}\r\n\r\n.err-active {\r\n  display: block !important;\r\n  position: absolute;\r\n}\r\n\r\n.current-view {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin: 12px 6px;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.current-left {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  flex-wrap: wrap;\r\n}\r\n.current-right {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.temperature {\r\n  font-size: 2rem;\r\n}\r\n\r\n.city-name {\r\n  font-size: 1.6rem;\r\n  font-weight: bold;\r\n}\r\n\r\n.time {}\r\n\r\n.days-view {\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.day-div {\r\n  background-color: rgba(255, 255, 255, 0.2);\r\n  width: 200px;\r\n  height: 400px;\r\n  border: 1px black solid;\r\n  margin: 4px;\r\n  padding: 4px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.day-name {\r\n  font-weight: bold;\r\n  font-size: 1.4rem;\r\n  margin: 8px;\r\n}\r\n.max-temp,\r\n.min-temp {\r\n  font-size: 1.2rem;\r\n  margin: 8px;\r\n}\r\n\r\n.max-temp img {\r\n  position: relative;\r\n  top: 2px;\r\n}\r\n\r\n.min-temp img {\r\n  position: relative;\r\n  top: 3px;\r\n}\r\n\r\n.chance-rain {\r\n  margin-top: 12px;\r\n  margin-bottom: 4px;\r\n}\r\n\r\n.chance-rain span {\r\n  font-size: 1rem;\r\n\r\n}\r\n\r\n.chance-rain img {\r\n  position: relative;\r\n  top: 4px;\r\n  right: 2px;\r\n}\r\n\r\n.sunrise,\r\n.sunset {\r\n  margin-bottom: 4px;\r\n}\r\n\r\n.sunrise span,\r\n.sunset span {\r\n  font-size: 1rem;\r\n}\r\n\r\n.sunrise img,\r\n.sunset img {\r\n  position: relative;\r\n  top: 5px;\r\n  right: 2px;\r\n}\r\n\r\n\r\n\r\n/* Extra small devices (phones, 600px and down) */\r\n@media only screen and (max-width: 600px) {\r\n  .top, \r\n  .current-view {\r\n    min-width: 400px;\r\n    width: 100vw;\r\n  }\r\n  /* .current-right {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n  } */\r\n}\r\n/* Small devices (portrait tablets and large phones, 600px and up) */\r\n@media only screen and (min-width: 600px) {\r\n  .top, \r\n  .current-view {\r\n    width: 600px;\r\n  }\r\n}\r\n\r\n/* Medium devices (landscape tablets, 768px and up) */\r\n@media only screen and (min-width: 768px) {\r\n  .top, \r\n  .current-view {\r\n    width: 700px;\r\n  }\r\n  \r\n\r\n}\r\n\r\n/* Large devices (laptops/desktops, 992px and up) */\r\n@media only screen and (min-width: 992px) {\r\n\r\n}\r\n\r\n/* Extra large devices (large laptops and desktops, 1200px and up) */\r\n@media only screen and (min-width: 1200px) {\r\n\r\n}"],"sourceRoot":""}]);
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
  currentLeft.classList.add("current-left");
  currentRight.classList.add("current-right");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLE1BQU1BLE1BQU0sR0FBRztFQUNiQyxPQUFPLEVBQUU7QUFDWCxDQUFDO0FBRUQsaUVBQWVELE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pyQjtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFdBQVcsS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLEtBQUssTUFBTSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sTUFBTSxZQUFZLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxZQUFZLFdBQVcsVUFBVSxRQUFRLFlBQVksTUFBTSxNQUFNLFlBQVks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VyxDQUFDOztBQUV2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi8uL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly9mb3JtLXZhbGlkYXRpb24vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZm9ybS12YWxpZGF0aW9uLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZm9ybS12YWxpZGF0aW9uLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9mb3JtLXZhbGlkYXRpb24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9mb3JtLXZhbGlkYXRpb24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZm9ybS12YWxpZGF0aW9uLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZm9ybS12YWxpZGF0aW9uLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZm9ybS12YWxpZGF0aW9uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9mb3JtLXZhbGlkYXRpb24vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9mb3JtLXZhbGlkYXRpb24vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjb25maWcgPSB7XHJcbiAgQVBJX0tFWTogXCJiOTkzNjNjM2EzZjQ0OWIwODBhMTI0MTI0MjMwMzA4XCIsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25maWc7XHJcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLnRvcCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiA0cHg7XHJcbn1cclxuXHJcbi50b3AtbGVmdCBkaXYge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uaW5wdXQtYm94IHtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG4gIG1hcmdpbjogNHB4O1xyXG59XHJcblxyXG4uaW5wdXQtYnRuIHtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDI0cHg7XHJcbiAgbWFyZ2luOiA0cHg7XHJcbn1cclxuXHJcbi5lcnJvciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcGFsZXZpb2xldHJlZDtcclxuICBncmlkLWFyZWE6IFwiZXJyb3JcIjtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uZXJyLWFjdGl2ZSB7XHJcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5jdXJyZW50LXZpZXcge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAxMnB4IDZweDtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG5cclxuLmN1cnJlbnQtbGVmdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG4uY3VycmVudC1yaWdodCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLnRlbXBlcmF0dXJlIHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbn1cclxuXHJcbi5jaXR5LW5hbWUge1xyXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4udGltZSB7fVxyXG5cclxuLmRheXMtdmlldyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5kYXktZGl2IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7XHJcbiAgbWFyZ2luOiA0cHg7XHJcbiAgcGFkZGluZzogNHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZGF5LW5hbWUge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gIG1hcmdpbjogOHB4O1xyXG59XHJcbi5tYXgtdGVtcCxcclxuLm1pbi10ZW1wIHtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBtYXJnaW46IDhweDtcclxufVxyXG5cclxuLm1heC10ZW1wIGltZyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMnB4O1xyXG59XHJcblxyXG4ubWluLXRlbXAgaW1nIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAzcHg7XHJcbn1cclxuXHJcbi5jaGFuY2UtcmFpbiB7XHJcbiAgbWFyZ2luLXRvcDogMTJweDtcclxuICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbn1cclxuXHJcbi5jaGFuY2UtcmFpbiBzcGFuIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcblxyXG59XHJcblxyXG4uY2hhbmNlLXJhaW4gaW1nIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiA0cHg7XHJcbiAgcmlnaHQ6IDJweDtcclxufVxyXG5cclxuLnN1bnJpc2UsXHJcbi5zdW5zZXQge1xyXG4gIG1hcmdpbi1ib3R0b206IDRweDtcclxufVxyXG5cclxuLnN1bnJpc2Ugc3BhbixcclxuLnN1bnNldCBzcGFuIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbi5zdW5yaXNlIGltZyxcclxuLnN1bnNldCBpbWcge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDVweDtcclxuICByaWdodDogMnB4O1xyXG59XHJcblxyXG5cclxuXHJcbi8qIEV4dHJhIHNtYWxsIGRldmljZXMgKHBob25lcywgNjAwcHggYW5kIGRvd24pICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAudG9wLCBcclxuICAuY3VycmVudC12aWV3IHtcclxuICAgIG1pbi13aWR0aDogNDAwcHg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgfVxyXG4gIC8qIC5jdXJyZW50LXJpZ2h0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9ICovXHJcbn1cclxuLyogU21hbGwgZGV2aWNlcyAocG9ydHJhaXQgdGFibGV0cyBhbmQgbGFyZ2UgcGhvbmVzLCA2MDBweCBhbmQgdXApICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcclxuICAudG9wLCBcclxuICAuY3VycmVudC12aWV3IHtcclxuICAgIHdpZHRoOiA2MDBweDtcclxuICB9XHJcbn1cclxuXHJcbi8qIE1lZGl1bSBkZXZpY2VzIChsYW5kc2NhcGUgdGFibGV0cywgNzY4cHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLnRvcCwgXHJcbiAgLmN1cnJlbnQtdmlldyB7XHJcbiAgICB3aWR0aDogNzAwcHg7XHJcbiAgfVxyXG4gIFxyXG5cclxufVxyXG5cclxuLyogTGFyZ2UgZGV2aWNlcyAobGFwdG9wcy9kZXNrdG9wcywgOTkycHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcblxyXG59XHJcblxyXG4vKiBFeHRyYSBsYXJnZSBkZXZpY2VzIChsYXJnZSBsYXB0b3BzIGFuZCBkZXNrdG9wcywgMTIwMHB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuXHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7O0FBR0E7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBLE9BQU87O0FBRVA7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSwwQ0FBMEM7RUFDMUMsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsV0FBVztBQUNiO0FBQ0E7O0VBRUUsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7O0FBRWpCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixVQUFVO0FBQ1o7O0FBRUE7O0VBRUUsa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixVQUFVO0FBQ1o7Ozs7QUFJQSxpREFBaUQ7QUFDakQ7RUFDRTs7SUFFRSxnQkFBZ0I7SUFDaEIsWUFBWTtFQUNkO0VBQ0E7Ozs7S0FJRztBQUNMO0FBQ0Esb0VBQW9FO0FBQ3BFO0VBQ0U7O0lBRUUsWUFBWTtFQUNkO0FBQ0Y7O0FBRUEscURBQXFEO0FBQ3JEO0VBQ0U7O0lBRUUsWUFBWTtFQUNkOzs7QUFHRjs7QUFFQSxtREFBbUQ7QUFDbkQ7O0FBRUE7O0FBRUEsb0VBQW9FO0FBQ3BFOztBQUVBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIG1hcmdpbjogMHB4O1xcclxcbiAgcGFkZGluZzogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnRvcCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvcC1sZWZ0IGRpdiB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWJveCB7XFxyXFxuICB3aWR0aDogMTIwcHg7XFxyXFxuICBoZWlnaHQ6IDI0cHg7XFxyXFxuICBtYXJnaW46IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWJ0biB7XFxyXFxuICB3aWR0aDogMzBweDtcXHJcXG4gIGhlaWdodDogMjRweDtcXHJcXG4gIG1hcmdpbjogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZXJyb3Ige1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcGFsZXZpb2xldHJlZDtcXHJcXG4gIGdyaWQtYXJlYTogXFxcImVycm9yXFxcIjtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5lcnItYWN0aXZlIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxufVxcclxcblxcclxcbi5jdXJyZW50LXZpZXcge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDEycHggNnB4O1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5jdXJyZW50LWxlZnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG59XFxyXFxuLmN1cnJlbnQtcmlnaHQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxufVxcclxcblxcclxcbi50ZW1wZXJhdHVyZSB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5jaXR5LW5hbWUge1xcclxcbiAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbWUge31cXHJcXG5cXHJcXG4uZGF5cy12aWV3IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuLmRheS1kaXYge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcclxcbiAgd2lkdGg6IDIwMHB4O1xcclxcbiAgaGVpZ2h0OiA0MDBweDtcXHJcXG4gIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkO1xcclxcbiAgbWFyZ2luOiA0cHg7XFxyXFxuICBwYWRkaW5nOiA0cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kYXktbmFtZSB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgbWFyZ2luOiA4cHg7XFxyXFxufVxcclxcbi5tYXgtdGVtcCxcXHJcXG4ubWluLXRlbXAge1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBtYXJnaW46IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1heC10ZW1wIGltZyB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0b3A6IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1pbi10ZW1wIGltZyB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0b3A6IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNoYW5jZS1yYWluIHtcXHJcXG4gIG1hcmdpbi10b3A6IDEycHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi5jaGFuY2UtcmFpbiBzcGFuIHtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmNoYW5jZS1yYWluIGltZyB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0b3A6IDRweDtcXHJcXG4gIHJpZ2h0OiAycHg7XFxyXFxufVxcclxcblxcclxcbi5zdW5yaXNlLFxcclxcbi5zdW5zZXQge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc3VucmlzZSBzcGFuLFxcclxcbi5zdW5zZXQgc3BhbiB7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5zdW5yaXNlIGltZyxcXHJcXG4uc3Vuc2V0IGltZyB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0b3A6IDVweDtcXHJcXG4gIHJpZ2h0OiAycHg7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qIEV4dHJhIHNtYWxsIGRldmljZXMgKHBob25lcywgNjAwcHggYW5kIGRvd24pICovXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcclxcbiAgLnRvcCwgXFxyXFxuICAuY3VycmVudC12aWV3IHtcXHJcXG4gICAgbWluLXdpZHRoOiA0MDBweDtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgfVxcclxcbiAgLyogLmN1cnJlbnQtcmlnaHQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgfSAqL1xcclxcbn1cXHJcXG4vKiBTbWFsbCBkZXZpY2VzIChwb3J0cmFpdCB0YWJsZXRzIGFuZCBsYXJnZSBwaG9uZXMsIDYwMHB4IGFuZCB1cCkgKi9cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XFxyXFxuICAudG9wLCBcXHJcXG4gIC5jdXJyZW50LXZpZXcge1xcclxcbiAgICB3aWR0aDogNjAwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8qIE1lZGl1bSBkZXZpY2VzIChsYW5kc2NhcGUgdGFibGV0cywgNzY4cHggYW5kIHVwKSAqL1xcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gIC50b3AsIFxcclxcbiAgLmN1cnJlbnQtdmlldyB7XFxyXFxuICAgIHdpZHRoOiA3MDBweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcblxcclxcbn1cXHJcXG5cXHJcXG4vKiBMYXJnZSBkZXZpY2VzIChsYXB0b3BzL2Rlc2t0b3BzLCA5OTJweCBhbmQgdXApICovXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4vKiBFeHRyYSBsYXJnZSBkZXZpY2VzIChsYXJnZSBsYXB0b3BzIGFuZCBkZXNrdG9wcywgMTIwMHB4IGFuZCB1cCkgKi9cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xcclxcblxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgY29uZmlnIGZyb20gXCIuLi9jb25maWcuanNcIjtcclxuLy8gcGMgaW1wb3J0IHZhcmlhYmxlcywgY29tbWVudCB0aGVtIG91dCBvbiBtb2JpbGVcclxuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IGRyb3AgZnJvbSBcIi4vd2F0ZXJfZHJvcF9GSUxMMF93Z2h0NDAwX0dSQUQwX29wc3oyNC5zdmdcIjtcclxuaW1wb3J0IHN1bjAgZnJvbSBcIi4vd2JfdHdpbGlnaHRfRklMTDBfd2dodDQwMF9HUkFEMF9vcHN6MjQuc3ZnXCI7XHJcbmltcG9ydCBzdW4xIGZyb20gXCIuL3diX3R3aWxpZ2h0X0ZJTEwxX3dnaHQ0MDBfR1JBRDBfb3BzejI0LnN2Z1wiO1xyXG5pbXBvcnQgYXJyb3cwIGZyb20gXCIuL3NvdXRoX0ZJTEwwX3dnaHQ0MDBfR1JBRDBfb3BzejI0LnN2Z1wiO1xyXG5pbXBvcnQgYXJyb3cxIGZyb20gXCIuL25vcnRoX0ZJTEwwX3dnaHQ0MDBfR1JBRDBfb3BzejI0LnN2Z1wiO1xyXG4vLyBwaG9uZSBpbXBvcnQgdmFyaWFibGVzLCBjb21tZW50IHRoZW0gb3V0IG9uIHBjXHJcbi8vIGNvbnN0IGRyb3AgPSBcInNyYy93YXRlcl9kcm9wX0ZJTEwwX3dnaHQ0MDBfR1JBRDBfb3BzejI0LnN2Z1wiO1xyXG4vLyBjb25zdCBzdW4wID0gXCIvc3JjL3diX3R3aWxpZ2h0X0ZJTEwwX3dnaHQ0MDBfR1JBRDBfb3BzejI0LnN2Z1wiO1xyXG4vLyBjb25zdCBzdW4xID0gXCIvc3JjL3diX3R3aWxpZ2h0X0ZJTEwxX3dnaHQ0MDBfR1JBRDBfb3BzejI0LnN2Z1wiO1xyXG4vLyBjb25zdCBhcnJvdzAgPSBcIi9zcmMvc291dGhfRklMTDBfd2dodDQwMF9HUkFEMF9vcHN6MjQuc3ZnXCI7XHJcbi8vIGNvbnN0IGFycm93MSA9IFwiL3NyYy9ub3J0aF9GSUxMMF93Z2h0NDAwX0dSQUQwX29wc3oyNC5zdmdcIjtcclxuXHJcbmNvbnN0IGFwaUtleSA9IGNvbmZpZy5BUElfS0VZO1xyXG5cclxubGV0IG5ld0NpdHkgPSBcIlwiO1xyXG5sZXQgY3VycmVudENpdHkgPSBcIldhcnNhd1wiO1xyXG5jb25zdCB3ZWVrZGF5cyA9IFtcclxuICBcIlN1bmRheVwiLFxyXG4gIFwiTW9uZGF5XCIsXHJcbiAgXCJUdWVzZGF5XCIsXHJcbiAgXCJXZWRuZXNkYXlcIixcclxuICBcIlRodXJzZGF5XCIsXHJcbiAgXCJGcmlkYXlcIixcclxuICBcIlNhdHVyZGF5XCIsXHJcbl07XHJcbmxldCBjdXJyZW50V2VhdGhlciA9IHtcclxuICBjaXR5OiBcIlwiLFxyXG4gIHRpbWU6IFwiXCIsXHJcbiAgY291bnRyeTogXCJcIixcclxuICB0ZW1wQzogXCJcIixcclxuICB0ZW1wRjogXCJcIixcclxuICBjb25kaXRpb246IFwiXCIsXHJcbiAgY29uZGl0aW9uX2ljb246IFwiXCIsXHJcbn07XHJcblxyXG5sZXQgZnV0dXJlV2VhdGhlciA9IFtcclxuICB7XHJcbiAgICBkYXRlOiBcIlwiLFxyXG4gICAgc3VucmlzZTogXCJcIixcclxuICAgIHN1bnNldDogXCJcIixcclxuICAgIGF2Z3RlbXBfYzogXCJcIixcclxuICAgIGF2Z3RlbXBfZjogXCJcIixcclxuICAgIGNvbmRpdGlvbl90ZXh0OiBcIlwiLFxyXG4gICAgY29uZGl0aW9uX2ljb246IFwiXCIsXHJcbiAgICBkYWlseV9jaGFuY2Vfb2ZfcmFpbjogXCJcIixcclxuICAgIG1heHRlbXBfYzogXCJcIixcclxuICAgIG1heHRlbXBfZjogXCJcIixcclxuICAgIG1pbnRlbXBfYzogXCJcIixcclxuICAgIG1pbnRlbXBfZjogXCJcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGRhdGU6IFwiXCIsXHJcbiAgICBzdW5yaXNlOiBcIlwiLFxyXG4gICAgc3Vuc2V0OiBcIlwiLFxyXG4gICAgYXZndGVtcF9jOiBcIlwiLFxyXG4gICAgYXZndGVtcF9mOiBcIlwiLFxyXG4gICAgY29uZGl0aW9uX3RleHQ6IFwiXCIsXHJcbiAgICBjb25kaXRpb25faWNvbjogXCJcIixcclxuICAgIGRhaWx5X2NoYW5jZV9vZl9yYWluOiBcIlwiLFxyXG4gICAgbWF4dGVtcF9jOiBcIlwiLFxyXG4gICAgbWF4dGVtcF9mOiBcIlwiLFxyXG4gICAgbWludGVtcF9jOiBcIlwiLFxyXG4gICAgbWludGVtcF9mOiBcIlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgZGF0ZTogXCJcIixcclxuICAgIHN1bnJpc2U6IFwiXCIsXHJcbiAgICBzdW5zZXQ6IFwiXCIsXHJcbiAgICBhdmd0ZW1wX2M6IFwiXCIsXHJcbiAgICBhdmd0ZW1wX2Y6IFwiXCIsXHJcbiAgICBjb25kaXRpb25fdGV4dDogXCJcIixcclxuICAgIGNvbmRpdGlvbl9pY29uOiBcIlwiLFxyXG4gICAgZGFpbHlfY2hhbmNlX29mX3JhaW46IFwiXCIsXHJcbiAgICBtYXh0ZW1wX2M6IFwiXCIsXHJcbiAgICBtYXh0ZW1wX2Y6IFwiXCIsXHJcbiAgICBtaW50ZW1wX2M6IFwiXCIsXHJcbiAgICBtaW50ZW1wX2Y6IFwiXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIoY2l0eSkge1xyXG4gIGNvbnN0IGVycm9yTXNnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lcnJvclwiKTtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGZvcmVjYXN0ID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PSR7YXBpS2V5fSZxPSR7Y2l0eX0mZGF5cz0xNGAsXHJcbiAgICApO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGZvcmVjYXN0Lmpzb24oKTtcclxuXHJcbiAgICBpZiAoIWZvcmVjYXN0Lm9rKSB7XHJcbiAgICAgIGVycm9yTXNnLmNsYXNzTGlzdC5hZGQoXCJlcnItYWN0aXZlXCIpO1xyXG4gICAgICBpZiAoZGF0YS5lcnJvci5jb2RlID09PSAxMDA2KSB7XHJcbiAgICAgICAgZXJyb3JNc2cudGV4dENvbnRlbnQgPSBcIkNpdHkgbm90IGZvdW5kXCI7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICAgYEVycm9yICR7Zm9yZWNhc3Quc3RhdHVzfSAke2ZvcmVjYXN0LnN0YXR1c1RleHR9LiAke2RhdGEuZXJyb3IubWVzc2FnZX1gLFxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZGF0YS5lcnJvci5jb2RlID09PSAxMDAzKSB7XHJcbiAgICAgICAgZXJyb3JNc2cudGV4dENvbnRlbnQgPSBcIllvdSBtdXN0IGVudGVyIGEgY2l0eSBuYW1lXCI7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICAgYEVycm9yICR7Zm9yZWNhc3Quc3RhdHVzfSAke2ZvcmVjYXN0LnN0YXR1c1RleHR9LiAke2RhdGEuZXJyb3IubWVzc2FnZX1gLFxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZGF0YS5lcnJvci5jb2RlID09PSA5OTk5KSB7XHJcbiAgICAgICAgZXJyb3JNc2cudGV4dENvbnRlbnQgPSBcIkludGVybmFsIGVycm9yLCBwbGVhc2UgdHJ5IGFnYWluXCI7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICAgYEVycm9yICR7Zm9yZWNhc3Quc3RhdHVzfSAke2ZvcmVjYXN0LnN0YXR1c1RleHR9LiAke2RhdGEuZXJyb3IubWVzc2FnZX1gLFxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZXJyb3JNc2cudGV4dENvbnRlbnQgPSBcIkVycm9yLCBwbGVhc2UgdHJ5IGFnYWluIGxhdGVyXCI7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvciAke2ZvcmVjYXN0LnN0YXR1c30gJHtmb3JlY2FzdC5zdGF0dXNUZXh0fWApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIGN1cnJlbnRXZWF0aGVyID0ge1xyXG4gICAgICBjaXR5OiBkYXRhLmxvY2F0aW9uLm5hbWUsXHJcbiAgICAgIHRpbWU6IGRhdGEubG9jYXRpb24ubG9jYWx0aW1lLFxyXG4gICAgICBjb3VudHJ5OiBkYXRhLmxvY2F0aW9uLmNvdW50cnksXHJcbiAgICAgIHRlbXBDOiBkYXRhLmN1cnJlbnQudGVtcF9jLFxyXG4gICAgICB0ZW1wRjogZGF0YS5jdXJyZW50LnRlbXBfZixcclxuICAgICAgY29uZGl0aW9uOiBkYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQsXHJcbiAgICAgIGNvbmRpdGlvbl9pY29uOiBkYXRhLmN1cnJlbnQuY29uZGl0aW9uLmljb24sXHJcbiAgICB9O1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgICAgZnV0dXJlV2VhdGhlcltpXS5kYXRlID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXRlO1xyXG4gICAgICBmdXR1cmVXZWF0aGVyW2ldLnN1bnJpc2UgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmFzdHJvLnN1bnJpc2U7XHJcbiAgICAgIGZ1dHVyZVdlYXRoZXJbaV0uc3Vuc2V0ID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5hc3Ryby5zdW5zZXQ7XHJcbiAgICAgIGZ1dHVyZVdlYXRoZXJbaV0uYXZndGVtcF9jID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkuYXZndGVtcF9jO1xyXG4gICAgICBmdXR1cmVXZWF0aGVyW2ldLmF2Z3RlbXBfZiA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5LmF2Z3RlbXBfZjtcclxuICAgICAgZnV0dXJlV2VhdGhlcltpXS5jb25kaXRpb25fdGV4dCA9XHJcbiAgICAgICAgZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkuY29uZGl0aW9uLnRleHQ7XHJcbiAgICAgIGZ1dHVyZVdlYXRoZXJbaV0uY29uZGl0aW9uX2ljb24gPVxyXG4gICAgICAgIGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5LmNvbmRpdGlvbi5pY29uO1xyXG4gICAgICBmdXR1cmVXZWF0aGVyW2ldLmRhaWx5X2NoYW5jZV9vZl9yYWluID1cclxuICAgICAgICBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5kYWlseV9jaGFuY2Vfb2ZfcmFpbjtcclxuICAgICAgZnV0dXJlV2VhdGhlcltpXS5tYXh0ZW1wX2MgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5tYXh0ZW1wX2M7XHJcbiAgICAgIGZ1dHVyZVdlYXRoZXJbaV0ubWF4dGVtcF9mID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkubWF4dGVtcF9mO1xyXG4gICAgICBmdXR1cmVXZWF0aGVyW2ldLm1pbnRlbXBfYyA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5Lm1pbnRlbXBfYztcclxuICAgICAgZnV0dXJlV2VhdGhlcltpXS5taW50ZW1wX2YgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5taW50ZW1wX2Y7XHJcbiAgICB9XHJcbiAgICBlcnJvck1zZy5jbGFzc0xpc3QucmVtb3ZlKFwiZXJyLWFjdGl2ZVwiKTtcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhmdXR1cmVXZWF0aGVyWzBdKTtcclxuXHJcbiAgICBmaWxsRG9tKCk7XHJcbiAgICAvLyBlcnJvck1zZy5jbGFzc0xpc3QuYWRkKFwiZXJyLWFjdGl2ZVwiKTtcclxuICAgIC8vIHRocm93IG5ldyBFcnJvcihmb3JlY2FzdC5zdGF0dXMgKyBcIiBcIiArIGZvcmVjYXN0LnN0YXR1c1RleHQgKyBkYXRhLmVycm9yLmNvZGUpO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgLy8gZXJyb3JNc2cuY2xhc3NMaXN0LmFkZChcImVyci1hY3RpdmVcIik7XHJcbiAgICAvLyBlcnJvck1zZy50ZXh0Q29udGVudCA9IGVyci5tZXNzYWdlO1xyXG4gICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xyXG4gICAgLy8gZXJyb3JNc2cuY2xhc3NMaXN0LmFkZChcImVyci1hY3RpdmVcIik7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhkYXRhLmVycm9yLmNvZGUgKyBcIiBcIiArIGRhdGEuZXJyb3Iuc3RhdHVzKTtcclxuICB9XHJcbiAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZURvbSgpIHtcclxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcblxyXG4gIC8vIHRvcCBuYXZpZ2F0aW9uXHJcbiAgY29uc3QgdG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCB0b3BMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBzaXRlTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgdG9wUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGlucHV0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgY29uc3QgaW5wdXRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgY29uc3QgaW5wdXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGNvbnN0IGVycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgLy8gdG9kYXkncyBmb3JlY2FzdCBlbGVtZW50c1xyXG4gIGNvbnN0IGN1cnJlbnRWaWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBjdXJyZW50TGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgY3VycmVudFJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBjdXJyQ29uZGl0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBjdXJyQ29uSWNvbiA9IG5ldyBJbWFnZSgpO1xyXG5cclxuICBjb25zdCBkYXlUaW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCB0b2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgbG9jYWxUaW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBjaXR5TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gIHRvcC5jbGFzc0xpc3QuYWRkKFwidG9wXCIpO1xyXG4gIHRvcExlZnQuY2xhc3NMaXN0LmFkZChcInRvcC1sZWZ0XCIpO1xyXG4gIHRvcFJpZ2h0LmNsYXNzTGlzdC5hZGQoXCJ0b3AtcmlnaHRcIik7XHJcbiAgaW5wdXRCb3guY2xhc3NMaXN0LmFkZChcImlucHV0LWJveFwiKTtcclxuICBpbnB1dEJ0bi5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtYnRuXCIpO1xyXG4gIHNpdGVOYW1lLnRleHRDb250ZW50ID0gXCJXZWF0aGVyIEFwcFwiO1xyXG4gIGlucHV0Qm94LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaW5wdXRcIik7XHJcbiAgaW5wdXRCb3guc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJFbnRlciBjaXR5IG5hbWVcIik7XHJcbiAgaW5wdXRCdG4uc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiaW5wdXRcIik7XHJcbiAgaW5wdXRMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJpbnB1dFwiKTtcclxuICBpbnB1dExhYmVsLnRleHRDb250ZW50ID0gXCJTZWFyY2g6XCI7XHJcbiAgaW5wdXRCdG4udGV4dENvbnRlbnQgPSBcIk9LXCI7XHJcbiAgaW5wdXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIG5ld0NpdHkgPSBpbnB1dEJveC52YWx1ZTtcclxuICAgIGNvbnNvbGUubG9nKG5ld0NpdHkpO1xyXG4gICAgZ2V0V2VhdGhlcihuZXdDaXR5KTtcclxuICAgIGlucHV0Qm94LnZhbHVlID0gXCJcIjtcclxuICB9KTtcclxuICBlcnJvci5jbGFzc0xpc3QuYWRkKFwiZXJyb3JcIik7XHJcbiAgZXJyb3IudGV4dENvbnRlbnQgPSBcIkVycm9yXCI7XHJcblxyXG4gIGN1cnJlbnRWaWV3LmNsYXNzTGlzdC5hZGQoXCJjdXJyZW50LXZpZXdcIik7XHJcbiAgY3VycmVudExlZnQuY2xhc3NMaXN0LmFkZChcImN1cnJlbnQtbGVmdFwiKTtcclxuICBjdXJyZW50UmlnaHQuY2xhc3NMaXN0LmFkZChcImN1cnJlbnQtcmlnaHRcIik7XHJcbiAgY3VyckNvbkljb24uY2xhc3NMaXN0LmFkZChcImN1cnItY29uLWljb25cIik7XHJcbiAgdG9kYXkuY2xhc3NMaXN0LmFkZChcInRvZGF5XCIpO1xyXG4gIGxvY2FsVGltZS5jbGFzc0xpc3QuYWRkKFwibG9jYWwtdGltZVwiKTtcclxuICBjaXR5TmFtZS5jbGFzc0xpc3QuYWRkKFwiY2l0eS1uYW1lXCIpO1xyXG4gIHRlbXAuY2xhc3NMaXN0LmFkZChcInRlbXBlcmF0dXJlXCIpO1xyXG5cclxuICAvLyAzLWRheSBmb3JlY2FzdCBlbGVtZW50c1xyXG4gIGNvbnN0IGRheXNWaWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgY29uc3QgZGF5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IGRheU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgY29uZGl0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IGNvbmRpdGlvbkljb24gPSBuZXcgSW1hZ2UoKTtcclxuICAgIGNvbnN0IG1heFQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgbWF4VEljb24gPSBuZXcgSW1hZ2UoKTtcclxuICAgIG1heFRJY29uLnNyYyA9IGFycm93MTtcclxuICAgIGNvbnN0IG1heFRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBjb25zdCBtaW5UID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IG1pblRJY29uID0gbmV3IEltYWdlKCk7XHJcbiAgICBtaW5USWNvbi5zcmMgPSBhcnJvdzA7XHJcbiAgICBjb25zdCBtaW5UVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgY29uc3QgY2hhbmNlUmFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBjaGFuY2VSYWluVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgY29uc3QgY2hhbmNlUmFpbkljb24gPSBuZXcgSW1hZ2UoKTtcclxuICAgIGNoYW5jZVJhaW5JY29uLnNyYyA9IGRyb3A7XHJcbiAgICBjb25zdCBzdW5yaXNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IHN1bnJpc2VJY29uID0gbmV3IEltYWdlKCk7XHJcbiAgICBzdW5yaXNlSWNvbi5zcmMgPSBzdW4wO1xyXG4gICAgY29uc3Qgc3VucmlzZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIGNvbnN0IHN1bnNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBzdW5zZXRJY29uID0gbmV3IEltYWdlKCk7XHJcbiAgICBzdW5zZXRJY29uLnNyYyA9IHN1bjE7XHJcbiAgICBjb25zdCBzdW5zZXRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcblxyXG4gICAgZGF5c1ZpZXcuY2xhc3NMaXN0LmFkZChcImRheXMtdmlld1wiKTtcclxuICAgIGRheURpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgZGF5JHtpfWApO1xyXG4gICAgZGF5RGl2LmNsYXNzTGlzdC5hZGQoXCJkYXktZGl2XCIpO1xyXG4gICAgZGF5TmFtZS5jbGFzc0xpc3QuYWRkKFwiZGF5LW5hbWVcIik7XHJcbiAgICBjb25kaXRpb25EaXYuY2xhc3NMaXN0LmFkZChcImNvbmRpdGlvbi1kaXZcIik7XHJcbiAgICBjb25kaXRpb25JY29uLmNsYXNzTGlzdC5hZGQoXCJjb25kaXRpb24taWNvblwiKTtcclxuICAgIG1heFQuY2xhc3NMaXN0LmFkZChcIm1heC10ZW1wXCIpO1xyXG4gICAgbWluVC5jbGFzc0xpc3QuYWRkKFwibWluLXRlbXBcIik7XHJcbiAgICBjaGFuY2VSYWluLmNsYXNzTGlzdC5hZGQoXCJjaGFuY2UtcmFpblwiKTtcclxuICAgIHN1bnJpc2UuY2xhc3NMaXN0LmFkZChcInN1bnJpc2VcIik7XHJcbiAgICBzdW5zZXQuY2xhc3NMaXN0LmFkZChcInN1bnNldFwiKTtcclxuXHJcbiAgICBkYXlEaXYuYXBwZW5kQ2hpbGQoZGF5TmFtZSk7XHJcbiAgICBjb25kaXRpb25EaXYuYXBwZW5kQ2hpbGQoY29uZGl0aW9uSWNvbik7XHJcbiAgICBkYXlEaXYuYXBwZW5kQ2hpbGQoY29uZGl0aW9uRGl2KTtcclxuICAgIG1heFQuYXBwZW5kQ2hpbGQobWF4VEljb24pO1xyXG4gICAgbWF4VC5hcHBlbmRDaGlsZChtYXhUVGV4dCk7XHJcbiAgICBkYXlEaXYuYXBwZW5kQ2hpbGQobWF4VCk7XHJcbiAgICBtaW5ULmFwcGVuZENoaWxkKG1pblRJY29uKTtcclxuICAgIG1pblQuYXBwZW5kQ2hpbGQobWluVFRleHQpO1xyXG4gICAgZGF5RGl2LmFwcGVuZENoaWxkKG1pblQpO1xyXG4gICAgY2hhbmNlUmFpbi5hcHBlbmRDaGlsZChjaGFuY2VSYWluSWNvbik7XHJcbiAgICBjaGFuY2VSYWluLmFwcGVuZENoaWxkKGNoYW5jZVJhaW5UZXh0KTtcclxuICAgIGRheURpdi5hcHBlbmRDaGlsZChjaGFuY2VSYWluKTtcclxuICAgIHN1bnJpc2UuYXBwZW5kQ2hpbGQoc3VucmlzZUljb24pO1xyXG4gICAgc3VucmlzZS5hcHBlbmRDaGlsZChzdW5yaXNlVGV4dCk7XHJcbiAgICBkYXlEaXYuYXBwZW5kQ2hpbGQoc3VucmlzZSk7XHJcbiAgICBzdW5zZXQuYXBwZW5kQ2hpbGQoc3Vuc2V0SWNvbik7XHJcbiAgICBzdW5zZXQuYXBwZW5kQ2hpbGQoc3Vuc2V0VGV4dCk7XHJcbiAgICBkYXlEaXYuYXBwZW5kQ2hpbGQoc3Vuc2V0KTtcclxuICAgIGRheXNWaWV3LmFwcGVuZENoaWxkKGRheURpdik7XHJcbiAgfVxyXG5cclxuICB0b3BMZWZ0LmFwcGVuZENoaWxkKHNpdGVOYW1lKTtcclxuICB0b3BSaWdodC5hcHBlbmRDaGlsZChpbnB1dExhYmVsKTtcclxuICB0b3BSaWdodC5hcHBlbmRDaGlsZChpbnB1dEJveCk7XHJcbiAgdG9wUmlnaHQuYXBwZW5kQ2hpbGQoaW5wdXRCdG4pO1xyXG4gIHRvcFJpZ2h0LmFwcGVuZENoaWxkKGVycm9yKTtcclxuICB0b3AuYXBwZW5kQ2hpbGQodG9wTGVmdCk7XHJcbiAgdG9wLmFwcGVuZENoaWxkKHRvcFJpZ2h0KTtcclxuXHJcbiAgY3VycmVudExlZnQuYXBwZW5kQ2hpbGQoY2l0eU5hbWUpO1xyXG4gIGN1cnJlbnRMZWZ0LmFwcGVuZENoaWxkKHRvZGF5KTtcclxuICBjdXJyZW50TGVmdC5hcHBlbmRDaGlsZChsb2NhbFRpbWUpO1xyXG4gIGN1cnJDb25kaXRpb24uYXBwZW5kQ2hpbGQoY3VyckNvbkljb24pO1xyXG4gIGN1cnJlbnRSaWdodC5hcHBlbmRDaGlsZCh0ZW1wKTtcclxuICBjdXJyZW50UmlnaHQuYXBwZW5kQ2hpbGQoY3VyckNvbmRpdGlvbik7XHJcbiAgY3VycmVudFZpZXcuYXBwZW5kQ2hpbGQoY3VycmVudExlZnQpO1xyXG4gIGN1cnJlbnRWaWV3LmFwcGVuZENoaWxkKGN1cnJlbnRSaWdodCk7XHJcblxyXG4gIGJvZHkuYXBwZW5kQ2hpbGQodG9wKTtcclxuICBib2R5LmFwcGVuZENoaWxkKGN1cnJlbnRWaWV3KTtcclxuICBib2R5LmFwcGVuZENoaWxkKGRheXNWaWV3KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZmlsbERvbSgpIHtcclxuICBjb25zdCBjaXR5TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2l0eS1uYW1lXCIpO1xyXG4gIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXBlcmF0dXJlXCIpO1xyXG4gIGNvbnN0IGN1cnJDb25JY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXJyLWNvbi1pY29uXCIpO1xyXG4gIGNvbnN0IHRvZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RheVwiKTtcclxuICBjb25zdCBsb2NhbFRpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvY2FsLXRpbWVcIik7XHJcblxyXG4gIGNvbnN0IHRvZGF5V2VlayA9IG5ldyBEYXRlKGAke2N1cnJlbnRXZWF0aGVyLnRpbWV9YCk7XHJcbiAgLy8gbW9udGggLSBmcm9tIDAgdG8gMTEsIHNvIG5lZWQgdG8gYWRkICsxXHJcbiAgdG9kYXkudGV4dENvbnRlbnQgPSBgVG9kYXkgaXMgJHtcclxuICAgIHdlZWtkYXlzW3RvZGF5V2Vlay5nZXREYXkoKV1cclxuICB9LCAke3RvZGF5V2Vlay5nZXREYXRlKCl9LiR7XHJcbiAgICB0b2RheVdlZWsuZ2V0TW9udGgoKSArIDFcclxuICB9LiR7dG9kYXlXZWVrLmdldEZ1bGxZZWFyKCl9LiBgO1xyXG4gIGxvY2FsVGltZS50ZXh0Q29udGVudCA9IGBMb2NhbCB0aW1lOiAke3RvZGF5V2Vlay5nZXRIb3VycygpfToke3RvZGF5V2Vlay5nZXRNaW51dGVzKCl9LmA7XHJcbiAgY3VyckNvbkljb24uc3JjID0gYGh0dHBzOiR7Y3VycmVudFdlYXRoZXIuY29uZGl0aW9uX2ljb259YDtcclxuXHJcbiAgY2l0eU5hbWUudGV4dENvbnRlbnQgPSBjdXJyZW50V2VhdGhlci5jaXR5O1xyXG4gIHRlbXAudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50V2VhdGhlci50ZW1wQ30gwrBDYDtcclxuXHJcbiAgLy8gd2VhdGhlciBmb3JlY2FzdCBmb3IgMyBkYXlzIC0gZmlsbCB3aXRoIGZldGNoZWQgZGF0YVxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XHJcbiAgICBjb25zdCBkYXlOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2RheSR7aX0gLmRheS1uYW1lYCk7XHJcbiAgICBjb25zdCBtYXhUID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2RheSR7aX0gLm1heC10ZW1wIHNwYW5gKTtcclxuICAgIGNvbnN0IG1pblQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZGF5JHtpfSAubWluLXRlbXAgc3BhbmApO1xyXG4gICAgY29uc3QgY29uZGl0aW9uSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNkYXkke2l9IC5jb25kaXRpb24taWNvbmApO1xyXG4gICAgY29uc3QgY2hhbmNlUmFpblRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZGF5JHtpfSAuY2hhbmNlLXJhaW4gc3BhbmApO1xyXG4gICAgY29uc3Qgc3VucmlzZVRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZGF5JHtpfSAuc3VucmlzZSBzcGFuYCk7XHJcbiAgICBjb25zdCBzdW5zZXRUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2RheSR7aX0gLnN1bnNldCBzcGFuYCk7XHJcblxyXG4gICAgaWYgKGkgPT09IDApIHtcclxuICAgICAgZGF5TmFtZS50ZXh0Q29udGVudCA9IFwiVG9kYXlcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGRheU51bSA9IG5ldyBEYXRlKGAke2Z1dHVyZVdlYXRoZXJbaV0uZGF0ZX1gKS5nZXREYXkoKTtcclxuICAgICAgZGF5TmFtZS50ZXh0Q29udGVudCA9IHdlZWtkYXlzW2RheU51bV07XHJcbiAgICB9XHJcblxyXG4gICAgY29uZGl0aW9uSWNvbi5zcmMgPSBgaHR0cHM6JHtmdXR1cmVXZWF0aGVyW2ldLmNvbmRpdGlvbl9pY29ufWA7XHJcbiAgICBtYXhULnRleHRDb250ZW50ID0gYCR7ZnV0dXJlV2VhdGhlcltpXS5tYXh0ZW1wX2N9IMKwQ2A7XHJcbiAgICBtaW5ULnRleHRDb250ZW50ID0gYCR7ZnV0dXJlV2VhdGhlcltpXS5taW50ZW1wX2N9IMKwQ2A7XHJcbiAgICBjaGFuY2VSYWluVGV4dC50ZXh0Q29udGVudCA9IGAke2Z1dHVyZVdlYXRoZXJbaV0uZGFpbHlfY2hhbmNlX29mX3JhaW59JWA7XHJcbiAgICBzdW5yaXNlVGV4dC50ZXh0Q29udGVudCA9IGZ1dHVyZVdlYXRoZXJbaV0uc3VucmlzZTtcclxuICAgIHN1bnNldFRleHQudGV4dENvbnRlbnQgPSBmdXR1cmVXZWF0aGVyW2ldLnN1bnNldDtcclxuICB9XHJcbn1cclxuXHJcbmNyZWF0ZURvbSgpO1xyXG5nZXRXZWF0aGVyKGN1cnJlbnRDaXR5KTtcclxuXHJcbi8qXHJcbkZ1dHVyZSB3ZWF0aGVyIC0gMyBkYXlzXHJcbjMgY29sdW1ucywgZWFjaCBvZiB0aGVtIGhhdmluZ1xyXG5kYXlcclxudGVtcFxyXG50ZW1wIGF0IG5pZ2h0P1xyXG5jb25kaXRpb25cclxuaW1nIG9mIGNvbmRpdGlvblxyXG5yYWluIGNoYW5jZT9cclxuKi9cclxuXHJcbi8qIFxyXG5pbnB1dCBjaXR5IG5hbWVcclxuaW5wdXQgZmllbGQgYW5kIG9rIGJ1dHRvblxyXG5vbmNlIHVzZXIgY2xpY2tzIG9rL3ByZXNzZXMgZW50ZXIsIGNoYW5nZSB0aGUgZm9sbG93aW5nOlxyXG5uZXdDaXR5ID0gZW50ZXJlZCB2YWx1ZVxyXG5mZXRjaCBmcm9tIGFwaSAtIGN1cnJlbnQgd2VhdGhlciBhbmQgZnV0dXJlIHdlYXRoZXJcclxuaW4gY2FzZSBvZiBlcnJvcjogc2hvdyBhIG1lc3NhZ2UgdG8gdHJ5IGFnYWluLiBkaWZmZXJlbnQgZXJyb3Igd2hlbiB0aGUgY2l0eSBkb2VzbnQgZXhpc3QsIGRpZmZlcmVudCBpbiBjYXNlIG9mIGEgbmV0d29yayBlcnJvclxyXG5pbiBjYXNlIGl0IHdvcmtzOlxyXG5jdXJyZW50Q2l0eSA9IG5ld0NpdHlcclxuZmlsbCB0aGUgZG9tIHdpdGggZmV0Y2hlZCB2YWx1ZXNcclxuXHJcbiovXHJcblxyXG4vKlxyXG5sXHJcblNlYXJjaDpcclxuYWRkIGV2ZW50IGxpc3RlbmVyIGZvciBlbnRlciBpbiBpbnB1dCBib3hcclxuZXJyb3I6IENpdHkgbm90IGZvdW5kLlxyXG5FcnJvciwgcGxlYXNlIHRyeSBhZ2Fpbi5cclxuXHJcbnByb2JsZW0gd2l0aCBob3VycywgbWludXRlcyBhbmQgbW9udGhzIC0gaXQgc2hvd3MgMSBudW1iZXIgaW5zdGVhZCBvZiAwMVxyXG5kaWZmZXJlbnQgZXJyb3JzIGZvciBkaWZmZXJlbnQgY29kZXNcclxuKi9cclxuIl0sIm5hbWVzIjpbImNvbmZpZyIsIkFQSV9LRVkiLCJkcm9wIiwic3VuMCIsInN1bjEiLCJhcnJvdzAiLCJhcnJvdzEiLCJhcGlLZXkiLCJuZXdDaXR5IiwiY3VycmVudENpdHkiLCJ3ZWVrZGF5cyIsImN1cnJlbnRXZWF0aGVyIiwiY2l0eSIsInRpbWUiLCJjb3VudHJ5IiwidGVtcEMiLCJ0ZW1wRiIsImNvbmRpdGlvbiIsImNvbmRpdGlvbl9pY29uIiwiZnV0dXJlV2VhdGhlciIsImRhdGUiLCJzdW5yaXNlIiwic3Vuc2V0IiwiYXZndGVtcF9jIiwiYXZndGVtcF9mIiwiY29uZGl0aW9uX3RleHQiLCJkYWlseV9jaGFuY2Vfb2ZfcmFpbiIsIm1heHRlbXBfYyIsIm1heHRlbXBfZiIsIm1pbnRlbXBfYyIsIm1pbnRlbXBfZiIsImdldFdlYXRoZXIiLCJlcnJvck1zZyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImZvcmVjYXN0IiwiZmV0Y2giLCJkYXRhIiwianNvbiIsIm9rIiwiY2xhc3NMaXN0IiwiYWRkIiwiZXJyb3IiLCJjb2RlIiwidGV4dENvbnRlbnQiLCJFcnJvciIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJtZXNzYWdlIiwibG9jYXRpb24iLCJuYW1lIiwibG9jYWx0aW1lIiwiY3VycmVudCIsInRlbXBfYyIsInRlbXBfZiIsInRleHQiLCJpY29uIiwiaSIsImZvcmVjYXN0ZGF5IiwiYXN0cm8iLCJkYXkiLCJyZW1vdmUiLCJmaWxsRG9tIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZURvbSIsImJvZHkiLCJ0b3AiLCJjcmVhdGVFbGVtZW50IiwidG9wTGVmdCIsInNpdGVOYW1lIiwidG9wUmlnaHQiLCJpbnB1dExhYmVsIiwiaW5wdXRCb3giLCJpbnB1dEJ0biIsImN1cnJlbnRWaWV3IiwiY3VycmVudExlZnQiLCJjdXJyZW50UmlnaHQiLCJjdXJyQ29uZGl0aW9uIiwiY3VyckNvbkljb24iLCJJbWFnZSIsImRheVRpbWUiLCJ0b2RheSIsImxvY2FsVGltZSIsImNpdHlOYW1lIiwidGVtcCIsInNldEF0dHJpYnV0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJ2YWx1ZSIsImRheXNWaWV3IiwiZGF5RGl2IiwiZGF5TmFtZSIsImNvbmRpdGlvbkRpdiIsImNvbmRpdGlvbkljb24iLCJtYXhUIiwibWF4VEljb24iLCJzcmMiLCJtYXhUVGV4dCIsIm1pblQiLCJtaW5USWNvbiIsIm1pblRUZXh0IiwiY2hhbmNlUmFpbiIsImNoYW5jZVJhaW5UZXh0IiwiY2hhbmNlUmFpbkljb24iLCJzdW5yaXNlSWNvbiIsInN1bnJpc2VUZXh0Iiwic3Vuc2V0SWNvbiIsInN1bnNldFRleHQiLCJhcHBlbmRDaGlsZCIsInRvZGF5V2VlayIsIkRhdGUiLCJnZXREYXkiLCJnZXREYXRlIiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImRheU51bSJdLCJzb3VyY2VSb290IjoiIn0=