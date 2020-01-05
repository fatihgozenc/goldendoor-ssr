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

/***/ "./src/client/App.js":
/*!***************************!*\
  !*** ./src/client/App.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ \"./src/client/actions/index.js\");\n/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Layout */ \"./src/client/Layout.js\");\n\n\n\n\n\n\nvar App = function App(_ref) {\n  var route = _ref.route,\n      match = _ref.match,\n      history = _ref.history,\n      location = _ref.location;\n  var layoutData = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"])(function (state) {\n    return state.layout;\n  });\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    layoutData: layoutData,\n    match: match,\n    history: history,\n    location: location\n  }, Object(react_router_config__WEBPACK_IMPORTED_MODULE_1__[\"renderRoutes\"])(route.routes));\n};\n\nfunction loadData(store) {\n  return store.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__[\"fetchLayout\"])());\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  loadData: loadData,\n  component: App\n});\n\n//# sourceURL=webpack:///./src/client/App.js?");

/***/ }),

/***/ "./src/client/Layout.js":
/*!******************************!*\
  !*** ./src/client/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Header */ \"./src/client/components/Header.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Footer */ \"./src/client/components/Footer.js\");\n/* harmony import */ var _components_Newsletter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Newsletter */ \"./src/client/components/Newsletter.js\");\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/main.scss */ \"./src/client/styles/main.scss\");\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nvar Layout = function Layout(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    data: props.layoutData.header,\n    logo: props.layoutData.footer.info.logo,\n    lang: props.layoutData.lang,\n    pathname: props.location.pathname\n  }), props.children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Newsletter__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    data: props.layoutData.newsletter\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    data: props.layoutData.footer\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\n\n//# sourceURL=webpack:///./src/client/Layout.js?");

/***/ }),

/***/ "./src/client/Routes.js":
/*!******************************!*\
  !*** ./src/client/Routes.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ \"./src/client/App.js\");\n/* harmony import */ var _pages_HomePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/HomePage */ \"./src/client/pages/HomePage.js\");\n/* harmony import */ var _pages_AboutUsPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/AboutUsPage */ \"./src/client/pages/AboutUsPage.js\");\n/* harmony import */ var _pages_LocationsPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/LocationsPage */ \"./src/client/pages/LocationsPage.js\");\n/* harmony import */ var _pages_LocationPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/LocationPage */ \"./src/client/pages/LocationPage.js\");\n/* harmony import */ var _pages_NotFoundPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/NotFoundPage */ \"./src/client/pages/NotFoundPage.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([_objectSpread({}, _App__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n  routes: [_objectSpread({}, _pages_HomePage__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    path: '/',\n    exact: true\n  }), _objectSpread({}, _pages_AboutUsPage__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    path: [\"/uber-uns\", \"/about-us\"]\n  }), _objectSpread({}, _pages_LocationsPage__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    path: [\"/locations\", \"/locations-en\"],\n    exact: true\n  }), _objectSpread({}, _pages_LocationPage__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    path: [\"/locations/:slug\", \"/locations-en/:slug\"],\n    exact: true\n  }), _objectSpread({}, _pages_NotFoundPage__WEBPACK_IMPORTED_MODULE_5__[\"default\"])]\n})]);\n\n//# sourceURL=webpack:///./src/client/Routes.js?");

/***/ }),

/***/ "./src/client/actions/index.js":
/*!*************************************!*\
  !*** ./src/client/actions/index.js ***!
  \*************************************/
