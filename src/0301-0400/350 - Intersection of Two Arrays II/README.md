# 350. Intersection of Two Arrays II [![share]](https://leetcode.com/problems/intersection-of-two-arrays-ii/)

![][easy]

## Problem Statement

<p>Given two integer arrays <code>nums1</code> and <code>nums2</code>, return <em>an array of their intersection</em>. Each element in the result must appear as many times as it shows in both arrays and you may return the result in <strong>any order</strong>.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
```

<p><strong class="example">Example 2:</strong></p>

```
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= nums1.length, nums2.length &lt;= 1000</code></li>
<li><code>0 &lt;= nums1[i], nums2[i] &lt;= 1000</code></li>
</ul>
<p> </p>
<p><strong>Follow up:</strong></p>
<ul>
<li>What if the given array is already sorted? How would you optimize your algorithm?</li>
<li>What if <code>nums1</code>'s size is small compared to <code>nums2</code>'s size? Which algorithm is better?</li>
<li>What if elements of <code>nums2</code> are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?</li>
</ul>

## Solutions

### [_Rust_](intersection_of_two_arrays_2.rs)

```rs [Rust]
impl Solution {
    pub fn intersect(nums1: Vec<i32>, nums2: Vec<i32>) -> Vec<i32> {
        let (mut nums1, mut nums2) = (nums1, nums2);
        let mut res = Vec::new();
        let (mut i, mut j) = (0, 0);

        nums1.sort();
        nums2.sort();

        while i <= nums1.len() - 1 && j <= nums2.len() - 1 {
            if nums1[i] == nums2[j] {
                res.push(nums1[i]);
                i += 1;
                j += 1;
            } else if nums1[i] < nums2[j] {
                i += 1;
            } else {
                j += 1;
            }
        }

        res
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
