import java.util.Arrays;
import java.util.Collections;
import java.util.PriorityQueue;

class Pair implements Comparable<Pair> {
  int capital;
  int profit;

  public Pair(int capital, int profit) {
    this.capital = capital;
    this.profit = profit;
  }

  @Override
  public int compareTo(Pair other) {
    return this.capital - other.capital;
  }
}

class Solution {
  public int findMaximizedCapital(int k, int w, int[] profits, int[] capital) {
    int n = profits.length;
    Pair[] pairs = new Pair[n];

    for (int i = 0; i < n; i++) {
      pairs[i] = new Pair(capital[i], profits[i]);
    }

    Arrays.sort(pairs);
    PriorityQueue<Integer> pq = new PriorityQueue<>(Collections.reverseOrder());
    int i = 0;

    while (k > 0) {
      while (i < n && pairs[i].capital <= w) {
        pq.add(pairs[i].profit);
        i++;
      }
      if (pq.isEmpty()) {
        break;
      }
      w += pq.poll();
      k--;
    }

    return w;
  }
}