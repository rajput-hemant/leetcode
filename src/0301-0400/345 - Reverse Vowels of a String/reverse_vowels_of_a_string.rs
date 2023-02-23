impl Solution {
    pub fn reverse_vowels(s: String) -> String {
        let mut s = s.into_bytes();
        let (mut i, mut j) = (0, s.len() - 1);

        while i < j {
            if !Self::is_vowel(s[i] as char) {
                i += 1;
                continue;
            }
            if !Self::is_vowel(s[j] as char) {
                j -= 1;
                continue;
            }
            s.swap(i, j);
            i += 1;
            j -= 1;
        }
        String::from_utf8(s).unwrap()

        // let mut chars: Vec<char> = s.chars().collect();
        // let (mut i, mut j) = (0, chars.len() - 1);

        // while i < j {
        //     if !Self::is_vowel(chars[i]) {
        //         i += 1;
        //         continue;
        //     }
        //     if !Self::is_vowel(chars[j]) {
        //         j -= 1;
        //         continue;
        //     }
        //     chars.swap(i, j);
        //     i += 1;
        //     j -= 1;
        // }

        // chars.into_iter().collect()
    }

    fn is_vowel(ch: char) -> bool {
        match ch {
            'a' | 'e' | 'i' | 'o' | 'u' | 'A' | 'E' | 'I' | 'O' | 'U' => true,
            _ => false,
        }
    }
}
