# 387. First Unique Character in a String [![share]](https://leetcode.com/problems/first-unique-character-in-a-string/)

![][easy]

## Problem Statement

<p>Given a string <code>s</code>, <em>find the first non-repeating character in it and return its index</em>. If it does not exist, return <code>-1</code>.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```
Input: s = "leetcode"
Output: 0
```

<p><strong class="example">Example 2:</strong></p>

```
Input: s = "loveleetcode"
Output: 2
```

<p><strong class="example">Example 3:</strong></p>

```
Input: s = "aabb"
Output: -1
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= s.length &lt;= 10<sup>5</sup></code></li>
<li><code>s</code> consists of only lowercase English letters.</li>
</ul>

## Solution:

::: code-group

```rs [Rust]
impl Solution {
    pub fn first_uniq_char(s: String) -> i32 {
        let mut map = std::collections::HashMap::new();
        for c in s.chars() {
            // increase the count of the character if exists
            // otherwise insert the character w/ default value 0
            // then increase the count by 1
            *map.entry(c).or_insert(0) += 1;
        }

        // iterate over the string and return the index of the first character
        // that has a count of 1
        for (i, c) in s.chars().enumerate() {
            if *map.get(&c).unwrap() == 1 {
                return i as i32;
            }
        }

        -1
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
