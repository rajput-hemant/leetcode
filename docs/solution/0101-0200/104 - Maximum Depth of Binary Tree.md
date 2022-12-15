# 104. Maximum Depth of Binary Tree [![share]](https://leetcode.com/problems/maximum-depth-of-binary-tree/)

![][easy]

## Problem Statement:

Given the root of a binary tree, return its maximum depth.

A binary tree's **maximum depth** is the number of nodes along the longest path from the root node down to the farthest leaf node.

### Example 1:

![](https://assets.leetcode.com/uploads/2020/11/26/tmp-tree.jpg)

```
Input: root = [3,9,20,null,null,15,7]
Output: 3
```

### Example 2:

```
Input: root = [1,null,2]
Output: 2
```

### Constraints:

- The number of nodes in the tree is in the range [0, 10<sup>4</sup>].
- -100 <= Node.val <= 100

## Solutions:

### [_Java_](#)

```java
public class MaximumDepthOfBinaryTree {

    public static int maxDepth(TreeNode root) {
        if (root == null)
            return 0;
        int depth = Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
        return depth;
    }
}
```

### [_..._](#)

```

```

<!----------------------------------{ link }--------------------------------->

[share]: https://img.icons8.com/external-anggara-blue-anggara-putra/20/000000/external-share-user-interface-basic-anggara-blue-anggara-putra-2.png
[easy]: https://img.shields.io/badge/Difficulty-Easy-green.svg
