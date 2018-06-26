import { typeCheck } from "_src/common";

const capitalize = typeCheck(
  str => str.charAt(0).toUpperCase() + str.slice(1),
  ["string"]
);

export { capitalize };
