# 205. Isomorphic Strings [![share]](https://leetcode.com/problems/isomorphic-strings/)

![][easy]

## Problem Statement

<p>Given two strings <code>s</code> and <code>t</code>, <em>determine if they are isomorphic</em>.</p>
<p>Two strings <code>s</code> and <code>t</code> are isomorphic if the characters in <code>s</code> can be replaced to get <code>t</code>.</p>
<p>All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```
Input: s = "egg", t = "add"
Output: true
```

<p><strong class="example">Example 2:</strong></p>

```
Input: s = "foo", t = "bar"
Output: false
```

<p><strong class="example">Example 3:</strong></p>

```
Input: s = "paper", t = "title"
Output: true
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= s.length &lt;= 5 * 10<sup>4</sup></code></li>
<li><code>t.length == s.length</code></li>
<li><code>s</code> and <code>t</code> consist of any valid ascii character.</li>
</ul>

## Solution:

::: code-group

```go [Go]
package main

func isIsomorphic(s string, t string) bool {
	const max = 256

	var (
		sMap [max]int
		tMap [max]int
	)

	for i := 0; i < len(s); i++ {
		sIndex := s[i] - 'a'
		tIndex := t[i] - 'a'

		if sMap[sIndex] != tMap[tIndex] {
			return false
		}

		sMap[sIndex] = i + 1
		tMap[tIndex] = i + 1
	}

	return true
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
