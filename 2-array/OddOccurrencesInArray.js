function OddOccurrencesInArray(list, k) {

    let obj = {};
    for (const item of list) {

        if (obj[item]) {
            delete obj[item];
        } else {
            obj[item] = 1;
        }

    } ;
    return Object.keys(obj)[0]
}

console.log(OddOccurrencesInArray([9, 3, 9, 3, 9, 7, 9], 3));