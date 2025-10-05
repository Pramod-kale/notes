(() => {


    function pairSum(numbers: number[], target: number): number[] | number {

        for (let i = 0; i < numbers.length; i++) {
            for (let j = 0; j < numbers.length; j++) {
                if (numbers[i] + numbers[j] === target) {
                    return [i, j];
                }
            }

        }
        return -1;
    }


    console.log(pairSum([0, 7, 1, 9], 7));
    console.log(pairSum([4, 9, 2, 1, 7], 5));
})();