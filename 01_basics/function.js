//+++++++++  function ++++++++//
// console.log("k");
// console.log("h");
// console.log("u");
// console.log("s");
// console.log("h");
// console.log("i");

// function sayname() {
//     console.log("k");
//     console.log("h");
//     console.log("u");
//     console.log("s");
//     console.log("h");
//     console.log("i");

// }
// sayname()


// function add (number1,number2){
// // let result = number1 + number2
// // // console.log("hitesh")
// // return result
// return number1 + number2 
// }
//  const result = add(3,8)

// //  console.log(result)

// function login (username= "unified mentor intern"){
// if (!username){
// console.log("please eneter username ")
// return
// }

//     return`${username} just logged in `
// }
// console.log(login("hitesh"));
//when you do not enter any value it returns undefined 


//Immediately invoked function//

// (function chai() {
//     // named IIFE
//     console.log(`DB CONNECTED`)
// })();
// function that imideatly excutes it self 
// global scope pollution  se problem hoti he  to us global scope ke polution ko hatane ke liye use hota he IIFE
// chai()
// ((name) => {
//     console.log(`DB CONNECTED TWO ${name}`)
// })(`hitesh`)

//How does javascript works behind the scene
/* excution context
      {} globalexcution context ( in this var) 
       single threaded 
         Functional excution context
         eval excution context 


{}-- memory creation phase (variable evry thing locate)
excution phase (excution of everthing )
          */
// let val1 = 10
// let val2 = 5
// function add(num1 , num2 ) {
//     let total = num1 + num2
//     return total
// }
// let r2 = add(val1, val2)
// let r1 = add(10,5)

/* global excution 
      |
    this    
    | 
    memory phase 
    val1 - undefined 
    val2 - undefined 
    add= defination  
    
    result 1 = undef 
    result 2 = undef
     |
      excution phase 
       val 1 = 10 
       val 2 = 5
        add num = nothing 
        */

        /* call stack 
        one()                       // lifo 
        two()*/

         // Control flow in javascript
         // IF 
//       const userlog = true

//       const temp =32

//       if (temp<50){
//         console.log("welcome to deep learn ")
//       }
//       else {
//         console.log("username is not defined")
//       }
// console.log("Thank You")


// const score = 200
// if (score> 100){
//     const power ="fly"
//     console.log(`User Power: ${power}`)

// }

//  console.log(`User Power: ${power}`)


// const baln =10
// if (baln > 500) console.log("test")
// else{
//     console.log("SORRY we can not find this")
// }
// const balance = 4555
// if
//   (  balance < 500){
//     console.log("yes")

//   } else if (balance  == 50 ){
//     console.log("no it not ")
//   }
//   else if (balance === 45585){
//     console.log("perfect")
//   }
//   else{
//     console.log("bye")
//   }



// const user = true 
// const debit = true 
// if (user && debit) {
//     console.log("Your Welcome")
// }

 

// const month = 15
// switch (month) {
//     case 1:
//         console.log("jan")
//         break;
//     case 2 :
//         console.log("fab")
//         break;
//     case  3:
//         console.log("march")
//         break;
//     case "4":
//         console.log("apr")
//         break;
//     case 5:
//         console.log("may")
//         break;
//     case 6:
//         console.log("june")
//         break;
//     case 7:
//         console.log("july")
//         break;
//     case 8:
//         console.log("aug")
//         break;
   
//     case 9:
//         console.log("sep")
//         break;
//     case 10:
//         console.log("oct")
//         break;
//     case 11:
//         console.log("nov")
//         break;
//     case 12:
//         console.log("dec")
//         break;

//     default:
//         console.log("check your answer")
//         break;
// }


// truthy or faulty value 
// const email =""
// if (email){
//     console.log("user email is ready")
// }
// else {
//     console.log("you do not have the email accsess")
// }




///falsy 


// false , 0, -0, bigint(0n), empty string . null. undef ,NaN
//truthy : "0" , 'false', " ", [], {},function (){}

// if (email.length===0){
//     console.log("empty")
// }

// false ==0
// true
// false===0
// false 



//nullish coalescing operator (??) : null undef 
// let val1 ;
// val1 = 5 ??  10
// val1 = null?? 10



// console.log(val1)

//ternary opp
// condition ? ture: false 



// const ice = 100
// ice<= 80 ? console.log("80"): console.log("not")

