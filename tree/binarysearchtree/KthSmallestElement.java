package tree.binarysearchtree;

// https://leetcode.com/problems/kth-smallest-element-in-a-bst/

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
