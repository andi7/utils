import { isObj, isUndefined } from "_src/type";
import { clone } from "_src/common";
import { formattedPath, matchedKey } from "./helpers";

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

const mapKeys = (obj, fn) =>
  Object.entries(obj).reduce(
    (acc, [key, val]) => ({ ...acc, [fn(val, key)]: val }),
    {}
  );

const mapValues = (obj, fn) =>
  Object.entries(obj).reduce(
    (acc, [key, val]) => ({ ...acc, [key]: fn(val, key) }),
    {}
  );

const merge = (obj, other) => {
  return Object.entries(other).reduce((acc, [key, val]) => {
    acc[key] = isObj(val) && isObj(acc[key]) ? merge(acc[key], val) : val;
    return acc;
  }, clone(obj));
};

export { deepFindKey, setPath, getPath, mapKeys, mapValues };
