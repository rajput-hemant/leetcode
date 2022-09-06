import definitions.ListNode;

public class RotateList {
  public ListNode rotateRight(ListNode head, int k) {
    if (head == null)
      return null;
    int size = 0;
    ListNode temp = head,
        newHead = null,
        p1 = head,
        p2 = head;
    while (temp != null) {
      size++;
      temp = temp.next;
    }
    k %= size;
    for (int i = 0; i < k; i++)
      p2 = p2.next;
    while (p2.next != null) {
      p1 = p1.next;
      p2 = p2.next;
    }
    p2.next = head;
    newHead = p1.next;
    p1.next = null;
    return newHead;
  }
}
