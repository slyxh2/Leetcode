// 144. Binary Tree Preorder Traversal

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

var preorderTraversal = function (root) {
    if (root === null) return [];
    let stack = [root],
        res = [];
    while (stack.length) {
        let n = stack.pop();
        res.push(n.val);
        if (n.right) {
            stack.push(n.right);
        }
        if (n.left) {
            stack.push(n.left);
        }
    }
    return res;
};
