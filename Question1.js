// a calculate total rainfall by adding up all the positive integers

function positiveRainfall(arr) {
  results = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      results = results + arr[i];
    }
  }
  return results;
}

console.log(positiveRainfall([1, 2, 3, -1]));

//b count all the positive integers such that total will be in decimal

function countRainfall(arr) {
  results = 0;
  if ((arr.length == 0)) {
    return "No rain";
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      results++;
    }
  }
  return results;
}

console.log(countRainfall([1, 2, 3, -5, 6]));
console.log(countRainfall([]));



//c calculate average rainfall if exists else print "No rain"

function averageRainfall(arr) {
  let sum = 0;
  total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
      total++;
    }
  }
  results = sum / total;
  return results;
}

console.log(averageRainfall([1, 2, 3, 4, 9, 0, -5]));
