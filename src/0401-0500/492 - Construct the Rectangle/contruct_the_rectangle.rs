impl Solution {
    pub fn construct_rectangle(area: i32) -> Vec<i32> {
        let mut w = (area as f64).sqrt() as i32;

        // until the remainder is 0, decrement w
        // this will find the largest w that is a factor of area
        while area % w != 0 {
            w -= 1;
        }

        // return the result
        vec![area / w, w]
    }
}
