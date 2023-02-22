# 290. Word Pattern [![share]](https://leetcode.com/problems/word-pattern/)

![][easy]

## Problem Statement

<p>Given a <code>pattern</code> and a string <code>s</code>, find if <code>s</code> follows the same pattern.</p>
<p>Here <b>follow</b> means a full match, such that there is a bijection between a letter in <code>pattern</code> and a <b>non-empty</b> word in <code>s</code>.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```
Input: pattern = "abba", s = "dog cat cat dog"
Output: true
```

<p><strong class="example">Example 2:</strong></p>

```
Input: pattern = "abba", s = "dog cat cat fish"
Output: false
```

<p><strong class="example">Example 3:</strong></p>

```
Input: pattern = "aaaa", s = "dog cat cat dog"
Output: false
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= pattern.length &lt;= 300</code></li>
<li><code>pattern</code> contains only lower-case English letters.</li>
<li><code>1 &lt;= s.length &lt;= 3000</code></li>
<li><code>s</code> contains only lowercase English letters and spaces <code>' '</code>.</li>
<li><code>s</code> <strong>does not contain</strong> any leading or trailing spaces.</li>
<li>All the words in <code>s</code> are separated by a <strong>single space</strong>.</li>
</ul>

## Solutions

### [_Go_](word_pattern.go)

```go [Go]
package main

import "strings"

func wordPattern(pattern string, s string) bool {
	words := strings.Split(s, " ")

	if len(pattern) != len(words) {
		return false
	}

	map_ := make(map[byte]string)

	// loop through the pattern and process each character
	for i := 0; i < len(pattern); i++ {
		// if the word is already in the map, check if it matches the pattern
		if val, ok := map_[pattern[i]]; ok {
			if val != words[i] {
				return false
			}
		} else {
			// loop through the map to check if map contains the word
			for _, v := range map_ {
				// if the word is in the map, return false
				if v == words[i] {
					return false
				}
			}

			// if the word is not in the map, add it
			map_[pattern[i]] = words[i]
		}
	}

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
