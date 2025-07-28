const liked = (persons) => {
  const noOfPersons = persons.length;

  if (noOfPersons === 0) return "no one likes this";

  if (noOfPersons === 1) return `${persons[0]} likes this`;

  if (noOfPersons === 2) {
    const [person1, person2] = [...persons];
    return `${person1} and ${person2} like this`;
  }

  if (noOfPersons === 3) {
    const [person1, person2, person3] = [...persons];
    return `${person1}, ${person2} and ${person3} like this`;
  }

  const [person1, person2] = [...persons];
  const restPersons = persons.slice(2, persons.length);
  const length = restPersons.length;

  return `${person1}, ${person2} and ${length} others like this`;
};

console.log(liked(["thankyou", "jello", "hi", "rice", "water", "food"]));
