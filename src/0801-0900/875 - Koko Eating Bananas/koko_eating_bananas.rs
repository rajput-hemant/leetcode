impl Solution {
    pub fn min_eating_speed(piles: Vec<i32>, h: i32) -> i32 {
        let mut min_spd = 1;
        let mut max_spd = piles.iter().max().unwrap().clone();

        while min_spd < max_spd {
            let speed = (min_spd + max_spd) / 2;
            let hours = piles
                .iter()
                .fold(0, |subtotal, &pile| subtotal + ((pile + speed - 1) / speed));

            if hours > h {
                min_spd = speed + 1;
            } else {
                max_spd = speed;
            }
        }

        min_spd
    }
}
