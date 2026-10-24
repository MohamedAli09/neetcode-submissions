/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     } // 1  2 2 1
 * } 1 3 2 2 3 1
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */

    constructor() {
        this.size = 0;
    }

    isPalindrome(head) {
        this.sizeOfLinkedList(head);
        let evenOrOdds = this.evenOrOdd();
        let middlenode = this.refrenceOfMiddleNode(head, evenOrOdds);
        let reversed = this.reverseAfterTheMiddle(middlenode);
        let current = head;
        let start = 0;
        let end = this.size;
        while (start < end) {
            if (reversed.val === current.val) {
                start++;
                end--;
                current = current.next;
                reversed = reversed.next;
            } else {
                return false
            }
        }
        return true;
    }
    sizeOfLinkedList(head) {
        let current = head;
        while (current != null) {
            this.size++;
            current = current.next;
        }
    }
    evenOrOdd() {
        let isOdd = true;

        if (this.size % 2 == 0) {
            isOdd = false;
        }

        let middleNodePlace = 0;
        if (isOdd) {
            middleNodePlace = Math.floor(this.size / 2);
        } else {
            middleNodePlace = this.size / 2;
        }
        return middleNodePlace;
    }
    refrenceOfMiddleNode(head, evenOrOdd) {
        let counter = 0;
        let current = head;
        while (counter != evenOrOdd) {
            counter++;
            current = current.next;
        }
        return current;
    }
    reverseAfterTheMiddle(middlenode) {
        let current = middlenode;
        let prev = current;
        current = current.next;
        while (current != null) {
            let tmp = current.next;
            current.next = prev;
            prev = current;
            current = tmp;
        }
        return prev;
    }
}
