# 369 Plus One Linked List [![share]](https://leetcode.com/problems/plus-one-linked-list/)

![][medium]

## Problem Statement:

Given a non-negative integer represented as **non-empty** a singly linked list of digits, plus one to the integer.

You may assume the integer do not contain any leading zero, except the number 0 itself.

The digits are stored such that the most significant digit is at the head of the list.

### Example 1

```
Input: 1 -> 2 -> 3 -> null
Output: 1 -> 2 -> 4 -> null
```

**Explanation:** 123 + 1 = 124

### Example 2

```
Input: 9 -> 9 -> null
Output: 1 -> 0 -> 0 -> null
```

**Explanation:** 99 + 1 = 100

## Solution:

::: code-group

```java
public class PlusOneLinkedList {
    public ListNode plusOne(ListNode head) {
        int sum = 0, carry = 1;
        ListNode newHead = reverse(head);
        ListNode currentNode = newHead, prevNode = newHead;
        while (currentNode != null) {
            sum = carry + currentNode.val;
            currentNode.val = sum % 10;
            carry = sum / 10;
            prevNode = currentNode;
            currentNode = currentNode.next;
        }
        if (carry > 0)
            prevNode.next = new ListNode(carry);
        head = reverse(newHead);
        return head;
    }

    private ListNode reverse(ListNode head) {
        if (head == null || head.next == null)
            return head;
        ListNode newHead = reverse(head.next);
        head.next.next = head;
        head.next = null;
        return newHead;
    }
}
```

:::

### [_..._](#)

```

```

<!----------------------------------{ link }--------------------------------->

[share]: https://img.icons8.com/external-anggara-blue-anggara-putra/20/000000/external-share-user-interface-basic-anggara-blue-anggara-putra-2.png
[medium]: https://img.shields.io/badge/Difficulty-Medium-yellow.svg
