// console.log("khushi")
// const promiseOne = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('async task is complete');
//         resolve()
        
//     },1000)

// })

// promiseOne.then(function(){
// console.log("PROMISE CONSUME")
// })



// //second promise
// new Promise (function(resolve, reject ){
//     setTimeout(function(){
// console.log("task 2 ")
//   resolve()
//     }, 1000)
  
// }).then(function(){
//     console.log("resolved async two");
    
// })


// const promiseThree = new Promise (function(resolve, reject){
// setTimeout(function(){
// resolve({username: "chai", email: "example @ .com"})
// },1000)
// })


// promiseThree.then(function(user){
// console.log(user)
// })

// const promise4 = new Promise(function(){
//   setTimeout(function(){
//     let error = false
//     if(!error ){
//         resolve({username:"hitesh", passward: "12343"})
//     }
//     else {
//         reject('Error')
//     }
//   })
// })
// const promiseFour = new Promise(function(resolve, reject){
// setTimeout(function(){
// let error = false;
// if(!error){
//     resolve({username:"khushi", passward:  "123"})
// } else {
//     reject('ERROR: Something went wrong ')
// }
// }, 1000)
// })
//  promiseFour.then((user)=> {
//     console.log(user)
//     return user.username
// }).finally(()=>console.log("finally"))



// .catch(function(error){
//     console.log(error)
// })


// fetch('https://api.github.com/users/kushiben8-ctrl')
// .then((response)=>
// {
//     return response.json()

// })
// .then((data)=> {
//     console.log(data);

// })
// .catch((error)=> console.log(error))
