import definitions.ListNode;

public class SwapNodesInPairs {
	public ListNode swapPairs(ListNode head) {
		ListNode p1 = null,
				p2 = null,
				p3 = null;
		if (head == null || head.next == null)
			return head;
		p1 = head;
		p2 = head.next;
		p3 = p2.next;
		p1.next = p3;
		p2.next = p1;
		if (p3 != null)
			p1.next = swapPairs(p3);
		return p2;
	}

	public ListNode swapPairs1(ListNode head) {
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
