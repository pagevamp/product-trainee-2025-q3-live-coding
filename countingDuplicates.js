function distinct(string) {
  let sortedString = [...string].toSorted().join("");
  const duplicateMap = new Map();
  for (let i = 0; i < sortedString.length; i++) {
    if (sortedString[i] == sortedString[i + 1]) {
      if (!duplicateMap.has(sortedString[i])) {
        duplicateMap.set(sortedString[i], 2);
      } else {
        //i forgot syntax to change map value directly,
        let value = duplicateMap.get(sortedString[i]);
        value++;
        duplicateMap.set(sortedString[i], value);
      }
    }
  }
  return duplicateMap;
}

//function returns a map where key is duplicate characters, and value is no. of times it occurs
console.log(distinct("indivisibility"));
