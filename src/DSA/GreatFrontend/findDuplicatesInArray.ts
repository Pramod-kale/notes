(() => {
    // Find duplicates in an array

    const findDuplicate = (arr: number[]): number[] => {
        const temp: number[] = [];
        const map = new Map();

        arr.forEach(item => {
            if (typeof map.get(item) === "number") {
                temp.push(item);
            } else {
                map.set(item, item);
            }
        });
        return temp;
    };



    console.log(findDuplicate([3, 2, 6, 5, 0, 3, 10, 3, 10, 5])); // [3,3,5,10]
    console.log(findDuplicate([5, 7, 1, 3])); // []
})();