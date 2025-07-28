function rainfall(days) {
  let totalRainfall = 0.0;
  let noOfRainyDays = 0.0;
  for (let day of days) {
    if (day >= 0) {
      totalRainfall += day;
      noOfRainyDays += 1;
    }
  }
  if (totalRainfall > 0) {
    const averageRain = totalRainfall / noOfRainyDays;
    console.log("average rainfall:", averageRain);
  } else {
    console.log("no rain");
  }
}

rainfall([-1, -2, -3, 2, 3]);
