function solution(A, B, K) {
  // Implement your solution here
      var offset = A % K === 0 ? 1 : 0;
      return parseInt(B / K) - parseInt(A / K) + offset;
    
}

console.log(solution(6,11,2 ));