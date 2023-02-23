impl Solution {
    pub fn is_power_of_four(n: i32) -> bool {
        if n <= 0 {
            return false;
        }

        let mut n = n;
        while n % 4 == 0 {
            n /= 4;
        }

        n == 1
    }
}
