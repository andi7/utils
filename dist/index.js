(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var isObj = function isObj(val) {
  return !!val && val instanceof Object;
};

var isPlainObj = function isPlainObj(val) {
  return !!val && val.constructor === Object;
};

var isUndefined = function isUndefined(val) {
  return typeof val === "undefined";
};

var isArray = function isArray(val) {
  return Array.isArray(val);
};

var isString = function isString(val) {
  return typeof val === "string";
};

var isNumber = function isNumber(val) {
  return typeof val === "number";
};

exports.isObj = isObj;
exports.isPlainObj = isPlainObj;
exports.isUndefined = isUndefined;
exports.isArray = isArray;
exports.isString = isString;
exports.isNumber = isNumber;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeRoute = exports.getQs = exports.decodeQs = exports.typeCheck = exports.range = exports.compose = exports.genId = exports.clone = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _type = __webpack_require__(0);

var _helpers = __webpack_require__(3);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var clone = function clone(data) {
  return JSON.parse(JSON.stringify(data));
};

var genId = function genId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
};

var compose = function compose() {
  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function (val) {
    return fns.reduce(function (acc, fn) {
      return fn(acc);
    }, val);
  };
};

var range = function range() {
  for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
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

var typeCheck = function typeCheck(fn, flags) {
  return function () {
    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    flags.forEach(function (flag, i) {
      var type = flag.split('|')[0] || 'any';
      var isOptional = !!flag.match('optional') && (0, _type.isUndefined)(args[i]);

      if (!isOptional && type !== 'any' && (0, _helpers._getType)(args[i]) !== type) {
        throw new Error('Type error: param ' + i + ' must be of type ' + type);
      }
    });

    return fn.apply(undefined, args);
  };
};

var decodeQs = function decodeQs() {
  var searchUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return searchUrl.slice(1).split('&').reduce(function (acc, item) {
    var _item$split = item.split('='),
        _item$split2 = _slicedToArray(_item$split, 2),
        key = _item$split2[0],
        value = _item$split2[1];

    return _extends({}, acc, _defineProperty({}, key, decodeURIComponent(value)));
  }, {});
};

var getQs = function getQs(obj) {
  return obj ? '?' + Object.entries(obj).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        val = _ref2[1];

    var value = (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' ? btoa(JSON.stringify(val)) : val;
    return key + '=' + encodeURIComponent(value);
  }).join('&') : '';
};

var changeRoute = function changeRoute(params) {
  if (typeof window !== 'undefined') {
    var _window$location = window.location,
        origin = _window$location.origin,
        pathname = _window$location.pathname;

    var url = '' + origin + pathname;
    var path = url + getQs(params);

    window.history.pushState({ path: path }, '', path);
  }
};

exports.clone = clone;
exports.genId = genId;
exports.compose = compose;
exports.range = range;
exports.typeCheck = typeCheck;
exports.decodeQs = decodeQs;
exports.getQs = getQs;
exports.changeRoute = changeRoute;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _common = __webpack_require__(1);

Object.keys(_common).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _common[key];
    }
  });
});

var _array = __webpack_require__(4);

Object.keys(_array).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _array[key];
    }
  });
});

var _object = __webpack_require__(5);

Object.keys(_object).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _object[key];
    }
  });
});

var _string = __webpack_require__(7);

Object.keys(_string).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _string[key];
    }
  });
});

var _type = __webpack_require__(0);

Object.keys(_type).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _type[key];
    }
  });
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var _range = function _range(n, m) {
  return [].concat(_toConsumableArray(Array(m - n).keys())).map(function (k) {
    return k + n;
  });
};

var _getType = function _getType(val) {
  return {}.toString.call(val).match(/\s(\w+)/)[1].toLowerCase();
};

exports._range = _range;
exports._getType = _getType;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.chunk = exports.uniq = undefined;

