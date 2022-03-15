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
  let newArray = array.map((item) => item.name.charAt(0));
  newArray.forEach((x) => {
    counts[x] = (counts[x] || 0) + 1;
  });
  return counts;
}
console.log(getNames(countriesAll));

//Level 3
//1
/* console.log(countriesAll.sort((a, b) => b.name.localeCompare(a.name)));
console.log(countriesAll.sort((a, b) => b.capital.localeCompare(a.capital)));
console.log(countriesAll.sort((a, b) => b.population - a.population)); 
 */
//2
function mostSpokenLanguages(countriesArr, number) {
  let parentLangArr = countriesArr.map((x) => x.languages);
  const langArr = [];
  for (const childLangArr of parentLangArr) {
    for (const languages of childLangArr) {
      langArr.push(languages);
    }
  }
  const countedCountries = {};
  langArr.forEach(function (x) {
    countedCountries[x] = (countedCountries[x] || 0) + 1;
  });
  let sorted = Object.entries(countedCountries)
    .sort((a, b) => b[1] - a[1])
    .slice(0, number);
  return Object.fromEntries(sorted);
}
console.log(mostSpokenLanguages(countriesAll, 7));

//3
function mostPopulatedCountries(countriesArr, number) {
  return countriesArr
    .sort((a, b) => b.population - a.population)
    .slice(0, number)
    .map((country) => {
      return {
        country: country.name,
        population: country.population,
      };
    });
}
console.log(mostPopulatedCountries(countriesAll, 5));

//4
const statistics = {
  data: [
    31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
    31, 34, 24, 33, 29, 26,
  ],
  count: function () {
    return this.data.length;
  },
  sum: function () {
    return this.data.reduce((acc, cur) => (acc += cur));
  },
  min: function () {
    return Math.min(...this.data);
  },
  max: function () {
    return Math.max(...this.data);
  },
  range: function () {
    return this.max() - this.min();
  },
  mean: function () {
    return Math.round(this.sum() / this.count());
  },
  median: function () {
    let val = Math.round((this.count() - 1) / 2);
    return this.data.sort((a, b) => a - b)[val];
  },
  mode: function () {
    this.data.sort((a, b) => a - b);
    let count = 1,
      repeat = 1,
      dump = "",
      records = [];

    for (let i = 0; i < this.count(); i++) {
      dump = this.data[i];

      if (dump == this.data[i + 1]) {
        repeat += 1;
      } else {
        records.push({
          mode: dump,
          count: repeat,
        });
        repeat = 1;
      }
    }

    return records.sort((a, b) => b.count - a.count).slice(0, 1)[0];
  },
  var: function () {
    let mean = this.mean();

    return (
      Math.ceil(
        (this.data.reduce((acc, cur) => (acc += (cur - mean) ** 2)) /
          this.count()) *
          2
      ) / 2
    );
  },
  std: function () {
    return Math.sqrt(this.var()).toFixed(1);
  },
  freqDist: function () {
    return "I don't want to deal with the calculation"
  },
  describe: function () {
    return `Count: ${this.count()}
Sum: ${this.sum()}
Min: ${this.min()}
Max: ${this.max()}
Range: ${this.range()}
Mean: ${this.mean()}
Median: ${this.median()}
Mode: ${this.mode()}
Variance: ${this.var()}
Standard Deviation: ${this.std()}
Frequency Distribution: ${this.freqDist()}`;
  },
};

console.log("Count:", statistics.count());
console.log("Sum:", statistics.sum());
console.log("Min:", statistics.min());
console.log("Max:", statistics.max());
console.log("Range:", statistics.range());
console.log("Mean:", statistics.mean());
console.log("Median:", statistics.median());
console.log("Mode:", statistics.mode());
console.log("Variance:", statistics.var());
console.log("Standard Deviation:", statistics.std());
console.log("Frequency Distribution:", statistics.freqDist());
console.log(statistics.describe());
