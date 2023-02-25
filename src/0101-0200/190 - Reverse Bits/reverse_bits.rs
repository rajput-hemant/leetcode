impl Solution {
    pub fn reverse_bits(x: u32) -> u32 {
        let (mut x, mut res) = (x, 0);

        // iterate 32 times, once for each bit
        for _ in 0..32 {
            // left-shift res by 1 bit to make room for the next bit
            res <<= 1;
            // adding the least significant bit of x to the result
            // using bitwise AND with 1
            res += x & 1;
            // right-shift x by 1 bit, discarding the least significant bit
            // that was just added to the result
            x >>= 1;
        }

        res
    }
}
