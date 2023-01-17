// 100. Same Tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    let s1 = [p], s2 = [q];

    while (s1.length || s2.length) {
        const currentP = s1.pop(), currentQ = s2.pop();
        if (currentP == null && currentQ == null) continue;
        if (currentP == null || currentQ == null) return false;
        if (currentP.val !== currentQ.val) return false;
        s1.push(currentP.right, currentP.left);
        s2.push(currentQ.right, currentQ.left);
    }

    return true;
};





