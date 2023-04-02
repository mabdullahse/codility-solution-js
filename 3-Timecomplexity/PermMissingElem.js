function PermMissingElem(nums) {



    let givenObj = {};
nums.forEach((item, i) => {
        givenObj[item] = true;
    });


    let standard = Array.from(Array(nums.length + 1));
    let standardObj = {};
    standard.forEach((item, i) => {
        standardObj[i + 1] = true;
    });

    for (const key in standardObj) {
        if (!givenObj[key]) {
            return key;
        }
    }

    // console.log(standard);
}

console.log(PermMissingElem([]));