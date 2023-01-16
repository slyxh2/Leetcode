// 105. Construct Binary Tree from Preorder and Inorder Traversal

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
};
var buildTree = function (preorder, inorder) {
    let rootVal = preorder[0];
    if (rootVal === undefined) return null;
    let root = new TreeNode(rootVal);
    if (preorder.length <= 1) return root;

    const inorderIndex = inorder.indexOf(rootVal);
    let leftTree = buildTree(preorder.slice(1, inorderIndex + 1), inorder.slice(0, inorderIndex));
    let rightTree = buildTree(preorder.slice(inorderIndex + 1), inorder.slice(inorderIndex + 1));

    root.left = leftTree;
    root.right = rightTree;
    return root;
};




