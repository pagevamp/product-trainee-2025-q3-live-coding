function calculateTotalRainfall(data) {
  let positiveIntegers = 0;
  let totalRainfall = 0;
  let avgRainfall = 0;

  // Calculate total positive integers
  for (let i = 0; i < data.length; i++) {
    if (data[i] > 0) {
      positiveIntegers += 1;
    }
  }

  //   Calculate total rainfall
  for (let i = 0; i < data.length; i++) {
    if (data[i] > 0) {
      totalRainfall += data[i];
    }
  }

  // Calculate total avg rainfall
  if (totalRainfall > 0) {
    avgRainfall = totalRainfall / positiveIntegers;
    return avgRainfall;
  } else {
    return 'No rain';
  }
}

// console.log(calculateTotalRainfall([1, 2, 3]));
// console.log(calculateTotalRainfall([-1, 1, 2, 3]));
console.log(calculateTotalRainfall([-1, -2]));
