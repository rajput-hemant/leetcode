impl Solution {
    pub fn num_identical_pairs(nums: Vec<i32>) -> i32 {
        let mut count = 0;
        let mut map = std::collections::HashMap::new();

        for num in nums {
            let entry = map.entry(num).or_insert(0);
            count += *entry;
            *entry += 1;
        }

        count
    }
}
