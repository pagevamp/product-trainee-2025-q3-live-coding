function countingDuplicates(str) {
  let count = {};
  let numberOfRepeatingChars = 0;

  for (let s of str) {
    if (count[s] !== undefined) {
      count[s] += 1;
    } else {
      count[s] = 1;
    }
  }

  let newArr = [...Object.values(count)];

  for (let i = 0; newArr.length; i++) {
    if (newArr[i] > 1) {
      numberOfRepeatingChars += 1;
    }
  }

  return numberOfRepeatingChars;
}

console.log(countingDuplicates('aaabbc'));
