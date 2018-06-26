import {
  isObj,
  isPlainObj,
  isArray,
  isUndefined,
  isString,
  isNumber
} from "_test";

const types = {
  array: [],
  object: {},
  string: "",
  number: 1,
  undefined: undefined,
  null: null
};

const fns = [
  { fn: isObj, valid: ["object", "array"] },
  { fn: isPlainObj, valid: ["object"] },
  { fn: isArray, valid: ["array"] },
  { fn: isUndefined, valid: ["undefined"] },
  { fn: isString, valid: ["string"] },
  { fn: isNumber, valid: ["number"] }
];

fns.forEach(fn => {
  Object.entries(types).forEach(([type, value]) => {
    const expected = fn.valid.includes(type);
    const param = JSON.stringify(value);

    test(`${fn.fn.name}(${param}) === ${expected}`, () => {
      return expect(fn.fn(value)).toBe(expected);
    });
  });
});
