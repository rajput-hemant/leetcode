# 1461. Check If a String Contains All Binary Codes of Size K [![share]](https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/)

![][medium]

## Problem Statement:

Given a binary string `s` and an integer `k`, return `true` if every binary code of length `k` is a substring of `s`. Otherwise, return `false`.

### Example 1:

```
Input: s = "00110110", k = 2
Output: true
```

### Explanation:

```
The binary codes of length 2 are "00", "01", "10" and "11". They can be all found as substrings at indices 0, 1, 3 and 2 respectively.
```

### Example 2:

```
Input: s = "0110", k = 1
Output: true
```

### Explanation:

```
The binary codes of length 1 are "0" and "1", it is clear that both exist as a substring.
```

### Example 3:

```
Input: s = "0110", k = 2
Output: false
```

### Explanation:

```
The binary code "00" is of length 2 and does not exist in the array.
```

### Constraints:

- 1 <= s.length <= 5 \* 10<sup>5</sup>
- s[i] is either '0' or '1'.
- 1 <= k <= 20

## Solutions:

### [_Java_](#)

```java
public class CheckIfaStringContainsAllBinaryCodesOfSizeK {
    public static boolean hasAllCodes(String s, int k) {
        int count = 1 << k; // this is same as 2^K
        Set<String> res = new HashSet<>();
        for (int i = k; i <= s.length(); i++) {
            String temp = s.substring(i - k, i);
            if (!res.contains(temp)) {
                res.add(temp);
                count--;
            }
            if (count == 0)
                return true;
        }
        return false;
    }

    public static void main(String[] args) {
        System.out.println(hasAllCodes("00110", 2));
    }
}
```

### [_..._](#)

```

```

<!----------------------------------{ link }--------------------------------->

[share]: https://img.icons8.com/external-anggara-blue-anggara-putra/20/000000/external-share-user-interface-basic-anggara-blue-anggara-putra-2.png
[medium]: https://img.shields.io/badge/Difficulty-Medium-yellow.svg
