impl Solution {
    pub fn license_key_formatting(s: String, k: i32) -> String {
        let mut s = s.replace("-", "");
        let mut i = s.len() as i32 - k;

        while i > 0 {
            s.insert(i as usize, '-');
            i -= k;
        }

        s.to_uppercase()
    }
}
