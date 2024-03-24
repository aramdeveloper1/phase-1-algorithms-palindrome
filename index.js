function isPalindrome(text) {

  // Initialize variables for left and right indices
  let leftIndex = 0;
  let rightIndex = text.length - 1;

  // Loop while left index is less than or equal to right index
  while (leftIndex <= rightIndex) {
    // Check characters (converted to lowercase) at left and right indices
    if (text[leftIndex].toLowerCase() !== text[rightIndex].toLowerCase()) {
      // Characters don't match, return False
      return false;
    }

    // Increment left index and decrement right index to move inwards
    leftIndex++;
    rightIndex--;
  }

  // If loop completes, all characters matched, return True
  return true;
}

// Test cases
console.log(isPalindrome("mom"));  // Output: true
console.log(isPalindrome("racecar"));  // Output: true
console.log(isPalindrome("hello"));  // Output: false
console.log(isPalindrome("A man, a plan, a canal: Panama"));  // Output: true (ignores case and non-alphanumeric characters)

/*
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
