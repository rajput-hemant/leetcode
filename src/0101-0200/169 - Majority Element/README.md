# 169. Majority Element [![share]](https://leetcode.com/problems/majority-element/)

![][easy]

## Problem Statement

<p>Given an array <code>nums</code> of size <code>n</code>, return <em>the majority element</em>.</p>
<p>The majority element is the element that appears more than <code>⌊n / 2⌋</code> times. You may assume that the majority element always exists in the array.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```
Input: nums = [3,2,3]
Output: 3
```

<p><strong class="example">Example 2:</strong></p>

```
Input: nums = [2,2,1,1,1,2,2]
Output: 2
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>n == nums.length</code></li>
<li><code>1 &lt;= n &lt;= 5 * 10<sup>4</sup></code></li>
<li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
</ul>
<p> </p>
<strong>Follow-up:</strong> Could you solve the problem in linear time and in <code>O(1)</code> space?

## Solutions

### [_Rust_](majority_element.rs)

```rs [Rust]
impl Solution {
    pub fn majority_element(nums: Vec<i32>) -> i32 {
        let (mut element, mut count) = (nums[0], 0);

        for num in nums {
            if count == 0 {
                element = num;
            }

            if element == num {
                count += 1;
            } else {
                count -= 1;
            }
        }

        element
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
