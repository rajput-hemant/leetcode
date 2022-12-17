# 337. House Robber III [![][share]](https://leetcode.com/problems/house-robber-iii)

![][medium]

## Problem Statement:

The thief has found himself a new place for his thievery again. There is only one entrance to this area, called `root`.

Besides the `root`, each house has one and only one parent house. After a tour, the smart thief realized that all houses in this place form a binary tree. It will automatically contact the police if **two directly-linked houses were broken into on the same night**.

Given the `root` of the binary tree, return the maximum amount of money the thief can rob **without alerting the police**.

### Example 1:

![](https://assets.leetcode.com/uploads/2021/03/10/rob1-tree.jpg)

```
Input: root = [3,2,3,null,3,null,1]
Output: 7
Explanation: Maximum amount of money the thief can rob = 3 + 3 + 1 = 7.
```

### Example 2:

![](https://assets.leetcode.com/uploads/2021/03/10/rob2-tree.jpg)

```
Input: root = [3,4,5,1,3,null,1]
Output: 9
Explanation: Maximum amount of money the thief can rob = 4 + 5 = 9.
```

### Constraints:

- The number of nodes in the tree is in the range [1, 10<sup>4</sup>].
- 0 <= Node.val <= 10<sup>4</sup>

## Solution:

::: code-group

```java
public int rob(TreeNode root) {
  int[] res = helper(root);
  return Math.max(res[0], res[1]);
}

private int[] helper(TreeNode root) {
  if (root == null)
    return new int[] { 0, 0 };
  int[] left = helper(root.left);
  int[] right = helper(root.right);

  int rob = root.val + left[1] + right[1];
  int notRob = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
  return new int[] { rob, notRob };
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
