(() => {

    type Callback<T, U> = (element: T) => U;

    const customMap = <T, U>(array: T[], callback: Callback<T, U>): U[] => {

        let newArray: U[] = [];
        array.forEach((element: T) => {
            newArray.push(callback(element));

        });

        console.log(newArray);
        console.log(array);
        return newArray;

    };

    const array: number[] = [2, 4, 3, 5, 6, 7, 8, 1, 67, 0, 5];

    const result = customMap(array, (currentElement: number) => currentElement * 10);
    console.log(result);
})();
