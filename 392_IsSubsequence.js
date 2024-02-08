var isSubsequence = function (s, t) {
  if (typeof s !== 'string' || typeof t !== 'string') {
    return false
  }

  let subIndex = 0
  for (let i = 0; i < t.length; i++) {
    if (t[i] === s[subIndex] && subIndex < s.length) {
      subIndex += 1
    } else if (t[i] !== s[subIndex] && subIndex < s.length) {
      continue
    } else {
      break
    }
  }

  return subIndex === s.length
}

console.log(isSubsequence('abc', 'ahbgcd'))

module.exports = isSubsequence
