## leetcode: Add Two Numbers

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 
Example 1:

```js
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
```
Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.

## 문제 해석

두 linked list가 있으면 그 리스트의 순서 반대로 합치면 어느 수가 된다. [2,4,3]의 경우 342  
두 리스트로부터 만들어지는 두 수의 합을 또 하나의 linked list로 만들어라.

## 답안

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


// 각 원소를 reversed order로 10의 n제곱으로 곱한다
// 그 곱으로 만들어진 두 배열의 최종 수를 더한다
// 그 최종 수의 값들을 다시 배열로 나눈다.
var addTwoNumbers = function(l1, l2) {
      // 두 배열이 의미하는 수의 합
      let sum = getRealNumber(l1) + getRealNumber(l2)
      let sumStr = sum.toString() 
      // console.log(.length)
      // 결과를 linked list로 나누기
      let resultList = []
      for (let i=0; i<sumStr.length; i++) {

        resultList.push(parseInt(sumStr[sumStr.length-i-1]))
      }
      // console.log(resultList)
    return resultList
};

var getRealNumber = function(targetLi) {
  const li_len = targetLi.length
  let liVal = 0;
  for (let i=0; i<li_len; i++) {   
      // 마지막 인덱스 * 10의 0제곱, 마지막-1인덱스 * 10의 1제곱..., 첫인덱스 * 10의 n-1제곱
      val = targetLi[i] * (10**(li_len-i-1))
      liVal += val
  }
  return liVal
}

// addTwoNumbers([2,4,3],[5,6,4])
```

## 되돌아보기

LinkedList 를 써야한다는건 알았는데 그럼 리스트 메소드같은걸 직접 구현해야하는건지 확신이 안 섰다.  
그래서 그냥 Array랑 똑같이 쓰면 되는건가..? 하고 어레이로 구현했는데 그러면 안되는거였다;  
다른 사람들 답안 보고 다시 해봤다..!!  
근데 확실히 요즘 파이썬이랑 자스 둘다 쓰니까 문법이 아주 살짝씩 헷갈린다.. ㅋㅋㅋ. 
`toString()` 대신 `str()` 쓰고 있음...ㅎ
