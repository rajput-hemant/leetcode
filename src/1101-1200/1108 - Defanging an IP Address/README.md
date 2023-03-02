# 1108. Defanging an IP Address [![share]](https://leetcode.com/problems/defanging-an-ip-address/)

![][easy]

## Problem Statement

<p>Given a valid (IPv4) IP <code>address</code>, return a defanged version of that IP address.</p>
<p>A <em>defanged IP address</em> replaces every period <code>"."</code> with <code>"[.]"</code>.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```
Input: address = "1.1.1.1"
Output: "1[.]1[.]1[.]1"
```

<p><strong class="example">Example 2:</strong></p>

```
Input: address = "255.100.50.0"
Output: "255[.]100[.]50[.]0"
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li>The given <code>address</code> is a valid IPv4 address.</li>
</ul>

## Solutions

### [_Rust_](defanging_an_ip_address.rs)

```rs [Rust]
impl Solution {
    pub fn defang_i_paddr(address: String) -> String {
        let mut result = String::default();

        for c in address.chars() {
            if c == '.' {
                result.push_str("[.]");
            } else {
                result.push(c);
            }
        }

        result
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
