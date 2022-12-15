# 1. Two Sum [![][share]](https://leetcode.com/problems/two-sum)

![][easy]

## Problem Statement:

Given an array of integers nums and an integer `target`, return indices of the two numbers such that they add up to `target`.

You may assume that each input would have **exactly one solution**, and you may not use the same element twice.

You can return the answer in any order.

### Example 1:

```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

### Example 2:

```
Input: nums = [3,2,4], target = 6
Output: [1,2]
```

### Example 3:

```
Input: nums = [3,3], target = 6
Output: [0,1]
```

### Constraints:

- 2 <= nums.length <= 10<sup>4</sup>
- -10<sup>9</sup> <= nums[i] <= 10<sup>9</sup>
- -10<sup>9</sup> <= target <= 10<sup>9</sup>
- **Only one valid answer exists.**

**Follow-up:** Can you come up with an algorithm that is less than O(n<sup>2</sup>) time complexity?

## Solution:

### [_Java_](#)

```java
public static int[] twoSum(int nums[], int target) {
  int[] sum = new int[2];
  for (int i = 0; i < nums.length; i++)
    for (int j = i + 1; j < nums.length; j++) {
      if (i == j)
        continue;
      if (nums[i] + nums[j] == target) {
        sum[0] = i;
        sum[1] = j;
      }
    }
  return sum;
}

public static int[] twoSum2(int nums[], int target) {
  Map<Integer, Integer> map = new HashMap<>();
  for (int i = 0; i < nums.length; i++) {
    int complement = target - nums[i];
    if (map.containsKey(complement))
      return new int[] { map.get(complement), i };
    else {
      map.put(nums[i], i);
    }
  }
  throw new IllegalArgumentException();
}
```

### [_..._](#)

```

```

<!----------------------------------{ link }--------------------------------->

[share]: https://img.icons8.com/external-anggara-blue-anggara-putra/20/000000/external-share-user-interface-basic-anggara-blue-anggara-putra-2.png
[easy]: https://img.shields.io/badge/Difficulty-Easy-bright.svg
[medium]: https://img.shields.io/badge/Difficulty-Medium-yellow.svg
[hard]: https://img.shields.io/badge/Difficulty-Hard-red.svg
