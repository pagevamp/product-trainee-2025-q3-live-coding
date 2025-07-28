function countDistinctAlphaNumericCharacters(input) {
  let count = {};
  const inputArr = input.split("");

  console.log(inputArr);
  for (let i = 0; i < inputArr.length; i++) {
    console.log(inputArr[i]);
  }
}

countDistinctAlphaNumericCharacters("abcde");
