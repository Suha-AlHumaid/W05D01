
function isPalindrome(x) {
  // your code here
  const arr = x.toLowerCase().split("");
  const rev = x.toLowerCase().split("").reverse();
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == rev[i]) {
      result++;
    }
  }
  return result === arr.length;
}
isPalindrome("Madam");
