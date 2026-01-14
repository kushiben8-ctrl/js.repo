console.log("khushi")
const promiseOne = new Promise(function (resolve, reject) {
    resolve()
    setTimeout(function () {
        console.log('async task is complete');
        // resolve()

    }, 1000)

})

promiseOne.then(function () {
    console.log("PROMISE CONSUME")
})



// //second promise
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("task 2 ")
        resolve()
    }, 1000)

}).then(function () {
    console.log("resolved async two");

})


const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ user: "khushi", emial: "khushi@gmail.com" })
    }, 1000)
})


promiseThree.then(function (user) {
    console.log(user)
})




const Four = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false
        if (!error) {
            resolve({ username: "kanak", passward: "1233433434" })
        } else {
            reject('Error : something went wrong ')
        }
    }, 1000)
})

Four
.then((user) => {
    console.log(user)
    return user.username
})
.then((username) => {
    console.log(username)
})
.catch(function (error) {
    console.log(error)
})
.finally(()=>{
    console.log(
        "THE PROMISE EITHER RESOLVED OR REJECTED")
})




const promiseFive = new Promise(function(resolve, reject ){
    setTimeout(function () {
        let error = false
        if (!error) {
            resolve({ username: "java script ", passward: "1233433434" })
        } else {
            reject('Error : Java script went wrong ')
        }
    }, 1000)
})


