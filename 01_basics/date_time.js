//1970 jan-1 
/*  js date objects represent a single moment in time in a plateform independent formate .
represents milisecond 

 */



let newDate  = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getFullYear()+1);
console.log(newDate.getDay());


 console.log(`${newDate.getFullYear()}and the time is ${newDate.getTime()}` )


 newDate.toLocaleString('default', {
    weekday: "long"


 })
console.log(newDate.toLocaleString())



