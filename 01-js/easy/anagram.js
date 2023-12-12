/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let arr1 = str1.toLowerCase().split("").sort();
  let arr2 = str2.toLowerCase().split("").sort();
  let n1 = arr1.length;
  let n2 = arr2.length;
  if (n1 != n2) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] != arr2[i]) {
      return false;
    }
  }
  return true;
}

module.exports = isAnagram;
