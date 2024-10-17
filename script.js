let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';

function createBoard() {
    const boardElement = document.getElementById('board');
    board.forEach((cell, index) => {
        const cellElement = document.createElement('div');
        cellElement.classList.add('cell');
        cellElement.innerText = cell;
        cellElement.onclick = () => handleCellClick(index);
        boardElement.appendChild(cellElement);
    });
}

function handleCellClick(index) {
    if (board[index] === '') {
        board[index] = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        updateBoard();
        checkWinner();
    }
}

function updateBoard() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell, index) => {
        cell.innerText = board[index];
    });
}

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const combo of winningCombinations) {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            document.getElementById('status').innerText = `${board[a]} wins!`;
            return;
        }
    }

    if (!board.includes('')) {
        document.getElementById('status').innerText = "It's a draw!";
    }
}

function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    document.getElementById('status').innerText = '';
    updateBoard();
}

createBoard();
