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
