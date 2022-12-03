import java.util.ArrayList;
import java.util.List;

public class FindAllDuplicatesInAnArray {
  public List<Integer> findDuplicates(int[] nums) {
    ArrayList<Integer> list = new ArrayList<>();
    for (int i = 0; i < nums.length; i++) {
      int n = Math.abs(nums[i]);
      if (nums[n - 1] < 0)
        list.add(n);
      else
        nums[n - 1] = -nums[n - 1];
    }
    return list;
  }
}
