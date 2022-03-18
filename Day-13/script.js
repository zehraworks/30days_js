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

console.group("Speed Test");

console.group("While Loop");
console.time("while loop");
let i = 0;
while (i < countriesAll.length) {
  i++;
}
console.timeEnd("while loop");
console.groupEnd();

console.group("For Loop");
console.time("regular for loop");
for (let i = 0; i < countriesAll.length; i++) {}
console.timeEnd("regular for loop");
console.groupEnd();

console.group("For of Loop");
console.time("for of loop");
for (const item of countriesAll) {   
}
console.timeEnd("for of loop");
console.groupEnd();

console.group("forEach Loop");
console.time("forEach loop");
countriesAll.forEach((item) => {});
console.timeEnd("forEach loop");
console.groupEnd();

