// Level 1 ***************
//1
function fullName() {
  console.log("Jane Doe");
}
fullName();

//2
function fullName2(firstName, lastName) {
  let fullName = firstName + " " + lastName;
  console.log(fullName);
}
fullName2("Jane", "Doe");

//3
function addNumbers(param1, param2) {
  let sum = param1 + param2;
  return sum;
}
console.log(addNumbers(3, 5));

//4
function areaOfRectangle(lenght, widht) {
  let area = lenght * widht;
  console.log(area);
}
areaOfRectangle(3, 5);

//5
const perimeter = function (lenght, widht) {
  return 2 * (lenght + widht);
};
console.log(perimeter(3, 5));

//6
const volumeOfRectPrism = function (length, width, height) {
  let volume = length * width * height;
  return volume;
};
console.log(volumeOfRectPrism(3, 5, 7));

//7
let areaOfCircle = (r) => (π = 3.14) * r * r;
console.log(areaOfCircle(2));

//8
let circumOfCircle = (r) => {
  const π = 3.14;
  return 2 * π * r;
};
console.log(circumOfCircle(5));

//9
let density = (mass, volume) => mass / volume;
console.log(density(20, 5));

//10
let speed = (distance, time) => distance / time;
console.log(speed(10, 2));

//11
let weight = (mass, gravity) => mass * gravity;
console.log(weight(10, 3));

//12
let convertCelciusToFahrenheit = (oC) => (oC * 9) / 5 + 32;
console.log(convertCelciusToFahrenheit(20));

//13
const bmi = function (weight, height) {
  let bmi = weight / height ** 2;
  if (bmi < 18.5) {
    console.log("Underweight");
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("Normal weight");
  } else if (bmi >= 25 && bmi <= 29.9) {
    console.log("Overweight");
  } else if (bmi >= 30) {
    console.log("Obese");
  }
};
bmi(100, 2);

//14
function checkSeason(month) {
  if (month == 12 || month == 1 || month == 2) {
    console.log("Winter");
  } else if (month == 3 || month == 4 || month == 5) {
    console.log("Spring");
  } else if (month == 6 || month == 7 || month == 8) {
    console.log("Summer");
  } else if (month == 9 || month == 10 || month == 11) {
    console.log("Autumn");
  } else {
    console.log("Please enter valid month number!");
  }
}
checkSeason(3);

//15
findMax = (param1, param2, param3) => Math.max(param1, param2, param3);
console.log(findMax(140, -502, 73));

//Level 2 *****************

//1 Passed

//2 Passed

//3
function printArray(array) {
  for (const value of array) {
    console.log(value);
  }
}
let arr = [1, 2, 3];
printArray(arr);

//4
function showDateTime() {
  let today = new Date();
  (year = today.getFullYear()),
    (month = today.getMonth() + 1),
    (day = today.getDate()),
    (hour = today.getHours()),
    (minutes = today.getMinutes());

  month = month.toString().length < 2 ? "0" + month : month;
  day = day.toString().length < 2 ? "0" + day : day;
  hour = hour.toString().length < 2 ? "0" + hour : hour;
  minutes = minutes.toString().length < 2 ? "0" + minutes : minutes;

  console.log(`${day}/${month}/${year} ${hour}:${minutes}`);
}
showDateTime();

//5
swapValues = (x, y) => console.log(`x=${y} y=${x}`);
swapValues(3, 4);

//6
function reverseArray(array) {
  arrRev = [];
  for (let i = array.length - 1; i >= 0; i--) {
    arrRev.push(array[i]);
  }
  console.log(arrRev);
}
let x = ["a", "s", "d", "f", "g"];
reverseArray(x);

//7
const capitalizedArray = function (array) {
  let arrCap = [];
  for (let i = 0; i < array.length; i++) {
    arrCap.push(array[i].toUpperCase());
  }
  return arrCap;
};
console.log(capitalizedArray(x));

//8
array = [];
let addItem = (array, item) => array.push(item);

addItem(array, "q");
addItem(array, "w");
addItem(array, "e");
console.log(array);

