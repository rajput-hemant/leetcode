# 278. First Bad Version [![share]](https://leetcode.com/problems/first-bad-version)

![][easy]

## Problem Statement:

You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions `[1, 2, ..., n]` and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API `bool isBadVersion(version)` which returns whether `version` is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

### Example 1:

```
Input: n = 5, bad = 4
Output: 4

Explanation:
call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true
Then 4 is the first bad version.
```

### Example 2:

```
Input: n = 1, bad = 1
Output: 1
```

### Constraints:

- 1 <= bad <= n <= 2<sup>31</sup> - 1

## Solution:

::: code-group

```java [Java]
public class FirstBadVersion extends VersionControl {
  public int firstBadVersion(int n) {
    int low = 0, high = n;
    while (low < high) {
      int mid = low + (high - low) / 2;
      if (isBadVersion(mid))
        high = mid;
      else
        low = mid + 1;
    }
    return low;
  }
}

class VersionControl {
  boolean isBadVersion(int version) {
    return false;
  }
}
```

```rs [Rust]
impl Solution {
    pub fn first_bad_version(&self, n: i32) -> i32 {
        let (mut low, mut high) = (1, n);

        while low < high {
            let mid = low + (high - low) / 2;
            if self.isBadVersion(mid) {
                high = mid;
            } else {
                low = mid + 1;
            }
        }

        low
    }
}

```

:::

### [_..._](#)

```

```

<!----------------------------------{ link }--------------------------------->

[share]: https://img.icons8.com/external-anggara-blue-anggara-putra/20/000000/external-share-user-interface-basic-anggara-blue-anggara-putra-2.png
[easy]: https://img.shields.io/badge/Difficulty-Easy-bright.svg
[medium]: https://img.shields.io/badge/Difficulty-Medium-yellow.svg
[hard]: https://img.shields.io/badge/Difficulty-Hard-red.svg
