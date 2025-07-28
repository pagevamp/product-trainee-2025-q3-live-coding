function likeCount(arr) {
  // console.log(typeof arr.length.toString());
  switch (arr.length) {
    case 0:
      console.log("no one likes this");
      break;

    case 1:
      console.log(`${arr[0]} likes this`);
      break;
    case 2:
      console.log(`${arr[0]} and ${arr[1]} likes this`);
      break;
    case 3:
      console.log(`${arr[0]}, ${arr[1]} and ${arr[2]} likes this`);
      break;

    default:
      console.log(
        `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`
      );
  }
}

likeCount([]);
likeCount(["Peter"]);
likeCount(["Mark", "Peter"]);
likeCount(["Max", "Peter", "John"]);
likeCount(["Peteson", "Max", "Peter", "John", "Harvey"]);
likeCount(["Peteson", "Max", "Peter", "John"]);
