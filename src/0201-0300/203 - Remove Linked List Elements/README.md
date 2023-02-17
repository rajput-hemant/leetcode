# 203. Remove Linked List Elements [![share]](https://leetcode.com/problems/remove-linked-list-elements/)

![][easy]

## Problem Statement

<p>Given the <code>head</code> of a linked list and an integer <code>val</code>, remove all the nodes of the linked list that has <code>Node.val == val</code>, and return <em>the new head</em>.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/03/06/removelinked-list.jpg" style="width: 500px; height: 142px;"/>

```
Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]
```

<p><strong class="example">Example 2:</strong></p>

```
Input: head = [], val = 1
Output: []
```

<p><strong class="example">Example 3:</strong></p>

```
Input: head = [7,7,7,7], val = 7
Output: []
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li>The number of nodes in the list is in the range <code>[0, 10<sup>4</sup>]</code>.</li>
<li><code>1 &lt;= Node.val &lt;= 50</code></li>
<li><code>0 &lt;= val &lt;= 50</code></li>
</ul>

## Solutions

### [_Go_](remove_linked_list_elements.go)

```go [Go]
package main

// Definition for singly-linked list.
type ListNode struct {
	Val  int
	Next *ListNode
}

// Iterative
func removeElements(head *ListNode, val int) *ListNode {
	if head == nil {
		return nil
	}
	for head != nil && head.Val == val {
		head = head.Next
	}
	if head == nil {
		return nil
	}
	for p := head; p.Next != nil; {
		if p.Next.Val == val {
			p.Next = p.Next.Next
		} else {
			p = p.Next
		}
	}

	return head
}

// Recursive
func removeElementsRecursive(head *ListNode, val int) *ListNode {
	if head == nil {
		return nil
	}
	head.Next = removeElementsRecursive(head.Next, val)
	if head.Val == val {
		return head.Next
	}
	return head
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
