
let plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];


const pop = array => {
    // for removing the last element 
    let tempArray = array;
    // it is not possible to recreate a pop methods with having time complexity of o(1)


}

const shift = (array, element) => {
    // for removing the first element

    array = [element, array]
    return array
}


const push = (array, element) => {

    array = [...array, element]
    return array
}


const unshift = (array, element) => {

    array = [...array, element]
    return array
}



