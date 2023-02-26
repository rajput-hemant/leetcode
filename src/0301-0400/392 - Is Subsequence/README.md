# 392. Is Subsequence [![share]](https://leetcode.com/problems/is-subsequence/)

![][easy]

## Problem Statement

<p>Given two strings <code>s</code> and <code>t</code>, return <code>true</code><em> if </em><code>s</code><em> is a <strong>subsequence</strong> of </em><code>t</code><em>, or </em><code>false</code><em> otherwise</em>.</p>
<p>A <strong>subsequence</strong> of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., <code>"ace"</code> is a subsequence of <code>"<u>a</u>b<u>c</u>d<u>e</u>"</code> while <code>"aec"</code> is not).</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```
Input: s = "abc", t = "ahbgdc"
Output: true
```

<p><strong class="example">Example 2:</strong></p>

```
Input: s = "axc", t = "ahbgdc"
Output: false
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>0 &lt;= s.length &lt;= 100</code></li>
<li><code>0 &lt;= t.length &lt;= 10<sup>4</sup></code></li>
<li><code>s</code> and <code>t</code> consist only of lowercase English letters.</li>
</ul>
<p> </p>
<strong>Follow up:</strong> Suppose there are lots of incoming <code>s</code>, say <code>s<sub>1</sub>, s<sub>2</sub>, ..., s<sub>k</sub></code> where <code>k &gt;= 10<sup>9</sup></code>, and you want to check one by one to see if <code>t</code> has its subsequence. In this scenario, how would you change your code?

## Solutions

### [_Rust_](is_subsequence.rs)

```rs [Rust]
impl Solution {
    pub fn is_subsequence(s: String, t: String) -> bool {
        let (mut i, mut j) = (0, 0);

        while i < s.len() && j < t.len() {
            if s.as_bytes()[i] == t.as_bytes()[j] {
                i += 1;
            }
            j += 1;
        }

        i == s.len()
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
