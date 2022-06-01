package array;

// https://leetcode.com/problems/running-sum-of-1d-array/

public class RunningSumOfOneDimensionalArray {
    public static int[] runningSum(int[] nums) {
        int sum = 0;
        for (int i = 0; i < nums.length; i++) {
            sum += nums[i];
            nums[i] = sum;
        }
        return nums;
    }

    public static void main(String[] args) {
        int[] nums = { 1, 1, 1, 1, 1 };
        for (int i : runningSum(nums))
            System.out.print(i + " ");
    }
}
