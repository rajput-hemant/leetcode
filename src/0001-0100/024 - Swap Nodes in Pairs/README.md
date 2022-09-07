# 24. Swap Nodes in Pairs [![share]](https://leetcode.com/problems/swap-nodes-in-pairs)

![][medium]

## Problem Statement:

Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

![](https://assets.leetcode.com/uploads/2020/10/03/swap_ex1.jpg)

### Example 1:

```
Input: head = [1,2,3,4]
Output: [2,1,4,3]
```

### Example 2:

```
Input: head = []
Output: []
```

### Example 3:

```
Input: head = [1]
Output: [1]
```

### Constraints:

- The number of nodes in the list is in the range `[0, 100]`.
- 0 <= Node.val <= 100

## Solutions:

### [_Java_](./SwapNodesInPairs.java)

```java
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
```

### [_..._]()

```

```

<!----------------------------------{ link }--------------------------------->

[share]: https://img.icons8.com/external-anggara-blue-anggara-putra/20/000000/external-share-user-interface-basic-anggara-blue-anggara-putra-2.png
[medium]: https://img.shields.io/badge/Difficulty-Medium-yellow.svg
