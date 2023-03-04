impl Solution {
    pub fn count_subarrays(nums: Vec<i32>, min_k: i32, max_k: i32) -> i64 {
        let (mut bad, mut min, mut max) = (-1, -1, -1);
        // bad is the index of the first number that is not in the range [min_k, max_k]
        let mut res = 0;

        for (i, &num) in nums.iter().enumerate() {
            let i = i as i64;

            // set i to bad index if it is not in the range [min_k, max_k]
            if !(min_k <= num && num <= max_k) {
                bad = i;
            }

            // set i to min index if num is equal to min_k
            if min_k == num {
                min = i;
            }
            // set i to max index if num is equal to max_k
            if max_k == num {
                max = i;
            }

            // it is the last starting point for the subarray
            let start = min.min(max);
            if start > bad {
                res += start - bad; // add the number of subarrays b/w [bad + 1, start]
            }
        }

        res
    }
}
