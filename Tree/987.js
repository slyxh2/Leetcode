// 987. Vertical Order Traversal of a Binary Tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalTraversal = function (root) {
    if (root == null) return [[]];
    const obj = {};
    const result = [];
    traverse(root, 0, 0, obj);
    const keys = Object.keys(obj).map((key) => Number(key)).sort((a, b) => a - b);
    keys.forEach(key => {
        const colObj = obj[key];
        const colKeys = Object.keys(colObj).map((key) => Number(key)).sort((a, b) => a - b);
        const tep = [];
        colKeys.forEach(colKey => {
            colObj[colKey].sort((a, b) => a - b);
            tep.push(...colObj[colKey]);
        })
        result.push(tep);
    });
    return result;
};


const traverse = (root, row, col, obj) => {
    if (root == null) return;
    if (obj[col]) {
        if (obj[col][row]) {
            obj[col][row].push(root.val);
        } else {
            obj[col][row] = [root.val];
        }

    } else {
        obj[col] = {};
        obj[col][row] = [root.val];
    }
    traverse(root.left, row + 1, col - 1, obj);
    traverse(root.right, row + 1, col + 1, obj);
    return;
};