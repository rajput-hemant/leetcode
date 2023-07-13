use std::collections::HashMap;

impl Solution {
    // using hashmap
    pub fn is_anagram(s: String, t: String) -> bool {
        if s.len() != t.len() {
            return false;
        }

        let s_map = s.chars().fold(HashMap::new(), |mut map, c| {
            // *map.entry(c).or_insert(0) = map.get(&c).unwrap_or(&0) + 1;
            // same as above
            *map.entry(c).or_insert(0) += 1;
            map
        });

        let t_map = t.chars().fold(HashMap::new(), |mut map, c| {
            *map.entry(c).or_insert(0) += 1;
            map
        });

        s_map
            .iter()
            .all(|(key, value)| t_map.get(key) == Some(value))
    }

    pub fn is_anagram(s: String, t: String) -> bool {
        if (s.len() != t.len()) {
            return false;
        }

        // create vector of chars from the string
        let mut s_chars = s.chars().collect::<Vec<char>>();
        let mut t_chars = t.chars().collect::<Vec<char>>();

        // sort the vector of chars
        s_chars.sort();
        t_chars.sort();

        // compare the sorted vectors of chars
        for i in 0..s_chars.len() {
            if s_chars[i] != t_chars[i] {
                return false;
            }
        }

        true
    }
}
