const a = (rain) => {
  let count = [];

  rain.forEach((element) => {
    if (element > 0) return count.push(element);
  });

  return count.length - 1;
};

console.log(a([1,3,4, -1, -3]))
