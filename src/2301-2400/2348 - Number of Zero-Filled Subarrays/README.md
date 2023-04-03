# 2348. Number of Zero-Filled Subarrays [![share]](https://leetcode.com/problems/number-of-zero-filled-subarrays/)

![][medium]

## Problem Statement

<p>Given an integer array <code>nums</code>, return <em>the number of <strong>subarrays</strong> filled with </em><code>0</code>.</p>
<p>A <strong>subarray</strong> is a contiguous non-empty sequence of elements within an array.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

````
Input: nums = [1,3,0,0,2,0,0,4]
Output: 6
Explanation:
There are 4 occurrences of [0] as a subarray.
There are 2 occurrences of [0,0] as a subarray.
There is no occurrence of a subarray with a size more than 2 filled with 0. Therefore, we return 6.```

<p><strong class="example">Example 2:</strong></p>

````

Input: nums = [0,0,0,2,0,0]
Output: 9
Explanation:
There are 5 occurrences of [0] as a subarray.
There are 3 occurrences of [0,0] as a subarray.
There is 1 occurrence of [0,0,0] as a subarray.
There is no occurrence of a subarray with a size more than 3 filled with 0. Therefore, we return 9.

```

<p><strong class="example">Example 3:</strong></p>

```

Input: nums = [2,10,2019]
Output: 0
Explanation: There is no subarray filled with 0. Therefore, we return 0.

````

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
<li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
</ul>


<details>
<summary>

#### _Click to open Hints_

</summary>

- For each zero, you can calculate the number of zero-filled subarrays that end on that index, which is the number of consecutive zeros behind the current element + 1.
- Maintain the number of consecutive zeros behind the current element, count the number of zero-filled subarrays that end on each index, sum it up to get the answer.

</details>

## Solutions

### [_Rust_](number_of_zero_filled_subarrays.rs)

```rs [Rust]
impl Solution {
    pub fn zero_filled_subarray(nums: Vec<i32>) -> i64 {
        let mut nums = nums;
        nums.push(1);

        let (mut res, mut count) = (0, 0);
        for num in nums {
            if num == 0 {
                count += 1;
            } else {
                res += count * (count + 1) / 2;
                count = 0;
            }
        }

        res
    }
}

````

### [_..._]()

```

```

<!----------------------------------{ link }--------------------------------->

[share]: https://graph.org/file/3ea5234dda646b71c574a.png
[easy]: https://img.shields.io/badge/Difficulty-Easy-bright.svg
[medium]: https://img.shields.io/badge/Difficulty-Medium-yellow.svg
[hard]: https://img.shields.io/badge/Difficulty-Hard-red.svg
