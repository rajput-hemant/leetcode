# 322. Coin Change [![share]](https://leetcode.com/problems/coin-change)

![][medium]

## Problem Statement:

You are given an integer array `coins` representing coins of different denominations and an integer `amount` representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return `-1`.

You may assume that you have an infinite number of each kind of coin.

### Example 1:

```
Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1
```

### Example 2:

```
Input: coins = [2], amount = 3
Output: -1
```

### Example 3:

```
Input: coins = [1], amount = 0
Output: 0
```

### Constraints:

- 1 <= coins.length <= 12
- 1 <= coins[i] <= 2<sup>31</sup> - 1
- 0 <= amount <= 10<sup>4</sup>>

## Solution:

### [_Java_](./CoinChange.java)

```java
public int coinChange(int[] coins, int amount) {
  int max = amount + 1;
  int[] amtArr = new int[max];
  Arrays.fill(amtArr, max);
  amtArr[0] = 0;
  for (int i = 1; i <= amount; i++) {
    for (int j = 0; j < coins.length; j++) {
      if (coins[j] <= i)
        amtArr[i] = Math.min(amtArr[i], amtArr[i - coins[j]] + 1);
    }
  }
  return amtArr[amount] > amount ? -1 : amtArr[amount];
}
```

### [_..._]()

```

```

<!----------------------------------{ link }--------------------------------->

[share]: https://img.icons8.com/external-anggara-blue-anggara-putra/20/000000/external-share-user-interface-basic-anggara-blue-anggara-putra-2.png
[medium]: https://img.shields.io/badge/Difficulty-Medium-red.svg
