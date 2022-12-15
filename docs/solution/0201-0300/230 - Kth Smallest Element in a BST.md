# 230. Kth Smallest Element in a BST [![share]](https://leetcode.com/problems/kth-smallest-element-in-a-bst/)

![][medium]

## Problem Statement:

Given the `root` of a binary search tree, and an integer `k`, return the kth smallest value **(1-indexed)** of all the values of the nodes in the tree.

### Example 1:

![](https://assets.leetcode.com/uploads/2021/01/28/kthtree2.jpg)

```
Input: root = [3,1,4,null,2], k = 1
Output: 1
```

### Example 2:

```
Input: root = [5,3,6,2,4,null,null,1], k = 3
Output: 3
```

### Constraints:

- The number of nodes in the tree is `n`.
- 1 <= k <= n <= 10<sup>4</sup>]
- 0 <= Node.val <= 10<sup>4</sup>]

**Follow up:** If the BST is modified often (i.e., we can do insert and delete operations) and you need to find the kth smallest frequently, how would you optimize?

## Solutions:

### [_Java_](#)

```java
public class KthSmallestElement {

    public int kthSmallest(TreeNode root, int k) {
        int[] arr = new int[2];
        arr[0] = k;
        kthSmallest(root, arr);
        return arr[1];
    }

    private int[] kthSmallest(TreeNode root, int arr[]) {
        if (root != null) {
            kthSmallest(root.left, arr);
            if (--arr[0] == 0) {
                arr[1] = root.val;
                return arr;
            }
            kthSmallest(root.right, arr);
        }
        return arr;
    }
}
```

### [_..._](#)

```

```

<!----------------------------------{ link }--------------------------------->

[share]: https://img.icons8.com/external-anggara-blue-anggara-putra/20/000000/external-share-user-interface-basic-anggara-blue-anggara-putra-2.png
[medium]: https://img.shields.io/badge/Difficulty-Medium-yellow.svg
