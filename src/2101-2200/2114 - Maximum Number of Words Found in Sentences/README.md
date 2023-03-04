# 2114. Maximum Number of Words Found in Sentences [![share]](https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/)

![][easy]

## Problem Statement

<p>A <strong>sentence</strong> is a list of <strong>words</strong> that are separated by a single space with no leading or trailing spaces.</p>
<p>You are given an array of strings <code>sentences</code>, where each <code>sentences[i]</code> represents a single <strong>sentence</strong>.</p>
<p>Return <em>the <strong>maximum number of words</strong> that appear in a single sentence</em>.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```
Input: sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
Output: 6
Explanation:
- The first sentence, "alice and bob love leetcode", has 5 words in total.
- The second sentence, "i think so too", has 4 words in total.
- The third sentence, "this is great thanks very much", has 6 words in total.
Thus, the maximum number of words in a single sentence comes from the third sentence, which has 6 words.
```

<p><strong class="example">Example 2:</strong></p>

```
Input: sentences = ["please wait", "continue to fight", "continue to win"]
Output: 3
Explanation: It is possible that multiple sentences contain the same number of words.
In this example, the second and third sentences (underlined) have the same number of words.
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= sentences.length &lt;= 100</code></li>
<li><code>1 &lt;= sentences[i].length &lt;= 100</code></li>
<li><code>sentences[i]</code> consists only of lowercase English letters and <code>' '</code> only.</li>
<li><code>sentences[i]</code> does not have leading or trailing spaces.</li>
<li>All the words in <code>sentences[i]</code> are separated by a single space.</li>
</ul>

<details>
<summary>

#### _Click to open Hints_

</summary>

- Process each sentence separately and count the number of words by looking for the number of space characters in the sentence and adding it by 1.

</details>

## Solutions

### [_Rust_](max_num_of_words_found_in_a_sentence.rs)

```rs [Rust]
impl Solution {
    pub fn most_words_found(sentences: Vec<String>) -> i32 {
        let mut max_words = 0;

        for sentence in sentences {
            let words = sentence.split_whitespace().count();
            if words > max_words {
                max_words = words;
            }
        }

        max_words as i32
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
