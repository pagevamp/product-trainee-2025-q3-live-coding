function TotalRainfall(rainData) {
  const validData = rainData.filter((x) => x >= 0);

  const count = validData.length;
  const total = validData.reduce((a, b) => a + b);

  const avg = (total / count).toFixed(1);

  console.log(avg === "0.0" ? "No rainfall" : avg);
}

TotalRainfall([-1, 1, 2, 3, 5, -2]);
TotalRainfall([0, 0, 0]);
