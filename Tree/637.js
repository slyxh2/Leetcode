// 637. Average of Levels in Binary Tree

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
 * @return {number[]}
 */
var averageOfLevels = function (root) {
    let sum = [root.val];
    let count = [1];
    traverse(root.left, 1, count, sum);
    traverse(root.right, 1, count, sum);
    return sum.map((val, index) => val / count[index]);
}

const traverse = (root, level, count, sum) => {
    if (root == null) return;
    count[level] = count[level] ? count[level] + 1 : 1;
    sum[level] = sum[level] ? sum[level] + root.val : root.val;
    traverse(root.left, level + 1, count, sum);
    traverse(root.right, level + 1, count, sum);
}

