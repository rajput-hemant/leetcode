impl Solution {
    pub fn trap(height: Vec<i32>) -> i32 {
        let (mut left, mut right) = (0, height.len() - 1);
        let (mut left_max, mut right_max) = (0, 0);
        let mut ans = 0;

        // iterate from both sides to the middle
        while left < right {
            // if left is lower than right, then the water level depends on left
            // else the water level depends on right
            if height[left] < height[right] {
                // if left height is higher than left_max, then update left_max
                // else add the difference between left_max and left height to ans
                if height[left] >= left_max {
                    left_max = height[left];
                } else {
                    ans += left_max - height[left];
                }
                left += 1;
            } else {
                // if right height is higher than right_max, then update right_max
                // else add the difference between right_max and right height to ans
                if height[right] >= right_max {
                    right_max = height[right];
                } else {
                    ans += right_max - height[right];
                }
                right -= 1;
            }
        }

        ans
    }
}
