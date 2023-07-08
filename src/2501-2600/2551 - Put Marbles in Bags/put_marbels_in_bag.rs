impl Solution {
    pub fn put_marbles(weights: Vec<i32>, k: i32) -> i64 {
        let n = weights.len();
        // pair weights of adjacent bags
        let mut pair_weights: Vec<_> = (0..n - 1).map(|i| weights[i] + weights[i + 1]).collect();

        // sort the pair weights
        pair_weights.sort();

        // sum the difference between the largest and smallest pair weights
        (0..(k - 1) as usize).fold(0_i64, |ans, i| {
            ans + (pair_weights[n - 2 - i] - pair_weights[i]) as i64
        })
    }
}
