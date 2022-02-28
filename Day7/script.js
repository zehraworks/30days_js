// Level 1 ***************
//1
function fullName () {
    console.log("Jane Doe")
}
fullName()


//2
function fullName2 (firstName, lastName) {
    let fullName = firstName + " " + lastName
    console.log(fullName)
}
fullName2("Jane", "Doe")

//3
function addNumbers (param1, param2) {
    let sum = param1 + param2
    return sum
}
console.log(addNumbers(3, 5))

//4
function areaOfRectangle (lenght, widht) {
    let area = lenght * widht
    console.log(area)
}
areaOfRectangle(3,5)

//5
const perimeter = function(lenght, widht) {
    return 2 * (lenght + widht)
}
console.log(perimeter(3, 5))

//6
const volumeOfRectPrism = function(length, width, height) {
    let volume = length * width * height
    return volume
}
console.log(volumeOfRectPrism(3, 5, 7))

//7
let areaOfCircle = (r) => (π = 3.14) * r * r;
console.log(areaOfCircle(2))

//8
let circumOfCircle = (r) => {
    const π = 3.14
    return 2 * π * r;
}
console.log(circumOfCircle(5))

//9
let density = (mass, volume) => mass / volume;
console.log(density(20, 5))

//10
let speed = (distance, time) => distance / time;
console.log(speed(10, 2))

//11
let weight = (mass, gravity) => mass * gravity;
console.log(weight(10, 3))

//12
let convertCelciusToFahrenheit = (oC) => (oC * 9/5) + 32
console.log(convertCelciusToFahrenheit(20))

//13
const bmi = function (weight, height) {
   let bmi =  weight / height ** 2 
    if ( bmi < 18.5 ) {
        console.log("Underweight")
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        console.log("Normal weight")
    } else if (bmi >= 25 && bmi <= 29.9) {
        console.log("Overweight")
    } else if (bmi >= 30) {
        console.log("Obese")
    }
}
bmi(100, 2)

//14
function checkSeason(month) {
    if (month == 12 || month == 1 || month == 2) {
        console.log("Winter")
    } else if (month == 3 || month == 4 || month == 5) {
        console.log("Spring")
    } else if (month == 6 || month == 7 || month == 8) {
        console.log("Summer")
    } else if (month == 9 || month == 10 || month == 11) {
        console.log("Autumn")
    } else {
        console.log("Please enter valid month number!")
    }
}
checkSeason(3)

//15
findMax = (param1, param2, param3) => Math.max(param1, param2, param3)
console.log(findMax(140, -502, 73))

//Level 2 *****************
//1 Passed

//2 Passed

//3
function printArray (array) {
    for (const value of array) {
        console.log(value)
    }    
}
let arr = [1, 2, 3]
printArray(arr)

//4
function showDateTime () {
    let today = new Date();
    year = today.getFullYear(),
    month = today.getMonth() + 1 ,
    day = today.getDate(),
    hour = today.getHours(),
    minutes = today.getMinutes()

month = month.toString().length < 2 ? "0" + month : month
day = day.toString().length < 2 ? "0" + day : day
hour = hour.toString().length < 2 ? "0" + hour : hour
minutes = minutes.toString().length < 2 ? "0" + minutes : minutes
    
console.log(`${day}/${month}/${year} ${hour}:${minutes}`)
}
showDateTime()

//5
swapValues = (x, y) => console.log(`x=${y} y=${x}`)
swapValues(3,4)

//6
function reverseArray (array) {
    arrRev = []
    for (let i = array.length-1; i >= 0; i--) {
        arrRev.push(array[i]) 
    }
    console.log(arrRev)
}
let x = ["a", "s", "d", "f", "g"]
reverseArray(x)

//7
const capitalizedArray = function (array) {
    let arrCap = []
    for (let i = 0; i < array.length; i ++) {
        arrCap.push(array[i].toUpperCase())
    }
    return arrCap
}
console.log(capitalizedArray(x))

//8
array = []
let addItem = (array, item) => array.push(item)

addItem(array, "q")
addItem(array, "w")
addItem(array, "e")
console.log(array)

//9
let removeItem = (array, index) => {
    if (index > -1) {
        array.splice(index, 1)
    }
    return array
}
console.log(removeItem(x, 3))

//10
let sumOfNumbers = (number1, number2) => {
    let sum = 0
    for (let i = number1; i <= number2; i++) {
        sum += i
    }
    console.log(sum)
}
sumOfNumbers(3, 20)

//11
let sumOfOdd = (odd1, odd2) => {
    let oddSum = 0
    for (let i = odd1; i <= odd2; i++) {
        if ( i % 2 != 0 ) {
            oddSum += i
        }
    }
    console.log(oddSum)
}
sumOfOdd(3,20)

//12
let sumOfEven = (even1, even2) => {
    let evenSum = 0
    for (let i = even1; i <= even2; i++) {
        if ( i % 2 == 0 ) {
            evenSum += i
        }
    }
    console.log(evenSum)
}
sumOfEven(3,20)

//13
let evensAndOdds = (int) => {
    if (int > 0) {
        let even = Math.floor(int / 2)
        let odd = int - even
        console.log(`The number of evens are ${even+1}.\nThe number of odds are ${odd}.`)
    }
}
evensAndOdds(100)

//14
function sum() {
    let sum = 0
    for (const element of arguments) {
        sum += element
    }
    console.log(sum)
}
sum(3, 4, 6, 7)

//15 
let randomUserIP = () => {
    const array = []
    for (let i = 0; i < 4; i++) {
        array.push(Math.round(Math.random() * 255))
    }
    console.log(array.join('.'))
}
randomUserIP()

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
    "Z"
]
function randomMacAddress() {
    const array = []
    for (let i = 0; i < 8; i++) {
        let item = ""
        for (let r = 0; r < 2; r++) {
            let random = Math.round(Math.random() * (charset.length-1))
            item += charset[random]
        }
        array.push(item)
    }
    console.log(array.join(":"))
}
randomMacAddress()

//17
let randomHexaNumberGenerator = () => {
    let hex = "#";
    for (let i = 0; i < 6; i++) {
        let r = Math.round(Math.random() * (charset.indexOf("9")));
        hex += charset[r];
    }
    console.log(hex);
}
randomHexaNumberGenerator()

//18
let userIdGenerator = () => {
    let id = "";
    for (let i = 0; i < 7; i++) {
        r = Math.round(Math.random() * (charset.length-1))
        id += charset[r];
    }
    console.log(id)
}
userIdGenerator()
