# 382. Linked List Random Node [![share]](https://leetcode.com/problems/linked-list-random-node/)

![][medium]

## Problem Statement

<p>Given a singly linked list, return a random node's value from the linked list. Each node must have the <strong>same probability</strong> of being chosen.</p>
<p>Implement the <code>Solution</code> class:</p>
<ul>
<li><code>Solution(ListNode head)</code> Initializes the object with the head of the singly-linked list <code>head</code>.</li>
<li><code>int getRandom()</code> Chooses a node randomly from the list and returns its value. All the nodes of the list should be equally likely to be chosen.</li>
</ul>
<p> </p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/03/16/getrand-linked-list.jpg" style="width: 302px; height: 62px;"/>

```
Input
["Solution", "getRandom", "getRandom", "getRandom", "getRandom", "getRandom"]
[[[1, 2, 3]], [], [], [], [], []]
Output
[null, 1, 3, 2, 2, 3]

Explanation
Solution solution = new Solution([1, 2, 3]);
solution.getRandom(); // return 1
solution.getRandom(); // return 3
solution.getRandom(); // return 2
solution.getRandom(); // return 2
solution.getRandom(); // return 3
// getRandom() should return either 1, 2, or 3 randomly. Each element should have equal probability of returning.
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li>The number of nodes in the linked list will be in the range <code>[1, 10<sup>4</sup>]</code>.</li>
<li><code>-10<sup>4</sup> &lt;= Node.val &lt;= 10<sup>4</sup></code></li>
<li>At most <code>10<sup>4</sup></code> calls will be made to <code>getRandom</code>.</li>
</ul>
<p> </p>
<p><strong>Follow up:</strong></p>
<ul>
<li>What if the linked list is extremely large and its length is unknown to you?</li>
<li>Could you solve this efficiently without using extra space?</li>
</ul>

## Solutions

### [_Go_](linked_list_random_node.go)

```go [Go]
package main

import "math/rand"

// Definition for singly-linked list.
type ListNode struct {
	Val  int
	Next *ListNode
}

type Solution struct {
	arr []int
}

func Constructor(head *ListNode) Solution {
	arr := []int{}
	for head != nil {
		arr = append(arr, head.Val)
		head = head.Next
	}
	return Solution{arr}
}

func (this *Solution) GetRandom() int {
	if len(this.arr) == 0 {
		return -1
	}
	return this.arr[rand.Intn(len(this.arr))]
}

/**
 * Your Solution object will be instantiated and called as such:
 * obj := Constructor(head);
 * param_1 := obj.GetRandom();
 */

```

### [_..._]()

```

```

<!----------------------------------{ link }--------------------------------->

[share]: https://graph.org/file/3ea5234dda646b71c574a.png
[easy]: https://img.shields.io/badge/Difficulty-Easy-bright.svg
[medium]: https://img.shields.io/badge/Difficulty-Medium-yellow.svg
[hard]: https://img.shields.io/badge/Difficulty-Hard-red.svg
