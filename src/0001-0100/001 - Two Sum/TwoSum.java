import java.util.HashMap;
import java.util.Map;

public class TwoSum {
  public static int[] twoSum(int nums[], int target) {
    int[] sum = new int[2];
    for (int i = 0; i < nums.length; i++)
      for (int j = i + 1; j < nums.length; j++) {
        if (i == j)
          continue;
        if (nums[i] + nums[j] == target) {
          sum[0] = i;
          sum[1] = j;
        }
      }
    return sum;
  }

  public static int[] twoSum2(int nums[], int target) {
    Map<Integer, Integer> map = new HashMap<>();
    for (int i = 0; i < nums.length; i++) {
      int complement = target - nums[i];
      if (map.containsKey(complement))
        return new int[] { map.get(complement), i };
      else {
        map.put(nums[i], i);
      }
    }
    throw new IllegalArgumentException();
  }
}