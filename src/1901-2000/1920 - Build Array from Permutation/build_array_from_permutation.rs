impl Solution {
    pub fn build_array(nums: Vec<i32>) -> Vec<i32> {
        let mut result = Vec::new();

        for i in 0..nums.len() {
            result.push(nums[nums[i] as usize]);
        }

        result
    }
}
