// 543. Diameter of Binary Tree
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
let diameter = 0;
var diameterOfBinaryTree = function (root) {
    traverse(root);
    let result = diameter;
    diameter = 0;
    return result;
};

const traverse = (root) => {
    if (root === null) return 0;
    let leftMax = traverse(root.left),
        rightMax = traverse(root.right);
    myDiameter = leftMax + rightMax;
    diameter = Math.max(diameter, myDiameter);
    return 1 + Math.max(leftMax, rightMax);
}