# 1957. Delete Characters to Make Fancy String [![share]](https://leetcode.com/problems/delete-characters-to-make-fancy-string/)

![][easy]

## Problem Statement

<p>A <strong>fancy string</strong> is a string where no <strong>three</strong> <strong>consecutive</strong> characters are equal.</p>

<p>Given a string <code>s</code>, delete the <strong>minimum</strong> possible number of characters from <code>s</code> to make it <strong>fancy</strong>.</p>

<p>Return <em>the final string after the deletion</em>. It can be shown that the answer will always be <strong>unique</strong>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;le<u>e</u>etcode&quot;
<strong>Output:</strong> &quot;leetcode&quot;
<strong>Explanation:</strong>
Remove an &#39;e&#39; from the first group of &#39;e&#39;s to create &quot;leetcode&quot;.
No three consecutive characters are equal, so return &quot;leetcode&quot;.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;<u>a</u>aab<u>aa</u>aa&quot;
<strong>Output:</strong> &quot;aabaa&quot;
<strong>Explanation:</strong>
Remove an &#39;a&#39; from the first group of &#39;a&#39;s to create &quot;aabaaaa&quot;.
Remove two &#39;a&#39;s from the second group of &#39;a&#39;s to create &quot;aabaa&quot;.
No three consecutive characters are equal, so return &quot;aabaa&quot;.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;aab&quot;
<strong>Output:</strong> &quot;aab&quot;
<strong>Explanation:</strong> No three consecutive characters are equal, so return &quot;aab&quot;.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 10<sup>5</sup></code></li>
	<li><code>s</code> consists only of lowercase English letters.</li>
</ul>

::: details _Click to open Hints_

- What's the optimal way to delete characters if three or more consecutive characters are equal?
- If three or more consecutive characters are equal, keep two of them and delete the rest.

:::

## Solution:

::: code-group

```java
class Solution {
  public String makeFancyString(String s) {
    int n = s.length();

    if (n == 1 || n == 2)
      return s;

    StringBuilder sb = new StringBuilder(s.substring(0, 2));

    for (int i = 2; i < n; i++)
      if (s.charAt(i) != s.charAt(i - 1) || s.charAt(i) != s.charAt(i - 2))
        sb.append(s.charAt(i));

    return sb.toString();
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
