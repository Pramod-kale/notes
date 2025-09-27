
(() => {


    let plants: string[] = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

    const pop = (array: any[]): void => {
        // for removing the last element
        let tempArray = array;
        // it is not possible to recreate a pop methods with having time complexity of o(1)
    };

    const shift = (array: any[], element: any): any[] => {
        // for removing the first element

        array = [element, array];
        return array;
    };

    const push = (array: any[], element: any): any[] => {

        array = [...array, element];
        return array;
    };

    const unshift = (array: any[], element: any): any[] => {

        array = [...array, element];
        return array;
    };

})();
