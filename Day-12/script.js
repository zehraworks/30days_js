//Level 1
//1
const textIncome =
  "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.";
const reg = /\d+/g;
const matches = textIncome.match(reg);
console.log(matches);

//2
const sortedPoints = "[-4, -3, -1, -1, 0, 2, 4, 8]";
const regFirst = sortedPoints.match(/-?\d/);
const regLast = sortedPoints.match(/(\d+)(?!.*\d)/);
const distance = Math.abs(parseInt(regFirst) - parseInt(regLast));
console.log(distance);

//3
function is_valid_variable(str) {
  let pattern = /^[a-zA-Z_$]+[0-9]{0,}$/g;
  return pattern.test(str);
}
console.log(is_valid_variable("first_name"));
console.log(is_valid_variable("first-name"));

//Level 2
//1
paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;

function tenMostFrequentWords(paragraph, number) {
  const arr = [];
  arr.push(paragraph.match(/[\w]+/g));

  let newArr = arr
    .map((item) => item)
    .join(",")
    .split(",");

  const counts = {};
  newArr.forEach((x) => {
    counts[x] = (counts[x] || 0) + 1;
  });

  const array = [];
  Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .forEach((x) => {
      let [key, val] = [x[0], x[1]];
      array.push({ word: key, count: val });
    });
  return array.slice(0, number);
}
console.log(tenMostFrequentWords(paragraph, 3));
