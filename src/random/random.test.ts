import { getRandInt } from "./random";
import { describe, expect, test } from "vitest";

describe("getRandInt", () => {
    test("should generate random integer with inclusive min, max", ()=>{
        let result = getRandInt(0, 1);
        expect([0, 1]).toContain(result);
        
        result = getRandInt(0, 2);
        expect([0, 1, 2]).toContain(result);
    })
})