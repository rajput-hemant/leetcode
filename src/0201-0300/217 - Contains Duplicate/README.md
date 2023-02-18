# 217. Contains Duplicate [![share]](https://leetcode.com/problems/contains-duplicate/)

![][easy]

## Problem Statement

<p>Given an integer array <code>nums</code>, return <code>true</code> if any value appears <strong>at least twice</strong> in the array, and return <code>false</code> if every element is distinct.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```
Input: nums = [1,2,3,1]
Output: true
```

<p><strong class="example">Example 2:</strong></p>

```
Input: nums = [1,2,3,4]
Output: false
```

<p><strong class="example">Example 3:</strong></p>

```
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
<li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
</ul>

## Solutions

### [_Rust_](contains_duplicate.rs)

```rs [Rust]
impl Solution {
    pub fn contains_duplicate(nums: Vec<i32>) -> bool {
        let mut set = std::collections::HashSet::new();

        for num in nums {
            if set.contains(num) {
                return true;
            } else {
                set.insert(num);
            }
        }
        false
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