/*! exports provided: FETCH_LAYOUT, fetchLayout, FETCH_HOME, fetchHome, FETCH_ABOUTUS, fetchAboutUs, FETCH_LOCATIONS, fetchLocations, FETCH_LOCATION, fetchLocation, FETCH_USERS, fetchUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_LAYOUT\", function() { return FETCH_LAYOUT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchLayout\", function() { return fetchLayout; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_HOME\", function() { return FETCH_HOME; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchHome\", function() { return fetchHome; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_ABOUTUS\", function() { return FETCH_ABOUTUS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchAboutUs\", function() { return fetchAboutUs; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_LOCATIONS\", function() { return FETCH_LOCATIONS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchLocations\", function() { return fetchLocations; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_LOCATION\", function() { return FETCH_LOCATION; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchLocation\", function() { return fetchLocation; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_USERS\", function() { return FETCH_USERS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchUsers\", function() { return fetchUsers; });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n// IF U WANT TO ACCESS ANOTHER API,\n// IMPORT AXIOS LIB\nvar FETCH_LAYOUT = 'fetch_layout';\nvar fetchLayout = function fetchLayout() {\n  return (\n    /*#__PURE__*/\n    function () {\n      var _ref = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee(dispatch, getState, axiosInstance) {\n        var res;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return axiosInstance.get('/layout');\n\n              case 2:\n                res = _context.sent;\n                dispatch({\n                  type: FETCH_LAYOUT,\n                  payload: res\n                });\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function (_x, _x2, _x3) {\n        return _ref.apply(this, arguments);\n      };\n    }()\n  );\n};\nvar FETCH_HOME = 'fetch_home';\nvar fetchHome = function fetchHome() {\n  return (\n    /*#__PURE__*/\n    function () {\n      var _ref2 = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee2(dispatch, getState, axiosInstance) {\n        var res;\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.next = 2;\n                return axiosInstance.get('/home');\n\n              case 2:\n                res = _context2.sent;\n                dispatch({\n                  type: FETCH_HOME,\n                  payload: res\n                });\n\n              case 4:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      return function (_x4, _x5, _x6) {\n        return _ref2.apply(this, arguments);\n      };\n    }()\n  );\n};\nvar FETCH_ABOUTUS = 'fetch_aboutus';\nvar fetchAboutUs = function fetchAboutUs() {\n  return (\n    /*#__PURE__*/\n    function () {\n      var _ref3 = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee3(dispatch, getState, axiosInstance) {\n        var res;\n        return regeneratorRuntime.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                _context3.next = 2;\n                return axiosInstance.get('/aboutus');\n\n              case 2:\n                res = _context3.sent;\n                dispatch({\n                  type: FETCH_ABOUTUS,\n                  payload: res\n                });\n\n              case 4:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3);\n      }));\n\n      return function (_x7, _x8, _x9) {\n        return _ref3.apply(this, arguments);\n      };\n    }()\n  );\n};\nvar FETCH_LOCATIONS = 'fetch_locations';\nvar fetchLocations = function fetchLocations() {\n  return (\n    /*#__PURE__*/\n    function () {\n      var _ref4 = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee4(dispatch, getState, axiosInstance) {\n        var res;\n        return regeneratorRuntime.wrap(function _callee4$(_context4) {\n          while (1) {\n            switch (_context4.prev = _context4.next) {\n              case 0:\n                _context4.next = 2;\n                return axiosInstance.get('/locations');\n\n              case 2:\n                res = _context4.sent;\n                dispatch({\n                  type: FETCH_LOCATIONS,\n                  payload: res\n                });\n\n              case 4:\n              case \"end\":\n                return _context4.stop();\n            }\n          }\n        }, _callee4);\n      }));\n\n      return function (_x10, _x11, _x12) {\n        return _ref4.apply(this, arguments);\n      };\n    }()\n  );\n};\n\nfunction getLocationSlug(language, slug) {\n  var slugPattern = /(\\/.*)(\\/.*)/i;\n  var filteredSlug = slug.match(slugPattern)[2];\n  return language === 'en' ? filteredSlug + '-en' : filteredSlug;\n}\n\nvar FETCH_LOCATION = 'fetch_location';\nvar fetchLocation = function fetchLocation() {\n  return (\n    /*#__PURE__*/\n    function () {\n      var _ref5 = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee5(dispatch, getState, axiosInstance) {\n        var slug, res;\n        return regeneratorRuntime.wrap(function _callee5$(_context5) {\n          while (1) {\n            switch (_context5.prev = _context5.next) {\n              case 0:\n                slug = getLocationSlug(axiosInstance.defaults.params.language, axiosInstance.defaults.params.slug);\n                _context5.next = 3;\n                return axiosInstance.get(\"/locations\".concat(slug));\n\n              case 3:\n                res = _context5.sent;\n                dispatch({\n                  type: FETCH_LOCATION,\n                  payload: res\n                });\n\n              case 5:\n              case \"end\":\n                return _context5.stop();\n            }\n          }\n        }, _callee5);\n      }));\n\n      return function (_x13, _x14, _x15) {\n        return _ref5.apply(this, arguments);\n      };\n    }()\n  );\n};\nvar FETCH_USERS = 'fetch_users';\nvar fetchUsers = function fetchUsers() {\n  return (\n    /*#__PURE__*/\n    function () {\n      var _ref6 = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee6(dispatch, getState, axiosInstance) {\n        var res;\n        return regeneratorRuntime.wrap(function _callee6$(_context6) {\n          while (1) {\n            switch (_context6.prev = _context6.next) {\n              case 0:\n                _context6.next = 2;\n                return axiosInstance.get('/users');\n\n              case 2:\n                res = _context6.sent;\n                dispatch({\n                  type: FETCH_USERS,\n                  payload: res\n                });\n\n              case 4:\n              case \"end\":\n                return _context6.stop();\n            }\n          }\n        }, _callee6);\n      }));\n\n      return function (_x16, _x17, _x18) {\n        return _ref6.apply(this, arguments);\n      };\n    }()\n  );\n};\n\n//# sourceURL=webpack:///./src/client/actions/index.js?");

/***/ }),

/***/ "./src/client/components/Breadcrumb.js":
/*!*********************************************!*\
  !*** ./src/client/components/Breadcrumb.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar Breadcrumb = function Breadcrumb(_ref) {\n  var slug = _ref.slug,\n      title = _ref.title;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"hero__breadcrumb\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"/\"\n  }, \"HOME\"), \" > \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: slug\n  }, title));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Breadcrumb);\n\n//# sourceURL=webpack:///./src/client/components/Breadcrumb.js?");

/***/ }),

/***/ "./src/client/components/Footer.js":
/*!*****************************************!*\
  !*** ./src/client/components/Footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html-react-parser */ \"html-react-parser\");\n/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(html_react_parser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar Footer = function Footer(_ref) {\n  var data = _ref.data;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"footer\", {\n    className: \"footer\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"footer__block\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"footer__block__item\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    id: \"footer--logo\",\n    src: data.info.logo,\n    alt: \"Golden Door Logo\"\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"footer__block__item\"\n  }, html_react_parser__WEBPACK_IMPORTED_MODULE_1___default()(data.info.address.berlin)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"footer__block__item\"\n  }, html_react_parser__WEBPACK_IMPORTED_MODULE_1___default()(data.info.address.dresden)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"footer__block__item\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"tel:\".concat(data.info.telefon)\n  }, data.info.telefon), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"mailto:\".concat(data.info.email.toLowerCase())\n  }, data.info.email)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"footer__block__item\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"footer__routes\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"footer__routes--block\"\n  }, data.routes.map(function (route, key) {\n    while (key <= 3) {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n        key: route.id,\n        className: \"footer__routes--item\",\n        to: route.url\n      }, route.title);\n    }\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"footer__routes--block\"\n  }, data.routes.map(function (route, key) {\n    while (key >= 4) {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n        key: route.id,\n        className: \"footer__routes--item\",\n        to: route.url\n      }, route.title);\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"footer__routes--item copyright\"\n  }, data.info.copyright))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"footer__block\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"footer__submarken\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    id: \"submarken--text\",\n    className: \"footer__submarken--item \"\n  }, data.submarken.submarke_text), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"footer__submarken--wrapper\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"footer__submarken--block\"\n  }, data.submarken.submarke_logogroup.map(function (marke, key) {\n    while (key < 4) {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        key: key,\n        className: \"footer__submarken--item\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n        to: marke.route\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n        src: marke.logo,\n        alt: \"Submarke Logo\"\n      })));\n    }\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"footer__submarken--block\"\n  }, data.submarken.submarke_logogroup.map(function (marke, key) {\n    while (key > 3 && key < 8) {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        key: key,\n        className: \"footer__submarken--item\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n        to: marke.route\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n        src: marke.logo,\n        alt: \"Submarke Logo\"\n      })));\n    }\n  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"footer__submarken--block\"\n  }, data.submarken.submarke_logogroup.map(function (marke, key) {\n    while (key > 7) {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        key: key,\n        className: \"footer__submarken--item\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n        to: marke.route\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n        src: marke.logo,\n        alt: \"Submarke Logo\"\n      })));\n    }\n  })))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\n\n//# sourceURL=webpack:///./src/client/components/Footer.js?");

/***/ }),

