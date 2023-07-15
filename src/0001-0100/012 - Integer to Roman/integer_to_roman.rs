const ONES: [&str; 10] = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
const TENS: [&str; 10] = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
const HUNDS: [&str; 10] = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
const THOUSANDS: [&str; 4] = ["", "M", "MM", "MMM"];

impl Solution {
    pub fn int_to_roman(num: i32) -> String {
        let num = num as usize;

        format!(
            "{}{}{}{}",
            THOUSANDS[(num / 1000)],
            HUNDS[(num / 100 % 10)],
            TENS[(num / 10 % 10)],
            ONES[(num % 10)]
        )
    }
}
