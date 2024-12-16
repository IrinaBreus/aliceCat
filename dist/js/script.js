/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_hamburger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/hamburger */ \"./src/js/modules/hamburger.js\");\n// import calcScroll from './modules/calcScroll';\r\n// import scrollUp from './modules/scrollUp';\r\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n'use stricti';\r\n\r\n(0,_modules_hamburger__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n// scrollUp();\r\n// calcScroll();\r\n});\n\n//# sourceURL=webpack://gulp-start/./src/js/main.js?");

/***/ }),

/***/ "./src/js/modules/calcScroll.js":
/*!**************************************!*\
  !*** ./src/js/modules/calcScroll.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst calcScroll = () => {\r\n    let div = document.createElement('div');\r\n    div.style.width = '50px';\r\n    div.style.height = '50px';\r\n    div.style.overflowY = 'scroll';\r\n    div.style.visibility = 'hidden';\r\n    document.body.append(div);\r\n\r\n    let scrollWidth = div.offsetWidth - div.clientWidth;\r\n    div.remove();\r\n    return scrollWidth;\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (calcScroll);\r\n\r\n// Применение:\r\n// const scroll = calcScroll();\r\n// при открытии модалки добавить\r\n// document.body.style.marginRight = `${scroll}px`;\r\n// при закрытии модалки добавить\r\n// document.body.style.marginRight = '0px';\n\n//# sourceURL=webpack://gulp-start/./src/js/modules/calcScroll.js?");

/***/ }),

/***/ "./src/js/modules/hamburger.js":
/*!*************************************!*\
  !*** ./src/js/modules/hamburger.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _calcScroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calcScroll */ \"./src/js/modules/calcScroll.js\");\n\r\n\r\nconst hamburger = () => {\r\n    try {\r\n        const trigger = document.querySelector('.nav-panel__hamburger'),\r\n              menu = document.querySelector('.nav-panel__overlay'),\r\n              menuItems = document.querySelectorAll('.nav-panel__menu-item a');\r\n\r\n        const scroll = (0,_calcScroll__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\n        trigger.addEventListener('click', () => {\r\n            menu.classList.toggle('active');\r\n            trigger.classList.toggle('active');\r\n            if (menu.classList.contains('active')) {\r\n                document.body.style.overflow = 'hidden';\r\n                document.body.style.marginRight = `${scroll}px`;\r\n            } else {\r\n                document.body.style.overflow = '';\r\n                document.body.style.marginRight = '0px';\r\n            }\r\n        })\r\n        \r\n        document.addEventListener('keydown', (e) => {\r\n            if (e.code === 'Escape' && menu.classList.contains('active')) {\r\n                closeMenu();\r\n                console.log(e.code);\r\n            } \r\n        });\r\n\r\n        menu.addEventListener('click', (e) => {\r\n            if (e.target === menu && menu.classList.contains('active')) {\r\n                closeMenu();\r\n            }\r\n        });\r\n\r\n        menuItems.forEach(item => {\r\n            item.addEventListener('click', () => {\r\n                closeMenu();\r\n            })\r\n        })\r\n        \r\n        function closeMenu() {\r\n            menu.classList.remove('active');\r\n            trigger.classList.remove('active');\r\n            document.body.style.overflow = '';\r\n            document.body.style.marginRight = '0px';\r\n        }\r\n    } catch (error) {}\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (hamburger);\n\n//# sourceURL=webpack://gulp-start/./src/js/modules/hamburger.js?");

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;