//9
let removeItem = (array, index) => {
  if (index > -1) {
    array.splice(index, 1);
  }
  return array;
};
console.log(removeItem(x, 3));

//10
let sumOfNumbers = (number1, number2) => {
  let sum = 0;
  for (let i = number1; i <= number2; i++) {
    sum += i;
  }
  console.log(sum);
};
sumOfNumbers(3, 20);

//11
let sumOfOdd = (odd1, odd2) => {
  let oddSum = 0;
  for (let i = odd1; i <= odd2; i++) {
    if (i % 2 != 0) {
      oddSum += i;
    }
  }
  console.log(oddSum);
};
sumOfOdd(3, 20);

//12
let sumOfEven = (even1, even2) => {
  let evenSum = 0;
  for (let i = even1; i <= even2; i++) {
    if (i % 2 == 0) {
      evenSum += i;
    }
  }
  console.log(evenSum);
};
sumOfEven(3, 20);

//13
let evensAndOdds = (int) => {
  if (int > 0) {
    let even = Math.floor(int / 2);
    let odd = int - even;
    console.log(
      `The number of evens are ${even + 1}.\nThe number of odds are ${odd}.`
    );
  }
};
evensAndOdds(100);

//14
function sum() {
  let sum = 0;
  for (const element of arguments) {
    sum += element;
  }
  console.log(sum);
}
sum(3, 4, 6, 7);

//15
let randomUserIP = () => {
  const array = [];
  for (let i = 0; i < 4; i++) {
    array.push(Math.round(Math.random() * 255));
  }
  console.log(array.join("."));
};
randomUserIP();

//16
const charset = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
function randomMacAddress() {
  const array = [];
  for (let i = 0; i < 8; i++) {
    let item = "";
    for (let r = 0; r < 2; r++) {
      let random = Math.round(Math.random() * (charset.length - 1));
      item += charset[random];
    }
    array.push(item);
  }
  console.log(array.join(":"));
}
randomMacAddress();

//17
let randomHexaNumberGenerator = () => {
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    let r = Math.round(Math.random() * charset.indexOf("9"));
    hex += charset[r];
  }
  console.log(hex);
};
randomHexaNumberGenerator();

//18
let userIdGenerator = () => {
  let id = "";
  for (let i = 0; i < 7; i++) {
    r = Math.round(Math.random() * (charset.length - 1));
    id += charset[r];
  }
  console.log(id);
};
userIdGenerator();

//Level 3 ***************
//1
//let charNumber = prompt("Enter number of characters: ")
//let ids = prompt("Enter number of ids: ")
function userIdGeneratedByUser() {
  let id = "";
  for (let i = 0; i < charNumber; i++) {}
}

//2
function rgbColorGenerator() {
  let rgb = "";
  for (let i = 0; i < 3; i++) {
    r = Math.round(Math.random() * 255);
    rgb += `${r},`;
  }
  rgb = rgb.slice(0, -1);
  return `(${rgb})`;
}
console.log(rgbColorGenerator());

//3
function arrayOfHexColors() {
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    r = Math.round(Math.random() * 6);
    hex += `${r}`;
  }
  return hex;
}
console.log(arrayOfHexColors());

//4
function arrayOfRgbColors() {
  arr = [];
  for (let i = 0; i < 3; i++) {
    arr.push(Math.round(Math.random() * 255));
    arr.join(",");
  }
  console.log(arr);
}
arrayOfRgbColors();

//5 !!! convertHexaToRgb
function RGBToHex(rgb) {
  // Choose correct separator
  let sep = rgb.indexOf(",") > -1 ? "," : " ";
  // Turn "rgb(r,g,b)" into [r,g,b]
  rgb = rgb.substr(4).split(")")[0].split(sep);

  let r = (+rgb[0]).toString(16),
    g = (+rgb[1]).toString(16),
    b = (+rgb[2]).toString(16);

  if (r.length == 1) r = "0" + r;
  if (g.length == 1) g = "0" + g;
  if (b.length == 1) b = "0" + b;

  return "#" + r + g + b;
}

