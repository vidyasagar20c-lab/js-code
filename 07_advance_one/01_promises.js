

const promiseOne = new Promise(function (resolve, reject) {
    // Do an async task 
    // DB calls, cryptography, network 
    setTimeout(function () {
        console.log('Async task is complete');
        resolve()

    }, 1000)
})

promiseOne.then(function () {
    console.log("Promise consumed");

})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2")
        resolve()
    }, 1000)
}).then(function () {
    console.log("Async 2 resolved")
})

const promisethree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "Vidya Sagar", email: "shukla2004official@gamil.com" })
    }, 5000)
})
promisethree.then(function (user) {
    console.log(user);

})

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "Vidya Sagar", password: "7654" })
        } else {
            reject('ERROR: somethiing went wrong')
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user)
    return user.username
})
    .then((uersname) => {
        console.log(uersname);
    })
    .catch(function (error) {
        console.log(error)
    })
    .finally(() => console.log("The promises  is either resolvel or rejected"))

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "JS LOVER", password: "4567" })
        } else {
            reject('ERROR: Js went wrong')
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error);

    }
}

consumePromiseFive()


// async function getAllUsers() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users/")
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log("E:", error);

//     }
// }

// getAllUsers()

fetch('https://api.github.com/users/vidyasagar20c-lab')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=>console.log(error));
