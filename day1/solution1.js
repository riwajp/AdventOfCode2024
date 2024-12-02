const fs = require("fs");

const arr = fs.readFileSync("input.txt").toString().split("\r\n");

const leftList = arr
  .map((item) => Number(item.split("   ")[0]))
  .sort((a, b) => a - b);

const rightList = arr
  .map((item) => Number(item.split("   ")[1]))
  .sort((a, b) => a - b);

const output = leftList
  .map((leftItem, i) => Math.abs(leftItem - rightList[i]))
  .reduce((sum, curr) => sum + curr);

console.log(output);
