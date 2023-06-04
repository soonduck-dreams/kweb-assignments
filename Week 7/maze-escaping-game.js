const ROW_MIN = 0;
const ROW_MAX = 6;
const COL_MIN = 0;
const COL_MAX = 7;

const maze = document.getElementById('maze');

let currentPos = {
    row: 5, col: 0
};

const targetPos = {
    row: 1, col: 7
};

function getElementByPosition(pos) {
    return maze.children[pos.row].children[pos.col];
}

function getNewPositionByKey(code) {
    let offsetX = 0, offsetY = 0;

    switch (code) {
        case 'ArrowLeft':
            offsetX = -1;
            break;
        case 'ArrowRight':
            offsetX = 1;
            break;
        case 'ArrowUp':
            offsetY = -1;
            break;
        case 'ArrowDown':
            offsetY = 1;
            break;
    }

    return {
        row: currentPos.row + offsetY,
        col: currentPos.col + offsetX
    };
}

function isPositionInRange(pos) {
    return pos.row >= ROW_MIN && pos.row <= ROW_MAX
            && pos.col >= COL_MIN && pos.col <= COL_MAX;
}

function isPositionWall(pos) {
    return isPositionInRange(pos) && getElementByPosition(pos).classList.contains('wall');
}

document.addEventListener('keyup', event => {
    const key = event.code;
    const destPos = getNewPositionByKey(key);

    if (isPositionInRange(destPos) && !isPositionWall(destPos)) {
        getElementByPosition(currentPos).classList.remove('current');
        getElementByPosition(destPos).classList.add('current');

        currentPos = destPos;
    }

    if (currentPos.row === targetPos.row && currentPos.col === targetPos.col) {
        window.alert("You Escaped!");
    }
});