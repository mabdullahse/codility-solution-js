function PermCheck(A) {

    let max = Math.max(...A);

    const set = new Set(A);

    if (set.size !== A.length) {
        return 0;
    }
    return set.size === max ? 1 : 0;



}

console.log(PermCheck([4, 1, 3, 2, 2]));