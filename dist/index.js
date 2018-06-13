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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPath = exports.setPath = exports.clone = exports.range = exports.isObject = exports.uniq = exports.genId = exports.deepFindKey = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _helpers = __webpack_require__(1);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var isObject = function isObject(val) {
  return !!val && val.constructor === Object;
};

var deepFindKey = function deepFindKey(obj, key) {
  var immediate = obj && obj[key];
  if (!!immediate) {
    return immediate;
  }

  for (var objKey in obj) {
    var val = obj[objKey];
    if ((typeof val === "undefined" ? "undefined" : _typeof(val)) === "object") {
      var found = deepFindKey(val, key);
      if (found) {
        return found;
      }
    }
  }
};

var setPath = function setPath() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var val = arguments[2];

  if (isUndefined(val)) {
    return;
  }

  var keys = (0, _helpers.formattedPath)(path).split(".").filter(function (key) {
    return key !== "";
  });

  while (keys.length > 0) {
    var key = (0, _helpers.matchedKey)(keys.shift()).value;

    if (keys.length === 0) {
      obj[key] = val;
    } else {
      if (!obj[key]) {
        obj[key] = (0, _helpers.matchedKey)(keys[0]).match ? [] : {};
      }

      obj = obj[key];
    }
  }
};

var getPath = function getPath() {
  var object = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  return (0, _helpers.formattedPath)(path).replace(/\[(\d+)\]/g, "$1").split(".").reduce(function (obj, key) {
    return obj ? obj[key] : undefined;
  }, object);
};

var range = function range() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var _args = args,
      _args2 = _slicedToArray(_args, 2),
      from = _args2[0],
      to = _args2[1];

  if (to) {
    args = from > to ? [to, from] : [from, to];
    return _helpers._range.apply(undefined, _toConsumableArray(args));
  }

  return (0, _helpers._range)(0, from);
};

var clone = function clone(data) {
  return JSON.parse(JSON.stringify(data));
};

var genId = function genId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
};

var isUndefined = function isUndefined(val) {
  return typeof val === "undefined";
};

var uniq = function uniq(items, field) {
  if (isUndefined(field)) {
    return items.reduce(function (acc, item) {
      return acc.find(function (elem) {
        return elem.id === item.id;
      }) ? acc : [].concat(_toConsumableArray(acc), [item]);
    }, []);
  }

  return Array.from(new Set(items));
};

var compose = function compose() {
  for (var _len2 = arguments.length, fns = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    fns[_key2] = arguments[_key2];
  }

  return function (val) {
    return fns.reduce(function (acc, fn) {
      return fn(acc);
    }, val);
  };
};

exports.deepFindKey = deepFindKey;
exports.genId = genId;
exports.uniq = uniq;
exports.isObject = isObject;
exports.range = range;
exports.clone = clone;
exports.setPath = setPath;
exports.getPath = getPath;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var formattedPath = function formattedPath(path) {
  return path.replace(/\[["'`]([\w\d]+)["'`]\]/g, "$1").split(/(\[\d+\])/).join(".").replace(/\.+/g, ".");
};

var _range = function _range(n, m) {
  return [].concat(_toConsumableArray(Array(m - n).keys())).map(function (k) {
    return k + n;
  });
};

var matchedKey = function matchedKey(key) {
  var match = key.match(/\[(\d+)\]/);

  if (match) {
    key = parseInt(match[1]);
  }

  return { match: match, value: key };
};

exports.matchedKey = matchedKey;
exports.formattedPath = formattedPath;
exports._range = _range;

/***/ })
/******/ ]);