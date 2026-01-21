(() => {
    const endOfArrayReachable = (numbers: number[]): boolean => {

        let farthestReachable = numbers.length - 1;

        for (
            let currentPosition = numbers.length - 1;
            currentPosition >= 0;
            currentPosition--
        ) {
            if (currentPosition + numbers[currentPosition] >= farthestReachable) {
                farthestReachable = currentPosition;
            }
        }

        return farthestReachable === 0;
    };

    console.log(endOfArrayReachable([4, 1, 0, 0, 2, 3, 4, 5]));

})();