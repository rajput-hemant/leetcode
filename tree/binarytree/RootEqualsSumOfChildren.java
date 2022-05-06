package tree.binarytree;

// https://leetcode.com/problems/root-equals-sum-of-children/

public class RootEqualsSumOfChildren {
    public boolean checkTree(TreeNode root) {
        return root.val == root.left.val + root.right.val;
    }
}
