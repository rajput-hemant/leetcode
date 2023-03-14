# 1539. Kth Missing Positive Number [![share]](https://leetcode.com/problems/kth-missing-positive-number/)

![][easy]

## Problem Statement

<p>Given an array <code>arr</code> of positive integers sorted in a <strong>strictly increasing order</strong>, and an integer <code>k</code>.</p>
<p>Return <em>the</em> <code>k<sup>th</sup></code> <em><strong>positive</strong> integer that is <strong>missing</strong> from this array.</em></p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```
Input: arr = [2,3,4,7,11], k = 5
Output: 9
Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5th missing positive integer is 9.
```

<p><strong class="example">Example 2:</strong></p>

```
Input: arr = [1,2,3,4], k = 2
Output: 6
Explanation: The missing positive integers are [5,6,7,...]. The 2nd missing positive integer is 6.
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= arr.length &lt;= 1000</code></li>
<li><code>1 &lt;= arr[i] &lt;= 1000</code></li>
<li><code>1 &lt;= k &lt;= 1000</code></li>
<li><code>arr[i] &lt; arr[j]</code> for <code>1 &lt;= i &lt; j &lt;= arr.length</code></li>
</ul>
<p> </p>
<p><strong>Follow up:</strong></p>
<p>Could you solve this problem in less than O(n) complexity?</p>

<details>
<summary>

#### _Click to open Hints_

</summary>

- Keep track of how many positive numbers are missing as you scan the array.

</details>

## Solutions

### [_Rust_](kth_missing_positive_number.rs)

```rs [Rust]
impl Solution {
    pub fn find_kth_positive(arr: Vec<i32>, k: i32) -> i32 {
        let (mut l, mut r) = (0, arr.len());

        while l < r {
            let mid = l + (r - l) / 2;

            if arr[mid] - mid as i32 - 1 >= k {
                r = mid;
            } else {
                l = mid + 1;
            }
        }

        l as i32 + k
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
