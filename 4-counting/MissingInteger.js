function solution(A) {
    // Implement your solution here

    const set = new Set(A);

    let min = 1;

    while(true){
        if(set.has(min)){
            min++
        }else{
            break;
        }
    }
    return min;

}