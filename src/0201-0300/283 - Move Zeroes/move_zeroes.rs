impl Solution {
    pub fn move_zeroes(nums: &mut Vec<i32>) {
        let (mut index, mut end) = (0, nums.len());

        while index < end {
            if nums[index] == 0 {
                nums.remove(index);
                nums.push(0);
                end -= 1;
            } else {
                index += 1;
            }
        }
    }
}
