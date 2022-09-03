import definitions.ListNode;

public class AddTwoNumbers {
  public ListNode addTwoNumbers(ListNode a, ListNode b) {
    ListNode dummy = new ListNode(0),
        tail = dummy;
    int carry = 0;
    while (a != null || b != null) {
      int x = (a != null) ? a.val : 0,
          y = (b != null) ? b.val : 0,
          sum = carry + x + y;
      carry = sum / 10;
      tail.next = new ListNode(sum % 10);
      tail = tail.next;
      if (a != null)
        a = a.next;
      if (b != null)
        b = b.next;
    }
    if (carry > 0)
      tail.next = new ListNode(carry);
    return dummy.next;
  }
}
