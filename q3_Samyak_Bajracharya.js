function countingDuplicates(str) {
  const letters = {};
  const arr = str.split("");

  arr.forEach((el) => {
    if (!letters[el]) {
      letters[el] = 1;
    } else {
      letters[el]++;
    }
  });

  console.log(letters);
}

countingDuplicates("abcde");
countingDuplicates("aaBbcde");
