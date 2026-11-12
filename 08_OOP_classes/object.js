function multiplyBy5(num) {
    this.num = num
    return num * 5
}

multiplyBy5.power = 2

console.log(multiplyBy5(5))
console.log(multiplyBy5.power)
console.log(multiplyBy5.prototype)

function createUser(username, score) {
    this.username = username
    this.score = score
}

createUser.prototype.increment = function () {
    this.score++
}
createUser.prototype.printMe = function () {
    console.log(`price is ${this.score}`)
}
const chai = new createUser("Chai", 25)
const tea = new createUser("tea", 250)


tea.printMe()

/*
Here's what happens behind th scenes when the new keyword
is used:

A new object is created: The New keyword initites the creation of a new JavaScript object

A prototype is linked: tje newly created object gets linked to the prototype property of the 
constructor function. This means that is has access to properties and methods defined on the constructor's
prototyope.

The Constructor is called: The Constructor function is called with the specified arguments and 
this is bound to the newly crered object. If ni explicit return value is specified from the constructor 
.JavaScript assumes this, the newly created object, to be the intended return value.

This new object is returned: After the constructor function has been called, if it doesn't
return a non- primitive value (object,array, function, etc.), the newly created object
 is returned.

*/