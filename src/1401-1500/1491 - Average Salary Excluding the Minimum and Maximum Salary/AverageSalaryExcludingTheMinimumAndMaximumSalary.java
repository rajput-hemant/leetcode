import java.util.Arrays;

public class AverageSalaryExcludingTheMinimumAndMaximumSalary {
  public double average(int[] salary) {
    Arrays.sort(salary);
    int len = salary.length;
    double res = 0;
    for (int i = 1; i < len - 1; i++)
      res += salary[i];
    return res / (len - 2);
  }
}
