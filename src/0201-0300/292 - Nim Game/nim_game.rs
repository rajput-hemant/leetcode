impl Solution {
    pub fn can_win_nim(n: i32) -> bool {
        // if n is divisible by 4, then the first player will always lose
        if n % 4 == 0 {
            return false;
        }

        true
    }
}
