import { sampleArray } from "./filter";

(() => {
    const customIncludes = (array: number[], element: number) => {

        for (let index = 0; index < array.length; index++) {
            const item = array[index];

            if (item === element) {
                return true;
            }
        }
        return false;
    };

    const result = customIncludes(sampleArray, 10);
    console.log(result);
})();
