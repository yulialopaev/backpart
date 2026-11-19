import {describe, expect, test} from "@jest/globals";
import {checkDateFormatEU} from "../src/validations/checkDateFormatEU.js";

describe("checkDateFormatEU", () => {
    test.each(
        [
            ["25.01.2018", "25.01.2018", true], //
            ["12/12/2018", "12/12/2018", false],
            ["32.01.2018", "32.01.2018", false],
            ["12.15.2018", "12.15.2018", false],
            ["25.01.18", "25.01.18", false],
            ["2018.12.08", "2018.12.08", false],
            ["31.02.2024", "31.02.2024", true] //

        ]
    )("%s", (_caseName, value, expected) => {
        expect(checkDateFormatEU(value)).toBe(expected);
    })
})