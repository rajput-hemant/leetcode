impl Solution {
    pub fn convert_temperature(celsius: f64) -> Vec<f64> {
        let fahrenheit = celsius * 1.8 + 32.0;

        let kelvin = celsius + 273.15;

        vec![fahrenheit, kelvin]
    }
}
