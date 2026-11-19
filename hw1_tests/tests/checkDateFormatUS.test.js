import {describe, expect, test} from "@jest/globals";
import {checkDateFormatUS} from "../src/validations/checkDateFormatUS.js";

describe("checkDateFormatUS", () => {
    test.each([
        ["2024-12-31", "2024-12-31", true],
        ["12-31-2024", "12-31-2024", false],
        ["2024/12/08", "2024/12/08", false],
        ["2024-13-03", "2024-13-03", false],
        ["2024-12-32", "2024-12-32", false],
        ["24-02-29", "24-02-29", false],
        ["2024-02-31", "2024-02-31", true],
    ])("%s", (_caseName, value, expected) => {
        expect(checkDateFormatUS(value)).toBe(expected);
    })
})