var _type = __webpack_require__(0);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var uniq = function uniq(items, field) {
  if (!(0, _type.isUndefined)(field)) {
    return items.reduce(function (acc, item) {
      return acc.find(function (elem) {
        return elem[field] === item[field];
      }) ? acc : [].concat(_toConsumableArray(acc), [item]);
    }, []);
  }

  return Array.from(new Set(items));
};

var chunk = function chunk(arr, size) {
  var returnValue = [];

  for (var i = 0; i < arr.length; i += size) {
    returnValue.push(arr.slice(i, i + size));
  }

  return returnValue;
};

exports.uniq = uniq;
exports.chunk = chunk;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deepMapKeys = exports.mapValues = exports.mapKeys = exports.getPath = exports.setPath = exports.deepFindKey = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _type = __webpack_require__(0);

var _common = __webpack_require__(1);

var _helpers = __webpack_require__(6);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var deepFindKey = function deepFindKey(obj, key) {
  var immediate = obj && obj.hasOwnProperty(key);
  if (!!immediate) {
    return obj[key];
  }

  for (var objKey in obj) {
    var val = obj[objKey];
    if ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object') {
      var found = deepFindKey(val, key);
      if (found) {
        return found;
      }
    }
  }
};

var setPath = function setPath() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var val = arguments[2];

  if ((0, _type.isUndefined)(val)) {
    return;
  }

  var keys = (0, _helpers.formattedPath)(path).split('.').filter(function (key) {
    return key !== '';
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
  var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return (0, _helpers.formattedPath)(path).replace(/\[(\d+)\]/g, '$1').split('.').reduce(function (obj, key) {
    return obj ? obj[key] : undefined;
  }, object);
};

var mapKeys = function mapKeys(obj, fn) {
  return Object.entries(obj).reduce(function (acc, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        val = _ref2[1];

    return _extends({}, acc, _defineProperty({}, fn(key, val), val));
  }, {});
};

var mapValues = function mapValues(obj, fn) {
  return Object.entries(obj).reduce(function (acc, _ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        key = _ref4[0],
        val = _ref4[1];

    return _extends({}, acc, _defineProperty({}, key, fn(key, val)));
  }, {});
};

var deepMapKeys = function deepMapKeys(obj, fn) {
  if (!(0, _type.isPlainObj)(obj)) {
    return obj;
  }

  return Object.entries(obj).reduce(function (acc, _ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
        key = _ref6[0],
        value = _ref6[1];

    if ((0, _type.isPlainObj)(value)) {
      value = deepMapKeys(value, fn);
    } else if ((0, _type.isArray)(value)) {
      value = value.map(function (val) {
        return deepMapKeys(val, fn);
      });
    }

    return _extends({}, acc, _defineProperty({}, fn(key, value), value));
  }, {});
};

var merge = function merge(obj, other) {
  return Object.entries(other).reduce(function (acc, _ref7) {
    var _ref8 = _slicedToArray(_ref7, 2),
        key = _ref8[0],
        val = _ref8[1];

    acc[key] = (0, _type.isObj)(val) && (0, _type.isObj)(acc[key]) ? merge(acc[key], val) : val;
    return acc;
  }, (0, _common.clone)(obj));
};

exports.deepFindKey = deepFindKey;
exports.setPath = setPath;
exports.getPath = getPath;
exports.mapKeys = mapKeys;
exports.mapValues = mapValues;
exports.deepMapKeys = deepMapKeys;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var formattedPath = function formattedPath(path) {
  return path.replace(/\[["'`]([\w\d]+)["'`]\]/g, "$1").split(/(\[\d+\])/).join(".").replace(/\.+/g, ".");
};

var matchedKey = function matchedKey(key) {
  var match = key.match(/\[(\d+)\]/);

  if (match) {
    key = parseInt(match[1]);
  }

  return { match: match, value: key };
};

exports.formattedPath = formattedPath;
exports.matchedKey = matchedKey;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var capitalize = function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

exports.capitalize = capitalize;

/***/ })
/******/ ]);
});