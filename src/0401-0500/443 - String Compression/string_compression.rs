impl Solution {
    pub fn compress(chars: &mut Vec<char>) -> i32 {
        let (mut i, n) = (0, chars.len());
        let mut new_len = 0;

        while i < n {
            let mut j = i;

            // increment j until we find a different character or reach the end
            while j < n && chars[j] == chars[i] {
                j += 1;
            }

            // place the character at the new position
            // e.g. if we have aabbccc, we place a at the start of the array
            chars[new_len] = chars[i];
            new_len += 1;

            // if the length of the group of characters is greater than 1
            // i.e. suppose if new_len is 12, we need to place 12 as characters [..., '1','2', ...]
            if j - i > 1 {
                for c in (j - i).to_string().chars() {
                    chars[new_len] = c;
                    new_len += 1;
                }
            }

            // place i at same position as j,
            // i.e. the start of the next group of characters
            i = j;
        }

        new_len as i32
    }
}
