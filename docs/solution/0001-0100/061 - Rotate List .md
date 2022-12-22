# 61. Rotate List [![][share]](https://leetcode.com/problems/rotate-list/)

![][medium]

## Problem Statement:

Given the `head` of a linked list, rotate the list to the right by `k` places.

### Example 1:

![](https://assets.leetcode.com/uploads/2020/11/13/rotate1.jpg)

```
Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]
```

### Example 2:

![](https://assets.leetcode.com/uploads/2020/11/13/roate2.jpg)

```
Input: head = [0,1,2], k = 4
Output: [2,0,1]
```

### Constraints:

- The number of nodes in the list is in the range `[0, 500]`.
- -100 <= Node.val <= 100
- 0 <= k <= 2 \* 10<sup>9</sup>

## Solution:

::: code-group

```java
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
```

:::

### [_..._](#)

```

```

<!----------------------------------{ link }--------------------------------->

[share]: https://img.icons8.com/external-anggara-blue-anggara-putra/20/000000/external-share-user-interface-basic-anggara-blue-anggara-putra-2.png
[easy]: https://img.shields.io/badge/Difficulty-Easy-bright.svg
[medium]: https://img.shields.io/badge/Difficulty-Medium-yellow.svg
[hard]: https://img.shields.io/badge/Difficulty-Hard-red.svg
