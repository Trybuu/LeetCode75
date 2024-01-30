/*
    You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

    Return the merged string.
*/

var mergeAlternately = function (word1, word2) {
  const word1Length = word1.length,
    word2Length = word2.length,
    maxLength = Math.max(word1Length, word2Length)

  let text = ''

  for (let i = 0; i < maxLength; i++) {
    if (i < word1Length) text += word1[i]
    if (i < word2Length) text += word2[i]
  }

  return text
}
