# Two Sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

## Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 
## Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 1번째 배열을 돌면서
 해당 원소를 타겟에서 뺀다
 이 원소의 인덱스 저장
 그 원소 다음 원소부터 2번째로 배열을 돌리면서
 그 뺀 결과값이 원소와 같은 놈을 찾는다.
 이 원소의 인덱스도 저장
 */
var twoSum = function(nums, target) {
    // 반복문 돌릴 숫자
    let firstNum = 0;    
    for(let i=0;i<=nums.length-1;i++) {
        firstNum = nums[i];
        // 찾아야할 수
        numToFind = target - firstNum
        
        for(let j = i+1; j<=nums.length;j++) {
            let secondNum = nums[j];
            // 만약 찾아야할 수가 지금 원소랑 같으면
            if(numToFind===secondNum) {
                return [i,j];
            }
        }
   } 
};
```

## 생각

알고리즘 문제 처음 풀어봤는데, 이건 간단히 반복문으로 해도 될 것 같았다.  
`firstNum`, `secondNum`처럼 변수로 만들어놓으면 `nums[i]`보단 가독성이 높을 것 같아서 그렇게 했는데... 이것도 성능에 영향을 많이 미치려나?
