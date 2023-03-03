impl Solution {
    pub fn str_str(haystack: String, needle: String) -> i32 {
        let (m, n) = (haystack.len(), needle.len());

        if m < n {
            return -1;
        }

        // iterate over the haystack from 0 to m - n
        // because the needle can't be longer than the haystack
        for i in 0..=m - n {
            if haystack[i..i + n] == needle {
                return i as i32;
            }
        }

        -1
    }
}
