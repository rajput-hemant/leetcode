# 1472. Design Browser History [![share]](https://leetcode.com/problems/design-browser-history/)

![][medium]

## Problem Statement

<p>You have a <strong>browser</strong> of one tab where you start on the <code>homepage</code> and you can visit another <code>url</code>, get back in the history number of <code>steps</code> or move forward in the history number of <code>steps</code>.</p>
<p>Implement the <code>BrowserHistory</code> class:</p>
<ul>
<li><code>BrowserHistory(string homepage)</code> Initializes the object with the <code>homepage</code> of the browser.</li>
<li><code>void visit(string url)</code> Visits <code>url</code> from the current page. It clears up all the forward history.</li>
<li><code>string back(int steps)</code> Move <code>steps</code> back in history. If you can only return <code>x</code> steps in the history and <code>steps &gt; x</code>, you will return only <code>x</code> steps. Return the current <code>url</code> after moving back in history <strong>at most</strong> <code>steps</code>.</li>
<li><code>string forward(int steps)</code> Move <code>steps</code> forward in history. If you can only forward <code>x</code> steps in the history and <code>steps &gt; x</code>, you will forward only <code>x</code> steps. Return the current <code>url</code> after forwarding in history <strong>at most</strong> <code>steps</code>.</li>
</ul>
<p> </p>
<p><strong class="example">Example:</strong></p>

```
Input:
["BrowserHistory","visit","visit","visit","back","back","forward","visit","forward","back","back"]
[["leetcode.com"],["google.com"],["facebook.com"],["youtube.com"],[1],[1],[1],["linkedin.com"],[2],[2],[7]]
Output:
[null,null,null,null,"facebook.com","google.com","facebook.com",null,"linkedin.com","google.com","leetcode.com"]

Explanation:
BrowserHistory browserHistory = new BrowserHistory("leetcode.com");
browserHistory.visit("google.com");       // You are in "leetcode.com". Visit "google.com"
browserHistory.visit("facebook.com");     // You are in "google.com". Visit "facebook.com"
browserHistory.visit("youtube.com");      // You are in "facebook.com". Visit "youtube.com"
browserHistory.back(1);                   // You are in "youtube.com", move back to "facebook.com" return "facebook.com"
browserHistory.back(1);                   // You are in "facebook.com", move back to "google.com" return "google.com"
browserHistory.forward(1);                // You are in "google.com", move forward to "facebook.com" return "facebook.com"
browserHistory.visit("linkedin.com");     // You are in "facebook.com". Visit "linkedin.com"
browserHistory.forward(2);                // You are in "linkedin.com", you cannot move forward any steps.
browserHistory.back(2);                   // You are in "linkedin.com", move back two steps to "facebook.com" then to "google.com". return "google.com"
browserHistory.back(7);                   // You are in "google.com", you can move back only one step to "leetcode.com". return "leetcode.com"
```

<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= homepage.length &lt;= 20</code></li>
<li><code>1 &lt;= url.length &lt;= 20</code></li>
<li><code>1 &lt;= steps &lt;= 100</code></li>
<li><code>homepage</code> and <code>url</code> consist of  '.' or lower case English letters.</li>
<li>At most <code>5000</code> calls will be made to <code>visit</code>, <code>back</code>, and <code>forward</code>.</li>
</ul>

<details>
<summary>

#### _Click to open Hints_

</summary>

- Use two stacks: one for back history, and one for forward history. You can simulate the functions by popping an element from one stack and pushing it into the other.
- Can you improve program runtime by using a different data structure?

</details>

## Solutions

### [_Go_](design_browser_history.go)

```go [Go]
package main

type BrowserHistory struct {
	histories   []string
	currentPage int
}

func Constructor(homepage string) BrowserHistory {
	return BrowserHistory{
		histories:   []string{homepage},
		currentPage: 0,
	}
}

func (this *BrowserHistory) Visit(url string) {
	if this.currentPage != len(this.histories)-1 {
		this.histories = append(this.histories[:this.currentPage+1], []string{}...)
	}

	this.histories = append(this.histories, url)
	this.currentPage++
}

func (this *BrowserHistory) Back(steps int) string {
	for i := this.currentPage; 0 <= i; i-- {
		if steps == 0 || this.currentPage == 0 {
			break
		}

		this.currentPage--
		steps--
	}

	return this.histories[this.currentPage]
}

func (this *BrowserHistory) Forward(steps int) string {
	lenHistories := len(this.histories)

	for i := this.currentPage; i < lenHistories; i++ {
		if steps == 0 || this.currentPage == lenHistories-1 {
			break
		}

		this.currentPage++
		steps--
	}

	return this.histories[this.currentPage]
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
