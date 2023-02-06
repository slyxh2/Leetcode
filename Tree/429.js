// 429. N-ary Tree Level Order Traversal

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (root == null) return [];
    const queue = [root];
    const result = [];
    let children = [];
    let tep = [];
    while (queue.length) {
        const current = queue.shift();
        tep.push(current.val);
        if (current.children.length) children.push(...current.children);
        if (queue.length === 0) {
            result.push(tep);
            queue.push(...children);
            tep = [];
            children = [];
        }

    }
    return result;
};