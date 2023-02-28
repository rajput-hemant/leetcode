impl Solution {
    pub fn find_complement(num: i32) -> i32 {
        let mut res = String::default();

        for ch in format!("{:b}", num).chars() {
            if ch == '0' {
                res += "1";
            } else {
                res += "0";
            }
        }

        i32::from_str_radix(&res, 2).unwrap()
    }
}
