# 438. Find All Anagrams in a String [![share]](https://leetcode.com/problems/find-all-anagrams-in-a-string/)

![][medium]

## Problem Statement

<p>Given two strings <code>s</code> and <code>p</code>, return <em>an array of all the start indices of </em><code>p</code><em>'s anagrams in </em><code>s</code>. You may return the answer in <strong>any order</strong>.</p>
<p>An <strong>Anagram</strong> is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```
Input: s = "cbaebabacd", p = "abc"
Output: [0,6]
Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
```

<p><strong class="example">Example 2:</strong></p>

```
Input: s = "abab", p = "ab"
Output: [0,1,2]
Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= s.length, p.length &lt;= 3 * 10<sup>4</sup></code></li>
<li><code>s</code> and <code>p</code> consist of lowercase English letters.</li>
</ul>

## Solution:

::: code-group

```py [Python]
class Solution:
    def findAnagrams(self, s: str, p: str) -> list[int]:
        s_len, p_len = len(s), len(p)
        if p_len > s_len:
            return []
        p_count, s_count = {}, {}
        # increment the count of each character in p and s,
        # for the first p_len characters in s
        # with get() we can set a default value if the key is not found
        for i in range(p_len):
            p_count[p[i]] = p_count.get(p[i], 0) + 1
            s_count[s[i]] = s_count.get(s[i], 0) + 1

        # if the counts are equal, we found an anagram
        res = [0] if p_count == s_count else []
        l = 0
        for r in range(p_len, s_len):
            # increment the count of the right character
            s_count[s[r]] = s_count.get(s[r], 0) + 1
            # decrement the count of the left character
            s_count[s[l]] -= 1

            # if the count of the left character is 0,
            # we can remove it from the dictionary
            if s_count[s[l]] == 0:
                del s_count[s[l]]
            # increment the left pointer
            l += 1
            # if the counts are equal, we found an anagram
            if p_count == s_count:
                res.append(l)
        return res

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
