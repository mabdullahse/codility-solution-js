
function FrogRiverOne(X, A) {
    let path = new Map();

    for (let i = 1; i <= X; i++) {
        path.set(i, true);
    }

    for (let i = 0; i <  A.length; i++) {
        if(path.has(A[i])){
            path.delete(A[i])
        }
        
        if(path.size === 0){

            return i;
            
        }
    }

}
function solution(X, A) {

    let holdValues = new Set();
    for (i = 0; i < A.length; i++) {
        holdValues.add(A[i]);
        if (holdValues.size == X) return i;
    }

    return -1;

}
console.log(FrogRiverOne(5, [1, 3, 1, 4, 2, 3, 5, 4]));