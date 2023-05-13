function isValidNumber(n) {
    let test = Number.parseFloat(n)

    if (test !== NaN && test !== Infinity
        && test === Number.parseInt(n)
        && test >= 1 && test <= 9) {
        return true;
    }
    return false;
}