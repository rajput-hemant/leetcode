# 482. License Key Formatting [![share]](https://leetcode.com/problems/license-key-formatting/)

![][easy]

## Problem Statement

<p>You are given a license key represented as a string <code>s</code> that consists of only alphanumeric characters and dashes. The string is separated into <code>n + 1</code> groups by <code>n</code> dashes. You are also given an integer <code>k</code>.</p>
<p>We want to reformat the string <code>s</code> such that each group contains exactly <code>k</code> characters, except for the first group, which could be shorter than <code>k</code> but still must contain at least one character. Furthermore, there must be a dash inserted between two groups, and you should convert all lowercase letters to uppercase.</p>
<p>Return <em>the reformatted license key</em>.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```
Input: s = "5F3Z-2e-9-w", k = 4
Output: "5F3Z-2E9W"
Explanation: The string s has been split into two parts, each part has 4 characters.
Note that the two extra dashes are not needed and can be removed.
```

<p><strong class="example">Example 2:</strong></p>

```
Input: s = "2-5g-3-J", k = 2
Output: "2-5G-3J"
Explanation: The string s has been split into three parts, each part has 2 characters except the first part as it could be shorter as mentioned above.
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= s.length &lt;= 10<sup>5</sup></code></li>
<li><code>s</code> consists of English letters, digits, and dashes <code>'-'</code>.</li>
<li><code>1 &lt;= k &lt;= 10<sup>4</sup></code></li>
</ul>

## Solutions

### [_Rust_](license_key_formatting.rs)

```rs [Rust]
impl Solution {
    pub fn license_key_formatting(s: String, k: i32) -> String {
        let mut s = s.replace("-", "");
        let mut i = s.len() as i32 - k;

        while i > 0 {
            s.insert(i as usize, '-');
            i -= k;
        }

        s.to_uppercase()
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
