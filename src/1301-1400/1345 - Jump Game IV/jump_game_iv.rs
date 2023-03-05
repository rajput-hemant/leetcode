use std::collections::{HashMap, VecDeque};

impl Solution {
    pub fn min_jumps(arr: Vec<i32>) -> i32 {
        let mut map = HashMap::new();

        for (i, &v) in arr.iter().enumerate() {
            map.entry(v).or_insert(vec![]).push(i);
        }

        let mut q = VecDeque::new();
        q.push_back((0, 0_i32));

        let mut visited = vec![false; arr.len()];
        visited[0] = true;

        while let Some((i, mut step)) = q.pop_front() {
            if i == arr.len() - 1 {
                return step;
            }

            step += 1;

            if let Some(v) = map.remove(&arr[i]) {
                for j in v {
                    if !visited[j] {
                        visited[j] = true;
                        q.push_back((j, step));
                    }
                }
            }

            if i + 1 < arr.len() && !visited[i + 1] {
                visited[i + 1] = true;
                q.push_back((i + 1, step));
            }

            if i >= 1 && !visited[i - 1] {
                visited[i - 1] = true;
                q.push_back((i - 1, step));
            }
        }

        -1
    }
}
