function TapeEquilibrium(A) {

    let leftNum = 0;
    let rightNum = A.reduce((a, b) => a + b);
    let answer = null;
    //  A.length - 1  = bcz not to make left whole array and right its empty
    for (let i = 0; i < A.length - 1; i++) {
        leftNum += A[i];
        rightNum -= A[i];
        const diff = Math.abs(leftNum - rightNum);
        if (answer === null || answer > diff) {
            answer = diff;
        }
    }
    return answer; 
}
console.log(TapeEquilibrium([3, 1]));