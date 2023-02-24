impl Solution {
    pub fn intersection(nums1: Vec<i32>, nums2: Vec<i32>) -> Vec<i32> {
        let (mut nums1, mut nums2) = (nums1, nums2);
        let mut res = Vec::new();
        let (mut i, mut j) = (0, 0);

        nums1.sort();
        nums2.sort();

        while i <= nums1.len() - 1 && j <= nums2.len() - 1 {
            if nums1[i] == nums2[j] {
                if res.is_empty() || res[res.len() - 1] != nums1[i] {
                    res.push(nums1[i]);
                }
                i += 1;
                j += 1;
            } else if nums1[i] < nums2[j] {
                i += 1;
            } else {
                j += 1;
            }
        }

        res
    }
}
