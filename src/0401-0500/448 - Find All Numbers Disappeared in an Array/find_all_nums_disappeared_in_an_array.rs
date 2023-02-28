impl Solution {
    pub fn find_disappeared_numbers(nums: Vec<i32>) -> Vec<i32> {
        let mut res = Vec::new();
        let mut map = std::collections::HashMap::new();

        for i in 0..nums.len() {
            map.insert(nums[i], i);
        }

        for i in 1..=nums.len() {
            if !map.contains_key(&(i as i32)) {
                res.push(i as i32);
            }
        }

        res
    }
}
