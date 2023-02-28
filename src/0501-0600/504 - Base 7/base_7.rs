impl Solution {
    pub fn convert_to_base7(num: i32) -> String {
        if num == 0 {
            return "0".to_string();
        }

        let mut result = String::default();
        let is_negative = num < 0;
        let mut num = num.abs();

        while num > 0 {
            let rem = num % 7;
            result.push_str(&rem.to_string());
            num /= 7;
        }

        if is_negative {
            result.push('-');
        }

        result.chars().rev().collect()
    }
}
