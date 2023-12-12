/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str=str.toLowerCase();
  let pattern = /\W/g;
  let newStr = str.replace(pattern,"")
  let reverseStr= newStr.split("").reverse().join("");
  // console.log(reverseStr,str);
  if(reverseStr===newStr) return true;
  else return false;
  
}
// console.log(isPalindrome('race car'));
module.exports = isPalindrome;
// race car
// Able, was I ere I saw Elba!