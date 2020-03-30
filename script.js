/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".script.js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/form.js":
/*!********************!*\
  !*** ./js/form.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ \"./js/modal.js\");\n\r\n\r\nconst addFormHandlers = () => {\r\n  const form = document.querySelector(\"#quote\");\r\n  form.addEventListener(\"submit\", evt => {\r\n    const formData = new FormData(form);\r\n    const [subject, description] = [\r\n      formData.get(\"subject\") || \"No subject\",\r\n      formData.get(\"details\") || \"No description\"\r\n    ];\r\n    _modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"].showModal({\r\n      subject,\r\n      description\r\n    });\r\n    evt.preventDefault();\r\n    return false;\r\n  });\r\n\r\n  window.addEventListener(\"closeModal\", () => {\r\n    form.reset();\r\n  });\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  addFormHandlers\r\n});\r\n\n\n//# sourceURL=webpack:///./js/form.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./js/menu.js\");\n/* harmony import */ var _portfolio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./portfolio */ \"./js/portfolio.js\");\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slider */ \"./js/slider.js\");\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal */ \"./js/modal.js\");\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form */ \"./js/form.js\");\n__webpack_require__.e(/*! import() */ 0).then(__webpack_require__.t.bind(null, /*! ./_comment */ \"./js/_comment.js\", 7));\r\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.onload = function() {\r\n  // add handler for menu clicks\r\n  _menu__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addMenuItemsClickHandler();\r\n\r\n  // add handler for scroll to make menu active\r\n  _menu__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addScrollMenuItemHandler();\r\n\r\n  // add handler for clicking portfolio items\r\n  _portfolio__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addPortfolioClickHandler();\r\n\r\n  // add handler for switching portfolio tabs\r\n  _portfolio__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addTabClickHandler();\r\n\r\n  // add handler for turning on and off phone screens\r\n  _slider__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addScreenClickHandler();\r\n\r\n  // add handler for slider actions\r\n  _slider__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addSliderArrowsClickHandler();\r\n\r\n  // add handlers for modal window\r\n  _modal__WEBPACK_IMPORTED_MODULE_3__[\"default\"].addModalClickHandlers();\r\n\r\n  // add form handlers for submit and closeModal\r\n  _form__WEBPACK_IMPORTED_MODULE_4__[\"default\"].addFormHandlers();\r\n};\r\n\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ }),

/***/ "./js/menu.js":
/*!********************!*\
  !*** ./js/menu.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst addMenuItemsClickHandler = () => {\r\n  document.querySelector(\".navbar\").addEventListener(\"click\", evt => {\r\n    if (evt.target.nodeName === \"A\") {\r\n      removeActiveMenuItems();\r\n      evt.target.classList.add(\"selected\");\r\n    }\r\n  });\r\n};\r\n\r\nconst removeActiveMenuItems = () => {\r\n  const menuItems = document.querySelectorAll(\".navbar li a\");\r\n  menuItems.forEach(menuItem => menuItem.classList.remove(\"selected\"));\r\n};\r\n\r\nconst setActiveMenuItem = itemName => {\r\n  const menuItems = document.querySelectorAll(\".navbar li a\");\r\n  menuItems.forEach(menuItem => {\r\n    if (menuItem.innerHTML !== itemName) {\r\n      menuItem.classList.remove(\"selected\");\r\n    } else {\r\n      if (!menuItem.classList.contains(\"selected\")) {\r\n        menuItem.classList.add(\"selected\");\r\n      }\r\n    }\r\n  });\r\n};\r\n\r\nconst addScrollMenuItemHandler = () => {\r\n  const navLinks = document.querySelectorAll(\".navbar li a\");\r\n  const navSections = [];\r\n  navLinks.forEach(link => {\r\n    const linkText = link.innerHTML;\r\n    navSections.push(document.querySelector(`[data-scroll=${linkText}]`));\r\n  });\r\n  const headerHeight = document.querySelector(\".header-background\")\r\n    .offsetHeight;\r\n  const PART_WHERE_NEW_SECTION_STARTS = 0.3;\r\n\r\n  window.addEventListener(\"scroll\", () => {\r\n    const fromTop =\r\n      window.scrollY +\r\n      headerHeight +\r\n      PART_WHERE_NEW_SECTION_STARTS * window.innerHeight;\r\n\r\n    navSections.forEach(navSection => {\r\n      if (\r\n        navSection.offsetTop <= fromTop &&\r\n        !navSection.classList.contains(\"selected\")\r\n      ) {\r\n        setActiveMenuItem(navSection.dataset.scroll);\r\n      }\r\n    });\r\n  });\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  addMenuItemsClickHandler,\r\n  addScrollMenuItemHandler\r\n});\r\n\n\n//# sourceURL=webpack:///./js/menu.js?");

/***/ }),

