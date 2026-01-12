(() => {
    function mostCommonElements(numbers: number[], k: number,): number[] {

        debugger;
        const map: Record<number, number> = {};

        numbers.forEach((item) => {
            const existingNum = map[item];
            if (existingNum) {
                const temp = existingNum + 1;
                map[item] = temp;
            } else {
                map[item] = 1;
            }
        });

        return Object.entries(map).sort((a, b) => b[1] - a[1])?.map(item => Number(item[0])).slice(0, k);
    }

    console.log(mostCommonElements([4, 4, 4, 6, 6, 5, 5, 5], 2));

})();