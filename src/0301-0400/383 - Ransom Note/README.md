# 383. Ransom Note [![share]](https://leetcode.com/problems/ransom-note/)

![][easy]

## Problem Statement

<p>Given two strings <code>ransomNote</code> and <code>magazine</code>, return <code>true</code><em> if </em><code>ransomNote</code><em> can be constructed by using the letters from </em><code>magazine</code><em> and </em><code>false</code><em> otherwise</em>.</p>
<p>Each letter in <code>magazine</code> can only be used once in <code>ransomNote</code>.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```
Input: ransomNote = "a", magazine = "b"
Output: false
```

<p><strong class="example">Example 2:</strong></p>

```
Input: ransomNote = "aa", magazine = "ab"
Output: false
```

<p><strong class="example">Example 3:</strong></p>

```
Input: ransomNote = "aa", magazine = "aab"
Output: true
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= ransomNote.length, magazine.length &lt;= 10<sup>5</sup></code></li>
<li><code>ransomNote</code> and <code>magazine</code> consist of lowercase English letters.</li>
</ul>

## Solutions

### [_Rust_](ransom_note.rs)

```rs [Rust]
impl Solution {
    pub fn can_construct(ransom_note: String, magazine: String) -> bool {
        // Convert the magazine string to a vector of characters
        let mut magazine = magazine.chars().collect::<Vec<char>>();

        // Iterate over the ransom note string
        for c in ransom_note.chars() {
            // If the magazine contains the character, remove it
            // Otherwise, return false
            // position() returns the index of the first element that matches the closure
            // else returns None
            if let Some(i) = magazine.iter().position(|&x| x == c) {
                magazine.remove(i);
            } else {
                return false;
            }
        }

        true
    }
}

```

### [_Go_](ransom_note.go)

```go [Go]
package main

func canConstruct(ransomNote string, magazine string) bool {
	if len(ransomNote) > len(magazine) {
		return false
	}
	// make a map of the magazine
	mag := make(map[rune]int)

	// count the number of each character in the magazine
	for _, c := range magazine {
		mag[c]++
	}

	// check if the ransom note can be made from the magazine
	for _, c := range ransomNote {
		if mag[c] == 0 {
			return false
		}
		mag[c]--
	}

	// // make a vector of the magazine
	// magVec := make([]int, 26)

	// for _, c := range magazine {
	// 	magVec[c-'a']++
	// }

	// // check if ransomNote can be constructed from magazine
	// for _, c := range ransomNote {
	// 	if magVec[c-'a'] == 0 {
	// 		return false
	// 	}
	// 	magVec[c-'a']--
	// }

	return true
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
