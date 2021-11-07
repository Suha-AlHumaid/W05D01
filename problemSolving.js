function isPalindrome(x) {
  // your code here

  const arr = x.toLowerCase().split("");
  const reversArr = x.toLowerCase().split("").reverse();
  console.log(arr);
  console.log(reversArr);
  if (arr[0] === reversArr[0]) {
    if (arr[arr.length - 1] === reversArr[reversArr.length - 1]) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
isPalindrome("Madam");
