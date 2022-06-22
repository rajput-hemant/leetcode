import java.util.HashSet;
import definitions.TreeNode;

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
