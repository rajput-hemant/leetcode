impl Solution {
    pub fn count_bits(n: i32) -> Vec<i32> {
        let mut res = vec![0; n as usize + 1];

        for i in 1..=n {
            let i = i as usize;
            // let i_and_i_minus_1 = i & (i - 1);
            // res[i] = res[i_and_i_minus_1] + 1;
            res[i] = res[i >> 1] + (i & 1) as i32;
        }

        res
    }
}
