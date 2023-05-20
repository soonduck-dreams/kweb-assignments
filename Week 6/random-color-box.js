function setRandomBgColor() {
    let box = document.getElementById("color-box");
    box.style.backgroundColor = 'rgb(' + getRandomInt(0, 256) + ',' + getRandomInt(0, 256) + ',' + getRandomInt(0, 256) + ')';
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
} // max exclusive