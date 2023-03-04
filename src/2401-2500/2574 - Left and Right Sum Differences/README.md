# 2574. Left and Right Sum Differences [![share]](https://leetcode.com/problems/left-and-right-sum-differences/)

![][easy]

## Problem Statement

<p>Given a <strong>0-indexed</strong> integer array <code>nums</code>, find a <strong>0-indexed </strong>integer array <code>answer</code> where:</p>
<ul>
<li><code>answer.length == nums.length</code>.</li>
<li><code>answer[i] = |leftSum[i] - rightSum[i]|</code>.</li>
</ul>
<p>Where:</p>
<ul>
<li><code>leftSum[i]</code> is the sum of elements to the left of the index <code>i</code> in the array <code>nums</code>. If there is no such element, <code>leftSum[i] = 0</code>.</li>
<li><code>rightSum[i]</code> is the sum of elements to the right of the index <code>i</code> in the array <code>nums</code>. If there is no such element, <code>rightSum[i] = 0</code>.</li>
</ul>
<p>Return <em>the array</em> <code>answer</code>.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```
Input: nums = [10,4,8,3]
Output: [15,1,11,22]
Explanation: The array leftSum is [0,10,14,22] and the array rightSum is [15,11,3,0].
The array answer is [|0 - 15|,|10 - 11|,|14 - 3|,|22 - 0|] = [15,1,11,22].
```

<p><strong class="example">Example 2:</strong></p>

```
Input: nums = [1]
Output: [0]
Explanation: The array leftSum is [0] and the array rightSum is [0].
The array answer is [|0 - 0|] = [0].
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= nums.length &lt;= 1000</code></li>
<li><code>1 &lt;= nums[i] &lt;= 10<sup>5</sup></code></li>
</ul>

<details>
<summary>

#### _Click to open Hints_

</summary>

- For each index i, maintain two variables leftSum and rightSum.
- Iterate on the range j: [0 … i - 1] and add nums[j] to the leftSum and similarly iterate on the range j: [i + 1 … nums.length - 1] and add nums[j] to the rightSum.

</details>

## Solutions

### [_Rust_](left_and_right_sum_differences.rs)

```rs [Rust]
impl Solution {
    pub fn left_rigth_difference(nums: Vec<i32>) -> Vec<i32> {
        let mut result = vec![];

        let sum = nums.iter().sum::<i32>();
        let mut left_sum = 0;

        for i in 0..nums.len() {
            let right_sum = sum - left_sum - nums[i];
            result.push((left_sum - right_sum).abs());
            left_sum += nums[i];
        }

        result
    }
}

```

### [_..._]()

```

```

<!----------------------------------{ link }--------------------------------->

[share]: https://graph.org/file/3ea5234dda646b71c574a.png
[easy]: https://img.shields.io/badge/Difficulty-Easy-bright.svg
[medium]: https://img.shields.io/badge/Difficulty-Medium-yellow.svg
[hard]: https://img.shields.io/badge/Difficulty-Hard-red.svg
