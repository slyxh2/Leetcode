// 106. Construct Binary Tree from Inorder and Postorder Traversal

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
};
var buildTree = function (inorder, postorder) {
    let rootVal = postorder[postorder.length - 1];
    if (rootVal == undefined) return null;
    let root = new TreeNode(rootVal);
    if (inorder.length <= 1) return root;

    const inorderIndex = inorder.indexOf(rootVal);

    let leftTree = buildTree(inorder.slice(0, inorderIndex), postorder.slice(0, inorderIndex));
    let rightTree = buildTree(inorder.slice(inorderIndex + 1), postorder.slice(inorderIndex, inorder.length - 1));

    root.left = leftTree;
    root.right = rightTree;

    return root;
};