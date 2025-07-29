function whoLikesIt(likes = []) {
  noOfLikes = likes.length;
  verb = noOfLikes > 1 ? "like this" : "likes this";
  peopleWhoLikesIt = noOfLikes == 0 ? "no one" : "";

  for (let i = 0; i < noOfLikes; i++) {
    let joins = "";

    if (i != 0 && i == noOfLikes - 1) {
      joins = "and";
    } else if (i == 0) {
      joins = "";
    } else {
      joins = ",";
    }

    peopleWhoLikesIt = likes[i] + " " + joins + " " + peopleWhoLikesIt;
  }

  console.log(peopleWhoLikesIt + " " + verb);
}

whoLikesIt(["Ram", "Hari", "Shyam"]);
