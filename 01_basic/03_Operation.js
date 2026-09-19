let score = true

console.log(typeof score);
console.log(typeof(score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

//"33"=> 33
// 33abc => NaN
//true => 1; false => 0


let isLoggedIn =    1
let booleanIsLogged = Boolean(isLoggedIn)
console.log(booleanIsLogged)
// 1 => true ; 0=> false
// "vidya" => true


let someNumber   =  33

let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)

// **************************Operations*****************


let value = 784587
let negValue = -value

console.log(negValue)

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**4);
console.log(2%3);

let str1 = "hello"
let str2 = "  vidya"
let str3 = str1 +str2
console.log(str3);

console.log("1"+ 2);
console.log(1+ "2");
console.log("1"+ 2 + 2);
console.log(1+ 2 + "2");



console.log(+true)
// console.log(true+)

let num1,num2,num3,num4
num1 = num2 = num3 = num4 = 6+6
console.log(num1)

let gameCounter = 100
++gameCounter
console.log(gameCounter)



console.log(null > 0);
console.log(null >= 0);
console.log(null == 0);
console.log(null <= 0);

console.log(undefined > 0);
console.log(undefined >= 0);
console.log(undefined == 0);
console.log(undefined <= 0);

console.log(NaN > 0);
console.log(NaN >= 0);
console.log(NaN == 0);
console.log(NaN <= 0);

// strict ===
console.log("2"===2);

console.log(null === 0);

console.log(undefined === 0);

console.log(NaN === 0);