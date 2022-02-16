package linkedlist;

// 24. Swap Nodes in Pairs
public class SwapNodesInPairs {
    public static class ListNode {
        int val;
        ListNode next;

        ListNode() {
        }

        ListNode(int val) {
            this.val = val;
        }

        ListNode(int val, ListNode next) {
            this.val = val;
            this.next = next;
        }
    }

    public ListNode swapPairs(ListNode head) {
        ListNode newNode = head;
        while (newNode != null && newNode.next != null) {
            int temp = newNode.val;
            newNode.val = newNode.next.val;
            newNode.next.val = temp;
            newNode = newNode.next.next;
        }
        return head;
    }
}
