function totalRainfall(rainfallArr) {
  let sum = 0;
  for (let i = 0; i < rainfallArr.length; i++) {
    if (rainfallArr[i] < 0) {
      sum = sum;
    } else {
      sum = sum + rainfallArr[i];
    }
  }
  return sum;
}

function countPositiveIntegers(rainfallArr) {
  let count = 0;
  for (let i = 0; i < rainfallArr.length; i++) {
    if (rainfallArr[i] < 0) {
      count = count;
    } else {
      count = count + 1;
    }
  }
  return count;
}

function averageRainfall(totalRainfall) {
  if (totalRainfall <= 0) {
    console.log("No rain");
  } else {
    console.log(totalRainfall / rainfalls.length);
  }
}

const rainfalls = [-1, 1, 2, 3];

console.log(totalRainfall(rainfalls));
console.log(countPositiveIntegers(rainfalls));
averageRainfall(totalRainfall(rainfalls), rainfalls.length);
