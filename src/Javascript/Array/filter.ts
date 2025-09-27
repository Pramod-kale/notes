export let sampleArray = [2, 4, 3, 5, 6, 7, 8, 1, 67, 0, 5];
(() => {
    const customFilter = (
        array: number[],
        callback: (element: number) => number | false
    ): number[] => {

        let filteredArray: number[] = [];
        array.forEach((element: number) => {
            const returnValue = callback(element);
            if (returnValue) {
                filteredArray.push(returnValue);
            }

        });

        return filteredArray;

    };

    const result = customFilter(sampleArray, (currentValue: number) => (currentValue < 50) && currentValue);
    console.log(result);

    const result2 = sampleArray.filter((currentValue: number) => (currentValue < 50) && currentValue);
    console.log(result2);

})();
