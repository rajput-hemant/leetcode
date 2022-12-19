import java.util.Stack;

public class DailyTemperatures {
  public int[] dailyTemperatures(int[] temp) {
    int n = temp.length;
    int[] days = new int[n];
    Stack<Integer> stk = new Stack<>();
    for (int i = n - 1; i >= 0; i--) {
      while (!stk.isEmpty() && temp[stk.peek()] <= temp[i])
        stk.pop();

      if (!stk.isEmpty())
        days[i] = stk.peek() - i;

      stk.push(i);
    }
    return days;
  }
}
