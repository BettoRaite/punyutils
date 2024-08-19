function qs(arr: number[], lo: number, hi: number) {
  if (lo < hi) {
    const pivot = partition(arr, lo, hi);
    qs(arr, lo, pivot - 1);
    qs(arr, pivot + 1, hi);
  }
}

function partition(arr: number[], lo: number, hi: number): number {
  const pivot = arr[hi];
  let head = lo - 1;

  for (let i = lo; i < hi; ++i) {
    if (arr[i] < pivot) {
      head++;
      const swap = arr[i];
      arr[i] = arr[head];
      arr[head] = swap;
    }
  }
  head++;
  arr[hi] = arr[head];
  arr[head] = pivot;
  return head;
}

export const quickSort = (arr: unknown[]) => {
  if (!Array.isArray(arr)) {
    throw new TypeError("Expected a number array.");
  }
  qs(arr as number[], 0, arr.length - 1);
  return arr;
};
