function getDivisors(n) {
    let arr = [];
    let sqrt_n = Math.sqrt(n);

    for (let i = 1; i <= sqrt_n; i++) {
        if (Number.isInteger(n / i)) {
            arr.push(i);
            if (i !== n / i) arr.push(n / i);
        }
    }

    arr.sort((a, b) => a - b);

    return arr;
}