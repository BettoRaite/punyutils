import { binarySearch } from "./binary-search";
import { getRandInt } from "../random/random";

describe("binarySearch", () => {
  test("should return index of target if it exists in the input array", () => {
    const arr = [1, 2, 3, 4, 5];
    const target = 5;
    const idx = arr.indexOf(target);
    expect(binarySearch(arr, target)).toEqual(idx);
  });

  test("should return -1 if empty array is passed", () => {
    expect(binarySearch([], 1)).toEqual(-1);
  });

  for (let i = 0; i < 100; ++i) {
    test(`should return index of target if it exists in the input array - test case ${i}`, () => {
      const unique = new Set<number>();
      const len = 100;

      while (unique.size < len) {
        unique.add(getRandInt(0, 100000));
      }

      const arr = Array.from(unique).sort((a, b) => a - b);
      const target = arr[getRandInt(0, arr.length - 1)];
      const idx = arr.indexOf(target);

      expect(binarySearch(arr, target)).toEqual(idx);
    });
  }

  test("should return -1  if target does not exist in the input array", () => {
    const arr = [1, 2, 3, 4, 5];
    const target = 5;
    const idx = arr.indexOf(target);
    expect(binarySearch(arr, target)).toEqual(idx);
  });

  test("should throw TypeError if input is not an array", () => {
    expect(() => binarySearch(null as unknown as unknown[], 1)).toThrow(
      TypeError
    );
    expect(() => binarySearch({} as unknown as unknown[], 1)).toThrow(
      TypeError
    );
    expect(() =>
      binarySearch("not an array" as unknown as unknown[], 1)
    ).toThrow(TypeError);
  });

  test("should throw TypeError if target is not a number", () => {
    const arr = [1, 2, 3];
    expect(() => binarySearch(arr, null)).toThrow(TypeError);
    expect(() => binarySearch(arr, "string")).toThrow(TypeError);
  });
});
