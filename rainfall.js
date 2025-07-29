function averageRainfall(rains) {
  let totalRain = 0;
  let positiveRains = [];
  let i = 0;

  for (i = 0; i < rains.length; i++) {
    if (rains[i] > 0) {
      positiveRains.push(rains[i]);
      totalRain += rains[i];
    }
  }

  console.log("The sum of the total rains is ", totalRain);

  console.log("The number of total rains ", positiveRains.length);

  if (positiveRains.length > 0) {
    averageRains = totalRain / positiveRains.length;

    console.log("The average rainfall is ", averageRains);
  } else {
    console.log("No rain");
  }
}

averageRainfall([-1, 1, 2, 3]);
