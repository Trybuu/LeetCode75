/* 
    Given an array of characters chars, compress it using the following algorithm:

    Begin with an empty string s. For each group of consecutive repeating characters in chars:

        - If the group's length is 1, append the character to s.
        - Otherwise, append the character followed by the group's length.
    
    The compressed string s should not be returned separately, but instead, be stored in the input character array chars. Note that group lengths that are 10 or longer will be split into multiple characters in chars.
    After you are done modifying the input array, return the new length of the array.
    You must write an algorithm that uses only constant extra space.
*/

var compress = function (chars) {
  let i = 0
  let j = 0
  while (j < chars.length) {
    let count = 0
    let curr = chars[j]
    while (j < chars.length && chars[j] === curr) {
      j++
      count++
    }
    chars[i++] = curr
    if (count > 1) {
      for (let digit of count.toString()) {
        chars[i++] = digit
      }
    }
  }
  return i
}

console.log(compress(['a']))
console.log(compress(['a', 'a', 'b', 'b', 'c', 'c', 'c']))
console.log(
  compress(['a', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b']),
)
