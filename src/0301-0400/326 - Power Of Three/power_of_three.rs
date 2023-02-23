impl Solution {
    pub fn is_power_of_three(n: i32) -> bool {
        if n <= 0 {
            return false;
        }

        let mut n = n;
        while n % 3 == 0 {
            n /= 3;
        }

        n == 1
    }
}
