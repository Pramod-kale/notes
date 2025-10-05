(() => {

    const bubbleSort = (arr: number[]): number[] => {

        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[i]) {
                    [arr[j], arr[i]] = [arr[i], arr[j]];
                }
            }
        }
        return arr;
    };


    console.log(bubbleSort([9, 3, 6, 2, 1, 11])); // [1, 2, 3, 6, 9, 11]
    console.log(bubbleSort([12, 16, 14, 1, 2, 3])); // [1, 2, 3, 12, 14, 16]
})();