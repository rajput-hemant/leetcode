# 876. Middle of the Linked List [![share]](https://leetcode.com/problems/middle-of-the-linked-list/)

![][easy]

## Problem Statement:

Given the `head` of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return **the second middle** node.

### Example 1:

![](https://assets.leetcode.com/uploads/2021/07/23/lc-midlist1.jpg)

```
Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.
```

### Example 2:

![](https://assets.leetcode.com/uploads/2021/07/23/lc-midlist2.jpg)

```
Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
```

### Constraints:

- The number of nodes in the list is in the range `[1, 100]`.
- 1 <= Node.val <= 100

## Solution:

### [_Java_](#)

```java
public ListNode middleNode(ListNode head) {
    ListNode slowPtr = head,
        fastPtr = head;
    while (fastPtr != null && fastPtr.next != null) {
      slowPtr = slowPtr.next;
      fastPtr = fastPtr.next.next;
    }
    return slowPtr;
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
