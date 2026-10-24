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
        if (head === null) return null;
        let prev = null;
        let current = head;
        while(current !== null){
            let temp = current.next;
            current.next = prev;
            prev = current;
            current = temp;
        }
        head = prev; 
        return head ;
        // or return prev direct
    }
}
