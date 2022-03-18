//Level 1
//1
const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];
console.table(countries);

//2
console.group("Countries Table");
console.table(countriesAll);
console.groupEnd();

//3 console.group applied question 2

//Level 2
//1
console.assert(10 > 2 * 10, "error");

//2
console.warn("This is a warning massage");

//3
console.error("This is an error message");
