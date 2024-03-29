/*
- P: 토핑 번호 정수 배열 topping
- R: 롤케이크를 공평하게 자르는 방법의 수 
- E:
- P: 공평하게 자르는 기준: 동일한 가짓수의 토핑이 올라갈 경우
    - 일단 토핑의 갯수를 센다.
    - 토핑의 갯수에 따라 분배
    - 분배 후 케익1,2 갯수가 같으면 answer+1
*/

function solution(topping) {
    let answer = 0;
   const cake1 = new Map();
   const cake2 = new Map();
   
    // cake1에 각 토핑의 갯수를 세서 넣음 
   for (const t of topping) {
       if (cake1.get(t)) {
           cake1.set(t, cake1.get(t)+1);
       } else {
           cake1.set(t,1);
       }
   }
    console.log(cake1);

    // 토핑 나누기
   for (const t of topping) {
       if (cake1.get(t) > 1) cake1.set(t, cake1.get(t)-1);
       else cake1.delete(t);
       
       if (cake2.get(t)) cake2.set(t, cake2.get(t)+1);
       else cake2.set(t,1);
       
       if (cake2.size === cake1.size) answer++;
   }
    
    return answer;
}