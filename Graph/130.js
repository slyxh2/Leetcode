/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
    let m = board.length, n = board[0].length;
    for (let i = 0; i < n; i++) {
        dfs(0, i);
        dfs(m - 1, i);
    }
    for (let j = 0; j < m; j++) {
        dfs(j, 0);
        dfs(j, n - 1);
    }
    console.log(board);
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 'R') {
                board[i][j] = 'O';
            } else if (board[i][j] === 'O') {
                board[i][j] = 'X';
            }
        }
    }
    function dfs(row, col) {
        if (row < 0 || col < 0 || row >= m || col >= n || board[row][col] !== 'O') return;
        board[row][col] = 'R';
        dfs(row - 1, col);
        dfs(row + 1, col);
        dfs(row, col - 1);
        dfs(row, col + 1);
    }
};

const arr = [["X", "O", "X", "O", "X", "O"], ["O", "X", "O", "X", "O", "X"], ["X", "O", "X", "O", "X", "O"], ["O", "X", "O", "X", "O", "X"]]
console.log(arr);
solve(arr);
console.log(arr);