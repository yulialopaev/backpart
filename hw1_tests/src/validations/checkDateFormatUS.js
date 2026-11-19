export function checkDateFormatUS(date) {
    const datePattern = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/
    return datePattern.test(date)
}

