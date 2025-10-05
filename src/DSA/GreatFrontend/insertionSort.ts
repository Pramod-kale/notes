(() => {

    const insertionSort = (arr: number[]): number[] => {

        for (let i = 0; i < arr.length; i++) {
            // debugger;
            let j = i - 1;
            let curr = arr[i];

            while (j >= 0 && arr[j] > curr) {
                console.log(arr[j + 1], arr[i]);
                arr[j + 1] = arr[j];

                j--;
            }

            arr[j + 1] = curr;
        }

        return arr;
    };


    console.log(insertionSort([9, 3, 6, 2, 1, 11])); // [1, 2, 3, 6, 9, 11]
    console.log(insertionSort([12, 16, 14, 1, 2, 3])); // [1, 2, 3, 12, 14, 16]
})();