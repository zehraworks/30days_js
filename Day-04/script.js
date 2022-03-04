
// Level 1 **********

/* let birthYear = prompt("Enter birth year: ")
let control = new Date().getFullYear() - birthYear
let result = control >= 18 ? `You are ${control}. You are old enough to drive` : `You are left with ${18 - control} years to drive.`
alert(result) 
 */
/* 
let myAge = 25
let yourAge = prompt("Enter your age: ")
if (myAge > yourAge) { 
    console.log(`I am ${myAge - yourAge} years older than you.`)
} else if (myAge < yourAge) { 
    console.log(`You are ${yourAge - myAge} years older than me`)
} else { 
    console.log(`We are ${myAge}, in the same age.`)
}
 */

let a = 4
let b = 3
if (a > b) {
    console.log(`${a} is greater than ${b}`)
} else if (a < b) {
    console.log(`${b} is greater than ${a}`)
} else {
    console.log(`${a} and ${b} are equal`)
}

let greaterOne = a > b ? `${a} is greater than ${b}` : `${b} is greater than ${a}`
console.log(greaterOne)

/* let number = prompt("Enter a number: ")
let divide = number % 2
if (divide == 0) {
    console.log(`${number} is an even number`)
} else {
    console.log(`${number} is an odd number`)
} */

// Level 2 ****************
/* 
let score = prompt("Enter grade of a student: ")
if (score > 89 && score <=100) {
    console.log("A")
} else if (score >70 && score <= 89) {
    console.log("B")
} else if (score >60 && score <= 69) {
    console.log("C")
} else if (score >50 && score <= 59) {
    console.log("D")
} else if (score >0 && score <= 49) {
    console.log("F")
} else {
    console.log("not a valid grade")
} */

let weather = "march"
switch (weather) {
    case "september" || "october" || "november" :
        console.log("Autumn")
        break
    case "december" || "january" || "february" :
        console.log("Winter")
        break
    case "march" || "april" || "may" :
        console.log("Spring")
        break
    case "june" || "july" || "august" :
        console.log("Summer")
        break
    default:
        console.log("wrong answer")
}

/* let day = prompt("Enter a day: ")
let dayCapitalized = day.charAt(0).toUpperCase() + day.slice(1).toLowerCase();

switch (dayCapitalized) {
    case "Saturday" || "Sunday" :
        console.log(`${dayCapitalized} is a weekend`)
        break
    case "Monday" || "Tuesday" || "Wednesday" || "Thursday" || "Friday" :
        console.log(`${dayCapitalized} is a weekday`)
        break
    default :
        console.log("not a day")
}
*/


// Level 3 **************

let year = prompt("Enter the year: ")
let leapYear = year % 4
let month = prompt("Enter the month: ") 
let monthCapitalized = month.charAt(0).toUpperCase() + month.slice(1).toLowerCase();

switch (monthCapitalized) {
    case "January" || "March" || "May" || "July" || "August" || "October" || "December" :
        console.log(`${monthCapitalized} has 31 days`)
        break
    case "April" || "June" || "September" || "November" :
        console.log(`${monthCapitalized} has 30 days`)
        break
    case "February" : 
        leapYear == 0
        ? console.log(`${monthCapitalized} has 29 days`)
        : console.log(`${monthCapitalized} has 28 days`)
        break
    default :
        console.log("not a month")
}



