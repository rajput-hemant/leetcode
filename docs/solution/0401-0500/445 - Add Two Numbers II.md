# 445. Add Two Numbers II [![][share]](https://leetcode.com/problems/add-two-numbers-ii)

![][medium]

## Problem Statement:

You are given two **non-empty** linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

### Example 1:

![](https://assets.leetcode.com/uploads/2021/04/09/sumii-linked-list.jpg)

```
Input: l1 = [7,2,4,3], l2 = [5,6,4]
Output: [7,8,0,7]
```

### Example 2:

```
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [8,0,7]
```

### Example 3:

```
Input: l1 = [0], l2 = [0]
Output: [0]
```

### Constraints:

- The number of nodes in each linked list is in the range `[1, 100]`.
- 0 <= Node.val <= 9
- It is guaranteed that the list represents a number that does not have leading zeros.

**Follow up:** Could you solve it without reversing the input lists?

## Solution:

### [_Java_](#)

```java
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
```

### [_..._](#)

```

```

<!----------------------------------{ link }--------------------------------->

[share]: https://img.icons8.com/external-anggara-blue-anggara-putra/20/000000/external-share-user-interface-basic-anggara-blue-anggara-putra-2.png
[easy]: https://img.shields.io/badge/Difficulty-Easy-bright.svg
[medium]: https://img.shields.io/badge/Difficulty-Medium-yellow.svg
[hard]: https://img.shields.io/badge/Difficulty-Hard-red.svg
