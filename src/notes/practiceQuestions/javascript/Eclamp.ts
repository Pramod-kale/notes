/**
 * implement a clamp function which determines the number whether it is in a bound of lower and upper number,
 * clamp(number, lower, upper)

 * Within the bounds, return as-is.
 * clamp(3, 0, 5); // => 3

 *  Smaller than the lower bound.
 * clamp(-10, -3, 5); // => -3

 * Bigger than the upper bound.
 * clamp(10, -5, 5); // => 5
 */

export const clamp = (value: number, lower: number, upper: number): number => {
    if (typeof value !== "number") {
        throw new Error(value + "is not provided");
    }

    if (value >= lower && value <= upper) {
        return value;
    } else if (value < lower) {
        return lower;
    } else {
        return upper;
    }
};

console.log(clamp(0, -5, 5)); // => 3
console.log(clamp(-10, -3, 5)); // => -3
console.log(clamp(10, -5, 5)); // => 5