import { filterUniqueChars } from "./array";

describe("filterUniqueChars", () => {
  test("must return unique characters from a string array", () => {
    let arr = ["abc", "abc", "abc"];
    let unique = ["a", "b", "c"];
    expect(filterUniqueChars(arr)).toStrictEqual(unique);

    arr = ["会う", "明るい", "秋", "新しい", "暑い", "行く", "忙しい"];
    unique = [];

    const uniqueChars = new Set(unique);

    for (const item of arr) {
      for (const char of item) {
        uniqueChars.add(char);
      }
    }

    unique = Array.from(uniqueChars);

    expect(filterUniqueChars(arr)).toStrictEqual(unique);
  });

  test("must return unique characters from a string array if character passes regex test", () => {
    function filter(arr: string[], regex: RegExp): string[] {
      const uniqueChars = new Set<string>();

      for (const item of arr) {
        for (const char of item) {
          if (regex.test(char)) {
            uniqueChars.add(char);
          }
        }
      }

      return Array.from(uniqueChars);
    }
    let arr = ["食べる", "楽しい", "春", "古い", "寒い", "見る", "静か"];
    const regex = /\p{Script=Han}/u;
    let unique = filter(arr, regex);

    expect(filterUniqueChars(arr, regex)).toStrictEqual(unique);

    arr = ["会う", "明るい", "秋", "新しい", "暑い", "行く", "忙しい"];
    unique = filter(arr, regex);

    expect(filterUniqueChars(arr, regex)).toStrictEqual(unique);
  });
  test("should throw if non-array is passed", () => {
    expect(() => filterUniqueChars({})).toThrowError(
      "Expected a string array."
    );
  });
  test("should throw if non-array is passed", () => {
    expect(() => filterUniqueChars({})).toThrowError(
      "Expected a string array."
    );
    expect(() => filterUniqueChars(1)).toThrowError("Expected a string array.");
  });
  test("should throw if not an instance of RegExp is passed.", () => {
    expect(() => filterUniqueChars([], {})).toThrowError(/an instance of/);
    expect(() => filterUniqueChars([], 1)).toThrowError(/an instance of/);
    expect(() => filterUniqueChars([], true)).toThrowError(/an instance of/);
  });

  test("should throw any array item is not a string.", () => {
    expect(() => filterUniqueChars(["asdasd", undefined])).toThrowError(
      /Item at index/
    );
    expect(() => filterUniqueChars([undefined])).toThrowError(/Item at index/);
    expect(() => filterUniqueChars(["asd", " asd", true])).toThrowError(
      /Item at index/
    );
  });
});
