/*
    Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

    Note that you must do this in-place without making a copy of the array.
*/
function moveZeroes(nums) {
  const N = nums.length

  if (N === 0) {
    return
  }

  for (let i = N - 1; i >= 0; i--) {
    if (nums[i] === 0) {
      const x = nums.splice(i, 1)
      nums.push(...x)
    }
  }
}

console.log(moveZeroes([0, 1, 0, 3, 12]))

module.exports = moveZeroes
