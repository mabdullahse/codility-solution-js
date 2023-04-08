function MinAvgTwoSlice(A) {

    let minsum = Infinity;
    let mi = 0;


    for (let i = 0; i < A.length - 2; i++) {

        let v1 = (A[i] + A[i + 1] + A[i + 2])/3
        let v2 = (A[i] + A[i + 1])/2;

        if (v1 < minsum || v2 < minsum) {
            minsum = Math.min(v1, v2);
            mi = i;
        } 
    }

    let last = (  A[A.length -1] + A[A.length -2])/2;

    if( last < minsum){
        
        mi = A.length -2;
    }

    return mi;
}


console.log(MinAvgTwoSlice([4, 2, 2, 5, 1, 5, 8]));