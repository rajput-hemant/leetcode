public class BinarySearch {
  public int search(int[] nums, int target) {
    int low = 0,
        mid = 0,
        high = nums.length - 1;
    while (low <= high) {
      mid = low + (high - low) / 2;
      if (nums[mid] == target)
        return mid;
      else if (nums[mid] < target)
        low = mid + 1;
      else
        high = mid - 1;
    }
    return -1;
  }
}