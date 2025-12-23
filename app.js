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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);
// JS Goes here - ES6 supported

var $ = window.jQuery;

$(document).ready(function () {
  $(".carousel").slick({
    infinite: true,
    speed: 0,
    slidesToShow: 1,
    prevArrow: "<button class='heart-arrow heart-left'><img src='/images/assets/heart-left.png'></button>",
    nextArrow: "<button class='heart-arrow heart-right'><img src='/images/assets/heart-right.png'></button>"
  });

  var $carousel = $(".carousel");
  $(document).on("keydown", function (e) {
    if (e.keyCode === 37) {
      $carousel.slick("slickPrev");
    }
    if (e.keyCode === 39) {
      $carousel.slick("slickNext");
    }
  });

  $(".get-married h1").animate({
    marginLeft: "0px"
  }, {
    duration: 1500,
    done: function done() {
      $(".i-left, .i-right").css({
        visibility: "visible"
      });
      $(".i-right, .i-left").animate({
        left: 0
      }, {
        duration: 1000,
        done: function done() {
          window.confettify();
        }
      });
    }
  });
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$("input[name='rsvp']").on("change", function (event) {
  var rsvp = $("input[name='rsvp']:checked").val();
  if (rsvp === "Yes") {
    $(".you-section, .guest-section, .allergies-section").removeClass("hidden");
  } else {
    $(".guest-section, .allergies-section").addClass("hidden");
    $(".you-section").removeClass("hidden");
  }
});

$("#rsvp-form").on("submit", function (event) {
  event.preventDefault();

  var rsvp = $("input[name='rsvp']:checked").val();
  var youName = $("input[name='you_name']").val();
  var guestName = $("input[name='guest_name']").val();
  var foodAllergies = $("input[name='food_allergies']").val();
  if (!(youName && rsvp)) {
    alert('Please fill out your RSVP and your name in the form!');
    return;
  }

  $.ajax({
    url: "https://hooks.zapier.com/hooks/catch/880865/z60o8j/",
    method: "POST",
    data: {
      rsvp: rsvp,
      you_name: youName,
      guest_name: guestName,
      food_allergies: foodAllergies
    },
    success: function success() {
      if (rsvp === "Yes") {
        document.location.href = "/rsvp-yes";
      } else {
        document.location.href = "/rsvp-no";
      }
    }
  });
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);