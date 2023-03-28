board = new Array(16).fill(0);

function fillTwoRandomFields(_board) {
    fieldsToFill = 2;

    while(fieldsToFill != 0) {
        index = Math.floor(Math.random() * _board.length);

        if(_board[index] != 0)
            continue;
        
        _board[index] = 2;
        fieldsToFill--;
    }
}

fillTwoRandomFields(board);
console.log(board);