# 771. Jewels and Stones [![share]](https://leetcode.com/problems/jewels-and-stones)

![][easy]

## Problem Statement:

You're given strings `jewels` representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so `"a"` is considered a different type of stone from `"A"`.

### Example 1:

```
Input: jewels = "aA", stones = "aAAbbbb"
Output: 3
```

### Example 2:

```
Input: jewels = "z", stones = "ZZ"
Output: 0
```

### Constraints:

- 1 <= jewels.length, stones.length <= 50
- jewels and stones consist of only English letters.
- All the characters of jewels are **unique**.

## Solution:

### [_Java_](./JewelsAndStones.java)

```java
public int numJewelsInStones(String jewels, String stones) {
  int res = 0;
  for (char stone : stones.toCharArray())
    for (char jewel : jewels.toCharArray())
      if (stone == jewel)
        res++;
  return res;
}
```

### [_..._]()

```

```

<!----------------------------------{ link }--------------------------------->

[share]: https://img.icons8.com/external-anggara-blue-anggara-putra/20/000000/external-share-user-interface-basic-anggara-blue-anggara-putra-2.png
[easy]: https://img.shields.io/badge/Difficulty-Easy-yellow.svg
