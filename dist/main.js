/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _profile_gateway_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile/gateway.js */ \"./src/profile/gateway.js\");\n/* harmony import */ var _profile_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile/index.js */ \"./src/profile/index.js\");\n// file path: src/index.js\r\n\r\n\r\n\r\n\r\nObject(_profile_gateway_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('github').then((userData) =>\r\n  Object(_profile_index_js__WEBPACK_IMPORTED_MODULE_1__[\"printProfile\"])({\r\n    name: userData.name,\r\n    company: userData.location,\r\n  })\r\n);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFNkM7QUFDSzs7QUFFbEQsbUVBQVM7QUFDVCxFQUFFLHNFQUFZO0FBQ2Q7QUFDQTtBQUNBLEdBQUc7QUFDSCIsImZpbGUiOiIuL3NyYy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGZpbGUgcGF0aDogc3JjL2luZGV4LmpzXHJcblxyXG5pbXBvcnQgZmV0Y2hVc2VyIGZyb20gJy4vcHJvZmlsZS9nYXRld2F5LmpzJztcclxuaW1wb3J0IHsgcHJpbnRQcm9maWxlIH0gZnJvbSAnLi9wcm9maWxlL2luZGV4LmpzJztcclxuXHJcbmZldGNoVXNlcignZ2l0aHViJykudGhlbigodXNlckRhdGEpID0+XHJcbiAgcHJpbnRQcm9maWxlKHtcclxuICAgIG5hbWU6IHVzZXJEYXRhLm5hbWUsXHJcbiAgICBjb21wYW55OiB1c2VyRGF0YS5sb2NhdGlvbixcclxuICB9KVxyXG4pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/profile/gateway.js":
/*!********************************!*\
  !*** ./src/profile/gateway.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return fetchUser; });\n// file path: src/profile/gateway.js\r\n\r\nasync function fetchUser(userId) {\r\n  const response = await fetch(`https://api.github.com/users/${userId}`);\r\n  if (!response.ok) {\r\n    throw new Error('Failed to get user data');\r\n  }\r\n  return await response.json();\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcHJvZmlsZS9nYXRld2F5LmpzP2MyMzUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBOztBQUVlO0FBQ2YsK0RBQStELE9BQU87QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3NyYy9wcm9maWxlL2dhdGV3YXkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBmaWxlIHBhdGg6IHNyYy9wcm9maWxlL2dhdGV3YXkuanNcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGZldGNoVXNlcih1c2VySWQpIHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzLyR7dXNlcklkfWApO1xyXG4gIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGdldCB1c2VyIGRhdGEnKTtcclxuICB9XHJcbiAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/profile/gateway.js\n");

/***/ }),

/***/ "./src/profile/index.js":
/*!******************************!*\
  !*** ./src/profile/index.js ***!
  \******************************/
/*! exports provided: printProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"printProfile\", function() { return printProfile; });\n// file path: src/profile/index.js\r\n\r\nconst printProfile = (profileData) => {\r\n  const { name, company } = profileData;\r\n  console.log(`${name} from ${company}`);\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcHJvZmlsZS9pbmRleC5qcz9hNjkyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTs7QUFFTztBQUNQLFNBQVMsZ0JBQWdCO0FBQ3pCLGlCQUFpQixLQUFLLFFBQVEsUUFBUTtBQUN0QyIsImZpbGUiOiIuL3NyYy9wcm9maWxlL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZmlsZSBwYXRoOiBzcmMvcHJvZmlsZS9pbmRleC5qc1xyXG5cclxuZXhwb3J0IGNvbnN0IHByaW50UHJvZmlsZSA9IChwcm9maWxlRGF0YSkgPT4ge1xyXG4gIGNvbnN0IHsgbmFtZSwgY29tcGFueSB9ID0gcHJvZmlsZURhdGE7XHJcbiAgY29uc29sZS5sb2coYCR7bmFtZX0gZnJvbSAke2NvbXBhbnl9YCk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/profile/index.js\n");

/***/ })

/******/ });