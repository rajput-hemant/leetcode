public class CheckIfItIsAStraightLine {

  /*
   * slope = tan0 = (x - x1) / (y - y1)
   * for line being straight line,
   * slope b/w every two points must be equal, i.e.
   * (x - x1) / (y - y1) = (x1 - x0) / (y1 - y0)
   */

  public boolean checkStraightLine(int[][] coordinates) {
    if (coordinates.length == 2)
      return true;
    int x0 = coordinates[0][0], y0 = coordinates[0][1],
        x1 = coordinates[1][0], y1 = coordinates[1][1];
    int dx = x1 - x0,
        dy = y1 - y0;
    for (int[] coordinate : coordinates) {
      int x = coordinate[0], y = coordinate[1];
      if (dx * (y - y1) != dy * (x - x1))
        return false;
    }
    return true;
  }
}
