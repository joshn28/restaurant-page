/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n    --primary-color: black;\\n    --secondary-color: white;\\n    font-family: 'Roboto Slab', serif;\\n    font-size: 16px;\\n}\\n\\nbody, html {\\n    margin: 0;\\n    padding: 0;\\n}\\n\\nmain {\\n    display: flex;\\n    box-sizing: border-box;\\n}\\n\\nbutton {\\n    background-color: var(--primary-color);\\n    color: var(--secondary-color);\\n    align-self: flex-start;\\n    padding: 10px 20px;\\n    font-family: inherit;\\n    font-weight: bold;\\n    font-size: inherit;\\n}\\n\\nbutton:hover {\\n    cursor: pointer;\\n    background-color: var(--secondary-color);\\n    color: var(--primary-color);\\n}\\n\\n#content {\\n    box-sizing: border-box;\\n    height: 100vh;\\n    display: grid;\\n    grid-template-rows: 6vh 94vh;\\n    grid-template-columns: 1fr;\\n}\\n\\n/* Nav Bar */\\n\\n.nav-bar {\\n    margin: 0;\\n    padding: 0;\\n    height: 100%;\\n    display: flex;\\n    list-style: none;\\n    background-color: var(--primary-color);\\n    align-items: center;\\n    justify-content: center;\\n}\\n\\n.nav-bar li {\\n    padding: 0 60px;\\n}\\n\\n.nav-bar li span {\\n    color: var(--secondary-color);\\n}\\n\\n.nav-bar li span:hover {\\n    border-bottom: 2px solid var(--secondary-color);\\n    cursor: pointer;\\n}\\n\\n/* Home Page */\\n\\n.home-main > div {\\n    box-sizing: inherit;\\n    width: 40vw;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\n.home-main img {\\n    box-sizing: inherit;\\n    width: 60vw;\\n}\\n\\n.home-intro {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: center;\\n    width: 60%;\\n}\\n\\n.home-intro p {\\n    margin: 10px 0;\\n}\\n\\n.home-intro p:first-of-type {\\n    font-size: 48px;\\n    font-weight: bold;\\n}\\n\\n.home-intro button {\\n    margin-top: 10px;\\n}\\n\\n/* Contact Page */\\n\\n.contact-form {\\n    width: 350px;\\n    height: min-content;\\n    margin: auto;\\n    padding: 30px 75px;\\n    border: 1px solid black;\\n    background-color: rgba(255, 255, 255, 0.6);\\n}\\n\\n.contact-form input, \\n.contact-form textarea {\\n    appearance: none;\\n    padding: 10px;\\n    font-size: inherit;\\n    font-family: inherit;\\n    margin-bottom: 20px;\\n}\\n\\n.contact-form input {\\n    border: 1px solid black;\\n}\\n\\n.contact-form div {\\n    display: flex;\\n    flex-direction: column;\\n}\\n\\n.contact-form h1,\\n.contact-form p {\\n    text-align: center;\\n    margin: 0 0 20px;\\n}\\n\\n.contact-form button {\\n    display: block;\\n    margin: 0 auto;\\n}\\n\\n.contact-form textarea {\\n    resize: vertical;\\n    overflow: auto;\\n}\\n\\n.contact-msg {\\n    text-align: center;\\n}\\n\\n/* Menu Page */\\n\\n.menu-container {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    margin: 0 auto;\\n}\\n\\n.menu {\\n    height: min-content;\\n    width: 70vw;\\n    padding: 20px;\\n    display: grid;\\n    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\\n    gap: 50px 10px;\\n    grid-auto-rows: max(250px);\\n}\\n\\n.menu-item {\\n    box-sizing: border-box;\\n}\\n\\n.menu-item span {\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    height: 10%;\\n}\\n\\n.menu-item img {\\n    height: 90%;\\n    width: 100%;\\n}\\n\\n.menu-description {\\n    display: flex;\\n    justify-content: space-between;   \\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact/contact.js":
/*!********************************!*\
  !*** ./src/contact/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _contact_bg_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-bg.jpg */ \"./src/contact/contact-bg.jpg\");\n\n\nfunction contactPage() {\n    const main = document.createElement('main');\n    const contactForm = document.createElement('form');\n    \n    contactForm.classList.add('contact-form');\n\n    main.style.cssText = `background: url('${_contact_bg_jpg__WEBPACK_IMPORTED_MODULE_0__}'); background-size: cover;`;\n    main.appendChild(contactForm);\n\n    const contactHeader = document.createElement('h1');\n    const contactMsg = document.createElement('p');\n\n    contactHeader.textContent = 'Get In Touch';\n    contactMsg.textContent = 'This is a fake service.';\n\n    contactForm.appendChild(contactHeader);\n    contactForm.appendChild(contactMsg);\n\n    const nameDiv = document.createElement('div');\n    const nameLabel = document.createElement('label');\n    const nameInput = document.createElement('input');\n\n    nameLabel.setAttribute('for', 'name');\n    nameLabel.textContent = 'Name:';\n\n    nameInput.setAttribute('type', 'text');\n    nameInput.setAttribute('id', 'name');\n    nameInput.setAttribute('name', 'name');\n\n    nameDiv.appendChild(nameLabel);\n    nameDiv.appendChild(nameInput);\n    contactForm.appendChild(nameDiv);\n\n    const numberDiv = document.createElement('div');\n    const numberLabel = document.createElement('label');\n    const numberInput = document.createElement('input');\n\n    numberLabel.setAttribute('for', 'phone-number');\n    numberLabel.textContent = 'Phone Number:';\n\n    numberInput.setAttribute('type', 'tel');\n    numberInput.setAttribute('id', 'phone-number');\n    numberInput.setAttribute('name', 'number');\n\n    numberDiv.appendChild(numberLabel);\n    numberDiv.appendChild(numberInput);\n    contactForm.appendChild(numberDiv);\n\n    const emailDiv = document.createElement('div');\n    const emailLabel = document.createElement('label');\n    const emailInput = document.createElement('input');\n\n    emailLabel.setAttribute('for', 'mail');\n    emailLabel.textContent = 'Email:';\n\n    emailInput.setAttribute('type', 'email');\n    emailInput.setAttribute('id', 'mail');\n    emailInput.setAttribute('name', 'email');\n\n    emailDiv.appendChild(emailLabel);\n    emailDiv.appendChild(emailInput);\n    contactForm.appendChild(emailDiv);\n\n    const commentDiv = document.createElement('div');\n    const commentLabel = document.createElement('label');\n    const commentInput = document.createElement('textarea');\n\n    commentLabel.setAttribute('for', 'comment');\n    commentLabel.textContent = 'Comments:';\n\n    commentInput.setAttribute('name', 'comments');\n    commentInput.setAttribute('id', 'comment');\n    commentInput.setAttribute('rows', '5');\n\n    commentDiv.appendChild(commentLabel);\n    commentDiv.appendChild(commentInput);\n    contactForm.appendChild(commentDiv);\n\n    const btn = document.createElement('button');\n    \n    btn.setAttribute('type', 'button');\n    btn.textContent = 'Submit';\n\n    contactForm.appendChild(btn);\n\n    return main;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactPage);\n\n//# sourceURL=webpack://restaurant-page/./src/contact/contact.js?");

