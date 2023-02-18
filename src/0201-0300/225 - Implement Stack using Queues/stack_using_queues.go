package main

type MyStack struct {
	queue []int
}

func Constructor() MyStack {
	return MyStack{}
}

// Push x onto stack.
func (this *MyStack) Push(x int) {
	this.queue = append(this.queue, x)
}

// Removes and returns the element on top of the stack
func (this *MyStack) Pop() int {
	if len(this.queue) == 0 {
		return 0
	}
	pop := this.queue[len(this.queue)-1]
	this.queue = this.queue[:len(this.queue)-1]
	return pop
}

// Get the top element.
func (this *MyStack) Top() int {
	if len(this.queue) == 0 {
		return 0
	}
	return this.queue[len(this.queue)-1]
}

// Return whether the stack is empty.
func (this *MyStack) Empty() bool {
	return len(this.queue) == 0
}
