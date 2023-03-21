impl Solution {
    pub fn zero_filled_subarray(nums: Vec<i32>) -> i64 {
        let mut nums = nums;
        nums.push(1);

        let (mut res, mut count) = (0, 0);
        for num in nums {
            if num == 0 {
                count += 1;
            } else {
                res += count * (count + 1) / 2;
                count = 0;
            }
        }

        res
    }
}
