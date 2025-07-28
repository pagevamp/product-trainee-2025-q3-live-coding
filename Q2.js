// Who likes it ?

// Rainfall Problem

const arr = ["don", "uniq", "sweta", "pig"];
let sum = "";
function likes(arr) {
  if (arr.length === 0) return console.log("no one likes this");
  if (arr.length === 1) return console.log(arr[0] + " " + "likes this");
  if (arr.length === 2)
    return console.log(arr[0] + " " + "and " + arr[1] + " " + "likes this");
  for (let i = 0; i < arr.length - 1; i++) {
    sum = sum + arr[i];
    if (i == [arr.length - 2]) {
      break;
    } else {
      sum = sum + ", ";
    }
  }
  return console.log(sum + " and " + arr[arr.length - 1] + " " + "likes this");
}

likes(arr);
