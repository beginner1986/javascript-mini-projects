let board = new Array(16).fill(0);
const cols = 4;
const rows = 4;
const tilesCount = cols * rows;

const setRandomField = () => {
    let emptyFields = [];

    for(let i=0; i<board.length; i++) {
        if(board[i] === 0)
            emptyFields.push(i);
    }

    let randomIndex = Math.floor(Math.random() * board.length);
    board[randomIndex] = 2;
};

const fillTwoRandomFields = () => {
    setRandomField();
    setRandomField();
};

const clearBoard = () => {
    const parent = document.querySelector('#board');

    while(parent.firstChild)
        parent.removeChild(parent.firstChild);
};

const renderBoard = () => {
    const parent = document.querySelector('#board');

    clearBoard();

    for(let i=0; i<board.length; i++) {
        const div = document.createElement('div');
        div.classList.add('board-item');

        if(board[i] != 0)
            div.textContent = board[i];
        
        parent.append(div);
    }
};

const mergeOrMoveTile = (currentIndex, nextIndex) => {
    if(board[nextIndex] === board[currentIndex])
        board[nextIndex] *= 2;
    else if(board[nextIndex] === 0)
        board[nextIndex] = board[currentIndex];

    board[currentIndex] = 0;
};

const moveRight = () => {
    for(let i=0; i<tilesCount - 1; i++) {
        if(i % cols !== cols - 1 && board[i] !== 0) {
            mergeOrMoveTile(i, i + 1);
            i = -1;
        }
    }

    renderBoard();
};

const moveLeft = () => {
    for(let i=tilesCount - 1; i>0; i--) {
        if(i % cols !== 0 && board[i] !== 0) {
            mergeOrMoveTile(i, i - 1);
            i = tilesCount;
        }
    }

    renderBoard();
};

const moveDown = () => {
    for(let i=0; i<tilesCount - cols; i++) {
        if(i / rows !== rows - 1 && board[i] !== 0) {
            mergeOrMoveTile(i, i + cols);
            i = -1;
        }
    }

    renderBoard();
};

const moveUp = () => {
    for(let i=tilesCount - 1; i>=rows; i--) {
        if(i / rows !== 0 && board[i] !== 0) {
            mergeOrMoveTile(i, i - cols);
            i = tilesCount;
        }
    }

    renderBoard();
}

document.addEventListener("keydown", (event) =>
{
    switch(event.key) {
        case 'ArrowRight':
            moveRight();
            break;
        case 'ArrowLeft':
            moveLeft();
            break;
        case 'ArrowDown':
            moveDown();
            break;
        case 'ArrowUp':
            moveUp();
            break;
        default:
            break;
    }

    setRandomField();
});

fillTwoRandomFields();
renderBoard();
console.log();