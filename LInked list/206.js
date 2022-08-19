// 206. Reverse Linked List

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
var reverseList = function (head) {
    if (head === null || head.next === null) {
        return head;
    }
    let last = reverseList(head.next);
    head.next.next = head;
    head.next = null;

    return last;
};