/***/ "./src/client/components/Header.js":
/*!*****************************************!*\
  !*** ./src/client/components/Header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var cookie_universal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cookie-universal */ \"cookie-universal\");\n/* harmony import */ var cookie_universal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookie_universal__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MenuToggler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuToggler */ \"./src/client/components/MenuToggler.js\");\n/* harmony import */ var _MenuMailer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MenuMailer */ \"./src/client/components/MenuMailer.js\");\n\n\n\n\nvar cookies = cookie_universal__WEBPACK_IMPORTED_MODULE_1___default()();\n\nvar Header = function Header(_ref) {\n  var data = _ref.data,\n      logo = _ref.logo,\n      lang = _ref.lang,\n      pathname = _ref.pathname;\n\n  var setLang = function setLang() {\n    cookies.get('lang') === 'de' ? cookies.set('lang', 'en') : cookies.set('lang', 'de');\n  };\n\n  var navigation = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef();\n\n  var toggleMenu = function toggleMenu(e) {\n    console.log(navigation, e.currentTarget);\n    navigation.current.classList.toggle('nav__opening');\n    var navItems = navigation.current.querySelectorAll('ul');\n    setTimeout(function () {\n      navItems.forEach(function (item) {\n        item.classList.toggle('nav__child--appear');\n      });\n    }, 250);\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"header\", {\n    className: \"header\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", {\n    className: \"nav\",\n    ref: navigation\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"nav__wrapper\"\n  }, data.map(function (item) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n      key: item.id\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n      href: item.url,\n      className: \"nav__parent\"\n    }, item.title), item.children !== null && item.children.map(function (subItem) {\n      return subItem.children !== null ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n        key: subItem.id\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        href: subItem.url,\n        className: \"nav__child\"\n      }, subItem.title), subItem.children.map(function (subItemChild) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n          key: subItemChild.id\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n          className: \"nav__child nav__child--sub\",\n          href: subItemChild.url\n        }, subItemChild.title));\n      })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n        key: subItem.id\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        href: subItem.url,\n        className: \"nav__child\"\n      }, subItem.title));\n    }));\n  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"frame\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"logoarea\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"panel panel__lang\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"panel__lang-selector\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, lang.toUpperCase()), \"\\u25BE\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: pathname,\n    className: \"panel__lang-selected\",\n    onClick: setLang\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, lang === 'de' ? 'EN' : 'DE'))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    id: \"logo\",\n    href: \"/\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: logo,\n    alt: \"Golden Door Logo\"\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"panel panel__menu\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: toggleMenu\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MenuToggler__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"#newsletter\",\n    className: \"menuMailer\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MenuMailer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\n//# sourceURL=webpack:///./src/client/components/Header.js?");

/***/ }),

/***/ "./src/client/components/Hero.js":
/*!***************************************!*\
  !*** ./src/client/components/Hero.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Breadcrumb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Breadcrumb */ \"./src/client/components/Breadcrumb.js\");\n\n\n\nvar Hero = function Hero(_ref) {\n  var data = _ref.data;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"hero\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"hero__img backgroundImg\",\n    style: {\n      backgroundImage: \"url(\" + data.image + \")\"\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"hero__opening\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"hero__opening--title\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Breadcrumb__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    slug: data.slug,\n    title: data.title\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, data.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"hero__opening--excerpt\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, data.content), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    className: \"hero__scroll scroller\",\n    href: \"#content\"\n  }, data.scroll, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"\\u25BE\"))))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hero);\n\n//# sourceURL=webpack:///./src/client/components/Hero.js?");

/***/ }),

/***/ "./src/client/components/MenuMailer.js":
/*!*********************************************!*\
  !*** ./src/client/components/MenuMailer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar MenuMailer = function MenuMailer() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"svg\", {\n    className: \"menuMailer\",\n    viewBox: \"0 0 30 22.48\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n    fill: \"#c2ac84\",\n    d: \"M29.7,0,.47,10.58a.7.7,0,0,0-.16,1.24l4.37,3L24.51,4.35,7.72,16.88V22a.44.44,0,0,0,.68.37l3.7-2.46,3.64,2.49a.71.71,0,0,0,1-.22L30,.34A.23.23,0,0,0,29.7,0Z\"\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MenuMailer);\n\n//# sourceURL=webpack:///./src/client/components/MenuMailer.js?");

/***/ }),

