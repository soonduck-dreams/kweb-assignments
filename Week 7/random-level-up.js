const chanceLevelUp = [100, 60, 36, 22, 13, 8, 5, 3, 2, 1];
let level = 0, attempts = 0;
let intervalId = null;

const d_startBtn = document.getElementById("start-btn");
const d_currentLevel = document.getElementById("current-level");
const d_attempts = document.getElementById("attempts");
const d_gaugeBar = document.getElementById("gauge-bar");

function getRandomBinaryResult(chance) {
    return Math.floor(Math.random() * 100) < chance;
}

function tryLevelUp() {
    intervalId = setInterval(work, 50);
    d_startBtn.setAttribute('disabled', 'false');
}

function work() {
    const succeeded = getRandomBinaryResult(chanceLevelUp[level]);

    if (succeeded) {
        level += 1;
    }
    attempts += 1;
    updateDisplay();

    if (level >= 10) {
        clearInterval(intervalId);
    }
}

function updateDisplay() {
    d_currentLevel.innerHTML = level;
    d_attempts.innerHTML = attempts;
    d_gaugeBar.style.width = level * 10 + "%";
}