/***/ }),

/***/ "./src/home/home.js":
/*!**************************!*\
  !*** ./src/home/home.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _homepage_photo_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage-photo.jpg */ \"./src/home/homepage-photo.jpg\");\n\n\nfunction homePage() {\n    const main = document.createElement('main');\n    const div = document.createElement('div');\n    const contentDiv = document.createElement('div');\n\n    main.classList.add('home-main');\n    main.appendChild(div);\n    div.appendChild(contentDiv);\n\n    contentDiv.classList.add('home-intro');\n\n    const pContents = [\n        'Once you try it, you will love it.',\n        'In tempor aliquet est ac iaculis. Donec eu eros et ipsum accumsan sollicitudin. Sed at tellus a justo pulvinar aliquam eu ut nulla. Duis molestie dolor quis bibendum lobortis. Proin.'\n    ];\n\n    pContents.forEach(content => {\n        const p = document.createElement('p');\n        p.textContent = content;\n\n        contentDiv.appendChild(p);\n    });\n\n    const button = document.createElement('button');\n    button.setAttribute('type', 'button');\n    button.textContent = 'Explore';\n\n    contentDiv.appendChild(button);\n\n    const mainImg = new Image();\n    mainImg.src = _homepage_photo_jpg__WEBPACK_IMPORTED_MODULE_0__;\n\n    main.appendChild(mainImg);\n\n    return main;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage);\n\n//# sourceURL=webpack://restaurant-page/./src/home/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _nav_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav-bar */ \"./src/nav-bar.js\");\n/* harmony import */ var _home_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home */ \"./src/home/home.js\");\n/* harmony import */ var _contact_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact/contact */ \"./src/contact/contact.js\");\n/* harmony import */ var _menu_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu/menu */ \"./src/menu/menu.js\");\n\n\n\n\n\n\nconst content = document.querySelector(\"#content\");\n\ncontent.appendChild((0,_nav_bar__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\ncontent.appendChild((0,_home_home__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n\nconst homeLink = document.querySelector('.home-link');\nconst contactLink = document.querySelector('.contact-link');\nconst menuLink = document.querySelector('.menu-link');\n\nhomeLink.addEventListener('click', () => {\n    const main = document.querySelector('main');\n    main.remove();\n\n    content.appendChild((0,_home_home__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n});\n\ncontactLink.addEventListener('click', () => {\n    const main = document.querySelector('main');\n    main.remove();\n\n    content.appendChild((0,_contact_contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\n});\n\nmenuLink.addEventListener('click', () => {\n    const main = document.querySelector('main');\n    main.remove();\n\n    content.appendChild((0,_menu_menu__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\n});\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu/menu.js":
