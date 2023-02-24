# 345. Reverse Vowels of a String [![share]](https://leetcode.com/problems/reverse-vowels-of-a-string/)

![][easy]

## Problem Statement

<p>Given a string <code>s</code>, reverse only all the vowels in the string and return it.</p>
<p>The vowels are <code>'a'</code>, <code>'e'</code>, <code>'i'</code>, <code>'o'</code>, and <code>'u'</code>, and they can appear in both lower and upper cases, more than once.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```
Input: s = "hello"
Output: "holle"
```

<p><strong class="example">Example 2:</strong></p>

```
Input: s = "leetcode"
Output: "leotcede"
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= s.length &lt;= 3 * 10<sup>5</sup></code></li>
<li><code>s</code> consist of <strong>printable ASCII</strong> characters.</li>
</ul>

## Solution:

::: code-group

```rs [Rust]
impl Solution {
    pub fn reverse_vowels(s: String) -> String {
        let mut s = s.into_bytes();
        let (mut i, mut j) = (0, s.len() - 1);

        while i < j {
            if !Self::is_vowel(s[i] as char) {
                i += 1;
                continue;
            }
            if !Self::is_vowel(s[j] as char) {
                j -= 1;
                continue;
            }
            s.swap(i, j);
            i += 1;
            j -= 1;
        }
        String::from_utf8(s).unwrap()

        // let mut chars: Vec<char> = s.chars().collect();
        // let (mut i, mut j) = (0, chars.len() - 1);

        // while i < j {
        //     if !Self::is_vowel(chars[i]) {
        //         i += 1;
        //         continue;
        //     }
        //     if !Self::is_vowel(chars[j]) {
        //         j -= 1;
        //         continue;
        //     }
        //     chars.swap(i, j);
        //     i += 1;
        //     j -= 1;
        // }

        // chars.into_iter().collect()
    }

    fn is_vowel(ch: char) -> bool {
        match ch {
            'a' | 'e' | 'i' | 'o' | 'u' | 'A' | 'E' | 'I' | 'O' | 'U' => true,
            _ => false,
        }
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
