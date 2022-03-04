const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const mernStack = ["MongoDB", "Express", "React", "Node"];

// LEVEL 1 *********

//1
for (i = 0; i <= 10; i++) {
  console.log(i);
}

let x = 0;
while (x <= 10) {
  console.log(x);
  x++;
}

let y = 0;
do {
  console.log(y);
  y++;
} while (y <= 10);

//2
for (a = 10; a >= 0; a--) {
  console.log(a);
}

let s = 10;
while (s >= 0) {
  console.log(s);
  s--;
}

let d = 10;
do {
  console.log(d);
  d--;
} while (d >= 0);

//3
let n = 5;
for (g = 0; g <= n; g++) {
  console.log(g);
}

//4
for (z = 0; z <= 7; z++) {
  console.log("#".repeat(z));
}

//5
for (m = 0; m <= 10; m++) {
  console.log(`${m} x ${m} = ${m ** 2}`);
}

//6
for (t = 0; t <= 10; t++) {
  console.log(`${t} ${t ** 2} ${t ** 3}`);
}

//7
const arrEven = [];
for (even = 0; even <= 100; even++) {
  if (even % 2 == 0) {
    arrEven.push(even);
  }
}
console.log(arrEven);

//8
const arrOdd = [];
for (odd = 0; odd <= 100; odd++) {
  if (odd % 2 != 0) {
    arrOdd.push(odd);
  }
}
console.log(arrOdd);

//9

//10
let sum = 0;
for (num = 0; num <= 100; num++) {
  sum += num;
}
console.log(`The sum of all numbers from 0 to 100 is ${sum}`);

//11
let sumEven = 0;
for (i = 0; i < arrEven.length; i++) {
  sumEven += arrEven[i];
}

let sumOdd = sum - sumEven;
console.log(
  `The sum of all evens from 0 to 100 is ${sumEven}. And the sum of all odds from 0 to 100 is ${sumOdd}.`
);

//12
let arrEvenOdd = [sumEven, sumOdd];
console.log(arrEvenOdd);

//13
let randArr = [];
for (i = 0; i < 5; i++) {
  randArr.push(Math.floor(Math.random() * 10));
}
console.log(randArr);

//14
let arrDifNumb = [];
for (i = 0; i <= 5; i++) {
  random = Math.floor(Math.random() * 10);
  arrDifNumb.includes(random) ? arrDifNumb : arrDifNumb.push(random);
}
console.log(arrDifNumb);

//15
const alphNumb = [
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
];
let rID = "";
for (i = 0; i < 6; i++) {
  let r = Math.floor(Math.random() * (alphNumb.length - 1));
  rID += alphNumb[r];
}
console.log(rID);

// LEVEL 2 *********************

//1
let rID2 = "";
let ranLength = Math.round(Math.random() * 25);
for (i = 0; i <= ranLength; i++) {
  let r = Math.round(Math.random() * (alphNumb.length - 1));
  rID2 += alphNumb[r];
}
console.log(rID2);

//2
let hex = "#";
for (i = 0; i < 6; i++) {
  let r = Math.round(Math.random() * (alphNumb.length - 1));
  hex += alphNumb[r];
}
console.log(hex);

//3
let rgb = "";
for (i = 0; i < 3; i++) {
  let r = Math.round(Math.random() * 255);
  rgb += `${r},`;
}
rgb = rgb.slice(0, -1);
console.log(`(${rgb})`);

//4
let countUpper = [];
for (i = 0; i < countries.length; i++) {
  countUpper[i] = countries[i].toUpperCase();
}
console.log(countUpper);

//5
let lengthCount = [];
for (i = 0; i < countries.length; i++) {
  x = countries[i].length;
  lengthCount.push(x);
}
console.log(lengthCount);

//6
let countArr = [];
for (i = 0; i < countries.length; i++) {
  countArr.push([countries[i], countUpper[i].slice(0,3), countries[i].length])
}
console.log(countArr);

