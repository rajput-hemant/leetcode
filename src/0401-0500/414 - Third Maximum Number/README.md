# 414. Third Maximum Number [![share]](https://leetcode.com/problems/third-maximum-number/)

![][easy]

## Problem Statement

<p>Given an integer array <code>nums</code>, return <em>the <strong>third distinct maximum</strong> number in this array. If the third maximum does not exist, return the <strong>maximum</strong> number</em>.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```
Input: nums = [3,2,1]
Output: 1
Explanation:
The first distinct maximum is 3.
The second distinct maximum is 2.
The third distinct maximum is 1.
```

<p><strong class="example">Example 2:</strong></p>

```
Input: nums = [1,2]
Output: 2
Explanation:
The first distinct maximum is 2.
The second distinct maximum is 1.
The third distinct maximum does not exist, so the maximum (2) is returned instead.
```

<p><strong class="example">Example 3:</strong></p>

```
Input: nums = [2,2,3,1]
Output: 1
Explanation:
The first distinct maximum is 3.
The second distinct maximum is 2 (both 2's are counted together since they have the same value).
The third distinct maximum is 1.
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= nums.length &lt;= 10<sup>4</sup></code></li>
<li><code>-2<sup>31</sup> &lt;= nums[i] &lt;= 2<sup>31</sup> - 1</code></li>
</ul>
<p> </p>
<strong>Follow up:</strong> Can you find an <code>O(n)</code> solution?

## Solutions

### [_Rust_](third_max_num.rs)

```rs [Rust]
impl Solution {
    pub fn third_max(nums: Vec<i32>) -> i32 {
        let mut sorted = nums.clone();
        // sort in descending order
        sorted.sort_by(|a, b| b.cmp(a));
        // remove duplicates
        sorted.dedup();

        if sorted.len() < 3 {
            return sorted[0];
        } else {
            return sorted[2];
        }
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
