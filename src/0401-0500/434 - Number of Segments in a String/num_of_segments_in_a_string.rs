impl Solution {
    pub fn count_segments(s: String) -> i32 {
        let (mut count, mut is_space) = (0, true);

        for c in s.chars() {
            if c == ' ' {
                is_space = true;
            } else if is_space {
                is_space = false;
                count += 1;
            }
        }

        count
    }
}
