# 125. Valid Palindrome [![share]](https://leetcode.com/problems/valid-palindrome/)

![][easy]

## Problem Statement

<p>A phrase is a <strong>palindrome</strong> if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.</p>
<p>Given a string <code>s</code>, return <code>true</code><em> if it is a <strong>palindrome</strong>, or </em><code>false</code><em> otherwise</em>.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
```

<p><strong class="example">Example 2:</strong></p>

```
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
```

<p><strong class="example">Example 3:</strong></p>

```
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= s.length &lt;= 2 * 10<sup>5</sup></code></li>
<li><code>s</code> consists only of printable ASCII characters.</li>
</ul>

## Solutions

### [_Rust_](valid_palindrome.rs)

```rs [Rust]
impl Solution {
    pub fn is_palindrome(s: String) -> bool {
        let chars: Vec<char> = s
            .chars()
            .filter_map(|c| {
                if c.is_alphanumeric() {
                    Some(c.to_ascii_lowercase())
                } else {
                    None
                }
            })
            .collect();

        if chars.len() == 0 {
            return true;
        }

        let (mut i, mut j) = (0, chars.len() - 1);
        while i < j {
            if chars[i] != chars[j] {
                return false;
            }
            i += 1;
            j -= 1;
        }

        true
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
