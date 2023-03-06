impl Solution {
    pub fn find_kth_positive(arr: Vec<i32>, k: i32) -> i32 {
        let (mut l, mut r) = (0, arr.len());

        while l < r {
            let mid = l + (r - l) / 2;

            if arr[mid] - mid as i32 - 1 >= k {
                r = mid;
            } else {
                l = mid + 1;
            }
        }

        l as i32 + k
    }
}
