


function CyclicRotation(list, k) {

    k = k % list.length;

    const initialSection = list.splice(0, list.length - k);
    return list.concat(initialSection);
}

console.log(CyclicRotation([3, 8, 9, 7, 6], 3));