/*!**************************!*\
  !*** ./src/menu/menu.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _pancakes_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pancakes.jpg */ \"./src/menu/pancakes.jpg\");\n/* harmony import */ var _burrito_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./burrito.jpg */ \"./src/menu/burrito.jpg\");\n/* harmony import */ var _burger_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./burger.jpg */ \"./src/menu/burger.jpg\");\n/* harmony import */ var _pasta_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pasta.jpg */ \"./src/menu/pasta.jpg\");\n/* harmony import */ var _ramen_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ramen.jpg */ \"./src/menu/ramen.jpg\");\n/* harmony import */ var _salad_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./salad.jpg */ \"./src/menu/salad.jpg\");\n/* harmony import */ var _pizza_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pizza.jpg */ \"./src/menu/pizza.jpg\");\n/* harmony import */ var _sausage_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sausage.jpg */ \"./src/menu/sausage.jpg\");\n\n\n\n\n\n\n\n\n\nfunction menuPage() {\n    const main = document.createElement('main');\n    const menuDiv = document.createElement('div');\n    const menu = document.createElement('div');\n    const header = document.createElement('h1');\n\n    header.textContent = 'Our Best Dishes';\n    menu.classList.add('menu');\n\n    menuDiv.classList.add('menu-container');\n    menuDiv.appendChild(header);\n    menuDiv.appendChild(menu);\n    \n    main.appendChild(menuDiv);\n\n    const menuItems = [\n        {\n            name: 'Pancakes',\n            src: _pancakes_jpg__WEBPACK_IMPORTED_MODULE_0__,\n            price: '$7.99',\n        },\n        {\n            name: 'Burrito',\n            src: _burrito_jpg__WEBPACK_IMPORTED_MODULE_1__,\n            price: '$3.19',\n        },\n        {\n            name: 'Burger',\n            src: _burger_jpg__WEBPACK_IMPORTED_MODULE_2__,\n            price: '$6.99',\n        },\n        {\n            name: 'Pasta',\n            src: _pasta_jpg__WEBPACK_IMPORTED_MODULE_3__,\n            price: '$18.97',\n        },\n        {\n            name: 'Ramen',\n            src: _ramen_jpg__WEBPACK_IMPORTED_MODULE_4__,\n            price: '$14.29',\n        },\n        {\n            name: 'Salad',\n            src: _salad_jpg__WEBPACK_IMPORTED_MODULE_5__,\n            price: '$25.25',\n        },\n        {\n            name: 'Pizza',\n            src: _pizza_jpg__WEBPACK_IMPORTED_MODULE_6__,\n            price: '$12.99',\n        },\n        {\n            name: 'Cooked Sausage',\n            src: _sausage_jpg__WEBPACK_IMPORTED_MODULE_7__,\n            price: '$9.97'\n        },\n    ];\n\n    menuItems.forEach(item => {\n        const itemDiv = document.createElement('div');\n        const itemImg = new Image();\n\n        const itemInfo = document.createElement('div');\n        const itemDesc = document.createElement('span');\n        const itemPrice = document.createElement('span');\n\n        itemDiv.classList.add('menu-item');\n        itemInfo.classList.add('menu-description');\n\n        itemImg.src = item.src;\n        itemPrice.textContent = item.price;\n        itemDesc.textContent = item.name;\n\n        itemInfo.appendChild(itemDesc);\n        itemInfo.appendChild(itemPrice);\n\n        itemDiv.appendChild(itemImg);\n        itemDiv.appendChild(itemInfo);\n\n        menu.appendChild(itemDiv);\n    });\n\n    return main;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPage);\n\n//# sourceURL=webpack://restaurant-page/./src/menu/menu.js?");

