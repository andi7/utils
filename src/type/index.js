const isObj = val => !!val && val instanceof Object;

const isPlainObj = val => !!val && val.constructor === Object;

const isUndefined = val => typeof val === "undefined";

const isArray = val => Array.isArray(val);

const isString = val => typeof val === "string";

const isNumber = val => typeof val === "number";

export { isObj, isPlainObj, isUndefined, isArray, isString, isNumber };
