const _range = (n, m) => [...Array(m - n).keys()].map(k => k + n);

const _getType = val =>
  ({}.toString
    .call(val)
    .match(/\s(\w+)/)[1]
    .toLowerCase());

export { _range, _getType };
