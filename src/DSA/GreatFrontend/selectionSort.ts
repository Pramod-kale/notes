(() => {

    // selection sort, as the name implies, it selects the min value among the items in array and
    // swaps it's position with item at zeroth index and keeps on doing till reaches end


    const selectionSort = (arr: Array<number>): Array<number> => {
        for (let i = 0; i < arr.length; i++) {
            let min = i;

            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[min]) {
                    min = j;
                }

            }
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
        return arr;

    };

    const selectionSort1 = (arr: Array<number>): Array<number> => {
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[i]) {
                    [arr[j], arr[i]] = [arr[i], arr[j]];
                }
            }
        }
        return arr;

    };



    console.log("[9, 3, 6, 2, 1, 11] => ", selectionSort([9, 3, 6, 2, 1, 11])); // [1, 2, 3, 6, 9, 11]
    console.log("[12, 16, 14, 1, 2, 3] => ", selectionSort([12, 16, 14, 1, 2, 3])); // [1, 2, 3, 12, 14, 16]
    console.log("[12, 16, 14, 1, 2, 3] => ", selectionSort1([12, 16, 14, 1, 2, 3])); // [1, 2, 3, 12, 14, 16]



})();