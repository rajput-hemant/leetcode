impl Solution {
    pub fn count_odds(low: i32, high: i32) -> i32 {
        // ((high + 1) / 2) - (low / 2)
        ((high + 1) >> 1) - (low >> 1) // same as above
    }
}
