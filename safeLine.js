const safeLine = (numStr) => {
  let safe = true;
  let numArr = numStr.trim(" ").split("");
  let onlyNumArr = [];
  for (let i = 0; i < numArr.length; i++) {
    if (Number(numArr[i])) {
      onlyNumArr.push(Number(numArr[i]));
    }
  }
  for (let i = 0; i < onlyNumArr.length; i++) {
    if (Math.abs(onlyNumArr[i] - onlyNumArr[i + 1]) > 3) {
      safe = false;
    }
  }
  return safe;
};
console.log(safeLine("1 2 7 8 9") ? "safe" : "not safe");
