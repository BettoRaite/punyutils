import { quickSort } from "./quick-sort";
import { getRandInt } from "../random/random";

describe("quick sort", () => {
  test("must sort the input number array in ascending order", () => {
    const arr = [0, 8, 1, 3, 4];
    const sorted = arr.sort((a, b) => a - b);
    expect(quickSort(arr)).toEqual(sorted);
  });

  for (let i = 0; i < 100; ++i) {
    test(`must sort the input number array in ascending order | test case ${i}`, () => {
      const arr = [];
      const arrLen = getRandInt(1, 10000);
      while (arr.length < arrLen) {
        arr.push(getRandInt(1, 100000));
      }
      const sorted = arr.sort((a, b) => a - b);
      expect(quickSort(arr)).toEqual(sorted);
    });
  }
});
