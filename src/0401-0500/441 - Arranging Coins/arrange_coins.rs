impl Solution {
    pub fn arrange_coins(n: i32) -> i32 {
        let (mut n, mut i) = (n, 1);

        while n >= i {
            n -= i;
            i += 1;
        }

        i - 1
    }
}
