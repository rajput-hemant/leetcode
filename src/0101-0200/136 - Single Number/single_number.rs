impl Solution {
    pub fn single_number(nums: Vec<i32>) -> i32 {
        let mut res = 0;
        for num in nums {
            // a ^ a = 0
            // a ^ a ^ a = a
            // a ^ a ^ b = b
            // also position of a and b doesn't matter
            res ^= num;
        }

        res
    }
}
