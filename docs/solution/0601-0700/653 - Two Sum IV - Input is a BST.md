# 653. Two Sum IV - Input is a BST [![share]](https://leetcode.com/problems/two-sum-iv-input-is-a-bst/)

![][easy]

## Problem Statement:

Given the `root` of a Binary Search Tree and a target number `k`, return `true` if there exist two elements in the BST such that their sum is equal to the given target.

### Example 1:

![](https://assets.leetcode.com/uploads/2020/09/21/sum_tree_1.jpg)

```
Input: root = [5,3,6,2,4,null,7], k = 9
Output: true
```

### Example 2:

![](https://assets.leetcode.com/uploads/2020/09/21/sum_tree_2.jpg)

```
Input: root = [5,3,6,2,4,null,7], k = 28
Output: false
```

### Constraints:

- The number of nodes in the tree is in the range [1, 104].
- -104 <= Node.val <= 104
- root is guaranteed to be a valid binary search tree.
- -105 <= k <= 105

## Solution:

::: code-group

```java
public class TwoSumIV {
    public boolean findTarget(TreeNode root, int sum) {
        HashSet<Integer> set = new HashSet<>();
        return findTarget(root, sum, set);
    }

    private boolean findTarget(TreeNode root, int sum, HashSet<Integer> set) {
        if (root == null)
            return false;
        if (findTarget(root.left, sum, set) == true)
            return true;
        if (set.contains(sum - root.val))
            return true;
        else
            set.add(root.val);
        return findTarget(root.right, sum, set);
    }
}
```

:::

### [_..._](#)

```

```

<!----------------------------------{ link }--------------------------------->

[share]: https://img.icons8.com/external-anggara-blue-anggara-putra/20/000000/external-share-user-interface-basic-anggara-blue-anggara-putra-2.png
[easy]: https://img.shields.io/badge/Difficulty-Easy-green.svg
