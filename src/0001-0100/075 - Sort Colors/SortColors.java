public class SortColors {
  public void sortColors(int[] nums) {
    int low = 0, mid = 0, high = nums.length - 1;
    while (mid <= high) {
      if (nums[mid] == 0) {
        swap(nums, low, mid);
        low++;
        mid++;
      } else if (nums[mid] == 1)
        mid++;
      else {
        swap(nums, mid, high);
        high--;
      }
    }
  }

  private void swap(int[] nums, int a, int b) {
    int temp = nums[a];
    nums[a] = nums[b];
    nums[b] = temp;
  }

  // BruteForce
  public void sortColors1(int[] nums) {
    int zeroes = 0, ones = 0, twos = 0;
    for (int i : nums) {
      if (i == 0)
        zeroes++;
      if (i == 1)
        ones++;
      if (i == 2)
        twos++;
    }
    for (int i = 0; i < nums.length; i++) {
      if (zeroes != 0) {
        nums[i] = 0;
        zeroes--;
        continue;
      } else if (ones != 0) {
        nums[i] = 1;
        ones--;
        continue;
      } else if (twos != 0) {
        nums[i] = 2;
        twos--;
      }
    }
  }
}
