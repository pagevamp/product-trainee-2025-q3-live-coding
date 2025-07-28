const integers = (arr) => {
  let posIntArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      posIntArr.push(arr[i]);
    }
  }
  if (posIntArr.length == 0) {
    return "no rain";
  }
  let avgRain = 0;
  let totalRain = 0;
  for (let i = 0; i < posIntArr.length; i++) {
    totalRain += posIntArr[i];
  }
  avgRain = totalRain / posIntArr.length;
  return avgRain;
};

console.log(integers([]));
