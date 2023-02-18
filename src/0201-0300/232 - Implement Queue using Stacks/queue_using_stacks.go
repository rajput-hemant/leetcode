package main

type MyQueue struct {
	stack []int
}

func Constructor() MyQueue {
	return MyQueue{}
}

// Push element x to the back of queue.
func (this *MyQueue) Push(x int) {
	this.stack = append(this.stack, x)
}

// Removes and returns the element at the front of queue.
func (this *MyQueue) Pop() int {
	if len(this.stack) == 0 {
		return 0
	}
	pop := this.stack[0]
	this.stack = this.stack[1:]
	return pop
}

// Get the front element.
func (this *MyQueue) Peek() int {
	if len(this.stack) == 0 {
		return 0
	}
	return this.stack[0]
}

// Return whether the queue is empty.
func (this *MyQueue) Empty() bool {
	return len(this.stack) == 0
}
