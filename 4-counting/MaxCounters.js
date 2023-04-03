function MaxCounters(N, A) {

    // Implement your solution here
    let counter = new Array(N).fill(0);

    let max = 0;
    let foundMax = 0;

    for (const item of A) {

        if (item >= 0 && item <= N) {

            counter[item - 1] = Math.max(counter[item - 1] + 1, foundMax + 1);

            if (counter[item - 1] > max) {
                max = counter[item - 1];
            }
        } else if (item > N) {
            foundMax = max;

            // counter.fill(max);
        }
    }
    counter = counter.map(item => Math.max(item, foundMax));

    return counter;

}


function solution(N, A) {


    let counter = new Array(N).fill(0);

    let maxCounter = 0;
    let trackMax = 0;

    for (let i = 0; i < A.length; i++) {

        let X = A[i] - 1;

        if (X === N) {
            maxCounter = trackMax;

        } else if (0 <= X && X < N) {
            counter[X] = Math.max(counter[X] + 1, maxCounter + 1);

            trackMax = Math.max(counter[X], trackMax);
        }

    }
    counter = counter.map(item => Math.max(item, maxCounter));
    return counter;
}

console.log(MaxCounters(5, [3, 4, 4, 6, 1, 4, 4]));
console.log(solution(5, [3, 4, 4, 6, 1, 4, 4]));