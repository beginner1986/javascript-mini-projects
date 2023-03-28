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

const renderBoard = () => {
    const parent = document.querySelector('#board');

    for(i=0; i<board.length; i++) {
        const div = document.createElement('div');
        div.textContent = board[i];
        parent.append(div);
    }
}

fillTwoRandomFields(board);
renderBoard();
console.log(board);