const duplciateCounter = (str) => {
  let strArr = str.toLowerCase().split("").sort().join("");
  let uniqueArr = [...new Set(strArr)];
  console.log(uniqueArr);
  let countArr = [];
  for (let i = 0; i < uniqueArr.length; i++) {
    countArr.push(0);
  }
  console.log(countArr);
  for (let i = 0; i < strArr.length; i++) {
    for (let j = 1; j < strArr.length; j++) {
      if ((strArr[i] = strArr[j])) countArr[i] += 1;
    }
  }

  return countArr;
};
console.log(duplciateCounter("aaccbbde"));
