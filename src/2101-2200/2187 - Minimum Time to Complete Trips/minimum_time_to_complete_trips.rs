impl Solution {
    pub fn minimum_time(time: Vec<i32>, total_trips: i32) -> i64 {
        let mut time = time;
        time.sort();

        let mut left = 0_i64;
        let mut right = 100_000_000_000_000;
        let mut ans = right;

        while left < right {
            let mid = (left + right) / 2;
            let mut trips = 0;
            for i in 0..time.len() {
                trips += mid / time[i] as i64;
            }
            if trips >= total_trips as i64 {
                ans = ans.min(mid);
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        ans
    }
}
