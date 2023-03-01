impl Solution {
    pub fn sort_array(nums: Vec<i32>) -> Vec<i32> {
        let len = nums.len() as i32;
        let mut nums = nums;

        Self::quick_sort(&mut nums, 0, len - 1);

        nums
    }

    fn quick_sort(nums: &mut Vec<i32>, start: i32, end: i32) {
        if start >= end {
            return;
        }

        let pivot = Self::partition(nums, start, end);
        Self::quick_sort(nums, start, pivot - 1);
        Self::quick_sort(nums, pivot + 1, end);
    }

    fn partition(nums: &mut Vec<i32>, start: i32, end: i32) -> i32 {
        let pivot = nums[end as usize];
        let mut i = start;

        for j in start..end {
            if nums[j as usize] < pivot {
                nums.swap(i as usize, j as usize);
                i += 1;
            }
        }

        nums.swap(i as usize, end as usize);

        i
    }
}
