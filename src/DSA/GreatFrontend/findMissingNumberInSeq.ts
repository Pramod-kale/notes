(() => {

    // find missing number which is not present in sequence
    /**
     * Input: numbers = [1,3,0]
        Output: 2
        Explanation: The array has a size of 3, and within the range from 0 to 3, the number 2 is missing from the array
     */


    const findMissing = (arr: number[]): number => {

        for (let i = 0; i < arr.length; i++) {
            if (!(arr.includes(i))) {
                return i;
            } else {
                continue;
            }
        }
        return -1;
    };

    console.log(findMissing([1, 3, 0]));
    console.log(findMissing([1]));

})();