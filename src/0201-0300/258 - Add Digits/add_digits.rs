impl Solution {
    pub fn add_digits(num: i32) -> i32 {
        let mut num = num;

        // loop while the number is greater than 9
        while num > 9 {
            let mut sum = 0;
            // loop while the number is greater than 0,
            // add the last digit to the sum,
            // and divide the number by 10
            while num > 0 {
                sum += num % 10;
                num /= 10;
            }
            // set the number to the sum
            num = sum;
        }

        num
    }
}
