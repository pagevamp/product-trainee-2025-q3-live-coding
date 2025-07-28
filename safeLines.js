function safeReport(string) {
  const lines = [];
  let temp = [];
  for (let c of string) {
    if (c != "\n") {
      temp.push(c);
    } else {
      lines.push(temp);
      temp = [];
    }
  }
  console.log(lines);
  let noOfSafeLines = 0;
  let natureOfLine = ""; //increasing or decreasing
  for (let line of lines) {
    //check is strictly increasing or decreasing first
    const valid = [];
    for (let i = 0; i < line.length - 1; i++) {
      if (line[i] < line[i + 1]) {
        valid.push(1);
      } else {
        valid.push(0);
      }
    }
    //
    let temp = 0;
    for (let n of valid) {
      temp += n;
    }
    if (temp == 0) {
      natureOfLine = "increasing"; // if all increasing, all 0
    } else if (temp == line.length) {
      //if all decreasing, all 1, line length will be answer
      natureOfLine = "decreasing";
    } else {
      natureOfLine = "invalid";
    }
    if (natureOfLine == "invalid") continue;
    else if (natureOfLine == "increasing" || natureOfLine == "decreasing") {
      noOfSafeLines++;
    }
  }
  return noOfSafeLines;
}

console.log(safeReport("76421\n12789\n97621\n13245\n86441\n13679"));
