board = new Array(16).fill(0);

const fillTwoRandomFields = (_board) => {
    fieldsToFill = 2;

    while(fieldsToFill != 0) {
        index = Math.floor(Math.random() * _board.length);

        if(_board[index] != 0)
            continue;
        
        _board[index] = 2;
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

const moveRight = (_board) => {
    for(i=0; i<16; i++) {
        if(i % 4 != 3 && board[i] !== 0 && board[i+1] === 0) {
            _board[i + 1] = _board[i];
            _board[i] = 0;
        }
    }

    renderBoard();
    
    console.log("right");
    console.log(board);
}

document.addEventListener("keydown", (event) =>
{
    switch(event.key) {
        case 'ArrowRight':
            moveRight(board);
            break;
    }
});

fillTwoRandomFields(board);
renderBoard();
console.log(board);