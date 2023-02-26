impl Solution {
    pub fn third_max(nums: Vec<i32>) -> i32 {
        let mut sorted = nums.clone();
        // sort in descending order
        sorted.sort_by(|a, b| b.cmp(a));
        // remove duplicates
        sorted.dedup();

        if sorted.len() < 3 {
            return sorted[0];
        } else {
            return sorted[2];
        }
    }
}