//7
let landArr = [];
for (i = 0; i < countries.length; i++) {
  if (countries[i].includes("land")) {
    landArr.push(countries[i]);
  } else {
    landArr
  }
}
landArr.length > 0 ? console.log(landArr) : console.log("All these countries are without land")


//8
let iaArr = [];
for (i = 0; i < countries.length; i++) {
  countries[i].substring(countries[i].length - 2) == "ia" ? iaArr.push(countries[i]) : iaArr
}
(iaArr.length > 0) ? console.log(iaArr) : console.log("These are countries ends without ia")

//9
let bigLength = lengthCount.sort().slice(-1)
for (i = 0; i < countries.length; i++) {
  if (countries[i].length == bigLength) {
    console.log(countries[i])
  } 
} 

//10
let fiveChar = []
for (i = 0; i < countries.length; i++) {
  countries[i].length == 5 ? fiveChar.push(countries[i]) : fiveChar
}
console.log(fiveChar)

//11
j = 0
e = ""
for (i = 0; i <= webTechs.length - 1; i++) {
    if (j < webTechs[i].length) {
        j = webTechs[i].length
        e = webTechs[i]
    }
}
console.log(e)

//12
let arrWeb = []
for (i = 0; i < webTechs.length; i++) {
  arrWeb.push([webTechs[i], webTechs[i].length])
}
console.log(arrWeb)

//13
z = ""
for (i = 0; i < mernStack.length; i++) {
    z += mernStack[i].slice(0, 1)
}
console.log(z)

//14
for (const tech of webTechs) {
  console.log(tech)
}

//15
let fruits = ['banana', 'orange', 'mango', 'lemon']
let fl = fruits.length-1;
for (i = 0; i <= fl/2; i++) {
  let temp = fruits[i];
  fruits[i] = fruits[fl-i];
  fruits[fl-i] = temp;
}
console.log(fruits);

//16
const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]

for (const elements of fullStack) {
  for (const inside of elements) {
    console.log(inside)
  }
}


// LEVEL 3 *********************

//1
countriesCopy = countries.slice()
console.log(countriesCopy)

//2
const sortedCountries = countriesCopy.sort()
console.log(sortedCountries)

//3
webTechs.sort()
mernStack.sort()

console.log(webTechs, mernStack)

//4

countries2 = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombi',
  'Comoros',
  'Congo (Brazzaville)',
  'Congo',
  'Costa Rica',
  "Cote d'Ivoire",
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor (Timor Timur)',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia, The',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Korea, North',
  'Korea, South',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia and Montenegro',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe'
]

let landArr2 = [];
for (i = 0; i < countries2.length; i++) {
  if (countries2[i].includes("land")) {
    landArr2.push(countries2[i]);
  } 
}
let land = landArr2.length > 0 ? landArr : "All these countries are without land"
console.log(land)

//5
j2 = 0
e2 = ""
for (i = 0; i < countries2.length; i++) {
    if (j2 < countries2[i].length) {
        j2 = countries2[i].length
        e2 = countries2[i]
    }
}
console.log(e2)

//6
let landArray2 = [];
for (i = 0; i < countries2.length; i++) {
  if (countries2[i].includes("land")) {
    landArray2.push(countries2[i]);
  } else {
    landArr
  }
}
landArray2.length > 0 ? console.log(landArray2) : console.log("All these countries are without land")

//7
let fourLength = []
for (i = 0; i < countries2.length; i++) {
  countries2[i].length == 4 ? fourLength.push(countries2[i]) : fourLength
}
console.log(fourLength)

//8
let spacedCountry = []
for (i = 0; i < countries2.length; i++) {
  countries2[i].includes(" ") ? spacedCountry.push(countries2[i]) : spacedCountry
}
console.log(spacedCountry)

//9
let revCapCountry = []
for (i = (countries2.length-1); i >= 0; i--) {
  revCapCountry.push(countries2[i].toUpperCase())
}
console.log(revCapCountry)