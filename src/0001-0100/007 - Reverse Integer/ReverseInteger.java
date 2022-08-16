public class ReverseInteger {
  public static int reverse(int x) {
    String reversed = new StringBuilder().append(Math.abs(x)).reverse().toString();
    try {
      return x < 0 ? Integer.parseInt(reversed) * -1 : Integer.parseInt(reversed);
    } catch (Exception e) {
      return 0;
    }
  }
}
