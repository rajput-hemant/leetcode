impl Solution {
    pub fn missing_number(nums: Vec<i32>) -> i32 {
        let len = nums.len();
        let mut sum = len * (len + 1) / 2;

        for num in nums {
            sum -= num as usize;
        }

        sum as i32
    }
}
