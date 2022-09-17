// 226. Invert Binary Tree
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
    traverse(root);
    return root;
};

const traverse = (root) => {
    if (root === null) return;
    let tep = root.left;
    root.left = root.right;
    root.right = tep;
    traverse(root.left);
    traverse(root.right);
};



var invertTree2 = function (root) {
    traverse(root);
    return root;
};

const traverse2 = (root) => {
    if (root === null) return null;

    let left = traverse(root.left);
    let right = traverse(root.right);

    root.left = right;
    root.right = left;

    return root;
};