/***/ "./src/client/components/MenuToggler.js":
/*!**********************************************!*\
  !*** ./src/client/components/MenuToggler.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar MenuToggler = function MenuToggler() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"svg\", {\n    className: \"menutoggler\",\n    height: \"30\",\n    width: \"45\",\n    viewBox: \"0 0 30 12\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"rect\", {\n    width: \"30\",\n    height: \"2\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"rect\", {\n    x: \"8\",\n    y: \"6\",\n    width: \"22\",\n    height: \"2\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"rect\", {\n    x: \"18\",\n    y: \"12\",\n    width: \"12\",\n    height: \"2\"\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MenuToggler);\n\n//# sourceURL=webpack:///./src/client/components/MenuToggler.js?");

/***/ }),

/***/ "./src/client/components/Newsletter.js":
/*!*********************************************!*\
  !*** ./src/client/components/Newsletter.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html-react-parser */ \"html-react-parser\");\n/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(html_react_parser__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar Newsletter = function Newsletter(_ref) {\n  var data = _ref.data;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    id: \"newsletter\",\n    className: \"newsletter\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"newsletter__block\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"Newsletter\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, data.subtitel)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    className: \"newsletter__form\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"newsletter__form--block\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"newsletter__form--field\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    htmlFor: \"surname\"\n  }, data.vorname), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    required: true,\n    type: \"text\",\n    name: \"surname\"\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"newsletter__form--field\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    htmlFor: \"name\"\n  }, data.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    required: true,\n    type: \"text\",\n    name: \"name\"\n  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"newsletter__form--block\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"newsletter__form--field\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    htmlFor: \"email\"\n  }, data.email), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    required: true,\n    type: \"email\"\n  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"newsletter__datenschutz\"\n  }, html_react_parser__WEBPACK_IMPORTED_MODULE_1___default()(data.datenschutz.text), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"checkbox\",\n    required: true,\n    name: \"acceptance\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    htmlFor: \"acceptance\"\n  }, data.datenschutz.checkbox), html_react_parser__WEBPACK_IMPORTED_MODULE_1___default()(data.datenschutz.extra)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"submit\",\n    className: \"golden__button\",\n    value: data.datenschutz.button\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Newsletter);\n\n//# sourceURL=webpack:///./src/client/components/Newsletter.js?");

/***/ }),

/***/ "./src/client/components/opening/Galaxy.js":
/*!*************************************************!*\
  !*** ./src/client/components/opening/Galaxy.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-particles-js */ \"react-particles-js\");\n/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_particles_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar Galaxy = function Galaxy() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_particles_js__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    params: {\n      \"particles\": {\n        \"number\": {\n          \"value\": 600,\n          \"density\": {\n            \"enable\": true,\n            \"value_area\": 789.1476416322727\n          }\n        },\n        \"color\": {\n          \"value\": \"#ffffff\"\n        },\n        \"shape\": {\n          \"type\": \"circle\",\n          \"stroke\": {\n            \"width\": 0,\n            \"color\": \"#000000\"\n          },\n          \"polygon\": {\n            \"nb_sides\": 5\n          },\n          \"image\": {\n            \"src\": \"img/github.svg\",\n            \"width\": 100,\n            \"height\": 100\n          }\n        },\n        \"opacity\": {\n          \"value\": 0.5,\n          \"random\": false,\n          \"anim\": {\n            \"enable\": true,\n            \"speed\": 0.2,\n            \"opacity_min\": 0,\n            \"sync\": false\n          }\n        },\n        \"size\": {\n          \"value\": 1.6,\n          \"random\": true,\n          \"anim\": {\n            \"enable\": true,\n            \"speed\": 3,\n            \"size_min\": 0,\n            \"sync\": false\n          }\n        },\n        \"line_linked\": {\n          \"enable\": false\n        },\n        \"move\": {\n          \"enable\": true,\n          \"speed\": .5,\n          \"direction\": \"none\",\n          \"random\": true,\n          \"straight\": false,\n          \"out_mode\": \"out\",\n          \"bounce\": false,\n          \"attract\": {\n            \"enable\": false,\n            \"rotateX\": 600,\n            \"rotateY\": 1200\n          }\n        }\n      },\n      \"interactivity\": {\n        \"detect_on\": \"canvas\",\n        \"events\": {\n          \"onhover\": {\n            \"enable\": false,\n            \"mode\": \"bubble\"\n          },\n          \"onclick\": {\n            \"enable\": false,\n            \"mode\": \"push\"\n          },\n          \"resize\": true\n        },\n        \"modes\": {\n          \"grab\": {\n            \"distance\": 400,\n            \"line_linked\": {\n              \"opacity\": 1\n            }\n          },\n          \"bubble\": {\n            \"distance\": 83.91608391608392,\n            \"size\": 1,\n            \"duration\": 3,\n            \"opacity\": 1,\n            \"speed\": 3\n          },\n          \"repulse\": {\n            \"distance\": 200,\n            \"duration\": 0.4\n          },\n          \"push\": {\n            \"particles_nb\": 4\n          },\n          \"remove\": {\n            \"particles_nb\": 2\n          }\n        }\n      },\n      \"retina_detect\": true\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Galaxy);\n\n//# sourceURL=webpack:///./src/client/components/opening/Galaxy.js?");

/***/ }),

