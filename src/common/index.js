import { _range } from "./helpers";

const clone = data => JSON.parse(JSON.stringify(data));

const genId = () =>
  Date.now().toString(36) +
  Math.random()
    .toString(36)
    .substr(2, 5);

const compose = (...fns) => val => fns.reduce((acc, fn) => fn(acc), val);

const range = (...args) => {
  let [from, to] = args;
  if (to) {
    args = from > to ? [to, from] : [from, to];
    return _range(...args);
  }

  return _range(0, from);
};

export { clone, genId, compose, range };
