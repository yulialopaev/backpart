export function checkPhoneNumber(number) {
    const phoneNumberPattern = /^[+]\d{2}\(\d{2}\)\d{4}-\d{4}$/;
    return phoneNumberPattern.test(number);
}

console.log(checkPhoneNumber("+91(98)7654-3210"))