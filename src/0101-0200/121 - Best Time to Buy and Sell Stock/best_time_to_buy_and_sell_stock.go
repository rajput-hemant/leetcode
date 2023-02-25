package main

func maxProfit(prices []int) int {
	profit, min := 0, prices[0]

	for _, price := range prices {
		// if the current price is lower than the min price, update the min price to the current price
		// else if the current price minus the min price is greater than the profit, update the profit to the current price minus the min price
		if price < min {
			min = price
		} else if price-min > profit {
			profit = price - min
		}
	}

	return profit
}
