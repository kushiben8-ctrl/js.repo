//for loop break and continue



// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element== 5 ) {
        //console.log("5 IS BEST")
    // }
   // console.log(element);
    
// } 
// table print 

// for (let i = 1; i <= 10; i++) {
//     console.log(`outloop ${i}`);
//   for(let t = 1 ;t <= 10; t++){
// //console.log(`inner loop ${t} and inner loop ${i}`)
// console.log(i + '*' + t + " = "+ i*t )
//   }
    
// }
  

// let arrnew = [" he ", "she", "they"]
// console.log(arrnew.length)
//     for(let i = 0 ; i < arrnew.length ; i++){
//     const element = arrnew[i]
//     console.log(element)

// }



// break and countinue
// for (let i= 1; i<= 10; i++ ){
//     if (i === 5 ){
//         console.log(" detected 5 ")
//       continue;
    
//     }
//  console.log (`Value of i is ${i}`)

// }
// for (let i= 1; i<= 10; i++ ){
//     if (i === 5 ){
//         console.log(" detected 5 ")
//       break;
    
//     }
//  console.log (`Value of i is ${i}`)

// }

// let a = 2

// while(a <= 2){
// console.log(" yes ")
// a = a + 2
// }
// let a = 1
// do {
// console.log(a)
// a++
// }
// while(a<=10)

// const arr =[1,2,3,4,5]

// for (const num of arr) {
//     console.log(num)
// }

// const string = "hello world"
// for (const greet of string ){
//     console.log ( "hello world ")
// }
// Maps 
// const map = new Map()
// map.set('IN',"india")
// console.log(map)
// //  Map(1) {'IN' => 'india'}[[Entries]]0: {"IN" => "india"}size: 1[[Prototype]]: Map
// for (const [key, value] of map) {
//     console.log(key, ':-', value)
// }

// const objects = {
//     game1:'nfs',
//     game2:'khu'
// }
// for (const [key, value] of object) {

//      console.log(key, ':-', value)
//  }


// const myobj = {
//     js:'javascript',
//     cpp: 'c++'
// }


// for (const key in myobj) {
  
//     console.log(`${key} is short cut for ${myobj[key]}`)
// }

// const pro =["js", "css"]
// for (const key in pro) {

//        console.log(`${key} is short cut for ${pro[key]}`)
    
// }
// const code= [1,2,3,4,5]

// code.forEach(element => {
//     console.log(code)
// });

// code.forEach( function  (val){
// console.log(val)
// })  
// code.forEach( (item) =>{
// console.log(item)
// })
// function printMe (item){
//     console.log(item)
// }
// code.forEach(printMe)



// code.forEach((item,index,arr)=>{
//     console.log(item, index, arr )
// })
// const code2 =[
//     {
//         lang: "js",
//         langfile:"javascript"
//     },
//       {
//         lang: "html",
//         langfile:"indexhtml"
//     },
//       {
//         lang: "java",
//         langfile:"java"
//     },


// ]
// code2.forEach((item)=>{

// console.log(item.lang);

// })
//filter map and reduce



// const code= [1,2,3,4,5]
// code.forEach((item)=> {
//     console.log(item);
//     return item
    
// })
// console.log(code)

// const code= [1,2,3,4,5]


// //  const newcode = code.filter((num)=> 
// //  num > 1 
// //  )
// const newNum = []



// code.forEach((num)=> {
//     if (num > 4 ){
//         newNum.push(num)
//     }
// })
//  console.log(newNum);
