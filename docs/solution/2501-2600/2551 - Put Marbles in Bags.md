# 2551. Put Marbles in Bags [![share]](https://leetcode.com/problems/put-marbles-in-bags/)

![][hard]

## Problem Statement

<p>You have <code>k</code> bags. You are given a <strong>0-indexed</strong> integer array <code>weights</code> where <code>weights[i]</code> is the weight of the <code>i<sup>th</sup></code> marble. You are also given the integer <code>k.</code></p>
<p>Divide the marbles into the <code>k</code> bags according to the following rules:</p>
<ul>
<li>No bag is empty.</li>
<li>If the <code>i<sup>th</sup></code> marble and <code>j<sup>th</sup></code> marble are in a bag, then all marbles with an index between the <code>i<sup>th</sup></code> and <code>j<sup>th</sup></code> indices should also be in that same bag.</li>
<li>If a bag consists of all the marbles with an index from <code>i</code> to <code>j</code> inclusively, then the cost of the bag is <code>weights[i] + weights[j]</code>.</li>
</ul>
<p>The <strong>score</strong> after distributing the marbles is the sum of the costs of all the <code>k</code> bags.</p>
<p>Return <em>the <strong>difference</strong> between the <strong>maximum</strong> and <strong>minimum</strong> scores among marble distributions</em>.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```
Input: weights = [1,3,5,1], k = 2
Output: 4
Explanation:
The distribution [1],[3,5,1] results in the minimal score of (1+1) + (3+1) = 6.
The distribution [1,3],[5,1], results in the maximal score of (1+3) + (5+1) = 10.
Thus, we return their difference 10 - 6 = 4.
```

<p><strong class="example">Example 2:</strong></p>

```
Input: weights = [1, 3], k = 2
Output: 0
Explanation: The only distribution possible is [1],[3].
Since both the maximal and minimal score are the same, we return 0.
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= k &lt;= weights.length &lt;= 10<sup>5</sup></code></li>
<li><code>1 &lt;= weights[i] &lt;= 10<sup>9</sup></code></li>
</ul>

::: details _Click to open Hints_

- Each bag will contain a sub-array.
- Only the endpoints of the sub-array matter.
- Try to use a priority queue.

:::

## Solution:

::: code-group

```rs [Rust]
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
