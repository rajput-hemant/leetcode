impl Solution {
    pub fn minimum_sum(num: i32) -> i32 {
        let mut number: Vec<u32> = num
            .to_string()
            .chars()
            .map(|x| x.to_digit(10).unwrap())
            .collect();

        number.sort();

        let a: i32 = format!("{}{}", number[0], number[2]).parse().unwrap();
        let b: i32 = format!("{}{}", number[1], number[2]).parse().unwrap();

        a + b
    }
}
