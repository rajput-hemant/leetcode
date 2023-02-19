# 225. Implement Stack using Queues [![share]](https://leetcode.com/problems/implement-stack-using-queues/)

![][easy]

## Problem Statement

<p>Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (<code>push</code>, <code>top</code>, <code>pop</code>, and <code>empty</code>).</p>
<p>Implement the <code>MyStack</code> class:</p>
<ul>
<li><code>void push(int x)</code> Pushes element x to the top of the stack.</li>
<li><code>int pop()</code> Removes the element on the top of the stack and returns it.</li>
<li><code>int top()</code> Returns the element on the top of the stack.</li>
<li><code>boolean empty()</code> Returns <code>true</code> if the stack is empty, <code>false</code> otherwise.</li>
</ul>
<p><b>Notes:</b></p>
<ul>
<li>You must use <strong>only</strong> standard operations of a queue, which means that only <code>push to back</code>, <code>peek/pop from front</code>, <code>size</code> and <code>is empty</code> operations are valid.</li>
<li>Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue) as long as you use only a queue's standard operations.</li>
</ul>
<p> </p>
<p><strong class="example">Example 1:</strong></p>

```
Input
["MyStack", "push", "push", "top", "pop", "empty"]
[[], [1], [2], [], [], []]
Output
[null, null, null, 2, 2, false]

Explanation
MyStack myStack = new MyStack();
myStack.push(1);
myStack.push(2);
myStack.top(); // return 2
myStack.pop(); // return 2
myStack.empty(); // return False
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= x &lt;= 9</code></li>
<li>At most <code>100</code> calls will be made to <code>push</code>, <code>pop</code>, <code>top</code>, and <code>empty</code>.</li>
<li>All the calls to <code>pop</code> and <code>top</code> are valid.</li>
</ul>
<p> </p>
<p><strong>Follow-up:</strong> Can you implement the stack using only one queue?</p>

## Solution:

::: code-group

```go [Go]
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