/***/ "./src/client/components/opening/Opening.js":
/*!**************************************************!*\
  !*** ./src/client/components/opening/Opening.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Scene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Scene */ \"./src/client/components/opening/Scene.js\");\n/* harmony import */ var _Galaxy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Galaxy */ \"./src/client/components/opening/Galaxy.js\");\n/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! html-react-parser */ \"html-react-parser\");\n/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(html_react_parser__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var pure_react_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! pure-react-carousel */ \"pure-react-carousel\");\n/* harmony import */ var pure_react_carousel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(pure_react_carousel__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nvar Opening = function Opening(_ref) {\n  var data = _ref.data;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"scene\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Galaxy__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"scene-background\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"scene-landscape\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Scene__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"home__slider\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(pure_react_carousel__WEBPACK_IMPORTED_MODULE_5__[\"CarouselProvider\"], {\n    naturalSlideWidth: 220,\n    naturalSlideHeight: 125,\n    totalSlides: data.length,\n    isPlaying: true,\n    interval: 5000,\n    infinite: true\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(pure_react_carousel__WEBPACK_IMPORTED_MODULE_5__[\"Slider\"], {\n    className: \"home__slider--wrapper\"\n  }, data.map(function (item, key) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n      href: item.link,\n      key: key\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(pure_react_carousel__WEBPACK_IMPORTED_MODULE_5__[\"Slide\"], {\n      index: key\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, item.titel), html_react_parser__WEBPACK_IMPORTED_MODULE_3___default()(item.inhalt)));\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(pure_react_carousel__WEBPACK_IMPORTED_MODULE_5__[\"DotGroup\"], {\n    dotNumbers: data.length\n  }))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Opening);\n\n//# sourceURL=webpack:///./src/client/components/opening/Opening.js?");

/***/ }),

/***/ "./src/client/components/opening/Scene.js":
/*!************************************************!*\
  !*** ./src/client/components/opening/Scene.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spring */ \"react-spring\");\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_1__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\nvar calc = function calc(x, y) {\n  return [x - window.innerWidth / 2, y - window.innerHeight / 2];\n};\n\nvar trans1 = function trans1(x, y) {\n  return \"translate3d(\".concat(parseInt(x / 8), \"px,\").concat(parseInt(y / 8), \"px,0)\");\n};\n\nvar trans2 = function trans2(x, y) {\n  return \"translate3d(\".concat(parseInt(x / 25 + 5), \"px,\").concat(parseInt(y / 10 / 10), \"px,0)\");\n}; // const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`\n// const trans4 = (x, y) > `translate3d(${x / 3.5}px,${y / 3.5}px,0)`\n\n\nvar Scene = function Scene() {\n  var _useSpring = Object(react_spring__WEBPACK_IMPORTED_MODULE_1__[\"useSpring\"])(function () {\n    return {\n      xy: [0, 0],\n      config: {\n        mass: 10,\n        // tension: 550,\n        friction: 40\n      }\n    };\n  }),\n      _useSpring2 = _slicedToArray(_useSpring, 2),\n      properties = _useSpring2[0],\n      setProperties = _useSpring2[1];\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"container\",\n    onMouseMove: function onMouseMove(_ref) {\n      var x = _ref.clientX,\n          y = _ref.clientY;\n      return setProperties({\n        xy: calc(x, y)\n      });\n    }\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_1__[\"animated\"].div, {\n    className: \"card1\",\n    style: {\n      transform: properties.xy.interpolate(trans1)\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_1__[\"animated\"].div, {\n    className: \"card2\",\n    style: {\n      transform: properties.xy.interpolate(trans2)\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Scene);\n\n//# sourceURL=webpack:///./src/client/components/opening/Scene.js?");

/***/ }),

/***/ "./src/client/pages/AboutUsPage.js":
/*!*****************************************!*\
  !*** ./src/client/pages/AboutUsPage.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions */ \"./src/client/actions/index.js\");\n/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Hero */ \"./src/client/components/Hero.js\");\n/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! html-react-parser */ \"html-react-parser\");\n/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(html_react_parser__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nvar AboutUsPage = function AboutUsPage() {\n  var aboutusData = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.aboutus;\n  });\n  var story = aboutusData.fields.uber_uns_story;\n  var philosophy = aboutusData.fields.uber_uns_philosophy;\n  var extra_text_1 = aboutusData.fields.uber_uns_extra_text.extra_text_block_1;\n  var extra_text_2 = aboutusData.fields.uber_uns_extra_text.extra_text_block_2;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Hero__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    data: aboutusData\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    id: \"content\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"story story--right\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"story__img backgroundImg\",\n    style: {\n      backgroundImage: \"url(\" + story.story_bild + \")\"\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"story__content\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n    className: \"title__lg\"\n  }, story.story_titel), html_react_parser__WEBPACK_IMPORTED_MODULE_4___default()(story.story_inhalt))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"extratext\"\n  }, html_react_parser__WEBPACK_IMPORTED_MODULE_4___default()(extra_text_1), html_react_parser__WEBPACK_IMPORTED_MODULE_4___default()(extra_text_2)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"story story--left\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"story__content\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n    className: \"title__lg\"\n  }, philosophy.philosophy_titel), html_react_parser__WEBPACK_IMPORTED_MODULE_4___default()(philosophy.philosophy_inhalt)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"story__img backgroundImg\",\n    style: {\n      backgroundImage: \"url(\" + philosophy.philosophy_bild + \")\"\n    }\n  }))));\n};\n\nfunction loadData(store) {\n  return store.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__[\"fetchAboutUs\"])());\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  loadData: loadData,\n  component: AboutUsPage\n});\n\n//# sourceURL=webpack:///./src/client/pages/AboutUsPage.js?");

