(() => {

    const customFind = <T>(
        array: T[],
        callback: (element: T, index: number, array: T[]) => any
    ): T | undefined => {
        let foundValue: T | undefined = undefined;

        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            if (callback(element, index, array)) {
                foundValue = element;
                break;
            }
        }

        return foundValue;
    };

    let array = [2, 4, 3, 5, 6, 7, 8, 1, 67, 0, 5];

    const result = customFind(array, currentElement => currentElement > 5);

    console.log(result);
})();
