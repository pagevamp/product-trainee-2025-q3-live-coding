function displayLikes(namesArr) {
  if (!namesArr.length) {
    console.log("No one likes this");
  } else if (namesArr.length === 1) {
    console.log(namesArr[0] + " likes this");
  } else if (namesArr.length === 2) {
    console.log(namesArr[0] + " and " + namesArr[1] + " likes this");
  } else if (namesArr.length === 3) {
    console.log(`${namesArr[0]}, ${namesArr[1]} and ${namesArr[2]} likes this`);
  } else {
    console.log(
      `${namesArr[0]}, ${namesArr[1]} and ${
        namesArr.length - 2
      } others like this`
    );
  }
}

const namesArr = ["Jacob", "Alex", "Max", "Mark", "Peter", "John"];

displayLikes(namesArr);
