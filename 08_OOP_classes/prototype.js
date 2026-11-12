// let myName = "VIdya        "

// console.log(myName.trim().length)

let myHero = ["thor","hulk"]

let heroPower = {
    thor: "Hammer",
    hulk:"Punch",

    getspiderPower: function(){
        console.log(`Spidy power is ${this.hulk}`);

    }
}

Object.prototype.vidya =  function(){
    console.log(`Vidya is present in all object`);
    
}

Array.prototype.hyVidya = function(){
    console.log(`Says vidya hello`);
    
}
// heroPower.vidya()
// myHero.vidya()
// heroPower.hyVidya()
// myHero.hyVidya()

// Inheritance

const user = {
    name: "chai",
    email: "chai@gmail.com"
}
const Teacher = {
    makeVideo:true
}

const TeachingSupport = {
    isAvailble : false
}

const TAsopport = {
    makeAssiment: "Js is assiment",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user

// modern Syntax

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUserName = "panditji   "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True Length is : ${this.trim().length}`);
    
}

anotherUserName.trueLength()

"vidya".trueLength()
"iceTae".trueLength()