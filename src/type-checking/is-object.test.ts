import { isObject } from "./is-object";
describe("is-object", () => {
	test("should return true if value is an object", () => {
		expect(isObject({})).toBe(true);
	});
	test("should return false if value is not an object", () => {
		const values = [null, undefined, 1, "", true];
		const result = values.map(() => false);

		expect(values.map(isObject)).toEqual(result);
	});
	test("should return false if value is not an object", () => {
		expect(isObject(1)).toBe(false);
	});
});
