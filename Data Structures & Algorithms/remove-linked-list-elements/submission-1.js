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
     * @param {number} val
     * @return {ListNode}
     */
    removeElements(head, val) {
        let arr = [];
        let current = head;
        while (current != null) {
            if (current.val !== val) {
                arr.push(current);
            }
            current = current.next;
        }

        for (let i = 0; i < arr.length - 1; i++) {
            arr[i].next = arr[i + 1];
        }

        if (arr.length === 0) return null;
        arr[arr.length-1].next = null;
        return arr[0];
    }
}
