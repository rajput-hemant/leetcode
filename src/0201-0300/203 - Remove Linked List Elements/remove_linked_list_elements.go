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
