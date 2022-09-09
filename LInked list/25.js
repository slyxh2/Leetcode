// 25. Reverse Nodes in k-Group
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
function reverse(a, b) {
    let curr = a,
        prev = null;
    while (curr !== b) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}
var reverseKGroup = function (head, k) {
    let slow = head,
        fast = head;
    for (let i = 0; i < k; i++) {
        if (fast === null) return head;
        fast = fast.next;
    }
    let newHead = reverse(slow, fast);
    slow.next = reverseKGroup(fast, k);
    return newHead;
};