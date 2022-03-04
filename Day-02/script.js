// ******************* LEVEL 1 *********************

let challenge = '30 Days Of JavaScript'
console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substring(0,2))
console.log(challenge.substring(3))
console.log(challenge.includes("Script"))
console.log(challenge.split())
console.log(challenge.split(" "))

let companies = ('Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon')

let re_place = challenge.replace("JavaScript", "Python");
console.log(re_place)

let char_At = challenge.charAt(15);
console.log(char_At)

let char_CodeAt = challenge.charCodeAt("J");
console.log(char_CodeAt)

let index_Of = challenge.indexOf("a");
console.log(index_Of)

let last_IndexOf = challenge.lastIndexOf("a");
console.log("a")

let because = "You cannot end a sentence with because because because is a conjunction"
let find_because = because.indexOf("because")
console.log(find_because)

let find_lastbecause = because.lastIndexOf("because");
console.log(find_lastbecause)

let find_because2 = because.search("because");
console.log(find_because2)

let trim = challenge.trim();
console.log(trim)

let startWith = challenge.startsWith("30");
console.log(startWith)

let endWith = challenge.endsWith("t");
console.log(endWith)

let find_a = challenge.match("ain");
console.log(find_a)

let text1 = "30 Days "
let text2 = "Of JavaScript"
console.log(text1.concat(text2))

console.log(challenge.repeat(2))

//*********************** LEVEL 2 ***************************

let statement = "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
console.log(statement)

let quote = "\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\""
console.log(quote)



if (10 === '10') {
    console.log("not equal")
} else {
    console.log(10 === ~~'10')
}

if ('9.8' === 10) {
    console.log("not equal")
} else {
    console.log(Math.round('9.8') === 10)
}

console.log("python".includes("on") && "jargon".includes("on")) 

let sentence = "I hope this course is not full of jargon"
console.log(sentence.includes("jargon"))

console.log(Math.round(Math.random()*100))
console.log(Math.round(Math.random()*50 +50))
console.log(Math.round(Math.random()*200 + 55 ))

let string = "JavaScript"
console.log(Math.round(Math.random()*(string.length-1)))

console.log(`
    1 1 1 1 1
    2 1 2 4 8
    3 1 3 9 27
    4 1 4 16 64
    5 1 5 25 125`)

let x = 'You cannot end a sentence with because because because is a conjunction'
let first = (x.substring(0, (x.indexOf("b")-1)));
let last = (x.substring(x.lastIndexOf("e")+1, x.length));
console.log(first.concat(last))
    
//*********************** LEVEL 3 ***************************

const regex = /love/gi;
const str = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(str.match(regex));

let regex2 = /because/g;
let sameWordsInText = 'You cannot end a sentence with because because because is a conjunction'
console.log(sameWordsInText.match(regex2));

let regex3 = /([%@&#$])/g;
let cleanSentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log(cleanSentence.replace(regex3,""))

let income = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.".match(/\d{1,}/g)
let total_income = parseInt(income[0]*12) + parseInt(income[1]) + parseInt(income[2]*12)
console.log(total_income)