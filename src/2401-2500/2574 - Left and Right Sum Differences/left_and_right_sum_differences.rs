impl Solution {
    pub fn left_rigth_difference(nums: Vec<i32>) -> Vec<i32> {
        let mut result = vec![];

        let sum = nums.iter().sum::<i32>();
        let mut left_sum = 0;

        for i in 0..nums.len() {
            let right_sum = sum - left_sum - nums[i];
            result.push((left_sum - right_sum).abs());
            left_sum += nums[i];
        }

        result
    }
}
