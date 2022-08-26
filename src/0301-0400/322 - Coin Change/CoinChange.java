import java.util.Arrays;

public class CoinChange {
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
}