/***/ }),

/***/ "./src/client/pages/HomePage.js":
/*!**************************************!*\
  !*** ./src/client/pages/HomePage.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions */ \"./src/client/actions/index.js\");\n/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! html-react-parser */ \"html-react-parser\");\n/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(html_react_parser__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_opening_Opening__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/opening/Opening */ \"./src/client/components/opening/Opening.js\");\n\n\n\n\n\n\nvar Home = function Home() {\n  var homeData = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.home;\n  });\n  var paragraphs = homeData.content.split(\"\\n\\r\");\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_opening_Opening__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    data: homeData.fields.text_slider\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"preface\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, html_react_parser__WEBPACK_IMPORTED_MODULE_3___default()(homeData.fields.titel)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"preface__blocks\"\n  }, paragraphs.map(function (paragraph, key) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n      key: key\n    }, paragraph);\n  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"pool pool--home\"\n  }, homeData.fields.routers.map(function (route, key) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n      key: key,\n      className: \"home__route\",\n      href: route.link\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"home__route--wrapper\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"home__route--img backgroundImg\",\n      style: {\n        backgroundImage: \"url(\" + route.bild + \")\"\n      }\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"home__route--content\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n      className: \"title__lg\"\n    }, route.titel), html_react_parser__WEBPACK_IMPORTED_MODULE_3___default()(route.inhalt), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      className: \"home__route--link\"\n    }, route.titel, \" \\u2192\"))));\n  })));\n};\n\nfunction loadData(store) {\n  return store.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__[\"fetchHome\"])());\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  loadData: loadData,\n  component: Home\n});\n\n//# sourceURL=webpack:///./src/client/pages/HomePage.js?");

/***/ }),

/***/ "./src/client/pages/LocationPage.js":
/*!******************************************!*\
  !*** ./src/client/pages/LocationPage.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions */ \"./src/client/actions/index.js\");\n/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! html-react-parser */ \"html-react-parser\");\n/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(html_react_parser__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var pure_react_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pure-react-carousel */ \"pure-react-carousel\");\n/* harmony import */ var pure_react_carousel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(pure_react_carousel__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nvar LocationPage = function LocationPage() {\n  var data = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.location;\n  });\n  console.log(data);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n    className: \"seo__hidden\"\n  }, data.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"singleloc\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"singleloc__info\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"singleloc__info--front\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: data.fields.location_info.location_logo,\n    alt: \"\".concat(data.title, \" Logo\"),\n    className: \"singleloc__info--img\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"singleloc__info--type\"\n  }, data.fields.subtitel), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"singleloc__info--buttons\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"/kontakt\",\n    className: \"singleloc__button\"\n  }, data.fields.buttongroup.anfragen), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: data.fields.location_info.location_factsheet,\n    className: \"singleloc__button\"\n  }, data.fields.buttongroup.datenblatt), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: data.fields.karte_link,\n    className: \"singleloc__button\"\n  }, data.fields.buttongroup.karte)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"singleloc__info--socialmedia\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: data.fields.social_media.facebook,\n    className: \"socialmedia__button\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: data.fields.social_media.instagram,\n    className: \"socialmedia__button\"\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"http://\".concat(data.fields.location_info.location_webseite),\n    className: \"singleloc__info--link\"\n  }, data.fields.location_info.location_webseite)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"singleloc__info--side\"\n  }, html_react_parser__WEBPACK_IMPORTED_MODULE_3___default()(data.content), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"singleloc__info--bullets\"\n  }, html_react_parser__WEBPACK_IMPORTED_MODULE_3___default()(data.fields.location_info.bulletpoints))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"singleloc__info--desc\"\n  }, data.fields.buttongroup.beschreibung)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"singleloc__detail\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"singleloc__gallery\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(pure_react_carousel__WEBPACK_IMPORTED_MODULE_4__[\"CarouselProvider\"], {\n    naturalSlideWidth: 220,\n    naturalSlideHeight: 125,\n    totalSlides: data.fields.location_gallery.length,\n    isPlaying: true,\n    interval: 5000,\n    infinite: true\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(pure_react_carousel__WEBPACK_IMPORTED_MODULE_4__[\"Slider\"], {\n    className: \"singleloc__gallery--wrapper\"\n  }, data.fields.location_gallery.map(function (item, imageKey) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(pure_react_carousel__WEBPACK_IMPORTED_MODULE_4__[\"Slide\"], {\n      key: imageKey,\n      index: imageKey\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      src: item\n    }));\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(pure_react_carousel__WEBPACK_IMPORTED_MODULE_4__[\"DotGroup\"], null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"singleloc__detail--data\"\n  }, Object.values(data.fields.technische_daten).map(function (locData, key) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      key: key,\n      className: \"singleloc__detail--dataitem\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, locData.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, locData.option));\n  })))));\n};\n\nfunction loadData(store) {\n  return store.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__[\"fetchLocation\"])());\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  loadData: loadData,\n  component: LocationPage\n});\n\n//# sourceURL=webpack:///./src/client/pages/LocationPage.js?");

/***/ }),

