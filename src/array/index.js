import { isUndefined } from "_src/type";

const uniq = (items, field) => {
  if (!isUndefined(field)) {
    return items.reduce(
      (acc, item) =>
        acc.find(elem => elem.id === item.id) ? acc : [...acc, item],
      []
    );
  }

  return Array.from(new Set(items));
};

export { uniq };
