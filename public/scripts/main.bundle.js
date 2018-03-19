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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "/public/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("window.initMap = () => {\n    var uluru = {\n        lat: 55.49589,\n        lng: 37.28094\n    };\n\n    var map = new google.maps.Map(document.getElementById('map'), {\n        zoom: 15,\n        center: uluru\n    });\n\n    var marker = new google.maps.Marker({\n        position: uluru,\n        map: map\n    });\n};\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tYWluLmpzPzI5NjMiXSwibmFtZXMiOlsid2luZG93IiwiaW5pdE1hcCIsInVsdXJ1IiwibGF0IiwibG5nIiwibWFwIiwiZ29vZ2xlIiwibWFwcyIsIk1hcCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ6b29tIiwiY2VudGVyIiwibWFya2VyIiwiTWFya2VyIiwicG9zaXRpb24iXSwibWFwcGluZ3MiOiJBQUFBQSxPQUFPQyxPQUFQLEdBQWlCLE1BQU07QUFDbkIsUUFBSUMsUUFBUTtBQUNSQyxhQUFLLFFBREc7QUFFUkMsYUFBSztBQUZHLEtBQVo7O0FBS0EsUUFBSUMsTUFBTSxJQUFJQyxPQUFPQyxJQUFQLENBQVlDLEdBQWhCLENBQW9CQyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQXBCLEVBQW9EO0FBQzVEQyxjQUFNLEVBRHNEO0FBRTVEQyxnQkFBUVY7QUFGb0QsS0FBcEQsQ0FBVjs7QUFLQSxRQUFJVyxTQUFTLElBQUlQLE9BQU9DLElBQVAsQ0FBWU8sTUFBaEIsQ0FBdUI7QUFDbENDLGtCQUFVYixLQUR3QjtBQUVsQ0csYUFBS0E7QUFGNkIsS0FBdkIsQ0FBYjtBQUlILENBZkQiLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tYWluLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsid2luZG93LmluaXRNYXAgPSAoKSA9PiB7XHJcbiAgICB2YXIgdWx1cnUgPSB7XHJcbiAgICAgICAgbGF0OiA1NS40OTU4OSwgXHJcbiAgICAgICAgbG5nOiAzNy4yODA5NFxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyksIHtcclxuICAgICAgem9vbTogMTUsXHJcbiAgICAgIGNlbnRlcjogdWx1cnVcclxuICAgIH0pO1xyXG5cclxuICAgIHZhciBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcclxuICAgICAgcG9zaXRpb246IHVsdXJ1LFxyXG4gICAgICBtYXA6IG1hcFxyXG4gICAgfSk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/main.js\n");

/***/ })

/******/ });