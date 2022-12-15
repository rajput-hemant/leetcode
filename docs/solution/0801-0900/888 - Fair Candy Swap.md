# 888. Fair Candy Swap [![share]](https://leetcode.com/problems/fair-candy-swap)

![][easy]

## Problem Statement:

Alice and Bob have a different total number of candies. You are given two integer arrays `aliceSizes` and `bobSizes` where `aliceSizes[i]` is the number of candies of the <code>i<sup>th</sup></code> box of candy that Alice has and bobSizes[j] is the number of candies of the <code>j<sup>th</sup></code> box of candy that Bob has.

Since they are friends, they would like to exchange one candy box each so that after the exchange, they both have the same total amount of candy. The total amount of candy a person has is the sum of the number of candies in each box they have.

Return an integer array `answer` where `answer[0]` is the number of candies in the box that Alice must exchange, and `answer[1]` is the number of candies in the box that Bob must exchange. If there are multiple answers, you may **return any** one of them. It is guaranteed that at least one answer exists.

### Example 1:

```
Input: aliceSizes = [1,1], bobSizes = [2,2]
Output: [1,2]
```

### Example 2:

```
Input: aliceSizes = [1,2], bobSizes = [2,3]
Output: [1,2]
```

### Example 3:

```
Input: aliceSizes = [2], bobSizes = [1,3]
Output: [2,3]
```

### Constraints:

- 1 <= aliceSizes.length, bobSizes.length <= 10<sup>4</sup>
- 1 <= aliceSizes[i], bobSizes[j] <= 10<sup>5</sup>
- Alice and Bob have a different total number of candies.
- There will be at least one valid answer for the given input.

## Solutions:

### [_Java_](#)

```java
public int[] fairCandySwap(int[] aliceSizes, int[] bobSizes) {
  int[] swap = new int[2];
  int aliceSum = 0,
      bobSum = 0,
      aliceIndex = 0,
      bobIndex = 0;

  for (int i : aliceSizes)
    aliceSum += i;
  for (int i : bobSizes)
    bobSum += i;

  Arrays.sort(aliceSizes);
  Arrays.sort(bobSizes);

  while (aliceIndex < aliceSizes.length && bobIndex < bobSizes.length) {
    int aliceTotal = aliceSum - aliceSizes[aliceIndex] + bobSizes[bobIndex],
        bobTotal = bobSum - bobSizes[bobIndex] + aliceSizes[aliceIndex];
    if (aliceTotal == bobTotal) {
      swap[0] = aliceSizes[aliceIndex];
      swap[1] = bobSizes[bobIndex];
      return swap;
    } else if (aliceTotal > bobTotal)
      aliceIndex++;
    else
      bobIndex++;
  }
  return swap;
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
