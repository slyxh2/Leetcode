// 102. Binary Tree Level Order Traversal

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
var levelOrder = function (root) {
    let result = [];
    traverse(root, 0, result);
    return result;
};

const traverse = (root, level, result) => {
    if (root == null) return;
    if (result[level] !== undefined) {
        result[level].push(root.val);
    } else {
        result[level] = [root.val];
    }
    traverse(root.left, level + 1, result);
    traverse(root.right, level + 1, result);

};