import java.util.Stack;

import definitions.ListNode;

public class AddTwoNumbersII {
  public static ListNode addTwoNumbers(ListNode l1, ListNode l2) {
    ListNode res = null;
    int carry = 0;
    Stack<Integer> s1 = new Stack<>(),
        s2 = new Stack<>();
    while (l1 != null || l2 != null) {
      if (l1 != null) {
        s1.push(l1.val);
        l1 = l1.next;
      }
      if (l2 != null) {
        s2.push(l2.val);
        l2 = l2.next;
      }
    }
    while (!s1.isEmpty() || !s2.isEmpty() || carry != 0) {
      int n1 = s1.isEmpty() ? 0 : s1.pop(),
          n2 = s2.isEmpty() ? 0 : s2.pop();
      int temp = n1 + n2 + carry;
      ListNode newNode = new ListNode(temp % 10);
      newNode.next = res;
      res = newNode;
      carry = temp / 10;
    }
    return res;
  }
}
