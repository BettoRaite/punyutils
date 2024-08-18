import { getRandInt } from "../random/random.js";

/**
 * Returns an array filled with random integers between `min` and `max`
 * (inclusive), with the array length equal to `length`.
 *
 * @param min - Minimum value of the integer (inclusive).
 * @param max - Maximum value of the integer (inclusive).
 * @param length - Length of the returned array.
 * @returns An array filled with random integers between `min` and `max`,
 *          with a length of `length`.
 * @throws Error if `length` is negative or if `min` is greater than `max`.
 */
export const filledWithRandInt = (
  min: number,
  max: number,
  length: number
): number[] => {
  if (length < 0) {
    throw new Error("Length must be a non-negative integer.");
  }
  if (min > max) {
    throw new Error("Minimum value cannot be greater than maximum value.");
  }

  return Array.from({ length }, () => getRandInt(min, max));
};

/**
 * Filters unique characters from an array of strings.
 *
 * @param {unknown} arr - An array of strings.
 * @param {unknown} [regex] - An optional regular expression to filter characters.
 *                             If provided, only characters matching this regex will be included.
 * @throws {TypeError} Throws an error if `arr` is not an array.
 * @throws {TypeError} Throws an error if `regex` is provided and is not an instance of RegExp.
 * @throws {TypeError} Throws an error if any item in `arr` is not a string.
 *
 * @returns {string[]} An array of unique characters extracted from the `arr`.
 */
export const filterUniqueChars = (arr: unknown, regex?: unknown): string[] => {
  if (!Array.isArray(arr)) {
    throw new TypeError("Expected a string array.");
  }
  if (regex && !(regex instanceof RegExp)) {
    throw new TypeError("regex must be an instance of RegExp.");
  }
  const uniqueChars = new Set<string>();

  for (let i = 0; i < arr.length; ++i) {
    const item = arr[i];

    if (typeof item !== "string") {
      throw new TypeError(
        `Item at index: ${arr[i]} is not a string. \n Actual value: ${item}`
      );
    }

    for (const char of item) {
      if (regex instanceof RegExp && regex?.test(char)) {
        uniqueChars.add(char);
      }

      if (!regex) {
        uniqueChars.add(char);
      }
    }
  }

  return Array.from(uniqueChars.values());
};
