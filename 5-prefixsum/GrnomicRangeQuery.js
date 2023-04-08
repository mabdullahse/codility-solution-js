function solution1(S, P, Q) {
    // Implement your solution here

    let standardImpc = {
        A: 1,
        C: 2,
        G: 3,
        T: 4
    };

    let ans = [];

    for (let i = 0; i < P.length; i++) {

        let impcfactor = 4;

        for (let j = P[i]; j <= Q[i]; j++) {

            if (standardImpc[S[j]] < impcfactor) {
                impcfactor = standardImpc[S[j]];
            }
        }
        ans.push(impcfactor);

    }
    return ans;

}

function solution(S, P, Q) {


    let dna = [];
    let ans = [];
    

    for (let i = 0; i < P.length; i++) {

        dna = S.slice(P[i], Q[i] + 1);

   
        if (dna.indexOf('A') !== -1) {
            ans.push(1);
        } else if (dna.indexOf('C') !== -1) {
            ans.push(2);
        } else if (dna.indexOf('G') !== -1) {
            ans.push(3);
        } else {
            ans.push(4);
        }
    }
    return ans;

}

console.log(solution('CAGCCTA', [2, 5, 0], [4, 5, 6]));