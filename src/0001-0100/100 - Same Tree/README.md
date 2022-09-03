# 100. Same Tree [![][share]](https://leetcode.com/problems/same-tree/)

## Problem Statement:

Given the roots of two binary trees `p` and `q`, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

### Example 1:

![](https://assets.leetcode.com/uploads/2020/12/20/ex1.jpg)

```
Input: p = [1,2,3], q = [1,2,3]
Output: true
```

### Example 2:

![](https://assets.leetcode.com/uploads/2020/12/20/ex2.jpg)

```
Input: p = [1,2], q = [1,null,2]
Output: false
```

### Example 3:

![](https://assets.leetcode.com/uploads/2020/12/20/ex3.jpg)

```
Input: p = [1,2,1], q = [1,1,2]
Output: false
```

### Constraints:

- The number of nodes in both trees is in the range `[0, 100]`.
- -10<sup>4</sup> <= Node.val <= 10<sup>4</sup>

## Solution:

### [_Java_](./SameTree.java)

```java
public boolean isSameTree(TreeNode p, TreeNode q) {
  if (p == null && q == null)
    return true;
  if (q == null || p == null)
    return false;
  if (p.val != q.val)
    return false;
  boolean left = isSameTree(p.left, q.left);
  boolean right = isSameTree(p.right, q.right);
  return left && right;
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
