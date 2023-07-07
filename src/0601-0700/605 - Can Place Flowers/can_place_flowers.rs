impl Solution {
    pub fn can_place_flowers(flowerbed: Vec<i32>, mut n: i32) -> bool {
        let mut empty = if flowerbed[0] == 0 { 1 } else { 0 };

        for &x in &flowerbed {
            if x == 0 {
                empty += 1;
            } else {
                n -= (empty - 1) / 2;
                empty = 0;
            }
        }

        n -= empty / 2;

        n <= 0
    }
}
