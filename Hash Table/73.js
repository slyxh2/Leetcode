/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    const len = matrix.length;
    const rowSet = new Set();
    const colSet = new Set();
    matrix.forEach((row, i) => {
        row.forEach((val, j) => {
            if (val === 0) {
                rowSet.add(i);
                colSet.add(j);
            }
        })
    })
    for (row of rowSet) {
        const arr = matrix[row];
        for (let i = 0; i < arr.length; i++) arr[i] = 0;
    }
    for (col of colSet) {
        for (let i = 0; i < len; i++) {
            matrix[i][col] = 0
        }
    }
};