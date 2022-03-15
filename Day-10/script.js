// Level 1
//1
const newSet = new Set();
console.log(newSet);

// 2
for (let i = 0; i < 10; i++) {
  newSet.add(i);
}
console.log(newSet);

//3
newSet.delete(3);
console.log(newSet);

//4
newSet.clear();
console.log(newSet);

//5
const arr = [1, 2, 3, 4, 5];
for (const element of arr) {
  newSet.add(element);
}
console.log(newSet);

//6
const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries = ["Finland", "Sweden", "Norway"];

const countryMap = new Map();
for (const country of countries) {
  countryMap.set(country, country.length);
}
console.log(countryMap);
