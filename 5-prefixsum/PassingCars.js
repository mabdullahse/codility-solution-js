

function solution(A) {
  // Implement your solution here

  let incounter = 0;
  let counter = 0;
    for (let i = 0; i < A.length; i++) {
      
    if (A[i] === 0) {
      incounter++;
    } else if (A[i] === 1) {
      counter = counter + incounter;
    }

    if (counter > 1000000000) {
      return -1;
    }
  }
  return counter;
}

console.log(solution([0, 1, 0, 1, 1]));
