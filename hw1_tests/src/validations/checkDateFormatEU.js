export function checkDateFormatEU(date) {
    const dateFormatPattern = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\.(0[1-9]|1[0-2])\.\d{4}$/;
    return dateFormatPattern.test(date)
}