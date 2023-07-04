impl Solution {
    pub fn two_city_sched_cost(costs: Vec<Vec<i32>>) -> i32 {
        let mut costs = costs;

        let mut total = 0;
        let n = costs.len() / 2;

        // sort by a gain which company has
        // by sending a person to city A and not to city B
        costs.sort_by(|a, b| (a[0] - a[1]).cmp(&(b[0] - b[1])));

        // to optimize the company expenses,
        // send the first n persons to the city A
        // and the others to the city B
        for i in 0..n {
            total += costs[i][0] + costs[i + n][1]; // city A + city B
        }

        total
    }
}
