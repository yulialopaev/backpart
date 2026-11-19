export function checkLessEquals255(number) {
    const numberPattern = /^([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$/;
    return numberPattern.test(number);
}