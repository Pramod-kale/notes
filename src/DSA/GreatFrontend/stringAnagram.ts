(() => {

    function isStringAnagram(str1: string, str2: string): boolean {

        const includes = (char: string, str: string) => {
            for (let i = 0; i < str.length; i++) {
                if (str[i] === char) {
                    return true;
                }
            }
            return false;
        };

        const containsArr = [];
        for (let i = 0; i < str1.length; i++) {
            if (includes(str1[i], str2)) {
                containsArr.push(true);
            }
        }



        return containsArr.length === str1.length;
    }
    console.log(isStringAnagram("abcd", "dcba"));
    console.log(isStringAnagram("hello", "bello"));
    console.log(isStringAnagram("listen", "silent"));



    const altApproach = (str1: string, str2: string) => {

        if (str1.length !== str2.length) {
            return false;
        }

        const sortedStr1 = str1.split("").sort();
        const sortedStr2 = str2.split("").sort();

        for (let i = 0; i < sortedStr1.length; i++) {
            if (sortedStr1[i] !== sortedStr2[i]) {
                return false;
            }
        }
        return true;
    };

    console.log("----------------");
    console.log(altApproach("abcd", "dcba"));
    console.log(altApproach("hello", "bello"));
    console.log(altApproach("listen", "silent"));



})();