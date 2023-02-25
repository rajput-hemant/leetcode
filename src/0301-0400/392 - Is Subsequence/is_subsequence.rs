impl Solution {
    pub fn is_subsequence(s: String, t: String) -> bool {
        let (mut i, mut j) = (0, 0);

        while i < s.len() && j < t.len() {
            if s.as_bytes()[i] == t.as_bytes()[j] {
                i += 1;
            }
            j += 1;
        }

        i == s.len()
    }
}
