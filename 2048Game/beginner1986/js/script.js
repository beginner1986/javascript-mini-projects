board = new Array(16).fill(0);
const cols = 4;
const rows = 4;

const fillTwoRandomFields = () => {
    fieldsToFill = 2;

    while(fieldsToFill != 0) {
        index = Math.floor(Math.random() * board.length);

        if(board[index] != 0)
            continue;
        
        board[index] = 2;
        fieldsToFill--;
    }
}

const clearBoard = () => {
    const parent = document.querySelector('#board');

    while(parent.firstChild)
        parent.removeChild(parent.firstChild);
};

const renderBoard = () => {
    const parent = document.querySelector('#board');

    clearBoard();

    for(i=0; i<board.length; i++) {
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
    for(i=0; i<15; i++) {
        if(i % cols !== 3 && board[i] !== 0) {
            mergeOrMoveTile(i, i + 1);
            i = -1;
        }
    }

    renderBoard();
}

const moveLeft = () => {
    for(i=15; i>0; i--) {
        if(i % cols !== 0 && board[i] !== 0) {
            mergeOrMoveTile(i, i - 1);
            i = 16;
        }
    }

    renderBoard();
}

const moveDown = () => {
    for(i=0; i<16; i++) {
        if(i / 4 !== 3 && board[i] !== 0) {
            // TODO
            i = -1;
        }
    }

    renderBoard();
}

const moveUp = () => {
    for(i=15; i>=0; i--) {
        if(i / 4 !== 0 && board[i] !== 0) {
            // TODO
            i = 16;
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
});

fillTwoRandomFields();
renderBoard();
console.log();