# 283. Move Zeroes [![share]](https://leetcode.com/problems/move-zeroes/)

![][easy]

## Problem Statement:

Given an integer array `nums`, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

**Note** that you must do this in-place without making a copy of the array.

### Example 1:

```
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
```

### Example 2:

```
Input: nums = [0]
Output: [0]
```

### Constraints:

- 1 <= nums.length <= 10<sup>4</sup>]
- -2<sup>31</sup>] <= nums[i] <= 2<sup>31</sup>] - 1

**Follow up:** Could you minimize the total number of operations done?

## Solution:

::: code-group

```java [Java]
public class MoveZeroes {
    public void moveZeroes(int[] nums) {
        int index = 0, end = nums.length;
        for (int i = 0; i < end; i++) {
            if (nums[i] != 0)
                nums[index++] = nums[i];
        }
        while (index < end)
            nums[index++] = 0;
    }
}

```

```rs [Rust]
impl Solution {
    pub fn move_zeroes(nums: &mut Vec<i32>) {
        let (mut index, mut end) = (0, nums.len());

        while index < end {
            if nums[index] == 0 {
                nums.remove(index);
                nums.push(0);
                end -= 1;
            } else {
                index += 1;
            }
        }
    }
}

```

:::

### [_..._](#)

```

```

<!----------------------------------{ link }--------------------------------->

[share]: https://img.icons8.com/external-anggara-blue-anggara-putra/20/000000/external-share-user-interface-basic-anggara-blue-anggara-putra-2.png
[medium]: https://img.shields.io/badge/Difficulty-Medium-yellow.svg
