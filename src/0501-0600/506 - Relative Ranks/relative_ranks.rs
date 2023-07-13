impl Solution {
    pub fn find_relative_ranks(score: Vec<i32>) -> Vec<String> {
        let mut score_sorted = score.clone();
        score_sorted.sort_unstable_by(|a, b| b.cmp(a));

        let mut map = HashMap::new();
        for (i, s) in score_sorted.iter().enumerate() {
            map.insert(s, i + 1);
        }

        score
            .iter()
            .map(|s| {
                let rank = map.get(s).unwrap();
                match rank {
                    1 => "Gold Medal".to_string(),
                    2 => "Silver Medal".to_string(),
                    3 => "Bronze Medal".to_string(),
                    _ => rank.to_string(),
                }
            })
            .collect()
    }
}
