# 58. Length of Last Word [![share]](https://leetcode.com/problems/length-of-last-word)

![][easy]

## Problem Statement:

Given a string `s` consisting of words and spaces, return the length of the **last** word in the string.

- A **word** is a maximal substring consisting of non-space characters only.

### Example 1:

```
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
```

### Example 2:

```
Input: s = " fly me to the moon "
Output: 4
Explanation: The last word is "moon" with length 4.
```

### Example 3:

```
Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.
```

### Constraints:

- 1 <= s.length <= 10<sup>5</sup>
- s consists of only English letters and spaces ' '.
- There will be at least one word in s.

## Solution:

::: code-group

```java
public int lengthOfLastWord(String s) {
  int count = 0;
  for (int i = s.length() - 1; i >= 0; i--) {
    if (s.charAt(i) != ' ')
      count++;
    else if (count > 0)
      return count;
  }
  return count;
}
```

:::

### [_..._](#)

```

```

<!----------------------------------{ link }--------------------------------->

[share]: https://img.icons8.com/external-anggara-blue-anggara-putra/20/000000/external-share-user-interface-basic-anggara-blue-anggara-putra-2.png
[easy]: https://img.shields.io/badge/Difficulty-Easy-green.svg
