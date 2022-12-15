# 199. Binary Tree Right Side View [![share]](https://leetcode.com/problems/binary-tree-right-side-view/)

![][medium]

## Problem Statement:

Given the `root` of a binary tree, imagine yourself standing on the **right side** of it, return the values of the nodes you can see ordered from top to bottom.

### Example 1:

![](https://assets.leetcode.com/uploads/2021/02/14/tree.jpg)

```
Input: root = [1,2,3,null,5,null,4]
Output: [1,3,4]
```

### Example 2:

```
Input: root = [1,null,3]
Output: [1,3]
```

### Example 3:

```
Input: root = []
Output: []
```

### Constraints:

- The number of nodes in the tree is in the range [0, 100].
- -100 <= Node.val <= 100

## Solutions:

### [_Java_](#)

```java
public class BinaryTreeRightSideView {
    int maxLevel = 0;
    List<Integer> arr = new ArrayList<Integer>();

    public List<Integer> rightSideView(TreeNode root) {
        rightSideView(root, 1);
        return arr;
    }

    private void rightSideView(TreeNode root, int level) {
        if (root == null)
            return;
        if (maxLevel < level) {
            arr.add(root.val);
            maxLevel = level;
        }
        rightSideView(root.right, level + 1);
        rightSideView(root.left, level + 1);
    }
}
```

### [_..._](#)

```

```

<!----------------------------------{ link }--------------------------------->

[share]: https://img.icons8.com/external-anggara-blue-anggara-putra/20/000000/external-share-user-interface-basic-anggara-blue-anggara-putra-2.png
[medium]: https://img.shields.io/badge/Difficulty-Medium-yellow.svg
