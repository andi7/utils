import { isUndefined } from "_src/type";
import { typeCheck } from "_src/common";

const uniq = typeCheck(
  (items, field) => {
    if (!isUndefined(field)) {
      return items.reduce(
        (acc, item) =>
          acc.find(elem => elem[field] === item[field]) ? acc : [...acc, item],
        []
      );
    }

    return Array.from(new Set(items));
  },
  ["array", "string|optional"]
);

export { uniq };
