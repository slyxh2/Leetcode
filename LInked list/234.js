// 234. Palindrome Linked List

// use array to store the left part
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


// 1. reverse the right part of linkedlist 2. compare with left part
/**
 * @param {ListNode} head
 * @return {boolean}
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
var isPalindrome = function (head) {
    let slow = head,
        fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next || null;
    };
    if (fast !== null) slow = slow.next;
    let reverse = tranvarse(slow);
    while (reverse) {
        if (head.val !== reverse.val) return false;
        head = head.next;
        reverse = reverse.next;
    };
    return true;
};
const tranvarse = (head) => {
    let curr = head,
        prev = null;
    while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}