(() => {
    function arrayProductExcludingCurrent(numbers: number[]): number[] {
        const result: number[] = [];
        numbers.forEach((_item, index) => {
            const tempArr = numbers.filter((_ignore, idx) => idx !== index);
            const ret = tempArr.reduce((acc, curr) => acc * curr, 1);
            result.push(ret);
        });

        return result;
    }


    console.log(arrayProductExcludingCurrent([1, 2, 3]));


})();