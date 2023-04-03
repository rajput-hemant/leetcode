impl Solution {
    pub fn kids_with_candies(candies: Vec<i32>, extra_candies: i32) -> Vec<bool> {
        let mut max = 0;

        for i in 0..candies.len() {
            if candies[i] > max {
                max = candies[i];
            }
        }

        let mut result = Vec::new();

        for i in 0..candies.len() {
            if candies[i] + extra_candies >= max {
                result.push(true);
            } else {
                result.push(false);
            }
        }

        result
    }
}
