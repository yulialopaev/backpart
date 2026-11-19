import {describe, expect, test} from "@jest/globals";
import {checkLessEquals255} from "../src/validations/checkLessEquals255.js";


describe('checkLessEquals255', () => {
    test.each(
        [
            ["0", "0", true],
            ["9", "9", true],
            ["99", "99", true],
            ["100", "100", true],
            ["199", "199", true],
            ["200", "200", true],
            ["249", "249", true],
            ["250", "250", true],
            ["255", "255", true],
            ["256", "256", false],
            ["-1", "-1", false],
            ["2a5", "2a5", false],
            ["empty row", "", false],
            ["09", "09", false],
            ["009", "009", false],
        ]
    ) ('%s', (_caseName, value, expected) => {
            expect(checkLessEquals255(value)).toBe(expected);
    })
})