// Rainfall Problem

const arr = [];
let sum = 0;
let c = 0.0;
let res = 1;
function rainfall(arr) {
  if (arr.length === 0) return console.log("No rain");
  for (let i of arr) {
    if (i > 0) {
      c++;
      sum += i;
    }
  }
  //   c = Math.max(c++)
  res = sum / c;
  return console.log(res);
}

rainfall(arr);
