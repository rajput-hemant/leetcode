# 434. Number of Segments in a String [![share]](https://leetcode.com/problems/number-of-segments-in-a-string/)

![][easy]

## Problem Statement

<p>Given a string <code>s</code>, return <em>the number of segments in the string</em>.</p>
<p>A <strong>segment</strong> is defined to be a contiguous sequence of <strong>non-space characters</strong>.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```
Input: s = "Hello, my name is John"
Output: 5
Explanation: The five segments are ["Hello,", "my", "name", "is", "John"]
```

<p><strong class="example">Example 2:</strong></p>

```
Input: s = "Hello"
Output: 1
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>0 &lt;= s.length &lt;= 300</code></li>
<li><code>s</code> consists of lowercase and uppercase English letters, digits, or one of the following characters <code>"!@#$%^&amp;*()_+-=',.:"</code>.</li>
<li>The only space character in <code>s</code> is <code>' '</code>.</li>
</ul>

## Solutions

### [_Rust_](num_of_segments_in_a_string.rs)

```rs [Rust]
impl Solution {
    pub fn count_segments(s: String) -> i32 {
        let (mut count, mut is_space) = (0, true);

        for c in s.chars() {
            if c == ' ' {
                is_space = true;
            } else if is_space {
                is_space = false;
                count += 1;
            }
        }

        count
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
