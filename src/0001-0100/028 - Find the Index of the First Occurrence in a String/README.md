# 28. Find the Index of the First Occurrence in a String [![share]](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/)

![][medium]

## Problem Statement

<p>Given two strings <code>needle</code> and <code>haystack</code>, return the index of the first occurrence of <code>needle</code> in <code>haystack</code>, or <code>-1</code> if <code>needle</code> is not part of <code>haystack</code>.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```
Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
```

<p><strong class="example">Example 2:</strong></p>

```
Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= haystack.length, needle.length &lt;= 10<sup>4</sup></code></li>
<li><code>haystack</code> and <code>needle</code> consist of only lowercase English characters.</li>
</ul>

## Solutions

### [_Rust_](find_the_index_of_the_first_ccurrence_in_a_string.rs)

```rs [Rust]
impl Solution {
    pub fn str_str(haystack: String, needle: String) -> i32 {
        let (m, n) = (haystack.len(), needle.len());

        if m < n {
            return -1;
        }

        // iterate over the haystack from 0 to m - n
        // because the needle can't be longer than the haystack
        for i in 0..=m - n {
            if haystack[i..i + n] == needle {
                return i as i32;
            }
        }

        -1
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
