/** product: calculate the product of an array of numbers. */

function product(nums, i = 0) {
  if (i >= nums.length) return 1;
  return nums[i] * product(nums, i + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i = 0, longestCount = 0) {
  if (i >= words.length) return longestCount;

  if (words[i].length > longestCount) longestCount = words[i].length;

  return longest(words, i + 1, longestCount);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i = 0, word = "") {
  if (i >= str.length) return word;

  if (i % 2 === 0) word += str[i];

  return everyOther(str, i + 1, word);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i = 0) {
  let leftIdx = i;
  let rightIdx = str.length - i - 1;
  if (leftIdx >= rightIdx) return true;
  if (str[leftIdx] !== str[rightIdx]) return false;
  return isPalindrome(str, i + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  if (i >= arr.length) return -1;

  if (arr[i] === val) return i;

  return findIndex(arr, val, i + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i = str.length - 1, output = "") {
  if (i < 0) return output;

  output += str[i];

  return revString(str, i - 1, output);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, keyIdx = 0, result = []) {
  const keys = Object.keys(obj);

  if (keyIdx >= keys.length) return result;

  if (typeof obj[keys[keyIdx]] === "string") {
    result.push(obj[keys[keyIdx]]);
  } else if (typeof obj[keys[keyIdx]] === "object") {
    const nestedStrings = gatherStrings(obj[keys[keyIdx]]);

    if (nestedStrings.length > 0) {
      result.push(...nestedStrings);
    }
  }
  return gatherStrings(obj, keyIdx + 1, result);
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, leftIdx = 0, rightIdx = arr.length - 1) {
  const midIdx = Math.floor((leftIdx + rightIdx) / 2);

  if (leftIdx > rightIdx) return -1;

  if (arr[midIdx] > val) {
    return binarySearch(arr, val, leftIdx, midIdx - 1);
  }
  if (arr[midIdx] < val) {
    return binarySearch(arr, val, midIdx + 1, rightIdx);
  }
  if (arr[midIdx] === val) return midIdx;
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
