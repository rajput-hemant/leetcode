impl Solution {
    pub fn longest_subsequence(arr: Vec<i32>, difference: i32) -> i32 {
        *arr.iter()
            .fold(HashMap::new(), |mut map, &i| {
                map.insert(i, map.get(&(i - difference)).unwrap_or(&0) + 1);
                map
            })
            .values()
            .max()
            .unwrap()
    }
}