/***/ "./src/client/pages/LocationsPage.js":
/*!*******************************************!*\
  !*** ./src/client/pages/LocationsPage.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions */ \"./src/client/actions/index.js\");\n/* harmony import */ var _components_Breadcrumb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Breadcrumb */ \"./src/client/components/Breadcrumb.js\");\n\n\n\n\n\nvar LocationsPage = function LocationsPage() {\n  var data = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.locations;\n  });\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"page__title\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Breadcrumb__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    slug: data.slug,\n    title: data.title\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, data.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"locations\"\n  }, data.fields.location_infos.map(function (location, key) {\n    return location.location_info.sublocations === false ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n      key: key,\n      href: \"/locations/\".concat(location.location_info.location_name.toLowerCase()),\n      className: \"location__item\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, location.location_info.location_name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"location__item--wrapper\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"location__item--img backgroundImg\",\n      style: {\n        backgroundImage: \"url(\" + location.location_info.location_bild + \")\"\n      }\n    }))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      key: key,\n      className: \"location__item\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, location.location_info.location_name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"location__item--wrapper\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"location__item--img backgroundImg\",\n      style: {\n        backgroundImage: \"url(\" + location.location_info.location_bild + \")\"\n      }\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"location__item--subitemwrapper\"\n    }, location.location_info.sublocations.map(function (item, subKey) {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        key: subKey,\n        className: \"location__item--subitem\",\n        href: \"/locations\".concat(item.link)\n      }, item.name);\n    }))));\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    className: \"ubersicht\",\n    href: \"#daten\"\n  }, data.fields.location_scroll_text, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"\\u25BE\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    id: \"daten\",\n    className: \"locations__daten\"\n  }, data.fields.location_infos.map(function (info, infoKey) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      key: \"1\".concat(infoKey),\n      className: \"locations__daten--item\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      src: info.location_info.location_logo,\n      alt: \"\".concat(info.location_info.location_name, \" Logo\")\n    }), Object.values(info.technische_daten).map(function (locData, locKey) {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        key: locKey,\n        className: \"locations__daten--itemdata\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", null, locData.key), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, locData.value));\n    }));\n  })));\n};\n\nfunction loadData(store) {\n  return store.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__[\"fetchLocations\"])());\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  loadData: loadData,\n  component: LocationsPage\n});\n\n//# sourceURL=webpack:///./src/client/pages/LocationsPage.js?");

/***/ }),

/***/ "./src/client/pages/NotFoundPage.js":
/*!******************************************!*\
  !*** ./src/client/pages/NotFoundPage.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar NotFoundPage = function NotFoundPage(_ref) {\n  var _ref$staticContext = _ref.staticContext,\n      staticContext = _ref$staticContext === void 0 ? {} : _ref$staticContext;\n  staticContext.notFound = true;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Ooops, route not found\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  component: NotFoundPage\n});\n\n//# sourceURL=webpack:///./src/client/pages/NotFoundPage.js?");

/***/ }),

/***/ "./src/client/reducers/aboutusReducer.js":
/*!***********************************************!*\
  !*** ./src/client/reducers/aboutusReducer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ \"./src/client/actions/index.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_ABOUTUS\"]:\n      return action.payload.data;\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./src/client/reducers/aboutusReducer.js?");

/***/ }),

/***/ "./src/client/reducers/homeReducer.js":
/*!********************************************!*\
  !*** ./src/client/reducers/homeReducer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ \"./src/client/actions/index.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_HOME\"]:\n      return action.payload.data;\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./src/client/reducers/homeReducer.js?");

/***/ }),

/***/ "./src/client/reducers/index.js":
/*!**************************************!*\
  !*** ./src/client/reducers/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _layoutReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layoutReducer */ \"./src/client/reducers/layoutReducer.js\");\n/* harmony import */ var _homeReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homeReducer */ \"./src/client/reducers/homeReducer.js\");\n/* harmony import */ var _aboutusReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aboutusReducer */ \"./src/client/reducers/aboutusReducer.js\");\n/* harmony import */ var _locationsReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./locationsReducer */ \"./src/client/reducers/locationsReducer.js\");\n/* harmony import */ var _locationReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./locationReducer */ \"./src/client/reducers/locationReducer.js\");\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  layout: _layoutReducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  home: _homeReducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  aboutus: _aboutusReducer__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  locations: _locationsReducer__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  location: _locationReducer__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n}));\n\n//# sourceURL=webpack:///./src/client/reducers/index.js?");

/***/ }),

/***/ "./src/client/reducers/layoutReducer.js":
/*!**********************************************!*\
  !*** ./src/client/reducers/layoutReducer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ \"./src/client/actions/index.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_LAYOUT\"]:\n      return action.payload.data;\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./src/client/reducers/layoutReducer.js?");

/***/ }),

/***/ "./src/client/reducers/locationReducer.js":
/*!************************************************!*\
  !*** ./src/client/reducers/locationReducer.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ \"./src/client/actions/index.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_LOCATION\"]:\n      return action.payload.data;\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./src/client/reducers/locationReducer.js?");

/***/ }),

/***/ "./src/client/reducers/locationsReducer.js":
/*!*************************************************!*\
  !*** ./src/client/reducers/locationsReducer.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ \"./src/client/actions/index.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_LOCATIONS\"]:\n      return action.payload.data;\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./src/client/reducers/locationsReducer.js?");

/***/ }),

/***/ "./src/client/styles/main.scss":
/*!*************************************!*\
  !*** ./src/client/styles/main.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/client/styles/main.scss?");

/***/ }),

/***/ "./src/helpers/createStore.js":
/*!************************************!*\
  !*** ./src/helpers/createStore.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _client_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client/reducers */ \"./src/client/reducers/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (req, lang) {\n  var axiosInstance = axios__WEBPACK_IMPORTED_MODULE_3___default.a.create({\n    baseURL: \"http://goldendoor-api.narcissundtaurus.com/wp-json/gd/\".concat(lang),\n    params: {\n      slug: req.path,\n      language: lang\n    }\n  });\n  var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_client_reducers__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a.withExtraArgument(axiosInstance)));\n  return store;\n});\n\n//# sourceURL=webpack:///./src/helpers/createStore.js?");

