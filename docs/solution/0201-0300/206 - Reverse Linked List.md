# 206. Reverse Linked List [![][share]](https://leetcode.com/problems/reverse-linked-list)

![][easy]

## Problem Statement:

Given the `head` of a singly linked list, reverse the list, and return the reversed list.

### Example 1:

![](https://assets.leetcode.com/uploads/2021/02/19/rev1ex1.jpg)

```
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
```

### Example 2:

![](https://assets.leetcode.com/uploads/2021/02/19/rev1ex2.jpg)

```
Input: head = [1,2]
Output: [2,1]
```

### Example 3:

```
Input: head = []
Output: []
```

### Constraints:

- The number of nodes in the list is the range `[0, 5000]`.
- `-5000 <= Node.val <= 5000`

**Follow up:** A linked list can be reversed either iteratively or recursively. Could you implement both?

## Solution:

### [_Java_](#)

```java
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
```

### [_..._](#)

```

```

<!----------------------------------{ link }--------------------------------->

[share]: https://img.icons8.com/external-anggara-blue-anggara-putra/20/000000/external-share-user-interface-basic-anggara-blue-anggara-putra-2.png
[easy]: https://img.shields.io/badge/Difficulty-Easy-bright.svg
[medium]: https://img.shields.io/badge/Difficulty-Medium-yellow.svg
[hard]: https://img.shields.io/badge/Difficulty-Hard-red.svg
