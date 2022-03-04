// Level 1 *************

const array = Array()
console.log(array)

const newArray = ["a", "b", "c", "d", "e", "f", "j"]
console.log(newArray.length)

let first = newArray[0]
console.log(first)

newArray.length % 2 ? console.log(newArray[Math.floor(newArray.length/2)]) : console.log("no mid element")

let last = newArray[newArray.length-1]
console.log(last)

const mixedDataTypes = ["hello", 1, null, "", 3.14, undefined]

const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
console.log(itCompanies)
console.log(itCompanies.length)
console.log(itCompanies[0], itCompanies[Math.floor(itCompanies.length/2)], itCompanies[itCompanies.length-1])

console.log(itCompanies.join(" "))

console.log(itCompanies.join(' ').toUpperCase().split(' '))


let lastComp = itCompanies.pop()
console.log(`${itCompanies.join(", ")} and ${lastComp} are big IT companies`)
itCompanies.push("Amazon")

itCompanies.includes("Google") ? console.log("company exists") : console.log("company is not found")

// 14 

console.log(itCompanies.sort())

console.log(itCompanies.reverse()) 

console.log(itCompanies.slice(0, 3))
console.log(itCompanies.slice(-3))
let midEl = Math.floor(itCompanies.length/2)
console.log(itCompanies.slice(midEl, midEl+1))

itCompanies.shift()
console.log(itCompanies)

let lenComp = itCompanies.length
lenComp % 2 == 0 ? console.log(itCompanies.splice(lenComp/2-1, 2)) : console.log(itCompanies.splice(lenComp/2, 1))
console.log(itCompanies)

itCompanies.pop()
console.log(itCompanies)

itCompanies.length = 0
console.log(itCompanies)

// Level 2 *****************

// countries added in html

let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const re = /\w+/gm
console.log(text.match(re))
console.log(text.match(re).length)

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.includes('Meat') ? console.log(shoppingCart) : console.log(shoppingCart.unshift('Meat'))

shoppingCart.includes('Sugar') ? console.log(shoppingCart) : console.log(shoppingCart.push('Sugar'))

let allergic = true
let ind = shoppingCart.indexOf("Honey")
allergic == 1 ? shoppingCart.splice(ind, 1) : shoppingCart
console.log(shoppingCart)

const indTea = shoppingCart.indexOf("Tea")
indTea !== -1 ? shoppingCart[indTea] = "Green Tea" : shoppingCart
console.log(shoppingCart)

countries.includes("Ethiopia") == 1 ? console.log("ETHIOPIA") : countries.push("Ethiopia")
console.log(countries)

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

let fullStack = [...frontEnd, ...backEnd] // frontEnd.concat(backEnd)
console.log(fullStack)

// Level 3 ***********

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
console.log(ages.sort())
let min = ages[0]
console.log(min)
let max = ages[ages.length-1]
console.log(max)

let l = ages.length
l % 2 == 0 ? console.log((ages[l/2-1]+ages[l/2])/2) : console.log(ages[Math.floor(l/2)])

//Find the average age(all items divided by number of items)

console.log(Math.abs(max - min))

//Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array

let le = Math.floor(countries.length/2)
countries.length % 2 ? console.log(countries[le-1], countries[le]) : console.log(countries[le-1])

if (countries.length % 2 == 0) {
    console.log(countries.slice(0, le)) 
    console.log(countries.slice(le))
} else {
    console.log(countries.slice(0, le+1))
    console.log(countries.slice(le+1))
}