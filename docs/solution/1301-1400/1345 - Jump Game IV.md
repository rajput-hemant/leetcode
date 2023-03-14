# 1345. Jump Game IV [![share]](https://leetcode.com/problems/jump-game-iv/)

![][hard]

## Problem Statement

<p>Given an array of integers <code>arr</code>, you are initially positioned at the first index of the array.</p>
<p>In one step you can jump from index <code>i</code> to index:</p>
<ul>
<li><code>i + 1</code> where: <code>i + 1 &lt; arr.length</code>.</li>
<li><code>i - 1</code> where: <code>i - 1 &gt;= 0</code>.</li>
<li><code>j</code> where: <code>arr[i] == arr[j]</code> and <code>i != j</code>.</li>
</ul>
<p>Return <em>the minimum number of steps</em> to reach the <strong>last index</strong> of the array.</p>
<p>Notice that you can not jump outside of the array at any time.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```
Input: arr = [100,-23,-23,404,100,23,23,23,3,404]
Output: 3
Explanation: You need three jumps from index 0 --&gt; 4 --&gt; 3 --&gt; 9. Note that index 9 is the last index of the array.
```

<p><strong class="example">Example 2:</strong></p>

```
Input: arr = [7]
Output: 0
Explanation: Start index is the last index. You do not need to jump.
```

<p><strong class="example">Example 3:</strong></p>

```
Input: arr = [7,6,9,6,9,6,9,7]
Output: 1
Explanation: You can jump directly from index 0 to index 7 which is last index of the array.
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= arr.length &lt;= 5 * 10<sup>4</sup></code></li>
<li><code>-10<sup>8</sup> &lt;= arr[i] &lt;= 10<sup>8</sup></code></li>
</ul>

::: details _Click to open Hints_

- Build a graph of n nodes where nodes are the indices of the array and edges for node i are nodes i+1, i-1, j where arr[i] == arr[j].
- Start bfs from node 0 and keep distance. The answer is the distance when you reach node n-1.

:::

## Solution:

::: code-group

```rs [Rust]
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

```

:::

### [_..._](#)

```

```

<!----------------------------------{ link }--------------------------------->

[share]: https://graph.org/file/3ea5234dda646b71c574a.png
[easy]: https://img.shields.io/badge/Difficulty-Easy-bright.svg
[medium]: https://img.shields.io/badge/Difficulty-Medium-yellow.svg
[hard]: https://img.shields.io/badge/Difficulty-Hard-red.svg