/***/ "./js/modal.js":
/*!*********************!*\
  !*** ./js/modal.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst modal = document.querySelector(\".modal\");\r\nconst closeButton = document.querySelector(\".close-button\");\r\nconst subjectPlaceholder = modal.querySelector(\".message-subject\");\r\nconst descriptionPlaceholder = modal.querySelector(\".message-description\");\r\n\r\nconst setModalData = data => {\r\n  if (!data) return;\r\n  clearModalData();\r\n  subjectPlaceholder.innerHTML = data.subject;\r\n  descriptionPlaceholder.innerHTML = data.description;\r\n};\r\n\r\nconst clearModalData = () => {\r\n  subjectPlaceholder.innerHTML = \"\";\r\n  descriptionPlaceholder.innerHTML = \"\";\r\n};\r\n\r\nconst showModal = data => {\r\n  setModalData(data);\r\n  modal.classList.add(\"show-modal\");\r\n};\r\n\r\nconst closeModal = () => {\r\n  modal.classList.remove(\"show-modal\");\r\n  window.dispatchEvent(new CustomEvent(\"closeModal\"));\r\n};\r\n\r\nconst windowOnClick = evt => {\r\n  if (evt.target === modal) {\r\n    closeModal();\r\n  }\r\n};\r\n\r\nconst addModalClickHandlers = () => {\r\n  closeButton.addEventListener(\"click\", closeModal);\r\n  window.addEventListener(\"click\", windowOnClick);\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  addModalClickHandlers,\r\n  showModal\r\n});\r\n\n\n//# sourceURL=webpack:///./js/modal.js?");

/***/ }),

/***/ "./js/portfolio.js":
/*!*************************!*\
  !*** ./js/portfolio.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst addPortfolioClickHandler = () => {\r\n  const portfolioContainer = document.querySelector(\r\n    \".portfolio-content-wrapper\"\r\n  );\r\n  portfolioContainer.addEventListener(\"click\", evt => {\r\n    const classList = evt.target.parentNode.classList;\r\n    if (!classList.contains(\"portfolio-item\")) return;\r\n    if (classList.contains(\"selected\")) {\r\n      classList.remove(\"selected\");\r\n    } else {\r\n      document\r\n        .querySelectorAll(\".portfolio-item\")\r\n        .forEach(item => item.classList.remove(\"selected\"));\r\n      classList.add(\"selected\");\r\n    }\r\n  });\r\n};\r\n\r\nconst shiftPortfolioImages = () => {\r\n  const IMAGES_IN_ROW = 4;\r\n  const portfolioImages = Array.from(\r\n    document.querySelectorAll(\".portfolio-item\")\r\n  );\r\n  const portfolioRows = document.querySelectorAll(\".portfolio-content-row\");\r\n\r\n  const getRandomImage = () =>\r\n    portfolioImages.splice(\r\n      Math.ceil(Math.random() * portfolioImages.length) - 1,\r\n      1\r\n    )[0];\r\n\r\n  portfolioRows.forEach(row => {\r\n    row.innerHTML = \"\";\r\n    for (let i = 0; i < IMAGES_IN_ROW; i++) {\r\n      row.appendChild(getRandomImage());\r\n    }\r\n  });\r\n};\r\n\r\nconst addTabClickHandler = () => {\r\n  const portfolioTabs = document.querySelector(\".portfolio-tags\");\r\n  portfolioTabs.addEventListener(\"click\", evt => {\r\n    const classList = evt.target.classList;\r\n    if (\r\n      classList.contains(\"portfolio-tag\") &&\r\n      !classList.contains(\"selected\")\r\n    ) {\r\n      document.querySelectorAll(\".portfolio-tag\").forEach(tag => {\r\n        tag.innerHTML !== evt.target.innerHTML\r\n          ? tag.classList.remove(\"selected\")\r\n          : tag.classList.add(\"selected\");\r\n      });\r\n    }\r\n    shiftPortfolioImages();\r\n  });\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  addPortfolioClickHandler,\r\n  addTabClickHandler\r\n});\r\n\n\n//# sourceURL=webpack:///./js/portfolio.js?");

/***/ }),

