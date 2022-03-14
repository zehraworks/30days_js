//Level 1
//1

//2

//3
const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

countries.forEach((country) => console.log(country));

//4
names.forEach((name) => console.log(name));

//5
numbers.forEach((number) => console.log(number));

//6
const countriesToUpperCase = countries.map((country) => country.toUpperCase());
console.log(countriesToUpperCase);

//7
const countriesLength = countries.map((country) => country.length);
console.log(countriesLength);

//8
const square = numbers.map((number) => number ** 2);
console.log(square);

//9
const nameToUpperCase = names.map((name) => name.toUpperCase());
console.log(nameToUpperCase);

//10
const corPrices = products.map((item) => typeof item.price == "number");
console.log(corPrices);

//11
const countriesContainingLand = countries.filter((country) =>
  country.includes("land")
);
console.log(countriesContainingLand);

//12
const countriesSixChar = countries.filter((country) => country.length == 6);
console.log(countriesSixChar);

//13
const countriesMoreThanSixChar = countries.filter(
  (country) => country.length >= 6
);
console.log(countriesMoreThanSixChar);

//14
const countriesStartF = countries.filter((country) => country.startsWith("F"));
console.log(countriesStartF);

//15
const pricesWithValues = products.filter(
  (item) => typeof item.price == "number"
);
console.log(pricesWithValues);

//16
const array = ["i", "s", "t", "a", "n", 1, "b", "u", 4, "l", 5, 3];
function getStringList(arr) {
  return arr.filter((item) => typeof item == "string");
}
console.log(getStringList(array));

//17
const sum = numbers.reduce((sum, number) => sum + number);
console.log(sum);

//18
const concatCountries = countries.reduce((prev, curr) => {
  countries.splice(-1, 1, "and IceLand are north European countries");
  return prev + ", " + curr;
}, "Estonia");
console.log(concatCountries);

//19
//The only difference is that the some() method will return true if any predicate is true while every() method will return true if all predicate are true.

//20
console.log(names.some((name) => name.length > 7));

//21
console.log(countries.every((country) => country.includes("land")));

//22
//The findIndex() method is quite similar to the find() method but returns the index of the element instead of the element itself.

//23
console.log(countries.find((c) => c.length == 6));

//24
console.log(countries.findIndex((c) => c.length == 6));

//25
console.log(countries.findIndex((c) => c === "Norway"));

//26
console.log(countries.findIndex((c) => c === "Russia"));

//Level 2
//1
const totalPrice = products
  .map((p) => p.price)
  .filter((p) => typeof p === "number")
  .reduce((sum, curr) => (sum += curr));
console.log(totalPrice);

//2
const sumPrices = products.reduce(
  (sum, p) => (typeof p.price == "number" ? (sum += p.price) : sum),
  0
);
console.log(sumPrices);

//3
import { countriesAll } from "./countries.js";

function categorizeCountries(category) {
  return countriesAll.map((c) => c.name).filter((c) => c.includes(category));
}
console.log(categorizeCountries("land"));
console.log(categorizeCountries("stan"));

//4
function letterNumber(letter) {
  let countryStartWith = countriesAll
    .map((c) => c.name)
    .filter((n) => n.startsWith(letter.toUpperCase()));
  return `${
    countryStartWith.length
  } countries start with ${letter.toUpperCase()} letter`;
}
console.log(letterNumber("k"));

//5
function getFirstTenCountries(array) {
  array.forEach((item, index) => {
    if (index < 10) {
      console.log(item);
    }
  });
}
getFirstTenCountries(countriesAll);

//6
function getLastTenCountries(array) {
  let last = array.length - 10;
  array.forEach((item, index) => {
    if (index >= last) {
      console.log(item);
    }
  });
}
getLastTenCountries(countriesAll);

//7
const counts = {};
function getNames(array) {
  let newArray = array
    .map((item) => item.name)
    .map((x) => {
      return x.charAt(0);
    });

  newArray.forEach(x => {
    counts[x] = (counts[x] || 0) + 1;
  });
  return counts;
}
console.log(getNames(countriesAll));
