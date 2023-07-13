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

## Solutions

### [_Go_](valid_anagarm.go)

```go [Go]
package main

import "sort"

func isAnagram_eff(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}

	var sMap = make(map[rune]int)
	var tMap = make(map[rune]int)

	for _, v := range s {
		sMap[v]++
	}

	for _, v := range t {
		tMap[v]++
	}

	for k, v := range sMap {
		if tMap[k] != v {
			return false
		}
	}

	return true
}

func isAnagram(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}

	sRunes := []rune(s)
	tRunes := []rune(t)

	sort.Slice(sRunes, func(i, j int) bool {
		return sRunes[i] < sRunes[j]
	})
	sort.Slice(tRunes, func(i, j int) bool {
		return tRunes[i] < tRunes[j]
	})

	for i := 0; i < len(sRunes); i++ {
		if sRunes[i] != tRunes[i] {
			return false
		}
	}

	return true
}

```

### [_Rust_](valid_anagram.rs)

```rs [Rust]
use std::collections::HashMap;

impl Solution {
    // using hashmap
    pub fn is_anagram(s: String, t: String) -> bool {
        if s.len() != t.len() {
            return false;
        }

        let s_map = s.chars().fold(HashMap::new(), |mut map, c| {
            // let count = map.entry(c).or_insert(0);
            // *count += 1;

            // same as above
            *map.entry(c).or_insert(0) += 1;
            map
        });

        let t_map = t.chars().fold(HashMap::new(), |mut map, c| {
            *map.entry(c).or_insert(0) += 1;
            map
        });

        s_map
            .iter()
            .all(|(key, value)| t_map.get(key) == Some(value))
    }

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

### [_..._]()

```

```

<!----------------------------------{ link }--------------------------------->

[share]: https://graph.org/file/3ea5234dda646b71c574a.png
[easy]: https://img.shields.io/badge/Difficulty-Easy-bright.svg
[medium]: https://img.shields.io/badge/Difficulty-Medium-yellow.svg
[hard]: https://img.shields.io/badge/Difficulty-Hard-red.svg
