impl Solution {
    pub fn maximum_wealth(accounts: Vec<Vec<i32>>) -> i32 {
        let mut max = 0;

        for account in accounts {
            let mut sum = 0;
            for money in account {
                sum += money;
            }
            if sum > max {
                max = sum;
            }
        }
        max
    }
}
