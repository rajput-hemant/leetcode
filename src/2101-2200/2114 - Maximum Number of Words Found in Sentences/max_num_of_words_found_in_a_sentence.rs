impl Solution {
    pub fn most_words_found(sentences: Vec<String>) -> i32 {
        let mut max_words = 0;

        for sentence in sentences {
            let words = sentence.split_whitespace().count();
            if words > max_words {
                max_words = words;
            }
        }

        max_words as i32
    }
}
