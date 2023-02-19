impl Solution {
    pub fn summary_ranges(nums: Vec<i32>) -> Vec<String> {
        let mut list = Vec::new();
        let n = nums.len();
        let mut i = 0;

        while i < n {
            let start = nums[i];

            while i + 1 < n && nums[i + 1] == nums[i] + 1 {
                i += 1;
            }

            if start == nums[i] {
                list.push(format!("{}", start));
            } else {
                list.push(format!("{}->{}", start, nums[i]));
            }

            i += 1;
        }

        list
    }
}
