/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums.sort((a,b) => a-b)
  const result = []
  for(let i = 0; i < nums.length; i++){
      const current = nums[i]
      // duplicate
      if(i > 0 && current === nums[i - 1]) continue
      let left = i + 1
      let right = nums.length - 1

      while(left < right){
          const sum = current + nums[left] + nums[right]

          if(sum < 0){
              left++
          } else if (sum > 0){
              right--
          } else {
              result.push([current, nums[left], nums[right]])
              left++
              right--
              // duplicate
              while(left < right && nums[left] === nums[left - 1]){
                  left++
              }
          }
      }
  }
  return result
};

function twoSum(nums, target){
  let left = 0
  let right = nums.length - 1
  
  while(left < right){
      const sum = nums[left] + nums[right] + target
      if(sum === 0){
          return [nums[left], nums[right]]
      } else if(sum < 0){
          left++
      } else {
          right++
      }
  }

  return [-1, -1]
}

function quickSort(nums){
  if(nums.length <= 1) return nums
  let less = []
  let equal = []
  let greater = []
  const pivot = Math.floor((nums.length - 1) / 2)
  let pivotValue = nums[pivot]
  for(const num of nums){
      if(num < pivotValue){
          less.push(num)
      } else if(num > pivotValue){
          greater.push(num)
      } else {
          equal.push(num)
      }
  }
  return [...quickSort(less), ...equal, ...quickSort(greater)]
}