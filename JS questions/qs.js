 function printNumber (n){
    for(let i = 1; i<=n;i++){
        console.log(i)
    }
 }
 printNumber(5)



function evenOrOdd(num){
    if(num%2===0){
        console.log ("Even");
    }else{
        console.log("Odd")
    }
}
evenOrOdd(13+9);



function SumArr(arr){
    let sum = 0;
  for(i = 0; i< arr.length;i++){
 console.log(sum = sum + arr[i])
  }
}
SumArr([24,23,22,21])

function maxNumber (arr){
let max = arr[0]
for(let i = 0; i < arr.length;i++){
    if(arr[i]>max){
max = arr[i]
    }
}
return max;
}

console.log(maxNumber($[1,2,3,4,5,9,78]))



function secondLargest(arr) {
    let largest = - Infinity;
    let second = - Infinity;

    for (i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            second = largest;
            largest = arr[i];



        }else if (arr[i]>second && arr[i]!==largest){
second= arr[i]
        }
    }
    return second;
}

console.log(secondLargest([43,567,87.7,67,788,988]))



function CountLetters(str){
    let result={};

    for (i = 0; i < str.length;i++){
        let letter = str[i]


        if(result[letter]){
            result[letter] = result[letter] + 1 ;
        }else{
            result[letter]=1;
        }
    }
    return result
}
console.log(CountLetters("KHUSHI"))




 // console.log("Hello World")


function sum(a, b) {
    const sum = a + b;
    console.log(" Sum is", sum)

}
sum(453, 34);
sum(53, 4);
sum(-453, -34);
sum(1.2, 78)



function ractangleArea(len, wid){
    if(len<=0){
        console.log("Length Value is not  Valid");
        
    }
   else if(wid<=0){
      console.log("Width Value is not valid ");
        
    }
    else{
    const area = len * wid
    console.log("area is :",area)
    }
}
ractangleArea(2,3)
ractangleArea(-23,3)
ractangleArea(3,-93)

function oddOrEven(a){
const num = a % 2
if (num !== 0){
      console.log( a +' is Odd')
}
else {
    console.log(a + " is Even")
}
}
oddOrEven(4)
function oddOrEven(a){
const num = a % 2
if (num === 0){
      console.log( a +' is Even')
}
else {
    console.log(a + " is Odd")
}
}
oddOrEven(4)


function evenOrOdd (a){
    return a % 2 === 0? "even": "odd"
}
console.log("3 is",evenOrOdd(3))

function Smallest(a,b,c){
    if (a<b && a<c ){
   return a ;
   
    }
    else if (b<a && b<c ){
   return b;
   
    }
   else if (c<a && c<b ){
   return c ;
   
    }
     else {
    return a;
     }
   }
   
   console.log( "The Smallest Number(-5,4,3) Is",Smallest(-5,4,3))
   console.log( "The Smallest Number(-1,-6,9) Is",Smallest(-1,-6,9))
   
   console.log( "The Smallest Number(1,1,1) Is",Smallest(1,1,1))
   console.log( "The Smallest Number(1,1,1) Is",Smallest(3,3,1))