/***/ }),

/***/ "./src/nav-bar.js":
/*!************************!*\
  !*** ./src/nav-bar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction navBar() {\n    const nav = document.createElement('nav');\n    const ul = document.createElement('ul');\n\n    ul.classList.add('nav-bar');\n    nav.appendChild(ul);\n\n    const linkNames = [\n        'Home',\n        'Menu',\n        'Contact',\n    ];\n\n    linkNames.forEach(name => {\n        const li = document.createElement('li');\n        const span = document.createElement('span');\n        \n        span.classList.add(`${name.toLowerCase()}-link`);\n        span.textContent = name;\n\n        li.appendChild(span);\n        ul.appendChild(li);\n    });\n\n    return nav;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navBar);\n\n//# sourceURL=webpack://restaurant-page/./src/nav-bar.js?");

/***/ }),

/***/ "./src/contact/contact-bg.jpg":
/*!************************************!*\
  !*** ./src/contact/contact-bg.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9cb44b4adb5243c6cae2.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/contact/contact-bg.jpg?");

/***/ }),

/***/ "./src/home/homepage-photo.jpg":
/*!*************************************!*\
  !*** ./src/home/homepage-photo.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"86a88e828b99ae27d888.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/home/homepage-photo.jpg?");

/***/ }),

/***/ "./src/menu/burger.jpg":
/*!*****************************!*\
  !*** ./src/menu/burger.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d2ced6d4f0527273f093.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/menu/burger.jpg?");

/***/ }),

/***/ "./src/menu/burrito.jpg":
/*!******************************!*\
  !*** ./src/menu/burrito.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c67ca87ef6557ccdf448.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/menu/burrito.jpg?");

/***/ }),

/***/ "./src/menu/pancakes.jpg":
/*!*******************************!*\
  !*** ./src/menu/pancakes.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"522a7f630d44eee4955d.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/menu/pancakes.jpg?");

/***/ }),

/***/ "./src/menu/pasta.jpg":
/*!****************************!*\
  !*** ./src/menu/pasta.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4ffccf383237578916d3.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/menu/pasta.jpg?");

/***/ }),

/***/ "./src/menu/pizza.jpg":
/*!****************************!*\
  !*** ./src/menu/pizza.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5b0345c8808665370987.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/menu/pizza.jpg?");

/***/ }),

/***/ "./src/menu/ramen.jpg":
/*!****************************!*\
  !*** ./src/menu/ramen.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2418f86c2c515825d69c.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/menu/ramen.jpg?");

/***/ }),

/***/ "./src/menu/salad.jpg":
/*!****************************!*\
  !*** ./src/menu/salad.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"441f7830dfdf6a0ebb1b.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/menu/salad.jpg?");

/***/ }),

/***/ "./src/menu/sausage.jpg":
/*!******************************!*\
  !*** ./src/menu/sausage.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"252baa0279e18ff1e49d.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/menu/sausage.jpg?");

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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;