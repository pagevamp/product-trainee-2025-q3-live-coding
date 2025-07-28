// facebook Like system.

// [] -> no one likes this
// ["Peter"] -> "Peter likes this"
// ["Peter, Jacob"] -> "Peter and Jacob like this"
// ["Peter, Jacob, Mark"] -> "Peter, Jacob and Mark like this"
// ["Peter", Jacob, Mark", "Max"] -> "Peter, Jacob and 2 other like this"

function likeSystem(str) {
  let result = "";
  if (str.length == 0) {
    result = "No one likes this";
  } else if (str.length == 1) {
    result = `${str[0]} likes this`;
  } else if (str.length == 2) {
    result = `${str[0]} and ${str[1]} like this`;
  } else if (str.lenght == 3) {
    result = `${str[0]}, ${str[1]}  and ${str[2]} like this`;
  } else {
    rest = str.length - 2;
    result = `${str[0]}, ${str[1]} and  ${rest} others like this`;
  }
  return result
}

console.log(likeSystem([]));
console.log(likeSystem(["Peter"]));
console.log(likeSystem(["Peter","Jacob"]));
console.log(likeSystem(["Peter", "Jacob", "Mark"]));
console.log(likeSystem(["Peter", "Jacob", "Mark", "Max"]));
