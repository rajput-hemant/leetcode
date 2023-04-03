# 211. Design Add and Search Words Data Structure [![share]](https://leetcode.com/problems/design-add-and-search-words-data-structure/)

![][medium]

## Problem Statement

<p>Design a data structure that supports adding new words and finding if a string matches any previously added string.</p>
<p>Implement the <code>WordDictionary</code> class:</p>
<ul>
<li><code>WordDictionary()</code> Initializes the object.</li>
<li><code>void addWord(word)</code> Adds <code>word</code> to the data structure, it can be matched later.</li>
<li><code>bool search(word)</code> Returns <code>true</code> if there is any string in the data structure that matches <code>word</code> or <code>false</code> otherwise. <code>word</code> may contain dots <code>'.'</code> where dots can be matched with any letter.</li>
</ul>
<p> </p>
<p><strong class="example">Example:</strong></p>

```
Input
["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
[[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
Output
[null,null,null,null,false,true,true,true]

Explanation
WordDictionary wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
wordDictionary.search("pad"); // return False
wordDictionary.search("bad"); // return True
wordDictionary.search(".ad"); // return True
wordDictionary.search("b.."); // return True
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= word.length &lt;= 25</code></li>
<li><code>word</code> in <code>addWord</code> consists of lowercase English letters.</li>
<li><code>word</code> in <code>search</code> consist of <code>'.'</code> or lowercase English letters.</li>
<li>There will be at most <code>2</code> dots in <code>word</code> for <code>search</code> queries.</li>
<li>At most <code>10<sup>4</sup></code> calls will be made to <code>addWord</code> and <code>search</code>.</li>
</ul>

::: details _Click to open Hints_

- You should be familiar with how a Trie works. If not, please work on this problem: <a href="https://leetcode.com/problems/implement-trie-prefix-tree/">Implement Trie (Prefix Tree)</a> first.

:::

## Solution:

::: code-group

```go [Go]
package main

type WordDictionary struct {
    children [26]* WordDictionary
    isWord bool

}


func Constructor() WordDictionary {
    return WordDictionary{}
}


func (this *WordDictionary) AddWord(word string)  {
    root := this

    for _,item := range word{
        char := item - 'a'

        if root.children[char] == nil {
            root.children[char] = &WordDictionary{}
        }
        root = root.children[char]
    }
    root.isWord = true

}


func (this *WordDictionary) Search(word string) bool {
    root := this
    for i,item := range word{
        if word[i] == '.'{
            for _,item := range root.children{
                if item != nil && item.Search(word[i+1:]) {
                    return true
                }
            }

            return false
        }

        char := item - 'a'
        if root.children[char] == nil{
            return false
        }
        root = root.children[char]
    }

    return root.isWord
}

```

:::

### [_..._](#)

```

```

<!----------------------------------{ link }--------------------------------->

[share]: https://graph.org/file/3ea5234dda646b71c574a.png
[easy]: https://img.shields.io/badge/Difficulty-Easy-bright.svg
[medium]: https://img.shields.io/badge/Difficulty-Medium-yellow.svg
[hard]: https://img.shields.io/badge/Difficulty-Hard-red.svg
