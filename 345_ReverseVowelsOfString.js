/*
    Given a string s, reverse only all the vowels in the string and return it.

    The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
*/

function reverseVowels(s) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  const chars = new Array(...s)

  const vowelsIndexes = []

  for (const char of chars) {
    if (vowels.includes(char)) vowelsIndexes.push(char)
  }

  for (let i = 0; i < Math.floor(vowelsIndexes.length / 2); i++) {
    ;[
      chars[vowelsIndexes[i]],
      chars[vowelsIndexes[vowelsIndexes.length - 2 - i]],
    ] = [
      chars[vowelsIndexes[vowelsIndexes.length - 2 - i]],
      chars[vowelsIndexes[i]],
    ]
  }

  return chars.join('')
}
