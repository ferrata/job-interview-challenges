const solution = require("../src/is-string-beautiful");

test("case 1", () => {
  const inputString = "bbbaacdafe";
  expect(solution.isBeautiful(inputString)).toEqual(true);
});

test("case 2", () => {
  const inputString = "aabbb";
  expect(solution.isBeautiful(inputString)).toEqual(false);
});

test("case 3", () => {
  const inputString = "bbc";
  expect(solution.isBeautiful(inputString)).toEqual(false);
});

test("case 4", () => {
  const inputString = "afabccbddeeaa";
  expect(solution.isBeautiful(inputString)).toEqual(true);
});

test("case 5", () => {
  const inputString = "aabd";
  expect(solution.isBeautiful(inputString)).toEqual(false);
});
