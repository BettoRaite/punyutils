import { isPositiveInt } from "./is-positive";

describe("is positive integer", () => {
  test("should return false if value >= 0 and an not integer", () => {
    expect(isPositiveInt(1.1)).toEqual(false);
  });
  test("should return true if value >= 0 and an integer", () => {
    expect(isPositiveInt(1)).toEqual(true);
  });
  test("should return true if value >= 0 and an integer", () => {
    expect(isPositiveInt(0)).toEqual(true);
  });
  test("should return false if value < 0 ", () => {
    expect(isPositiveInt(-1)).toEqual(false);
    expect(isPositiveInt(-1.3)).toEqual(false);
  });
});
