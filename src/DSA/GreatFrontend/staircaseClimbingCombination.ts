(() => {

    /**
     * Given a staircase with a length of steps, where you can take 1 or 2 steps at a time,
     *  find the number of distinct combinations to reach the top of the staircase from
     * the bottom of the stairs.
     *
     * Input: steps = 3
        Output: 3
        Explanation: There are three ways: 1-step three times, 1-step then 2-step, 2-step then 1-step
        */
    const climbFromStep = (curr: number, total: number): number => {
        if (curr > total) {
            return 0;
        }
        if (curr === total) {
            return 1;
        }
        return (climbFromStep(curr + 1, total) + climbFromStep(curr + 2, total));

    };
    const calculateStairs = (input: number): number => {
        return climbFromStep(0, input);
    };


    console.log(calculateStairs(5)); // 8
    console.log(calculateStairs(6)); // 13
    console.log(calculateStairs(8)); // 34

})();