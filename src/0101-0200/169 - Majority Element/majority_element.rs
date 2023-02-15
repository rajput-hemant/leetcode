impl Solution {
    pub fn majority_element(nums: Vec<i32>) -> i32 {
        let (mut element, mut count) = (nums[0], 0);

        for num in nums {
            if count == 0 {
                element = num;
            }

            if element == num {
                count += 1;
            } else {
                count -= 1;
            }
        }

        element
    }
}
