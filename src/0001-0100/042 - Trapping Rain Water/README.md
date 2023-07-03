# 42. Trapping Rain Water [![share]](https://leetcode.com/problems/trapping-rain-water/)

![][hard]

## Problem Statement

<p>Given <code>n</code> non-negative integers representing an elevation map where the width of each bar is <code>1</code>, compute how much water it can trap after raining.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>
<img src="https://assets.leetcode.com/uploads/2018/10/22/rainwatertrap.png" style="width: 412px; height: 161px;"/>

```
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
```

<p><strong class="example">Example 2:</strong></p>

```
Input: height = [4,2,0,3,2,5]
Output: 9
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>n == height.length</code></li>
<li><code>1 &lt;= n &lt;= 2 * 10<sup>4</sup></code></li>
<li><code>0 &lt;= height[i] &lt;= 10<sup>5</sup></code></li>
</ul>

## Solutions

### [_Rust_](trapping_rain_water.rs)

```rs [Rust]
impl Solution {
    pub fn trap(height: Vec<i32>) -> i32 {
        let (mut left, mut right) = (0, height.len() - 1);
        let (mut left_max, mut right_max) = (0, 0);
        let mut ans = 0;

        // iterate from both sides to the middle
        while left < right {
            // if left is lower than right, then the water level depends on left
            // else the water level depends on right
            if height[left] < height[right] {
                // if left height is higher than left_max, then update left_max
                // else add the difference between left_max and left height to ans
                if height[left] >= left_max {
                    left_max = height[left];
                } else {
                    ans += left_max - height[left];
                }
                left += 1;
            } else {
                // if right height is higher than right_max, then update right_max
                // else add the difference between right_max and right height to ans
                if height[right] >= right_max {
                    right_max = height[right];
                } else {
                    ans += right_max - height[right];
                }
                right -= 1;
            }
        }

        ans
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
