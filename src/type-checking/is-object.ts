export const isObject = (val: unknown) =>
	Object.prototype.toString.call(val) === "[object Object]";
