var increasingTriplet = function (nums) {
  if (nums === null || nums.length < 3) {
    return false
  }

  let a = Infinity
  let b = Infinity

  for (const num of nums) {
    if (num <= a) {
      a = num
    } else if (num <= b) {
      b = num
    } else {
      return true
    }
  }

  return false
}

console.log(increasingTriplet([5, 4, 3, 2, 1]))
console.log(increasingTriplet([1, 2, 3, 4, 5]))
