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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/assets/images/logo.png";

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/assets/images/logo-reverse.png";

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports) {

module.exports = "<h1>Hey! I'm Mike Sales</h1>\n<h2>I Solve Problems</h2>\n<p>With Design and Strategy.</p>\n";

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\" title=\"Mike Sales\">\n  &nbsp;\n</div>\n\n<button class=\"menu\">&nbsp;</button>\n\n<ul>\n  <li><a href=\"#about\">About Me</a></li>\n  <li><a href=\"#nascar\">NASCAR.com Redesign</a></li>\n  <li><a href=\"#drive\">Drive Video Project</a></li>\n  <li><a href=\"#sprint\">Sprint Fan Voting Platform</a></li>\n  <li><a href=\"#rcr\">RCR E-Commerce Store</a></li>\n  <li><a href=\"#ndms\">NDMS Content Management System</a></li>\n  <li><a href=\"#noda\">Other Brand ID Work</a></li>\n</ul>\n";

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = "<p>Let's Talk</p>\n<ul>\n  <li><a href=\"mailto://mtorez@gmail.com\">Email</a></li>\n  <li><a href=\"http://twitter.com/mtorez\">Twitter</a></li>\n  <li><a href=\"http://linkedin.com/in/michaeltsales\">LinkedIn</a></li>\n  <li><a href=\"https://www.instagram.com/mikesales\">Instagram</a></li>\n</ul>\n";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(12);

var start = function start() {
  /* Call rendering function */
  renderHeader();
  renderNavigation();
  renderContent();
  renderFooter();
  /* Render content when the page hash changes */
  if ("onhashchange" in window) {
    window.onhashchange = start;
  }
};

/* Render Header */
var renderHeader = function renderHeader() {
  var content = __webpack_require__(8);
  var header = document.querySelector('header');
  header.innerHTML = content;
};

var toggleHeader = function toggleHeader(state) {
  var header = document.querySelector('body');
  if (state && state.length > 0) {
    header.className = '';
    header.classList.add(state);
  } else {
    header.classList.toggle('active');
  }
};

/* Render Navigation */
var renderNavigation = function renderNavigation() {
  var content = __webpack_require__(9);
  var nav = document.querySelector('nav');
  nav.innerHTML = content;
  activateNavigation();
};

/* Activate Navigation Button */
var activateNavigation = function activateNavigation() {
  var button = document.querySelector('button.menu');
  var menu = document.querySelector('nav ul');
  var logo = document.querySelector('nav .logo');
  logo.addEventListener('click', function () {
    window.location.href = '#home';
  });
  button.addEventListener('click', function (event) {
    var btn = event.target;
    menu.classList.toggle('active');
    btn.classList.toggle('open');
    logo.classList.toggle('reverse');
  });
};

/* Render Markdown Content into HTML */
var renderContent = function renderContent() {
  var hash = window.location.hash;
  var file = hash ? hash.replace(/\#/g, '') : 'home';
  var content = __webpack_require__(44)("./" + file + '.html');
  var main = document.querySelector('main');
  main.innerHTML = content;
  var state = file === 'home' ? 'active' : 'inactive';
  toggleHeader(state);
};

/* Render Footer Content */
var renderFooter = function renderFooter() {
  var content = __webpack_require__(10);
  var footer = document.querySelector('footer');
  footer.innerHTML = content;
};

start();

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(13);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(42)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./application.scss", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./application.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(undefined);
// imports


// module
exports.push([module.i, "@font-face {\n  font-family: \"IntegralCF-Regular\";\n  src: url(" + __webpack_require__(15) + ") format(\"eot\"), url(" + __webpack_require__(16) + ") format(\"woff\"), url(" + __webpack_require__(17) + ") format(\"woff2\"); }\n\n@font-face {\n  font-family: \"IntegralCF-Bold\";\n  src: url(" + __webpack_require__(18) + ") format(\"eot\"), url(" + __webpack_require__(19) + ") format(\"woff\"), url(" + __webpack_require__(20) + ") format(\"woff2\"); }\n\n@font-face {\n  font-family: \"IntegralCF-BoldOblique\";\n  src: url(" + __webpack_require__(21) + ") format(\"eot\"), url(" + __webpack_require__(22) + ") format(\"woff\"), url(" + __webpack_require__(23) + ") format(\"woff2\"); }\n\n@font-face {\n  font-family: \"IntegralCF-DemiBold\";\n  src: url(" + __webpack_require__(24) + ") format(\"eot\"), url(" + __webpack_require__(25) + ") format(\"woff\"), url(" + __webpack_require__(26) + ") format(\"woff2\"); }\n\n@font-face {\n  font-family: \"IntegralCF-ExtraBoldOblique\";\n  src: url(" + __webpack_require__(27) + ") format(\"eot\"), url(" + __webpack_require__(28) + ") format(\"woff\"), url(" + __webpack_require__(29) + ") format(\"woff2\"); }\n\n@font-face {\n  font-family: \"IntegralCF-Heavy\";\n  src: url(" + __webpack_require__(30) + ") format(\"eot\"), url(" + __webpack_require__(31) + ") format(\"woff\"), url(" + __webpack_require__(32) + ") format(\"woff2\"); }\n\n@font-face {\n  font-family: \"IntegralCF-HeavyOblique\";\n  src: url(" + __webpack_require__(33) + ") format(\"eot\"), url(" + __webpack_require__(34) + ") format(\"woff\"), url(" + __webpack_require__(35) + ") format(\"woff2\"); }\n\n@font-face {\n  font-family: \"IntegralCF-Medium\";\n  src: url(" + __webpack_require__(36) + ") format(\"eot\"), url(" + __webpack_require__(37) + ") format(\"woff\"), url(" + __webpack_require__(38) + ") format(\"woff2\"); }\n\n@font-face {\n  font-family: \"IntegralCF-RegularOblique\";\n  src: url(" + __webpack_require__(39) + ") format(\"eot\"), url(" + __webpack_require__(40) + ") format(\"woff\"), url(" + __webpack_require__(41) + ") format(\"woff2\"); }\n\nbody,\nhtml {\n  font-family: Helvetica, Arial, sans-serif;\n  font-size: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  width: 100%; }\n\n/* Site Header */\nbody.active header {\n  display: block; }\n\nbody.inactive header {\n  display: none; }\n\nbody.inactive .video-container {\n  display: none; }\n\nbody header {\n  display: block;\n  height: 420px;\n  margin: 0;\n  overflow: hidden;\n  padding-top: 300px;\n  text-align: center; }\n  body header h1, body header h2, body header h3, body header h4, body header h5, body header h6, body header p {\n    font-family: 'IntegralCF-Regular';\n    margin: 0; }\n  body header h1, body header p {\n    color: #000000;\n    font-size: 1.45em;\n    margin: .5em 0; }\n  body header h2 {\n    color: #135198;\n    font-size: 2.2em; }\n\nbody .video-container {\n  display: block;\n  height: 100%;\n  left: 0;\n  overflow: hidden;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 100%;\n  z-index: -1; }\n\n/* Navigation */\nbody.active nav .logo {\n  background-image: url(" + __webpack_require__(0) + "); }\n\nbody.active button {\n  color: #000000; }\n\nbody.inactive nav .logo {\n  background-image: url(" + __webpack_require__(1) + "); }\n\nbody.inactive button {\n  color: #FFFFFF; }\n\nbody nav {\n  margin: 0;\n  min-height: 50px;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  z-index: 999; }\n  body nav .logo {\n    background-image: url(" + __webpack_require__(0) + ");\n    background-repeat: no-repeat;\n    cursor: pointer;\n    height: 54px;\n    left: 2em;\n    position: absolute;\n    top: 20px;\n    width: 95px; }\n    body nav .logo.reverse {\n      background-image: url(" + __webpack_require__(1) + "); }\n  body nav button {\n    background-color: transparent;\n    border: 0;\n    cursor: pointer;\n    font-size: 2em;\n    font-weight: bold;\n    height: 50px;\n    position: absolute;\n    right: 2em;\n    text-align: center;\n    top: 20px;\n    width: 50px; }\n    body nav button::before {\n      content: '\\2630';\n      text-align: center; }\n    body nav button:focus {\n      outline: 0; }\n    body nav button.open {\n      color: #FFFFFF; }\n      body nav button.open::before {\n        content: '\\D7'; }\n  body nav ul {\n    background-color: #000000;\n    display: none;\n    margin: 0;\n    padding: .5em 0;\n    width: 100%; }\n    body nav ul.active {\n      display: block;\n      padding: 80px 0 200px 0; }\n    body nav ul li {\n      display: block;\n      font-family: 'IntegralCF-Regular';\n      list-style: none;\n      margin: 0;\n      padding: 2em 0;\n      text-align: center;\n      width: 100%; }\n      body nav ul li a {\n        color: #FFFFFF;\n        margin: 0;\n        padding: .5em 1em;\n        text-decoration: none; }\n        body nav ul li a:hover {\n          color: #4a90e2;\n          background-color: #000000; }\n\nmain ul {\n  clear: both;\n  display: block;\n  margin: 0;\n  overflow: hidden;\n  padding: 0;\n  width: 100%; }\n  main ul li {\n    background: #135198;\n    background: -moz-radial-gradient(center, ellipse cover, #34629b 56%, #34629b 56%, #264973 100%);\n    /* FF3.6-15 */\n    background: -webkit-radial-gradient(center, ellipse cover, #34629b 56%, #34629b 56%, #264973 100%);\n    /* Chrome10-25,Safari5.1-6 */\n    background: radial-gradient(ellipse at center, #34629b 56%, #34629b 56%, #264973 100%);\n    /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#34629b', endColorstr='#264973',GradientType=1 );\n    /* IE6-9 fallback on horizontal gradient */\n    color: #FFFFFF;\n    cursor: pointer;\n    display: block;\n    float: left;\n    font-size: .8em;\n    font-family: 'IntegralCF-RegularOblique';\n    font-weight: normal;\n    letter-spacing: .5em;\n    list-style: none;\n    margin: 0;\n    overflow: hidden;\n    position: relative;\n    text-align: center;\n    width: 50%; }\n    main ul li div {\n      width: 100%;\n      height: 100%;\n      position: relative;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      z-index: 12;\n      padding: 10em 0; }\n      main ul li div::after {\n        content: \"\";\n        background-size: cover;\n        opacity: 0.25;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n        position: absolute;\n        z-index: -1; }\n      main ul li div.nascar::after {\n        background-image: url(" + __webpack_require__(76) + "); }\n      main ul li div.sprint::after {\n        background-image: url(" + __webpack_require__(78) + "); }\n      main ul li div.drive::after {\n        background-image: url(" + __webpack_require__(70) + "); }\n      main ul li div.ndms::after {\n        background-image: url(" + __webpack_require__(73) + "); }\n      main ul li div.rcr::after {\n        background-image: url(" + __webpack_require__(66) + "); }\n      main ul li div.noda::after {\n        background-image: url(" + __webpack_require__(80) + "); }\n    main ul li p {\n      margin: 0;\n      padding: 0; }\n    main ul li ul {\n      display: block;\n      margin: 0 auto;\n      padding: 0; }\n      main ul li ul li {\n        background: transparent;\n        float: none;\n        font-family: 'IntegralCF-RegularOblique';\n        font-size: 1.75em;\n        letter-spacing: .125em;\n        margin: 0 auto;\n        padding: 0;\n        width: 60%; }\n  @media screen and (max-width: 799px) {\n    main ul li {\n      float: none;\n      width: 100%; } }\n\n/* Default Headers */\nh1, h2, h3, h4, h5, h6 {\n  font-family: 'IntegralCF-Regular';\n  font-weight: bold; }\n\n/* Main Content Body */\nmain {\n  clear: both;\n  margin: 0;\n  overflow: hidden;\n  padding: 0;\n  text-align: center; }\n  main .section {\n    overflow: hidden;\n    padding: 100px 5%;\n    position: relative; }\n    main .section h1, main .section h2, main .section h3, main .section h4, main .section h5, main .section h6 {\n      font-family: 'IntegralCF-RegularOblique';\n      letter-spacing: 2px; }\n    main .section h2 {\n      display: inline-block;\n      font-size: 1.3em;\n      letter-spacing: 1px;\n      margin-bottom: 0;\n      padding: 0 .5em .7em .5em;\n      position: relative;\n      z-index: 2; }\n      main .section h2::before {\n        content: '';\n        position: absolute;\n        left: -15px;\n        bottom: 0;\n        overflow: visible;\n        width: 118%;\n        height: 53px;\n        background-color: #FFFFFF;\n        z-index: -1;\n        -webkit-transform: skewX(-17deg);\n        -moz-transform: skewX(-17deg);\n        -ms-transform: skewX(-17deg);\n        -o-transform: skewX(-17deg);\n        transform: skewX(-17deg);\n        -webkit-backface-visibility: hidden;\n        backface-visibility: initial; }\n    main .section p {\n      font-family: \"Montserrat\", Arial, sans-serif;\n      font-size: 1.1em;\n      font-weight: 300;\n      line-height: 1.5em; }\n    main .section dl dd {\n      font-family: \"Montserrat\", Arial, sans-serif;\n      font-size: 1.125em;\n      font-weight: 300;\n      line-height: 2em; }\n    main .section .content-box {\n      max-width: 800px;\n      margin: 0 auto; }\n    main .section .role {\n      display: block;\n      float: left;\n      margin: 50px 0;\n      width: 50%; }\n      main .section .role h3 {\n        margin-bottom: .5em; }\n      main .section .role p {\n        margin: 0;\n        padding: 0; }\n    main .section.challenge, main .section.execution {\n      background-color: #1d2d4e;\n      color: #FFFFFF;\n      overflow: hidden;\n      z-index: 1; }\n      main .section.challenge h2, main .section.execution h2 {\n        background-color: #FFFFFF;\n        color: #1d2d4e; }\n    main .section.challenge {\n      padding: 200px 5% 80px;\n      position: relative; }\n      main .section.challenge span {\n        width: 100%;\n        height: 100%;\n        position: relative;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        z-index: 12;\n        padding: 10em 0; }\n      main .section.challenge::after {\n        content: \"\";\n        background-size: cover;\n        opacity: 0.15;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n        position: absolute;\n        z-index: -1; }\n      main .section.challenge#nascar::after {\n        background-image: url(" + __webpack_require__(76) + "); }\n      main .section.challenge#sprint::after {\n        background-image: url(" + __webpack_require__(78) + "); }\n      main .section.challenge#drive::after {\n        background-image: url(" + __webpack_require__(70) + "); }\n      main .section.challenge#ndms::after {\n        background-image: url(" + __webpack_require__(73) + "); }\n      main .section.challenge#rcr::after {\n        background-image: url(" + __webpack_require__(66) + "); }\n      main .section.challenge#noda::after {\n        background-image: url(" + __webpack_require__(80) + "); }\n    main .section.solutions h2 {\n      background-color: #1d2d4e;\n      color: #FFFFFF; }\n      main .section.solutions h2::before {\n        background-color: #1d2d4e; }\n\n/* Page Footer */\nfooter {\n  background-color: #FFFFFF;\n  color: #000000;\n  margin: 2em 0;\n  min-height: 150px;\n  overflow: hidden;\n  text-align: center; }\n  footer p {\n    color: #135198;\n    font-family: 'IntegralCF-Regular';\n    letter-spacing: .25em;\n    margin: 1em; }\n  footer a {\n    color: #000000;\n    text-decoration: none; }\n    footer a:hover {\n      color: #135198;\n      text-decoration: none; }\n  footer ul {\n    display: inline-block;\n    margin: 1em auto;\n    padding: 0; }\n    footer ul li {\n      display: block;\n      float: left;\n      list-style: none;\n      margin: 0 1em;\n      padding: 0;\n      text-align: center; }\n", ""]);

// exports


/***/ }),
/* 14 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/assets/fonts/IntegralCF-Regular.eot";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/assets/fonts/IntegralCF-Regular.woff";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/assets/fonts/IntegralCF-Regular.woff2";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/assets/fonts/IntegralCF-Bold.eot";

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/assets/fonts/IntegralCF-Bold.woff";

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/assets/fonts/IntegralCF-Bold.woff2";

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/assets/fonts/IntegralCF-BoldOblique.eot";

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/assets/fonts/IntegralCF-BoldOblique.woff";

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/assets/fonts/IntegralCF-BoldOblique.woff2";

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/assets/fonts/IntegralCF-DemiBold.eot";

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/assets/fonts/IntegralCF-DemiBold.woff";

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/assets/fonts/IntegralCF-DemiBold.woff2";

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/assets/fonts/IntegralCF-ExtraBoldOblique.eot";

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/assets/fonts/IntegralCF-ExtraBoldOblique.woff";

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/assets/fonts/IntegralCF-ExtraBoldOblique.woff2";

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/assets/fonts/IntegralCF-Heavy.eot";

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/assets/fonts/IntegralCF-Heavy.woff";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/assets/fonts/IntegralCF-Heavy.woff2";

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/assets/fonts/IntegralCF-HeavyOblique.eot";

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/assets/fonts/IntegralCF-HeavyOblique.woff";

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/assets/fonts/IntegralCF-HeavyOblique.woff2";

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/assets/fonts/IntegralCF-Medium.eot";

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/assets/fonts/IntegralCF-Medium.woff";

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/assets/fonts/IntegralCF-Medium.woff2";

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/assets/fonts/IntegralCF-RegularOblique.eot";

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/assets/fonts/IntegralCF-RegularOblique.woff";

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/assets/fonts/IntegralCF-RegularOblique.woff2";

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(43);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 43 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./about.html": 45,
	"./drive.html": 58,
	"./footer.html": 10,
	"./header.html": 8,
	"./home.html": 59,
	"./nascar.html": 60,
	"./navigation.html": 9,
	"./ndms.html": 61,
	"./noda.html": 62,
	"./rcr.html": 63,
	"./resume.html": 64,
	"./sprint.html": 65
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 44;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<div class=\"section solutions\" id=\"about\">\n  <div class=\"content-box\">\n    <h1>Got a Challenge? I'm Here to Help.</h1>\n\n    <p>Over my career, I've designed in a lot of different spaces - local and international news, video, e-learning and non-profits. Currently, I work in motorsports here in Charlotte, North Carolina.</p>\n\n    <p>When I'm not designing, I write about race and religion for Charlotte magazine or The Salt Collective. I also write comics and I may have one an Eisner (if you contribute to a book but are NOT the official author, did you win too?) Oh yeah - I recently started doing speeches too.</p>\n\n    <p>Ambition and creativity are my ravenous beasts - these are the things I do to keep them fed.</p>\n\n    <ul>\n      <li><a href=\"mailto://mtorez@gmail.com\">Email</a></li>\n      <li><a href=\"http://twitter.com/mtorez\">Twitter</a></li>\n      <li><a href=\"http://linkedin.com/in/michaeltsales\">LinkedIn</a></li>\n    </ul>\n\n    <h2>Download Resume</h2>\n  </div>\n</div>\n\n\n<div class=\"section execution\">\n  <div class=\"content-box\">\n    <h2>Client Experience</h2>\n    <ul>\n      <li><img src=\"" + __webpack_require__(46) + "\" /></li>\n      <li><img src=\"" + __webpack_require__(47) + "\" /></li>\n      <li><img src=\"" + __webpack_require__(48) + "\" /></li>\n      <li><img src=\"" + __webpack_require__(49) + "\" /></li>\n      <li><img src=\"" + __webpack_require__(50) + "\" /></li>\n      <li><img src=\"" + __webpack_require__(51) + "\" /></li>\n      <li><img src=\"" + __webpack_require__(52) + "\" /></li>\n      <li><img src=\"" + __webpack_require__(53) + "\" /></li>\n      <li><img src=\"" + __webpack_require__(54) + "\" /></li>\n      <li><img src=\"" + __webpack_require__(55) + "\" /></li>\n      <li><img src=\"" + __webpack_require__(56) + "\" /></li>\n      <li><img src=\"" + __webpack_require__(57) + "\" /></li>\n    </ul>\n  </div>\n</div>\n";

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/assets/images/nascar.png";

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/assets/images/sprint.png";

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/assets/images/monster.png";

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/assets/images/toyota.png";

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/assets/images/coca-cola.png";

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/assets/images/ford.png";

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/assets/images/chevrolet.png";

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/assets/images/coors.png";

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/assets/images/qualcomm.png";

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/assets/images/mountain-dew.png";

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/assets/images/mobil1.png";

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/assets/images/mechanix.png";

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = "<div class=\"section challenge\" id=\"drive\">\n  <div class=\"content-box\">\n    <h2>Challenge</h2>\n\n    <h1>NASCAR Drive</h1>\n\n    <p>We needed to overhaul <strong>Racebuddy</strong>, NASCAR's video streaming product. Instead of a single experience with in-car cameras, we wanted a more comprehensive race day hub. That new experience became <strong>NASCAR DRIVE</strong>.</p>\n\n    <div class=\"role\">\n      <h3>Client</h3>\n      <p>NASCAR Digital Media</p>\n    </div>\n\n    <div class=\"role\">\n      <h3>Roles</h3>\n      <p>Visual Design / UI, UX / Identity</p>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"section solutions\">\n  <div class=\"content-box\">\n    <h2>Solutions</h2>\n    <dl>\n      <dd>Better UI for easier navigation, more features and space for sponsor creative</dd>\n      <dd>Adaptive design for the mobile and tablet product</dd>\n      <dd>'Driver Hub' with live driver data and social media streams</dd>\n      <dd>Product Hub with login access to other NASCAR.com products</dd>\n      <dd>Live leaderboard for a more immersive overall experience</dd>\n    </dl>\n  </div>\n</div>\n\n\n<div class=\"section execution\">\n  <div class=\"content-box\">\n    <h2>Execution</h2>\n    <p>... images ...</p>\n  </div>\n</div>\n";

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = "<ul>\n  <li>\n    <div class=\"nascar\">\n      NASCAR.com\n      <ul>\n        <li>Site Redesign</li>\n      </ul>\n    </div>\n  </li>\n\n  <li>\n    <div class=\"sprint\">\n      Sprint Fan Vote\n      <ul>\n        <li>Voting Platform</li>\n      </ul>\n    </div>\n  </li>\n\n  <li>\n    <div class=\"drive\">\n      Drive\n      <ul>\n        <li>Video Streaming Product</li>\n      </ul>\n    </div>\n  </li>\n\n  <li>\n    <div class=\"ndms\">\n      NASCAR Digital Media Services\n      <ul>\n        <li>Content Management System</li>\n      </ul>\n    </div>\n  </li>\n\n  <li>\n    <div class=\"rcr\">\n      Richard Childress Racing\n      <ul>\n        <li>E-Commerce Store</li>\n      </ul>\n    </div>\n  </li>\n\n  <li>\n    <div class=\"noda\">\n      NODA School of Arts\n      <ul>\n        <li>Branding &amp; Identity</li>\n      </ul>\n    </div>\n  </li>\n</ul>\n";

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = "<div class=\"section challenge\" id=\"nascar\">\n  <div class=\"content-box\">\n\n    <h2>Challenge</h2>\n\n    <h1>NASCAR.com Redesign</h1>\n\n    <p>Overhaul entire site to accommodate new consumption habits and evolving business model. To succeed, design needed to collaborate with advertising, technical operations, marketing and editorial teams.</p>\n\n    <div class=\"role\">\n      <h3>Client</h3>\n      <p>NASCAR Digital Media</p>\n    </div>\n    <div class=\"role\">\n      <h3>Roles</h3>\n      <p>Art Direction / Visual Design / UI, UX</p>\n    </div>\n\n  </div>\n</div>\n\n\n<div class=\"section solutions\">\n  <div class=\"content-box\">\n    <h2>Solutions</h2>\n    <dl>\n      <dd>New layout for native ads, pinned ads, and increase view-ability score</dd>\n      <dd>Grid system to support responsive mobile design and visual consistency</dd>\n      <dd>UI refresh with more photography and other multimedia content</dd>\n      <dd>Cleaner look to increase readability for editorial content and sponsorship branding</dd>\n      <dd>Create 'hub' pages to attract fans and create sponsorship opportunities</dd>\n    </dl>\n  </div>\n</div>\n\n\n<div class=\"section execution\">\n  <div class=\"content-box\">\n    <h2>Execution</h2>\n    <p>... images ...</p>\n  </div>\n</div>\n";

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = "<div class=\"section challenge\" id=\"ndms\">\n  <div class=\"content-box\">\n    <h2>Challenge</h2>\n\n    <h1>NDMS Content Management System</h1>\n\n    <p>NASCAR Digital Media Services, a creative unit within NASCAR digital, needed a content management system to sell to a wide range of clients. Many had limited resources and modest budgets. Deep collaboration between design and development produced a flexible, easy to use product that could be reproduced quickly, but still provide customization for the client.</p>\n\n    <div class=\"role\">\n      <h3>Client</h3>\n      <p>NASCAR Digital Media</p>\n    </div>\n\n    <div class=\"role\">\n      <h3>Roles</h3>\n      <p>Visual Design / UI, UX / Art Direction</p>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"section solutions\">\n  <div class=\"content-box\">\n    <h2>Solutions</h2>\n    <dl>\n      <dd>Wordpress infrastructure provides robust support, stability and easy to use interface</dd>\n      <dd>Flexible publishing and multimedia tools well suited for diverse list of clients</dd>\n      <dd>Reusable components cut cost but can be restyled for custom look</dd>\n      <dd>Grid and responsive designs support mobile experiences</dd>\n    </dl>\n  </div>\n</div>\n\n\n<div class=\"section execution\">\n  <div class=\"content-box\">\n    <h2>Execution</h2>\n    <p>... images ...</p>\n  </div>\n</div>\n";

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = "<div class=\"section challenge\" id=\"noda\">\n  <div class=\"content-box\">\n    <h2>Challenge</h2>\n\n    <h1>NODA School of Arts Rebranding</h1>\n\n    <p>NODA School of Arts, a local non-profit, provided performance arts training to low income students in the Charlotte area. As the NODA (North Davidson) area of Charlotte was transforming from an arts district to a night life scene, the school saw an opportunity to relocate their headquarters and possibly reshape their mission and brand identity.</p>\n\n    <div class=\"role\">\n      <h3>Client</h3>\n      <p>NODA School of Arts</p>\n    </div>\n\n    <div class=\"role\">\n      <h3>Roles</h3>\n      <p>Brand ID / Visual Design / Video Production</p>\n    </div>\n\n  </div>\n</div>\n\n\n<div class=\"section solutions\">\n  <div class=\"content-box\">\n    <h2>Solutions</h2>\n    <dl>\n      <dd>Re-center brand logo around the work, not a location</dd>\n      <dd>Use new, inexpensive technology to produce and market impactful creative</dd>\n      <dd>Market new brand identity across multiple platforms (email, web, video, social)</dd>\n    </dl>\n  </div>\n</div>\n\n\n<div class=\"section execution\">\n  <div class=\"content-box\">\n    <h2>Execution</h2>\n    <p>... images ...</p>\n  </div>\n</div>\n";

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = "<div class=\"section challenge\" id=\"rcr\">\n  <div class=\"content-box\">\n    <h2>Challenge</h2>\n\n    <h1>RCR E-Commerce Store</h1>\n\n    <p>Many clients who purchased the NDMS Content Management System needed to upgrade their 'digital store experience' as well. The new e-commerce experience needed to be easy to program on the back end, but also needed a modern look and great navigation for the user.</p>\n\n    <div class=\"role\">\n      <h3>Client</h3>\n      <p>NASCAR Digital Media</p>\n    </div>\n\n    <div class=\"role\">\n      <h3>Roles</h3>\n      <p>Visual Design / UI, UX / Art Direction</p>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"section solutions\">\n    <h2>Solutions</h2>\n    <dl>\n      <dd>Wordpress framework integrated with existing NDMS platform sites</dd>\n      <dd>Refreshed UX to spotlight products, provide easy filtering and add interactivity throughout the site</dd>\n      <dd>Unique adaptive design for mobile experience in order to potentially increase revenue</dd>\n      <dd>Upgraded cart and checkout options for better overall user experience</dd>\n      <dd>Social sharing functionality</dd>\n    </dl>\n</div>\n\n\n<div class=\"section execution\">\n  <div class=\"content-box\">\n    <h2>Execution</h2>\n    <p>... images ...</p>\n  </div>\n</div>\n";

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = "# Resume\n\n## Experience\n\n### NASCAR Digital Media, _Director of Design_\n#### _2012 - Current_\n\nAt NASCAR Digital Media, I am responsible for Proin et sapien nec arcu tempus dignissim. Praesent pretium velit sollicitudin libero malesuada, et sollicitudin sem egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas risus velit, posuere quis risus eget, blandit sodales ex. Maecenas nisl velit, ultrices eu tincidunt ac, condimentum at dolor. Nullam est quam, sagittis ac commodo et, convallis in massa.\n\n### IOMAX USA, _Interactive Web Developer_\n#### _2011 - 2012_\n\nPraesent ut ultricies dui. Nunc quam dui, scelerisque vitae libero in, rutrum feugiat metus. Nunc ac diam id ex pharetra eleifend et sit amet odio. Donec facilisis ut massa ut mollis. Fusce nec nunc tortor. Integer non purus elementum, semper turpis nec, rutrum nunc. Nulla iaculis ultricies orci, sit amet sollicitudin nunc vulputate et. In at ultrices sem, pretium tincidunt nisi. Aliquam id tempor velit, non interdum justo. Vestibulum sodales nibh justo, sed pellentesque augue malesuada nec.\n\n### Red Ventures, _Video Design Intern_\n#### _2011_\n\nProduced, shot, edited and helped conceive promotional video for Red Ventures Sales Center. Shot and edited various internal video projects promoting Red corporate culture.\n\n### Club de Ciegos de Colon, _Lead Designer/ Creative Director_\n#### _2011_\n\nLed creative team for www.clubdeciegos.com, a website used to promote non profit group Club de Ciegos de Colon. Designed or managed all visual elements on the site as well as gathered and helped edit video content and create motion graphic effects.\n\n### Good Works Charlotte, _Creative Director/ Project Manager_\n#### _2010_\n\nDeveloped Flash interactive for proposed work place giving campaign called 'Good Works Charlotte' and 'Good Works USA.' Both interactives use narrative storytelling to increase work place giving. Worked closely with writing and marketing team at initial stages to develop visual style and user interface. Designed, created and implemented user interface, narrative content, web design and all digital artwork and photography. Developed Request For Proposal for web-based interface that would be used to deploy interactive narratives to various corporate clients.\n\n### National Center for Global Engagement, _Producer/ Art Director_\n#### _2010_\n\nVideotaped and photographed instructional session for students enrolled in Bardoli scholarship program as well as one on one interviews with students, teachers and fellows. Wrote script for promotional video. Designed and produced infographics for video. Edited and uploaded final promotional video to various streaming and hosting servers online.\nView video here: http://www.mikesalespro.com/NCGEPROMOVID420\n\n\n## Education\n\n### Elon University, _Charlotte, NC_\n#### MA, Interactive Media\n_2010 - 2011_\n\n### Howard University, _Washington, DC_\n#### B.S., Communications (Television Production)\n_1989 - 1993_\n\n## Skills\n\n* User Interface Design\n* Interaction Design\n* Digital Media\n* Adobe Photoshop\n* Adobe Illustrator\n* Sketch\n* QuarkXPress\n* Adobe In-Design\n* Multimedia\n* Video Production\n* Web Design\n* Art Direction\n* Illustration\n* Final Cut Pro\n";

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = "<div class=\"section challenge\" id=\"sprint\">\n  <div class=\"content-box\">\n    <h2>Challenge</h2>\n\n    <h1>Sprint Fan Vote Campaign</h1>\n\n    <p>Sprint, at the time NASCAR's top sponsor, was expanding their Fan Vote campaign to take advantage of changing consumption habits and new digital technology. We had to integrate new, complex functionality and balance multiple stakeholders within the NASCAR ecosystem. The complexity and high profile nature of this project required constant collaboration between design, marketing, advertising and our third party development group.</p>\n\n    <div class=\"role\">\n      <h3>Client</h3>\n      <p>NASCAR Digital Media</p>\n    </div>\n\n    <div class=\"role\">\n      <h3>Roles</h3>\n      <p>Visual Design / UX</p>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"section solutions\">\n  <div class=\"content-box\">\n    <h2>Solutions</h2>\n    <dl>\n      <dd>Social sharing, video production, sweepstakes and other new technologies integrated into design</dd>\n      <dd>Updated UX to accommodate new options added to the experience</dd>\n      <dd>Responsive design for mobile experience to optimize registration and data gathering needs</dd>\n      <dd>Full suite of co-branded advertising with rotating roster of popular drivers</dd>\n    </dl>\n  </div>\n</div>\n\n\n<div class=\"section execution\">\n  <div class=\"content-box\">\n    <h2>Execution</h2>\n    <p>... images ...</p>\n  </div>\n</div>\n";

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/assets/images/e-commerce-1.jpg";

/***/ }),
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/assets/images/video-3.jpg";

/***/ }),
/* 71 */,
/* 72 */,
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/assets/images/editor-3.jpg";

/***/ }),
/* 74 */,
/* 75 */,
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/assets/images/design-2.jpg";

/***/ }),
/* 77 */,
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/assets/images/vote-2.jpg";

/***/ }),
/* 79 */,
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/assets/images/brand-2.jpg";

/***/ })
/******/ ]);