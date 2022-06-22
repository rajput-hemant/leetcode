public class MoveZeroes {
    public void moveZeroes(int[] nums) {
        int index = 0, end = nums.length;
        for (int i = 0; i < end; i++) {
            if (nums[i] != 0)
                nums[index++] = nums[i];
        }
        while (index < end)
            nums[index++] = 0;
    }
}
