
const mergeSort = array => {


    if (array.length === 1) {
        return array;
    }

    const length = array.length;
    const middle = Math.floor(length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle)

    return merge(
        mergeSort(left),
        mergeSort(right)
    )

}


const merge = (left, right) => {
    const result = [];

    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex])
            leftIndex++
        } else {
            result.push(right[rightIndex]);
            rightIndex++
        }
    }
    console.log('result array:', result)
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))


}

let array = [3, 2, 6, 4, 9, 7, 5, 1, 8, 0]
let resultArray = mergeSort(array)
console.log(resultArray)







