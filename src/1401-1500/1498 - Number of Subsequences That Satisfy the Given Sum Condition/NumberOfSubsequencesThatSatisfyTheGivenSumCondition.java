import java.util.Arrays;

public class NumberOfSubsequencesThatSatisfyTheGivenSumCondition {
  public int numSubseq(int[] nums, int target) {
    Arrays.sort(nums);
    int count = 0,
        len = nums.length,
        left = 0,
        right = len - 1;
    int[] pow2 = new int[len];
    pow2[0] = 1;
    for (int i = 1; i < len; i++)
      pow2[i] = pow2[i - 1] * 2 % 1000000007;
    while (left <= right) {
      if (nums[left] + nums[right] > target)
        right--;
      else {
        count += pow2[right - left++];
        count %= 1000000007;
      }
    }
    return count;
  }
}
