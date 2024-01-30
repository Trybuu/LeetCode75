/*
    For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).

    Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.
*/

var gcdOfStrings = function (str1, str2) {
  if (str1 + str2 !== str2 + str1) {
    return ''
  }

  let str1Leng = str1.length,
    str2Leng = str2.length

  let rest
  while (str1Leng % str2Leng > 0) {
    rest = str1Leng % str2Leng
    ;[str1Leng, str2Leng] = [str2Leng, rest]
  }

  return str2.slice(0, str2Leng)
}
