impl Solution {
    pub fn is_palindrome(s: String) -> bool {
        let chars: Vec<char> = s
            .chars()
            .filter_map(|c| {
                if c.is_alphanumeric() {
                    Some(c.to_ascii_lowercase())
                } else {
                    None
                }
            })
            .collect();

        if chars.len() == 0 {
            return true;
        }

        let (mut i, mut j) = (0, chars.len() - 1);
        while i < j {
            if chars[i] != chars[j] {
                return false;
            }
            i += 1;
            j -= 1;
        }

        true
    }
}
