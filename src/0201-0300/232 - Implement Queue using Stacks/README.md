# 232. Implement Queue using Stacks [![share]](https://leetcode.com/problems/implement-queue-using-stacks/)

![][easy]

## Problem Statement

<p>Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (<code>push</code>, <code>peek</code>, <code>pop</code>, and <code>empty</code>).</p>
<p>Implement the <code>MyQueue</code> class:</p>
<ul>
<li><code>void push(int x)</code> Pushes element x to the back of the queue.</li>
<li><code>int pop()</code> Removes the element from the front of the queue and returns it.</li>
<li><code>int peek()</code> Returns the element at the front of the queue.</li>
<li><code>boolean empty()</code> Returns <code>true</code> if the queue is empty, <code>false</code> otherwise.</li>
</ul>
<p><strong>Notes:</strong></p>
<ul>
<li>You must use <strong>only</strong> standard operations of a stack, which means only <code>push to top</code>, <code>peek/pop from top</code>, <code>size</code>, and <code>is empty</code> operations are valid.</li>
<li>Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.</li>
</ul>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```
Input
["MyQueue", "push", "push", "peek", "pop", "empty"]
[[], [1], [2], [], [], []]
Output
[null, null, null, 1, 1, false]

Explanation
MyQueue myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.peek(); // return 1
myQueue.pop(); // return 1, queue is [2]
myQueue.empty(); // return false
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= x &lt;= 9</code></li>
<li>At most <code>100</code> calls will be made to <code>push</code>, <code>pop</code>, <code>peek</code>, and <code>empty</code>.</li>
<li>All the calls to <code>pop</code> and <code>peek</code> are valid.</li>
</ul>
<p> </p>
<p><strong>Follow-up:</strong> Can you implement the queue such that each operation is <strong><a href="https://en.wikipedia.org/wiki/Amortized_analysis" target="_blank">amortized</a></strong> <code>O(1)</code> time complexity? In other words, performing <code>n</code> operations will take overall <code>O(n)</code> time even if one of those operations may take longer.</p>

## Solutions

### [_Go_](queue_using_stacks.go)

```go [Go]
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

```

### [_..._]()

```

```

<!----------------------------------{ link }--------------------------------->

[share]: https://graph.org/file/3ea5234dda646b71c574a.png
[easy]: https://img.shields.io/badge/Difficulty-Easy-bright.svg
[medium]: https://img.shields.io/badge/Difficulty-Medium-yellow.svg
[hard]: https://img.shields.io/badge/Difficulty-Hard-red.svg
