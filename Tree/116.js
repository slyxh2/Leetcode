// 116. Populating Next Right Pointers in Each Node
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
    if (root === null) return root;
    traverse(root.left, root.right);
    return root;
};

const traverse = (node1, node2) => {
    if (node1 === null || node2 === null) return;
    node1.next = node2;
    traverse(node1.left, node1.right);
    traverse(node2.left, node2.right);

    traverse(node1.right, node2.left);

}