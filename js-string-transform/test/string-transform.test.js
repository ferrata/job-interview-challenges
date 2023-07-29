const stringTransform = require("../src/string-transform");

test("case 1", () => {
  const result = stringTransform.stringTransform(
    "5.0,100,5.5,101,6.0,102:L10;5.0,99,5.5,100,6.0,101:L20;"
  );

  expect(result).toStrictEqual([
    ["", "L10", "L20"],
    ["5.0", "100", "99"],
    ["5.5", "101", "100"],
    ["6.0", "102", "101"],
  ]);
});

test("case 2", () => {
  const result = stringTransform.stringTransform(
    "5.0,100,5.5,101,6.0,102:L10;5.0,99,5.5,100,6.0,101:L20;5.0,110,5.5,108,6.0,65:L30;"
  );

  expect(result).toStrictEqual([
    ["", "L10", "L20", "L30"],
    ["5.0", "100", "99", "110"],
    ["5.5", "101", "100", "108"],
    ["6.0", "102", "101", "65"],
  ]);
});

test("case 3", () => {
  const result = stringTransform.stringTransform(
    "5.0,100,5.5,101,6.0,102,7.0,125:L10;5.0,99,5.5,100,6.0,101,7.5,98:L20;7.0,107:L30"
  );

  expect(result).toStrictEqual([
    ["", "L10", "L20", "L30"],
    ["5.0", "100", "99", ""],
    ["5.5", "101", "100", ""],
    ["6.0", "102", "101", ""],
    ["7.0", "125", "", "107"],
    ["7.5", "", "98", ""],
  ]);
});
