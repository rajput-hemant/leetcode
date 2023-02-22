impl Solution {
    pub fn search_insert(nums: Vec<i32>, target: i32) -> i32 {
        for (idx, val) in nums.iter().enumerate() {
            if target <= *val {
                return idx as i32;
            }
        }

        nums.len() as i32
    }
}
