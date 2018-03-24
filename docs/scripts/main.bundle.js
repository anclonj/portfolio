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
/******/ 	__webpack_require__.p = "/docs/";
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

eval("window.onresize = function () {\n    let height = document.getElementById('top').offsetHeight;\n    console.log(height);\n    document.getElementById('topbg').style.height = height;\n};\n\nwindow.initMap = () => {\n    var uluru = {\n        lat: 55.49589,\n        lng: 37.28094\n    };\n\n    var map = new google.maps.Map(document.getElementById('map'), {\n        zoom: 15,\n        center: uluru\n    });\n\n    var marker = new google.maps.Marker({\n        position: uluru,\n        map: map\n    });\n};\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tYWluLmpzPzI5NjMiXSwibmFtZXMiOlsid2luZG93Iiwib25yZXNpemUiLCJoZWlnaHQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwib2Zmc2V0SGVpZ2h0IiwiY29uc29sZSIsImxvZyIsInN0eWxlIiwiaW5pdE1hcCIsInVsdXJ1IiwibGF0IiwibG5nIiwibWFwIiwiZ29vZ2xlIiwibWFwcyIsIk1hcCIsInpvb20iLCJjZW50ZXIiLCJtYXJrZXIiLCJNYXJrZXIiLCJwb3NpdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUFBLE9BQU9DLFFBQVAsR0FBa0IsWUFBVztBQUMzQixRQUFJQyxTQUFTQyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLEVBQStCQyxZQUE1QztBQUNBQyxZQUFRQyxHQUFSLENBQVlMLE1BQVo7QUFDQUMsYUFBU0MsY0FBVCxDQUF3QixPQUF4QixFQUFpQ0ksS0FBakMsQ0FBdUNOLE1BQXZDLEdBQWdEQSxNQUFoRDtBQUNELENBSkQ7O0FBTUFGLE9BQU9TLE9BQVAsR0FBaUIsTUFBTTtBQUNuQixRQUFJQyxRQUFRO0FBQ1JDLGFBQUssUUFERztBQUVSQyxhQUFLO0FBRkcsS0FBWjs7QUFLQSxRQUFJQyxNQUFNLElBQUlDLE9BQU9DLElBQVAsQ0FBWUMsR0FBaEIsQ0FBb0JiLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBcEIsRUFBb0Q7QUFDNURhLGNBQU0sRUFEc0Q7QUFFNURDLGdCQUFRUjtBQUZvRCxLQUFwRCxDQUFWOztBQUtBLFFBQUlTLFNBQVMsSUFBSUwsT0FBT0MsSUFBUCxDQUFZSyxNQUFoQixDQUF1QjtBQUNsQ0Msa0JBQVVYLEtBRHdCO0FBRWxDRyxhQUFLQTtBQUY2QixLQUF2QixDQUFiO0FBSUgsQ0FmRCIsImZpbGUiOiIuL3NyYy9zY3JpcHRzL21haW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cub25yZXNpemUgPSBmdW5jdGlvbigpIHtcclxuICBsZXQgaGVpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvcCcpLm9mZnNldEhlaWdodDtcclxuICBjb25zb2xlLmxvZyhoZWlnaHQpO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3BiZycpLnN0eWxlLmhlaWdodCA9IGhlaWdodDtcclxufVxyXG5cclxud2luZG93LmluaXRNYXAgPSAoKSA9PiB7XHJcbiAgICB2YXIgdWx1cnUgPSB7XHJcbiAgICAgICAgbGF0OiA1NS40OTU4OSwgXHJcbiAgICAgICAgbG5nOiAzNy4yODA5NFxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyksIHtcclxuICAgICAgem9vbTogMTUsXHJcbiAgICAgIGNlbnRlcjogdWx1cnVcclxuICAgIH0pO1xyXG5cclxuICAgIHZhciBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcclxuICAgICAgcG9zaXRpb246IHVsdXJ1LFxyXG4gICAgICBtYXA6IG1hcFxyXG4gICAgfSk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/main.js\n");

/***/ })

/******/ });