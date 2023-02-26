impl Solution {
    pub fn read_binary_watch(turned_on: i32) -> Vec<String> {
        let mut res = Vec::new();

        // 12 hours, 60 minutes
        // here we use 0_i32 to avoid the warning of type inference
        for i in 0_i32..12 {
            for j in 0_i32..60 {
                // if the sum of the number of 1s in the binary representation
                // of the hour and minute is equal to turned_on,
                // then the time is added to the res
                if i.count_ones() + j.count_ones() == turned_on as u32 {
                    res.push(format!("{}:{:02}", i, j));
                }
            }
        }

        res
    }
}
