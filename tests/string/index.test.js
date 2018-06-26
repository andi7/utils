import { capitalize } from "_test";

const capitalizeTests = [
  { value: "test", expected: "Test" },
  { value: "testTest", expected: "TestTest" },
  { value: "TEST", expected: "TEST" }
];

test("capitalize({}) throw an error if param 0 is not an string ", () => {
  return expect(() => capitalize({})).toThrow();
});

capitalizeTests.forEach(({ value, expected }) =>
  test(`capitalize(${value}) === '${expected}'`, () => {
    expect(capitalize(value)).toBe(expected);
  })
);
