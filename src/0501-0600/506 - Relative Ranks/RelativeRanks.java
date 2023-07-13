import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

public class RelativeRanks {
  public String[] findRelativeRanks(int[] score) {
    int[] temp = score.clone();
    Arrays.sort(temp);
    Map<Integer, String> rankMap = new HashMap<Integer, String>();
    String[] ranks = new String[score.length];
    for (int i = 0; i < score.length; i++) {
      if (i == score.length - 1)
        rankMap.put(temp[i], "Gold Medal");
      else if (i == score.length - 2)
        rankMap.put(temp[i], "Silver Medal");
      else if (i == score.length - 3)
        rankMap.put(temp[i], "Bronze Medal");
      else
        rankMap.put(temp[i], String.valueOf(score.length - i));
    }
    for (int i = 0; i < ranks.length; i++)
      ranks[i] = rankMap.get(score[i]);
    return ranks;
  }
}
