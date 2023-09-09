/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let m = grid.length, n = grid[0].length;
    let memo = new Array(m).fill().map(() => new Array(n).fill(false));
    let result = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (memo[i][j]) continue;
            if (grid[i][j] === "0") {
                memo[i][j] = true;
            } else {
                result++;
                dfs(i, j);
            }
        }
    }
    return result;
    function dfs(row, col) {
        if (row < 0 || col < 0 || row >= m || col >= n || memo[row][col]) {
            return;
        }
        memo[row][col] = true;
        if (grid[row][col] === "0") return;
        dfs(row + 1, col);
        dfs(row - 1, col);
        dfs(row, col + 1);
        dfs(row, col - 1);
    }
};
