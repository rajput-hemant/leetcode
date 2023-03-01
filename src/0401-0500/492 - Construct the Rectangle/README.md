# 492. Construct the Rectangle [![share]](https://leetcode.com/problems/construct-the-rectangle/)

![][easy]

## Problem Statement

<p>A web developer needs to know how to design a web page's size. So, given a specific rectangular web page’s area, your job by now is to design a rectangular web page, whose length L and width W satisfy the following requirements:</p>
<ol>
<li>The area of the rectangular web page you designed must equal to the given target area.</li>
<li>The width <code>W</code> should not be larger than the length <code>L</code>, which means <code>L &gt;= W</code>.</li>
<li>The difference between length <code>L</code> and width <code>W</code> should be as small as possible.</li>
</ol>
<p>Return <em>an array <code>[L, W]</code> where <code>L</code> and <code>W</code> are the length and width of the web page you designed in sequence.</em></p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```
Input: area = 4
Output: [2,2]
Explanation: The target area is 4, and all the possible ways to construct it are [1,4], [2,2], [4,1].
But according to requirement 2, [1,4] is illegal; according to requirement 3,  [4,1] is not optimal compared to [2,2]. So the length L is 2, and the width W is 2.
```

<p><strong class="example">Example 2:</strong></p>

```
Input: area = 37
Output: [37,1]
```

<p><strong class="example">Example 3:</strong></p>

```
Input: area = 122122
Output: [427,286]
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= area &lt;= 10<sup>7</sup></code></li>
</ul>

<details>
<summary>

#### _Click to open Hints_

</summary>

- The W is always less than or equal to the square root of the area, so we start searching at sqrt(area) till we find the result.

</details>

## Solutions

### [_Rust_](contruct_the_rectangle.rs)

```rs [Rust]
impl Solution {
    pub fn construct_rectangle(area: i32) -> Vec<i32> {
        let mut w = (area as f64).sqrt() as i32;

        // until the remainder is 0, decrement w
        // this will find the largest w that is a factor of area
        while area % w != 0 {
            w -= 1;
        }

        // return the result
        vec![area / w, w]
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
