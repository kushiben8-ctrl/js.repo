//+++  Global and local scope  +++//


// var c = 300// global scope 

// let a =100
// if (true) {// block scope 
//     let a = 10
//     const b = 20
//     console.log("inner:", a )

// }



// console.log("outer:",a)
// // console.log(b)

// nested scope 

// function one() {
//     const username = "hitesh"

//     function two() {
//         const web = "yt"
//         // console.log(username);
//     }
// console.log(web);
//     two()
// }

// one()




// if (true ){
//     const user = "khushi"
//     if (user === "khushi"){
//         const web = " yt"
// console.log(user + web)
//     }
//     // console.log(web)

// }
// console.log(user)

////++++++++++++++ example +++++++++++++++//

// console.log(addone(5))
// function addone (value){
// return value + 1
// }




// const addTwo  = function(num){
//     return num + 2 
// }
// addTwo(5)

// const user = {
//     username: "hitesh",
//     price: 999,

//     welcomeMessage: function(){
//         // console.log(`${this.username}, welcome to website`)
//     //     console.log(this)
//     }

// }
// user.welcomeMessage()
// user.username ="sam"


// user.welcomeMessage()


// console.log(this)

// function chai (){
//     let username = "hitesh"
// console.log(this.username)
// }

// chai()


// const chai =  () => {
//       let = "hitesh"
//  console.log(this);
// }
// const add =(num1 , num2 )=>{
// return num1 + num2 
// }

// const add =(num1 , num2 )=> num1 + num2 

// const add =(num1 , num2 )=> ( num1 + num2 )


// const add =(num1 , num2 )=> ({
// username: "hitesh"
// })//undefined

// console.log(add(4,5))