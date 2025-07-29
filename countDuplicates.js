// function countDuplicates(string = "") {
//   alphabets = {}
//   for (let i = 0; i < string.length; i++) {
//     char = string[i];
//     console.log(alphabets[char]);
//     if (alphabets[char] === undefined) {
//       alphabets = { ...alphabets, char: 1 };
//     } else {
//     }
//   }

//   console.log(alphabets);
// }

function countDuplicates(string = "applw") {
  alphabets = {};

  for (let i = 0; i < string.length; i++) {
    char = string[i];
    console.log(char);

    if (!alphabets[char]) {
      
      alphabets = { ...alphabets, char: 1 };
    } else {
      alphabets[char] = alphabets[char] + 1;
    }
  }
}

countDuplicates("apple");
