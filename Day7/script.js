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
areaOfCircle = (r) => (π = 3.14) * r * r;
console.log(areaOfCircle(2))

//8
circumOfCircle = (r) => {
    const π = 3.14
    return 2 * π * r;
}
console.log(circumOfCircle(5))

//9
density = (mass, volume) => mass / volume;
console.log(density(20, 5))

//10
speed = (distance, time) => distance / time;
console.log(speed(10, 2))

//11
weight = (mass, gravity) => mass * gravity;
console.log(weight(10, 3))

//12
convertCelciusToFahrenheit = (oC) => (oC * 9/5) + 32
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



