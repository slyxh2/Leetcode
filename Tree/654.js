// 654. Maximum Binary Tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
};
var constructMaximumBinaryTree = function (nums) {
    const length = nums.length;
    if (length === 0) return null;
    let max = Math.max(...nums)
    let root = new TreeNode(max);
    let maxIndex = nums.indexOf(max);
    let left = constructMaximumBinaryTree(nums.slice(0, maxIndex));
    let right = constructMaximumBinaryTree(nums.slice(maxIndex + 1, length));
    root.left = left;
    root.right = right;
    return root;
};
