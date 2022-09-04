import definitions.TreeNode;

public class HouseRobberIII {
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
}