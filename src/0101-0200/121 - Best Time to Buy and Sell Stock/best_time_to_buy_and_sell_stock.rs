impl Solution {
    pub fn max_profit(prices: Vec<i32>) -> i32 {
        let (mut profit, mut min) = (0, prices[0]);

        // loop through the vector, starting at 1
        for i in 1..prices.len() {
            // if the current value is less than the minimum value, set the minimum value to the current value
            if prices[i] < min {
                min = prices[i];
            }
            // else if the current value minus the minimum value is greater than the current profit, set the profit to the current value minus the minimum value
            else if prices[i] - min > profit {
                profit = prices[i] - min;
            }
        }

        profit
    }
}
