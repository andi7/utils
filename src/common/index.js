import { isUndefined } from '_src/type';
import { _range, _getType } from './helpers';

const clone = data => JSON.parse(JSON.stringify(data));

const genId = () => Date.now().toString(36) + Math.random().toString(36).substr(2, 5);

const compose = (...fns) => val => fns.reduce((acc, fn) => fn(acc), val);

const range = (...args) => {
  let [from, to] = args;
  if (to) {
    args = from > to ? [to, from] : [from, to];
    return _range(...args);
  }

  return _range(0, from);
};

const typeCheck = (fn, flags) => {
  return (...args) => {
    flags.forEach((flag, i) => {
      const type = flag.split('|')[0] || 'any';
      const isOptional = !!flag.match('optional') && isUndefined(args[i]);

      if (!isOptional && type !== 'any' && _getType(args[i]) !== type) {
        throw new Error(`Type error: param ${i} must be of type ${type}`);
      }
    });

    return fn(...args);
  };
};

const decodeQs = (searchUrl = '') =>
  searchUrl
    .slice(1)
    .split('&')
    .reduce((acc, item) => {
      const [key, value] = item.split('=');
      return { ...acc, [key]: decodeURIComponent(value) };
    }, {});

const getQs = obj =>
  obj
    ? '?' +
      Object.entries(obj)
        .map(([key, val]) => {
          const value = typeof val === 'object' ? btoa(JSON.stringify(val)) : val;
          return `${key}=${encodeURIComponent(value)}`;
        })
        .join('&')
    : '';

const changeRoute = params => {
  if (window) {
    const { origin, pathname } = window.location;
    const url = `${origin}${pathname}`;
    const path = url + getQs(params);

    window.history.pushState({ path }, '', path);
  }
};

export { clone, genId, compose, range, typeCheck, decodeQs, getQs, changeRoute };
