const name = "vidya"
const repoCount = 5

// console.log(name + repoCount + " Value")

console.log(`Hello my name is ${name} and my repo Count is ${repoCount} `)


const gameName = new String( "Vidya-sagar-shukla")
// console.log(gameName.__proto__)

// console.log(gameName.toUpperCase())
// console.log(gameName.length)

// console.log(gameName.charAt("6"))
// console.log(gameName.charAt("4"))
// console.log(gameName.indexOf("a","a","a"))

 const newString = gameName.substring(0,5)
 console.log(newString)

 const anotherString = gameName.slice(-8,4)
console.log(anotherString)

const newStringOne = "    Vidya   "
 console.log(newStringOne)
 console.log(newStringOne.trim())

 const url = "https://vidya.com/vidya%20shukla"
 console.log(url.replace("%20","-"))

console.log(url.includes("sagar"))

console.log(gameName.split("-"))