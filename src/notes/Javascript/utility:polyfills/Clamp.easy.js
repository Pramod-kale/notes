// implement a function to clamp number within the inclusive and upper bounds



function clamp(value, lower, upper) {
    if ((value > lower) && (value < upper)) {
        return value
    } else if (value < lower) {
        return lower
    } else if (value > upper) {
        return upper
    }
}
// Within the bounds, return as-is.
console.log(clamp(3, 0, 5)); // => 3

// Smaller than the lower bound.
console.log(clamp(-10, -3, 5)); // => -3

// Bigger than the upper bound.
console.log(clamp(10, -5, 5)); // => 5
