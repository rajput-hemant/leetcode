impl Solution {
    pub fn ship_within_days(weights: Vec<i32>, days: i32) -> i32 {
        let mut min_cap = 0; // it is the max of all weights
        let mut max_cap = 0; // sum of all weights

        for w in weights.iter() {
            // assign the max of all weights to min_cap
            min_cap = min_cap.max(*w);
            // add all the weights to right
            max_cap += w;
        }

        // binary search
        while min_cap < max_cap {
            let mid = (min_cap + max_cap) / 2;
            let mut days_used = 1;
            let mut cur_cap = 0;

            // for each weight, if the current capacity + weight is greater than mid,
            // then we need to use another day
            // otherwise, we can use the current day
            for w in weights.iter() {
                if cur_cap + w > mid {
                    days_used += 1;
                    cur_cap = 0;
                }
                cur_cap += w;
            }

            // if days_used is greater than days, then we need to increase the capacity
            if days_used > days {
                min_cap = mid + 1;
            } else {
                max_cap = mid;
            }
        }

        min_cap
    }
}
