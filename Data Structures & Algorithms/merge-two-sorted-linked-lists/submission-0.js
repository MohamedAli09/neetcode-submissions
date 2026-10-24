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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @param {ListNode} dummy
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        if (!list1 && !list2) return null;
        if (!list1 && list2) return list2;
        if (list1 && !list2) return list1;
        let dummy = new ListNode(0, null);
        let head = null;

        let current = null;

        while (list1 != null && list2 != null) {
            if (list1.val <= list2.val) {
                if (head == null) {
                    head = list1;
                }
                dummy.next = list1;
                dummy = list1;
                list1 = list1.next;
            } else {
                if (head == null) {
                    head = list2;
                }
                dummy.next = list2;
                dummy = list2;
                list2 = list2.next;
            }
        }
        if(list1){
            dummy.next =  list1;
        }else if(list2){
            dummy.next = list2;
        }
        return head;
    }

}
