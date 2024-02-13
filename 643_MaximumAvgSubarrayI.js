var findMaxAverage = function (nums, k) {
  let avg
  let sum = 0

  for (let i = 0; i < k; i++) {
    sum += nums[i]
  }
  avg = sum / k

  for (let right = k; right < nums.length; right++) {
    console.log(
      `${sum} = ${nums[right]} - ${nums[right - k + 1]} - ${nums[right - k]}`,
    )
    sum = sum - nums[right - k] + nums[right]

    if (sum / k > avg) avg = sum / k
  }

  return avg
}

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4))
console.log(findMaxAverage([5], 1))
