import definitions.ListNode;

public class MiddleOfTheLinkedList {
  public ListNode middleNode(ListNode head) {
    ListNode slowPtr = head,
        fastPtr = head;
    while (fastPtr != null && fastPtr.next != null) {
      slowPtr = slowPtr.next;
      fastPtr = fastPtr.next.next;
    }
    return slowPtr;
  }
}
