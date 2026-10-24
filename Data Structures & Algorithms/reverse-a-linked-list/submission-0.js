/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        if (!head) return null;
        let current = head.next;
        let prev = head;
        while (current !== null) {
            let temp = current.next;
            current.next = prev;
            prev = current;
            current = temp;
        }
        head.next = null;

        head = prev;
        return head;
    }
}
