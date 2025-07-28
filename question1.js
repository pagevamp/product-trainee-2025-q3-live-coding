//to calculate total rainfall

const rainFall = (arr) => {
  let positiveValue = arr.filter((val) => {
    if (val >= 0) {
      return val;
    }
  });
  console.log("Total Number of positive integers:", positiveValue.length);
  if (positiveValue.length !== 0) {
    const average = positiveValue.reduce(
      (acc, cvalue) => (acc + cvalue) / positiveValue.length
    );
    console.log("Average:", average);
  } else {
    console.log("No rainfall");
  }
  return positiveValue;
};
console.log(rainFall([-1, 2, -3, 4]));
