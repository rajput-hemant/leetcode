# 518. Coin Change 2 [![share]](https://leetcode.com/problems/coin-change-2)

![][medium]

## Problem Statement:

You are given an integer array `coins` representing coins of different denominations and an integer `amount` representing a total amount of money.

Return the number of combinations that make up that amount. If that amount of money cannot be made up by any combination of the coins, return `0`.

You may assume that you have an infinite number of each kind of coin.

The answer is **guaranteed** to fit into a signed **32-bit** integer.

### Example 1:

```
Input: amount = 5, coins = [1,2,5]
Output: 4
Explanation: there are four ways to make up the amount:
5=5
5=2+2+1
5=2+1+1+1
5=1+1+1+1+1
```

### Example 2:

```
Input: amount = 3, coins = [2]
Output: 0
Explanation: the amount of 3 cannot be made up just with coins of 2.
```

### Example 3:

```
Input: amount = 10, coins = [10]
Output: 1
```

### Constraints:

- 1 <= coins.length <= 300
- 1 <= coins[i] <= 5000
- All the values of coins are unique.
- 0 <= amount <= 5000

## Solutions:

### [_Java_](./CoinChange2.java)

```java
public int change(int amount, int[] coins) {
  int[] change = new int[amount + 1];
  change[0] = 1;
  for (int coin : coins)
    for (int i = coin; i < amount + 1; i++)
      change[i] += change[i - coin];
  return change[amount];
}
```

### [_..._]()

```

```

<!----------------------------------{ link }--------------------------------->

[share]: https://img.icons8.com/external-anggara-blue-anggara-putra/20/000000/external-share-user-interface-basic-anggara-blue-anggara-putra-2.png
[easy]: https://img.shields.io/badge/Difficulty-Easy-bright.svg
[medium]: https://img.shields.io/badge/Difficulty-Medium-yellow.svg
[hard]: https://img.shields.io/badge/Difficulty-Hard-red.svg
