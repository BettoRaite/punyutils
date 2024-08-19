/**
 * Checks whether value is in fact an object.
 * @param val - Any value
 * @returns - True if value is an object or false otherwise.
 */
export const isObject = (val: unknown) =>
  Object.prototype.toString.call(val) === "[object Object]";
