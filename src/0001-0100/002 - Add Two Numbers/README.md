# 2. Add Two Numbers [![][share]](https://leetcode.com/problems/add-two-numbers)

![][medium]

## Problem Statement:

You are given two **non-empty** linked lists representing two non-negative integers. The digits are stored in **reverse order**, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

### Example 1:

![](https://assets.leetcode.com/uploads/2020/10/02/addtwonumber1.jpg)

```
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
```

### Example 2:

```
Input: l1 = [0], l2 = [0]
Output: [0]
```

### Example 3:

```
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
```

### Constraints:

- The number of nodes in each linked list is in the range `[1, 100]`.
- `0 <= Node.val <= 9`
- It is guaranteed that the list represents a number that does not have leading zeros.

## Solution:

### [_Java_](./AddTwoNumbers.java)

```java
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
```

### [_..._]()

```

```

<!----------------------------------{ link }--------------------------------->

[share]: https://img.icons8.com/external-anggara-blue-anggara-putra/20/000000/external-share-user-interface-basic-anggara-blue-anggara-putra-2.png
[easy]: https://img.shields.io/badge/Difficulty-Easy-bright.svg
[medium]: https://img.shields.io/badge/Difficulty-Medium-yellow.svg
[hard]: https://img.shields.io/badge/Difficulty-Hard-red.svg
