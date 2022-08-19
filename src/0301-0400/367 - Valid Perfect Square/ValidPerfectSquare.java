public class ValidPerfectSquare {
  public static boolean isPerfectSquare(int num) {
    if (num == 1)
      return true;
    long low = 1,
        mid = 0,
        high = num / 2;
    while (low <= high) {
      mid = low + (high - low) / 2;
      if (mid * mid == num)
        return true;
      else if (mid * mid < num)
        low = mid + 1;
      else
        high = mid - 1;
    }
    return false;
  }

  public static void main(String[] args) {
    System.out.println(isPerfectSquare(808201));
  }
}