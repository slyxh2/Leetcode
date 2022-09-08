// 234. Palindrome Linked List

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var isPalindrome = function (head) {
    let store = [],
        slow = head,
        fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next || null;
    };
    if (fast !== null) slow = slow.next;
    while (slow) {
        store.push(slow);
        slow = slow.next;
    };
    let count = store.length - 1;
    while (count >= 0) {
        if (head.val !== store[count].val) return false;
        head = head.next;
        count--;
    }
    return true;
};