impl Solution {
    pub fn find_max_consecutive_ones(nums: Vec<i32>) -> i32 {
        let (mut count, mut max) = (0, 0);

        for i in nums {
            if i == 1 {
                count += 1;
            } else {
                if count > max {
                    max = count;
                }
                count = 0;
            }
        }

        if count > max {
            max = count;
        }

        max
    }
}
