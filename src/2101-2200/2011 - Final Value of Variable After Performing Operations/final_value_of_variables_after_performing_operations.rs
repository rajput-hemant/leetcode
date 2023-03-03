impl Solution {
    pub fn final_value_after_operations(operations: Vec<String>) -> i32 {
        let mut x = 0;

        for op in operations {
            if op == "--X" || op == "X--" {
                x -= 1;
            } else {
                x += 1;
            }
        }

        x

        // operations
        //     .iter()
        //     .fold(0, |acc, op| acc + (44 - op.as_bytes()[1] as i32))
    }
}
