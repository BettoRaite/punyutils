/**
 * Performs a binary search on an input `arr`, until it finds the target or the search
 * space gets exhausted.
 * @param arr - A number array.
 * @param target - A target number.
 * @returns - Index of the `target` in the `arr` or -1 if `target` was not found in the input `arr`.
 */
export const binarySearch = (arr: unknown[], target: unknown): number => {
  if (!Array.isArray(arr)) {
    throw new TypeError("expected a number array.");
  }

  if (typeof target !== "number") {
    throw new TypeError("target must be a number.");
  }

  let lo = 0;
  let hi = arr.length;

  while (lo <= hi) {
    const m = Math.floor(lo + (hi - lo) / 2);
    const val = arr[m] as number;

    if (val === target) {
      return m;
    }

    if (target > val) {
      lo = m + 1;
    } else {
      hi = m - 1;
    }
  }
  return -1;
};