//6 convertRgbToHexa
function rgbToHex(r, g, b) {
  r = r.toString(16);
  g = g.toString(16);
  b = b.toString(16);

  if (r.length == 1) r = "0" + r;
  if (g.length == 1) g = "0" + g;
  if (b.length == 1) b = "0" + b;

  return "#" + r + g + b;
}
console.log(rgbToHex(172, 68, 09));

//7
function generateColors(type, number) {
  const arr = [];
  if (type === "hexa") {
    for (let i = 0; i < number; i++) {
      arr.push(arrayOfHexColors(`${arr.join(",")}`));
    }
    return arr;
  } else if (type === "rgb") {
    for (let i = 0; i < number; i++) {
      arr.push(rgbColorGenerator(`${arr.join(",")}`));
    }
    return arr;
  } else {
    return "invalid notation";
  }
}
console.log(generateColors("hexa", 4));

//8
var arr1 = ["a", "b", "c", "d", "e", "f", "g", "h"];
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
console.log(shuffleArray(arr1));

//9
function factorialize(num) {
  if (num === 0 || num === 1) return 1;
  for (var i = num - 1; i > 0; i--) {
    num *= i;
  }
  return num;
}
console.log(factorialize(6));

//10
function isEmpty(parameter) {
  if (parameter === "" || parameter === null || parameter === undefined) {
    return "empty";
  } else {
    return "not empty";
  }
}
console.log(isEmpty());

//11 Same with L2 Q14

//12
const arrayExample = [5, 7, 20, 13, 20, 100];
function sumOfArrayItems(array) {
  let sum = 0;

  for (const item of array) {
    if (typeof item !== "number") {
      return "all array items must be number";
    } else {
      sum += item;
    }
  }

  return sum;
}
console.log(sumOfArrayItems(arrayExample));

//13
function average(array) {
  let sum = 0;

  for (const item of array) {
    if (typeof item !== "number") {
      return "all array items must be number";
    } else {
      sum += item;
    }
    average = sum / array.length;
  }

  return average;
}
console.log(average(arrayExample));

//14
function modifyArray(array) {
  if (array.length > 5) {
    array.splice(4, 1, array[4].toUpperCase());
  } else {
    return "Not Found";
  }
  return array;
}
console.log(
  modifyArray(["Avocado", "Tomato", "Potato", "Mango", "Lemon", "Carrot"])
);

//15 !!!
const isPrime = (num) => {
  for (var i = 2; i < num; i++) if (num % i == 0) return false;
  return num >= 2;
};
console.log(isPrime(17));

//16 !!!
function unique(array) {
  array.sort();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i + 1]) {
      console.log("not unique");
    } else {
      console.log("unique");
    }
  }
}
unique(arrayExample);

//17 !!! ternary w/ return? wolf solution?
function checkDataTypes(array) {
  type = [];
  for (const element of array) {
    type.push(typeof element);
  }
  type.sort();
  type[0] === type[type.length - 1]
    ? console.log("same data types")
    : console.log("different data types");
}
checkDataTypes(arrayExample);

//18
function isValidVariable(name) {
  const charset = [
    "$",
    "_",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "r",
    "s",
    "t",
    "u",
    "v",
    "y",
    "z",
    "q",
    "w",
    "x",
  ];

  if (!charset.includes(name[0])) {
    console.log("invalid function name");
  } else {
    console.log("valid function name");
  }
}
isValidVariable("#func");

//19
function uniqueNumbers() {
  const charset = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  let rand = 0;

  for (i = 0; i < 8; i++) {
    rand = Math.round(Math.random() * (charset.length - 1));
    array.push(charset[rand]);
    charset.splice(rand, 1);
  }
  console.log(array);
}
uniqueNumbers();

//20
function reverseCountries(array) {
  const countriesR = [];
  for (let i = array.length - 1; i >= 0; i--) {
    countriesR.push(array[i]);
  }
  console.log(countriesR);
}
reverseCountries(["Turkey", "Germany", "France"]);
