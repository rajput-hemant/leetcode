impl Solution {
    unsafe fn guessNumber(n: i32) -> i32 {
        let (mut left, mut right) = (1, n);

        while left < right {
            let mid = left + (right - left) / 2;

            if guess(mid) == 1 {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        left
    }
}
