import { uniq } from "_test";

const uniqTests = [
  {
    value: [1, 2, 3, 1, 2],
    expected: [1, 2, 3]
  },
  {
    value: ["a", "b", "c", "a"],
    expected: ["a", "b", "c"]
  },
  {
    param: "a",
    value: [{ a: 1 }, { a: 2 }, { a: 1 }],
    expected: [{ a: 1 }, { a: 2 }]
  }
];

test("uniq({}) throw an error if first param is not an array ", () => {
  return expect(() => uniq({})).toThrow();
});

test("uniq([], 1) throw an error if second param is not an string ", () => {
  return expect(() => uniq([], 1)).toThrow();
});

uniqTests.forEach(({ value, expected, param }) => {
  test(`uniq(${JSON.stringify(value)}) === ${JSON.stringify(expected)}`, () => {
    return expect(uniq(value, param)).toEqual(expected);
  });
});
