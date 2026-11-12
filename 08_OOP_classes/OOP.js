
const user = {
    username: "Vidya",
    loginCount: 8,
    signedIn: true,

    userDetails: function () {
        //         // console.log("Got user details from database")

        //         // console.log(`Username:${this.username}`);
        //         console.log(this);


    }
}

// console.log(user.userDetails())
// console.log(this);


// const promiseOne = new Promise()

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;


    this.greeting = function(){
        console.log(`Welocome ${this.username}`);
        
    }
    return this
}

const userOne = new User("vidya", 321, true)
const userTwo = new User("sagar", 41, false)
console.log(userOne);
console.log(userTwo);