/***/ }),

/***/ "./src/helpers/renderer.js":
/*!*********************************!*\
  !*** ./src/helpers/renderer.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _client_Routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../client/Routes */ \"./src/client/Routes.js\");\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (req, store, context) {\n  var content = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"Provider\"], {\n    store: store\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"StaticRouter\"], {\n    location: req.path,\n    context: context\n  }, Object(react_router_config__WEBPACK_IMPORTED_MODULE_4__[\"renderRoutes\"])(_client_Routes__WEBPACK_IMPORTED_MODULE_7__[\"default\"]))));\n  var helmet = react_helmet__WEBPACK_IMPORTED_MODULE_6__[\"Helmet\"].renderStatic();\n  return \"\\n\\t\\t<html>\\n\\t\\t\\t<head>\\n\\t\\t\\t\\t<meta charset=\\\"UTF-8\\\">\\n\\t\\t\\t\\t\".concat(helmet.title.toString(), \"\\n\\t\\t\\t\\t\").concat(helmet.meta.toString(), \"\\n\\t\\t\\t\\t<meta property=\\\"og:type\\\" content=\\\"website\\\">\\n\\t\\t\\t\\t<meta property=\\\"og:url\\\" content=\\\"https://goldendoor.group/\\\">\\n\\t\\t\\t\\t<meta property=\\\"og:site_name\\\" content=\\\"Golden Door Group\\\">\\n\\t\\t\\t\\t<meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n\\t\\t\\t\\t<link href=\\\"https://fonts.googleapis.com/css?family=Lato:400,900|Noto+Serif:400,700&display=swap\\\" rel=\\\"stylesheet\\\">\\n\\t\\t\\t\\t<link href=\\\"data:image/x-icon;\\\" rel=\\\"shortcut icon\\\" />\\n\\t\\t\\t\\t<link rel=\\\"stylesheet\\\" type=\\\"text/css\\\" href=\\\"/main.css\\\">\\n\\t\\t\\t</head>\\n\\t\\t\\t<body>\\n\\t\\t\\t\\t<div id=\\\"root\\\">\").concat(content, \"</div>\\n\\t\\t\\t\\t<script>window.__PRELOADED_STATE__ = \").concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_5___default()(store.getState()), \"</script>\\n\\t\\t\\t\\t<script src=\\\"/bundle.js\\\"></script>\\n\\t\\t\\t</body>\\n\\t\\t</html>\\n\\t\");\n});\n\n//# sourceURL=webpack:///./src/helpers/renderer.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ \"regenerator-runtime/runtime\");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _helpers_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/renderer */ \"./src/helpers/renderer.js\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _client_Routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./client/Routes */ \"./src/client/Routes.js\");\n/* harmony import */ var _helpers_createStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers/createStore */ \"./src/helpers/createStore.js\");\n\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_1___default()();\nvar PORT = process.env.PORT || 3000;\napp.use(compression__WEBPACK_IMPORTED_MODULE_2___default()());\napp.use(express__WEBPACK_IMPORTED_MODULE_1___default.a.static('public'));\napp.get('*', function (req, res) {\n  var lang = req.headers.cookie === 'lang=en' ? 'en' : 'de';\n  var store = Object(_helpers_createStore__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(req, lang);\n  var promises = Object(react_router_config__WEBPACK_IMPORTED_MODULE_4__[\"matchRoutes\"])(_client_Routes__WEBPACK_IMPORTED_MODULE_5__[\"default\"], req.path).map(function (_ref) {\n    var route = _ref.route;\n    return route.loadData ? route.loadData(store) : null;\n  }).map(function (promise) {\n    if (promise) {\n      return new Promise(function (resolve, reject) {\n        promise.then(resolve).catch(resolve);\n      });\n    }\n  });\n  Promise.all(promises).then(function () {\n    var context = {};\n    var content = Object(_helpers_renderer__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(req, store, context);\n\n    if (context.url) {\n      return res.redirect(301, context.url);\n    }\n\n    if (context.notFound) {\n      res.status(404);\n    }\n\n    res.cookie('lang', lang);\n    res.send(content);\n  });\n});\napp.listen(PORT, function () {\n  console.log('Listening on port 3000');\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "cookie-universal":
/*!***********************************!*\
  !*** external "cookie-universal" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-universal\");\n\n//# sourceURL=webpack:///external_%22cookie-universal%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "html-react-parser":
/*!************************************!*\
  !*** external "html-react-parser" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"html-react-parser\");\n\n//# sourceURL=webpack:///external_%22html-react-parser%22?");

/***/ }),

/***/ "pure-react-carousel":
/*!**************************************!*\
  !*** external "pure-react-carousel" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"pure-react-carousel\");\n\n//# sourceURL=webpack:///external_%22pure-react-carousel%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-helmet\");\n\n//# sourceURL=webpack:///external_%22react-helmet%22?");

/***/ }),

/***/ "react-particles-js":
/*!*************************************!*\
  !*** external "react-particles-js" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-particles-js\");\n\n//# sourceURL=webpack:///external_%22react-particles-js%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "react-spring":
/*!*******************************!*\
  !*** external "react-spring" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-spring\");\n\n//# sourceURL=webpack:///external_%22react-spring%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ }),

/***/ "regenerator-runtime/runtime":
/*!**********************************************!*\
  !*** external "regenerator-runtime/runtime" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"regenerator-runtime/runtime\");\n\n//# sourceURL=webpack:///external_%22regenerator-runtime/runtime%22?");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"serialize-javascript\");\n\n//# sourceURL=webpack:///external_%22serialize-javascript%22?");

/***/ })

/******/ });