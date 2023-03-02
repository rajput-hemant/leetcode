impl Solution {
    pub fn defang_i_paddr(address: String) -> String {
        let mut result = String::default();

        for c in address.chars() {
            if c == '.' {
                result.push_str("[.]");
            } else {
                result.push(c);
            }
        }

        result
    }
}
