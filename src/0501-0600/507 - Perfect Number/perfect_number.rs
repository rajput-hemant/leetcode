impl Solution {
    pub fn check_perfect_number(num: i32) -> bool {
        if num == 1 {
            return false;
        }

        let (mut sum, mut i) = (1, 2);

        while i * i <= num {
            // if i is a factor of num, add i and num / i to sum
            if num % i == 0 {
                sum += i;
                if i * i != num {
                    sum += num / i;
                }
            }
            i += 1;
        }

        sum == num
    }
}
