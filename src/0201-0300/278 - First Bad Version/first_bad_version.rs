impl Solution {
    pub fn first_bad_version(&self, n: i32) -> i32 {
        let (mut low, mut high) = (1, n);

        while low < high {
            let mid = low + (high - low) / 2;
            if self.isBadVersion(mid) {
                high = mid;
            } else {
                low = mid + 1;
            }
        }

        low
    }
}
