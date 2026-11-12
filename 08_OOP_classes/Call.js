function setUsername(username){
    //  cpmplex DB calls
    this.username = username
    console.log("called");
    
}

function createUser(username,email,password){
    setUsername.call(this,username)

    this.email = email
    this.passord = password
}

const chai = new createUser("chai","chia@gmail.com","65432")
console.log(chai)