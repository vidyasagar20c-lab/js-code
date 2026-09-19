"use Strick"; //treat all JS code as newer varsion

// alert(3+3) // we are using nodejs,not browser

let name = "vidya sagar"
let age = 18
let isLoggedIn = true
let state = null

// number => 2 to power 53
//bigint
//string => ""
//boolean => true/false
//null => standalone value
//undefined => 
// smyabol => unique

// console.log(typeof null) // object
// console.log(typeof undefined) // undefined

// primitive 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// const score = 100
// const scoreValue = 100.3
//  const isLogged = false

 const outsideTemp = null
//  let userEmail;

//  const id = Symbol("123")
//   const anotherId = Symbol("123")
    // const bigNumber = 65464785936859689789563796597749436
  const bigNumber = 65464785936859689789563796597749436n


//   console.table(id === anotherId)
// referance (Non primitive)

// Array, Objects, Functions 

const heros = ["shaktiman","naagraj", "doga"];
let myObj={
    name : "vidya",
    age: 22
}

const myfunction = function(){
    console.log("Hello world")
}
console.log(typeof outsideTemp)

// https://262.ecma-international.org/5.1/#sec=11.4.3



// +++++++++++++++++++++++++++++++++++++++++++++++++

//Stack(Primitive), Heap (Non-Primitive)

// let myname = "Vidya sagar "
// let anotheName = myname
// anotheName = "Ishwar chandra"
// console.log(anotheName)
// console.log(myname)


// let userOne = {
//     email: "user@google.com",
//     upi : "user@sbi"
// }

// let usertwo = userOne
// usertwo.email = "user21@google.com"

// console.log(userOne)