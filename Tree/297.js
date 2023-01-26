// 297. Serialize and Deserialize Binary Tree
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    return traverse(root, []);
};

const traverse = (root, result) => {
    if (root === null) {
        result.push('#');
        return;
    }
    result.push(root.val);
    traverse(root.left, result);
    traverse(root.right, result);
    return result.toString();
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    if (!data) return null;
    return buildTree(data.split(','));
};

const buildTree = (array) => {
    const current = array.shift();
    if (current === '#') return null;
    const node = new TreeNode(current);
    node.left = buildTree(array);
    node.right = buildTree(array);
    return node;
}


/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */