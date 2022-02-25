// Level 1 **************

let firstName = "Jane"
let lastName = "Doe"
let country = "Ireland"
let city = "Galway"
let age = 30
let isMarried = "single till die"

console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarried)

typeof 10 === typeof "10" ? console.log("equal") : console.log("not equal")

parseInt('9.8') == 10 ? console.log("equal") : console.log("not equal")

// Truthy Values
console.log(
    5,
    "sunny",
    7 > 4
    )

// Falsy Values
console.log(
    0,
    "",
    7 < 4
)

console.log(
    4 > 3,
    4 >= 3,
    4 < 3,
    4 <= 3,
    4 == 4,
    4 === 4,
    4 != 4,
    4 !== 4,
    4 != '4',
    4 == '4',
    4 === '4',
    "python".length != "jargon".length,
)

console.log(
    4 > 3 && 10 < 12,
    4 > 3 && 10 > 12,
    4 > 3 || 10 < 12,
    4 > 3 || 10 > 12,
    !(4 > 3),
    !(4 < 3),
    !(false),
    !(4 > 3 && 10 < 12),
    !(4 > 3 && 10 > 12),
    !(4 === '4'),
    "dragon".includes("on") && !"python".includes("on")
    )

let now = new Date;
    console.log(
        now.getFullYear(),
        now.getMonth() + 1,
        now.getDate(),
        now.getHours(),
        now.getMinutes(),
        now.getTime()
    )

// Level 2 ************************

/* let base = prompt("Write base: ")
let height = prompt("Write height: ")
let area = base*height/2
alert(`Area = ${area}`)
 */

/* 
let a = prompt("Enter side a: ")
let b = prompt("Enter side b: ")
let c = prompt("Enter side c: ")
let perimeter = parseInt(a) + parseInt(b) + parseInt(c)
alert(`The perimeter of the triangle is ${perimeter}`) 
 */

/* let length = prompt("Enter length: ")
let width = prompt("Enter width: ")
let area = length * width
let perimeter = 2 * (parseInt(length) + parseInt(width))
alert(`Area of rectangle: ${area}`)
alert(`Perimeter of rectangle: ${perimeter}`) */

/* let r = prompt("Enter radius of the circle: ")
const pi = 3.14
let area = pi * r * r
let circumference = 2 * pi * r

alert(`Area of the circle is ${area} and circumference is ${circumference}`)
 */


let equation = "y = 2x -2"
let slope = 2/-1 // x katsayısı bölü aynı taraflı y katsayısı eğimi verir
console.log(slope)

let x1 = 2, 
    x2 = 6,
    y1 = 2,
    y2 = 10
            
x = x2 - x1
y = y2-y1
let slope2 = (y / x)
console.log(slope2)

console.log(slope/slope2)

/* let hours = prompt("Enter hours: ")
let ratePerHour = prompt("Enter rate per hour: ")
let earning = hours * ratePerHour
alert(`Your weakly earning is ${earning}`) */

/* let yourName = prompt("Enter your name: ")
yourName.length > 7 ? console.log("your name is long") : console.log("your name is short") */

let firstNamee = "Jane"
let lastNamee = "Doe"
let compareNames = firstNamee.length > lastNamee.length ? `Your first name ${firstNamee} longer than your family name, ${lastNamee}` : `Your first name ${firstNamee} shorter than your family name, ${lastNamee}` 
console.log(compareNames)

let myAge = 250
let yourAge = 25
console.log(`I am ${myAge - yourAge} years older than you`)

/* let birthYear = prompt("Enter birth year: ")
let control = new Date().getFullYear() - birthYear
let result = control >= 18 ? `You are ${control}. You are old enough to drive` : `You are ${control}. You will be allowed to drive after ${18 - control} years.`
alert(result) */

/* let userYears = prompt("Enter number of years you live: ")
alert(`You lived ${3153600 * userYears} seconds.`)
 */

let today = new Date(),
    year = today.getFullYear(),
    month = today.getMonth() + 1 ,
    day = today.getDate(),
    hour = today.getHours()
    minutes = today.getMinutes()

month = month.toString().length < 2 ? "0" + month : month
day = day.toString().length < 2 ? "0" + day : day
hour = hour.toString().length < 2 ? "0" + hour : hour
minutes = minutes.toString().length < 2 ? "0" + minutes : minutes

console.log(
    `i. ${year}-${month}-${day} ${hour}:${minutes}\nii. ${day}-${month}-${year} ${hour}:${minutes}\niii. ${day}/${month}/${year} ${hour}:${minutes}`
)

// Level 3 *****************
console.log(`${year}-${month}-${day} ${hour}:${minutes}`)