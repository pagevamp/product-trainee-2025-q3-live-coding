let string = "aabbcde";

function duplicate(string) {
  let str = string.toLocaleUpperCase();
  let count = new Set();
  let c = 0;
  // console.log(str.length);
  for (let i of str) {
    if (count.has(i)) {
      c++;
    } else {
      count.add(i);
    }
  }
  // console.log(count.size);
  console.log(Math.abs(count.size - str.length));
}

duplicate(string)