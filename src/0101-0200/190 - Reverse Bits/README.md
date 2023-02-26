# 190. Reverse Bits [![share]](https://leetcode.com/problems/reverse-bits/)

![][easy]

## Problem Statement

<p>Reverse bits of a given 32 bits unsigned integer.</p>
<p><strong>Note:</strong></p>
<ul>
<li>Note that in some languages, such as Java, there is no unsigned integer type. In this case, both input and output will be given as a signed integer type. They should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.</li>
<li>In Java, the compiler represents the signed integers using <a href="https://en.wikipedia.org/wiki/Two%27s_complement" target="_blank">2's complement notation</a>. Therefore, in <strong class="example">Example 2</strong> above, the input represents the signed integer <code>-3</code> and the output represents the signed integer <code>-1073741825</code>.</li>
</ul>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```
Input: n = 00000010100101000001111010011100
Output:    964176192 (00111001011110000010100101000000)
Explanation: The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596, so return 964176192 which its binary representation is 00111001011110000010100101000000.
```

<p><strong class="example">Example 2:</strong></p>

```
Input: n = 11111111111111111111111111111101
Output:   3221225471 (10111111111111111111111111111111)
Explanation: The input binary string 11111111111111111111111111111101 represents the unsigned integer 4294967293, so return 3221225471 which its binary representation is 10111111111111111111111111111111.
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li>The input must be a <strong>binary string</strong> of length <code>32</code></li>
</ul>
<p> </p>
<p><strong>Follow up:</strong> If this function is called many times, how would you optimize it?</p>

## Solutions

### [_Rust_](reverse_bits.rs)

```rs [Rust]
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

```

### [_..._]()

```

```

<!----------------------------------{ link }--------------------------------->

[share]: https://graph.org/file/3ea5234dda646b71c574a.png
[easy]: https://img.shields.io/badge/Difficulty-Easy-bright.svg
[medium]: https://img.shields.io/badge/Difficulty-Medium-yellow.svg
[hard]: https://img.shields.io/badge/Difficulty-Hard-red.svg
