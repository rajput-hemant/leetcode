impl Solution {
    pub fn get_row(row_index: i32) -> Vec<i32> {
        // create a vector of 1s with length row_index + 1
        let mut row = vec![1; (row_index + 1) as usize];

        // loop through the vector, starting at 1
        for i in 1..row_index {
            // loop through the vector, starting at i + 1 and going backwards
            for j in (1..i + 1).rev() {
                // add the value at the current index to the value at the previous index
                row[j as usize] += row[(j - 1) as usize];
            }
        }

        row
    }
}