/***/ "./js/slider.js":
/*!**********************!*\
  !*** ./js/slider.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst addScreenClickHandler = () => {\r\n  const slider = document.querySelector(\".slider\");\r\n  slider.addEventListener(\"click\", evt => {\r\n    const classList = evt.target.classList;\r\n    if (classList.contains(\"clickable-screen\")) {\r\n      classList.toggle(\"clicked\");\r\n    }\r\n  });\r\n};\r\n\r\nconst addSliderArrowsClickHandler = () => {\r\n  const sliderWrapper = document.querySelector(\".slider-background\");\r\n  sliderWrapper.addEventListener(\"click\", evt => {\r\n    const btn = evt.target.closest(\".slider-btn\");\r\n    if (!btn) return;\r\n    const classList = btn.classList;\r\n    if (classList.contains(\"slider-btn\")) {\r\n      const direction = classList.contains(\"left\") ? \"left\" : \"right\";\r\n      changeSlide(sliderWrapper, direction);\r\n    }\r\n  });\r\n};\r\n\r\nconst changeSlide = (sliderWrapper, direction) => {\r\n  const [SLIDE1_CLASS, SLIDE2_CLASS] = [\"slide-1\", \"slide-2\"];\r\n  const sliderClassList = sliderWrapper.classList;\r\n  if (sliderClassList.contains(SLIDE1_CLASS)) {\r\n    sliderClassList.remove(SLIDE1_CLASS);\r\n    sliderClassList.add(SLIDE2_CLASS);\r\n    document.querySelector(`.slide.${SLIDE1_CLASS}`).classList.add(\"hidden\");\r\n    document.querySelector(`.slide.${SLIDE2_CLASS}`).classList.remove(\"hidden\");\r\n  } else {\r\n    sliderClassList.remove(SLIDE2_CLASS);\r\n    sliderClassList.add(SLIDE1_CLASS);\r\n    document.querySelector(`.slide.${SLIDE2_CLASS}`).classList.add(\"hidden\");\r\n    document.querySelector(`.slide.${SLIDE1_CLASS}`).classList.remove(\"hidden\");\r\n  }\r\n  const sliderContentWrapper = sliderWrapper.querySelector(\r\n    \".slider-content-wrapper\"\r\n  );\r\n  if (!sliderContentWrapper) return;\r\n  const sliderContentWrapperClassList = sliderContentWrapper.classList;\r\n  sliderContentWrapperClassList.remove(\"left\");\r\n  sliderContentWrapperClassList.remove(\"right\");\r\n  // next three lines: hack to make CSS animations repeat again - so we do not have to delete the element;\r\n  // the commented line is also important! see: https://css-tricks.com/restart-css-animation/\r\n  // sliderContentWrapper.offsetWidth = sliderContentWrapper.offsetWidth;\r\n  void sliderContentWrapper.offsetWidth;\r\n\r\n  sliderContentWrapperClassList.add(direction);\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  addScreenClickHandler,\r\n  addSliderArrowsClickHandler\r\n});\r\n\n\n//# sourceURL=webpack:///./js/slider.js?");

/***/ })

/******/ });