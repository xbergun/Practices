console.log("-------------EXERCİSES DAY2 ----------------")

const exercise = "30 Days Of Javascript"

console.log(exercise)

console.log(exercise.length)

const toUpper = exercise.toUpperCase()
const toLower = exercise.toLowerCase()

console.log(toUpper + " : " + toLower)

const substrFirstWord = exercise.substring(3,7)
console.log(substrFirstWord)

const subStrSlice = exercise.substring()


const includesIn = exercise.includes("Script")
console.log(includesIn)

let arraySplit = exercise.split(" ");
console.log(arraySplit)

let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';

let companiesSplit = companies.split(",");
console.log(companiesSplit)

let changeReplace = exercise.replace("Javascript", "Python")
console.log(changeReplace)

let charAt = exercise.charAt(15)
console.log(charAt)

let charCodeAt = exercise.charCodeAt("J")
console.log(charCodeAt)

let indexOf = exercise.indexOf("a")
console.log(indexOf)

let lastIndexOf = exercise.lastIndexOf("a")
console.log(lastIndexOf)


let because = "You cannot end a sentence with because because because is a conjunction'";

let becauseIndexOf = because.indexOf("because")
console.log(becauseIndexOf)

let becauselastIndexOf = because.lastIndexOf("because")
console.log(becauselastIndexOf)

let searchBecause = because.search("because")
console.log(searchBecause)


let trimExercise = exercise.trim();
console.log(trimExercise)

let startsWith = exercise.startsWith("30 Days")
console.log(startsWith)

let endsWith = exercise.endsWith("pt")
console.log(endsWith)

let matchall = exercise.match(/a/gi)
console.log(matchall)

let repeat = exercise.repeat(2)
console.log(repeat)

let level2String = "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
console.log(level2String)

let level2String2 = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log(level2String2)


if (typeof 10==typeof 10) {
    console.log("Eşittir")
}else{
    console.log("değildir")
}

if (parseFloat(9.8)==10) {
    console.log("Eşittir")
}
else{
    console.log("DEğildir")
}


let controlString = "I hope this course is not full of jargon."
let control = controlString.includes("jargon")
console.log(control)



let random0to100 = Math.random()*100;
console.log(random0to100)

let random50To100 = Math.random()*50 + 50
console.log(random50To100)

let random0To255 = Math.random()*255
console.log(random0To255)

let randomString = (Math.random()*1e32).toString(36)
console.log(randomString)

