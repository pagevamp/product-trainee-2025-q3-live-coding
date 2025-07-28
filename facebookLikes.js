function whoLikes(names) {
  let outputText = "no one likes this";
  if (names.length == 1) {
    outputText = `${names[0]} likes this`;
  } else if (names.length == 2) {
    outputText = `${names[0]} and ${names[1]} likes this`;
  } else if (names.length == 3) {
    outputText = `${names[0]},${names[1]} and${names[2]}  likes this`;
  } else if (names.length > 3) {
    let remaining = names.length - 2;
    outputText = `${names[0]},${names[1]} and ${remaining} others  likes this`;
  }
  return outputText;
}

console.log(whoLikes([]));
