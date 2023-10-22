const { describe, expect, test } = require("@jest/globals");
const mapping = require("./index");

describe("exercise2 - problem6", () => {
  test.each([
    { arr: ["a", "b", "c"], expected: { a: "A", b: "B", c: "C" } },
    { arr: ["p", "s", "t"], expected: { p: "P", s: "S", t: "T" } },
    { arr: ["a", "v", "y", "z"], expected: { a: "A", v: "V", y: "Y", z: "Z" } },
  ])(".mapping($arr)", ({ arr, expected }) => {
    expect(mapping(arr)).toEqual(expected);
  });
});<<<<<<< HEAD
const { describe, expect, test } = require("@jest/globals");
const mapping = require("./index");

describe("exercise2 - problem6", () => {
  test.each([
    { arr: ["a", "b", "c"], expected: { a: "A", b: "B", c: "C" } },
    { arr: ["p", "s", "t"], expected: { p: "P", s: "S", t: "T" } },
    { arr: ["a", "v", "y", "z"], expected: { a: "A", v: "V", y: "Y", z: "Z" } },
  ])(".mapping($arr)", ({ arr, expected }) => {
    expect(mapping(arr)).toEqual(expected);
  });
=======
import {describe, expect, test}
import mapping from "./index";

describe("exercise2 - problem6", () => {
	test.each([
		{arr: ["a", "b", "c"], expected: {a: "A", b: "B", c: "C"}},
		{arr: ["p", "s", "t"], expected: {p: "P", s: "S", t: "T"}},
		{arr: ["a", "v", "y", "z"], expected: {a: "A", v: "V", y: "Y", z: "Z"}},
	])(".mapping($arr)", ({arr, expected}) => {
		expect(mapping(arr)).toEqual(expected);
	});
>>>>>>> b30e4c6347463726cae2f3b2120d265d95e21ba2
});
