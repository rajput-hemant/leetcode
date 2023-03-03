impl Solution {
    pub fn min_partitions(n: String) -> i32 {
        // this will be slightly faster as it doesn't need to convert the char to a digit
        // as the max() function will return the max char value (in ASCII) which is the same as the max digit value

        // n.chars().max().unwrap().to_digit(10).unwrap() as i32

        n.chars().map(|c| c.to_digit(10).unwrap()).max().unwrap() as i32
    }
}
