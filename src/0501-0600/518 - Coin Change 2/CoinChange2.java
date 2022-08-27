public class CoinChange2 {
  public int change(int amount, int[] coins) {
    int[] change = new int[amount + 1];
    change[0] = 1;
    for (int coin : coins)
      for (int i = coin; i < amount + 1; i++)
        change[i] += change[i - coin];
    return change[amount];
  }
}
