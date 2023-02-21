impl Solution {
    pub fn is_ugly(n: i32) -> bool {
        if n < 1 {
            return false;
        }

        let divisors = [2, 3, 5];
        let mut n = n;

        for divisor in divisors {
            // Divide n by divisor as many times as possible
            while n % divisor == 0 {
                n /= divisor;
            }
        }

        n == 1
    }
}
