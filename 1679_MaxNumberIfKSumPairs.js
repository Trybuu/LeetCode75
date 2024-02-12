var maxOperations = function (nums, k) {
  let l = 0
  let r = nums.length - 1
  let c = 0

  nums.sort((a, b) => a - b)

  while (l < r) {
    const sum = nums[l] + nums[r]

    if (sum === k) {
      l++
      r--

      c++
    } else if (sum > k) {
      r--
    } else {
      l++
    }
  }

  return c
}

console.log(maxOperations([1, 2, 3, 4, 5], 5))
console.log(maxOperations([3, 1, 3, 4, 3], 6))
