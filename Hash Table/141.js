/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    if (!head) return false;
    let current = head;
    let map = new Map();
    while (current) {
        if (map.get(current)) return true;
        map.set(current, 1);
        current = current.next;
    }
    return false;
};