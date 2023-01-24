# 20. Valid Parentheses [![share]](https://leetcode.com/problems/valid-parentheses/)

![][easy]

## Problem Statement

<p>Given a string <code>s</code> containing just the characters <code>&#39;(&#39;</code>, <code>&#39;)&#39;</code>, <code>&#39;{&#39;</code>, <code>&#39;}&#39;</code>, <code>&#39;[&#39;</code> and <code>&#39;]&#39;</code>, determine if the input string is valid.</p>

<p>An input string is valid if:</p>

<ol>
	<li>Open brackets must be closed by the same type of brackets.</li>
	<li>Open brackets must be closed in the correct order.</li>
	<li>Every close bracket has a corresponding open bracket of the same type.</li>
</ol>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;()&quot;
<strong>Output:</strong> true
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;()[]{}&quot;
<strong>Output:</strong> true
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;(]&quot;
<strong>Output:</strong> false
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 10<sup>4</sup></code></li>
	<li><code>s</code> consists of parentheses only <code>&#39;()[]{}&#39;</code>.</li>
</ul>

::: details _Click to open Hints_

- Use a stack of characters.
- When you encounter an opening bracket, push it to the top of the stack.
- When you encounter a closing bracket, check if the top of the stack was the opening for it. If yes, pop it from the stack. Otherwise, return false.

:::

## Solution:

::: code-group

```py [Python]
class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        for i in s:
            if i in ["(", "[", "{"]:
                stack.append(i)
            elif i == ")" and (stack == [] or stack.pop() != "("):
                return False
            elif i == "]" and (stack == [] or stack.pop() != "["):
                return False
            elif i == "}" and (stack == [] or stack.pop() != "{"):
                return False
        return stack == []

```

```java [Java]
import java.util.Stack;

class Solution {
  public boolean isValid(String s) {
    if (s.length() < 2)
      return false;

    Stack<Character> stack = new Stack<>();

    for (char ch : s.toCharArray()) {
      if (ch == '(' || ch == '[' || ch == '{')
        stack.push(ch);
      else if (ch == ')' && (stack.isEmpty() || stack.pop() != '('))
        return false;
      else if (ch == ']' && (stack.isEmpty() || stack.pop() != '['))
        return false;
      else if (ch == '}' && (stack.isEmpty() || stack.pop() != '{'))
        return false;
    }

    return stack.isEmpty();
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
