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
