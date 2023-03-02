# 443. String Compression [![share]](https://leetcode.com/problems/string-compression/)

![][medium]

## Problem Statement

<p>Given an array of characters <code>chars</code>, compress it using the following algorithm:</p>
<p>Begin with an empty string <code>s</code>. For each group of <strong>consecutive repeating characters</strong> in <code>chars</code>:</p>
<ul>
<li>If the group's length is <code>1</code>, append the character to <code>s</code>.</li>
<li>Otherwise, append the character followed by the group's length.</li>
</ul>
<p>The compressed string <code>s</code> <strong>should not be returned separately</strong>, but instead, be stored <strong>in the input character array <code>chars</code></strong>. Note that group lengths that are <code>10</code> or longer will be split into multiple characters in <code>chars</code>.</p>
<p>After you are done <strong>modifying the input array,</strong> return <em>the new length of the array</em>.</p>
<p>You must write an algorithm that uses only constant extra space.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```
Input: chars = ["a","a","b","b","c","c","c"]
Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
Explanation: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".
```

<p><strong class="example">Example 2:</strong></p>

```
Input: chars = ["a"]
Output: Return 1, and the first character of the input array should be: ["a"]
Explanation: The only group is "a", which remains uncompressed since it's a single character.
```

<p><strong class="example">Example 3:</strong></p>

````
Input: chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
Output: Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].
Explanation: The groups are "a" and "bbbbbbbbbbbb". This compresses to "ab12".```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= chars.length &lt;= 2000</code></li>
<li><code>chars[i]</code> is a lowercase English letter, uppercase English letter, digit, or symbol.</li>
</ul>


::: details _Click to open Hints_

- How do you know if you are at the end of a consecutive group of characters?

:::

## Solution:

::: code-group

```rs [Rust]
impl Solution {
    pub fn compress(chars: &mut Vec<char>) -> i32 {
        let (mut i, n) = (0, chars.len());
        let mut new_len = 0;

        while i < n {
            let mut j = i;

            // increment j until we find a different character or reach the end
            while j < n && chars[j] == chars[i] {
                j += 1;
            }

            // place the character at the new position
            // e.g. if we have aabbccc, we place a at the start of the array
            chars[new_len] = chars[i];
            new_len += 1;

            // if the length of the group of characters is greater than 1
            // i.e. suppose if new_len is 12, we need to place 12 as characters [..., '1','2', ...]
            if j - i > 1 {
                for c in (j - i).to_string().chars() {
                    chars[new_len] = c;
                    new_len += 1;
                }
            }

            // place i at same position as j,
            // i.e. the start of the next group of characters
            i = j;
        }

        new_len as i32
    }
}

````

:::

### [_..._](#)

```

```

<!----------------------------------{ link }--------------------------------->

[share]: https://graph.org/file/3ea5234dda646b71c574a.png
[easy]: https://img.shields.io/badge/Difficulty-Easy-bright.svg
[medium]: https://img.shields.io/badge/Difficulty-Medium-yellow.svg
[hard]: https://img.shields.io/badge/Difficulty-Hard-red.svg
