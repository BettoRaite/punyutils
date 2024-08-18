import { Queue } from "./queue";
import { describe, expect, test, beforeEach } from "vitest";
import { getRandInt } from "../random/random";

describe("queue", () => {
	let queue = new Queue();
	beforeEach(() => {
		queue = new Queue();
	});

	describe("length", () => {
		test("should equal to the number of items enqueued", () => {
			const items = getRandInt(0, 100);
			for (let i = 0; i < items; ++i) {
				queue.enqueue(i);
			}
			expect(queue.length).toBe(items);
		});
		test("should equal to the number of items enqueued", () => {
			const items = 100;
			for (let i = 0; i < items; ++i) {
				queue.enqueue(i);
			}
			expect(queue.length).toBe(items);
		});
		test("should equal to the number of items enqueued", () => {
			const items = 43;
			for (let i = 0; i < items; ++i) {
				queue.enqueue(i);
			}
			expect(queue.length).toBe(items);
		});
		test("should equal to 0 if n items enqueued and n items dequeued", () => {
			const items = 43;
			for (let i = 0; i < items; ++i) {
				queue.enqueue(i);
			}
			for (let i = 0; i < items; ++i) {
				queue.dequeue();
			}
			expect(queue.length).toBe(0);
		});
		test("should equal to n items enqueued - n items dequeued", () => {
			const items = 43;
			const dequeuedItems = 23;
			for (let i = 0; i < items; ++i) {
				queue.enqueue(i);
			}
			for (let i = 0; i < dequeuedItems; ++i) {
				queue.dequeue();
			}
			expect(queue.length).toBe(items - dequeuedItems);
		});
	});

	describe("enqueue", () => {
		test("enqueued and dequeued item should be the same", () => {
			const item = {};
			queue.enqueue(item);
			expect(queue.dequeue()).toBe(item);
		});
	});
});
