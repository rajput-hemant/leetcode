public class LongestIncreasingSubsequence {
  public int lengthOfLIS(int[] nums) {
    int[] lis = new int[nums.length];
    lis[0] = 1;
    for (int i = 1; i < lis.length; i++) {
      lis[i] = 1;
      for (int j = 0; j < i; j++) {
        if (nums[i] > nums[j])
          lis[i] = Math.max(lis[i], lis[j] + 1);
      }
    }
    int res = lis[0];
    for (int i : lis)
      res = Math.max(i, res);
    return res;
  }
}
