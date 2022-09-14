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
 * @return {number}
 */
let result = 0,
    depth = 0;
var maxDepth = function (root) {
    if (root === null) return 0;
    let left = maxDepth(root.left);
    let right = maxDepth(root.right);
    let result = Math.max(left, right) + 1;
    return result;
};