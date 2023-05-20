function displayTimes() {
    let num = parseFloat(document.querySelector('#number').value);
    let result = document.querySelector('#times-result');

    if (Number.isInteger(num) && num >= 1 && num <= 9) {
        result.innerText = "";
        for (let i = 1; i < 10; i++) {
            result.innerText += num + 'x' + i + '=' + (num * i) + '\n';
        }
    }
    else {
        result.innerText = "Input Error!";
    }
}