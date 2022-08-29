import java.util.Arrays;

public class FairCandySwap {
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
}
