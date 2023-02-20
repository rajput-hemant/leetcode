# 242. Valid Anagram [![share]](https://leetcode.com/problems/valid-anagram/)

![][easy]

## Problem Statement

<p>Given two strings <code>s</code> and <code>t</code>, return <code>true</code> <em>if</em> <code>t</code> <em>is an anagram of</em> <code>s</code><em>, and</em> <code>false</code> <em>otherwise</em>.</p>
<p>An <strong>Anagram</strong> is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```
Input: s = "anagram", t = "nagaram"
Output: true
```

<p><strong class="example">Example 2:</strong></p>

```
Input: s = "rat", t = "car"
Output: false
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= s.length, t.length &lt;= 5 * 10<sup>4</sup></code></li>
<li><code>s</code> and <code>t</code> consist of lowercase English letters.</li>
</ul>
<p> </p>
<p><strong>Follow up:</strong> What if the inputs contain Unicode characters? How would you adapt your solution to such a case?</p>

## Solution:

::: code-group

```rs [Rust]
impl Solution {
    pub fn is_anagram(s: String, t: String) -> bool {
        if (s.len() != t.len()) {
            return false;
        }

        // create vector of chars from the string
        let mut s_chars = s.chars().collect::<Vec<char>>();
        let mut t_chars = t.chars().collect::<Vec<char>>();

        // sort the vector of chars
        s_chars.sort();
        t_chars.sort();

        // compare the sorted vectors of chars
        for i in 0..s_chars.len() {
            if s_chars[i] != t_chars[i] {
                return false;
            }
        }

        true
    }
}

```

:::

### [_..._](#)

```

```

<!----------------------------------{ link }--------------------------------->

[share]: https://graph.org/file/3ea5234dda646b71c574a.png
[easy]: https://img.shields.io/badge/Difficulty-Easy-bright.svg
[medium]: https://img.shields.io/badge/Difficulty-Medium-yellow.svg
[hard]: https://img.shields.io/badge/Difficulty-Hard-red.svg
