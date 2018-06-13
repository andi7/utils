import { formattedPath, _range, matchedKey } from "./helpers";

const isObject = val => !!val && val.constructor === Object;

const deepFindKey = (obj, key) => {
  const immediate = obj && obj[key];
  if (!!immediate) {
    return immediate;
  }

  for (let objKey in obj) {
    const val = obj[objKey];
    if (typeof val === "object") {
      const found = deepFindKey(val, key);
      if (found) {
        return found;
      }
    }
  }
};

const setPath = (obj = {}, path = "", val) => {
  if (isUndefined(val)) {
    return;
  }

  const keys = formattedPath(path)
    .split(".")
    .filter(key => key !== "");

  while (keys.length > 0) {
    let key = matchedKey(keys.shift()).value;

    if (keys.length === 0) {
      obj[key] = val;
    } else {
      if (!obj[key]) {
        obj[key] = matchedKey(keys[0]).match ? [] : {};
      }

      obj = obj[key];
    }
  }
};

const getPath = (object = {}, path = "") =>
  formattedPath(path)
    .replace(/\[(\d+)\]/g, "$1")
    .split(".")
    .reduce((obj, key) => (obj ? obj[key] : undefined), object);

const range = (...args) => {
  let [from, to] = args;
  if (to) {
    args = from > to ? [to, from] : [from, to];
    return _range(...args);
  }

  return _range(0, from);
};

const clone = data => JSON.parse(JSON.stringify(data));

const genId = () =>
  Date.now().toString(36) +
  Math.random()
    .toString(36)
    .substr(2, 5);

const isUndefined = val => typeof val === "undefined";

const uniq = (items, field) => {
  if (isUndefined(field)) {
    return items.reduce(
      (acc, item) =>
        acc.find(elem => elem.id === item.id) ? acc : [...acc, item],
      []
    );
  }

  return Array.from(new Set(items));
};

const compose = (...fns) => {
  return val => {
    return fns.reduce((acc, fn) => fn(acc), val);
  };
};

export { deepFindKey, genId, uniq, isObject, range, clone, setPath, getPath };
