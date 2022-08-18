public class FirstBadVersion extends VersionControl {
  public int firstBadVersion(int n) {
    int low = 0, high = n;
    while (low < high) {
      int mid = low + (high - low) / 2;
      if (isBadVersion(mid))
        high = mid;
      else
        low = mid + 1;
    }
    return low;
  }
}

class VersionControl {
  boolean isBadVersion(int version) {
    return false;
  }
}