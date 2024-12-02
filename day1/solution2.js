const fs = require("fs");

const arr = fs.readFileSync("input.txt").toString().split("\r\n");

const leftList = Array.from(
  new Set(arr.map((item) => Number(item.split("   ")[0])))
);

const rightList = arr.map((item) => Number(item.split("   ")[1]));

const output = leftList
  .map(
    (leftItem) =>
      leftItem *
      rightList.reduce((occ, curr) => (curr == leftItem ? occ + 1 : occ), 0)
  )
  .reduce((sum, curr) => sum + curr);

console.log(output);
