impl Solution {
    pub fn first_missing_positive(nums: Vec<i32>) -> i32 {
        let (mut nums, mut i) = (nums, 0);

        while i < nums.len() {
            let num = nums[i];

            // if the number is in the range [1, nums.len()] and not in the right position
            // swap it with the number at the right position
            if num > 0 && num <= nums.len() as i32 && num != nums[num as usize - 1] {
                nums.swap(i, num as usize - 1);
            } else {
                i += 1;
            }
        }

        // find the first missing positive number
        for (i, num) in nums.iter().enumerate() {
            if num != &(i as i32 + 1) {
                return i as i32 + 1;
            }
        }

        nums.len() as i32 + 1
    }
}
