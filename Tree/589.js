// 589. N-ary Tree Preorder Traversal

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
    return traverse(root, []);
};

const traverse = (root, array) => {
    if (root == null) return [];
    array.push(root.val);
    const children = root.children;
    for (let i = 0; i < children.length; i++) {
        traverse(children[i], array);
    }
    return array;
};