public class JewelsAndStones {
  public int numJewelsInStones(String jewels, String stones) {
    int res = 0;
    for (char stone : stones.toCharArray())
      for (char jewel : jewels.toCharArray())
        if (stone == jewel)
          res++;
    return res;
  }
}
