impl Solution {
    pub fn is_happy(n: i32) -> bool {
        let (mut slow, mut fast) = (n, n);

        loop {
            slow = Self::sum_of_squares(slow);
            fast = Self::sum_of_squares(Self::sum_of_squares(fast));

            if slow == 1 || fast == 1 {
                return true;
            }

            // Floyd's cycle detection
            if slow == fast {
                return false;
            }
        }
    }

    pub fn sum_of_squares(mut num: i32) -> i32 {
        let mut sum = 0;

        while num > 0 {
            let digit = num % 10;
            sum += digit * digit;
            num /= 10;
        }

        sum
    }
}
