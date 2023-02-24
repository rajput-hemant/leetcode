impl Solution {
    pub fn first_uniq_char(s: String) -> i32 {
        let mut map = std::collections::HashMap::new();
        for c in s.chars() {
            // increase the count of the character if exists
            // otherwise insert the character w/ default value 0
            // then increase the count by 1
            *map.entry(c).or_insert(0) += 1;
        }

        // iterate over the string and return the index of the first character
        // that has a count of 1
        for (i, c) in s.chars().enumerate() {
            if *map.get(&c).unwrap() == 1 {
                return i as i32;
            }
        }

        -1
    }
}
