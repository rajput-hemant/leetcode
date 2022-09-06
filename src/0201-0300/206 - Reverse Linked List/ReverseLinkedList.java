import definitions.ListNode;

public class ReverseLinkedList {
  public ListNode reverseList(ListNode head) {
    if (head == null || head.next == null)
      return head;
    ListNode newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
  }

  public ListNode reverseIterate(ListNode head) {
    if (head == null || head.next == null)
      return head;
    ListNode prevNode = head,
        currentNode = head.next;
    while (currentNode != null) {
      ListNode nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }
    head.next = null;
    head = prevNode;
    return prevNode;
  }
}
