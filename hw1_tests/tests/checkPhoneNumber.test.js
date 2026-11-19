import {describe, expect, test} from "@jest/globals";
import {checkPhoneNumber} from "../src/validations/checkPhoneNumber.js";

describe("Phone Number Format Validation", () => {
    test.each([
        ["+12(34)1234-5678", "+12(34)1234-5678", true],
        ["12(34)1234-5678", "12(34)1234-5678", false],
        ["+1(34)1234-5678", "+1(34)1234-5678", false],
        ["+12341234-5678", "+12341234-5678", false],
        ["+12(34)1234-56789", "+12(34)1234-56789", false],
        ["+12(34)1a34-5678", "+12(34)1a34-5678", false],
    ])("%s", (_caseName, value, expected) => {
        expect(checkPhoneNumber(value)).toBe(expected)
    })
})