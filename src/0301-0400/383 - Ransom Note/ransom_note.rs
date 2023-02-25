impl Solution {
    pub fn can_construct(ransom_note: String, magazine: String) -> bool {
        // Convert the magazine string to a vector of characters
        let mut magazine = magazine.chars().collect::<Vec<char>>();

        // Iterate over the ransom note string
        for c in ransom_note.chars() {
            // If the magazine contains the character, remove it
            // Otherwise, return false
            // position() returns the index of the first element that matches the closure
            // else returns None
            if let Some(i) = magazine.iter().position(|&x| x == c) {
                magazine.remove(i);
            } else {
                return false;
            }
        }

        true
    }
}
