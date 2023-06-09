use std::cmp::min;

impl Solution {
    pub fn num_squares(n: i32) -> i32 {
        // make a dp array of size n + 1 and filled with 0
        let mut dp = vec![n; n as usize + 1];

        // set the first element to 0
        dp[0] = 0;

        // iterate from 1 to n
        for i in 1..=n as usize {
            // iterate from 1 to sqrt(i)
            for j in 1..=(i as f64).sqrt() as usize {
                // set dp[i] to the minimum of dp[i] and dp[i - j * j] + 1
                dp[i] = min(dp[i], dp[i - j * j] + 1);
            }
        }

        dp[n as usize]
    }
}