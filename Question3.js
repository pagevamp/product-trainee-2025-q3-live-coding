// Counting Duplicates

function countingDuplicates(s) {
  if (s.length === 0) return 0;

  let results = "";
  let count = 1;
  let currentChar = s[0];

  for (let i = 1; i < s.length; i++) {
    if (s[i] === currentChar[0]) {
      count++;
      //   console.log("for ", s[i], "count = ", count);
    } else {
      results += currentChar + count;
      currentChar = s[i];
      count = 1;
    }
  }

  results += currentChar + count;

  return results;
}

console.log(countingDuplicates("abcc"));
console.log(countingDuplicates("abbbccdd"));
console.log(countingDuplicates("aabcc"));
