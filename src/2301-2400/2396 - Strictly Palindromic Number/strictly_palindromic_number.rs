impl Solution {
    pub fn is_strictly_palindromic(n: i32) -> bool {
        let mut n = n;
        let mut rev = 0;

        while n > 0 {
            rev = rev * 10 + n % 10;
            n /= 10;
        }

        rev == n
    }
}
