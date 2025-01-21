console.clear()


const caseString = string => {

    return [...string].map(char => char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase()).join('')

}

console.log(caseString("sHoRt AnD sToUt"))