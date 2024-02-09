var maxArea = function (height) {
  let maxWater = 0

  for (let i = 0; i < height.length; i++) {
    let right = height.length - 1

    while (i < right) {
      const currWater = (right - i) * Math.min(height[i], height[right])

      if (currWater > maxWater) maxWater = currWater

      right -= 1
    }
  }

  return maxWater
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
console.log(maxArea([1, 1]))

module.exports = maxArea
